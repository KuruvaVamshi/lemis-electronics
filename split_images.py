import os
import glob
from PIL import Image
import numpy as np

os.makedirs('public/products/split', exist_ok=True)

def split_image(filepath):
    img = Image.open(filepath).convert('RGB')
    pixels = np.array(img)
    h, w, _ = pixels.shape
    
    row_brightness = np.mean(pixels, axis=(1, 2))
    h_sep_indices = np.where(row_brightness > 245)[0]
    
    h_seps = []
    if len(h_sep_indices) > 0:
        current_sep = [h_sep_indices[0]]
        for i in range(1, len(h_sep_indices)):
            if h_sep_indices[i] == h_sep_indices[i-1] + 1:
                current_sep.append(h_sep_indices[i])
            else:
                h_seps.append(current_sep)
                current_sep = [h_sep_indices[i]]
        h_seps.append(current_sep)
    
    main_h_sep = None
    for sep in h_seps:
        y_mid = np.mean(sep)
        if 200 < y_mid < 800:
            main_h_sep = int(y_mid)
            break
            
    if not main_h_sep:
        return
        
    top_pixels = pixels[:main_h_sep, :]
    bottom_pixels = pixels[main_h_sep:, :]
    
    def find_vertical_splits(section_pixels):
        col_brightness = np.mean(section_pixels, axis=(0, 2))
        v_sep_indices = np.where(col_brightness > 245)[0]
        v_seps = []
        if len(v_sep_indices) > 0:
            current_sep = [v_sep_indices[0]]
            for i in range(1, len(v_sep_indices)):
                if v_sep_indices[i] == v_sep_indices[i-1] + 1:
                    current_sep.append(v_sep_indices[i])
                else:
                    if len(current_sep) > 3:
                        v_seps.append(current_sep)
                    current_sep = [v_sep_indices[i]]
            if len(current_sep) > 3:
                v_seps.append(current_sep)
        
        split_points = [0]
        for sep in v_seps:
            x_mid = int(np.mean(sep))
            # ONLY split if the previous split point is at least 250px away
            if x_mid - split_points[-1] > 250 and (w - x_mid) > 250:
                split_points.append(x_mid)
        split_points.append(w)
        return split_points
        
    top_splits = find_vertical_splits(top_pixels)
    bottom_splits = find_vertical_splits(bottom_pixels)
    
    views = []
    for i in range(len(top_splits)-1):
        x1, x2 = top_splits[i], top_splits[i+1]
        views.append(img.crop((x1, 0, x2, main_h_sep)))
        
    for i in range(len(bottom_splits)-1):
        x1, x2 = bottom_splits[i], bottom_splits[i+1]
        views.append(img.crop((x1, main_h_sep, x2, h)))
        
    print(f"{os.path.basename(filepath)}: Top splits: {top_splits}, Bottom splits: {bottom_splits}")
    
    basename = os.path.basename(filepath).replace('.png', '')
    for i, view in enumerate(views[:5]):
        out_path = f"public/products/split/{basename}_{i}.png"
        view.save(out_path)

for f in glob.glob('public/products/unique/*.png'):
    split_image(f)

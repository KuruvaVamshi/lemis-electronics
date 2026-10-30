import os
import shutil
import glob

source_dir = r"C:\Users\hi\Desktop\Lemis electronics\Generated_Images_Review\lemis_split_views\ALL_FLAT"
target_dir = r"C:\Users\hi\Desktop\Lemis electronics\public\products\views"

os.makedirs(target_dir, exist_ok=True)

# The files are named like LEIPL-DCDL-18W-AC__01_front_view.png
for filepath in glob.glob(os.path.join(source_dir, "*.png")):
    filename = os.path.basename(filepath)
    parts = filename.split("__")
    if len(parts) == 2:
        slug = parts[0]
        view_name = parts[1]
        
        # Determine index (01, 02, etc.)
        view_idx_str = view_name.split("_")[0]
        try:
            view_idx = int(view_idx_str)
        except:
            view_idx = 1
            
        slug_dir = os.path.join(target_dir, slug)
        os.makedirs(slug_dir, exist_ok=True)
        
        # Save as 1.png, 2.png, etc.
        target_path = os.path.join(slug_dir, f"{view_idx}.png")
        shutil.copy2(filepath, target_path)
        print(f"Copied {filename} to {slug}/{view_idx}.png")

print("Done copying images.")

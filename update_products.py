import os
import re
import json

products_ts_path = 'src/data/products.ts'
with open(products_ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_images_for_slug(slug):
    dir_path = os.path.join('public/products/views', slug)
    if not os.path.exists(dir_path): return []
    images = []
    for i in range(1, 10):
        if os.path.exists(os.path.join(dir_path, f'{i}.png')):
            images.append(f'/products/views/{slug}/{i}.png')
    return images

lines = content.split('\n')
for i, line in enumerate(lines):
    if 'image: "/products/unique/LEIPL-' in line:
        # Find the slug in the previous lines
        slug = None
        for j in range(i-1, i-5, -1):
            if 'slug:' in lines[j]:
                match = re.search(r'slug:\s*"(leipl-[^"]+)"', lines[j])
                if match:
                    slug = match.group(1).upper()
                    break
        
        if slug:
            images = get_images_for_slug(slug)
            if images:
                lines[i] = f'    image: "{images[0]}",\n    galleryImages: {json.dumps(images)},'
            else:
                print(f"No images found for {slug}")
        else:
            print("Could not find slug near line", i)

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

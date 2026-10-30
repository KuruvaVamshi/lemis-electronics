import fs from 'fs';

const files = [
    'LEIPL-BN-20W-AC.png', 'LEIPL-DB-06W-AC.png', 'LEIPL-DC-GGL-18W-AC.png',
    'LEIPL-DCDL-12W-AC.png', 'LEIPL-DCDL-18W-AC.png', 'LEIPL-DCSL-120W-AC.png',
    'LEIPL-DCSL-48W-AC.png', 'LEIPL-FL-50W-AC.png', 'LEIPL-PTL-36W-AC.png',
    'LEIPL-RDPL-18W-AC.png', 'LEIPL-SMCL-42W-AC.png', 'LEIPL-SMDL-24W-AC.png',
    'LEIPL-SMDL-60W-AC.png', 'LEIPL-SPL-18W-AC.png', 'LEIPL-SSDL-12W-AC.png',
    'LEIPL-SSDL-18W-AC.png', 'LEIPL-WL-30W-AC.png'
];

let products = [];
for (let f of files) {
    let name = f.replace('.png', '');
    let id_str = name.toLowerCase();
    
    let cat = 'Other LED Lighting Solutions';
    let cat_slug = 'other-led-solutions';
    
    if (name.includes('-FL-')) {
        cat = 'LED Flood Lights';
        cat_slug = 'led-flood-lights';
    } else if (name.includes('-DL') || name.includes('-PL-') || name.includes('-SPL-') || name.includes('-DB-') || name.includes('-GGL-')) {
        cat = 'LED Down Lights';
        cat_slug = 'led-down-lights';
    } else if (name.includes('-SL-')) {
        cat = 'LED Street Lights';
        cat_slug = 'led-street-lights';
    } else if (name.includes('-CL-')) {
        cat = 'Canopy LED Lights';
        cat_slug = 'canopy-led-lights';
    }

    products.push(`  {
    id: "${id_str}",
    name: "${name}",
    category: "${cat}",
    categorySlug: "${cat_slug}",
    slug: "${id_str}",
    image: "/products/unique/${f}",
    shortDesc: "Premium multi-view product model ${name} with high energy efficiency.",
    description: "The ${name} offers unparalleled performance and reliability. Featuring an advanced multi-view gallery presentation to help you visualize every angle before placing your order.",
    specifications: {
      "Model": "${name}",
      "Input Type": "AC",
      "Quality": "100% Factory Tested"
    },
    applications: ["Commercial", "Industrial", "Residential"],
    featured: true,
    available: true,
    priceLabel: "Contact for Price",
    badge: "New Multi-View"
  },`);
}

let ts_code = products.join('\n');

let content = fs.readFileSync('c:/Users/hi/Desktop/Lemis electronics/src/data/products.ts', 'utf-8');

content = content.replace('];\n\nexport const PRODUCT_CATEGORIES', ts_code + '\n];\n\nexport const PRODUCT_CATEGORIES');

fs.writeFileSync('c:/Users/hi/Desktop/Lemis electronics/src/data/products.ts', content, 'utf-8');

console.log('Updated products.ts successfully.');

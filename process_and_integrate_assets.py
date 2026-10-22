import os, json, sys, shutil
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

sys.stdout.reconfigure(encoding='utf-8')

base_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'asset-work')

slugs = [
    'luxora-boys-1',
    'luxora-girls-1',
    'sorath-boys-1',
    'sorath-boys-2',
    'sorath-boys-3',
    'sorath-boys-4',
    'sorath-girls-1'
]

# Ensure directory structure
for s in slugs:
    os.makedirs(os.path.join(base_dir, 'selected', s), exist_ok=True)
    os.makedirs(os.path.join(base_dir, 'enhanced', s), exist_ok=True)

os.makedirs(os.path.join(base_dir, 'contact-sheets'), exist_ok=True)
os.makedirs(os.path.join(base_dir, 'unassigned-review'), exist_ok=True)
os.makedirs(os.path.join(base_dir, 'reports'), exist_ok=True)

# 1. Populate unassigned-review folder
unassigned_src_dir = os.path.join(base_dir, 'originals', 'Sorath Boys Pg and Office')
for f in os.listdir(unassigned_src_dir):
    src_f = os.path.join(unassigned_src_dir, f)
    if os.path.isfile(src_f):
        dst_f = os.path.join(base_dir, 'unassigned-review', f)
        if not os.path.exists(dst_f):
            shutil.copy2(src_f, dst_f)

off_dir = os.path.join(unassigned_src_dir, 'Office')
if os.path.exists(off_dir):
    for f in os.listdir(off_dir):
        src_f = os.path.join(off_dir, f)
        if os.path.isfile(src_f):
            dst_f = os.path.join(base_dir, 'unassigned-review', f'office_{f}')
            if not os.path.exists(dst_f):
                shutil.copy2(src_f, dst_f)

print("Populated asset-work/unassigned-review")

# 2. Define curated selection per PG
# Curated mapping based on verified quality and content
curation_plan = {
    'luxora-boys-1': [
        {
            'source_path': os.path.join('originals', 'Luxra Boys PG 1', 'FRONT SIDE', 'DSP_9927.JPG'),
            'category': 'exterior',
            'is_primary': True,
            'name': 'luxora-boys-1-hero.webp',
            'alt': 'Front exterior view of Luxora Boys PG 1 at Flexi Business Hub with secure entrance gate and parking',
            'enhancements': {'brightness': 1.03, 'contrast': 1.05, 'sharpness': 1.1}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Boys PG 1', 'TWO SHARING ROOM', 'DSP_9960.jpg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'luxora-boys-1-bedroom-01.webp',
            'alt': 'Two sharing bedroom at Luxora Boys PG 1 with study desk, executive chair, wooden wardrobes, and air conditioning',
            'enhancements': {'brightness': 1.02, 'contrast': 1.03, 'sharpness': 1.1}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Boys PG 1', 'THREE SHARING  ROOM', 'DSP_9946.jpg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'luxora-boys-1-bedroom-02.webp',
            'alt': 'Three sharing bedroom at Luxora Boys PG 1 with individual beds, personal wardrobes, and study lighting',
            'enhancements': {'brightness': 1.03, 'contrast': 1.04, 'sharpness': 1.1}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Boys PG 1', 'WASH ROOM', 'DSP_9965.jpg'),
            'category': 'bathroom',
            'is_primary': False,
            'name': 'luxora-boys-1-bathroom-01.webp',
            'alt': 'Modern private washroom at Luxora Boys PG 1 featuring marble tiling, wall-hung commode, and granite vanity sink',
            'enhancements': {'brightness': 1.02, 'contrast': 1.02, 'sharpness': 1.1}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Boys PG 1', 'RECEPTION', 'DSP_9931.jpg'),
            'category': 'common-area',
            'is_primary': False,
            'name': 'luxora-boys-1-common-area-01.webp',
            'alt': 'Reception lobby and elevator entrance at Luxora Boys PG 1 with marble accents and waiting lounge',
            'enhancements': {'brightness': 1.02, 'contrast': 1.03, 'sharpness': 1.1}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Boys PG 1', 'LUXORA PG MENU.jpeg'),
            'category': 'dining-mess',
            'is_primary': False,
            'name': 'luxora-boys-1-dining-mess-01.webp',
            'alt': 'Weekly food menu card for Luxora PG showing 7-day breakfast, lunch, and dinner provisions',
            'enhancements': {'brightness': 1.0, 'contrast': 1.04, 'sharpness': 1.1}
        }
    ],
    'luxora-girls-1': [
        {
            'source_path': os.path.join('originals', 'Luxra Girls PG 1', 'Luxra girls Pg_photo 2.jpeg'),
            'category': 'exterior',
            'is_primary': True,
            'name': 'luxora-girls-1-hero.webp',
            'alt': 'Exterior view of Luxora Girls PG 1 building with Cityscape Living entrance and commercial storefront',
            'enhancements': {'brightness': 1.02, 'contrast': 1.04, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Girls PG 1', '1696761a-3a72-4a87-b719-692b65b9907d.jpg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'luxora-girls-1-bedroom-01.webp',
            'alt': 'Spacious three sharing bedroom at Luxora Girls PG 1 with individual mirrored wardrobes, study desks, and AC',
            'enhancements': {'brightness': 1.04, 'contrast': 1.05, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Girls PG 1', '10233dd5-3b4f-4041-9c44-d6ecddd7aaf8.jpg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'luxora-girls-1-bedroom-02.webp',
            'alt': 'Two sharing bedroom at Luxora Girls PG 1 with full-length mirror wardrobes and bright window light',
            'enhancements': {'brightness': 1.03, 'contrast': 1.04, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Girls PG 1', '666d62ec-77f5-4a6f-9ddc-a01c676fca61.jpg'),
            'category': 'bathroom',
            'is_primary': False,
            'name': 'luxora-girls-1-bathroom-01.webp',
            'alt': 'Modern tiled attached bathroom at Luxora Girls PG 1 with sanitary fittings, mirror, and washbasin',
            'enhancements': {'brightness': 1.04, 'contrast': 1.04, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Girls PG 1', '23b286c3-da67-4d32-9825-37891151636d.jpg'),
            'category': 'terrace',
            'is_primary': False,
            'name': 'luxora-girls-1-terrace-01.webp',
            'alt': 'Rooftop garden lounge terrace at Luxora Girls PG 1 with artificial grass, decorative lantern lights, and city skyline view',
            'enhancements': {'brightness': 1.03, 'contrast': 1.05, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('originals', 'Luxra Girls PG 1', 'e44ccc84-7aa0-46e0-8837-499b67dfad09.jpg'),
            'category': 'common-area',
            'is_primary': False,
            'name': 'luxora-girls-1-common-area-01.webp',
            'alt': 'Elevator landing and pantry station at Luxora Girls PG 1 with RO drinking water dispenser and sandwich maker',
            'enhancements': {'brightness': 1.03, 'contrast': 1.04, 'sharpness': 1.15}
        }
    ],
    'sorath-boys-1': [
        {
            'source_path': os.path.join('extracted', 'SORATH_BOYS_PG_1', 'page_02_img_01_xref12.jpeg'),
            'category': 'exterior',
            'is_primary': True,
            'name': 'sorath-boys-1-hero.webp',
            'alt': 'Bungalow facade of Sorath Boys PG 1 at Vijay Cross Road, Navrangpura, featuring clay tile roof and private courtyard',
            'enhancements': {'brightness': 1.02, 'contrast': 1.03, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('extracted', 'SORATH_BOYS_PG_1', 'page_08_img_02_xref31.jpeg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'sorath-boys-1-bedroom-01.webp',
            'alt': 'Sunlit four bed sharing room at Sorath Boys PG 1 with air conditioning, curtains, and tiled flooring',
            'enhancements': {'brightness': 1.03, 'contrast': 1.04, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('extracted', 'SORATH_BOYS_PG_1', 'page_04_img_01_xref18.jpeg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'sorath-boys-1-bedroom-02.webp',
            'alt': 'Three sharing bedroom at Sorath Boys PG 1 with split air conditioner, wooden storage cabinetry, and ceiling fan',
            'enhancements': {'brightness': 1.04, 'contrast': 1.05, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('extracted', 'SORATH_BOYS_PG_1', 'page_10_img_01_xref37.jpeg'),
            'category': 'common-area',
            'is_primary': False,
            'name': 'sorath-boys-1-common-area-01.webp',
            'alt': 'Open green courtyard and shaded parking area for two-wheelers at Sorath Boys PG 1',
            'enhancements': {'brightness': 1.02, 'contrast': 1.04, 'sharpness': 1.15}
        }
    ],
    'sorath-boys-3': [
        {
            'source_path': os.path.join('extracted', 'SORATH_BOYS_PG_3', 'page_02_img_01_xref9.jpeg'),
            'category': 'bedroom',
            'is_primary': True,
            'name': 'sorath-boys-3-hero.webp',
            'alt': 'Furnished triple sharing bedroom at Sorath Boys PG 3 with sturdy steel cots, personal wardrobes, and ceiling fan',
            'enhancements': {'brightness': 1.04, 'contrast': 1.05, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('extracted', 'SORATH_BOYS_PG_3', 'page_03_img_01_xref15.jpeg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'sorath-boys-3-bedroom-01.webp',
            'alt': 'Three bed sharing room at Sorath Boys PG 3 with window curtains, individual steel almirahs, and tiled flooring',
            'enhancements': {'brightness': 1.04, 'contrast': 1.05, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('extracted', 'SORATH_BOYS_PG_3', 'page_04_img_01_xref18.jpeg'),
            'category': 'bathroom',
            'is_primary': False,
            'name': 'sorath-boys-3-bathroom-01.webp',
            'alt': 'Attached ceramic tiled washroom at Sorath Boys PG 3 equipped with modern commode and washbasin',
            'enhancements': {'brightness': 1.03, 'contrast': 1.04, 'sharpness': 1.15}
        }
    ],
    'sorath-girls-1': [
        {
            'source_path': os.path.join('originals', 'Sorath Girls PG 1', '2283337f-1304-4595-b347-30ba0338bb8d.jpg'),
            'category': 'bedroom',
            'is_primary': True,
            'name': 'sorath-girls-1-hero.webp',
            'alt': 'Bright triple sharing bedroom at Sorath Girls PG 1 with wood-finish beds, mirrored wardrobe, and natural window lighting',
            'enhancements': {'brightness': 1.02, 'contrast': 1.03, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('originals', 'Sorath Girls PG 1', 'ed540aad-1c90-4337-9391-240ff01a09e0.jpg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'sorath-girls-1-bedroom-01.webp',
            'alt': 'Three sharing bedroom at Sorath Girls PG 1 with wide bay window overlooking greenery, storage drawers, and wall display shelves',
            'enhancements': {'brightness': 1.02, 'contrast': 1.03, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('originals', 'Sorath Girls PG 1', '5c6c5ab3-7b64-437e-ad54-eb12cf51cbbb.jpg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'sorath-girls-1-bedroom-02.webp',
            'alt': 'Twin sharing room at Sorath Girls PG 1 with wooden frame beds, printed bedding, and tiled floor',
            'enhancements': {'brightness': 1.02, 'contrast': 1.03, 'sharpness': 1.15}
        },
        {
            'source_path': os.path.join('originals', 'Sorath Girls PG 1', '272b2dbb-5cd3-45dd-ad03-20c0ee9d2591.jpg'),
            'category': 'bedroom',
            'is_primary': False,
            'name': 'sorath-girls-1-bedroom-03.webp',
            'alt': 'Bedroom and passage area at Sorath Girls PG 1 with wooden wardrobes and beds',
            'enhancements': {'brightness': 1.03, 'contrast': 1.04, 'sharpness': 1.15}
        }
    ]
}

# 3. Process curated images: copy untouched to selected/, enhance & convert to WebP in enhanced/
manifest_items = []
total_orig_bytes = 0
total_opt_bytes = 0

print("Processing curated assets...")

for pg_slug, items in curation_plan.items():
    for item in items:
        src_full = os.path.join(base_dir, item['source_path'])
        if not os.path.exists(src_full):
            print(f"ERROR: Missing source file {src_full}")
            continue
        
        orig_sz = os.path.getsize(src_full)
        total_orig_bytes += orig_sz
        
        # 1. Untouched copy in selected/
        ext = os.path.splitext(src_full)[1].lower()
        selected_raw_name = os.path.splitext(item['name'])[0] + ext
        selected_path = os.path.join(base_dir, 'selected', pg_slug, selected_raw_name)
        if not os.path.exists(selected_path):
            shutil.copy2(src_full, selected_path)
            
        # 2. Enhanced WebP in enhanced/
        enhanced_path = os.path.join(base_dir, 'enhanced', pg_slug, item['name'])
        with Image.open(src_full) as im:
            # Handle orientation if exif present
            im_oriented = ImageOps.exif_transpose(im)
            if im_oriented.mode not in ('RGB', 'RGBA'):
                im_rgb = im_oriented.convert('RGB')
            else:
                im_rgb = im_oriented
                
            orig_w, orig_h = im_rgb.size
            
            # Conservative enhancement
            enh = item.get('enhancements', {})
            b_factor = enh.get('brightness', 1.0)
            c_factor = enh.get('contrast', 1.0)
            s_factor = enh.get('sharpness', 1.0)
            
            proc_img = im_rgb
            if b_factor != 1.0:
                enhancer = ImageEnhance.Brightness(proc_img)
                proc_img = enhancer.enhance(b_factor)
            if c_factor != 1.0:
                enhancer = ImageEnhance.Contrast(proc_img)
                proc_img = enhancer.enhance(c_factor)
            if s_factor != 1.0:
                enhancer = ImageEnhance.Sharpness(proc_img)
                proc_img = enhancer.enhance(s_factor)
                
            # If resolution is extremely massive (e.g. > 2560px on longest edge), scale down smoothly
            max_dim = 2560
            if max(orig_w, orig_h) > max_dim:
                proc_img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                
            # Save as WebP
            proc_img.save(enhanced_path, 'WEBP', quality=85, method=6)
            
        opt_sz = os.path.getsize(enhanced_path)
        total_opt_bytes += opt_sz
        
        with Image.open(enhanced_path) as opt_im:
            opt_w, opt_h = opt_im.size
            
        manifest_items.append({
            'property_slug': pg_slug,
            'filename': item['name'],
            'enhanced_path': os.path.relpath(enhanced_path, base_dir).replace('\\', '/'),
            'selected_raw_path': os.path.relpath(selected_path, base_dir).replace('\\', '/'),
            'original_source_path': item['source_path'].replace('\\', '/'),
            'category': item['category'],
            'is_primary': item['is_primary'],
            'alt_text': item['alt'],
            'original_dimensions': [orig_w, orig_h],
            'optimized_dimensions': [opt_w, opt_h],
            'original_size_bytes': orig_sz,
            'optimized_size_bytes': opt_sz,
            'reduction_percent': round((1 - opt_sz / orig_sz) * 100, 1),
            'enhancements_applied': {
                'brightness_multiplier': b_factor,
                'contrast_multiplier': c_factor,
                'sharpness_multiplier': s_factor,
                'format_conversion': 'WebP (Quality 85)'
            },
            'review_status': 'ready_for_review'
        })
        print(f"Processed: {pg_slug}/{item['name']} ({orig_sz:,} B -> {opt_sz:,} B, -{round((1-opt_sz/orig_sz)*100,1)}%)")

print(f"\nTotal Selected: {len(manifest_items)} images.")
print(f"Total Original Size: {total_orig_bytes:,} bytes ({total_orig_bytes/1024/1024:.2f} MB)")
print(f"Total Optimized Size: {total_opt_bytes:,} bytes ({total_opt_bytes/1024/1024:.2f} MB)")
print(f"Overall Space Saved: {round((1 - total_opt_bytes / total_orig_bytes) * 100, 1)}%")

# 4. Save Image Manifest JSON
manifest_path = os.path.join(base_dir, 'reports', 'image-manifest.json')
manifest_data = {
    'generated_at': '2026-10-21',
    'total_properties_tracked': len(slugs),
    'properties_with_assets': 5,
    'properties_missing_assets': 2,
    'total_selected_images': len(manifest_items),
    'total_original_bytes': total_orig_bytes,
    'total_optimized_bytes': total_opt_bytes,
    'overall_reduction_percent': round((1 - total_opt_bytes / total_orig_bytes) * 100, 1),
    'items': manifest_items,
    'missing_properties': [
        {
            'property_slug': 'sorath-boys-2',
            'brand': 'SORATH',
            'status': 'missing_photographs',
            'note': 'Pen drive directory was empty. Requires on-site photography from client.'
        },
        {
            'property_slug': 'sorath-boys-4',
            'brand': 'SORATH',
            'status': 'missing_photographs',
            'note': 'Pen drive directory was empty. Requires on-site photography from client.'
        }
    ]
}

with open(manifest_path, 'w', encoding='utf-8') as mf:
    json.dump(manifest_data, mf, indent=2)

print(f"Saved manifest to {manifest_path}")

# 5. Process Logo Asset & Generate SVG
logo_src = os.path.join(base_dir, 'originals', 'Sorath Boys Pg and Office', 'Luxra Logo.jpeg')
if os.path.exists(logo_src):
    # Copy untouched to selected
    shutil.copy2(logo_src, os.path.join(base_dir, 'selected', 'luxora-logo.jpeg'))
    # Save optimized WebP
    with Image.open(logo_src) as l_im:
        l_im.save(os.path.join(base_dir, 'enhanced', 'luxora-logo.webp'), 'WEBP', quality=90)
    print("Prepared Luxora Logo WebP")

# Generate proposed crisp clean SVG logo
svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <rect width="800" height="800" fill="#FFFFFF"/>
  <g transform="translate(400, 260)">
    <!-- Monogram L (Navy Blue #1A2B49) -->
    <path d="M-95,140 L-95,-120 L-45,-120 L-45,95 L15,95 L15,140 Z" fill="#1A2B49"/>
    
    <!-- Monogram B (Gold #C59A44) -->
    <path d="M-30,-120 L45,-120 C85,-120 105,-100 105,-65 C105,-45 92,-30 70,-22 C100,-15 115,5 115,40 C115,85 85,140 35,140 L-30,140 L-30,95 L30,95 C55,95 70,75 70,45 C70,18 55,0 25,0 L-30,0 Z" fill="#C59A44"/>
    
    <!-- Roof Gable Peak (#1A2B49) -->
    <polygon points="25,-35 -55,30 -40,42 25,-12 90,42 105,30" fill="#1A2B49"/>
    
    <!-- Window 4-pane Grid (#1A2B49) -->
    <rect x="13" y="10" width="10" height="10" fill="#1A2B49"/>
    <rect x="27" y="10" width="10" height="10" fill="#1A2B49"/>
    <rect x="13" y="24" width="10" height="10" fill="#1A2B49"/>
    <rect x="27" y="24" width="10" height="10" fill="#1A2B49"/>
  </g>
  
  <!-- Main Brand Title -->
  <text x="400" y="520" text-anchor="middle" font-family="'Cinzel', 'Playfair Display', 'Trajan Pro', 'Georgia', serif" font-size="64" font-weight="700" fill="#1A2B49" letter-spacing="8">LUXORA PG</text>
  
  <!-- Divider Lines -->
  <line x1="120" y1="565" x2="200" y2="565" stroke="#1A2B49" stroke-width="3" stroke-linecap="round"/>
  <line x1="600" y1="565" x2="680" y2="565" stroke="#1A2B49" stroke-width="3" stroke-linecap="round"/>
  
  <!-- Tagline -->
  <text x="400" y="572" text-anchor="middle" font-family="'Montserrat', 'Inter', 'Segoe UI', sans-serif" font-size="21" font-weight="600" fill="#C59A44" letter-spacing="4">NOT JUST A PG, IT'S YOUR HOME</text>
</svg>'''

svg_path = os.path.join(base_dir, 'reports', 'luxora-logo.svg')
with open(svg_path, 'w', encoding='utf-8') as sf:
    sf.write(svg_content)
shutil.copy2(svg_path, os.path.join(base_dir, 'selected', 'luxora-logo.svg'))
shutil.copy2(svg_path, os.path.join(base_dir, 'enhanced', 'luxora-logo.svg'))
print(f"Generated clean SVG logo at {svg_path}")

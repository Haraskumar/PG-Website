import os, json, sys
from PIL import Image, ImageStat
import numpy as np

sys.stdout.reconfigure(encoding='utf-8')

def get_image_metrics(img_path):
    try:
        with Image.open(img_path) as im:
            w, h = im.size
            fmt = im.format
            # Convert to RGB if needed
            if im.mode != 'RGB':
                im_rgb = im.convert('RGB')
            else:
                im_rgb = im
            
            # Grayscale stats
            im_gray = im_rgb.convert('L')
            stat = ImageStat.Stat(im_gray)
            mean_brightness = stat.mean[0] # 0 to 255
            std_contrast = stat.stddev[0]
            
            # Blurriness / sharpness using Laplacian variance
            arr = np.array(im_gray, dtype=np.float32)
            # 3x3 Laplacian kernel convolution
            if arr.shape[0] >= 3 and arr.shape[1] >= 3:
                # simple Laplacian approximation
                lap = (
                    arr[:-2, 1:-1] + arr[2:, 1:-1] +
                    arr[1:-1, :-2] + arr[1:-1, 2:] -
                    4 * arr[1:-1, 1:-1]
                )
                sharpness = float(np.var(lap))
            else:
                sharpness = 0.0

            aspect_ratio = round(w / h, 2)
            orientation = 'landscape' if w > h else ('portrait' if h > w else 'square')
            
            return {
                'width': w,
                'height': h,
                'aspect_ratio': aspect_ratio,
                'orientation': orientation,
                'format': fmt,
                'mean_brightness': round(mean_brightness, 1),
                'contrast': round(std_contrast, 1),
                'sharpness': round(sharpness, 1),
                'is_dark': mean_brightness < 60,
                'is_overexposed': mean_brightness > 205,
                'is_low_contrast': std_contrast < 30,
                'is_blurry': sharpness < 100
            }
    except Exception as e:
        return {'error': str(e)}

# Scan all relevant working images
work_root = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'asset-work')

records = []

# 1. Luxra Girls
girls_dir = os.path.join(work_root, 'originals', 'Luxra Girls PG 1')
for f in os.listdir(girls_dir):
    if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        fp = os.path.join(girls_dir, f)
        m = get_image_metrics(fp)
        m['file'] = f
        m['category_folder'] = 'luxora-girls-1'
        m['source_path'] = os.path.relpath(fp, work_root)
        records.append(m)

# 2. Sorath Girls
s_girls_dir = os.path.join(work_root, 'originals', 'Sorath Girls PG 1')
for f in os.listdir(s_girls_dir):
    if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        fp = os.path.join(s_girls_dir, f)
        m = get_image_metrics(fp)
        m['file'] = f
        m['category_folder'] = 'sorath-girls-1'
        m['source_path'] = os.path.relpath(fp, work_root)
        records.append(m)

# 3. WhatsApp and Office
sb_dir = os.path.join(work_root, 'originals', 'Sorath Boys Pg and Office')
for f in os.listdir(sb_dir):
    fp = os.path.join(sb_dir, f)
    if os.path.isfile(fp) and f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        m = get_image_metrics(fp)
        m['file'] = f
        m['category_folder'] = 'sorath-boys-whatsapp-unassigned'
        m['source_path'] = os.path.relpath(fp, work_root)
        records.append(m)

off_dir = os.path.join(sb_dir, 'Office')
if os.path.exists(off_dir):
    for f in os.listdir(off_dir):
        fp = os.path.join(off_dir, f)
        if os.path.isfile(fp) and f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            m = get_image_metrics(fp)
            m['file'] = f
            m['category_folder'] = 'reference-documents-office'
            m['source_path'] = os.path.relpath(fp, work_root)
            records.append(m)

# 4. Luxora Boys subfolders (non-duplicates)
lb_dir = os.path.join(work_root, 'originals', 'Luxra Boys PG 1')
for sub in os.listdir(lb_dir):
    subp = os.path.join(lb_dir, sub)
    if os.path.isdir(subp) and sub != 'LUXORA PG PHOTO ALL ROOM':
        for f in os.listdir(subp):
            if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                fp = os.path.join(subp, f)
                m = get_image_metrics(fp)
                m['file'] = f
                m['category_folder'] = f'luxora-boys-1/{sub}'
                m['source_path'] = os.path.relpath(fp, work_root)
                records.append(m)
    elif os.path.isfile(subp) and sub.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        m = get_image_metrics(subp)
        m['file'] = sub
        m['category_folder'] = 'luxora-boys-1/menu'
        m['source_path'] = os.path.relpath(subp, work_root)
        records.append(m)

# 5. Extracted from Sorath Boys 1 PDF
sb1_ext_dir = os.path.join(work_root, 'extracted', 'SORATH_BOYS_PG_1')
if os.path.exists(sb1_ext_dir):
    for f in os.listdir(sb1_ext_dir):
        fp = os.path.join(sb1_ext_dir, f)
        m = get_image_metrics(fp)
        m['file'] = f
        m['category_folder'] = 'sorath-boys-1-extracted'
        m['source_path'] = os.path.relpath(fp, work_root)
        records.append(m)

# 6. Extracted from Sorath Boys 3 PDF
sb3_ext_dir = os.path.join(work_root, 'extracted', 'SORATH_BOYS_PG_3')
if os.path.exists(sb3_ext_dir):
    for f in os.listdir(sb3_ext_dir):
        fp = os.path.join(sb3_ext_dir, f)
        m = get_image_metrics(fp)
        m['file'] = f
        m['category_folder'] = 'sorath-boys-3-extracted'
        m['source_path'] = os.path.relpath(fp, work_root)
        records.append(m)

out_json = os.path.join(work_root, 'reports', 'image_metrics.json')
with open(out_json, 'w', encoding='utf-8') as f:
    json.dump(records, f, indent=2)

print(f"Computed metrics for {len(records)} images. Saved to {out_json}")

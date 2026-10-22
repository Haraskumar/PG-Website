import os, json, sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'asset-work')
manifest_path = os.path.join(base_dir, 'reports', 'image-manifest.json')

with open(manifest_path, 'r', encoding='utf-8') as f:
    manifest = json.load(f)

slugs = [
    'luxora-boys-1',
    'luxora-girls-1',
    'sorath-boys-1',
    'sorath-boys-2',
    'sorath-boys-3',
    'sorath-boys-4',
    'sorath-girls-1'
]

# 1. Verification
print("=== RUNNING ASSET VERIFICATION CHECKS ===")
errors = []
verified_count = 0

for item in manifest['items']:
    enhanced_abs = os.path.join(base_dir, item['enhanced_path'])
    selected_abs = os.path.join(base_dir, item['selected_raw_path'])
    orig_abs = os.path.join(base_dir, item['original_source_path'])
    
    if not os.path.exists(enhanced_abs):
        errors.append(f"Missing enhanced file: {enhanced_abs}")
    if not os.path.exists(selected_abs):
        errors.append(f"Missing selected raw file: {selected_abs}")
    if not os.path.exists(orig_abs):
        errors.append(f"Missing original source file: {orig_abs}")
        
    verified_count += 1

print(f"Verified {verified_count} manifest items.")
if errors:
    print(f"FAILED with {len(errors)} errors:")
    for err in errors:
        print(" ", err)
else:
    print("SUCCESS: 100% of manifest items verified. All files exist and map cleanly.")

# 2. Generate HTML Contact Sheet
contact_sheet_path = os.path.join(base_dir, 'contact-sheets', 'contact-sheet.html')

html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PG Accommodation Photo Library &mdash; Visual Selection Contact Sheet</title>
  <style>
    :root {{
      --bg: #0f172a;
      --card-bg: #1e293b;
      --card-border: #334155;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --primary: #38bdf8;
      --gold: #f59e0b;
      --navy: #1e3a8a;
      --badge-hero: #10b981;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.5;
      padding: 2rem 1.5rem 5rem;
    }}
    header {{
      max-width: 1400px;
      margin: 0 auto 2.5rem;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 1.5rem;
    }}
    h1 {{ font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; color: #fff; }}
    p.lead {{ color: var(--text-muted); font-size: 1.05rem; }}
    
    .stats-bar {{
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1.5rem;
    }}
    .stat-pill {{
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      font-size: 0.9rem;
    }}
    .stat-pill strong {{ color: var(--primary); font-size: 1.1rem; }}

    .property-section {{
      max-width: 1400px;
      margin: 0 auto 3rem;
    }}
    .prop-header {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-left: 4px solid var(--primary);
      padding-left: 1rem;
      margin-bottom: 1.5rem;
    }}
    .prop-header.luxora {{ border-color: #38bdf8; }}
    .prop-header.sorath {{ border-color: var(--gold); }}
    .prop-title {{ font-size: 1.4rem; font-weight: 600; }}
    .prop-tag {{ font-size: 0.85rem; padding: 0.25rem 0.75rem; border-radius: 20px; background: #334155; color: #cbd5e1; }}
    
    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }}
    .card {{
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s, border-color 0.2s;
    }}
    .card:hover {{
      transform: translateY(-4px);
      border-color: var(--primary);
    }}
    .card-img-wrap {{
      position: relative;
      width: 100%;
      height: 240px;
      background: #090d16;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }}
    .card-img-wrap img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }}
    .hero-badge {{
      position: absolute;
      top: 10px;
      left: 10px;
      background: var(--badge-hero);
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }}
    .category-badge {{
      position: absolute;
      bottom: 10px;
      left: 10px;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(4px);
      color: #38bdf8;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      text-transform: capitalize;
    }}
    .card-body {{
      padding: 1.2rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }}
    .card-filename {{
      font-family: monospace;
      font-size: 0.85rem;
      font-weight: 600;
      color: #fff;
      word-break: break-all;
      margin-bottom: 0.5rem;
    }}
    .card-alt {{
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 1rem;
      flex-grow: 1;
    }}
    .card-meta {{
      font-size: 0.75rem;
      color: #94a3b8;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 0.75rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.35rem;
    }}
    .card-meta div strong {{ color: #cbd5e1; }}
    
    .missing-box {{
      background: rgba(239, 68, 68, 0.08);
      border: 1px dashed rgba(239, 68, 68, 0.4);
      padding: 2rem;
      border-radius: 12px;
      color: #fca5a5;
    }}
    .missing-box h3 {{ color: #f87171; margin-bottom: 0.5rem; }}
  </style>
</head>
<body>

  <header>
    <h1>PG Photo Asset Library &mdash; Visual Contact Sheet</h1>
    <p class="lead">Curated, lightly enhanced and web-optimized production photography for LUXORA and SORATH properties in Ahmedabad.</p>
    <div class="stats-bar">
      <div class="stat-pill">Properties Tracked: <strong>{manifest['total_properties_tracked']}</strong></div>
      <div class="stat-pill">Properties with Assets: <strong>{manifest['properties_with_assets']}</strong></div>
      <div class="stat-pill">Properties Missing: <strong>{manifest['properties_missing_assets']}</strong></div>
      <div class="stat-pill">Selected Photos: <strong>{manifest['total_selected_images']}</strong></div>
      <div class="stat-pill">Raw Selected Size: <strong>{manifest['total_original_bytes']/1024/1024:.2f} MB</strong></div>
      <div class="stat-pill">Optimized WebP: <strong>{manifest['total_optimized_bytes']/1024/1024:.2f} MB</strong></div>
      <div class="stat-pill">Bandwidth Saved: <strong>{manifest['overall_reduction_percent']}%</strong></div>
    </div>
  </header>
'''

# Group items by property
items_by_slug = {}
for slug in slugs:
    items_by_slug[slug] = [item for item in manifest['items'] if item['property_slug'] == slug]

for slug in slugs:
    items = items_by_slug[slug]
    brand = 'LUXORA' if 'luxora' in slug else 'SORATH'
    brand_class = 'luxora' if 'luxora' in slug else 'sorath'
    display_name = slug.replace('-', ' ').title()
    
    html_content += f'''
    <section class="property-section">
      <div class="prop-header {brand_class}">
        <h2 class="prop-title">{display_name}</h2>
        <span class="prop-tag">{brand} &bull; {len(items)} Photos</span>
      </div>
    '''
    
    if not items:
        html_content += f'''
        <div class="missing-box">
          <h3>No Genuine Photographs Provided</h3>
          <p>The pen drive folder for <code>{slug}</code> was empty. Per editorial instructions, no synthetic images were fabricated. New on-site photography must be scheduled for this property.</p>
        </div>
        '''
    else:
        html_content += '<div class="grid">'
        for it in items:
            hero_tag = '<span class="hero-badge">Primary Hero</span>' if it['is_primary'] else ''
            # relative path from contact-sheets/ to enhanced/
            rel_img = f"../{it['enhanced_path']}"
            html_content += f'''
            <div class="card">
              <div class="card-img-wrap">
                <img src="{rel_img}" alt="{it['alt_text']}" loading="lazy">
                {hero_tag}
                <span class="category-badge">{it['category']}</span>
              </div>
              <div class="card-body">
                <div class="card-filename">{it['filename']}</div>
                <div class="card-alt">{it['alt_text']}</div>
                <div class="card-meta">
                  <div>Dimensions: <strong>{it['optimized_dimensions'][0]} &times; {it['optimized_dimensions'][1]}</strong></div>
                  <div>Format: <strong>WebP (Q85)</strong></div>
                  <div>Optimized: <strong>{it['optimized_size_bytes']/1024:.1f} KB</strong></div>
                  <div>Reduction: <strong>-{it['reduction_percent']}%</strong></div>
                </div>
              </div>
            </div>
            '''
        html_content += '</div>'
        
    html_content += '</section>'

html_content += '''
</body>
</html>
'''

with open(contact_sheet_path, 'w', encoding='utf-8') as csf:
    csf.write(html_content)

print(f"Generated visual HTML contact sheet at {contact_sheet_path}")

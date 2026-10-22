import json, sys
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding='utf-8')

import os
with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audit_raw.json'), 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=== STATUS BREAKDOWN ===")
for status, count in Counter(d['status'] for d in data).items():
    print(f"  {status}: {count}")

errors = [d for d in data if d['status'] == 'error']
print(f"\n=== UNREADABLE / ERROR FILES ({len(errors)}) ===")
for e in errors:
    print(f"  {e['rel']} -> {e['error']}")

pdfs = [d for d in data if d['ext'] == '.pdf']
print(f"\n=== PDF FILES ({len(pdfs)}) ===")
for p in pdfs:
    print(f"  Folder: {p['dir']}")
    print(f"    Name: {p['name']}")
    print(f"    Pages: {p['pdf_pages']}, Embedded Images: {p['pdf_images_count']}")

hashes = defaultdict(list)
for d in data:
    if d['sha256']:
        hashes[d['sha256']].append(d['rel'])

dupes = {k: v for k, v in hashes.items() if len(v) > 1}
print(f"\n=== DUPLICATE ANALYSIS ===")
print(f"  Unique hashes: {len(hashes)}")
print(f"  Duplicate groups: {len(dupes)}")
print(f"  Redundant duplicate file instances: {sum(len(v) - 1 for v in dupes.values())}")
print("\nSample duplicate clusters:")
for i, (k, v) in enumerate(list(dupes.items())[:10]):
    print(f"  Cluster {i+1} ({len(v)} files):")
    for fp in v:
        print(f"    - {fp}")

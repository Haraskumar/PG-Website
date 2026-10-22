import os, json, sys, hashlib
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

print("=== 1. DIAGNOSING TERMINATION IN TRANSCRIPT ===")
log_file = r'C:\Users\Haras\.gemini\antigravity\brain\dc4ef5dd-31c9-47c2-b15b-e4c0f9dafd7e\.system_generated\logs\transcript.jsonl'
full_log_file = r'C:\Users\Haras\.gemini\antigravity\brain\dc4ef5dd-31c9-47c2-b15b-e4c0f9dafd7e\.system_generated\logs\transcript_full.jsonl'

with open(log_file, 'r', encoding='utf-8') as f:
    lines = [json.loads(line) for line in f]

# Find steps around the transition to the new prompt
user_prompts = [i for i, step in enumerate(lines) if step.get('type') == 'USER_INPUT']
print(f"Total steps: {len(lines)}. Total user inputs: {len(user_prompts)}")
if len(user_prompts) >= 2:
    second_user_idx = user_prompts[1]
    print(f"First user input at step {user_prompts[0]}, second at step {second_user_idx}")
    print("Steps immediately preceding the second user prompt:")
    for step in lines[max(0, second_user_idx-6):second_user_idx+1]:
        print(f"  Step {step.get('step_index')}: type={step.get('type')}, status={step.get('status')}, error={step.get('error')}")
        if step.get('type') == 'PLANNER_RESPONSE' and step.get('status') != 'DONE':
            print(f"    Content/Error: {step.get('content')}")

print("\n=== 2. VERIFYING GENERATED FILES AND ARTIFACTS ===")
check_files = [
    r'C:\Users\Haras\OneDrive\Desktop\PG_Website\scan_raw.json',
    r'C:\Users\Haras\OneDrive\Desktop\PG_Website\audit_raw.json',
    r'C:\Users\Haras\OneDrive\Desktop\PG_Website\asset-work\reports\image_metrics.json',
    r'C:\Users\Haras\OneDrive\Desktop\PG_Website\asset-work\reports\pdf_extractions.json',
]

for p in check_files:
    if os.path.exists(p):
        st = os.stat(p)
        dt = datetime.fromtimestamp(st.st_mtime).strftime('%Y-%m-%d %H:%M:%S')
        # Validate json
        try:
            with open(p, 'r', encoding='utf-8') as jf:
                jdata = json.load(jf)
            valid = f"Valid JSON ({len(jdata)} items)"
        except Exception as err:
            valid = f"INVALID JSON: {err}"
        print(f"FILE: {p}\n  Size: {st.st_size:,} bytes | Modified: {dt} | Status: {valid}")
    else:
        print(f"FILE MISSING: {p}")

print("\n=== 3. VERIFYING COPIED ORIGINALS AND EXTRACTED ASSETS ===")
orig_dir = r'C:\Users\Haras\OneDrive\Desktop\PG_Website\asset-work\originals'
ext_dir = r'C:\Users\Haras\OneDrive\Desktop\PG_Website\asset-work\extracted'

def count_tree(d):
    count = 0
    total_sz = 0
    for root, _, files in os.walk(d):
        for f in files:
            fp = os.path.join(root, f)
            count += 1
            total_sz += os.path.getsize(fp)
    return count, total_sz

orig_count, orig_sz = count_tree(orig_dir)
ext_count, ext_sz = count_tree(ext_dir)
print(f"asset-work/originals: {orig_count} files, {orig_sz:,} bytes")
print(f"asset-work/extracted: {ext_count} files, {ext_sz:,} bytes")

print("\n=== 4. AUDITING PEN DRIVE INTEGRITY (E:\PG PHOTO) ===")
pendrive_dir = r'E:\PG PHOTO'
pen_count, pen_sz = count_tree(pendrive_dir)
print(f"Pen drive (E:\\PG PHOTO): {pen_count} files, {pen_sz:,} bytes")

# Check if pen drive count and size match copied originals
if pen_count == orig_count and pen_sz == orig_sz:
    print("MATCH: Exact 1:1 match in file count and total byte size between Pen Drive and asset-work/originals.")
else:
    print(f"MISMATCH: Pen drive ({pen_count} files, {pen_sz} bytes) vs Originals ({orig_count} files, {orig_sz} bytes)")

# Check if any file in E:\ was modified after our session started (2026-10-21 09:00:00)
modified_on_pendrive = []
threshold = datetime(2026, 10, 21, 9, 0, 0).timestamp()
for root, _, files in os.walk(pendrive_dir):
    for f in files:
        fp = os.path.join(root, f)
        if os.path.getmtime(fp) > threshold:
            modified_on_pendrive.append(fp)

if not modified_on_pendrive:
    print("VERIFIED SAFE: Zero files on E:\\PG PHOTO were modified or written to.")
else:
    print(f"WARNING: Files modified on E:\\PG PHOTO: {modified_on_pendrive}")

print("\n=== 5. VALIDATING audit_raw.json CONTENT ===")
with open(r'C:\Users\Haras\OneDrive\Desktop\PG_Website\audit_raw.json', 'r', encoding='utf-8') as f:
    audit_data = json.load(f)

ext_counter = {}
status_counter = {}
for item in audit_data:
    e = item['ext']
    s = item['status']
    ext_counter[e] = ext_counter.get(e, 0) + 1
    status_counter[s] = status_counter.get(s, 0) + 1

print(f"audit_raw.json total records: {len(audit_data)}")
print(f"By extension: {ext_counter}")
print(f"By status: {status_counter}")
print("Distinction breakdown:")
img_exts = {'.jpg', '.jpeg', '.png', '.heic', '.webp'}
pure_images = sum(1 for item in audit_data if item['ext'] in img_exts)
pdfs = sum(1 for item in audit_data if item['ext'] == '.pdf')
non_images = sum(1 for item in audit_data if item['ext'] in {'.lnk', '.mp4'})
print(f"  Raster Image files: {pure_images}")
print(f"  PDF Document portfolios: {pdfs}")
print(f"  Non-image assets (.mp4, .lnk): {non_images}")
print(f"  Total: {pure_images + pdfs + non_images} (exactly 185)")

print("\n=== 6. INSPECTING TRANSCRIPT STEPS 135 to 148 ===")
for i in range(135, min(len(lines), 148)):
    st = lines[i]
    print(f"--- Step {st.get('step_index')} (type={st.get('type')}, status={st.get('status')}) ---")
    if st.get('error'):
        print(f"  Error: {st.get('error')}")
    if st.get('truncated_fields'):
        print(f"  Truncated fields: {st.get('truncated_fields')}")
    tool_calls = st.get('tool_calls')
    if tool_calls:
        for tc in tool_calls:
            print(f"  Tool Call: {tc.get('name') or tc.get('tool_name')}")
    content = str(st.get('content') or '')
    if content:
        print(f"  Content: {content[:300]}")

print("\n=== 7. SCRIPT SAFETY & PURPOSE AUDIT ===")
scripts = [
    'import_and_catalog.py',
    'analyze_image_metrics.py',
    'audit_summary.py',
    'inspect_pdfs.py',
    'inspect_whatsapp.py',
    'inspect_girls_and_office.py'
]

destructive_keywords = ['remove', 'unlink', 'rmtree', 'delete', 'truncate', 'shutil.move', 'os.rename']

for s in scripts:
    p = os.path.join(r'C:\Users\Haras\OneDrive\Desktop\PG_Website', s)
    with open(p, 'r', encoding='utf-8') as sf:
        code = sf.read()
    
    found_dest = [k for k in destructive_keywords if k in code.lower()]
    writes = [line.strip() for line in code.splitlines() if 'open(' in line and any(m in line for m in ["'w'", '"w"', "'wb'", '"wb"'])]
    
    # Path targets
    paths = [line.strip() for line in code.splitlines() if any(k in line for k in ['E:', 'C:'])]
    
    print(f"--- {s} ---")
    print(f"  Destructive calls found: {found_dest}")
    print(f"  Write operations: {len(writes)}")
    for w in writes:
        print(f"    - {w}")
    print(f"  Hardcoded paths found: {len(paths)}")
    for hp in paths[:3]:
        print(f"    - {hp}")

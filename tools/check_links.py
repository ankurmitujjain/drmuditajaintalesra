import os, sys, glob, re

# Find all built html files in dist
built_files = glob.glob('dist/**/*.html', recursive=True)
if not built_files:
    print('dist directory is empty! Run npm run build first.')
    sys.exit(1)

# Build a set of valid URL paths from dist
valid_paths = set()
for f in built_files:
    rel = os.path.relpath(f, 'dist').replace('\\', '/')
    if rel == 'index.html':
        valid_paths.add('/')
    elif rel.endswith('/index.html'):
        valid_paths.add('/' + rel[:-10])
    elif rel.endswith('.html'):
        valid_paths.add('/' + rel)

# Also allow redirects and tel/mailto/wa/external
print(f'Total valid destination routes in dist: {len(valid_paths)}')

errors = []
total_links = 0

for f in built_files:
    content = open(f, encoding='utf-8').read()
    rel = os.path.relpath(f, 'dist').replace('\\', '/')
    source_url = '/' if rel == 'index.html' else ('/' + rel[:-10] if rel.endswith('/index.html') else '/' + rel)
    
    # Find all href="..."
    matches = re.findall(r'href=["\']([^"\']+)["\']', content)
    for target in matches:
        # Ignore external, hash only, tel, mailto, etc.
        if target.startswith(('http://', 'https://', 'tel:', 'mailto:', '#', 'javascript:')):
            continue
        total_links += 1
        
        # Clean target: strip hash and query
        clean_target = target.split('#')[0].split('?')[0]
        if not clean_target:
            continue
            
        # Ensure starts with /
        if not clean_target.startswith('/'):
            clean_target = '/' + clean_target
            
        # Standardize trailing slash unless it has a file extension like .html, .png, .webp
        if not os.path.splitext(clean_target)[1] and not clean_target.endswith('/'):
            clean_target += '/'
            
        # Check against valid paths
        # Special case: images, sitemaps, robots, astro assets
        if clean_target.startswith(('/images/', '/robots.txt', '/llms.txt', '/llms-full.txt', '/sitemap', '/_astro/')):
            if not os.path.exists(os.path.join('dist', clean_target.lstrip('/'))):
                errors.append(f"[{source_url}] Broken asset link -> {clean_target}")
        elif clean_target not in valid_paths:
            errors.append(f"[{source_url}] Broken internal link -> {clean_target}")

print(f"Checked {total_links} internal links across {len(built_files)} HTML pages.")
if errors:
    print(f"\nFAILED: Found {len(errors)} broken internal links:")
    for err in errors[:25]:
        print("  ", err)
    sys.exit(1)
else:
    print("SUCCESS: 0 broken internal links found! Build is verified clean.")
    sys.exit(0)

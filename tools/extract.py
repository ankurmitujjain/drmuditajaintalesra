import sys
import re
import subprocess

def extract(path):
    # Get raw content from base commit 38f8652
    try:
        raw = subprocess.check_output(['git', 'show', f'38f8652:{path}'], stderr=subprocess.DEVNULL).decode('utf-8', errors='ignore')
    except Exception:
        # Fallback to local file if not in base commit
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            raw = f.read()

    # Strip script and style blocks
    cleaned = re.sub(r'<script[\s\S]*?</script>', '', raw, flags=re.IGNORECASE)
    cleaned = re.sub(r'<style[\s\S]*?</style>', '', cleaned, flags=re.IGNORECASE)
    # Strip HTML tags
    cleaned = re.sub(r'<[^>]+>', ' ', cleaned)
    # Normalize spaces
    lines = [line.strip() for line in cleaned.splitlines()]
    meaningful = []
    for line in lines:
        if len(line) > 50 and '{' not in line and '}' not in line and not line.startswith('/*') and not line.startswith('//'):
            meaningful.append(line)
    return '\n\n'.join(meaningful)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python tools/extract.py <path>")
        sys.exit(1)
    print(extract(sys.argv[1]))


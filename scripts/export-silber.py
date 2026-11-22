# Exportiert die Silber-Seiten aus design-konzept/ als statische Seiten nach public/s/.
# Next.js liefert sie über Rewrites in next.config.ts unter sauberen Adressen aus
# ("/", "/leistungen/design", ..., "/impressum").
# Aufruf aus dem Projektordner:  python -I scripts/export-silber.py
import os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'design-konzept')
OUT = os.path.join(ROOT, 'public', 's')

PAGES = {  # Quelle -> (Datei in public/s, öffentliche Adresse)
    'v36-silber.html': ('index.html', '/'),
    'v36-design.html': ('design.html', '/leistungen/design'),
    'v36-mobile.html': ('mobile.html', '/leistungen/mobile'),
    'v36-seo.html': ('seo.html', '/leistungen/seo'),
    'v36-datenschutz.html': ('datenschutz.html', '/leistungen/datenschutz'),
    'v36-betreuung.html': ('betreuung.html', '/leistungen/betreuung'),
    'v36-impressum.html': ('impressum.html', '/impressum'),
}

def convert(html):
    # Seitenlinks auf die öffentlichen Adressen
    for src, (_, url) in PAGES.items():
        html = html.replace(f'href="{src}#', f'href="{url.rstrip("/")}/#' if url == '/' else f'href="{url}#')
        html = html.replace(f'href="{src}"', f'href="{url}"')
    # Hero: nur das gewählte Motiv (V, stein-wand) ausliefern, Vergleichsvarianten raus
    html = re.sub(r'<img class="h[wpka]" [^>]*>', '', html)
    html = re.sub(r'\n    <div class="hv hv-[lmn]">.*?\n    </div>', '', html, flags=re.S)
    # Bilder und Schriften absolut unter /s/
    html = re.sub(r'((?:src|href)=")(img|fonts)/', r'\1/s/\2/', html)
    html = re.sub(r'(url\(["\']?)(img|fonts)/', r'\1/s/\2/', html)
    return html

def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT)
    assets = set()
    for src, (dst, url) in PAGES.items():
        html = convert(open(os.path.join(SRC, src), encoding='utf-8').read())
        left = sorted(set(re.findall(r'href="([^"/#:?][^":]*\.html[^"]*)"', html)))
        if left:
            sys.exit(f'{src}: Links auf Konzeptseiten übrig: {left}')
        assets |= set(re.findall(r'/s/((?:img|fonts)/[^"\')\s?]+)', html))
        open(os.path.join(OUT, dst), 'w', encoding='utf-8').write(html)
        print(f'{url:28} <- {src}')
    missing = []
    for a in sorted(assets):
        sp = os.path.join(SRC, a)
        if not os.path.isfile(sp):
            missing.append(a); continue
        os.makedirs(os.path.dirname(os.path.join(OUT, a)), exist_ok=True)
        shutil.copy2(sp, os.path.join(OUT, a))
    if missing:
        sys.exit(f'Fehlende Dateien: {missing}')
    size = sum(os.path.getsize(os.path.join(d, f)) for d, _, fs in os.walk(OUT) for f in fs)
    print(f'{len(assets)} Dateien kopiert, public/s gesamt {size / 1e6:.1f} MB')

main()

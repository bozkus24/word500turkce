# HARF500

Türkçe Wordle-benzeri kelime tahmin oyunu. Netlify'de yayında (word500tr.netlify.app), `main` branch'inden otomatik deploy olur.

## Mimari

Tüm oyun **tek dosyada**: `index.html` (~3770 satır, inline CSS + classic script'ler + opsiyonel firebase ES modülü). Başka kaynak dosyası yoktur; iş mantığı, stil ve markup hepsi burada.

Diğer dosyalar:
- `gizlilik.html`, `kosullar.html` — statik yasal sayfalar
- `logo.png`, `og.png`, `ay.svg` — görseller
- `netlify.toml`, `README.md`, `KURULUM.md`

## index.html içindeki namespace'ler

- **`Word500trVeri`** (~satır 1342): `SOZLUK` (kabul edilen tahminler, ~5586 kelime) + `HAVUZLAR` (cevap havuzu indeksleri: `zor` temel havuz, `standart`/`kolay` runtime'da `havuzlariAyarla()` ile türetilir). `SOZLUK` ve `HAVUZLAR` çok uzun tek satırlardır; düzenlerken Read yerine küçük node script ile parse/replace et (25k token limitini aşar).
- **`Word500tr`** (`K`): oyun kuralları. `K.gunlukKelime(Veri, seviye, tarih)` günün kelimesini verir; `gunSayisi(tarih)` = `BASLANGIC`'tan bu yana geçen gün. `BASLANGIC = { yil:2026, ay:8, gun:1 }` (1 Ağustos 2026 anchor).
- **`Word500trDepo`** (`Depo`): localStorage sarmalayıcı, önek `ONEK='word500tr.'`. **localStorage anahtarlarını ASLA yeniden adlandırma** (kullanıcı verisi silinir).

(Firebase/Google girişi ve liderlik tablosu PR #20 ile tamamen kaldırıldı; artık bulut/backend yok.)

## Kurallar

- **Onay olmadan commit/push/PR/merge YAPMA.** Kullanıcı açıkça "commit et" / "maine merge et" / "PR aç ve merge et" demeli.
- **Uzun çizgi (—) kullanma.** Bunun yerine `·` veya `;`.
- Geliştirme branch'i: `claude/other-site-code-fipo6c`.

## Merge akışı (onay verildiğinde)

Squash-merge sonrası branch'i main'den yeniden başlat:
```
git stash && git checkout -B claude/other-site-code-fipo6c origin/main && git stash pop
# commit → git push -u origin <branch> --force-with-lease → PR → squash merge
```

## Önizleme + test

Değişiklikleri artifact olarak yayınlamak için scratchpad'deki `build.mjs` çalıştırılır: `index.html` okunur, `logo.png` data-URI'ye gömülür, `word500tr-onizleme.html` üretilir (kendi kendine yeterli). Artifact URL sabit: `https://claude.ai/code/artifact/de67d8b5-53ec-4d72-94ab-b753dcb198ed` (favicon 🟩).

Playwright: Chromium `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, kütüphane `/opt/node22/lib/node_modules/playwright/index.mjs`.

## CSS/JS tuzakları

- ID seçicideki `display:flex`, `[hidden]` attribute'unun UA `display:none`'ını ezer → gizlenmesi gereken ID'ler için `#id[hidden] { display:none; }` ekle.
- `.ust-dugme` `display:grid; place-items:center` kullanır; içindeki SVG'yi ~4px kaydırabilir → gerekirse `display:flex; align-items:center; justify-content:center` ile ez.

# HANDOFF

Sonraki oturum için proje durumu özeti. Mimari ve kalıcı kurallar için `CLAUDE.md`'ye bak.

## Güncel durum

- `main` en son commit: `a82de30` (PR #21). Netlify `main`'den otomatik deploy eder (word500tr.netlify.app).
- Geliştirme branch'i `claude/other-site-code-fipo6c`, `main` ile senkron.
- Bu oturumda `CLAUDE.md` + `HANDOFF.md` eklendi.

## Tamamlanan iş (son merge edilen PR'lar)

- **#21** AdSense hazırlığı: bilgi bölümü, meta düzeltmesi, iletişim adresi.
- **#20** Firebase/Google girişi ve liderlik tablosu tamamen kaldırıldı (artık bulut/backend yok).
- **#19** Kelime havuzu kullanıcının iki listesiyle güncellendi (`SOZLUK` 5586 kabul edilen tahmin, cevap havuzu 2788; `akbil` sözlüğe eklendi). Sınırsız mod + araçları kaldırıldı. Arşiv doğrudan açılıyor, çözülen günler yeşil `X/8`, 1 Ağustos 2026 başlangıçlı, tarihler hizalı. Arşiv sonucu paylaşımsız popup, istatistiğe işlenmez. Nasıl Oynanır: "bir daha gösterme" solda, "Anladım" yayvan, silgi ikonu parantez içinde.
- **#18** İstatistik ekranında günün sonucu + paylaş butonu; Nasıl Oynanır ilk ziyarette otomatik açılır (bir daha gösterme onayı kalıcı).
- **#17** Nasıl Oynanır içeriği yenilendi; klavyede son boyanan renk yansır (öncelik değil).
- **#16** Arayüz yenileme: giriş ekranı kaldırma, köşeli/piksel ikon seti, tema ayarlara taşındı (Koyu/Açık, cihaz ayarı yok), 180° zorluk gauge'i.
- **#14–15** HARF500 marka: Press Start 2P piksel font, logo/ayar sadeleştirme, dolu hilal ay ikonu (`ay.svg`).

## Önemli kararlar

- Onay olmadan asla commit/push/PR/merge yok. Uzun çizgi (—) kullanılmaz.
- Tema barda değil, ayarlarda (Koyu/Açık); "cihaz ayarı" seçeneği kaldırıldı.
- Sınırsız mod tamamen kaldırıldı; arşiv "istediğin kadar oyna" ihtiyacını karşılar.
- Kelime havuzu kullanıcının verdiği listelerle sabitlendi; her cevap geçerli tahmin olmalı.

## İlgili dosyalar

- `index.html` — tüm oyun (tek dosya). Tüm düzenlemeler burada.
- `CLAUDE.md` — kalıcı proje talimatları ve mimari.
- `gizlilik.html`, `kosullar.html` — statik yasal sayfalar (ayarlardan linkler kaldırıldı ama sayfalar duruyor).
- scratchpad: `build.mjs` (önizleme üretici), `word500tr-onizleme.html`, test `.mjs` script'leri.

## Bitmemiş iş / açık konular

- **Panel buton sıralaması (BEKLİYOR):** Kullanıcı üst bar butonlarının soldan sağa Arşiv → İstatistikler → Nasıl Oynanır → Ayarlar olmasını istedi. Sıralamada adı geçmeyen **zorluk gauge butonunun** (`#dugme-seviye`) yeri sorulunca kullanıcı soruyu geçti ("wait for next instruction"). Karar verilince `index.html` içindeki `ustbar-dugmeler` (~satır 994) içindeki buton sırası düzenlenecek. Şu anki sıra: takvim(arşiv), seviye(gauge), istatistik, yardım, ayarlar.

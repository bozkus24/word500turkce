# word500tr — Türkçe kelime bulmacası

Gizli **5 harfli Türkçe kelimeyi 8 tahminde** bulmaya çalıştığınız bir kelime
oyunu. [word500.com](https://word500.com/) oyununun Türkçe uyarlamasıdır.

**Wordle'dan farkı:** Hangi harfin doğru olduğu size söylenmez — yalnızca *kaç
tanesinin* doğru olduğu söylenir. Hangileri olduğunu tahminleri karşılaştırarak
kendiniz çıkarırsınız.

## Nasıl oynanır?

Her tahminin sağında üç sayı belirir:

- 🟢 **Yeşil** — harf hem doğru hem de doğru yerde
- 🟡 **Sarı** — harf kelimede var ama yanlış yerde
- 🔴 **Kırmızı** — harf kelimede hiç yok

## Özellikler

- **Zorluk seviyeleri:** 🙂 Kolay · 😐 Standart · 😈 Zor (her seviyenin kendi
  günlük kelimesi ve istatistikleri vardır).
- **Oyun modları:** 📅 Günlük (herkese aynı kelime, istatistiğe işlenir) ve
  🔄 Alıştırma (rastgele, sınırsız).
- **Yardımcılar:** ipucu (💡), satır temizleme (🧹) ve desene göre kelime arama
  (🔍, yalnızca Alıştırma modunda).
- **Not tutma:** harf kutularına tıklayarak kendi renk işaretlerinizi
  koyabilirsiniz.
- **İstatistikler:** oynanan, kazanma yüzdesi, seri, en uzun seri ve tahmin
  dağılımı.
- **Erişilebilirlik:** koyu/açık/sistem teması, renk körlüğü için yüksek
  kontrast modu, ekran klavyesi açma/kapama, klavye ile oynama.
- Sonucu panoya kopyalayıp paylaşma.
- Tüm ilerleme `localStorage` içinde saklanır; sunucu gerekmez.

## Çalıştırma

Tek dosyalık statik bir uygulamadır — derleme gerektirmez. `index.html`
dosyasını doğrudan tarayıcıda açmanız yeterlidir:

```sh
# ya da basit bir yerel sunucuyla:
python3 -m http.server 8000
# sonra http://localhost:8000 adresini açın
```

## Yapı

Tümü `index.html` içinde, dört bölümden oluşur:

- **Word500trVeri** — sözlük (`SOZLUK`) ve zorluk havuzları (`HAVUZLAR`).
- **Word500tr** — çekirdek oyun mantığı: günlük kelime üretimi, skorlama, ipucu
  ve kelime arama.
- **Word500trDepo** — `localStorage` üzerinden ayarlar, istatistik ve kayıtlı
  oyun yönetimi.
- **Arayüz** — tahta, klavye, kutular ve olay yönetimi.

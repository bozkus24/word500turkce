# HARF500 · Türkçe kelime bulmacası

Gizli **5 harfli Türkçe kelimeyi 8 tahminde** bulmaya çalıştığınız bir kelime
oyunu. Türk alfabesindeki tüm harfler kullanılabilir; aynı harf gizli kelimede
birden fazla kez geçebilir. Her gün herkes için aynı kelime açılır.

**Wordle'dan farkı:** Hangi harfin doğru olduğu size söylenmez; yalnızca *kaç
tanesinin* doğru olduğu söylenir. Hangileri olduğunu tahminleri karşılaştırarak
kendiniz çıkarırsınız.

## Nasıl oynanır?

Her tahminin sağında üç sayı belirir:

- 🟢 **Yeşil** — harf hem doğru hem de doğru yerde
- 🟡 **Sarı** — harf kelimede var ama yanlış yerde
- 🔴 **Kırmızı** — harf kelimede yok veya fazladan tekrar edilmiş

Her harf, gizli kelimedeki tekrar sayısı kadar eşleşebilir.

## Özellikler

- **Günlük bulmaca:** herkese aynı kelime; sonuç istatistiklere işlenir.
- **Arşiv:** önceki günleri oynama; arşiv sonuçları istatistikleri ve seriyi
  etkilemez.
- **Klavye araçları:** boşluk tuşuyla alt çizgi ekleme ve silgiyle aktif
  satırı ve o satırdaki renk notlarını temizleme.
- **Not tutma:** harf kutularına tıklayarak kendi renk işaretlerinizi
  koyabilirsiniz.
- **İstatistikler:** oynanan, kazanma yüzdesi, seri, en uzun seri ve tahmin
  dağılımı.
- **Erişilebilirlik:** koyu/açık/sistem teması, renk körlüğü için yüksek
  kontrast modu, ekran klavyesi açma/kapama, klavye ile oynama.
- Sonucu panoya kopyalayıp paylaşma.

Tüm veriler yalnızca tarayıcınızın `localStorage` alanında, cihazınızda tutulur;
oyun hiçbir sunucuya veri göndermez ve giriş/hesap sistemi içermez.

## Çalıştırma

Tek dosyalık statik bir uygulamadır; derleme gerektirmez. `index.html`
dosyasını doğrudan tarayıcıda açmanız yeterlidir:

```sh
# ya da basit bir yerel sunucuyla:
python3 -m http.server 8000
# sonra http://localhost:8000 adresini açın
```

## Yapı

Tümü `index.html` içinde, şu bölümlerden oluşur:

- **Word500trVeri** · sözlük (`SOZLUK`) ve tek cevap havuzu (`HAVUZLAR`).
- **Word500tr** · çekirdek oyun mantığı: günlük kelime üretimi, skorlama ve
  paylaşım metni.
- **Word500trDepo** — `localStorage` üzerinden ayarlar, istatistik ve kayıtlı
  oyun yönetimi.
- **Arayüz** — tahta, klavye, kutular ve olay yönetimi.

Diğer dosyalar: `gizlilik.html` / `kosullar.html` (politikalar) ve
`netlify.toml` (dağıtım yapılandırması).

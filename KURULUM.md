# Google girişi + seri senkronu — kurulum

Oyun, giriş olmadan da tam çalışır (veriler cihazda `localStorage`'da tutulur).
Google ile giriş ve serilerin cihazlar arası senkronu için tek seferlik bir
**Firebase** kurulumu gerekir. Aşağıdaki adımları sırayla izleyin.

> Kod tarafı hazır. Sizin yapmanız gereken tek şey: bir Firebase projesi açıp
> anahtarları `firebase-config.js` içine yazmak ve birkaç ayarı açmak.

---

## 1. Firebase projesi oluştur

1. <https://console.firebase.google.com/> adresine Google hesabınızla girin.
2. **"Proje ekle"** → bir ad verin (ör. `word500tr`) → oluşturun.
   (Google Analytics'i isterseniz kapatabilirsiniz, gerekli değil.)

## 2. Web uygulaması ekle ve config'i al

1. Proje ana sayfasında **web simgesine** (`</>`) tıklayın.
2. Uygulamaya bir takma ad verin, **"Uygulamayı kaydet"** deyin.
   (Firebase Hosting'e gerek yok, işaretlemeyin — Netlify kullanıyorsunuz.)
3. Ekranda çıkan `firebaseConfig` nesnesindeki değerleri kopyalayın.
4. Projedeki **`firebase-config.js`** dosyasını açıp `BURAYA_...` yazan yerleri
   bu değerlerle değiştirin:

   ```js
   window.WORD500TR_FIREBASE_CONFIG = {
     apiKey: "AIza...",
     authDomain: "word500tr.firebaseapp.com",
     projectId: "word500tr",
     storageBucket: "word500tr.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abcdef"
   };
   ```

   > Bu anahtarlar gizli değildir; Firebase web uygulamalarında herkese açıktır
   > ve öyle olmaları normaldir. Güvenlik, aşağıdaki Firestore kuralları ve
   > yetkili alan adları ile sağlanır.

## 3. Google ile giriş'i aç

1. Sol menüden **Build → Authentication** → **"Get started"**.
2. **Sign-in method** sekmesi → **Google** → etkinleştir → bir destek
   e-postası seçin → **Kaydet**.

## 4. Cloud Firestore'u aç

1. Sol menüden **Build → Firestore Database** → **"Create database"**.
2. Konum seçin (ör. `eur3` Avrupa) → **production mode** ile başlayın.
3. **Rules** sekmesine geçip kuralları aşağıdakiyle değiştirin ve yayımlayın.
   Bu kural, her kullanıcının yalnızca kendi verisini okuyup yazmasına izin
   verir:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /kullanicilar/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```

## 5. Alan adlarını yetkilendir

Giriş penceresinin çalışması için sitenizin alan adı yetkili olmalı:

1. **Authentication → Settings → Authorized domains**.
2. Şunları ekleyin:
   - `localhost` (yerelde test için genelde hazır gelir),
   - Netlify alt alan adınız (ör. `word500tr.netlify.app`),
   - varsa kendi alan adınız (ör. `word500.com`).

## 6. OAuth izin ekranı (gizlilik politikası)

Google giriş ekranında proje adınız ve gizlilik bağlantısı görünsün diye:

1. [Google Cloud Console](https://console.cloud.google.com/) → aynı projeyi
   seçin → **APIs & Services → OAuth consent screen**.
2. Uygulama adını, destek e-postasını girin.
3. **Gizlilik Politikası URL'i** olarak yayınlanmış adresi verin:
   `https://<siteniz>/gizlilik.html`
4. Kaydedin.

## 7. Politika sayfalarını kişiselleştir

`gizlilik.html` ve `kosullar.html` içindeki `BURAYA_EPOSTA` yazan yerleri kendi
iletişim e-postanızla değiştirin.

## 8. Deploy

Değişiklikleri Netlify'a gönderin (git push ya da elle). Siteyi açıp
Ayarlar'ı açtığınızda **"Google ile giriş yap"** düğmesini görmelisiniz.
Giriş yapıp bir günlük bulmacayı bitirin; başka bir cihaz/tarayıcıda aynı
hesapla giriş yapınca serinizin geldiğini göreceksiniz.

---

## Sorun giderme

- **Giriş düğmesi görünmüyor:** `firebase-config.js` içindeki `apiKey` hâlâ
  `BURAYA_...` ise düğme bilerek gizlenir. Gerçek değeri girin.
- **"auth/unauthorized-domain" hatası:** 5. adımdaki yetkili alan adlarına
  sitenizin adını ekleyin.
- **Pop-up açılmıyor:** tarayıcı pop-up engelini kontrol edin.
- **Veri yazılmıyor:** 4. adımdaki Firestore kurallarının yayımlandığından
  emin olun.

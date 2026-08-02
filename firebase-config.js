// word500tr — Firebase yapılandırması (Google girişi + seri senkronu).
//
// Bu değerleri kendi Firebase projenizden alın:
//   Firebase Console → Proje ayarları → "Uygulamalarınız" → Web uygulaması → SDK yapılandırması.
//
// Not: Bu anahtarlar gizli değildir; Firebase web uygulamalarında herkese
// açıktır ve öyle olması normaldir. Güvenlik, Firestore kuralları ve
// "Yetkili alan adları" ile sağlanır (bkz. KURULUM.md).
//
// Değerleri girene kadar oyun bulut olmadan, yalnızca bu cihazda çalışır.

window.WORD500TR_FIREBASE_CONFIG = {
  apiKey: "BURAYA_API_KEY",
  authDomain: "BURAYA_PROJE.firebaseapp.com",
  projectId: "BURAYA_PROJE",
  storageBucket: "BURAYA_PROJE.appspot.com",
  messagingSenderId: "BURAYA_SENDER_ID",
  appId: "BURAYA_APP_ID"
};

# Security Sentinel AI

Security Sentinel AI, modern yazılım geliştirme süreçlerinde güvenliği ön plana çıkaran, yapay zeka destekli bir statik kod analiz (SAST) aracıdır. Bu proje, full-stack bir web uygulamasının içine entegre edilmiş akıllı bir güvenlik denetim mekanizması sunar.

## 🧠 Proje Felsefesi ve Yetkinlikler

Bu proje, üç temel disiplinin birleşimi üzerine inşa edilmiştir:

*   **Full-Stack Development:** React ve Vite kullanılarak, kullanıcı deneyimini (UX) ön planda tutan, hızlı ve performanslı bir arayüz geliştirilmiştir. State yönetimi ve API entegrasyonu süreçleri optimize edilmiştir.
*   **AI Integration:** Geleneksel yöntemlerin ötesine geçmek için Groq API (Llama 3.3) entegre edilmiştir. Böylece kodun bağlamını anlayabilen, "false-positive" oranını minimize eden akıllı bir analiz motoru kurulmuştur.
*   **Cybersecurity (SAST):** Uygulama; SQL Injection, Cross-Site Scripting (XSS), Hardcoded Secrets ve Bilgi İfşası gibi yaygın zafiyetleri tespit ederek, geliştiricilere güvenli kod yazma pratiği kazandırmayı hedefler.

## 🚀 Öne Çıkan Özellikler

*   **Anlık Kod Analizi:** Yapıştırılan kod bloklarının gerçek zamanlı denetimi.
*   **Akıllı Tehdit Sınıflandırması:** Zafiyetlerin kritiklik derecesine göre hiyerarşik (KRİTİK - DÜŞÜK) sıralanması.
*   **Örnek Kod ile İyileştirme:** Sadece hata göstermekle kalmaz, "Örnek Kod" bölümü ile zafiyetin nasıl kapatılacağını gösterir.
*   **Güvenli Depolama:** Analiz geçmişinin yerel olarak yönetimi.

## 🛠️ Teknik Altyapı

*   **Frontend:** React, Vite, Lucide React, Modern CSS (Glassmorphism)
*   **AI Engine:** Groq API (Llama 3.3 70B Versatile)
*   **Mimari:** Context-aware prompt engineering, RESTful API entegrasyonu

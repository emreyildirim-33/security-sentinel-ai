import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

export const analyzeSecurity = async (code) => {
  try {
    const prompt = `Sen üst düzey bir siber güvenlik uzmanısın. Şu kodu analiz et.

    KURALLAR:
    1. Eğer kod çok basitse (örn: "print hello world") veya hiçbir güvenlik zafiyeti yoksa, SADECE şu yanıtı ver: "[GÜVENLİ] Zafiyet tespit edilmedi. Kod temiz ve güvenli."
    2. Eğer zafiyet varsa, her bir zafiyet için KESİNLİKLE şu formatı kullan:
       [ETİKET] Zafiyet Adı
       Açıklama: ...
       Çözüm: ...
       Örnek Kod: ...
    3. Etiketler: [KRİTİK], [YÜKSEK], [ORTA], [DÜŞÜK].
    4. Asla başka bir giriş metni veya markdown kodu (code blocks) kullanma.

    Kod: ${code}`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
    });
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    return "[HATA] Analiz servisine ulaşılamadı.";
  }
};
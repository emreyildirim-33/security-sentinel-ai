import { useState, useEffect } from 'react';
import { analyzeSecurity } from './aiService';
import { Trash2, History, Bot, PlusCircle, ShieldAlert, ShieldCheck, AlertTriangle, Info, Copy } from 'lucide-react';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('audit-history') || '[]'));

  useEffect(() => { localStorage.setItem('audit-history', JSON.stringify(history)); }, [history]);

  const handleAnalyze = async () => {
    const looksLikeCode = /[;{}()=<>]/.test(code);
    if (!code.trim()) return alert("Kod alanı boş!");
    if (!looksLikeCode && code.length < 20) return alert("Lütfen geçerli bir kod parçası yapıştır.");

    setLoading(true);
    setResult("Analiz ediliyor...");
    const res = await analyzeSecurity(code);
    setResult(res);
    setLoading(false);
    if (!res.includes("[HATA]")) {
        setHistory([{ id: Date.now(), code, result: res }, ...history.slice(0, 9)]);
    }
  };

  const formatResult = (text) => {
    // [GÜVENLİ] etiketini de regex'e ekledik
    const parts = text.split(/(?=\[KRİTİK\]|\[YÜKSEK\]|\[ORTA\]|\[DÜŞÜK\]|\[GÜVENLİ\])/g);
    let validBlocks = parts.filter(b => b.trim().startsWith('['));

    // Sıralama mantığı: Güvenli olanı en alta veya en başa alabilirsin, burada mantıklı bir ağırlık verdik
    validBlocks.sort((a, b) => {
        const weight = { '[KRİTİK]': 4, '[YÜKSEK]': 3, '[ORTA]': 2, '[DÜŞÜK]': 1, '[GÜVENLİ]': 0 };
        const getVal = (x) => Object.keys(weight).find(k => x.includes(k));
        return weight[getVal(b)] - weight[getVal(a)];
    });

    return validBlocks.map((block, i) => {
      let severityClass = "low", Icon = ShieldCheck;
      if (block.includes('[KRİTİK]')) { severityClass = "critical"; Icon = ShieldAlert; }
      else if (block.includes('[YÜKSEK]')) { severityClass = "high"; Icon = AlertTriangle; }
      else if (block.includes('[ORTA]')) { severityClass = "medium"; Icon = Info; }
      else if (block.includes('[GÜVENLİ]')) { severityClass = "low"; Icon = ShieldCheck; }

      return (
        <div key={i} className={`security-card ${severityClass}`} style={{ display: 'flex', gap: '15px' }}>
          <div style={{ marginTop: '3px' }}><Icon size={20} /></div>
          <pre style={{
              whiteSpace: 'pre-wrap',
              margin: 0,
              fontSize: '14px',
              fontFamily: 'Inter',
              lineHeight: '1.6' // Satır aralığı düzeltildi
            }}>
              {block.trim()}
          </pre>
        </div>
      );
    });
  };

  return (
    <div className="app-container">
      <header>
        <div className="logo"><ShieldAlert/> Security Sentinel AI</div>
        <button onClick={() => { setCode(''); setResult(''); }} style={{ background: '#334155', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
             <PlusCircle size={16}/> Yeni Analiz
        </button>
      </header>
      <main className="main-grid">
        <section>
          <textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="Buraya kodunu yapıştır..." />
          <button onClick={handleAnalyze} disabled={loading} className={`btn-primary ${loading ? 'btn-loading' : ''}`}>
            {loading ? <Bot className="animate-spin"/> : 'Güvenliği Tara'}
          </button>
        </section>
        <aside className="history-section">
          <h3><History size={16}/> Geçmiş</h3>
          <div className="history-list">
            {history.map(h => (
              <div key={h.id} className="history-item">
                <span onClick={() => { setCode(h.code); setResult(h.result); }}>{h.code.substring(0, 15)}...</span>
                <button onClick={(e) => { e.stopPropagation(); setHistory(history.filter(item => item.id !== h.id)); }} style={{background:'none', border:'none', color:'#ef4444', cursor:'pointer'}}><Trash2 size={14}/></button>
              </div>
            ))}
          </div>
        </aside>
      </main>
      <section className="result-box">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Analiz Sonucu:</h3>
            {result && <button onClick={() => navigator.clipboard.writeText(result)} style={{ background: '#1e293b', border: 'none', color: '#38bdf8', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}><Copy size={14}/></button>}
        </div>
        <div>{result ? formatResult(result) : "Analiz bekleniyor..."}</div>
      </section>
    </div>
  );
}

export default App;
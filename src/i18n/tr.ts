import type { en } from "./en";

export const tr: typeof en = {
  meta: {
    title: "Juan Diego Ron Molina — Yapay Zekâ Mühendisi · Bilgisayarlı Görü ve Ajan Tabanlı LLM'ler",
    description:
      "Juan Diego Ron Molina, YourEye Technologies'de Yapay Zekâ Mühendisi ve Gazi Üniversitesi Bilgisayar Mühendisliği öğrencisi. Bilgisayarlı görü, TensorRT ile dağıtım ve ajan tabanlı LLM sistemleri.",
  },
  nav: {
    links: ["Deneyim", "Projeler", "Yetenekler", "Hakkımda", "İletişim"],
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    theme: "Renk temasını değiştir",
    language: "Dil",
  },
  hero: {
    badge: "Yapay Zekâ Mühendisi @ YourEye Technologies",
    location: "Ankara, Türkiye",
    roles: ["Bilgisayarlı Görü", "Ajan Tabanlı LLM Sistemleri", "Edge ve GPU Çıkarımı", "Makine Öğrenmesi"],
    intro:
      "Gazi Üniversitesi Bilgisayar Mühendisliği dördüncü sınıf öğrencisiyim. Makine öğrenmesi ve bilgisayarlı görü modellerini üretime taşıyorum: Blackwell GPU sunucularındaki TensorRT motorlarından tamamen yerel open-weight modellerle çalışan ajan tabanlı LLM sistemlerine kadar.",
    cta: "Projeleri gör",
    stats: [
      { value: 25, suffix: "/25", label: "yalnızca sentetik veriyle tanınan, daha önce görülmemiş parça" },
      { value: 97, suffix: "%", label: "LangGraph ajan benchmark'ımdaki başarı oranı" },
      { value: 145, suffix: " ms", label: "GPU optimizasyonu sonrası kare başına (~620'den)" },
      { value: 3.41, decimals: 2, suffix: "", label: "GNO, Gazi Üniversitesi Bilgisayar Mühendisliği" },
    ],
  },
  experience: {
    label: "deneyim",
    title: "Çalıştığım yerler",
    roles: [
      {
        company: "YourEye Technologies",
        role: "Yapay Zekâ Mühendisi",
        dates: "May 2026 – Günümüz",
        current: true,
        tags: ["TensorRT", "ONNX", "GStreamer", "BlenderProc", "DINOv2", "InsightFace"],
        bullets: [
          "Canlı kamera analitiği GPU sunucuları için PyTorch / Ultralytics YOLO modellerini ONNX üzerinden <b>FP16 TensorRT motorlarına</b> dönüştüren iş akışları geliştirerek çıkarım gecikmesini ve GPU bellek yükünü azalttım.",
          "Bilgisayarlı görü modellerini <b>NVIDIA RTX PRO 6000 Blackwell</b> sunucularına dağıttım; RTSP GStreamer hatlarıyla canlı güvenlik kamerası görüntülerini gerçek zamanlı çıkarıma aktardım.",
          "Müşteri CAD modellerinden üretilen yalnızca <b>BlenderProc sentetik verisiyle</b> eğitilmiş bir parça tanıma sistemi kurdum: dedektör + DINOv2 eşleştirici yeni CAD'leri yeniden eğitim olmadan dakikalar içinde kaydediyor ve bilinmeyen parçaları reddediyor.",
          "Görülmemiş açı, yüzey ve aydınlatma koşullarında <b>25/25</b> parçayı, karmaşık arka planlarda ise sıfır yanlış etiketle <b>92/100</b> parçayı tanıdım; canlı telefon kamerası kullanımı için çıkarımı <b>~620'den ~145 ms/kareye</b> düşürdüm.",
          "InsightFace (buffalo_l) ile gerçek zamanlı yüz tanıma geliştirdim: RetinaFace dedektörü + ArcFace ResNet-50 ile 512 boyutlu, L2 normalize edilmiş gömüler.",
        ],
      },
      {
        company: "Syntexchub",
        role: "Yapay Zekâ Stajyeri",
        dates: "Mar 2026 – Nis 2026",
        current: false,
        tags: ["OpenCV", "MediaPipe", "Llama", "Whisper", "Prompt engineering"],
        bullets: [
          "OpenCV ve MediaPipe ile gerçek zamanlı webcam görüntüsünden el hareketlerini sınıflandıran bir el hareketi tanıma sistemi geliştirdim.",
          "Yanıtlar için Llama (HuggingFace), konuşmadan metne için Whisper-large-v3-turbo kullanan ve çok turlu konuşmalarda bağlamı koruyan sesli bir sohbet botu tasarladım.",
          "Açıklanabilir Yapay Zekâ kullanım senaryoları için karmaşık soruları ara akıl yürütme adımlarına bölen bir chain-of-thought prompting hattı uyguladım.",
        ],
      },
    ],
  },
  work: {
    label: "projeler",
    title: "Geliştirdiklerim",
    featuredLabel: "öne çıkan",
    featured: {
      title: "HomeOps",
      kicker: "Çok ajanlı ev asistanı · Eki 2026 – Günümüz",
      description:
        "Tamamen yerel open-weight LLM'lerle çalışan bir Telegram asistanı. LangGraph envanter ajanı araçları seçerken her kiler değişikliğini deterministik Python yapıyor; bir görü modeli market fişlerini doğrulanmış kiler ürünlerine dönüştürüyor. Her ajan, ≥ %90 geçme eşiğine sahip bir benchmark ile geliyor.",
      metrics: [
        { value: "%97", label: "sohbet benchmark'ı (35/36)" },
        { value: "%100", label: "fiş satırı bulundu, hiçbiri uydurulmadı" },
        { value: "20/20", label: "araç çağırma benchmark'ı" },
        { value: "1.4 s", label: "mesaj başına medyan" },
      ],
      tags: ["LangGraph", "Ollama", "qwen3:8b", "qwen2.5vl:7b", "PostgreSQL", "Langfuse", "Docker Compose", "GitHub Actions"],
    },
    projects: [
      {
        title: "İnsansız Kara Aracı",
        kicker: "Otonom navigasyon · TEKNOFEST · Ara 2025 – Eyl 2026",
        description:
          "Otonom bir kara aracını izlemek ve kontrol etmek için yazılım arayüzü; navigasyon verilerinin ve sistem durumunun gerçek zamanlı görselleştirilmesi ile nesne tespiti ve algılama modelleri için görüntü etiketleme.",
        tags: ["Bilgisayarlı Görü", "Nesne Tespiti", "Robotik"],
      },
      {
        title: "Suç Oranı Faktörleri",
        kicker: "Ortak yazarlı araştırma makalesi · Nis – May 2025",
        description:
          "ABD'deki şiddet suçlarının sosyoekonomik belirleyicileri (UCI veri seti, 1.994 × 128). RF ile eksik veri tamamlama, öznitelik seçimi ve SMOTE içeren uçtan uca bir hat; 15 algoritmayı karşılaştırıp %96,33 doğrulukla bir YSA seçtim.",
        tags: ["scikit-learn", "SMOTE", "YSA", "CatBoost"],
      },
      {
        title: "MiKuri",
        kicker: "Kart savaş oyunu · NYP dersi · Kas – Ara 2024",
        description:
          "Pokémon TCG'den esinlenen Java kart savaş oyunu: kartlar, oyuncular, desteler ve savaşlar için sınıf hiyerarşisi ile MVC tarzında ayrılmış JavaFX / FXML arayüzü.",
        tags: ["Java", "JavaFX", "NYP"],
      },
    ],
  },
  skills: {
    label: "yetenekler",
    title: "Kullandığım teknolojiler",
    groups: [
      "Makine Öğrenmesi ve Görü",
      "LLM'ler ve Ajanlar",
      "Çıkarım ve Dağıtım",
      "Veri ve DevOps",
      "Programlama",
    ],
  },
  about: {
    label: "hakkımda",
    title: "Geçmişim",
    intro:
      "Tam burslu Türkiye Bursları ile Ankara'da Bilgisayar Mühendisliği dördüncü sınıf öğrencisiyim. Yapay zekânın modellerin notebook'tan çıktığı kısmını seviyorum: onları gerçek GPU'larda hızlandırmak, benchmark'larla test etmek ve insanların gerçekten kullandığı sistemlere bağlamak.",
    educationLabel: "eğitim",
    degree: "Bilgisayar Mühendisliği Lisans",
    eduDates: "Eyl 2023 – Tem 2027 · GNO 3.41 / 4.00",
    scholarshipLabel: "burs",
    scholarship: "Türkiye Bursları bursiyeri",
    scholarshipDetail: "Lisans, tam burslu · Ağu 2022 – Tem 2027",
    languagesLabel: "diller",
    languages: [
      { name: "İspanyolca", level: "Ana dil", pct: 100 },
      { name: "İngilizce", level: "İki dilli", pct: 95 },
      { name: "Türkçe", level: "Profesyonel", pct: 75 },
      { name: "Fransızca", level: "Temel", pct: 30 },
    ],
    certificatesLabel: "sertifikalar",
    certificates: [
      { name: "Claude Code 101", by: "Anthropic", date: "Haz 2026" },
      { name: "Machine Learning A-Z", by: "SuperDataScience", date: "Eyl 2025" },
      { name: "The Complete Python Pro Bootcamp", by: "London App Brewery", date: "Ağu 2025" },
      { name: "Google Cloud Skills Boost", by: "Google", date: "Ağu 2025" },
      { name: "Introduction to Data Science", by: "Cisco", date: "Mar 2025" },
    ],
  },
  contact: {
    label: "iletişim",
    title: "Birlikte bir şey inşa edelim",
    intro:
      "Bilgisayarlı görü, ML mühendisliği ve ajan tabanlı LLM sistemleri alanlarındaki fırsatlara açığım. Bana ulaşmanın en hızlı yolu e-posta.",
    cta: "E-posta gönder",
  },
  footer: {
    built: "Astro · Tailwind · Motion ile yapıldı",
  },
};

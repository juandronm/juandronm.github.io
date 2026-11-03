// All page text for English. es.ts and tr.ts must match this shape.
export const en = {
  meta: {
    title: "Juan Diego Ron Molina — AI Engineer · Computer Vision & Agentic LLMs",
    description:
      "Juan Diego Ron Molina, AI Engineer at YourEye Technologies and Computer Engineering student at Gazi University. Computer vision, TensorRT deployment, and agentic LLM systems.",
  },
  nav: {
    links: ["Experience", "Projects", "Skills", "About", "Contact"],
    openMenu: "Open menu",
    closeMenu: "Close menu",
    theme: "Toggle color theme",
    language: "Language",
  },
  hero: {
    badge: "AI Engineer @ YourEye Technologies",
    location: "Ankara, Türkiye",
    roles: ["Computer Vision", "Agentic LLM Systems", "Edge & GPU Inference", "Machine Learning"],
    intro:
      "Fourth-year Computer Engineering student at Gazi University. I ship machine learning and computer vision into production, from TensorRT engines on Blackwell GPU servers to agentic LLM systems running fully on local open-weight models.",
    cta: "View projects",
    stats: [
      { value: 25, suffix: "/25", label: "unseen parts identified from synthetic data only" },
      { value: 97, suffix: "%", label: "pass rate of my LangGraph agent benchmark" },
      { value: 145, suffix: " ms", label: "per frame after GPU optimization (from ~620)" },
      { value: 3.41, decimals: 2, suffix: "", label: "GPA, Computer Engineering at Gazi University" },
    ],
  },
  experience: {
    label: "experience",
    title: "Where I've shipped",
    roles: [
      {
        company: "YourEye Technologies",
        role: "Artificial Intelligence Engineer",
        dates: "May 2026 – Present",
        current: true,
        tags: ["TensorRT", "ONNX", "GStreamer", "BlenderProc", "DINOv2", "InsightFace"],
        bullets: [
          "Engineered TensorRT workflows converting PyTorch / Ultralytics YOLO models into <b>FP16 TensorRT engines</b> via ONNX for live camera-analytics GPU servers, cutting inference latency and GPU memory load.",
          "Deployed computer vision models on <b>NVIDIA RTX PRO 6000 Blackwell</b> servers with RTSP GStreamer pipelines streaming live security-camera feeds into real-time inference.",
          "Built a parts-recognition system trained only on <b>BlenderProc synthetic data</b> from client CAD models: a detector + DINOv2 matcher enrolls new CADs in minutes without retraining and rejects unknown parts.",
          "Identified <b>25/25</b> parts under unseen viewpoints, finishes and lighting, and <b>92/100</b> on complex backgrounds with 0 wrong labels; cut inference from <b>~620 to ~145 ms/frame</b> for live phone-camera use.",
          "Built real-time face recognition with InsightFace (buffalo_l): RetinaFace detector + ArcFace ResNet-50 producing 512-d L2-normalized embeddings.",
        ],
      },
      {
        company: "Syntexchub",
        role: "Artificial Intelligence Intern",
        dates: "Mar 2026 – Apr 2026",
        current: false,
        tags: ["OpenCV", "MediaPipe", "Llama", "Whisper", "Prompt engineering"],
        bullets: [
          "Built a hand-gesture recognition system with OpenCV and MediaPipe, classifying gestures from real-time webcam input.",
          "Designed a voice-enabled chatbot with Llama (HuggingFace) for responses and Whisper-large-v3-turbo for speech-to-text, with context handling for multi-turn conversations.",
          "Implemented a chain-of-thought prompting pipeline breaking complex queries into intermediate reasoning steps for Explainable AI use cases.",
        ],
      },
    ],
  },
  work: {
    label: "projects",
    title: "Things I've built",
    featuredLabel: "featured",
    featured: {
      title: "HomeOps",
      kicker: "Multi-agent household assistant · Oct 2026 – Present",
      description:
        "A Telegram assistant that runs fully on local open-weight LLMs. A LangGraph inventory agent picks tools while deterministic Python makes every pantry change; a vision model turns supermarket receipts into verified pantry items. Every agent ships with a benchmark and a ≥ 90% pass threshold.",
      metrics: [
        { value: "97%", label: "chat benchmark (35/36)" },
        { value: "100%", label: "receipt lines found, none invented" },
        { value: "20/20", label: "tool-calling benchmark" },
        { value: "1.4 s", label: "median per message" },
      ],
      tags: ["LangGraph", "Ollama", "qwen3:8b", "qwen2.5vl:7b", "PostgreSQL", "Langfuse", "Docker Compose", "GitHub Actions"],
    },
    projects: [
      {
        title: "Unmanned Ground Vehicle",
        kicker: "Autonomous navigation · TEKNOFEST · Dec 2025 – Sep 2026",
        description:
          "Software interface for monitoring and controlling an autonomous ground vehicle, with real-time visualization of navigation data and system status, plus image annotation for object detection and perception models.",
        tags: ["Computer Vision", "Object Detection", "Robotics"],
      },
      {
        title: "Crime Rate Factors",
        kicker: "Co-authored research paper · Apr – May 2025",
        description:
          "Socio-economic predictors of U.S. violent crime (UCI dataset, 1,994 × 128). End-to-end pipeline with RF imputation, feature selection and SMOTE; benchmarked 15 algorithms and chose an ANN at 96.33% accuracy.",
        tags: ["scikit-learn", "SMOTE", "ANN", "CatBoost"],
      },
      {
        title: "MiKuri",
        kicker: "Card battle game · OOP course · Nov – Dec 2024",
        description:
          "Pokémon TCG-inspired card battle game in Java: a class hierarchy for cards, players, decks and battles, with a JavaFX / FXML interface in an MVC-style split.",
        tags: ["Java", "JavaFX", "OOP"],
      },
    ],
  },
  skills: {
    label: "skills",
    title: "Stack I work with",
    groups: [
      "Machine Learning & CV",
      "LLMs & Agents",
      "Inference & Deployment",
      "Data & DevOps",
      "Programming",
    ],
  },
  about: {
    label: "about",
    title: "Background",
    intro:
      "Fourth-year Computer Engineering student in Ankara on a fully funded Türkiye Scholarship. I like the part of AI where models leave the notebook: making them fast on real GPUs, testing them against benchmarks, and wiring them into systems people actually use.",
    educationLabel: "education",
    degree: "B.E. Computer Engineering",
    eduDates: "Sep 2023 – Jul 2027 · GPA 3.41 / 4.00",
    scholarshipLabel: "scholarship",
    scholarship: "Türkiye Scholarships recipient",
    scholarshipDetail: "Bachelor's degree, fully funded · Aug 2022 – Jul 2027",
    languagesLabel: "languages",
    languages: [
      { name: "Spanish", level: "Native", pct: 100 },
      { name: "English", level: "Bilingual", pct: 95 },
      { name: "Turkish", level: "Professional", pct: 75 },
      { name: "French", level: "Basic", pct: 30 },
    ],
    certificatesLabel: "certificates",
    certificates: [
      { name: "Claude Code 101", by: "Anthropic", date: "Jun 2026" },
      { name: "Machine Learning A-Z", by: "SuperDataScience", date: "Sep 2025" },
      { name: "The Complete Python Pro Bootcamp", by: "London App Brewery", date: "Aug 2025" },
      { name: "Google Cloud Skills Boost", by: "Google", date: "Aug 2025" },
      { name: "Introduction to Data Science", by: "Cisco", date: "Mar 2025" },
    ],
  },
  contact: {
    label: "contact",
    title: "Let's build something",
    intro:
      "Open to opportunities in computer vision, ML engineering and agentic LLM systems. Email is the fastest way to reach me.",
    cta: "Send an email",
  },
  footer: {
    built: "Built with Astro · Tailwind · Motion",
  },
};

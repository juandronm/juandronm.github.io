import type { en } from "./en";

export const es: typeof en = {
  meta: {
    title: "Juan Diego Ron Molina — Ingeniero de IA · Visión por Computadora y LLMs Agénticos",
    description:
      "Juan Diego Ron Molina, Ingeniero de IA en YourEye Technologies y estudiante de Ingeniería en Computación en la Universidad Gazi. Visión por computadora, despliegue con TensorRT y sistemas LLM agénticos.",
  },
  nav: {
    links: ["Experiencia", "Proyectos", "Habilidades", "Sobre mí", "Contacto"],
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    theme: "Cambiar tema de color",
    language: "Idioma",
  },
  hero: {
    badge: "Ingeniero de IA @ YourEye Technologies",
    location: "Ankara, Turquía",
    roles: ["Visión por Computadora", "Sistemas LLM Agénticos", "Inferencia en Edge y GPU", "Machine Learning"],
    intro:
      "Estudiante de cuarto año de Ingeniería en Computación en la Universidad Gazi. Llevo machine learning y visión por computadora a producción, desde motores TensorRT en servidores GPU Blackwell hasta sistemas LLM agénticos que funcionan completamente con modelos open-weight locales.",
    cta: "Ver proyectos",
    stats: [
      { value: 25, suffix: "/25", label: "piezas nunca vistas identificadas solo con datos sintéticos" },
      { value: 97, suffix: "%", label: "de aciertos en el benchmark de mi agente LangGraph" },
      { value: 145, suffix: " ms", label: "por frame tras optimizar en GPU (desde ~620)" },
      { value: 3.41, decimals: 2, suffix: "", label: "GPA, Ingeniería en Computación en la Universidad Gazi" },
    ],
  },
  experience: {
    label: "experiencia",
    title: "Dónde he trabajado",
    roles: [
      {
        company: "YourEye Technologies",
        role: "Ingeniero de Inteligencia Artificial",
        dates: "May 2026 – Actualidad",
        current: true,
        tags: ["TensorRT", "ONNX", "GStreamer", "BlenderProc", "DINOv2", "InsightFace"],
        bullets: [
          "Desarrollé flujos de TensorRT que convierten modelos PyTorch / Ultralytics YOLO en <b>motores TensorRT FP16</b> vía ONNX para servidores GPU de analítica de cámaras en vivo, reduciendo la latencia de inferencia y el uso de memoria GPU.",
          "Desplegué modelos de visión por computadora en servidores <b>NVIDIA RTX PRO 6000 Blackwell</b> con pipelines RTSP GStreamer que transmiten cámaras de seguridad en vivo a inferencia en tiempo real.",
          "Construí un sistema de reconocimiento de piezas entrenado solo con <b>datos sintéticos de BlenderProc</b> a partir de modelos CAD del cliente: un detector + matcher DINOv2 registra nuevos CAD en minutos sin reentrenar y rechaza piezas desconocidas.",
          "Identifiqué <b>25/25</b> piezas con ángulos, acabados e iluminación nunca vistos, y <b>92/100</b> en fondos complejos sin etiquetas erróneas; reduje la inferencia de <b>~620 a ~145 ms/frame</b> para uso en vivo con la cámara del móvil.",
          "Construí reconocimiento facial en tiempo real con InsightFace (buffalo_l): detector RetinaFace + ArcFace ResNet-50 que genera embeddings de 512 dimensiones normalizados con L2.",
        ],
      },
      {
        company: "Syntexchub",
        role: "Pasante de Inteligencia Artificial",
        dates: "Mar 2026 – Abr 2026",
        current: false,
        tags: ["OpenCV", "MediaPipe", "Llama", "Whisper", "Prompt engineering"],
        bullets: [
          "Construí un sistema de reconocimiento de gestos de la mano con OpenCV y MediaPipe, que clasifica gestos desde la webcam en tiempo real.",
          "Diseñé un chatbot por voz con Llama (HuggingFace) para las respuestas y Whisper-large-v3-turbo para voz a texto, con manejo de contexto en conversaciones de varios turnos.",
          "Implementé un pipeline de prompting chain-of-thought que divide consultas complejas en pasos de razonamiento intermedios para casos de IA Explicable.",
        ],
      },
    ],
  },
  work: {
    label: "proyectos",
    title: "Lo que he construido",
    featuredLabel: "destacado",
    featured: {
      title: "HomeOps",
      kicker: "Asistente doméstico multiagente · Oct 2026 – Actualidad",
      description:
        "Un asistente de Telegram que funciona completamente con LLMs open-weight locales. Un agente de inventario en LangGraph elige las herramientas mientras Python determinista hace cada cambio en la despensa; un modelo de visión convierte tickets del supermercado en productos verificados. Cada agente incluye un benchmark con un umbral de aprobación ≥ 90%.",
      metrics: [
        { value: "97%", label: "benchmark de chat (35/36)" },
        { value: "100%", label: "líneas de ticket encontradas, ninguna inventada" },
        { value: "20/20", label: "benchmark de tool-calling" },
        { value: "1.4 s", label: "mediana por mensaje" },
      ],
      tags: ["LangGraph", "Ollama", "qwen3:8b", "qwen2.5vl:7b", "PostgreSQL", "Langfuse", "Docker Compose", "GitHub Actions"],
    },
    projects: [
      {
        title: "Vehículo Terrestre No Tripulado",
        kicker: "Navegación autónoma · TEKNOFEST · Dic 2025 – Sep 2026",
        description:
          "Interfaz de software para monitorear y controlar un vehículo terrestre autónomo, con visualización en tiempo real de los datos de navegación y el estado del sistema, además de anotación de imágenes para modelos de detección de objetos y percepción.",
        tags: ["Visión por Computadora", "Detección de Objetos", "Robótica"],
      },
      {
        title: "Factores de Criminalidad",
        kicker: "Artículo de investigación en coautoría · Abr – May 2025",
        description:
          "Predictores socioeconómicos del crimen violento en EE. UU. (dataset UCI, 1.994 × 128). Pipeline completo con imputación RF, selección de variables y SMOTE; comparé 15 algoritmos y elegí una ANN con 96,33% de precisión.",
        tags: ["scikit-learn", "SMOTE", "ANN", "CatBoost"],
      },
      {
        title: "MiKuri",
        kicker: "Juego de cartas · Curso de POO · Nov – Dic 2024",
        description:
          "Juego de batallas de cartas en Java inspirado en Pokémon TCG: jerarquía de clases para cartas, jugadores, mazos y batallas, con interfaz JavaFX / FXML separada al estilo MVC.",
        tags: ["Java", "JavaFX", "POO"],
      },
    ],
  },
  skills: {
    label: "habilidades",
    title: "Tecnologías que uso",
    groups: [
      "Machine Learning y Visión",
      "LLMs y Agentes",
      "Inferencia y Despliegue",
      "Datos y DevOps",
      "Programación",
    ],
  },
  about: {
    label: "sobre mí",
    title: "Trayectoria",
    intro:
      "Estudiante de cuarto año de Ingeniería en Computación en Ankara con la beca Türkiye Bursları, totalmente financiada. Me gusta la parte de la IA en la que los modelos salen del notebook: hacerlos rápidos en GPUs reales, medirlos con benchmarks y conectarlos a sistemas que la gente realmente usa.",
    educationLabel: "educación",
    degree: "Ingeniería en Computación (B.E.)",
    eduDates: "Sep 2023 – Jul 2027 · GPA 3.41 / 4.00",
    scholarshipLabel: "beca",
    scholarship: "Becario de Türkiye Bursları",
    scholarshipDetail: "Grado universitario, totalmente financiado · Ago 2022 – Jul 2027",
    languagesLabel: "idiomas",
    languages: [
      { name: "Español", level: "Nativo", pct: 100 },
      { name: "Inglés", level: "Bilingüe", pct: 95 },
      { name: "Turco", level: "Profesional", pct: 75 },
      { name: "Francés", level: "Básico", pct: 30 },
    ],
    certificatesLabel: "certificados",
    certificates: [
      { name: "Claude Code 101", by: "Anthropic", date: "Jun 2026" },
      { name: "Machine Learning A-Z", by: "SuperDataScience", date: "Sep 2025" },
      { name: "The Complete Python Pro Bootcamp", by: "London App Brewery", date: "Ago 2025" },
      { name: "Google Cloud Skills Boost", by: "Google", date: "Ago 2025" },
      { name: "Introduction to Data Science", by: "Cisco", date: "Mar 2025" },
    ],
  },
  contact: {
    label: "contacto",
    title: "Construyamos algo",
    intro:
      "Abierto a oportunidades en visión por computadora, ingeniería de ML y sistemas LLM agénticos. El correo es la forma más rápida de contactarme.",
    cta: "Enviar un correo",
  },
  footer: {
    built: "Hecho con Astro · Tailwind · Motion",
  },
};

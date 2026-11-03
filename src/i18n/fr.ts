import type { en } from "./en";

export const fr: typeof en = {
  meta: {
    title: "Juan Diego Ron Molina — Ingénieur IA · Vision par ordinateur et LLM agentiques",
    description:
      "Juan Diego Ron Molina, Ingénieur IA chez YourEye Technologies et étudiant en génie informatique à l'Université Gazi. Vision par ordinateur, déploiement TensorRT et systèmes LLM agentiques.",
  },
  nav: {
    links: ["Expérience", "Projets", "Compétences", "À propos", "Contact"],
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    theme: "Changer le thème de couleur",
    language: "Langue",
  },
  hero: {
    badge: "Ingénieur IA @ YourEye Technologies",
    location: "Ankara, Turquie",
    roles: ["Vision par ordinateur", "Systèmes LLM agentiques", "Inférence Edge et GPU", "Machine Learning"],
    intro:
      "Étudiant en quatrième année de génie informatique à l'Université Gazi. Je mets le machine learning et la vision par ordinateur en production, des moteurs TensorRT sur des serveurs GPU Blackwell aux systèmes LLM agentiques fonctionnant entièrement sur des modèles open-weight locaux.",
    cta: "Voir les projets",
    stats: [
      { value: 25, suffix: "/25", label: "pièces inédites identifiées uniquement à partir de données synthétiques" },
      { value: 97, suffix: " %", label: "de réussite au benchmark de mon agent LangGraph" },
      { value: 145, suffix: " ms", label: "par image après optimisation GPU (contre ~620)" },
      { value: 3.41, decimals: 2, suffix: "", label: "GPA, génie informatique à l'Université Gazi" },
    ],
  },
  experience: {
    label: "expérience",
    title: "Là où j'ai livré",
    roles: [
      {
        company: "YourEye Technologies",
        role: "Ingénieur en intelligence artificielle",
        dates: "mai 2026 – Aujourd'hui",
        current: true,
        tags: ["TensorRT", "ONNX", "GStreamer", "BlenderProc", "DINOv2", "InsightFace"],
        bullets: [
          "Conçu des workflows TensorRT convertissant des modèles PyTorch / Ultralytics YOLO en <b>moteurs TensorRT FP16</b> via ONNX pour des serveurs GPU d'analyse vidéo en direct, réduisant la latence d'inférence et la charge mémoire GPU.",
          "Déployé des modèles de vision par ordinateur sur des serveurs <b>NVIDIA RTX PRO 6000 Blackwell</b> avec des pipelines RTSP GStreamer transmettant les flux de caméras de sécurité en direct vers l'inférence temps réel.",
          "Créé un système de reconnaissance de pièces entraîné uniquement sur des <b>données synthétiques BlenderProc</b> issues des modèles CAO du client : un détecteur + matcher DINOv2 enregistre de nouvelles CAO en quelques minutes sans réentraînement et rejette les pièces inconnues.",
          "Identifié <b>25/25</b> pièces sous des angles, finitions et éclairages inédits, et <b>92/100</b> sur fonds complexes sans aucune étiquette erronée ; réduit l'inférence de <b>~620 à ~145 ms/image</b> pour un usage en direct avec la caméra du téléphone.",
          "Développé une reconnaissance faciale en temps réel avec InsightFace (buffalo_l) : détecteur RetinaFace + ArcFace ResNet-50 produisant des embeddings de 512 dimensions normalisés L2.",
        ],
      },
      {
        company: "Syntexchub",
        role: "Stagiaire en intelligence artificielle",
        dates: "mars 2026 – avr. 2026",
        current: false,
        tags: ["OpenCV", "MediaPipe", "Llama", "Whisper", "Prompt engineering"],
        bullets: [
          "Créé un système de reconnaissance des gestes de la main avec OpenCV et MediaPipe, classifiant les gestes à partir de la webcam en temps réel.",
          "Conçu un chatbot vocal avec Llama (HuggingFace) pour les réponses et Whisper-large-v3-turbo pour la transcription, avec gestion du contexte dans les conversations à plusieurs tours.",
          "Mis en place un pipeline de prompting chain-of-thought décomposant les requêtes complexes en étapes de raisonnement intermédiaires pour des cas d'IA explicable.",
        ],
      },
    ],
  },
  work: {
    label: "projets",
    title: "Ce que j'ai construit",
    featuredLabel: "à la une",
    featured: {
      title: "HomeOps",
      kicker: "Assistant domestique multi-agents · oct. 2026 – Aujourd'hui",
      description:
        "Un assistant Telegram qui fonctionne entièrement sur des LLM open-weight locaux. Un agent d'inventaire LangGraph choisit les outils tandis que du Python déterministe effectue chaque modification du garde-manger ; un modèle de vision transforme les tickets de caisse en produits vérifiés. Chaque agent est livré avec un benchmark et un seuil de réussite ≥ 90 %.",
      metrics: [
        { value: "97 %", label: "benchmark de chat (35/36)" },
        { value: "100 %", label: "lignes de ticket trouvées, aucune inventée" },
        { value: "20/20", label: "benchmark d'appel d'outils" },
        { value: "1,4 s", label: "médiane par message" },
      ],
      tags: ["LangGraph", "Ollama", "qwen3:8b", "qwen2.5vl:7b", "PostgreSQL", "Langfuse", "Docker Compose", "GitHub Actions"],
    },
    projects: [
      {
        title: "Véhicule terrestre sans pilote",
        kicker: "Navigation autonome · TEKNOFEST · déc. 2025 – sept. 2026",
        description:
          "Interface logicielle de supervision et de contrôle d'un véhicule terrestre autonome, avec visualisation en temps réel des données de navigation et de l'état du système, ainsi que l'annotation d'images pour les modèles de détection d'objets et de perception.",
        tags: ["Vision par ordinateur", "Détection d'objets", "Robotique"],
      },
      {
        title: "Facteurs de criminalité",
        kicker: "Article de recherche co-écrit · avr. – mai 2025",
        description:
          "Prédicteurs socio-économiques de la criminalité violente aux États-Unis (jeu de données UCI, 1 994 × 128). Pipeline complet avec imputation RF, sélection de variables et SMOTE ; comparaison de 15 algorithmes et choix d'un ANN à 96,33 % de précision.",
        tags: ["scikit-learn", "SMOTE", "ANN", "CatBoost"],
      },
      {
        title: "MiKuri",
        kicker: "Jeu de combat de cartes · cours de POO · nov. – déc. 2024",
        description:
          "Jeu de combat de cartes en Java inspiré du JCC Pokémon : hiérarchie de classes pour les cartes, joueurs, decks et combats, avec une interface JavaFX / FXML séparée façon MVC.",
        tags: ["Java", "JavaFX", "POO"],
      },
    ],
  },
  skills: {
    label: "compétences",
    title: "Technologies que j'utilise",
    groups: [
      "Machine Learning et vision",
      "LLM et agents",
      "Inférence et déploiement",
      "Données et DevOps",
      "Programmation",
    ],
  },
  about: {
    label: "à propos",
    title: "Parcours",
    intro:
      "Étudiant en quatrième année de génie informatique à Ankara grâce à une bourse Türkiye Bursları entièrement financée. J'aime la partie de l'IA où les modèles sortent du notebook : les rendre rapides sur de vrais GPU, les tester avec des benchmarks et les intégrer à des systèmes que les gens utilisent vraiment.",
    educationLabel: "formation",
    degree: "Licence d'ingénierie en génie informatique",
    eduDates: "sept. 2023 – juil. 2027 · GPA 3.41 / 4.00",
    scholarshipLabel: "bourse",
    scholarship: "Boursier Türkiye Bursları",
    scholarshipDetail: "Licence, entièrement financée · août 2022 – juil. 2027",
    languagesLabel: "langues",
    languages: [
      { name: "Espagnol", level: "Langue maternelle", pct: 100 },
      { name: "Anglais", level: "Bilingue", pct: 95 },
      { name: "Turc", level: "Professionnel", pct: 75 },
      { name: "Français", level: "Notions", pct: 30 },
    ],
    certificatesLabel: "certificats",
    certificates: [
      { name: "Claude Code 101", by: "Anthropic", date: "juin 2026" },
      { name: "Machine Learning A-Z", by: "SuperDataScience", date: "sept. 2025" },
      { name: "The Complete Python Pro Bootcamp", by: "London App Brewery", date: "août 2025" },
      { name: "Google Cloud Skills Boost", by: "Google", date: "août 2025" },
      { name: "Introduction to Data Science", by: "Cisco", date: "mars 2025" },
    ],
  },
  contact: {
    label: "contact",
    title: "Construisons quelque chose",
    intro:
      "Ouvert aux opportunités en vision par ordinateur, ingénierie ML et systèmes LLM agentiques. L'e-mail est le moyen le plus rapide de me joindre.",
    cta: "Envoyer un e-mail",
  },
  footer: {
    built: "Créé avec Astro · Tailwind · Motion",
  },
};

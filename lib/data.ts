// ============================================================
// lib/data.ts — Portfolio data & ML Playground configurations
// ============================================================

export interface Project {
  id: number;
  title: string;
  category: "Computer Vision" | "LLMs & RAG" | "Data Engineering";
  categoryLabel: string;
  description: string;
  impact: string;
  result: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  type: "internship" | "club" | "full-time";
  metricsBadge?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Patent {
  title: string;
  status: string;
  date?: string;
  applicationNumber?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; detail: string }[];
}

export const siteConfig = {
  name: "S Adithya Nachiyappan",
  initials: "SAN",
  role: "Machine Learning Engineer & Software Developer",
  pitch:
    "Specializing in computer vision, deepfake detection, production RAG pipelines, and high-throughput data infrastructure. B.Tech IT student at VIT Vellore.",
  email: "adithyanachiyappan@gmail.com",
  phone: "7845328332",
  location: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/adithya-nachiyappan/",
  github: "https://github.com/Nachi2006",
  resume:
    "https://drive.google.com/file/d/1aW09yoodVD4tQ7hKVND-hM1TjnMPlISQ/view?usp=sharing",
  statusBadge: "Open to ML / AI / Data / SWE Roles",
  timezone: "Asia/Kolkata",
};

export const skillsMarqueeRow1 = [
  "PyTorch",
  "TensorFlow",
  "Computer Vision",
  "Deepfake Detection",
  "YOLO Architectures",
  "RAG Pipelines",
  "LLM Integration",
  "OCR & Document AI",
  "FastAPI",
  "OpenCV",
  "Bi-LSTM / GRU",
  "Vector DBs",
];

export const skillsMarqueeRow2 = [
  "Python",
  "Go",
  "VictoriaMetrics",
  "Grafana",
  "MQTT Streaming",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Time-Series Data",
  "System Design",
  "Streamlit",
  "Oracle Cloud",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "DeepDetector",
    category: "Computer Vision",
    categoryLabel: "Deepfake Detection · Neural Networks",
    description:
      "Engineered a hybrid Bi-LSTM + GRU sequence classification network for high-accuracy image and frame-by-frame video deepfake detection. Includes automated face cropping via YOLO and a Streamlit dashboard for real-time video stream verification.",
    impact: "Outperformed baseline CNNs on temporal artifacts in deepfake media.",
    result: "96.4% Accuracy on Unseen Test Sequences",
    tech: ["Python", "PyTorch", "YOLO", "Bi-LSTM", "GRU", "OpenCV", "Streamlit"],
    github: "https://github.com/Nachi2006",
  },
  {
    id: 2,
    title: "AttentioMate",
    category: "Computer Vision",
    categoryLabel: "Computer Vision · Child Safety AI",
    description:
      "Developed a end-to-end child emotion detection system. Curated and manually labeled a custom dataset of 1,000+ images using Pigeon-Annotator, trained a lightweight YOLO facial-emotion model on TensorFlow, and deployed an alert dashboard.",
    impact: "Real-time distress signaling with low inference latency on standard webcams.",
    result: "81% Detection Accuracy on Production Live Feeds",
    tech: ["Python", "TensorFlow", "YOLO", "OpenCV", "Pigeon-Annotator", "Streamlit"],
    link: "https://colab.research.google.com/drive/12WJP994a83k_YuD1RLG9OZX6tEmmyZGe?usp=sharing",
    github: "https://github.com/Nachi2006",
  },
  {
    id: 3,
    title: "EasyLLM",
    category: "LLMs & RAG",
    categoryLabel: "Offline GenAI · RAG Pipeline",
    description:
      "Built a zero-cloud-cost, privacy-first local AI assistant powered by Ollama. Combines Retrieval-Augmented Generation (RAG) over local document stores, multimodal image understanding, and CPU-optimized Stable Diffusion generation.",
    impact: "100% offline inference with zero API subscriptions or data leak risk.",
    result: "Sub-2s Query Latency on Local CPU",
    tech: ["Python", "Ollama", "PyTorch", "RAG", "Stable Diffusion", "Streamlit"],
    github: "https://github.com/Nachi2006/C2C-LeDragons-EasyLLM",
  },
  {
    id: 4,
    title: "Industrial IoT Monitoring Stack",
    category: "Data Engineering",
    categoryLabel: "Data Engineering · Aspire Systems",
    description:
      "Designed and deployed a unified monitoring stack replacing legacy Blynk infrastructure. Built a high-throughput telemetry ingestion service merging time-series data with static metadata registries using outer joins, regex parsing, and multi-frame partitioning.",
    impact: "Eliminated third-party platform licensing fees while improving telemetry retention.",
    result: "~70% Infrastructure Cost Reduction",
    tech: ["Grafana", "VictoriaMetrics", "MQTT", "Python", "Docker", "Time-Series DB"],
    github: "https://github.com/Nachi2006",
  },
  {
    id: 5,
    title: "Document Intelligence & NL-to-SQL Pipeline",
    category: "LLMs & RAG",
    categoryLabel: "Document AI · Qube Cinemas",
    description:
      "Created an enterprise document ingestion pipeline converting scanned and digital PDFs into structured data. Integrated Tesseract OCR, PyPDF2 parser, a Natural-Language-to-SQL schema converter, and a Streamlit RAG interface for non-technical queries.",
    impact: "Unlocked SQL database querying for non-technical business teams.",
    result: "Unified Search across 10,000+ Mixed PDFs & Tables",
    tech: ["Python", "Tesseract OCR", "PyPDF2", "SQL", "Streamlit", "RAG", "NLP"],
    github: "https://github.com/Nachi2006",
  },
];

export const experiences: Experience[] = [
  {
    role: "Research Intern",
    org: "NIT Trichy",
    location: "Tiruchirappalli, India",
    period: "May 2026 – Present",
    metricsBadge: "AI Safety",
    bullets: [
      "Researching Mechanistic Interpretability on Small Language Models (SLMs) and Attention Head Tuning to improve AI safety.",
      "Advised and guided by Dr. Santhanavijayan (NIT Trichy).",
    ],
    type: "internship",
  },
  {
    role: "Summer Intern",
    org: "Aspire Systems",
    location: "Chennai, India",
    period: "May 2026 – Jul 2026",
    metricsBadge: "~70% Cost Reduction",
    bullets: [
      "Architected a real-time industrial telemetry stack using VictoriaMetrics and Grafana, ingesting high-frequency MQTT streams.",
      "Engineered an automated data pipeline merging live time-series streams with static CSV asset registries via outer joins and regex stream partitioning.",
      "Successfully migrated industrial sensor monitoring off Blynk, reducing infrastructure overhead by approximately 70%.",
    ],
    type: "internship",
  },
  {
    role: "Generative AI Intern",
    org: "Qube Cinemas",
    location: "Chennai, India",
    period: "May 2025 – Jul 2025",
    metricsBadge: "Document Intelligence",
    bullets: [
      "Built a hybrid OCR pipeline using Tesseract and PyPDF2, extracting clean text from scanned and native PDF assets.",
      "Designed a Natural-Language-to-SQL query engine enabling non-technical internal teams to query database schemas in plain English.",
      "Constructed a Streamlit RAG interface over multi-format document repositories for contextual search.",
    ],
    type: "internship",
  },
  {
    role: "Co-Secretary",
    org: "Mozilla Firefox Club, VIT Vellore",
    location: "Vellore, India",
    period: "Jan 2026 – Present",
    metricsBadge: "500+ Active Users",
    bullets: [
      "Optimized backend services for the club enrollment portal to support 500+ concurrent user requests during peak recruitment.",
      "Enhanced database performance and API responsiveness for 'Roommate Dhoondo', a campus platform serving 550+ active VIT students.",
    ],
    type: "club",
  },
];

export const education = {
  degree: "B.Tech Information Technology",
  institution: "Vellore Institute of Technology",
  location: "Vellore, India",
  period: "Jul 2024 – Present",
  cgpa: "9.00 / 10.0",
};

export const certifications: Certification[] = [
  {
    name: "Oracle Certified Data Scientist",
    issuer: "Oracle Corporation",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1aNbFo3jNAgfr-spPnge4JoaKcdNPvb-A/view?usp=drive_link",
  },
];

export const patents: Patent[] = [
  {
    title: "Distributed Edge-Based Wildlife Monitoring System With Spatial Data Obfuscation And Asynchronous Synchronization",
    status: "Published",
    applicationNumber: "Application No. 202641051548",
  },
];

export const aboutBio = [
  "I'm an Information Technology undergraduate at VIT Vellore (CGPA 9.00/10.0) focusing on practical machine learning systems, computer vision, and backend data engineering.",
  "Rather than relying on canned benchmarks, I enjoy building models from the ground up to solve concrete engineering challenges — whether that's manually annotating a 1,000+ image dataset for child emotion detection (AttentioMate), training Bi-LSTM/GRU neural networks for deepfake video detection (DeepDetector), or optimizing local offline RAG pipelines with zero cloud API costs (EasyLLM).",
  "During my internships at Aspire Systems and Qube Cinemas, I shipped production pipelines that reduced infrastructure operational costs by 70% and enabled automated document intelligence. I am seeking roles in Machine Learning, AI Engineering, Data Science, or Software Engineering.",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Machine Learning & Computer Vision",
    skills: [
      { name: "PyTorch", detail: "Deep learning model training, sequence networks, custom layers" },
      { name: "TensorFlow", detail: "Object detection, YOLO pipelines, model optimization" },
      { name: "OpenCV", detail: "Image preprocessing, frame extraction, video stream processing" },
      { name: "YOLO Architectures", detail: "Face localization, emotion detection, real-time bounding boxes" },
      { name: "Bi-LSTM & GRU", detail: "Temporal sequence classification, deepfake video detection" },
      { name: "Scikit-learn", detail: "Feature engineering, clustering, classification metrics" },
    ],
  },
  {
    title: "GenAI & Document Intelligence",
    skills: [
      { name: "RAG Architectures", detail: "Retrieval-augmented generation, vector search, chunking" },
      { name: "Ollama & Local LLMs", detail: "CPU-optimized offline LLM hosting, prompt tuning" },
      { name: "Tesseract OCR & PyPDF2", detail: "Document processing, scanned PDF text extraction" },
      { name: "NL-to-SQL", detail: "Natural language query translation to SQL schemas" },
      { name: "Stable Diffusion", detail: "Multimodal image generation, prompt engineering" },
    ],
  },
  {
    title: "Data Engineering & Backends",
    skills: [
      { name: "VictoriaMetrics", detail: "High-throughput time-series metrics storage" },
      { name: "Grafana", detail: "Real-time industrial telemetry dashboards" },
      { name: "FastAPI & Express", detail: "High-performance REST API services" },
      { name: "MQTT Protocols", detail: "IoT telemetry ingestion stream partitioning" },
      { name: "PostgreSQL & MongoDB", detail: "Relational joins, index tuning, document databases" },
      { name: "Docker", detail: "Containerized deployment pipelines" },
    ],
  },
  {
    title: "Languages & Core CS",
    skills: [
      { name: "Python", detail: "Primary language for ML, data engineering & scripting" },
      { name: "Go", detail: "High-concurrency backend services" },
      { name: "Java & C/C++", detail: "Data structures, algorithms, object-oriented design" },
      { name: "SQL", detail: "Complex queries, window functions, time-series joins" },
      { name: "TypeScript / JS", detail: "Next.js, modern web UI development" },
    ],
  },
];


export const siteConfig = {
  name: "Ashish Kumar",
  surname: "Panda",
  tagline: "CAT — Coder | Artist | Traveler",
  intro: "MSCS student at UC San Diego. AI Engineer building the future of intelligent systems through computer vision and agentic architectures.",
  subheadline: "Engineering Intelligence.",
  accentColor: "#FF8000",
  socials: {
    github: "https://github.com/Ashindustry007",
    linkedin: "https://linkedin.com/in/ashishkumar-panda",
    instagram: "https://instagram.com/ashish.panda"
  },
  skills: [
    { id: "#01", label: "AI & Machine Learning" },
    { id: "#02", label: "Computer Vision & LLMs" },
    { id: "#03", label: "Agentic AI & Systems" },
    { id: "#04", label: "Software Engineering" }
  ],
  framesCount: 192,
  framesBaseUrl: "https://uobfpmgknyqxdsdvqcfe.supabase.co/storage/v1/object/public/Webp%20Sequence/frame_",
  framesSuffix: "_delay-0.042s.png"
};

export const experience = [
  {
    title: "AI Research Intern",
    company: "Boolean Lab - UCSD Health",
    description: "Engineered self-supervised PyTorch pipelines for colon tissue analysis using Spatial Transcriptomics. Fine-tuned DINOv3-7B Transformers using LoRA, reducing memory by 75% while achieving 81% mIoU in tissue segmentation."
  },
  {
    title: "Software Engineer",
    company: "Open Financial Technologies",
    description: "Deployed Multi-modal AI models boosting extraction accuracy by 18% for automated invoice conversion (92% success). Engineered secure fintech solutions protecting 50K+ users with RBI-compliant risk controls."
  },
  {
    title: "Deep Learning Research Intern",
    company: "Pucho Digital Healthcare",
    description: "Accelerated mRNA vaccine screening via deep learning pipelines. Implemented Explainable AI (XAI) for cell anomaly detection in MRI scans, achieving 96.55% sensitivity for clinical decision support."
  },
  {
    title: "Data Science Intern",
    company: "Analytics Labs",
    description: "Designed hybrid deep learning models for COVID-19 spread prediction with 89% forecast accuracy. Mitigated financial fraud using Genetic Algorithms and Scikit-Learn (98.5% recall)."
  }
];

export const projects = [
  {
    title: "Diabetic Retinopathy Segmentation",
    description: "Developed a Residual U-Net model for early detection of diabetic retinopathy, achieving an AUC of 0.9667 using Python, Keras, and OpenCV.",
    imageKey: "project-retinal"
  },
  {
    title: "Vocal Bio-Marker AI",
    description: "Created a hybrid CRNN-Attention model for non-invasive COVID-19 screening with 97% accuracy using spectral feature extraction and Bidirectional LSTMs.",
    imageKey: "project-vocal"
  },
  {
    title: "Population Growth Prediction",
    description: "Deep learning pipeline to predict exponential growth rates from genetic data. Benchmarked ANNs against Deep Transformer and MultiTask Learning architectures to solve data sparsity in SNP matrices.",
    imageKey: "project-population"
  }
];

export const publications = [
  {
    title: "Odia Handwritten Numeral Recognition: A Hybrid Modelling Approach",
    authors: "A. K. Panda, S. Dash, A. Kuanar, D. Behera and B. Panda",
    conference: "2021 5th International Conference on Electronics, Communication and Aerospace Technology (ICECA)",
    doi: "10.1109/ICECA52323.2021.9675980"
  }
];

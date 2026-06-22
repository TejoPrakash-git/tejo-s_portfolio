export const personal = {
  name: 'Tejo Prakash',
  surname: 'Madabathula',
  tagline: 'Prompting is my Programming.',
  role: 'Full Stack Web & App Developer',
  location: 'Visakhapatnam, India',
  available: true,
  email: 'tejohere6@gmail.com',
  github: 'https://github.com/TejoPrakash-git',
  linkedin: 'https://linkedin.com/in/m-tejo-prakash-32897232a',
  about: [
    "I'm a full stack web and app developer who builds end-to-end products -- from pixel-perfect React frontends to scalable Node.js backends and cross-platform Flutter apps.",
    "My edge is AI. I treat prompts like code. Instead of patching AI on top of products as an afterthought, I design systems where intelligence is the architecture -- from VidhiAware's MCQ legal engine to StudyMateX's document reasoning pipeline.",
    "I build fast, ship clean, and obsess over the details that make a product feel intentional.",
  ],
};

export const skills = [
  { category: 'Mobile', icon: '\u25c8', items: ['Flutter', 'Dart'] },
  { category: 'Frontend', icon: '\u25c7', items: ['React.js', 'Next.js', 'JSX / TSX', 'Tailwind CSS', 'CSS3'] },
  { category: 'Backend', icon: '\u25c6', items: ['Node.js', 'Express.js', 'REST API Design'] },
  { category: 'Databases', icon: '\u25cb', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'XAMPP'] },
  { category: 'Generative AI', icon: '\u2726', items: ['OpenAI API', 'Prompt Engineering', 'AI Workflows'] },
  { category: 'APIs & Integrations', icon: '\u2b21', items: ['WhatsApp Business API', 'Postman', 'REST APIs'] },
  { category: 'DevOps & Deploy', icon: '\u25b2', items: ['Vercel', 'Git', 'GitHub', 'Git Bash'] },
  { category: 'Soft Skills', icon: '\u25ce', items: ['Problem-Solving', 'Teamwork', 'Communication'] },
];

export const projects = [
  {
    id: 'vidhiaware',
    num: '01',
    title: 'VidhiAware',
    subtitle: 'AI Legal Assistant',
    description: 'AI-driven legal assistant that guides users through a dynamic MCQ questionnaire to identify their legal issue. Generates structured case reports with next steps and required documentation.',
    longDescription: "Built a full-stack legal intelligence platform where users answer a curated MCQ flow and receive a structured legal report -- case summary, actionable next steps, and required documents -- all generated via OpenAI API. Designed the prompt architecture to parse MCQ answers and produce consistent, reliable legal guidance.",
    tags: ['React.js', 'Next.js', 'Node.js', 'OpenAI API', 'PostgreSQL'],
    size: 'large',
    accent: '#c9a84c',
    github: 'https://github.com/TejoPrakash-git',
    live: '#',
  },
  {
    id: 'studymatex',
    num: '02',
    title: 'StudyMateX',
    subtitle: 'AI Study Assistant',
    description: 'AI-powered study companion that generates summaries and explanations from uploaded PDFs, text, and images using OpenAI API.',
    longDescription: "Designed and built a document-intelligence study tool. Users upload course material -- PDFs, images, or raw text -- and receive clear summaries, concept explanations, and Q&A. Integrated OpenAI vision and text models with a Next.js frontend and Node.js processing backend.",
    tags: ['React.js', 'Next.js', 'Node.js', 'OpenAI API'],
    size: 'medium',
    accent: '#c9a84c',
    github: 'https://github.com/TejoPrakash-git',
    live: '#',
  },
  {
    id: 'vandana-mall',
    num: '03',
    title: 'Vandana Mall',
    subtitle: 'Staff Management System',
    description: 'Full-stack staff management system tracking attendance, salaries, and records with Excel import/export and automated WhatsApp salary notifications.',
    longDescription: "Built for Vandana Shopping Mall -- a real production system used by management. Features include attendance tracking, salary management, staff records, Excel import/export, and WhatsApp Business API integration that auto-notifies staff when salaries are credited. Deployed on Vercel.",
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'WhatsApp API', 'Vercel'],
    size: 'medium',
    accent: '#c9a84c',
    github: '#',
    live: 'https://admin-dashboard-xi-one-65.vercel.app',
  },
  {
    id: 'chv-apps',
    num: '04',
    title: 'CHV Apps',
    subtitle: 'Company Portfolio Site',
    description: "Client-facing company portfolio website built with React.js and React Router -- Home, Our Work, and Contact modal. Deployed live on Vercel as an internship deliverable.",
    longDescription: "First production client project. Built CHV Apps public portfolio with React.js JSX and React Router, including a dynamic Our Work page and a contact modal. Handled full deployment pipeline to Vercel.",
    tags: ['React.js', 'React Router', 'Vercel'],
    size: 'small',
    accent: '#c9a84c',
    github: '#',
    live: 'https://chv-apps-portfolio.vercel.app',
  },
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'CHV Apps',
    period: '2026',
    type: 'Full Time',
    bullets: [
      "Built the company's public portfolio site using React.js and React Router -- live on Vercel.",
      'Developed a production Staff Management System for Vandana Shopping Mall with WhatsApp API salary notifications.',
      'Owned the full project lifecycle: design, development, deployment, and client handoff.',
    ],
  },
  {
    role: 'Independent Developer -- AI Products',
    company: 'Self-directed',
    period: '2025 - Present',
    type: 'Freelance / Personal',
    bullets: [
      'Built StudyMateX -- AI study assistant with PDF, text, and image ingestion via OpenAI API.',
      'Built VidhiAware -- AI legal assistant with MCQ-driven issue diagnosis and structured report generation.',
      'Exploring prompt engineering as a core development practice: building systems where AI is the architecture.',
    ],
  },
  {
    role: 'Full Stack & Mobile Development',
    company: 'Ongoing',
    period: '2024 - Present',
    type: 'Learning & Building',
    bullets: [
      'Expanded from Flutter/Dart mobile to full React + Node.js web stack.',
      'Mastered PostgreSQL, MongoDB, and REST API design through real production use.',
      'Built and deployed multiple projects on Vercel with Git-based CI/CD.',
    ],
  },
];

export const techLoop = [
  'React.js', 'Next.js', 'Node.js', 'Flutter', 'Dart',
  'PostgreSQL', 'MongoDB', 'OpenAI API', 'WhatsApp API',
  'Tailwind CSS', 'Vercel', 'Git', 'Express.js', 'MySQL',
];

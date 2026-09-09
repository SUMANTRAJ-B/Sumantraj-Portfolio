/* ==========================================================================
   Shared Verified Portfolio Data - Sumantraj B
   Used across both Version 1 (Editorial Dark) and Version 2 (Sketch / Hand-Drawn)
   ========================================================================== */

export const personalData = {
  name: 'Sumantraj B',
  role: 'AI/ML Student | Aspiring AI Engineer',
  roleShort1: 'AI/ML Student',
  roleShort2: 'Aspiring AI Engineer',
  statement:
    'Building intelligent systems where machine learning, software, computer vision, and hardware meet.',
  email: 'jhonpeterson552@gmail.com',
  phone: '+91 8270343037',
  location: 'Dharmapuri, India',
  github: 'https://github.com/SUMANTRAJ-B',
  linkedin: 'https://www.linkedin.com/in/sumantraj-b-452b82312/',
  leetcode: 'https://leetcode.com/u/Jhonpeterson',
  targetRoles: ['AI / ML Engineer', 'Software Engineer'],

  education: {
    college: {
      institution: 'Karpagam College of Engineering',
      degree: 'B.Tech – Artificial Intelligence and Data Science',
      period: '2024–2028',
      graduation: 'Expected Graduation: 2028',
      cgpa: 'CGPA: 8.10/10',
    },
    school: {
      institution: 'Sri Bharathi Vidyalaya Matric Hr. Sec. School',
      details: 'Higher Secondary – 93.3%',
      year: '2024',
    },
  },

  interests: [
    'AI / Machine Learning',
    'Computer Vision',
    'Industrial IoT',
    'Edge AI',
    'Intelligent Systems',
    'Software Engineering',
  ],

  lifeOutsideTech: [
    { name: 'Movies', note: 'Stories and cinematic pacing' },
    { name: 'Music', note: 'Constant companion while coding' },
    { name: 'Photography', note: 'An unusual personal passion for visual details' },
    { name: 'Travelling', note: 'Experiencing new places and perspectives' },
  ],

  personalStory: {
    childhood: {
      title: 'Taking Things Apart',
      text: 'As a kid, I was quiet, curious, mischievous, and introverted. I spent a lot of time watching TV, playing a little gaming, and especially taking things apart just to understand how they worked. I was not trying to become an engineer back then—I simply liked figuring things out and messing around with things.',
    },
    earlyInterests: {
      title: 'First Encounters with Code',
      text: 'In school, I enjoyed Mathematics, Computer Science, being with friends, and participating in competitions. Languages were sometimes tricky for me because of grammar and spelling. I first learned Python in school, and creating a chatbot gave me my first serious "I actually like building things" moment.',
    },
    aiOrigin: {
      title: 'The Spark: Iron Man & JARVIS',
      text: 'My interest in AI did not begin with a textbook or an academic paper. It started with Iron Man. The idea of JARVIS made AI feel exciting and personal: a system that could understand, assist, and interact with a human. That became the starting point of my interest in AI/ML—and the inspiration behind a project that remains close to me.',
    },
    college: {
      title: 'College & an Open Mindset',
      text: 'I chose B.Tech Artificial Intelligence & Data Science at Karpagam College of Engineering because I believed AI and Data Science would become increasingly important by the time I graduate. When I entered college, I deliberately kept almost no fixed expectations. I wanted to experience things first and see where curiosity took me.',
    },
    fromSoftwareToHardware: {
      title: 'From Software to Hardware',
      text: 'My entry into IoT and hardware was unexpected—almost "out of nowhere, by luck." But once I started working with sensors, ESP32 boards, machines, and real-world data, I became fascinated by the fusion of Software + AI + Hardware. The reason is simple: technology should assist people and reduce the amount of repetitive or difficult work they have to do.',
    },
    motivation: {
      title: 'What I Build For',
      quote: 'How can technology assist people and reduce their work?',
      text: 'I am interested in systems that don’t just exist as software on a screen, but can understand situations, make useful decisions, interact with the physical world, and eventually act as helpful assistants.',
    },
    philosophy: {
      title: 'Personal Philosophy',
      quote: 'Does this need to be done? How can I help with it?',
      text: 'Since childhood, I have not been motivated by status or position. The kind of life I imagined was one where I would not have to constantly worry about titles or money, but instead could look at a problem and simply ask: "Does this need to be done?" and "How can I help with it?"',
    },
    jarvisProject: {
      eyebrow: 'SOME PROJECTS STAY WITH YOU',
      title: 'JARVIS / Benzi',
      status: 'An Unfinished Thread',
      intro:
        'Some projects are assignments. Some are experiments. And some stay with you.',
      text:
        'JARVIS is my most personally meaningful project, and it is still unfinished. It started from the same idea that originally made AI interesting to me: the possibility of building a genuinely useful personal assistant that can understand context, interact naturally, and actually help a person.',
    },
  },

  journeyTimeline: [
    { num: '01', title: 'Curious Kid', desc: 'Taking gadgets apart just to understand how they work.' },
    { num: '02', title: 'School & Math', desc: 'Enjoying computer science, competitions, and friends.' },
    { num: '03', title: 'First Code & Chatbot', desc: 'Learning Python in school and realizing I love building things.' },
    { num: '04', title: 'Iron Man / JARVIS', desc: 'The spark: an intelligent assistant that genuinely understands.' },
    { num: '05', title: 'College AI & DS', desc: 'Entering Karpagam College of Engineering with an open mind.' },
    { num: '06', title: 'IoT & Hardware', desc: 'Stumbling into ESP32 microcontrollers, sensors, and physical data.' },
    { num: '07', title: 'Industrial AI', desc: 'Predictive safety platform combining sensor streams with Random Forest.' },
    { num: '08', title: 'Computer Vision', desc: 'Vehicle classification using MobileNetV2 transfer learning.' },
    { num: '09', title: 'Agentic AI', desc: 'Exploring autonomous reasoning loops and deterministic tool execution.' },
    { num: '10', title: 'JARVIS / Benzi', desc: 'An ongoing, unfinished personal thread towards helpful AI.' },
  ],

  verifiedTechnologies: [
    'Python',
    'Java',
    'JavaScript',
    'HTML',
    'CSS',
    'TensorFlow',
    'Keras',
    'Scikit-learn',
    'OpenCV',
    'MobileNetV2',
    'Random Forest',
    'ESP32',
    'MQTT',
    'Paho',
    'Mosquitto',
    'Streamlit',
    'Git',
    'GitHub',
  ],

  projects: [
    {
      id: 'industrial-safety-ai',
      number: '01',
      title: 'AI-Powered Industrial Safety Intelligence System',
      github: 'https://github.com/SUMANTRAJ-B/Industrial_safety_AI',
      description:
        'Predictive safety platform for industrial environments that combines machine and environment sensor data with machine-learning-based risk prediction.',
      contribution: 'Main AI/ML role + hardware integration',
      technologies: [
        'Python',
        'ESP32',
        'MQTT',
        'Paho',
        'Mosquitto',
        'Random Forest',
        'HTML Dashboard',
      ],
      pipelineSteps: ['SENSORS', 'ESP32', 'MQTT', 'AI / ML', 'RANDOM FOREST', 'RISK DECISION'],
    },
    {
      id: 'vehicle-classification',
      number: '02',
      title: 'Vehicle Type Classification (CNN + MobileNetV2)',
      github: 'https://github.com/SUMANTRAJ-B/Project-unknown',
      description:
        'Convolutional neural network classification pipeline applying MobileNetV2 transfer learning and OpenCV preprocessing across 5 vehicle categories.',
      contribution: 'Dataset collection + model testing (4-person academic team project)',
      technologies: ['Python', 'TensorFlow/Keras', 'MobileNetV2', 'OpenCV', 'Streamlit'],
      classes: ['Car', 'Bike', 'Bus', 'Truck', 'Ambulance'],
      pipelineSteps: ['IMAGE', 'OPENCV', 'MOBILENETV2', 'CLASSIFICATION', 'CONFIDENCE', 'DECISION'],
    },
  ],

  explorations: [
    {
      number: '01',
      title: 'Edge AI / TinyML',
      status: 'CURRENTLY EXPLORING',
      description:
        'Weight quantization, model pruning, and deploying low-latency neural inference directly on resource-constrained microcontrollers like the ESP32.',
    },
    {
      number: '02',
      title: 'Computer Vision for Safety',
      status: 'CURRENTLY EXPLORING',
      description:
        'Automated spatial perimeter monitoring, real-time visual hazard detection, and rapid anomaly classification in industrial environments.',
    },
    {
      number: '03',
      title: 'Real LLM-Backed Agentic Systems',
      status: 'CURRENTLY EXPLORING',
      description:
        'Autonomous reasoning loops where language models interface with deterministic tools, execute code, and communicate with external physical/software APIs.',
    },
  ],
};

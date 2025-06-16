import service1 from '../assets/services1.jpg';
import service2 from '../assets/services2.jpg';
import service3 from '../assets/services3.jpg';
import service4 from '../assets/services4.jpg';
import service5 from '../assets/services5.jpg';
import service6 from '../assets/services6.jpg';
// import service7 from '../assets/services7.jpg';
// import service8 from '../assets/services8.jpg';
// import service9 from '../assets/services9.jpg';
// import service10 from '../assets/services10.jpg';
// import service11 from '../assets/services11.jpg';
// import service12 from '../assets/services12.jpg';
// import service13 from '../assets/services13.jpg';
// import service14 from '../assets/services14.jpg';
// import service15 from '../assets/services15.jpg';
// import service16 from '../assets/services16.jpg';

const services = [
  {
    id: 1,
    title: 'CV Revamp & LinkedIn Optimization',
    description: 'We craft modern, ATS-friendly CVs tailored to Kenyan, NGO, and global job markets...',
    image: service1,
    popupIntro: 'Position yourself to win in any job market.',
    popupContent: [
      'We craft clean, modern CVs that meet Kenyan, NGO, and global recruiter standards.',
      'Your LinkedIn profile is fully optimized to increase visibility and attract job opportunities.',
      'Includes branded cover letters and professional summaries aligned with your goals.'
    ]
  },
  {
    id: 2,
    title: 'Interview Prep & Job Search Support',
    description: 'Our coaching sessions prepare you to face interviews with clarity and confidence...',
    image: service2,
    popupIntro: 'Walk into any interview prepared, confident, and persuasive.',
    popupContent: [
      'Personalized mock interviews to sharpen your responses and reduce anxiety.',
      'Learn how to handle tough questions and sell your value clearly.',
      'Job search strategy to improve your application results and reduce burnout.'
    ]
  },
  {
    id: 3,
    title: 'Remote Job Bootcamp',
    description: 'We train you to find, apply for, and land remote jobs that align with your skills...',
    image: service3,
    popupIntro: 'Access international job markets and earn globally.',
    popupContent: [
      'Learn how to find and apply for remote roles across various platforms.',
      'We localize your resume and teach you remote interview etiquette.',
      'Training on digital professionalism, online tools, and cultural awareness.'
    ]
  },
  {
    id: 4,
    title: 'Career Counseling & Pivot Guidance',
    description: 'We help you explore purposeful career shifts through guided clarity calls...',
    image: service4,
    popupIntro: 'Find clarity, confidence, and calling in your career journey.',
    popupContent: [
      'Get help transitioning from one field to another (e.g., NGO to private sector).',
      'Explore spiritually and emotionally aligned work that honors your whole self.',
      'You’ll leave with a pivot plan rooted in vision and purpose.'
    ]
  },
  {
    id: 5,
    title: 'Higher Education Guidance',
    description: 'We help you find the right schools and programs to match your goals...',
    image: service5,
    popupIntro: 'Your dream school is within reach—locally or globally.',
    popupContent: [
      'We help you choose the right academic program based on career goals.',
      'Expert editing for SOPs, admission essays, and scholarship applications.',
      'Funding strategy and school application calendar included.'
    ]
  },
  {
    id: 6,
    title: 'Quick Skill Equipping',
    description: 'Boost your career with short, targeted courses on essential digital tools...',
    image: service6,
    popupIntro: 'Master key tools and habits that drive performance.',
    popupContent: [
      'Short courses on AI tools, presentations, professional emails, and more.',
      'Access curated free and paid platforms to keep your learning up-to-date.',
      'Confidence coaching to apply new skills in the workplace immediately.'
    ]
  },
  {
    id: 7,
    title: 'Independent Consultant Set-Up',
    description: 'Turn your expertise into a service-based business...',
    // image: service7,
    popupIntro: 'Turn your expertise into a service-based business.',
    popupContent: [
      'We help you define your niche, offerings, and pricing model.',
      'Get editable templates for portfolios, proposals, and contracts.',
      'Build a compelling online presence to attract the right clients.'
    ]
  },
  {
    id: 8,
    title: 'Personal HR Services',
    description: 'Handle sensitive work matters with wisdom and professionalism...',
    // image: service8,
    popupIntro: 'Handle sensitive work matters with wisdom and professionalism.',
    popupContent: [
      'Support writing appeal letters, conflict reports, and workplace documentation.',
      'Salary negotiation coaching and tips to navigate HR politics.',
      'Protect your peace while advancing your career.'
    ]
  },
  {
    id: 9,
    title: 'Psychological Tests & Personality Mapping',
    description: 'Know yourself deeply so you can choose wisely...',
    // image: service9,
    popupIntro: 'Know yourself deeply so you can choose wisely.',
    popupContent: [
      'Access licensed psychological assessments that reveal work styles, strengths, and growth areas.',
      'Discover your personality blueprint and how it influences career or business decisions.',
      'Personalized mapping for communication, collaboration, and leadership clarity.'
    ]
  },
  {
    id: 10,
    title: 'Wholistic Personal Branding',
    description: 'Brand yourself with intention, truth, and strategy...',
    // image: service10,
    popupIntro: 'Brand yourself with intention, truth, and strategy.',
    popupContent: [
      'We combine your career goals, personality, and faith to build a compelling personal brand.',
      'Includes headshot guidance, bio writing, elevator pitch, and digital profile alignment.',
      'Ideal for professionals, consultants, and leaders seeking public presence and impact.'
    ]
  },
  {
    id: 11,
    title: 'Financial Analysis & Debt Management',
    description: 'Create a financial reset plan that empowers you...',
    // image: service11,
    popupIntro: 'Create a financial reset plan that empowers you.',
    popupContent: [
      'Review and assess your income, expenses, and financial behaviors.',
      'Get a debt repayment strategy tailored to your income and lifestyle.',
      'Coaching on financial literacy, cash flow, and budgeting for peace of mind.'
    ]
  },
  {
    id: 12,
    title: 'Budgeting & Growth Mapping',
    description: 'Design a life and business that grows with structure...',
    // image: service12,
    popupIntro: 'Design a life and business that grows with structure.',
    popupContent: [
      'We build a simple, realistic monthly budget based on your goals.',
      'Create income streams and savings plans aligned to your purpose.',
      'Receive a custom growth tracker to monitor your personal and professional milestones.'
    ]
  },
  {
    id: 13,
    title: 'Career Counseling & Business Consulting',
    description: 'One space for both personal development and business growth...',
    // image: service13,
    popupIntro: 'One space for both personal development and business growth.',
    popupContent: [
      'We blend career planning with business strategy for multi-passionate professionals.',
      'Understand when to pivot, build, scale, or take a break.',
      'Includes mindset coaching and spiritual alignment for life and legacy decisions.'
    ]
  },
  {
    id: 14,
    title: 'SME Business Analysis & Market Research',
    description: 'Strengthen your business with facts, not guesswork...',
    // image: service14,
    popupIntro: 'Strengthen your business with facts, not guesswork.',
    popupContent: [
      'Get an internal audit to evaluate systems, gaps, and growth leaks.',
      'Study market trends and competitors to sharpen your strategy.',
      'Turn data into profitable action plans for your brand.'
    ]
  },
  {
    id: 15,
    title: 'Digital Marketing & Branding',
    description: 'Make your business unforgettable and irresistible...',
    // image: service15,
    popupIntro: 'Make your business unforgettable and irresistible.',
    popupContent: [
      'Build a strong brand identity—from visual assets to messaging.',
      'Plan content and digital campaigns that speak to your ideal audience.',
      'Position products for visibility, credibility, and conversion.'
    ]
  },
  {
    id: 16,
    title: 'CRM Set-Up & Automations',
    description: 'Manage your clients, leads, and sales like a pro...',
    // image: service16,
    popupIntro: 'Manage your clients, leads, and sales like a pro.',
    popupContent: [
      'Get the best CRM system for your stage of business.',
      'Set up automations for client follow-up, onboarding, and sales tracking.',
      'Organize your workflow so you can grow with ease.'
    ]
  }
];

export default services;

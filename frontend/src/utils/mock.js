import React from 'react';
import { 
  Target, 
  Zap, 
  Clock, 
  TrendingUp, 
  Brain,
  Code,
  Database,
  Smartphone,
  Settings,
  Briefcase
} from 'lucide-react';

export const mockData = {
  qualities: [
    { title: 'Problem Solving', icon: <Target size={28} /> },
    { title: 'Fast Learner', icon: <Zap size={28} /> },
    { title: 'Time Management', icon: <Clock size={28} /> },
    { title: 'Adaptive Developer', icon: <TrendingUp size={28} /> },
    { title: 'AI Enthusiast', icon: <Brain size={28} /> }
  ],

  skillCategories: [
    {
      category: 'Programming',
      icon: <Code size={28} />,
      skills: ['Python', 'JavaScript', 'SQL', 'Java']
    },
    {
      category: 'Web & App Development',
      icon: <Code size={28} />,
      skills: ['HTML5', 'CSS3', 'React.js', 'WordPress', 'Android Development']
    },
    {
      category: 'Database',
      icon: <Database size={28} />,
      skills: ['MySQL', 'Database Design using AI', 'Query Optimization']
    },
    {
      category: 'Tools',
      icon: <Settings size={28} />,
      skills: ['VS Code', 'Android Studio', 'Git', 'MS Office']
    },
    {
      category: 'AI & Concepts',
      icon: <Brain size={28} />,
      skills: ['AI Prompt Engineering', 'Conversational AI', 'Afifa AI Assistant', 'OOP', 'Debugging']
    }
  ],

  projects: [
    {
      title: 'Afifa AI Assistant',
      tech: ['AI', 'App Development', 'Conversational AI', 'Prompt Engineering'],
      description: 'An intelligent AI-powered assistant application designed to provide personalized assistance and automate tasks through natural language conversations. Features advanced AI capabilities for enhanced user experience.',
      link: 'https://afifa-assistant.preview.emergentagent.com/',
      featured: true,
      highlights: [
        'Advanced conversational AI interface',
        'Personalized AI assistance',
        'Natural language processing',
        'Real-time intelligent responses'
      ]
    },
    {
      title: 'AI Job Assistance Platform',
      tech: ['AI', 'Prompt Engineering', 'Web Application'],
      description: 'An AI-powered platform designed to help users find work opportunities and improve productivity using intelligent prompt-driven workflows.',
      link: 'https://work-sahi-now.preview.emergentagent.com/',
      featured: true,
      highlights: [
        'Demonstrates AI Prompt Engineering expertise',
        'Intelligent workflow automation',
        'Real-time AI-powered assistance'
      ]
    },
    {
      title: 'Online Pharmacy Management System',
      tech: ['WordPress', 'MySQL', 'PHP'],
      description: 'A database-driven web application designed to manage pharmacy inventory and customer orders. Features include stock tracking, order management, and an admin dashboard for monitoring operations.',
      highlights: [
        'Inventory management system',
        'Order tracking and processing',
        'Admin dashboard with analytics'
      ]
    },
    {
      title: 'Food Waste Management Android Application',
      tech: ['Java', 'Android Studio', 'Firebase'],
      description: 'An Android application designed to connect food donors with recipients to reduce food waste. Includes user registration, food donation listings, and request handling.',
      highlights: [
        'User authentication and profiles',
        'Real-time donation listings',
        'Request and notification system'
      ]
    }
  ],

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Dr. M.G.R Educational and Research Institute',
      cgpa: '8.3'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'C. Abdul Hakeem College',
      cgpa: '7.9'
    }
  ],

  certifications: [
    'Foundations of MS Office',
    'Basics of Cyber Security – Future Skills Prime',
    'Introduction to Machine Learning using Python',
    'AI Prompt Engineering',
    'Front End developer - Great Learnings'
  ]
};
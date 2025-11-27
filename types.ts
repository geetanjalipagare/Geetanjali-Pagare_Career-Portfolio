export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Achievement {
  title: string;
  description: string;
  metric?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: Job[];
  education: Education[];
  skills: SkillCategory[];
  achievements: Achievement[];
  projects: Project[];
  certifications: string[];
}
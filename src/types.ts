import { ReactNode } from "react";

export interface BaseComponentProps {
  leftSideContent: ReactNode;
  children: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

export interface ProjectComponentProps {
  image: string;
  title: string;
  description: string;
  link: string;
  skills: string[];
}

export interface ExperienceComponentProps {
  date: string;
  logo: string;
  title: string;
  description: string;
  link: string;
  skills: string[];
}

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
}

export interface SocialLink {
  icon: JSX.Element;
  link: string;
  name: string;
}

// Window props for responsive design
export interface ToggleSectionProps {
  sections: string[];
  activeSection: string | null;
  onSectionClick: (section: string) => void;
}

export interface AboutProps {
  windowWidth: number;
}

export interface ProjectsProps {
  windowWidth: number;
}

export interface ExperienceProps {
  windowWidth: number;
}

export interface BlogProps {
  windowWidth: number;
}

export interface ContactProps {
  windowWidth: number;
}

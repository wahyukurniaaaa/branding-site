export interface CV {
  analyticsCode: string;
  basics: Basics;
  skills: Array<Skill>;
  work?: Array<Work>;
  education?: Array<Education>;
  certificates?: Array<Certificate>;
  publications?: Array<Publication>;
  languages: Array<Language>;
  interests?: Array<Interests>;
  references?: Array<Reference>;
  projects?: Array<Project>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone?: string;
  url: string;
  summary: string;
  theme?: string;
  location: Location;
  profiles: Array<Profiles>;
  animated_main_label?: string;
  animated_secondary_initial_label?: string;
  animated_secondary_final_label?: string;
}

interface Location {
  address: string;
  city: string;
  postalCode?: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  icon: string;
  network: string;
  username: string;
  url: string;
  color?: string;
}

interface Work {
  name: string;
  position: string;
  url?: string;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  location_type?: string;
  location?: string;
  responsibilities?: Array<string>;
  skills?: Record<string, string>;
}

type DateStr = string;

interface Skill {
  icon: string;
  name: string;
  level: string;
  keywords: Array<string>;
}

interface Certificate {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
}

interface Publication {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score?: string;
  courses?: Array<string>;
}

interface Language {
  language: string;
  fluency: string;
}

interface Project {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Array<string>;
  url?: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface Reference {
  name: string;
  reference: string;
}


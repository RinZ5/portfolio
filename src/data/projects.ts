export interface Project {
  title: string;
  desc: string;
  link: string;
  image: string;
  tags: string[];
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    title: "Indie App 1",
    desc: "A mobile app for tracking x built with React Native.",
    link: "/projects/app-1",
    image: "/images/project-preview-1.png",
    tags: ["React Native", "Go"],
    isFeatured: true,
  },
  {
    title: "SaaS Dashboard",
    desc: "Financial analytics tool using Python and Pandas.",
    link: "/projects/saas",
    image: "/images/project-preview-1.png",
    tags: ["Python", "Vue.js"],
    isFeatured: true,
  },
  {
    title: "Old Experiment",
    desc: "A simple script I wrote years ago.",
    link: "/projects/script",
    image: "/images/old.png",
    tags: ["Bash"],
    isFeatured: false,
  },
];

export const getFeaturedProjects = () => projects.filter(project => project.isFeatured);

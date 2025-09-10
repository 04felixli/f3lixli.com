export interface ProjectObject {
  name: string;
  description: string;
  techStack: string[];
  imagePath: string;
  gitHubLink: string;
}

export const SlimPossible: ProjectObject = {
  name: "SlimPossible",
  description: `A comprehensive, full-stack workout tracker`,
  techStack: [
    "Next.Js",
    "ASP.NET Core",
    "PostgreSQL",
    "Tailwind CSS",
    "Kinde Auth",
  ],
  imagePath: "/Images/SlimPossible.png",
  gitHubLink: "https://github.com/04felixli/SlimPossible",
};

export const ChessProject: ProjectObject = {
  name: "PvP Chess",
  description: "A two player chess game",
  techStack: ["Python", "Pygame"],
  imagePath: "/Images/ChessGame.png",
  gitHubLink: "https://github.com/04felixli/Chess-Project",
};

export const NBAMatchPredictor: ProjectObject = {
  name: "NBA Match Predictor",
  description: "A machine learning model to predict NBA match outcomes",
  techStack: ["Python", "Flask", "Pandas", "Scikit-learn", "Matplotlib"],
  imagePath: "/Images/NBAMatchPredictor.svg",
  gitHubLink: "https://github.com/04felixli/NBA-Game-Predictor",
};

export const McCheatDay: ProjectObject = {
  name: "McCheatDay",
  description: "Easily find low-calorie McDonald's items",
  techStack: ["React", "Flask", "PostgreSQL", "Tailwind CSS", "Selenium"],
  imagePath: "/Images/McCheatDay.png",
  gitHubLink: "https://github.com/04felixli/McCheatDay",
};

export const TailorResume: ProjectObject = {
  name: "TailorResume",
  description: "A web app to help users create tailored resumes",
  techStack: [
    "React",
    "Tailwind CSS",
    "FastAPI",
    "OpenAI",
    "Sentence Transformers",
    "NumPy",
  ],
  imagePath: "/Images/resume-tailor-bot.png",
  gitHubLink: "https://github.com/04felixli/resume-tailor-bot",
};

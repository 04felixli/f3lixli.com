export interface ProjectObject {
    name: string;
    description: string;
    techStack: string[];
    imagePath: string;
    gitHubLink: string;
}

export const SlimPossible: ProjectObject = {
    name: 'SlimPossible',
    description: `A comprehensive, full-stack workout tracker`,
    techStack: ['Next.Js', 'ASP.NET Core', 'PostgreSQL', 'Tailwind CSS'],
    imagePath: '/Images/SlimPossible.png',
    gitHubLink: "https://github.com/04felixli/SlimPossible",
}

export const ChessProject: ProjectObject = {
    name: 'PvP Chess',
    description: 'A two player chess game',
    techStack: ['Python', 'Pygame'],
    imagePath: '/Images/ChessGame.png',
    gitHubLink: 'https://github.com/04felixli/Chess-Project',
}

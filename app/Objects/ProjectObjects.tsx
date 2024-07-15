export interface ProjectObject {
    name: string;
    description: string;
    techStack: string[];
    imagePath: string;
    gitHubLink: string;
}

export const SlimPossible: ProjectObject = {
    name: 'SlimPossible',
    description: `SlimPossible is a comprehensive web application empowering 
                  gym-goers to track their workouts and personal metrics, monitor progress, 
                  and create customized workout templates effortlessly.`,
    techStack: ['React', 'ASP.NET Core', 'PostgreSQL', 'Tailwind CSS'],
    imagePath: '/Images/SlimPossible.png',
    gitHubLink: "https://github.com/04felixli",
}

export const ChessProject: ProjectObject = {
    name: 'PvP Chess',
    description: 'A two player chess game with features such as legal move validation and checkmate/stalemate checking.',
    techStack: ['Python', 'Pygame'],
    imagePath: '/Images/ChessGame.png',
    gitHubLink: 'https://github.com/04felixli/Chess-Project',
}

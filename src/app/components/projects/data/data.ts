export const projects: Project[] = [
    {
        img: './../../../assets/css-app.png',
        title: 'CSS Application',
        description: 'Application made to help the developer use some common CSS tools in one place. Available tools: Gradient generator, Shape generator, Banner generator. In building: Typography.',
        technologies: 'Typescript, Angular, SCSS, Bootstrap, Fontawesome',
        live: 'https://bartlomiejwyszecki.github.io/CSS-Application',
        github: 'https://github.com/bartlomiejwyszecki/CSS-Application'
    },
    {
        img: './../../../assets/art-gallery.jpg',
        title: 'Art gallery',
        description: 'Online art-gallery where user can watch art, choose items by category, sort them, rate them, and read details about them.',
        technologies: 'Typescript, Angular, SCSS, Bootstrap, Masonry-layout, Json-server, Express, REST, Lazy Modules',
        live: 'https://bartlomiejwyszecki.github.io/CSS-Application',
        github: 'https://art-gallery-angular.herokuapp.com/home'
    },
    {
        img: './../../../assets/weather.png',
        title: 'Weather application',
        description: 'Weather application that is showing a few weather parameters dependent on provided location.Weather application that is showing a few weather parameters dependent on provided location.',
        technologies: 'Javascript, Node.js, Express, Handlebars, Weather API',
        live: 'https://app-weather-bwyszecki.herokuapp.com/',
        github: 'https://github.com/bartlomiejwyszecki/weather-app'
    },
    {
        img: './../../../assets/quotations.jpg',
        title: 'Best quotes',
        description: 'Simple angular application where user can browse and rate quotes.',
        technologies: 'Typescript, Angular',
        github: 'https://github.com/bartlomiejwyszecki/Quotations_app'
    },
    {
        img: './../../../assets/task-runner.jpg',
        title: 'Task runner',
        description: 'Simple react application, where user can add, remove tasks, and give them a priority range.',
        technologies: 'Javascript, React',
        github: 'https://github.com/bartlomiejwyszecki/Task-runner'
    }
]

export interface Project {
    img: string,
    title: string,
    description: string,
    technologies: string,
    live?: string,
    github: string
}
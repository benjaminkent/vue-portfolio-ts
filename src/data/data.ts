import {
  CardInterface,
  ProjectInterface,
  SocialMedia,
} from '@/interfaces/interfaces'

/* tslint:disable:max-line-length */
export const cardData: CardInterface[] = [
  {
    id: 1,
    logoURL: ['vue-logo.png'],
    name: 'Vue.js',
    description:
      'Vue is a framework for building user interfaces. It is designed from the ground up to be incrementally adoptable.',
    linkURL: 'https://vuejs.org/v2/guide/',
  },
  {
    id: 3,
    logoURL: ['ts-logo.png'],
    name: 'TypeScript',
    description:
      'TypeScript is a programming language that is a strict syntactical superset of JavaScript developed by Microsoft.',
    linkURL: 'https://www.typescriptlang.org/docs/handbook/intro.html',
  },
  {
    id: 5,
    logoURL: ['c-sharp-logo.png', 'NET_Core_Logo.png'],
    name: 'C#, .Net Core',
    description:
      '.NET Core is an open-source framework maintained by Microsoft that is used to build several types of applications.',
    linkURL: 'https://docs.microsoft.com/en-us/dotnet/core/introduction',
  },
  {
    id: 2,
    logoURL: ['github.png', 'gitlab-logo.png'],
    name: 'Github and Gitlab',
    description:
      'Github and Gitlab are Git-repository managers. Gitlab also provides issue-tracking and CI/CD pipeline features.',
    linkURL: 'https://usersnap.com/blog/gitlab-github/',
  },
  {
    id: 4,
    logoURL: ['react-logo.png'],
    name: 'React',
    description:
      'React is a library for building composable user interfaces and encourages the creation of reusable UI components.',
    linkURL: 'https://reactjs.org/',
  },
  {
    id: 6,
    logoURL: ['bootstrap.svg'],
    name: 'Bootstrap',
    description:
      'Bootstrap is built on HTML, CSS, and JS to facilitate the development of responsive, mobile-first sites and apps.',
    linkURL: 'https://getbootstrap.com/',
  },
]

export const projectData: ProjectInterface[] = [
  {
    id: 1,
    name: 'BrewLo',
    description: 'Brewery finder app',
    linkURL: 'https://brewlo.buzz/',
    linkName: 'brewlo.buzz',
    image: 'cycle_kyqnal',
  },
  {
    id: 2,
    name: 'Grip The Rods',
    description: 'Foosball team & name generator',
    linkURL: 'https://griptherods.com/',
    linkName: 'griptherods.com',
    image: 'foosball_v0rnlx',
  },
]

export const socialMediaData: SocialMedia[] = [
  {
    class: ['fab', 'linkedin-in'],
    url: 'https://www.linkedin.com/in/benjaminkentjehl',
  },
  {
    class: ['fab', 'github'],
    url: 'https://github.com/benjaminkent',
  },
  {
    class: ['fab', 'twitter'],
    url: 'https://twitter.com/VuejsTampaBay',
  },
  {
    class: ['fab', 'facebook-f'],
    url: 'https://www.facebook.com/vue.js.tampabay/',
  },
  {
    class: ['fab', 'instagram'],
    url: 'https://www.instagram.com/benjaminkent7',
  },
]

export const cats: string[] = [
  '2-cat-laser-eye.gif',
  'astro-cat.gif',
  'cat-back-pizza.gif',
  'cat-city.gif',
  'cat-glasses.gif',
  'cat-laser-eye.gif',
  'cat-pickle.gif',
  'cat-pizza.gif',
  'cat-unicorn.gif',
  'cat-wings.gif',
  'scared-cat.gif',
  'space-cat.gif',
]

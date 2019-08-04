import { CardInterface, ProjectInterface, SocialMedia } from '@/interfaces/interfaces'

/* tslint:disable:max-line-length */
export const cardData: CardInterface[] = [
  {
    id: 1,
    logoURL: [ 'vue-logo.png' ],
    name: 'Vue.js',
    description: 'Vue is a framework for building user interfaces. It is designed from the ground up to be incrementally adoptable.',
    linkURL: 'https://vuejs.org/v2/guide/'
  },
  {
    id: 2,
    logoURL: [ 'github.png', 'gitlab-logo.png' ],
    name: 'Github and Gitlab',
    description: 'Github and Gitlab are Git-repository managers. Gitlab also provides issue-tracking and CI/CD pipeline features.',
    linkURL: 'https://usersnap.com/blog/gitlab-github/'
  },
  {
    id: 3,
    logoURL: [ 'ruby.png', 'rails.png' ],
    name: 'Ruby on Rails',
    description: 'Ruby on Rails, sometimes known as \'RoR\' or just \'Rails,\' is an open source framework for Web development in Ruby.',
    linkURL: 'https://guides.rubyonrails.org/'
  },
  {
    id: 4,
    logoURL: [ 'react-logo.png' ],
    name: 'React',
    description: 'React is a library for building composable user interfaces and encourages the creation of reusable UI components.',
    linkURL: 'https://reactjs.org/'
  },
  {
    id: 5,
    logoURL: [ 'js-logo-alt.png' ],
    name: 'JavaScript',
    description: 'JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages.',
    linkURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript'
  },
  {
    id: 6,
    logoURL: [ 'bootstrap.svg' ],
    name: 'Bootstrap',
    description: 'Bootstrap is built on HTML, CSS, and JS to facilitate the development of responsive, mobile-first sites and apps.',
    linkURL: 'https://getbootstrap.com/'
  }
]

export const projectData: ProjectInterface[] = [
  {
    id: 1,
    name: 'BrewLo',
    description: 'Brewery finder app',
    linkURL: 'https://brewlo.buzz/',
    linkName: 'brewlo.buzz',
    image: 'cycle.jpg'
  },
  {
    id: 2,
    name: 'Grip The Rods',
    description: 'Foosball team & name generator',
    linkURL: 'https://griptherods.com/',
    linkName: 'griptherods.com',
    image: 'foosball.jpeg'
  }
]

export const socialMediaData: SocialMedia[] = [
  {
    class: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/benjaminkentjehl'
  },
  {
    class: 'fab fa-github',
    url: 'https://github.com/benjaminkent'
  },
  {
    class: 'fab fa-twitter',
    url: 'https://twitter.com/VuejsTampaBay'
  },
  {
    class: 'fab fa-facebook-f',
    url: 'https://www.facebook.com/vue.js.tampabay/'
  },
  {
    class: 'fab fa-instagram',
    url: 'https://www.instagram.com/benjaminkent7'
  }
]

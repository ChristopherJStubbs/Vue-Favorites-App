const media = [
    {
      title: 'East of Eden',
      description: "Grueling life story from the early American days.",
      type: 'book',
      contributor: 'John Steinbeck',
      showDetail: false,
    },
    {
      title: 'Interstellar',
      description: "Science fiction thriller about space travel",
      type: 'DVD',
      contributor: 'Christopher Nolan',
      showDetail: false
    },
    {
      title: 'The Office',
      description: "Hilarious comedy about a paper factory and its workers",
      type: 'DVD',
      contributor: "",
      showDetail: false
    },
    {
      title: 'Planet Earth II',
      description: "Hours of beautiful but heart attack-inducing nature footage",
      type: 'streaming video',
      contributor: 'David Attenborough',
      showDetail: false,
    },
    {
      title: 'Inception',
      description: "Dreams within Dreams",
      type: 'DVD',
      contributor: 'Christopher Nolan',
      showDetail: false,
    },
    {
      title: 'The Foundation Novels',
      description: "",
      type: 'book',
      contributor: 'Isaac Asimov',
      showDetail: false,
    },
    {
      title: 'Mr. Robot',
      description: "A story about a mental ill computer hacker dealing with his demons.",
      type: 'streaming video',
      contributor: 'Sam Esmail',
      showDetail: false,
    }
  ]

const app = new Vue({
    el: '#media-list',
    data: {
      title: 'Chris Stubbs Favorites',
      mediaList: media
  },
    methods: {
        toggleDetails: function(media){
            console.log(media);
            media.showDetail = !media.showDetail
        }
    }
  });

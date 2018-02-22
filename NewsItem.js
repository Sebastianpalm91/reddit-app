constructor(props) {
    super(props);
    this.state = {
      news_items: [
        {
          pretext: 'Gray Matter',
          title: 'Art Makes You Smart',
          summary: 'Museum visits increase test scores, generate social responsibility and increase appreciation of the arts by students.',
          // image: require('../images/pink.jpg'),
        },
        {
          pretext: '',
          title: 'Tension and Flaws Before Health Website Crash',
          summary: 'Interviews and documents offer new details into how the rollout of President Obama\'s signature program turned into a major humiliation.',
          // image: require('../images/beach.jpg')
        },
        {
          pretext: '',
          title: '36 Hours in Charleston, S.C.',
          summary: 'Crowds are thinner and temperatures are mild during winter in this..',
          // image: require('../images/rails.jpg')
        },

      ]
    };
  }

import { Slide, SlideChart, SlideGrid, SlideSimpleText } from './slide';

export class SlideSet {
  public name: string;
  public slides: Slide[];
  public style: SlideStyle;
  public backgroundStyle: SlideStyle;
}


export var SAMPLE: SlideSet = {
  name: 'Super awesome programming',
  style: {
    'color': 'rgba(255, 255, 255, 0.87)',
    'font-family': 'sans-serif',
    'align-self': 'center',
    'justify-self': 'center',
    'font-size': '3vw'
  },
  backgroundStyle: {'background-color': 'black'},
  slides: [
    new SlideSimpleText('1',
      'Slides are awesome!',
      '/assets/img/04194_pagview_1920x1080.jpg'),
    new SlideSimpleText('2',
      'Distributed Display is awesome!!\nDoes other cool stuff',
      '/assets/img/04196_thefifthpresident_1920x1080.jpg'),
    new SlideSimpleText('3',
      'I like slides!',
      '/assets/img/04196_thefifthpresident_1920x1080.jpg'),
    new SlideSimpleText('4',
      'How do you feel about slides?',
      '/assets/img/04196_thefifthpresident_1920x1080.jpg'),
    new SlideSimpleText('5', `I don't have a background`),
    new SlideChart('6', {
      type: 'pie',
      data: {
        labels: ['one', 'two', 'three', 'four'],
        datasets: [
          {
            data: [1, 2, 3, 4],
            backgroundColor: ['blue', 'orange', 'green', 'red']
          }
        ]
      },
      options: {
        title: {text: 'Chart!', display: true},
      }
    }),
    new SlideGrid('7',
      {},
      {
        'one': new SlideSimpleText('6:a', 'hello'),
        'two': new SlideSimpleText('6:b', 'world!'),
        'three': new SlideSimpleText('6:c', 'I am span!', '/assets/img/04196_thefifthpresident_1920x1080.jpg'),
        'four': new SlideChart('6:d', {
          type: 'pie',
          data: {
            labels: ['one', 'two', 'three', 'four'],
            datasets: [
              {
                data: [1, 2, 3, 4],
                backgroundColor: ['blue', 'orange', 'green', 'red']
              }
            ]
          },
          options: {
            title: {text: 'Chart!', display: true},
          }
        })
      },
      ['one two', 'three four'],
      '1fr 1fr',
      '1fr 1fr')
  ]
};

export class SlideStyle {
  [key: string]: string | number
}

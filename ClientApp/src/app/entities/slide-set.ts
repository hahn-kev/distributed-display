import {Slide} from "./slide";

export class SlideSet {
  public name: string;
  public slides: Slide[];
  public style: SlideStyle;
  public backgroundStyle: SlideStyle;
}


export var SAMPLE: SlideSet = {
  name: 'Super awesome programming',
  style: {color: 'rgba(255, 255, 255, 0.87)', 'font-family': 'sans-serif'},
  backgroundStyle: {'background-color': 'black'},
  slides: [
    {
      id: '1',
      text: `I'm awesome!`,
      img: '/assets/img/04194_pagview_1920x1080.jpg'
    },
    {
      id: '2',
      text: `Distributed Display is awesome!! \n Does other cool stuff`,
      img: '/assets/img/04196_thefifthpresident_1920x1080.jpg'
    },
    {
      id: '3',
      text: `I like slides!`,
      img: '/assets/img/04196_thefifthpresident_1920x1080.jpg'
    },
    {
      id: '4',
      text: `How do you feel about slides?`,
      img: '/assets/img/04196_thefifthpresident_1920x1080.jpg'
    },
  ]
};

export class SlideStyle {
  [key: string]: string | number
}

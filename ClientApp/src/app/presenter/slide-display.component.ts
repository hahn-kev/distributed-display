import {Component, Input, OnInit} from '@angular/core';
import {Slide} from '../entities/slide';
import {SlideStyle} from '../entities/slide-set';

@Component({
  selector: 'app-slide-display',
  templateUrl: './slide-display.component.html',
  styleUrls: ['./slide-display.component.scss']
})
export class SlideDisplayComponent implements OnInit {

  @Input()
  slide: Slide;
  @Input()
  slideStyle: SlideStyle;

  constructor() { }

  ngOnInit() {
  }

}

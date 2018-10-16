import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Slide } from '../entities/slide';
import { SlideStyle } from '../entities/slide-set';
import { Chart } from 'chart.js';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-slide-display',
  templateUrl: './slide-display.component.html',
  styleUrls: ['./slide-display.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      state('true', style({opacity: 1})),
      state('false', style({opacity: 0})),
      transition('true <=> false', [animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')]),
    ])
  ]
})
export class SlideDisplayComponent implements OnInit, OnDestroy {
  chart: Chart;
  private _slide: Slide;
  private _isShown: boolean = true;
  @ViewChild('canvas') canvas: HTMLCanvasElement;

  @Input()
  set slide(value: Slide) {
    if (this.chart) this.chart.destroy();
    this._slide = value;
    if (value.slideType == 'chart') setTimeout(() => this.chart = new Chart(value.id, value.chartConfig));
  }

  @Input()
  set isShown(shown: boolean) {
    this._isShown = shown;
    if (shown && this.chart) {
      // this.chart.render({duration: this.chart.config.options.animation.duration, easing: this.chart.config.options.animation.easing, lazy: false});
      // this.chart.resize();
    }
  }

  @HostBinding('@fade') get fade() {
    return this._isShown + '';
  }

  get slide() {
    return this._slide;
  }

  @Input()
  slideStyle: SlideStyle;

  get style() {
    return {...this.slideStyle, ...this._slide.style};
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.chart) this.chart.destroy();
  }


}

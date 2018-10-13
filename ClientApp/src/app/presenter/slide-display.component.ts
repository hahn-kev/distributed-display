import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Slide } from '../entities/slide';
import { SlideStyle } from '../entities/slide-set';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-slide-display',
  templateUrl: './slide-display.component.html',
  styleUrls: ['./slide-display.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideDisplayComponent implements OnInit, OnDestroy {
  chart: Chart;
  private _slide: Slide;
  @ViewChild('canvas') canvas: HTMLCanvasElement;

  @Input()
  set slide(value: Slide) {
    if (this.chart) this.chart.destroy();
    this._slide = value;
    if (value.slideType == 'chart') setTimeout(() => this.chart = new Chart(value.id, value.chartConfig));
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

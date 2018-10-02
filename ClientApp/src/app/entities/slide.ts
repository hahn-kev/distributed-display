import { SlideStyle } from './slide-set';
import { ChartConfiguration } from 'chart.js';

export type Slide = SlideSimpleText | SlideChart;

export class BaseSlide {
  constructor(
    public id: string,
    public style: SlideStyle) {
  }

}

export class SlideSimpleText extends BaseSlide {
  slideType: 'simpleText' = 'simpleText';
  public text: string;
  public img: string;


  constructor(id: string, text: string, img: string) {
    super(id, {});
    this.text = text;
    this.img = img;
  }
}

export class SlideChart extends BaseSlide {
  slideType: 'chart' = 'chart';

  constructor(id: string, chartConfig: ChartConfiguration) {
    super(id, {});
    this.chartConfig = chartConfig;
  }

  chartConfig: ChartConfiguration
}

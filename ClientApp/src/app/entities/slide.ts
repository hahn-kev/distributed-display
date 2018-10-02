import { SlideStyle } from './slide-set';
import { ChartConfiguration } from 'chart.js';

export type Slide = SlideSimpleText | SlideChart | SlideGrid;

export abstract class BaseSlide {
  get style(): SlideStyle {
    return this._style;
  }

  set style(value: SlideStyle) {
    this._style = value;
  }

  protected _style: SlideStyle;

  protected constructor(
    public id: string,
    style: SlideStyle) {
    this._style = style;
  }

  abstract get title(): string;

}

export class SlideSimpleText extends BaseSlide {
  slideType: 'simpleText' = 'simpleText';
  public text: string;
  public img: string;


  constructor(id: string, text: string, img?: string) {
    super(id, {});
    this.text = text;
    this.img = img;
  }

  get title(): string {
    return this.text;
  }
}

export class SlideChart extends BaseSlide {
  slideType: 'chart' = 'chart';

  constructor(id: string, chartConfig: ChartConfiguration) {
    super(id, {});
    this.chartConfig = chartConfig;
  }

  chartConfig: ChartConfiguration;

  get title(): string {
    if (typeof this.chartConfig.options.title.text !== 'string') return this.chartConfig.options.title.text.join(' ');
    return this.chartConfig.options.title.text;
  }
}

export class SlideGrid extends BaseSlide {
  slideType: 'grid' = 'grid';

  constructor(id: string,
              style: SlideStyle,
              slides: { [p: string]: Slide },
              gridTemplateAreas: string[],
              gridTemplateRows: string,
              gridTemplateColumns: string) {
    super(id, style);
    this.slides = slides;
    this.areas = Object.keys(this.slides);
    this.gridTemplateAreas = `"${gridTemplateAreas.join(`" "`)}"`;
    this.gridTemplateRows = gridTemplateRows;
    this.gridTemplateColumns = gridTemplateColumns;
  }

  get style(): SlideStyle {
    return {
      //this makes the property optional in a single line
      ...(this.gridTemplateAreas ? {'grid-template-areas': this.gridTemplateAreas} : {}),
      ...(this.gridTemplateRows ? {'grid-template-rows': this.gridTemplateRows} : {}),
      ...(this.gridTemplateColumns ? {'grid-template-columns': this.gridTemplateColumns} : {}),
      ...this._style
    };
  }

  slides: { [key: string]: Slide };
  areas: string[];
  gridTemplateAreas: string;
  gridTemplateRows: string;
  gridTemplateColumns: string;

  get title(): string {
    return "grid";
  }
}

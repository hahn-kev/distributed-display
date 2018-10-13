import { SlideStyle } from './slide-set';
import { ChartConfiguration } from 'chart.js';

export type Slide = SlideBasic | SlideChart | SlideGrid | SlideStack | SlideImage | SlideText;

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

export class SlideStack extends BaseSlide {
  slideType: 'stack' = 'stack';
  slides: Slide[];


  constructor(id: string, style: SlideStyle, slides: Slide[]) {
    super(id, style);
    this.slides = slides;
  }

  get title(): string {
    return this.slides.map(value => value.title).join(', ');
  }
}

export class SlideBasic extends SlideStack {
  get img() {
    return this.imageSlide.img;
  }

  set img(value: string) {
    this.imageSlide.img = value;
  }

  get text() {
    return this.textSlide.text;
  }

  set text(value: string) {
    this.textSlide.text = value;
  }

  private imageSlide: SlideImage;
  private textSlide: SlideText;

  constructor(id: string, text: string, img: string, textStyle?: SlideStyle, imgStyle?: SlideStyle) {
    let textSlide = new SlideText(id + '|text', text);
    textSlide.style = textStyle;
    let imageSlide = new SlideImage(id + '|img', imgStyle, img);
    super(id, {}, [textSlide, imageSlide]);
    this.imageSlide = imageSlide;
    this.textSlide = textSlide;
  }
}

export class SlideText extends BaseSlide {
  slideType: 'text' = 'text';
  public text: string;

  constructor(id: string, text: string) {
    super(id, {});
    this.text = text;
  }

  get title(): string {
    return this.text;
  }
}

export class SlideImage extends BaseSlide {
  slideType: 'image' = 'image';

  constructor(id: string, style: SlideStyle, img: string) {
    super(id, style);
    this.img = img;
  }

  public img: string;

  get title(): string {
    return this.img.substring(this.img.length - 20, this.img.length - 1);
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
    return 'grid';
  }
}

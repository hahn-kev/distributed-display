import {Component, OnInit} from '@angular/core';
import {Slide} from '../entities/slide';
import {SAMPLE} from '../entities/slide-set';
import {PresenterService} from "./presenter.service";

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.scss']
})
export class PresenterComponent implements OnInit {

  public slideSet = SAMPLE;
  public selectedSlide: Slide;
  public index = 0;
  public slideRenderList: Slide[];

  constructor(private presenterService: PresenterService) {
    this.displaySlide(0);
    window.addEventListener('keydown', ev => this.onKeyPress(ev));
    this.presenterService.slideEvent.subscribe(value => this.displaySlide(value.index))
  }

  ngOnInit() {
  }

  onKeyPress(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowLeft':
        this.sendDisplaySlide(this.index - 1);
        break;

      case 'ArrowRight':
        this.sendDisplaySlide(this.index + 1);
        break;
    }
  }

  sendDisplaySlide(index: number) {
    this.presenterService.sendSlideEvent({index: index});
  }

  displaySlide(index: number) {
    if (index + 1 > this.slideSet.slides.length) return;
    if (index < 0) return;
    this.index = index;
    this.slideRenderList = this.slideSet.slides.slice(Math.max(0, index - 1),
      this.index + 2);
    this.selectedSlide = this.slideSet.slides[index];
  }

}

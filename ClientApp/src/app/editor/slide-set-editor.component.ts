import {Component, OnInit} from '@angular/core';
import {SAMPLE} from '../entities/slide-set';
import {Slide} from '../entities/slide';

@Component({
  selector: 'app-slide-set-editor',
  templateUrl: './slide-set-editor.component.html',
  styleUrls: ['./slide-set-editor.component.scss']
})
export class SlideSetEditorComponent implements OnInit {
  public slideSet = SAMPLE;
  public selectedSlide: Slide = this.slideSet.slides[0];

  constructor() {
  }

  ngOnInit() {
  }

}

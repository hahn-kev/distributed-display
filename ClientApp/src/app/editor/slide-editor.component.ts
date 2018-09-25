import {Component, Input, OnInit} from '@angular/core';
import {Slide} from "../entities/slide";
import { SlideStyle } from '../entities/slide-set';

@Component({
  selector: 'app-slide-editor',
  templateUrl: './slide-editor.component.html',
  styleUrls: ['./slide-editor.component.scss']
})
export class SlideEditorComponent implements OnInit {
  @Input()
  public slideStyle: SlideStyle;

  @Input()
  public slide = new Slide();
  constructor() { }

  ngOnInit() {
  }
}

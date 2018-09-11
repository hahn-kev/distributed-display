import { Component, OnInit } from '@angular/core';
import {Slide} from "../entities/slide";

@Component({
  selector: 'app-slide-editor',
  templateUrl: './slide-editor.component.html',
  styleUrls: ['./slide-editor.component.scss']
})
export class SlideEditorComponent implements OnInit {
  public slide = new Slide();
  constructor() { }

  ngOnInit() {
  }

}

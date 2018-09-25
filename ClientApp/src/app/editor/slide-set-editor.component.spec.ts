import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSetEditorComponent } from './slide-set-editor.component';

describe('SlideSetEditorComponent', () => {
  let component: SlideSetEditorComponent;
  let fixture: ComponentFixture<SlideSetEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideSetEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

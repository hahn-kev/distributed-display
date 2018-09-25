import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SlideSetEditorComponent} from './editor/slide-set-editor.component';
import {PresenterComponent} from './presenter/presenter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'slide-edit', component: SlideSetEditorComponent},
    ]
  },
  {
    path: 'present', component: PresenterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

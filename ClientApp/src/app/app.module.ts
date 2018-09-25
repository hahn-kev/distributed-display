import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { SlideEditorComponent } from './editor/slide-editor.component';
import { PresenterComponent } from './presenter/presenter.component';
import { SlideSetEditorComponent } from './editor/slide-set-editor.component';
import { SlideDisplayComponent } from './presenter/slide-display.component';
import {HubConnectionBuilder} from "@aspnet/signalr";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideEditorComponent,
    PresenterComponent,
    SlideSetEditorComponent,
    SlideDisplayComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [HubConnectionBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }

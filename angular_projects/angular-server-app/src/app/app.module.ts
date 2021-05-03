import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CockpitsComponent } from './cockpits/cockpits.component';
import { ServerElementsComponent } from './server-elements/server-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitsComponent,
    ServerElementsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

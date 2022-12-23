import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VistaComponent } from './body/vista/vista.component';
import { TitleComponent } from './header/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    VistaComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, TitleComponent, VistaComponent]
})
export class AppModule { }

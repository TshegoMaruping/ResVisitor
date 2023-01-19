import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshegoComponent } from './component/tshego/tshego.component';
import { LesibaComponent } from './component/lesiba/lesiba.component';

@NgModule({
  declarations: [
    AppComponent,
    TshegoComponent,
    LesibaComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

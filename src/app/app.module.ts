import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreUiModule } from './libs/core-ui/core-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './core/containers/app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreUiModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../core/containers/app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppComponent],
  exports: [
    AppComponent
  ]
})
export class CoreUiModule { }

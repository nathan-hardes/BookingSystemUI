import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  exports: [
    NgxMaterialTimepickerModule
  ]
})
export class TimePickerModule { }

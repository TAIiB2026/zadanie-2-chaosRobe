import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSokowComponent } from './lista-sokow/lista-sokow.component';
import { SokiFormatPipe } from './soki-format.pipe';


@NgModule({
  declarations: [
    ListaSokowComponent,
    SokiFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaSokowComponent
  ]
})
export class SokiModule { }

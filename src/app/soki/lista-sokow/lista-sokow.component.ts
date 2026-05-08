import { Component, OnInit } from '@angular/core';
import { KartonSoku } from '../../karton-soku';
import { SokiService } from '../../soki.service';

@Component({
  selector: 'app-lista-sokow',
  templateUrl: './lista-sokow.component.html',
  standalone: false 
})
export class ListaSokowComponent implements OnInit {

  kartonySoku: KartonSoku[] = [];

  constructor(private sokService: SokiService) { }

  ngOnInit(): void {
    this.kartonySoku = this.sokService.getKartonySoku();
  }

}
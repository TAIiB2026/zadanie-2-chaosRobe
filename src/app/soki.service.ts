import { Injectable } from '@angular/core';
import { KartonSoku } from './karton-soku';

@Injectable({
  providedIn: 'root'
})
export class SokiService {

  private kartonySoku: KartonSoku[] = [
    {
      id: 1,
      cena: 4.99,
      dataProdukcji: new Date('2025-01-10'),
      typSoku: 'Pomarańczowy',
      producent: 'Tymbark'
    },
    {
      id: 2,
      cena: 5.49,
      dataProdukcji: new Date('2025-02-15'),
      typSoku: 'Jabłkowy',
      producent: 'Hortex'
    },
    {
      id: 3,
      cena: 6.20,
      dataProdukcji: new Date('2025-03-01'),
      typSoku: 'Multiwitamina',
      producent: 'Cappy'
    },
    {
      id: 4,
      cena: 4.50,
      dataProdukcji: new Date('2025-01-25'),
      typSoku: 'Grejpfrutowy',
      producent: 'Riviva'
    },
    {
      id: 5,
      cena: 5.99,
      dataProdukcji: new Date('2025-04-05'),
      typSoku: 'Ananasowy',
      producent: 'Fortuna'
    }
  ];

  constructor() { }

  getKartonySoku(): KartonSoku[] {
    return [...this.kartonySoku];
  }

  getKartonSoku(id: number): KartonSoku | undefined {
    const karton = this.kartonySoku.find(k => k.id === id);

    if (karton) {
      return { ...karton };
    }

    return undefined;
  }
  
}

import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { HeroDetail } from '../hero-detail'
const HEROES: HeroDetail[] = [ 
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heros = HEROES;
  constructor() { }

  ngOnInit() {
    if (this.heros.length > 0) {
      this.heros[0].name = 'test';
    }
  }

}

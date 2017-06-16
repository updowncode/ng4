import { Component, Input, OnInit } from '@angular/core';
import { HeroDetail } from '../hero-detail'
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() heroDetail: HeroDetail;
  constructor() {     }
  ngOnInit() {  }
}

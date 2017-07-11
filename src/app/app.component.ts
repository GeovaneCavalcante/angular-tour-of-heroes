import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'

import { HeroService } from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{

  title = 'Tour of heroes';
  selectedHero : Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService){}

  getHoroes(): void{
    this.heroService.getHores().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.getHoroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}

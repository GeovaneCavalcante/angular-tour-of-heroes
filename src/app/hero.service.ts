import { Injectable } from '@angular/core'
import { Hero } from './hero'

import { HEROES } from './mack-hero'


@Injectable()

export class HeroService{

  getHores(): Promise<Hero[]>{
      return Promise.resolve(HEROES);
  }
}

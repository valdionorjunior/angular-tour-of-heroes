import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHero: any;

  constructor(private messageService: MessageService) { }

  getHeroes(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: buscando heroi id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }
}
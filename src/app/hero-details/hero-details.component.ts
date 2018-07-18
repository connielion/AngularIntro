import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero: Hero;
  private temp: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.temp = this.route.params.subscribe( params => {
      HEROES.forEach( (el) => {
       if (el.id === +params['id']) {
         // console.log(el);
         this.hero = el;
       }
      });
    });
  }

}

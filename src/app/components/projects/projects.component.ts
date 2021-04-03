import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper'

import { projects, Project } from './data/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  PROJECTS: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.PROJECTS = projects;
  }

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    speed: 800,
    loop: false,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 90,
      modifier: 1,
      slideShadows: true
    }
  };

}

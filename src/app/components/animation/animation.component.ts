import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  check: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.check = false;
    }, 1);
  }  
}

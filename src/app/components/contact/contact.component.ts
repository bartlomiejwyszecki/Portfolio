import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mail: string = 'bartlomiej.wyszecki2@gmail.com';

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}

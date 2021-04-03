import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    //TEXT WRITER
    const texts = [
      "Front-end developer", "Programming enthusiast"
    ]
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    let timeout;

    let type = () => {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.querySelector('.text')!.textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      timeout = setTimeout(type, 200); //ONE LETTER WRITING TIME
      if (letter.length === currentText.length) {
        clearTimeout(timeout);
        setTimeout(type, 3000); //DELAY AFTER TEXT IS COMPLETELY WRITTEN
      }
    };
    type();
  }

}
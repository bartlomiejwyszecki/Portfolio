import { Component } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: "phone"
})
export class PhonePipe {
  transform(phoneNum: any) {
    let newStr = "+48 ";

    for (let i = 0; i < phoneNum.length; i++) {
      if (i === 3 || i === 6) {
        newStr += ' ' + phoneNum[i];
      } else {
        newStr += phoneNum[i];
      }
    }
    return newStr;
  }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  toggle: boolean = true;
  myPhone: string = '508499908';
  mail: string = 'bartlomiej.wyszecki2@gmail.com'
}

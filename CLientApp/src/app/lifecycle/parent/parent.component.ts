import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

    parentMessage = "Hello Child";
      childInput = '';


  changeValue() {
    this.parentMessage = "Updated at " + new Date().toLocaleTimeString();
  }


    receiveChildData(data: { inputValue: string }) {
    this.childInput = data.inputValue;
  }

}

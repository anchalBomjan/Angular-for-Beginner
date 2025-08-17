import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {

name="Anil";
  constructor(){
    console.log("Constructor");
    this.name="Bom";
  }

  ngOnInit(){
        console.log("ngOnIt");
        this.name="Hari Bahadhur";

  }

  ngOnDestroy(){
        console.log("ngOnDestory");


  }

}

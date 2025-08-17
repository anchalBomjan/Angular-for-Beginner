import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
@Input() counter!: number;


//It is a typescript constructor
// constructor load the data before it load Component and UI
//mostly construct is used to inject dependency that is used in this ts files in angular
//construct is used to create instance and call instance  .
//Runs first, before Angular sets up any inputs or bindings.
  name="Anil";
  constructor(){
    console.log("Constructor");
    this.name="Bom";
  }
// after Component initialize and UI. load the data mostly it used to  initialized formbuilder, API data load etc
// Runs once after the component is created and Angular sets up input properties.

// Common uses:

// Fetching data from an API.

// Initializing forms (template-driven or reactive forms).

// Setting up default values or state for the component.





  ngOnInit(){
        console.log("ngOnIt");
        this.name="Hari Bahadhur";

  }




  //When we call child class  then angular destory parent component 
  // Angular calls ngOnDestroy automatically when the component is removed from the DOM via routing or *ngIf.

  // You only need manual cleanup inside ngOnDestroy to stop timers, unsubscribe Observables, or remove event listeners
  ngOnDestroy(){
        console.log("ngOnDestory");


  }

  // ngOnchange hook is used to when input data depend to reflect 
  // get the value from parent component to reflect the  child component UI as per Input data which  detected change 
  // mainly edit data from parent and shows UI(child component)
  //--------------------onchange---------//
// Runs every time an @Input() property changes.

// Useful for:

// Updating the DOM based on input changes.

// Responding to data changes passed from parent to child.

// Performing calculations or updates when input data changes.


  ngOnChanges(){
    console.log("ngonchange");
  }




}

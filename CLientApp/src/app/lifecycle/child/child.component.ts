import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

   @Input() data!: string;
   @Output() dataChanged = new EventEmitter<{ inputValue: string }>();


  // for <ng-content>
  @ContentChild('projected') projectedContent!: ElementRef;

  // for view child

  @ViewChild('viewElement') viewElement!: ElementRef;
  @ViewChild('viewElement2') viewElement2!: ElementRef;
  @ViewChild('inputBox') inputBox!: ElementRef;



  constructor(private renderer: Renderer2){

  }

  ///--------------- only pure Angular  without PrimeNG then we can used like this ---
  // 1️⃣ OnInit
  ngOnInit() {
    console.log(" ngOnInit: Input data =", this.data);
  }

  // 2️⃣ DoCheck → runs on every change detection cycle
  ngDoCheck() {
    console.log(" ngDoCheck: Checking for changes (data =", this.data, ")");
  }

  // 3️⃣ AfterContentInit → called once after <ng-content> is initialized
  ngAfterContentInit() {
    console.log(" ngAfterContentInit: Projected content =", this.projectedContent.nativeElement.textContent);
  }

  // 4️⃣ AfterContentChecked → runs every time projected content changes
  ngAfterContentChecked() {
    console.log(" ngAfterContentChecked: Projected content checked =", this.projectedContent.nativeElement.textContent);
  }
//------------------   Difference in simple words-----------------------


// View → deals with the component’s own template + its child components.

// Content → deals with the content projected from the parent into this component (<ng-content>).

  // 5️⃣ AfterViewInit → runs once when child view is initialized
  ngAfterViewInit() {
    console.log("ngAfterViewInit: View element =", this.viewElement.nativeElement.textContent);

    // ✅ Manipulate the DOM element using Renderer2
    this.renderer.setStyle(this.viewElement.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.viewElement.nativeElement, 'fontWeight', 'bold');
     this.renderer.setProperty(this.viewElement.nativeElement, 'textContent', '👀 Manipulated text after ngAfterViewInit');

     // manupulate data
     this.renderer.setProperty(this.viewElement2.nativeElement, 'textContent', 'Updated text from Child!');
    this.renderer.setProperty(this.inputBox.nativeElement, 'value', 'Updated input value!');

  }

  // 6️⃣ AfterViewChecked → runs every time the child view updates
  ngAfterViewChecked() {
    console.log(" ngAfterViewChecked: View checked =", this.viewElement.nativeElement.textContent);
  }


 updateAndNotifyParent() {
    const inputVal = this.inputBox.nativeElement.value;

    // Send the data back to parent
    this.dataChanged.emit({  inputValue: inputVal });
  }


}

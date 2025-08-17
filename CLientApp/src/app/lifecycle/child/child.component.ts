import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

    @Input() data!: string;

  // for <ng-content>
  @ContentChild('projected') projectedContent!: ElementRef;

  // for view child
  @ViewChild('viewElement') viewElement!: ElementRef;

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

  // 5️⃣ AfterViewInit → runs once when child view is initialized
  ngAfterViewInit() {
    console.log("ngAfterViewInit: View element =", this.viewElement.nativeElement.textContent);
  }

  // 6️⃣ AfterViewChecked → runs every time the child view updates
  ngAfterViewChecked() {
    console.log(" ngAfterViewChecked: View checked =", this.viewElement.nativeElement.textContent);
  }

}

# CLientApp

##user directive in student components

1create-student component 
1️⃣ @Input()
Type: Angular Component property decorator (not a template directive, but related to binding).
Purpose: Allows parent component to pass data to a child component.
@Input() student?: Student;


2️⃣ @Output()
Type: Angular Component property decorator.

Purpose: Allows child component to send events/data to the parent.

@Output() save = new EventEmitter<Student>();
        
          |


<app-create-student
  [(visible)]="displayDialog"
  [student]="selectedStudent"
  [isEditMode]="isEditMode"
  (save)="saveStudent($event)"
  (cancel)="cancelDialog()"
></app-create-student>


3️⃣ [formGroup]
Type: Attribute Directive (used in Reactive Forms).

Purpose: Binds a FormGroup object from TS to a <form> element.

Example:<form [formGroup]="studentForm">

4️⃣ formControlName
Type: Attribute Directive (Reactive Forms).

Purpose: Binds a single FormControl inside the FormGroup to an input.

Example:<input type="text" formControlName="name">

5️⃣ *ngIf
Type: Structural Directive.

Purpose: Adds or removes elements from the DOM based on a condition.

Example:<small *ngIf="studentForm.get('name')?.invalid && studentForm.get('name')?.touched">Name required</small>

6️⃣ (ngSubmit)
Type: Event Binding (like an attribute directive).

Purpose: Binds the form submit event to a method in your TS.

Example:

7️⃣ (click)
Type: Event Binding (Attribute Directive).

Purpose: Calls a function when the element is clicked.

Example:  <button (click)="onCancel()">Cancel</button>




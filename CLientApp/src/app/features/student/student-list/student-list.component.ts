import { Component } from '@angular/core';



interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
}
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {

 students: Student[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Angular' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'React' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', course: 'Vue.js' },
    { id: 4, name: 'Emily Johnson', email: 'emily@example.com', course: 'Node.js' }
  ];
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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


export class StudentListComponent implements OnInit {
  students: Student[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Angular' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'React' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', course: 'Vue.js' },
    { id: 4, name: 'Emily Johnson', email: 'emily@example.com', course: 'Node.js' }
  ];

  addForm!: FormGroup;
  editForm!: FormGroup;
  editStudentId: number | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Add Form
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });

    // Edit Form
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });
  }

  addStudent() {
    if (this.addForm.valid) {
      const newId = this.students.length ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
      this.students.push({ id: newId, ...this.addForm.value });
      this.addForm.reset();
    }
  }

  openEditModal(student: Student) {
    this.editStudentId = student.id;
    this.editForm.patchValue(student);
  }

  saveEdit() {
    if (this.editForm.valid && this.editStudentId !== null) {
      const idx = this.students.findIndex(s => s.id === this.editStudentId);
      if (idx > -1) {
        this.students[idx] = { id: this.editStudentId, ...this.editForm.value };
      }
    }
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.students = this.students.filter(s => s.id !== id);
    }
  }
}

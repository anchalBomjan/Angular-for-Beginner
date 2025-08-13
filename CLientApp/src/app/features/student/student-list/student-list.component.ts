import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/core/models/students';
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

  displayDialog: boolean = false;
  selectedStudent?: Student;  // Student to edit or empty for new
  isEditMode: boolean = false;



  // for Delete manually  using P-dialog box
  deleteDialogVisible:boolean=false;
  studentToDelete?:Student;


  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  openNewStudentDialog() {
    this.selectedStudent = undefined;
    this.isEditMode = false;
    this.displayDialog = true;
  }

  openEditStudentDialog(student: Student) {
    this.selectedStudent = { ...student }; // clone to avoid direct changes
    this.isEditMode = true;
    this.displayDialog = true;
  }


  openDeletDialog(student:Student){
    this.studentToDelete=student;
    
  }

  
  /** open delete confiramation dialog */


  openDeleteDialog(student:Student){

    this.studentToDelete=student;
    this.deleteDialogVisible= true;
  }


  confirmDelete(){

    if(!this.studentToDelete) return;
      this.students = this.students.filter(s => s.id !== this.studentToDelete?.id);

      this.messageService.add({
        severity: 'success',
        summary: 'Deleted',
        detail: `${this.studentToDelete.name} deleted successfully`
      });

    this.deleteDialogVisible = false;
    this.studentToDelete = undefined;


  }


  cancelDelete(){
    this.deleteDialogVisible=false;
    this.studentToDelete=undefined;
  }
  saveStudent(student: Student) {
    if (this.isEditMode) {
      const index = this.students.findIndex(s => s.id === student.id);
      if (index !== -1) this.students[index] = student;
      this.messageService.add({ severity: 'success', summary: 'Updated', detail: `Student ID ${student.id} updated.` });
    } else {
      student.id = this.students.length > 0 ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
      this.students.push(student);
      this.messageService.add({ severity: 'success', summary: 'Added', detail: `Student ID ${student.id} added.` });
    }

    this.displayDialog = false; 
  }

  cancelDialog() {
    this.displayDialog = false;
  }
}

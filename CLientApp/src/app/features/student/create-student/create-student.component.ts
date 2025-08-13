import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/core/models/students';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {


 @Input() visible: boolean = false;
  @Input() student?: Student;
  @Input() isEditMode: boolean = false;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<Student>();
  @Output() cancel = new EventEmitter<void>();

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['student'] && this.student) {
      this.initForm(this.student);
    }
    if (!this.student) {
      this.initForm();
    }
  }

  initForm(student?: Student) {
    this.studentForm = this.fb.group({
      id: [student?.id || null],
      name: [student?.name || '', Validators.required],
      email: [student?.email || '', [Validators.required, Validators.email]],
      course: [student?.course || '', Validators.required]
    });
  }

  onSave() {
    if (this.studentForm.valid) {
      this.save.emit(this.studentForm.value);
      this.visibleChange.emit(false);
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.cancel.emit();
    this.visibleChange.emit(false);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CreateStudentComponent } from '../student/create-student/create-student.component';
import { StudentListComponent } from '../student/student-list/student-list.component';

const routes: Routes = [

  {
    path:'app-home',component:HomeComponent,children:[

      {
        path:'students/list',component:StudentListComponent
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

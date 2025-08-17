import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path:'list',component:UserListComponent
  },
  {
    path:'parent',component:ParentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleRoutingModule { }

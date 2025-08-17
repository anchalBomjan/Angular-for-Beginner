import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    UserCreateComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    LifecycleRoutingModule
  ]
})
export class LifecycleModule { }

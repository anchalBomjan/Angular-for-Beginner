import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimengModule } from './primeng/primeng.module';
import { NavbarComponent } from './layout/navbar/navbar.component';



@NgModule({
  declarations:[ NavbarComponent
    
    
  ],
    imports: [
    CommonModule,RouterModule,PrimengModule,
  
  ],

  exports:[    // Reusable Components

    NavbarComponent,
  // Modules
  CommonModule,
  RouterModule,
  PrimengModule]
})
export class SharedModule { }

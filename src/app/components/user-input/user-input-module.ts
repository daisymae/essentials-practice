import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInput } from './user-input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserInput],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UserInput]
})
export class UserInputModule { }

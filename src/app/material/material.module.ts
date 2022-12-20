import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }

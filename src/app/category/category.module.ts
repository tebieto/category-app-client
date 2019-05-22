import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ChildCategoryComponent } from './child-category/child-category.component';

@NgModule({
  declarations: [ListComponent, ChildCategoryComponent],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }

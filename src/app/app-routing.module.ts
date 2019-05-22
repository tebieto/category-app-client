import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ChildCategoryComponent } from './category/child-category/child-category.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
 { "path": '', component: CategoryComponent},
 { "path": 'category', component: CategoryComponent},
 { "path": 'category/:slug/:id/:title', component: ChildCategoryComponent},
 { "path": '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

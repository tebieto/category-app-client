import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Category } from '../../shared/category/category.model';
import { CategoryService } from '../../shared/category/category.service';
import { CustomErrorHandler as errorMessage} from '../../custom-error-handler';
import {MatSnackBar} from '@angular/material';
import { SnackbarComponent } from '../../snackbar/snackbar.component';
import {ActivatedRoute} from "@angular/router"


let onUserSubmit = false
let displayErrors = false
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
   
    //return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted || userSubmitted));
    return !!(displayErrors);
  }
}

@Component({
  selector: 'app-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.css'],
  providers: [CategoryService,]
})
export class ChildCategoryComponent implements OnInit {

  categoryList: Array<Category>= []
  category: Category;
  parent_id: number
  parent_title: string
  parent_slug: string
  pageTitle: string
  pageInfo: {}
  
    category_title = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]);
  
  
    matcher = new MyErrorStateMatcher();
  
  
  
    constructor(
      private categoryService: CategoryService, 
      private snackBar: MatSnackBar,
      private route: ActivatedRoute,
      ) {
        this.category = new Category();
     }
  
    ngOnInit() {
      
      this.route.params.subscribe(params=>{
        
        this.parent_id = params['id'];
        this.parent_title = params ['title']
        this.parent_slug =  params['slug']

        this.pageInfo = {
          page_title: this.parent_title + " Category",
          parent_id: this.parent_id,
          category_id: 0,
          component: "Child"
        }

        this.pageTitle = this.parent_title
        
        this.categoryService.pageInfo.next(this.pageInfo)

      })

    }
  
    public onSubmit() {
     
        displayErrors = true
  
        let submitedCategory = this.category_title.value.trim(' ')
        
        if(!submitedCategory) {
          this.category_title.setValue("")
          return
        }
  
  
        if( this.category_title.invalid){
          return
        }
  
        this.category.title = submitedCategory
        this.category.parent = this.parent_id
  
        // Persist to database
  
        this.persistCategory()
  
        return
  
  
    }
  
  
    public persistCategory(){
  
      this.categoryService.create(this.category)
        .subscribe(
          (result) => {
            let notification = 'Category saved successfully'
            this.openSnackBar(notification, 'snack-success')
            this.categoryList.push(result)
          
        },
        (error)=>{
          
          let notification = errorMessage.ConnectionError(error)
          this.openSnackBar(notification, 'snack-error')
          
        });
  
        
        displayErrors = false
        this.category_title.setValue("")
      
    }
  
    openSnackBar(message, panelClass) {
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: message,
        panelClass: [panelClass],
        duration: 2000
      })
    }
  
   public hideErrors(){
      displayErrors = false
    }
  

}

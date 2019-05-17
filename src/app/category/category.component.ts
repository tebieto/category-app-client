import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Category } from '../shared/category/category.model';
import { CategoryService } from '../shared/category/category.service';
import { CustomErrorHandler as errorMessage} from '../custom-error-handler';
import {MatSnackBar} from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';


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
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

readList: Array<Category>= []
category: Category;


  category_title = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]);


  matcher = new MyErrorStateMatcher();



  constructor(private categoryService: CategoryService, private snackBar: MatSnackBar) {
      this.category = new Category();
   }

  ngOnInit() {
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
      this.category.parent = 0

      // Persist to database

      this.persistCategory()

      return


  }


  public persistCategory(){

    this.categoryService.create(this.category)
      .subscribe(
        (datas) => {
          let notification = 'Category saved successfully'
          this.openSnackBar(notification, 'snack-error')
        datas.forEach((data)=> {
          this.readList.push(data)
        });
      },
      (error)=>{

        let notification = errorMessage.ConnectionError(error)
        this.openSnackBar(notification, 'snack-error')
        
      });

      console.log(this.readList)
      
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

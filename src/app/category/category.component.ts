import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


let userSubmitted = false
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    //return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted || userSubmitted));
    return !!(control && (control.dirty || control.touched || isSubmitted || userSubmitted));
  }
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {




  category_name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);


  matcher = new MyErrorStateMatcher();



  constructor() { }

  ngOnInit() {
  }

  public submit(){
   
  userSubmitted = true;
  
  if(!this.category_name.value.trim(' ') ) {
    return
  }


  if( this.category_name.invalid){
    return
  }

  alert('good')

  }

}

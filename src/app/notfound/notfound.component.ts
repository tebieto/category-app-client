import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category/category.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  pageInfo = {
    page_title: "Page Not Found"
  }

  constructor(private categoryService: CategoryService) { 
    
  }

  ngOnInit() {
    this.categoryService.pageInfo.next(this.pageInfo)
  }

}

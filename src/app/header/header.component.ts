import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../shared/category/category.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle: string

  constructor(private categoryService: CategoryService, private location: Location, private router: Router) {

    categoryService.pageInfo.subscribe(info=>{

      this.pageTitle = info['page_title']

    })
   }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

  goHome(){
    this.router.navigateByUrl('/')
  }


}

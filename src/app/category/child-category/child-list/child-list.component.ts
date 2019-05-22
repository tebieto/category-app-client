import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/shared/category/category.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Category } from 'src/app/shared/category/category.model';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {
  categoryList: Array<Category>= []
  category: CategoryModel
  pageTitle: string
  parentId: number
  categoryId = 0

  displayedColumns: string[] = ['title', 'parent',  'action'];
  dataSource = new MatTableDataSource<CategoryModel>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private categoryService: CategoryService,){

   this.categoryService.pageInfo.subscribe(info=>{
      this.pageTitle = info['page_title']
      this.parentId = info['parent_id']
      
      this.readCategories()
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
       
    })

    categoryService.newCategoryAlert.subscribe(
      (newCategory)=>{
        
        CategoryData.push(newCategory)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )

  }

  ngOnInit() {

   
  }

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  public readCategories(){

    CategoryData = []
    this.dataSource.data = CategoryData
    
    this.categoryService.read(this.parentId, this.categoryId)
      .subscribe(
        (result) => {
         
          result.forEach(element => {
            CategoryData.push(element)
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            
          });
        
      });
      
    
  }

  refreshCategoryData(){
     
  }
  

  checkParent(parent: number){
    if(parent==0){
      return 'None'
    } else {
      return this.pageTitle
    }
  }

}

export interface CategoryModel {
  id: number;
  title: string;
  slug: string
  parent: string
}

let CategoryData = [];


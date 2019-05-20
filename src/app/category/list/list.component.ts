import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CategoryService } from 'src/app/shared/category/category.service';
import { Category } from '../../shared/category/category.model';





@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  categoryList: Array<Category>= []
  category: CategoryModel

  displayedColumns: string[] = ['title', 'parent', 'action'];
  dataSource = new MatTableDataSource<CategoryModel>(CategoryData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private categoryService: CategoryService){

    categoryService.newCategoryAlert.subscribe(
      (newCategory)=>{
        CategoryData.push(newCategory)
        this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
      }
    )

  }

  ngOnInit() {
   
    this.readAllCategories()
    
  }

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  public readAllCategories(){

    this.categoryService.read()
      .subscribe(
        (result) => {

          result.forEach(element => {
            
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

            this.categoryList.push(element)
            CategoryData.push(element)
          });
        
        
      });
      
    
  }

  checkParent(parent: number){
    if(parent==0){
      return 'None'
    } else {
      return "Specify"
    }
  }

}

export interface CategoryModel {
  id: number;
  title: string;
  slug: string
  parent: string
}

const CategoryData: CategoryModel[] = [
];
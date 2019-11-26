import { Component, OnInit, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
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
  pageTitle: string
  parentId: number
  categoryId = 0

  displayedColumns: string[] = ['title', 'parent',  'action'];
  dataSource = new MatTableDataSource<CategoryModel>();
  sn = 0

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private categoryService: CategoryService, public dialog: MatDialog){

   this.categoryService.pageInfo.subscribe(info=>{
    
     CategoryData = []
      this.pageTitle = info['page_title']
      this.parentId = info['parent_id']

      this.readCategories()
      
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

  onDeleteCategory(id: number, title: string){

    this.openDialog(id, title)
  }

  openDialog(id:number, title:string): void {
    const dialogRef = this.dialog.open(DeleteDialogue, {
      width: '250px',
      data: {id: id, title: title}
    });

    dialogRef.afterClosed().subscribe(result => {

      if(!result){
        return
      }
     this.deleteCategory(result)
    });
  }


  deleteCategory(id: number){
    console.log(CategoryData)
    this.categoryService.delete(this.parentId, id)
      .subscribe(
        (result) => {
        let category = CategoryData.find((c)=>{
           return c.id===id
         })

         let index = CategoryData.indexOf(category)
         
         CategoryData.splice(index, 1)
         this.dataSource.paginator = this.paginator;
            
        
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


export interface DialogData {
  id: string;
  title: string;
}

export interface CategoryModel {
  id: number;
  title: string;
  slug: string
  parent: string
}

let CategoryData = [];


@Component({
  selector: 'delete-dialogue',
  templateUrl: '../delete-dialogue.html',
})
export class DeleteDialogue {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onDontDelete(): void {
    this.dialogRef.close();
  }

}
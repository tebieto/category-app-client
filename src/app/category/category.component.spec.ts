import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatIconModule, MatListModule, MatToolbarModule, MatPaginatorModule, MatTableModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpModule } from '@angular/http';
import { ChildCategoryComponent } from './child-category/child-category.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CategoryComponent,
        HeaderComponent,
        ListComponent,
        ChildCategoryComponent,
        NotfoundComponent
       ],

       imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpModule,
        MatButtonModule, 
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSnackBarModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

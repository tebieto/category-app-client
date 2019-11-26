import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatIconModule, MatListModule, MatToolbarModule, MatPaginatorModule, MatTableModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from '../category.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { ChildCategoryComponent } from '../child-category/child-category.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListComponent,
        CategoryComponent,
        HeaderComponent,
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
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

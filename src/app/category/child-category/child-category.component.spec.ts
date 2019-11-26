import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCategoryComponent } from './child-category.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatIconModule, MatListModule, MatToolbarModule, MatPaginatorModule, MatTableModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoryComponent } from '../category.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';

describe('ChildCategoryComponent', () => {
  let component: ChildCategoryComponent;
  let fixture: ComponentFixture<ChildCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ChildCategoryComponent,
        HeaderComponent,
        ListComponent,
        CategoryComponent,
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
    fixture = TestBed.createComponent(ChildCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildListComponent } from './child-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatIconModule, MatListModule, MatToolbarModule, MatPaginatorModule, MatTableModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from '../../category.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { ListComponent } from '../../list/list.component';
import { ChildCategoryComponent } from '../child-category.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';

describe('ChildListComponent', () => {
  let component: ChildListComponent;
  let fixture: ComponentFixture<ChildListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ChildListComponent,
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
    fixture = TestBed.createComponent(ChildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

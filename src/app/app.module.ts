import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MatInputModule, MatSnackBarModule, MatIconModule, MatList, MatListModule, MatToolbarModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpModule } from '@angular/http';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ListComponent } from './category/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    SnackbarComponent,
    ListComponent
  ],

  entryComponents: [
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatTableModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

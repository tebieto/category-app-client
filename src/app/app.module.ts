import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MatInputModule, MatSnackBarModule, MatIconModule} from '@angular/material';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpModule } from '@angular/http';
import { SnackbarComponent } from './snackbar/snackbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    SnackbarComponent
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
    MatIconModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

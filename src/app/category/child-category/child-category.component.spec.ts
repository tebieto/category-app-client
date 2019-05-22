import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCategoryComponent } from './child-category.component';

describe('ChildCategoryComponent', () => {
  let component: ChildCategoryComponent;
  let fixture: ComponentFixture<ChildCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCategoryComponent ]
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

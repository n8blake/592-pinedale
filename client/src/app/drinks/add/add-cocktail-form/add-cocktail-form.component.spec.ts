import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCocktailFormComponent } from './add-cocktail-form.component';

describe('AddCocktailFormComponent', () => {
  let component: AddCocktailFormComponent;
  let fixture: ComponentFixture<AddCocktailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCocktailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCocktailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

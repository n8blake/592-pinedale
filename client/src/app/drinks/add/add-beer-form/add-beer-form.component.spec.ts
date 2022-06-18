import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeerFormComponent } from './add-beer-form.component';

describe('AddBeerFormComponent', () => {
  let component: AddBeerFormComponent;
  let fixture: ComponentFixture<AddBeerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBeerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBeerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

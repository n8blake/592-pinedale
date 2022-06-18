import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWhiskeyFormComponent } from './add-whiskey-form.component';

describe('AddWhiskeyFormComponent', () => {
  let component: AddWhiskeyFormComponent;
  let fixture: ComponentFixture<AddWhiskeyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWhiskeyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWhiskeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

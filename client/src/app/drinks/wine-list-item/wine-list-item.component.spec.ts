import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineListItemComponent } from './wine-list-item.component';

describe('WineListItemComponent', () => {
  let component: WineListItemComponent;
  let fixture: ComponentFixture<WineListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WineListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskeyListItemComponent } from './whiskey-list-item.component';

describe('WhiskeyListItemComponent', () => {
  let component: WhiskeyListItemComponent;
  let fixture: ComponentFixture<WhiskeyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiskeyListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiskeyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

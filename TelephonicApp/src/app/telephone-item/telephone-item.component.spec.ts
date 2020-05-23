import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneItemComponent } from './telephone-item.component';

describe('TelephoneItemComponent', () => {
  let component: TelephoneItemComponent;
  let fixture: ComponentFixture<TelephoneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

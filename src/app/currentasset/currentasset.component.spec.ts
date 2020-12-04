import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentassetComponent } from './currentasset.component';

describe('CurrentassetComponent', () => {
  let component: CurrentassetComponent;
  let fixture: ComponentFixture<CurrentassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoComponent } from './avo.component';

describe('AvoComponent', () => {
  let component: AvoComponent;
  let fixture: ComponentFixture<AvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

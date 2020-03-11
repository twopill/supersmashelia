import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetsComponent } from './tets.component';

describe('TetsComponent', () => {
  let component: TetsComponent;
  let fixture: ComponentFixture<TetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

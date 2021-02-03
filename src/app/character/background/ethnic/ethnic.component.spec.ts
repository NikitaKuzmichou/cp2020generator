import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EthnicComponent } from './ethnic.component';

describe('EthnicComponent', () => {
  let component: EthnicComponent;
  let fixture: ComponentFixture<EthnicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EthnicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

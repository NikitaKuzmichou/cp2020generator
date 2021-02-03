import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharacteristicsComponent } from './characteristics.component';

describe('CharacteristicsComponent', () => {
  let component: CharacteristicsComponent;
  let fixture: ComponentFixture<CharacteristicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddWordsComponent } from './odd-words.component';

describe('OddWordsComponent', () => {
  let component: OddWordsComponent;
  let fixture: ComponentFixture<OddWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddWordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

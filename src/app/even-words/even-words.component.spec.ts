import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenWordsComponent } from './even-words.component';

describe('EvenWordsComponent', () => {
  let component: EvenWordsComponent;
  let fixture: ComponentFixture<EvenWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenWordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

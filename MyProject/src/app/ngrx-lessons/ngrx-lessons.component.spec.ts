import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxLessonsComponent } from './ngrx-lessons.component';

describe('NgrxLessonsComponent', () => {
  let component: NgrxLessonsComponent;
  let fixture: ComponentFixture<NgrxLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

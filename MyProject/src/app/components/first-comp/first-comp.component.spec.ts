import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompComponent } from './first-comp.component';

describe('FirstCompComponent', () => {
  let component: FirstCompComponent;
  let fixture: ComponentFixture<FirstCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add course button should exist', () => {
    const button = fixture.nativeElement.querySelector('#add_course_button')
    expect(button.textContent).toEqual('Добавить компанию')
  });

  it('login button should exist', () => {
    const button = fixture.nativeElement.querySelector('#login_button')
    expect(button.textContent).toEqual('Авторизация')
  });
});

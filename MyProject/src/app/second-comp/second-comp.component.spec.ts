import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondCompComponent } from './second-comp.component';
import { AuthService } from "../auth.service";
import { LessonsService } from "../lessons.service";

describe('SecondCompComponent', () => {
  let component: SecondCompComponent;
  let fixture: ComponentFixture<SecondCompComponent>;
  let authService = jasmine.createSpyObj('AuthService', ['getIsUserAuth'])
  let lessonService = jasmine.createSpyObj('LessonsService', ['getLessonId', 'getLessons'])


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCompComponent ],
      providers: [{ provide: AuthService, useValue: authService }, { provide: LessonsService, useValue: lessonService }]
    })
    .compileComponents();

    authService = TestBed.inject(AuthService);
    lessonService = TestBed.inject(LessonsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCompComponent);
    component = fixture.componentInstance;
  });

   describe('user is authorized', () => {
     it('date of creation should exist', () => {
       authService.getIsUserAuth = jasmine.createSpy().and.returnValue(true)
       lessonService.getLessonId = jasmine.createSpy().and.returnValue(1)
       lessonService.getLessons = jasmine.createSpy().and.returnValue({id:1, title: 'Название компании', description: 'Описание компании', time: 'Дата создания'})
       fixture.detectChanges();
       const time = fixture.nativeElement.querySelector('.date_of_creation')
       expect(time).toBeTruthy()
     });
   })
});

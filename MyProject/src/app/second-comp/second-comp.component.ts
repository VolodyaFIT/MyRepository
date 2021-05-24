import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LessonsService } from '../lessons.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.scss']
})
export class SecondCompComponent implements OnInit {

  public lessons: any[]
  public autService;
  public lessonsId;

constructor(private lessonsService: LessonsService, private authService: AuthService) {  }

  ngOnInit(): void {
    this.lessons = this.lessonsService.getLessons();
    this.autService = this.authService;
    this.lessonsId = this.lessonsService.getLessonId();
  }

}

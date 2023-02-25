import { Component, OnInit } from '@angular/core';
import {Course} from "../common/interfaces/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  emptyCourse:Course = {
    id: null,
    title: '',
    description: '',
    percentComplete: 0,
    favorite: false,
  }
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Advanced Angular 13',
      description: 'Learn the advanced features of Angular 13',
      percentComplete: 10,
      favorite: false
    },

  ];

  selectedCourse = null;

  selectCourse(course) {
    this.selectedCourse = {...course};
  }

  deleteCourse(course) {
    console.log(`Deleting course ${course.id}`);
  }

  reset() {
    this.selectedCourse({...this.emptyCourse});
  }

  constructor() { }

  ngOnInit(): void {
  }

}

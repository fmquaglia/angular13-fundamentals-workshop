import { Component, OnInit } from '@angular/core';
import {Course} from "../common/interfaces/course";
import {CoursesService} from "../common/services/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses:Course[] = []
  emptyCourse:Course = {
    id: null,
    title: '',
    description: '',
    percentComplete: 0,
    favorite: false,
  }
  selectedCourse:Course = null;
  originalTitle: string;

  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.courses
  }

  selectCourse(course) {
    this.selectedCourse = {...course};
    this.originalTitle = course.title;
  }

  deleteCourse(course) {
    console.log(`Deleting course ${course.id}`);
  }

  saveCourse(course) {
    console.log(`Saving course ${course.id}`);
  }

  reset() {
    this.originalTitle = null
    this.selectedCourse = {...this.emptyCourse};
  }
}

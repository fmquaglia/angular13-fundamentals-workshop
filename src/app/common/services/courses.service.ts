import { Injectable } from '@angular/core';
import {Course} from "../interfaces/course";

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  courses:Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: '2',
      title: 'Advanced Angular 13',
      description: 'Learn the advanced features of Angular 13',
      percentComplete: 10,
      favorite: false
    },
    {
      id: '3',
      title: 'Rapid Application Development',
      description: 'How to leverage the tools and libraries for rapid application development',
      percentComplete: 100,
      favorite: true
    },
    {
      id: '4',
      title: 'React from scratch',
      description: 'Learn the basics of React',
      percentComplete: 50,
      favorite: false
    }
  ]
}

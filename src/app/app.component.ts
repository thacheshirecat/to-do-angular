import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component(
{
  selector: 'to-do-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  currentFocus: string = 'Angular Homework';
  tasks: Task[] =
  [
    new Task('Finish Angular homework for Epicodus course'),
    new Task('Level up my guy'),
    new Task('Eat food (again)')
  ];
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
}

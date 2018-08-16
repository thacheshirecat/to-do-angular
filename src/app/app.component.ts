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
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  masterTaskList: Task[] =
  [
    new Task('Finish Angular homework for Epicodus course', 3),
    new Task('Level up my guy', 2),
    new Task('Eat food (again)', 1)
  ];

  editTask(clickedTask)
  {
    this.selectedTask = clickedTask;
  }
  finishedEditing()
  {
    this.selectedTask = null;
  }


}

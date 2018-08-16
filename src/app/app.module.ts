import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
=======
import { FormsModule }  from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
>>>>>>> 3b1c2d8b13c96bd79f0cdb7f4e2714c9d8f5e590

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TaskListComponent,
    EditTaskComponent
=======
    TaskListComponent
>>>>>>> 3b1c2d8b13c96bd79f0cdb7f4e2714c9d8f5e590
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CommonHeaderComponent } from './components/shared/common-header/common-header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FormTaskComponent } from './components/tasks/form-task/form-task.component';
import { TaskComponent } from './components/tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectsComponent,
    CommonHeaderComponent,
    TasksComponent,
    FormTaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

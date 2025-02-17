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
import { FormsModule } from '@angular/forms';
import { FieldMessageErrorComponent } from './components/shared/field-message-error/field-message-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectsComponent,
    CommonHeaderComponent,
    TasksComponent,
    FormTaskComponent,
    TaskComponent,
    FieldMessageErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

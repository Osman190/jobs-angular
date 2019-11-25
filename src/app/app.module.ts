import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobItemComponent } from './components/job-item/job-item.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobItemComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

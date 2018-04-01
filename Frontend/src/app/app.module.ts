// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';

// other
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { StudentsModule } from './students/students.module';
import { SharedModule } from './shared/shared.module';
import { InfoModule } from './info/info.module';
import { TeachersModule } from './teachers/teachers.module';

// custom modules

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // angular modules
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    // custom modules
    CoreModule,
    SharedModule,
    StudentsModule,
    InfoModule,
    TeachersModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

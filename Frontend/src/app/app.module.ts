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
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// custom modules

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    // custom modules
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Service } from './server/server.service';

@NgModule({
  declarations: [AppComponent, ServerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatSelectModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWfvQwRud5ZGN7IYOzV79kLJYchaVKLq0'
    }),
    ChartsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

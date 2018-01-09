import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DirectDirective } from './direct.directive';
import { TestComponent } from './test/test.component';
import { MyIfDirective } from './my-if.directive';


@NgModule({
  declarations: [
    AppComponent,
    DirectDirective,
    TestComponent,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

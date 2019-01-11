import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructuralDirectiveComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

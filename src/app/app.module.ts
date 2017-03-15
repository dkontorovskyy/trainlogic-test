import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  entryComponents: [
    ContactListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

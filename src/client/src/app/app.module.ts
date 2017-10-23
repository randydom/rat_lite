import { OptionsDialog } from './options.dialog/options.dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnectDialog } from './connect.dialog/connect.dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConnectDialog,
    OptionsDialog
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  entryComponents:[
    ConnectDialog,
    OptionsDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogRefComponent } from './dialog-ref/dialog-ref.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './modal/modal.component';
import {MatIconModule} from '@angular/material/icon';
import { ModalErrorComponent } from './modal-error/modal-error.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogRefComponent,
    ModalComponent,
    ModalErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

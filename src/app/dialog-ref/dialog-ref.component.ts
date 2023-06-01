import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalErrorComponent } from '../modal-error/modal-error.component';

@Component({
  selector: 'app-dialog-ref',
  templateUrl: './dialog-ref.component.html',
  styleUrls: ['./dialog-ref.component.css']
  
})
export class DialogRefComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  openModalSucced(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      height: '300px',
      width: '400px',
    });
  }

  openModalError(): void {
    let dialogRef = this.dialog.open(ModalErrorComponent, {
      height: '300px',
      width: '400px',
    });
  }
}

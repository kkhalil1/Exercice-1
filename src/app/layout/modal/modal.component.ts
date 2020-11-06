import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

 
  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any) {
    
  }

  ngOnInit() {
    let modalData = this.modalData;
    switch (modalData.name) {
      default:
        break;
    }
  }

  actionFunction() {
    this.modalAction(this.modalData);
    this.closeModal();
  }

  closeModal() {

    this.dialogRef.close();
  }

  modalAction(modalData: any) {
    switch (modalData.name) {
      default:
        break;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notifdialog',
  templateUrl: './notifdialog.component.html',
  styleUrls: ['./notifdialog.component.scss'],
})
export class NotifdialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}

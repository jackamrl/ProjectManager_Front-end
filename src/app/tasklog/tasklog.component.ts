import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tasklog',
  templateUrl: './tasklog.component.html',
  styleUrls: ['./tasklog.component.scss'],
})
export class TasklogComponent implements OnInit {
  displayedColumns: string[] = [
    'idTaskLog',
    'taskDescription',
    'taskLogDate',
    'taskMinutes',
    'userUsername',
    'taskIdName',
  ];
  username: string;

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.getAllTaskLog();
  }
  getAllTaskLog() {
    this.api.taskLogList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        alert('error while fetching');
      },
    });
  }
}

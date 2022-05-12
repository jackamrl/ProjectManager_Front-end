import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyaddComponent } from '../companyadd/companyadd.component';
import { ProjectaddComponent } from '../projectadd/projectadd.component';
import { TaskaddComponent } from '../taskadd/taskadd.component';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss'],
})
export class AjoutComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog
      .open(CompanyaddComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          // open(ProductListComponent)
        }
      });
  }

  openDialogProject() {
    this.dialog
      .open(ProjectaddComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          // open(ProductListComponent)
        }
      });
  }
  openDialogTask() {
    this.dialog
      .open(TaskaddComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          // open(ProductListComponent)
        }
      });
  }
}

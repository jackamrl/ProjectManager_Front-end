import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectaddComponent } from '../projectadd/projectadd.component';
import { ApiService } from '../services/api.service';
import { Project } from '../_models/project';
import { Task } from '../_models/task';

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.scss'],
})
export class TaskaddComponent implements OnInit {
  selectedValue: any;
  task: Task = new Task();
  productForm!: FormGroup;
  company!: FormGroup;
  actionBtn: string = 'Ajouter';
  projects: Project[];

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<TaskaddComponent>,
    private apiservice: ApiService
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  public addTask(form: NgForm) {
    console.log(form.value);
    console.log(this.selectedValue);
    if (form.valid) {
      this.apiservice.addTask(form.value).subscribe({
        next: (res) => {
          alert('tache ajoutée');
          form.reset();
          this.dialogRef.close('save');
        },
        error: () => {
          alert("erreur lors de l'ajout");
        },
      });
    }
  }

  ChangeDepartement(e: any) {
    console.log(' changed...');
    // letmaValeur = e.target.value;
    this.selectedValue = e.value;
    console.log(this.selectedValue);
  }

  getAllProjects() {
    this.apiservice.projectList().subscribe({
      next: (res) => {
        this.projects = res;
        console.log(res);
      },
      error: (err) => {
        alert('error while fetching');
      },
    });
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  NgForm,
} from '@angular/forms';
import { Project } from '../_models/project';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { Company } from '../_models/company';

@Component({
  selector: 'app-projectadd',
  templateUrl: './projectadd.component.html',
  styleUrls: ['./projectadd.component.scss'],
})
export class ProjectaddComponent implements OnInit {
  selectedValue: any;
  project: Project = new Project();
  productForm!: FormGroup;
  company!: FormGroup;
  actionBtn: string = 'Ajouter';
  companies: Company[];
  // maValeur: any;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ProjectaddComponent>,
    private apiservice: ApiService
  ) {}

  ngOnInit(): void {
    // this.productForm = this.formBuilder.group({
    //   company: this.formBuilder.group({
    //     idCompany: ['', Validators.required],
    //   }),
    //   projectName: ['', Validators.required],
    // });

    this.getAllCompanies();
  }

  public addProject(form: NgForm) {
    console.log(form.value);
    console.log(this.selectedValue);
    if (form.valid) {
      this.apiservice.addProject(form.value).subscribe({
        next: (res) => {
          alert('projet ajoutée');
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

  getAllCompanies() {
    this.apiservice.companiesList().subscribe({
      next: (res) => {
        this.companies = res;
        console.log(res);
      },
      error: (err) => {
        alert('error while fetching');
      },
    });
  }
}

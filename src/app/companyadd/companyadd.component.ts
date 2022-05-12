import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { Company } from '../_models/company';

@Component({
  selector: 'app-companyadd',
  templateUrl: './companyadd.component.html',
  styleUrls: ['./companyadd.component.scss'],
})
export class CompanyaddComponent implements OnInit {
  company: Company = new Company();
  productForm!: FormGroup;
  actionBtn: string = 'Ajouter';

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<CompanyaddComponent>,
    private apiservice: ApiService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      companyName: ['', Validators.required],
    });

    // if (this.editData) {
    //   this.actionBtn = 'Mettre à jour';

    //   this.productForm.controls['companyName'].setValue(
    //     this.editData.productName
    //   );
    //   this.productForm.controls['companyName'].setValue(this.editData.category);
    // }
  }

  addCompany() {
    console.log(this.company);
    if (this.productForm.valid) {
      this.apiservice.addCompany(this.company).subscribe({
        next: (res) => {
          alert('Company ajoutée');
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error: () => {
          alert("erreur lors de l'ajout");
        },
      });
    }
  }
  // addProduct() {
  //   if (!this.editData) {
  //     if (this.productForm.valid) {
  //       this.api.postProduct(this.productForm.value).subscribe({
  //         next: (res) => {
  //           alert('Produit ajouté avec succes');
  //           this.productForm.reset();
  //           this.dialogRef.close('save');
  //         },
  //         error: () => {
  //           alert("Erreur lors de l'ajout ");
  //         },
  //       });
  //     }
  //   } else {
  //     this.updateProduct();
  //   }

  // }

  // updateProduct() {
  //   this.api.putProduct(this.productForm.value, this.editData.id).subscribe({
  //     next: (res) => {
  //       alert('Produit modifié avec succes');
  //       this.productForm.reset;
  //       this.dialogRef.close('update');
  //     },
  //     error: () => {
  //       alert('erreur de modification');
  //     },
  //   });
  // }
}

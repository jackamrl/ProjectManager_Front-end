import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  cheminImage: any = './../../images/photo_2022-03-30_10-29-03.jpg';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
})
export class SidenavbarComponent implements OnInit {
  selectedIndex: any;
  index: any;

  // list = document.querySelector('.list');
  //  elm = document.querySelector<HTMLElement>('.list')!;
  //  elm = document.querySelectorAll(".<list>");
  constructor() {}

  ngOnInit(): void {
    // for ( let i=0; i<this.elm.length; i++ ){
    //   this.elm[i].c
    // }
    //   elements.forEach((ele, index) => {
    //     const errors = something.length;
    //     if (index < errors) {
    //       ele.classList.add("show");
    //     } else {
    //       ele.classList.remove("show");
    //     }
    // }
  }
}

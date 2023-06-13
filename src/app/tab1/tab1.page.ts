import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router) {}

  exibirCadastroDados() {
   // const navigationExtras:NavigationExtras = {state:{}};
    this.router.navigate(['cadastro-dados']);
  }

  exibirsugestao() {
    // const navigationExtras:NavigationExtras = {state:{}};
     this.router.navigate(['sugestao']);
   }

   exibirreducao() {
    // const navigationExtras:NavigationExtras = {state:{}};
     this.router.navigate(['reducao']);
   }
}

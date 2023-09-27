import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { CadastroDadosPage } from '../cadastro-dados/cadastro-dados.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  
  constructor(public router: Router) {}


  exibirstatus() {
    // const navigationExtras:NavigationExtras = {state:{}};
     this.router.navigate(['status']);
   }
}

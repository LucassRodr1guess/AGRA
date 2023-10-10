import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { CadastroDadosPage } from '../cadastro-dados/cadastro-dados.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 
  tipoCultura: any;
  constructor(public router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.tipoCultura = localStorage.getItem("tipoCultura");
    console.log(this.tipoCultura);
    function criarOpcaoCultura(){
        const botaoCultura = document.createElement("ion-button");
      
   }
   localStorage.setItem("tipoCultura", this.tipoCultura);
  }
  

  exibirstatus() {
    // const navigationExtras:NavigationExtras = {state:{}};
     this.router.navigate(['status']);
   }
   //Puxar o nome da cultura selecionada para criar o botão das culturas com o click de exibir os resultados
   
  }
 

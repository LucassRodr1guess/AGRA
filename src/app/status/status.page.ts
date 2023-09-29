import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CadastroDadosPage } from '../cadastro-dados/cadastro-dados.page';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  tipoCultura: any;
  tipoSolo:any;
  tipoPesticida:any;
  dataPlantio:any;

  valorClima:any = '';
  diasColheita:any = '';
  //fazer o mesmo em cadastro de dados e aqui para o valor da data, ver como colocar para a data ir diminuindo todos os dias

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.tipoCultura = localStorage.getItem("tipoCultura");
    this.tipoSolo = localStorage.getItem("tipoSolo");
    this.tipoPesticida = localStorage.getItem("tipoPesticida");
    this.dataPlantio = localStorage.getItem("dataPlantio");
    
    console.log(this.tipoCultura);
    console.log(this.tipoSolo);
    console.log(this.tipoPesticida);
    console.log(this.dataPlantio);
    
    console.log(this.valorClima);
    //declarar funções para rodarem os algoritmos
    this.clima(this.tipoCultura);
    this.tempoColheita(this.tipoCultura);
   

    

    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
     //sem if pq nn tem a parte de cadastrar os dados ainda
    });

   
  }
   clima(tipoCultura: any){
    if(tipoCultura === "algodao"){
      this.valorClima = "18ºC a 30ºC";
    } else if (tipoCultura ==="soja"){
      this.valorClima = "20ºC a 30ºC";
    }
   }
   //outras funções
   tempoColheita(tipoCultura:any){
    if(tipoCultura==="algodão"){
      this.diasColheita = "130 a 220 dias (podendo ter variação)";
    }else if (tipoCultura === "soja"){
      this.diasColheita = "60 a 120 dias (podendo ter variação)";
    }
   }
   

}

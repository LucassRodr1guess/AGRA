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
  estacaoPlantio:any='';
  estacaoqldd:any='';
  epocaColheita:any='';
  soloRec:any='';
  tratamentoSolo:any='';
  pragas:any = '';
  cuidados:any = '';
  colheita:any='';
  armazenar:any = '';


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
    console.log(this.diasColheita);
    console.log(this.estacaoPlantio);
    console.log(this.estacaoqldd);
    console.log(this.epocaColheita);
    console.log(this.soloRec);
    console.log(this.colheita);

    //declarar funções para rodarem os algoritmos
    this.clima(this.tipoCultura);
    this.tempoColheita(this.tipoCultura);
    this.estacoes(this.estacaoPlantio);
    this.estacaoBM(this.tipoCultura, this.estacaoPlantio);
    this.estacaoColheita(this.tipoCultura, this.estacaoPlantio, this.dataPlantio);
    this.soloIdeal(this.tipoSolo, this.tipoCultura);
    this.tratarSolo(this.tipoCultura);
    this.pragasCulturas(this.tipoCultura);
    this.pragasCuidado(this.tipoCultura);
    this.colheitaProveito(this.tipoCultura);
    this.armazenamento(this.tipoCultura);
    
   

   

    

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
    if(tipoCultura==="algodao"){
      this.diasColheita = "130 a 220 dias (podendo ter variação)";
    }else if (tipoCultura === "soja"){
      this.diasColheita = "60 a 120 dias (podendo ter variação)";
    }
   }
   estacoes(dataPlantio:any){
    const data = new Date(dataPlantio);
    const mes = data.getMonth();
    if (mes == 1 || 2 || 3){
      this.estacaoPlantio = "verao";
    }else if (mes == 4 || 5 || 6){
      this.estacaoPlantio = "outono";
    }else if (mes == 7|| 8 || 9){
      this.estacaoPlantio = "inverno"
    }else {
      this.estacaoPlantio = "primavera"
    }
   } 
   estacaoBM(tipoCultura:any, estacaoPlantio:any){
    if(tipoCultura === "algodao"){
      if(estacaoPlantio = "verao" || "outono"){
        this.estacaoqldd = "A estação de plantio está adequada, pois é boa para sua cultura"
      }else {
        this.estacaoqldd ="Recomendamos que espere uma mudança de estação para a plantação (verão e outono)"
      }
    }else if(tipoCultura === "soja"){
      if(estacaoPlantio = "inverno" || "primavera"){
        this.estacaoqldd = "A estação de plantio está adequada, pois é boa para sua cultura"
      }else {
        this.estacaoqldd ="Recomendamos que espere uma mudança de estação para a plantação (inverno e primavera)"
    }}
   }

   estacaoColheita(tipoCultura:any, estacaoPlantio:any, dataPlantio:any){
    const data = new Date(dataPlantio);
    const epoca = data.getMonth();
    if(tipoCultura === "algodao"){
      this.dataPlantio = data.getMonth() + 7;
      this.epocaColheita = "A colheita de sua cultura será no máximo em 7 meses."
    } else{
      this.dataPlantio = data.getMonth() + 7;
      this.epocaColheita = "A colheita de sua cultura será no máximo em 4 meses."
    }
   }

   soloIdeal(tipoSolo: any, tipoCultura: any) {
    if (tipoCultura === "algodao") {
      if (tipoSolo === "argiloso" || tipoSolo === "arenoso" || tipoSolo === "calcario") {
        this.soloRec = "O solo ideal para o algodão é o solo Humoso, então recomendamos a alteração para um melhor aproveitamento da cultura.";
      } else {
        this.soloRec = "Seu solo é o mais recomendado para sua cultura."
      }
    } else if (tipoCultura === "soja") {
      if (tipoSolo === "humoso" || tipoSolo === "arenoso" || tipoSolo === "calcario") {
        this.soloRec = "O solo ideal para a soja é o solo Arenoso, então recomendamos a alteração para um melhor aproveitamento da cultura."; 
      } else  {
        this.soloRec = "Seu solo é o mais recomendado para sua cultura."
      }
    }
  }

   tratarSolo(tipoCultura:any){
    if(tipoCultura === "algodao"){
      this.tratamentoSolo = "Para uma maior produção e aproveitamento do solo, considerando a sua cultura, você deve o preparar de maneira que será necessário o uso de produtos como esterco, compostagem, terra vegetal e substrato orgânico, assim deixando o solo cheio de nutrientes."
    }else if(tipoCultura === "soja"){
      this.tratamentoSolo = "Para a plantação de soja, é recomendado a utilização de um solo arenoso, e para usar este tipo de solo, existe a necessidade de adicionar calcário para a regulação do pH e auxilia no controle de outros fatores presentes no solo, e a adubação constante e equilibrada, sendo necessário muito cuidado."
    }
   }

   pragasCulturas(tipoCultura:any){
    if(tipoCultura === "algodao"){
      this.pragas = "Bicudo-do-algodoeiro, Ácaro-rajado, Lagarta-rosada";
    } else if(tipoCultura === "soja"){
      this.pragas = "Percevejo-marrom, Lagarta-das-folhas, Lagarta-do-cartucho";
    }
   }
   pragasCuidado(tipoCultura:any){
    if(tipoCultura ==="algodao") {
      this.cuidados = "Para combater as pragas do algodão, como o bicudo-do-algodoeiro, o ácaro-rajado e a lagarta-rosada, é necessário adotar uma abordagem integrada. Realize monitoramentos regulares e, se necessário, utilize inseticidas químicos, como Imidacloprid, Thiamethoxam e Fipronil para o bicudo-do-algodoeiro, Abamectina, Clofentezine e Fenpropathrin para o ácaro-rajado, e Lambda-cialotrina, Deltametrina e Thiamethoxam para a lagarta-rosada. Incentive o uso de métodos biológicos, como Beauveria bassiana, Bacillus thuringiensis e Trichogramma pretiosum, quando possível. Escolha os inseticidas dependendo com a praga, cultura e condições ambientais, seguindo rigorosamente as recomendações das etiquetas dos produtos químicos para garantir a segurança do operador e do meio ambiente. Essas práticas promovem um controle de pragas responsável e sustentável na lavoura de algodão."
    } else if(tipoCultura === "soja"){
      this.cuidados = "Para combater as pragas na cultura da soja, como o percevejo-marrom, a lagarta-das-folhas e a lagarta-do-cartucho, é crucial adotar uma abordagem integrada. Realize monitoramentos regulares e, quando necessário, utilize inseticidas químicos como Clorpirifós, Imidacloprid, Bifentrina para o percevejo-marrom, Lambda-cialotrina, Deltametrina, Thiamethoxam para a lagarta-das-folhas e lagarta-do-cartucho. Incentive o uso de métodos biológicos, como a liberação de inimigos naturais e Bacillus thuringiensis, sempre seguindo as recomendações das etiquetas dos produtos químicos para garantir a segurança e a preservação ambiental. Essas práticas promovem um controle de pragas responsável e sustentável na lavoura de soja."
    }
   }

   colheitaProveito(tipoCultura:any){
    if(tipoCultura === "algodao"){
      this.colheita = "A colheita do algodão requer cuidados específicos para garantir a qualidade das fibras. Colha quando as cápsulas estiverem maduras, evite umidade excessiva, ajuste máquinas para evitar impurezas, e mantenha a manutenção em dia. Amostragens frequentes e monitoramento são essenciais, e o armazenamento temporário deve ser limpo e seco. Proteção contra pragas é importante, e o manuseio cuidadoso durante o transporte é crucial. Seguir essas diretrizes assegura uma colheita eficaz e fibras de alta qualidade."
    } else if (tipoCultura === "soja"){
      this.colheita = "A colheita da soja é uma etapa crítica na produção agrícola. Para obter grãos de alta qualidade, é essencial seguir algumas recomendações importantes. Colha as vagens quando estiverem maduras, evite umidade excessiva e ajuste corretamente as máquinas colheitadeiras. Mantenha as máquinas em bom estado, faça amostragens regulares e monitore o teor de umidade. Armazene temporariamente os grãos em locais secos e proteja-os contra pragas. Além disso, evite danos mecânicos durante o transporte e manuseio. Ao seguir essas diretrizes, você garante uma colheita eficiente e preserva a qualidade dos grãos de soja."
    }
   }

   armazenamento(tipoCultura:any){
    if(tipoCultura==="algodao"){
      this.armazenar = "Para armazenar algodão com eficácia e preservar sua qualidade, é essencial um local limpo, seco e bem ventilado, com controle de temperatura (10-15°C) e umidade (50-70%). A embalagem resistente e vedada protege contra umidade e contaminação. O uso de inseticidas e rodenticidas é necessário para evitar pragas, com monitoramento constante. Ventilação adequada, gestão de estoque seguindo o FIFO e segurança das instalações são fundamentais para manter a qualidade e evitar perdas durante o armazenamento."
   } else if(tipoCultura === "soja"){
    this.armazenar = "Para armazenar soja de forma adequada e preservar sua qualidade, siga as seguintes recomendações. O local deve ser limpo, seco e bem ventilado, com controle de temperatura (10-20°C) e umidade (50-70%). A embalagem, seja a granel ou ensacada, deve ser resistente e vedada contra umidade e pragas. Proteção contra insetos e roedores é crucial, evitando danos mecânicos. Monitoramento regular das condições, ventilação adequada e gestão de estoque são práticas importantes. A segurança das instalações deve ser mantida para evitar roubos e garantir a integridade do estoque. Essas diretrizes são essenciais para manter a qualidade da soja e evitar perdas no armazenamento."
   }
}}

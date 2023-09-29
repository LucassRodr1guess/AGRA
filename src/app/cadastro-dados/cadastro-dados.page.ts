import { Component, OnInit } from '@angular/core';
import {NavigationExtras ,Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-cadastro-dados',
  templateUrl: './cadastro-dados.page.html',
  styleUrls: ['./cadastro-dados.page.scss'],
})
export class CadastroDadosPage implements OnInit {

  tipoSolo="";
  tipoCultura="";
  tipoPesticida="";
  dataPlantio:any;
  constructor(private route: ActivatedRoute, private router: Router) { }



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
     
    });
  }

  salvarDados() {
    const tipoSoloRadioButtons = document.getElementsByName("tipoSolo");
    for (let i = 0; i < tipoSoloRadioButtons.length; i++) {
        const radioButtonSolo = tipoSoloRadioButtons[i] as HTMLInputElement;
        if (radioButtonSolo.checked) {
            this.tipoSolo = radioButtonSolo.value;
            break;
        }
    }

 
    const tipoCulturaRadioButtons = document.getElementsByName("tipoCultura");
    for (let i = 0; i < tipoCulturaRadioButtons.length; i++) {
        const radioButtonCultura = tipoCulturaRadioButtons[i] as HTMLInputElement;
        if (radioButtonCultura.checked) {
            this.tipoCultura = radioButtonCultura.value;
            break;
        }
    }


    const tipoPesticidaRadioButtons = document.getElementsByName("tipoPesticida");
    for (let i = 0; i < tipoPesticidaRadioButtons.length; i++) {
        const radioButtonPesticida = tipoPesticidaRadioButtons[i] as HTMLInputElement;
        if (radioButtonPesticida.checked) {
            this.tipoPesticida = radioButtonPesticida.value;
            break;
        }
    }

   console.log(this.dataPlantio);
    console.log("Tipo de Solo Selecionado: " + this.tipoSolo);
    console.log("Tipo de Cultura Selecionado: " + this.tipoCultura);
    console.log("Tipo de Pesticida Selecionado: " + this.tipoPesticida);

    localStorage.setItem("tipoSolo", this.tipoSolo);
    localStorage.setItem("tipoCultura", this.tipoCultura);
    localStorage.setItem("tipoPesticida", this.tipoPesticida);
    localStorage.setItem("dataPlantio", this.dataPlantio);
}
  }
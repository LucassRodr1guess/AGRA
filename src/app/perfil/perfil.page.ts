import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  goToLogin() {
    this.navCtrl.navigateForward('/loginPage');}

  ngOnInit() {
  }

}

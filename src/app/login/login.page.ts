import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;
  
  constructor(private navCtrl: NavController) {}
  
  login() {
    // lógica para autenticar o usuário
    this.navCtrl.navigateRoot('/tabs/perfil');
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');}
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

//import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user:any;

  constructor(public route: Router,private navCtrl: NavController, public authService:AuthenticationService) {
    this.user = authService.getProfile()
   }
  goToLogin() {
    this.navCtrl.navigateForward('/loginPage');}

    async logout(){
      this.authService.signOut().then(() =>{
        this.route.navigate(['/loginPage'])
      })
    }

  ngOnInit() {
  }

}

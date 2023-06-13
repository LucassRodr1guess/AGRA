import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'loginPage',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro-dados',
    loadChildren: () => import('./cadastro-dados/cadastro-dados.module').then( m => m.CadastroDadosPageModule)
  },
  {
    path: 'sugestao',
    loadChildren: () => import('./sugestao/sugestao.module').then( m => m.SugestaoPageModule)
  },
  {
    path: 'reducao',
    loadChildren: () => import('./reducao/reducao.module').then( m => m.ReducaoPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

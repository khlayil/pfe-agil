import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherPromotionComponent} from './afficher-promotion/afficher-promotion.component';
import {AjouterPromotionComponent} from './ajouter-promotion/ajouter-promotion.component';

const routes: Routes = [

  {
    path: 'afficher',
    component: AfficherPromotionComponent,
    data: {
      title: 'AfficherPromotion'
    }
  },
  {
    path: 'ajouter',
    component: AjouterPromotionComponent,
    data: {
      title: 'AjouterPromotion'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }

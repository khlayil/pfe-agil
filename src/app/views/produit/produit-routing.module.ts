import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartJSComponent} from '../chartjs/chartjs.component';
import {AfficherProduitComponent} from './afficher-produit/afficher-produit.component';
import {AjouterProduitComponent} from './ajouter-produit/ajouter-produit.component';
import {ConsulterProduitComponent} from './consulter-produit/consulter-produit.component';
import {ModifierProduitComponent} from './modifier-produit/modifier-produit.component';

const routes: Routes = [

  {
    path: 'afficher',
    component: AfficherProduitComponent,
    data: {
      title: 'AfficherProduits'
    }
  },
  {
    path: 'ajouter',
    component: AjouterProduitComponent,
    data: {
      title: 'AjouterProduit'
    }
  },
  {
    path: 'detail/:id',
    component: ConsulterProduitComponent,
    data: {
      title: 'DetailrProduit'
    }
  }
  ,
  {
    path: 'modifier/:id',
    component: ModifierProduitComponent,
    data: {
      title: 'ModifierProduit'
    }
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }

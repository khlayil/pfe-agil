import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ConsulterProduitComponent } from './consulter-produit/consulter-produit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';

@NgModule({
  declarations: [AfficherProduitComponent, AjouterProduitComponent, ConsulterProduitComponent, ModifierProduitComponent],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProduitModule { }

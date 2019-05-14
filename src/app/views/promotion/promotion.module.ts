import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { AjouterPromotionComponent } from './ajouter-promotion/ajouter-promotion.component';
import { AfficherPromotionComponent } from './afficher-promotion/afficher-promotion.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AjouterPromotionComponent, AfficherPromotionComponent],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    ReactiveFormsModule
  ]
})
export class PromotionModule { }

import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../../services/promotion.service';
import {Promotion} from '../../../models/promotion';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-afficher-promotion',
  templateUrl: './afficher-promotion.component.html',
  styleUrls: ['./afficher-promotion.component.scss'],
  providers: [PromotionService]

})
export class AfficherPromotionComponent implements OnInit {
  promotions: Promotion[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private promotionService: PromotionService) {
    this.getAllPromotions();

  }
  getAllPromotions() {
    this.promotions = [];
    this.promotionService.getAllPromotions().subscribe(data => this.promotions = data);

  }
  delete(id) {

    this.promotionService.deletePromotion(id).subscribe(data => console.log(data));
    window.location.reload();

  }
  ngOnInit(): void {
  }
  seeProductDetails(id){
    this.router.navigate(['produit', 'detail', id]);

  }

}

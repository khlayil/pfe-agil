import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../../services/promotion.service';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {FormControl, FormGroup} from '@angular/forms';
import {Promotion} from '../../../models/promotion';

@Component({
  selector: 'app-ajouter-promotion',
  templateUrl: './ajouter-promotion.component.html',
  styleUrls: ['./ajouter-promotion.component.scss'],
  providers:[PromotionService,ProductService]
})
export class AjouterPromotionComponent implements OnInit {
  products: Product[] = [];
  promotion: Promotion;
  product:Product;
  addPromoForm = new FormGroup({

    idProduit: new FormControl(''),

    nom: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private promotionService: PromotionService,
    private productService: ProductService
  ) {

    this.getAllProductsNoPromo();
  }
  getAllProductsNoPromo() {
    this.products = [];
    this.productService.getAllProductsNoPromo().subscribe(data => this.products = data);

  };

  onSubmit() {
    if (this.addPromoForm.hasError) {
      alert('plz fill in the blanks');
      return;
    }
    this.promotion = new Promotion();
    this.product = new Product();
    let idp=this.addPromoForm.get('idProduit').value;
    this.product =  this.products.find(function(p) {
      return p.id == idp;
    });


    console.log('---' + this.addPromoForm.get('idProduit').value + ' ****** ' + this.product.id);

    //   this.message = Object.assign({}, this.composeForm.value);
   // this.p = new Project(+this.composeForm.get('idProject').value, 'somethin');
    this.promotion.nom = this.addPromoForm.get('nom').value;
    this.promotion.description = this.addPromoForm.get('description').value;
    this.promotion.product=this.product;
    // console.log('++++' + this.addPromoForm.get('idProduit').value + ' ****** ' + this.promotion.description);
    // console.log('++++' + this.addPromoForm.get('idProduit').value + ' ****** ' + this.promotion.product.nom);
    this.promotionService.addPromotion(this.promotion).subscribe(data => console.log(data + '-----'));
    window.open('http://localhost:4200/#/promotion/afficher', '_self');
  }
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  ngOnInit() {
  }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
}

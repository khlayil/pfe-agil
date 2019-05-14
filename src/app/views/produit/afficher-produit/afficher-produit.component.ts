import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.scss'],
  providers: [ProductService]

})
export class AfficherProduitComponent implements OnInit {
  products: Product[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
    this.products = [];
this.getAllProducts();
  }
  getAllProducts() {
    this.products = [];
    this.productService.getAllProducts().subscribe(data => this.products = data);

  };
  seeDetails(id){
    this.router.navigate(['produit', 'detail', id]);

  }
  ngOnInit() {
  }

}

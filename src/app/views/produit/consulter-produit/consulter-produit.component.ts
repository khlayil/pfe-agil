import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-consulter-produit',
  templateUrl: './consulter-produit.component.html',
  styleUrls: ['./consulter-produit.component.scss']
})
export class ConsulterProduitComponent implements OnInit {
  produit: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
     this.productService.getOneProduct(id).subscribe(data => this.produit = data);
  }
  modifier(id){
    this.router.navigate(['produit', 'modifier', id]);

  }
  delete(id){
    this.productService.deleteProduct(id).subscribe(data => console.log(data));
    this.router.navigate(['produit', 'afficher']);

  }
}

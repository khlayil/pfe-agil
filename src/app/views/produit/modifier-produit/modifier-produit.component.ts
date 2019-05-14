import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {FileToUpload} from '../../../models/fileToUpload';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {UploadService} from '../../../services/upload.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.scss'],
  providers: [ProductService,UploadService]

})
export class ModifierProduitComponent implements OnInit {
  product:Product;
  picPicked:boolean;
  fileToUpload: FileToUpload;
  private addProductForm: FormGroup;




  constructor(    private productService: ProductService,
                  private uploadServce: UploadService,
                  private route: ActivatedRoute,
                  private router: Router,
  ) {
   this.getReady();
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


  onSubmit() {
    if (this.addProductForm.hasError) {
      alert('plz fill in the blanks');
      return;
    }

  if (this.picPicked == false)
  {
    alert("plz select a pic");
    this.getReady();
    return;
  }
    this.product.nom = this.addProductForm.get('nom').value;
    this.product.description = this.addProductForm.get('description').value;
    this.product.emballage = this.addProductForm.get('emballage').value;
    this.product.quantite = this.addProductForm.get('quantite').value;
    this.product.imgUrl=this.fileToUpload.fileName;
    console.log('---' + this.addProductForm.get('imgUrl').value + ' ****** ');
    this.uploadServce.addImage(this.fileToUpload).subscribe(data => {
      this.fileToUpload.fileName=data.fileName;
      this.productService.editProduct(this.product).subscribe(data => console.log(data + '-----'+this.product.nom));


    });


    // console.log('++++' + this.addPromoForm.get('idProduit').value + ' ****** ' + this.promotion.description);
    // console.log('++++' + this.addPromoForm.get('idProduit').value + ' ****** ' + this.promotion.product.nom);
    //window.open('http://localhost:4200/#/promotion/afficher', '_self');
  }
  onFileChange(event) {
    let reader = new FileReader();

    // Any file(s) selected from the input?
    if (event.target.files &&
      event.target.files.length > 0) {

      let file = event.target.files[0];
      console.log(file);
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.picPicked=true;
        // console.log(window.atob(reader.result.toString().substring(22)));
        console.log(reader.result.toString().indexOf(','));
        this.fileToUpload.base64=reader.result.toString().substring(reader.result.toString().indexOf(',')+1);

        // Store base64 encoded representation of file
        file.fileAsBase64 = reader.result.toString();
      }

    }
  }


  private getReady() {
    let id = this.route.snapshot.paramMap.get('id');
    this.product = new Product();

    this.productService.getOneProduct(id).subscribe(data => this.product = data);

    this.product.id=+id;
    this.fileToUpload=new FileToUpload();
    this.fileToUpload.type="img";
    this.picPicked=false;
    this.addProductForm = new FormGroup({

      nom: new FormControl(''),

      description: new FormControl(''),
      emballage: new FormControl(''),
      quantite: new FormControl(''),
      imgUrl: new FormControl('')
    });
  }
}

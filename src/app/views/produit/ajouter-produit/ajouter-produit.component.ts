import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {Promotion} from '../../../models/promotion';
import {UploadService} from '../../../services/upload.service';
import {FileToUpload} from '../../../models/fileToUpload';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.scss'],
  providers: [ProductService,UploadService]
})
export class AjouterProduitComponent implements OnInit {
  product:Product;
  picPicked:boolean;
  fileToUpload: FileToUpload;

  addProductForm = new FormGroup({

    nom: new FormControl(''),

    description: new FormControl(''),
    emballage: new FormControl(''),
    quantite: new FormControl(''),
    imgUrl: new FormControl('')
  });


  constructor(    private productService: ProductService,
                  private uploadServce: UploadService
  ) {
    this.fileToUpload=new FileToUpload();
    this.fileToUpload.type="img";
    this.picPicked=false;
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
    this.product = new Product();



    console.log('---' + this.addProductForm.get('imgUrl').value + ' ****** ');

    this.product.nom = this.addProductForm.get('nom').value;
    this.product.description = this.addProductForm.get('description').value;
    this.product.emballage = this.addProductForm.get('emballage').value;
    this.product.quantite = this.addProductForm.get('quantite').value;
    this.product.imgUrl=this.fileToUpload.fileName;
    // console.log('++++' + this.addPromoForm.get('idProduit').value + ' ****** ' + this.promotion.description);
    // console.log('++++' + this.addPromoForm.get('idProduit').value + ' ****** ' + this.promotion.product.nom);
    this.productService.addProduct(this.product).subscribe(data => console.log(data + '-----'));
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
          console.log(reader.result.toString());
          this.fileToUpload.base64=reader.result.toString().substring(22);
          this.uploadServce.addImage(this.fileToUpload).subscribe(data => this.fileToUpload.fileName=data.fileName);

          // Store base64 encoded representation of file
          file.fileAsBase64 = reader.result.toString();
 }

    }
  }




}

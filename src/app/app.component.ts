import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 productName = 'A Book';
 isDisabled = true;
 products = ['A jaffa', 'A tree'];


constructor(){
  setTimeout(() => {
    this.isDisabled = false;
  }, 3000);
}
onAddProducts(){
  this.products.push(this.productName);
}

}

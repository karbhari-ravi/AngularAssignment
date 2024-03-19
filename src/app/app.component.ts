import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  productList: Array<Product> = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getProduct().subscribe(res => {
         console.log("x", res)
         this.productList = res
    })
}
}

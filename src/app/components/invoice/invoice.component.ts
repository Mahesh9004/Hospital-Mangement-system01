import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice_number:number;
  sub_total:number;
  tax_total:number;
  grand_total:number;
  constructor() { }

  ngOnInit(): void {
    this.invoice_number =2;
  }

  invoiceSubTotal(){
    return this.sub_total =10;
  }
  calculateTax(){
    return this.tax_total =5;
  }
  calculateGrandTotal(){
    return this.grand_total =this.tax_total + this.sub_total;
  }
  
  printInfo(){
    console.log("In printinfo");
    window.print();
  }

}

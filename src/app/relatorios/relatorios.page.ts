import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.page.html',
  styleUrls: ['./relatorios.page.scss'],
})
export class RelatoriosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  public menus = [
    { titulo: 'Funcionários', icone: 'people-outline'},
    { titulo: 'Despesas', icone: 'cash-outline'},
    { titulo: 'Vendas', icone: 'cart-outline'},
    { titulo: 'Promoções', icone: 'ticket-outline'}
  ];

}

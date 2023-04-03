import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilizacao',
  templateUrl: './estilizacao.page.html',
  styleUrls: ['./estilizacao.page.scss'],
})
export class EstilizacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public itens = ['linha1', 'linha2', 'linha3', 'linha4', 'linha5', 'linha6',];

}

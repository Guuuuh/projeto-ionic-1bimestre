import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.filme = params['filme'];
    });
   }

  ngOnInit() {
  }

  public pathImgs = '../../assets/Imagens/'

  public filme = {
    cod: 0, 
    titulo: '',           
    sinopse: '',
    ano: 0,
    status: false, 
    visible: false, 
    adicionado: false,
    imagem: []
  }

}

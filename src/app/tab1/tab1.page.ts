import { Component } from '@angular/core';
import { GestionNoticiasService } from '../servicios/gestion-noticias.service';
import { Article } from '../interfaces/interfaces';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public isChecked: boolean = false;

  constructor(public gestionNoticias: GestionNoticiasService) {}
  updateChecked(noticia: Article){
    
    if (this.isChecked = false){
      this.gestionNoticias.borrarNoticia(noticia);
      } else {
        this.gestionNoticias.addNoticia(noticia);
        }

  }
}

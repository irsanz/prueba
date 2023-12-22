import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, INoticias } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasService {

  private noticias: Article[] = [];
  private noticiasLeer: Article[] = [];

  constructor(private leerFich: HttpClient) { 
    this.getNoticiasFich();
  }

  getNoticiasFich(){
  let datosFich: Observable <INoticias>;

  datosFich = this.leerFich.get<INoticias>('/assets/datos/noticias.json');

  datosFich.subscribe (datos => {
    console.log(datos);
    this.noticias.push(... datos.articles);
  });
  
  }

  getNoticias() {
    return this.noticias;
}

addNoticia(noticia: Article){
  // copiamos la noticia
  let notiticiaSt = JSON.stringify(noticia);
  noticia = JSON.parse(notiticiaSt);
  //comprobamos si la noticia está
  this.noticiasLeer.push(noticia);

}

borrarNoticia(noticia: Article) {
  //Buscar si está la noticia comparando el titulo
  let title = "";
  this.noticias.find(dat => {
    return JSON.stringify(dat) == JSON.stringify(noticia);
  })
  //Sacar el indice
  let indice:number = 0;
  indice = this.noticias.indexOf(noticia);
  //si indice != -1 borrar
  if (indice !=-1){
    this.noticias.splice(indice,1);
  }
}
getNoticiasLeidas() {
  return this.noticiasLeer;
}
    
}

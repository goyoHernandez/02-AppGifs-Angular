import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  constructor(private gifsService: GifsService) { }

  // El signo ! asegura que la variable siempre tendra un valor nunca sera nulo o undefined
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  SearchGif = (text: string) => {
    this.gifsService.searchGifs(text);
    this.txtSearch.nativeElement.value = '';

  }
}

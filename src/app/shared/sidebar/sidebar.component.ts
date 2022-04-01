import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(private gifService: GifsService) { }

  get record() {
    return this.gifService.record;
  }

  searchGif = (text: string) => {
    this.gifService.searchGifs(text);
  }
}
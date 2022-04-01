import { Component, OnInit } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {
  constructor(private gifsService: GifsService) { }

  get gifs() {
    return this.gifsService.gifs;
  }
}

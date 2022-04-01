import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { GifsService } from './service/gifs.service';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultsComponent
  ],
  exports: [GifsPageComponent],
  imports: [
    CommonModule
  ],
  providers: [GifsService]
})
export class GifsModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor(private httpClient: HttpClient) {
    this._record = JSON.parse(localStorage.getItem('record')!) || [];
    this.gifs = JSON.parse(localStorage.getItem('results')!) || [];
  }

  private apiKey: string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';
  private urlGifs: string = `https://api.giphy.com/v1/gifs`;
  private _record: string[] = [];
  public gifs: Gif[] = [];

  get record() {
    return [...this._record]
  }

  searchGifs = (query: string = '') => {
    query = query.trim().toLowerCase();

    if (!this._record.includes(query)) {
      this._record.unshift(query);
      this._record = this._record.splice(0, 10);

      localStorage.setItem('record', JSON.stringify(this._record));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query)

    this.httpClient.get<GifsResponse>(`${this.urlGifs}/search`, { params })
      .subscribe((res) => {
        this.gifs = res.data;
        localStorage.setItem('results', JSON.stringify(this.gifs));
      });
  }
}
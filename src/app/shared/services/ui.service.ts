import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Post } from './post.interface';
import { Image } from './image.interface';

const url  = environment.mkt.url;
const tok  = `access_token=${ environment.mkt.token }`;
const news = environment.news;
const lp: string = 'dinheiro-volta';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private http: HttpClient
  ) { }

  private Query<T>(query: string) {
    query = url + query;
    return this.http.get<T>(query).pipe(tap(data => data));
  }

  getSetting(slug: string = lp): Observable<Setting[]> {
    return this.Query<Setting[]>(
      `/Cooperadas/?filter[where][slug]=${ slug }&filter[order]=ordem%20ASC&${ tok }`
    );
  }


  getFind(table: string, collection?: string): Observable<any[]> {
    return this.Query<any[]>(`/${table}?${collection}&${tok}`);
  }

  getLojaFindSlug(slugs: string): Observable<any[]> {
    return this.Query<any[]>(
      `/Temps/lojaXslug?slug=${ slugs }&${ tok }`
    );
  }

  getLojaFindRegiao(id: number): Observable<any[]> {
    return this.Query<any[]>(
      `/Temps/lojaXregiao?regiao=${ id }&${ tok }`
    );
  }

  getProdutos(campanha: number, campanha2: number): Observable<any[]> {
    const filter  = `filter[where][cod_campanha][inq]=${campanha}`;
    const filter2 = `filter[where][cod_campanha][inq]=${campanha2}`;
    return this.Query<any[]>(
      `/Temps?${ filter }&${ filter2 }&${ tok }`
    );
  }


  /**
   * Data
   * @param file json
   */
  getData(file: string): Observable<any []> {
    return this.http.get<any[]>(`./assets/data/${ file }.json`);
  }

  readDB(element: any): Observable<any []> {
    return this.http.get<any[]>(`./assets/data/database.json`)
    .pipe(map(res => res[0][element]));
  }

  read(): Observable<any []> {
    return this.http.get<any[]>(`./assets/data/database.json`).pipe(map(res => res[0]));
  }


  Collection(collection: string): Observable<any[]> {
    return this.Query<any[]>(`/${collection}`);
  }


  /** Storage */
  setStorage(name: string, data: any) {
    return localStorage.setItem(name, JSON.stringify(data));
  }

  getStorage(name: string) {
    return JSON.parse(localStorage.getItem(name));
  }

  delStorage(name: string) {
    return localStorage.removeItem(name);
  }


  /**
   * Read Post Blog
   * @param tag Tag pra filtar os POST
   * @param limit Limit do POST
   */
  getBlog(tag?: number, limit: number = 3): Observable<Post[]> {
    if (tag === 0) {
      return this.http
      .get<Post[]>(`${ news }/posts`, { params: { per_page: `${ limit }` } })
      .pipe(tap(data => data));
    } else {
      return this.http
      .get<Post[]>(`${ news }/posts`, { params: { per_page: `${ limit }`, tags: `${ tag }` } })
      .pipe(tap(data => data));
    }
  }


  getPage(number: number): Observable<Post[]> {
    return this.http.get<Post[]>(`https://teste.condor.com.br/news/wp-json/wp/v2/pages/${number}`)
    .pipe(retry(3), map((res) => res))
  }
  /**
   * Get Image
   * @param id Id da IMAGE featured_media
   */
  getImage(id: number): Observable<Image[]> {
    return this.http
    .get<Image[]>(`${ news }/media/${ id }`)
    .pipe(tap(data => data));
  }
}


export interface Setting {
  id: number;
  name: string;
  slug: string;
  block: string;
  action: boolean;
  ordem: number;
  c_at: string;
}

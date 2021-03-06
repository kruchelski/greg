import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<any>(`${environment.apiUrl}/tags`);
  }


  /**
   * Adiciona tags para o usuario
   * @param tagArray
   */
  addTags(tagArray: string[]) {
    return this.http.put<string[]>(`${environment.apiUrl}/tags`, tagArray);
  }

}

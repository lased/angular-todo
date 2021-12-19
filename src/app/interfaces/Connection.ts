import { Observable } from 'rxjs';

export interface Connection {
  getAll(): Observable<any>;
  create(entry: any): Observable<any>;
  update(entry: any): Observable<any>;
  remove(entry: any): Observable<any>;
}

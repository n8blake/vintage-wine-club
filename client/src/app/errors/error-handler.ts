import { Observable, of } from 'rxjs';
export function handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    if (error.status !== 401) {
      console.log(error);
    }
    return of(result as T);
  };
}

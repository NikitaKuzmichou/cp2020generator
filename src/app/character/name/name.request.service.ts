import {HttpClient} from '@angular/common/http';
import {NamesGenerationOptions} from '../options/names.generation.options';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

export class NameRequestService {
  constructor(private httpClient: HttpClient) {
  }

  public getName(nameType: NamesGenerationOptions): Observable<string> {
    const nameTypeValue = nameType === undefined
      ? NamesGenerationOptions.MALE
      : NamesGenerationOptions[nameType];

    const finalUrl = 'https://donjon.bin.sh/name/rpc-name.fcgi?type=' + nameTypeValue + '&n=1';
    return this.httpClient.get<string>(finalUrl)
      .pipe(
        tap(_ => console.log('loaded name')),
        catchError(this.handleError<string>('getName', ''))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result);
    };
  }
}

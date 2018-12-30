import { Either, right } from 'fp-ts/lib/Either';
import { Observable, OperatorFunction } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export function recoverWith<T, L>(recover: (error: any) =>  Observable<Either<L, T>>): OperatorFunction<T, Either<L, T>> {
  return source => source.pipe(
    map(v => right<L, T>(v)),
    catchError(error => recover(error)),
  );
}

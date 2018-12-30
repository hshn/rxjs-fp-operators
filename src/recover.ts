import { Either } from 'fp-ts/lib/Either';
import { of, OperatorFunction } from 'rxjs';

import { recoverWith } from './recover-with';

export function recover<T, L>(selector: (error: any) => Either<L, T>): OperatorFunction<T, Either<L, T>> {
  return recoverWith(error => of(selector(error)));
}

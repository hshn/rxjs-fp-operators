import { right } from 'fp-ts/lib/Either';
import { of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { recover } from './recover';

describe('recover()', () => {
  it('should not be recovered when its source is not failure', () => {
    let result, error;
    of(1).pipe(recover(e => right(999))).subscribe(_ => result = _, _ => error = _);

    expect(result).toEqual(right(1));
    expect(error).toBeUndefined();
  });

  it('should not be recovered with failed recovery', () => {
    let result, error;
    throwError(new Error('error'))
      .pipe(
        recover(e => {
          throw new Error('recovery');
        }),
      ).subscribe(_ => result = _, _ => error = _);

    expect(result).toBeUndefined();
    expect(error.message).toEqual('recovery');
  });

  it('should be recovered with recovery', () => {
    let result, error;

    of(1).pipe(
      map(v => {
        throw new Error('error')
      }),
      recover(e => right(999)),
    ).subscribe(_ => result = _, _ => error = _);

    expect(result).toEqual(right(999));
    expect(error).toBeUndefined();
  });
});

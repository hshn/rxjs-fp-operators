# rxjs-fp-operators

[![Build Status](https://travis-ci.org/hshn/rxjs-fp-operators.svg?branch=master)](https://travis-ci.org/hshn/rxjs-fp-operators)
[![NPM version](https://img.shields.io/npm/v/rxjs-fp-operators.svg)](https://www.npmjs.com/package/rxjs-fp-operators)


# Installation

```
$ npm install --save rxjs-fp-operators
```

# Operators

## recoverWith

```typescript
recoverWith<T, L>(recover: (error: any) => Observable<Either<L, T>>): OperatorFunction<T, Either<L, T>>
```

## recover

```typescript
recover<T, L>(selector: (error: any) => Either<L, T>): OperatorFunction<T, Either<L, T>>
```

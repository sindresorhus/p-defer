# p-defer

> Create a deferred promise

[Don't use this unless you know what you're doing.](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern) Prefer the `Promise` constructor.

> [!TIP]
> If you're using TypeScript 5.4+ or a JavaScript environment that supports it, consider using the native [`Promise.withResolvers()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers) instead of this package.

## Install

```sh
npm install p-defer
```

## Usage

```js
import pDefer from 'p-defer';

function delay(milliseconds) {
	const deferred = pDefer();
	setTimeout(deferred.resolve, milliseconds, '🦄');
	return deferred.promise;
}

console.log(await delay(100));
//=> '🦄'
```

*The above is just an example. Use [`delay`](https://github.com/sindresorhus/delay) if you need to delay a promise.*

## API

### pDefer()

Returns an `object` with a `promise` property and functions to `resolve()` and `reject()`.

## Related

- [p-lazy](https://github.com/sindresorhus/p-lazy) - Create a lazy promise that defers execution until `.then()` or `.catch()` is called
- [More…](https://github.com/sindresorhus/promise-fun)

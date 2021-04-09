import {expectType} from 'tsd';
import pDefer, {DeferredPromise} from './index.js';

expectType<DeferredPromise<unknown>>(pDefer());
expectType<DeferredPromise<string>>(pDefer<string>());

pDefer<void>().resolve();
pDefer<string>().resolve('foo');
pDefer<void>().reject();
pDefer<string>().reject(new Error('foo'));
expectType<Promise<string>>(pDefer<string>().promise);

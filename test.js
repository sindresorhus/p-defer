import test from 'ava';
import pDefer from './index.js';

const fixture = Symbol('fixture');

function delay(milliseconds) {
	const deferred = pDefer();
	setTimeout(deferred.resolve, milliseconds, fixture);
	return deferred.promise;
}

test('main', async t => {
	t.is(await delay(50), fixture);
});

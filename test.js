import test from 'ava';
import pDefer from '.';

const fixture = Symbol('fixture');

function delay(ms) {
	const deferred = pDefer();
	setTimeout(deferred.resolve, ms, fixture);
	return deferred.promise;
}

test('main', async t => {
	t.is(await delay(50), fixture);
});

import test from 'ava';
import m from './';

const fixture = Symbol('fixture');

function delay(ms) {
	const deferred = m();
	setTimeout(deferred.resolve, ms, fixture);
	return deferred.promise;
}

test(async t => {
	t.is(await delay(50), fixture);
});

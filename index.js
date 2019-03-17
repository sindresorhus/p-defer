'use strict';

const pDefer = () => {
	const ret = {};

	ret.promise = new Promise((resolve, reject) => {
		ret.resolve = resolve;
		ret.reject = reject;
	});

	return ret;
};

module.exports = pDefer;
module.exports.default = pDefer;

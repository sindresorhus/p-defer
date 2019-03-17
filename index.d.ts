interface DeferredPromise<T> {
	/**
	Resolves the promise with a value or the result of another promise.

	@param value - The value to resolve the promise with.
	*/
	resolve(value: T | PromiseLike<T>): void;

	/**
	Reject the promise with a provided reason or error.

	@param reason - The reason or error to reject the promise with.
	*/
	reject(reason: any): void;

	/**
	The deferred promise.
	*/
	promise: Promise<T>;
}

/**
Create a deferred promise.
*/
export default function pDefer<ValueType = unknown>(): DeferredPromise<
	ValueType
>;

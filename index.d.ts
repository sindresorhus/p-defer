export interface DeferredPromise<ValueType> {
	/**
	Resolves the promise with a value or the result of another promise.

	@param value - The value to resolve the promise with.
	*/
	resolve(value?: ValueType | PromiseLike<ValueType>): void;

	/**
	Reject the promise with a provided reason or error.

	@param reason - The reason or error to reject the promise with.
	*/
	reject(reason?: unknown): void;

	/**
	The deferred promise.
	*/
	promise: Promise<ValueType>;
}

/**
Create a deferred promise.
*/
export default function pDefer<ValueType = unknown>(): DeferredPromise<ValueType>;

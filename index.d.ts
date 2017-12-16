/**
 * Returns a promise that resolves after the given time to the given value.
 * @param time - Number of milliseconds .
 * @param value - Resolve value.
 */
export = xTime

declare function xTime<T>(time: number, value: T): Promise<T>;
declare function xTime(time: number): Promise<void>;

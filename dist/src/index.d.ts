/**
 * An asynchronous timer.
 */
export class Timer {
    /**
     * @return {number}
     */
    static now(): number;
    /**
     * @param {number} durationMs
     * @return {Promise<number>}
     */
    static wait(durationMs: number): Promise<number>;
    /**
     * @return {number}
     */
    elapsed(): number;
    /**
     * @return {number}
     */
    start(): number;
    /**
     * @param {number} durationMs
     * @return {Promise<number>}
     */
    wait(durationMs: number): Promise<number>;
    #private;
}

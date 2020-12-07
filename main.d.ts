/*
 * External types
 * -------------------------------------------------------------------------------------------------
 */

/**
 * An asynchronous timer.
 */
export class Timer {
  static now(): number;
  static wait(durationMs: number): Promise<number>;
  elapsed(): number;
  start(): number;
  wait(durationMs: number): Promise<number>;
}

import { performance } from 'perf_hooks';

/**
 * An asynchronous timer.
 */
export class Timer {
  /**
   * @return {number}
   */
  static now() {
    return performance.now();
  }

  /**
   * @param {number} durationMs
   * @return {Promise<number>}
   */
  static wait(durationMs) {
    return new Promise((resolve) => {
      const startTime = Timer.now();

      setTimeout(() => {
        const elapsed = Timer.now() - startTime;
        resolve(elapsed);
      }, durationMs);
    });
  }

  #startTime = Timer.now();

  /**
   * @return {number}
   */
  elapsed() {
    return Timer.now() - this.#startTime;
  }

  /**
   * @return {number}
   */
  start() {
    const startTime = Timer.now();
    this.#startTime = startTime;
    return startTime;
  }

  /**
   * @param {number} durationMs
   * @return {Promise<number>}
   */
  wait(durationMs) {
    return Timer.wait(durationMs);
  }
}

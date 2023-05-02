class Timer<T> {
  private timerId: number | null;
  private start: number;
  private callback: () => T;
  private remaining: number;

  constructor(callback: () => T, delay: number) {
    this.callback = callback;
    this.remaining = delay;
    this.start = Date.now();
    this.timerId = setTimeout(callback, delay);
  }

  setTimer(callback: () => T, delay: number) {
    this.callback = callback;
    this.remaining = delay;
    this.start = Date.now();
    clearTimeout(this.timerId as number);
    this.timerId = setTimeout(callback, delay);
  }

  pause() {
    clearTimeout(this.timerId as number);
    this.timerId = null;
    this.remaining -= Date.now() - this.start;
  }

  resume() {
    if (this.timerId) {
      return;
    }
    this.start = Date.now();
    this.timerId = setTimeout(this.callback, this.remaining);
  }

  clear() {
    this.timerId && clearTimeout(this.timerId);
  }
}

export default Timer;

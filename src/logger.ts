export const LoggerLevel = {
  ALL: -99,
  DEBUG: -1,
  INFO: 0,
  WARN: 1,
  ERROR: 2,
  OFF: 99
} as const;

export class Logger {
  level: number;
  constructor(level: any) {
    this.level = isNaN(level) ? LoggerLevel.INFO : level;
    this.make();
  }
  make() {
    for (const key in console) {
      const l = LoggerLevel[key.toUpperCase()];
      if (!l) {
        // l=LoggerLevel.OFF;
        continue;
      }
      if (this.level <= l) {
        // if (Function.bind) {
        //   Logger.prototype[key] = (function (..._args) {
            return console.log.bind(console);
        //   })(key);
        // } else {
        //   Logger.prototype[key] = (function (...args) {
        //     return console.log(...args);
        //   })(key);
        // }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        Logger.prototype[key] = function () {};
      }
    }
  }
}

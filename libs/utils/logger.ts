/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const DEFAULT_STYLE = 'background: #222; color: #27ae60';

export default function createLogger(moduleName: string, style: string = DEFAULT_STYLE): (...args: any[]) => void {
  return (...args: any[]) => {
    if (process.env.APP_ENV !== 'production') {
      console.log.apply(console, [`%c ${moduleName} `, style, ...args]);
    }
  };
}

module.exports = createLogger;

import Log75, { LogLevel } from 'log75'
export const logger = new Log75(LogLevel.Debug)

logger.table([
    'Hello world!',
    'Very epic'
], 'done')

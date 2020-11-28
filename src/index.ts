import Log75, { LogLevel } from 'log75'
export const logger = new Log75(LogLevel.Debug, true)

logger.done(
    logger.createBox([
        'Hello world!',
        'Very epic'
    ])
)

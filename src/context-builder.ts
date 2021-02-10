import {
    BindingDefinition,
    Context,
    ContextBindings,
    Logger,
} from '@azure/functions';
import { v4 as uuid } from 'uuid';
import { Console } from 'console';

function wrapLogger(console: Console): Logger {
    const logger = (...args: any[]) => { console.log(...args); };
    logger.verbose = (...args: any[]) => { console.debug(...args); };
    logger.info = (...args: any[]) => { console.info(...args); };
    logger.warn = (...args: any[]) => { console.warn(...args); };
    logger.error = (...args: any[]) => { console.error(...args); };
    return logger;
}

export function contextBuilder(
    bindings: BindingDefinition[],
    bindingData: ContextBindings[],
    logger?: Console,
    now?: Date,
): Context {
    const context: Context = {
        invocationId: uuid(),
        executionContext: {},
        bindings: {},
        log: wrapLogger(logger || console),
        bindingData: {},
        bindingDefinitions: {},
    } as Context;

    return context;
}

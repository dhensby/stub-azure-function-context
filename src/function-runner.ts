import {
    AzureFunction,
    BindingDefinition,
    ContextBindings,
} from '@azure/functions';
import { contextBuilder } from './context-builder';
import { Console } from 'console';

export function functionRunner(
    func: AzureFunction,
    bindings: BindingDefinition[],
    bindingData: ContextBindings[],
    logger?: Console,
    now?: Date,
) {
    const context = contextBuilder(bindings, bindingData, logger, now);
}

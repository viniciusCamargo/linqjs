import { registerIterableExtension } from './registry';

function* where(iterable, predicate) {
    let i = 0;
    for(const element of iterable) if(predicate(element, i++)) yield element;
}
registerIterableExtension("where", where);

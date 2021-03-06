import { registerIterableExtension } from './registry';

function thenBy(orderedIterable, sortProjection) {
    orderedIterable.addSort(sortProjection, false);
    return orderedIterable;
}
registerIterableExtension("thenBy", thenBy);

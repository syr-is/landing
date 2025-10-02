import type { Action } from 'svelte/action';
import { bionicReader } from '$lib/bionic-reader';
import { bionicReadingIsEnabledStore } from '$lib/controllers/runtime.svelte';
import { fromStore } from 'svelte/store';

// Attachment that applies bionic-reading to an element's HTML content.
// It respects the global bionicReadingIsEnabledStore and updates reactively.
export const reader: Action<HTMLElement, void> = (node) => {
  const original = node.innerHTML;
  const apply = (on: boolean) => {
    node.innerHTML = on ? bionicReader(original) : original;
  };
  apply(fromStore(bionicReadingIsEnabledStore).current);
  const unsubscribe = bionicReadingIsEnabledStore.subscribe(apply);
  return {
    destroy() {
      unsubscribe();
      node.innerHTML = original;
    }
  };
};



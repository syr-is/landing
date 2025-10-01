// Centralized app stores live here.

// Preference stores with localStorage persistence
import { createLocalStorageStore } from '$lib/stores/local-storage';

export const bionicReadingIsEnabledStore = createLocalStorageStore<boolean>(
	'pref:bionicReadingIsEnabled',
	false
);
export const dyslexicFontIsEnabledStore = createLocalStorageStore<boolean>(
	'pref:dyslexicFontIsEnabled',
	false
);
export const sidebarIsOpenStore = createLocalStorageStore<boolean>('pref:sidebarIsOpen', false);

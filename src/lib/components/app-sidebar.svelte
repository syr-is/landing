<script lang="ts">
	// import CalendarIcon from '@lucide/svelte/icons/calendar';
	import HouseIcon from '@lucide/svelte/icons/house';
	// import InboxIcon from '@lucide/svelte/icons/inbox';
	// import SearchIcon from '@lucide/svelte/icons/search';
	// import SettingsIcon from '@lucide/svelte/icons/settings';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import ThemeSwitch from './theme-switch.svelte';
	import {
		bionicReadingIsEnabledStore,
		dyslexicFontIsEnabledStore
	} from '$lib/controllers/runtime.svelte';
	import { fromStore } from 'svelte/store';

	// Local state bindings to stores
	const bionicPref = fromStore(bionicReadingIsEnabledStore);
	const dyslexicPref = fromStore(dyslexicFontIsEnabledStore);
	const bionicOn = $derived(bionicPref.current);
	const dyslexicOn = $derived(dyslexicPref.current);
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import TextBlock from './text-block.svelte';

	// Menu items.
	const items = [
		{
			title: 'Home',
			url: '/',
			icon: HouseIcon
		},
		// {
		// 	title: 'Inbox',
		// 	url: '#',
		// 	icon: InboxIcon
		// },
		// {
		// 	title: 'Calendar',
		// 	url: '#',
		// 	icon: CalendarIcon
		// },
		// {
		// 	title: 'Search',
		// 	url: '#',
		// 	icon: SearchIcon
		// },
		// {
		// 	title: 'Settings',
		// 	url: '#',
		// 	icon: SettingsIcon
		// }
	];
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<a href="/">
			<div class="flex w-full justify-center text-2xl font-black">SYR</div>
		</a>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Directory</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer>
		<div class="flex w-full flex-row items-center justify-between gap-2">
			<ThemeSwitch />
			<Button
				variant="outline"
				size="icon"
				class="relative"
				onclick={() => bionicReadingIsEnabledStore.update((v) => !v)}
				aria-pressed={bionicOn}
				title="Toggle bionic reading"
			>
				<TextBlock text="BR" />
				<span
					class="pointer-events-none absolute inset-0 rounded-md opacity-0 ring-2 ring-primary/60 transition-opacity duration-200 [aria-pressed='true']:opacity-100"
					aria-hidden="true"
				></span>
			</Button>
			<Button
				variant="outline"
				size="icon"
				class="relative"
				onclick={() => dyslexicFontIsEnabledStore.update((v) => !v)}
				aria-pressed={dyslexicOn}
				title="Toggle OpenDyslexic font"
			>
				<TextBlock text="OD" />
				<span
					class="pointer-events-none absolute inset-0 rounded-md opacity-0 ring-2 ring-primary/60 transition-opacity duration-200 [aria-pressed='true']:opacity-100"
					aria-hidden="true"
				></span>
			</Button>
			<Sidebar.Trigger />
		</div>
	</Sidebar.Footer>
</Sidebar.Root>

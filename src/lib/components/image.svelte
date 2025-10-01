<script lang="ts">
	import { optimize } from '$lib/image';
	import type { Photo } from '$lib/types';
	import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';

	interface ImageProps extends HTMLImgAttributes {
		photo: Photo;
		captionProps?: HTMLAttributes<HTMLElement>;
		figureProps?: HTMLAttributes<HTMLElement>; // optional too
	}

	let { photo, figureProps, captionProps, ...restProps }: ImageProps = $props();
</script>

<figure
	{...figureProps}
	class={`flex h-full w-full flex-col items-center justify-center ${figureProps?.class}`}
>
	<img srcset={optimize(photo.url)} alt={photo.alt || photo.caption || ''} {...restProps} />
	<figcaption
		{...captionProps}
		class={`p-2 text-center text-muted-foreground ${captionProps?.class}`}
	>
		{photo.caption}
	</figcaption>
</figure>

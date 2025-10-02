<script>
	import Image from '$lib/components/image.svelte';
	import TextBlock from '$lib/components/text-block.svelte';
</script>

<article aria-labelledby="page-title">
	<div class="my-2 flex w-full justify-center border-b border-dashed pb-2">
		<TextBlock
			class="mb-0"
			text={`<h1 id="page-title" class="text-center text-5xl font-black">Self Yield Representations</h1>`}
		/>
	</div>

	<div class="text-align-justify flex flex-col gap-2">
		<div class="flex w-full flex-col justify-between gap-2 md:flex-row md:items-stretch">
			<div class="w-full md:max-w-1/2">
				<section id="context" aria-labelledby="context-title" class="flex flex-col gap-4">
					<TextBlock
						class="mb-0"
						text={`<h2 id="context-title" class="my-4 border-b border-dashed pb-1 text-2xl font-black text-center">The Internet We Got vs. The Internet We Need</h2>`}
					/>
					<TextBlock
						text="The internet was never designed to be social. At the start, it was just computers wired together—a neutral way to move packets around. But over time, this basic network became a network of people. That shift should have deepened connection. Instead, a few platforms—and their algorithms—came to decide what we see, who we reach, and how we talk."
					/>
					<TextBlock
						text={`<h3 class="mt-2 text-xl font-bold">From people to platforms</h3>On paper, social networks connect billions. In practice, they connect us through ranking systems. Posts don’t spread because you shared them, but because an algorithm scored them.<br/><br/>That design choice has side effects:<ul><li><strong>Division instead of discovery:</strong> Outrage and spectacle travel further than nuance.</li><li><strong>Cultural flattening:</strong> Local voices get penalized when they don’t match "default" rules.</li><li><strong>Lock-in:</strong> Identities and audiences stay trapped in the platform that created them.</li></ul>`}
					/>
					<TextBlock
						text="The result: less people-to-people conversation, more people performing for feeds."
					/>
					<TextBlock
						text={`<h3 class="mt-2 text-xl font-bold">When algorithms feel like truth</h3>Algorithms give us more of what we already want. That feels like personalization, but it narrows perspective. Over time, our slice of reality starts to feel like the whole.<br/><br/>The danger isn’t conviction—it’s certainty without contrast. Without visible difference, there’s no space for compromise. And coexistence, at any scale, depends on compromise.<br/><br/>Algorithms maximize comfort. Understanding comes only from encountering difference in a human context.`}
					/>
				</section>

				<section
					id="what-syr-proposes"
					aria-labelledby="proposal-title"
					class="mt-6 flex flex-col gap-4"
				>
					<TextBlock
						class="mb-0"
						text={`<h2 id="proposal-title" class="my-4 border-b border-dashed pb-1 text-2xl font-black text-center">What SYR proposes</h2>`}
					/>
					<TextBlock
						text={`The Self-Yield Representation (SYR) Project aims to shift control back to people.<ul><li><strong>For communities:</strong> Portable identity and norms that travel intact across contexts.</li><li><strong>For individuals:</strong> Interoperable services that make it easy to share once, be seen everywhere, and carry presence without starting over.</li></ul>Discovery becomes human again—not chaos, not free-for-all harm, but meaning defined by people and cultures, not by feeds.`}
					/>
					<TextBlock
						text={`<h3 class="mt-2 text-xl font-bold">Accountability included</h3>Human-driven networks aren’t immune to extremism. But with SYR, accountability is explicit. Communities and individuals can still take consequential actions—blocking, removing, excluding. The difference is that judgment is rooted in human context, not opaque engagement metrics.`}
					/>
					<TextBlock
						text={`<h3 class="mt-2 text-xl font-bold">Why it matters</h3>If presence is portable and self-defined, people no longer need to conform everywhere just to be visible anywhere. Platforms may remain, but the center of gravity shifts back to us.<br/><br/>That’s how we get closer to the internet we wanted: not just computers wired together, but humans—individually and together—discovering each other without algorithms deciding what counts.`}
					/>
				</section>
			</div>
			<aside
				class="flex w-full md:pt-4"
			>
				<Image
					class="h-auto max-h-[80vh] w-full rounded object-contain md:h-full md:w-auto"
					photo={{
						url: '/images/syr-tease.webp',
						caption: 'Think about it',
						alt: 'Thinking support graphic'
					}}
				/>
			</aside>
		</div>
	</div>
</article>

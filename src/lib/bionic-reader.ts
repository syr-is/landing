export const getBoldLength = (l: number): number => {
	const thresholds = [5, 8, 13, 17, 23, 27];
	for (let i = 0; i < thresholds.length; i++) {
		if (l < thresholds[i]) return i + 1;
	}
	return Math.floor(l / 6);
};

export const bionicHtmlFormatter = (bold: string, normal?: string) => {
	return (bold ? '<b>' + bold + '</b>' : '') + (normal || '');
};

export const bionicReader = (
	text: string,
	formatter?: (bold: string, normal?: string) => string
) => {
	const applyToText = (content: string, fmt: (bold: string, normal?: string) => string) =>
		content.replace(/[A-Za-z0-9']+/g, (word) => {
			const boldChars = isNaN(Number(word)) ? word.length - getBoldLength(word.length) : 0;
			if (word.length === 1) {
				return fmt(word);
			}
			return fmt(word.substring(0, boldChars), word.substring(boldChars));
		});

	const effectiveFormatter = formatter || bionicHtmlFormatter;

	// Fast path: no tags present
	if (!text.includes('<')) {
		return applyToText(text, effectiveFormatter);
	}

	const segments = text.split(/(<[^>]*>)/g);
	const transformed = segments
		.map((segment) => {
			if (segment.startsWith('<') && segment.endsWith('>')) {
				return segment; // leave tags untouched
			}
			return applyToText(segment, effectiveFormatter);
		})
		.join('');

	return transformed;
};

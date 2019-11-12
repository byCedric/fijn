import { captionStyle } from './caption';
import { headingStyle } from './heading';
import { linkStyle } from './link';
import { paragraphStyle } from './paragraph';
import { textStyle } from './text';

export const theme = {
	typography: {
		caption: captionStyle,
		heading: headingStyle,
		headings: {
			1: { variant: 'typography.heading' },
			2: { variant: 'typography.heading' },
			3: { variant: 'typography.heading' },
			4: { variant: 'typography.heading' },
			5: { variant: 'typography.heading' },
			6: { variant: 'typography.heading' },
		},
		link: linkStyle,
		paragraph: paragraphStyle,
		text: textStyle,
	},
};

import { captionStyle } from './caption';
import { headingStyle } from './heading';
import { linkStyle } from './link';
import { overlineStyle } from './overline';
import { paragraphStyle } from './paragraph';
import { textStyle } from './text';
import { subheadingStyle } from './subheading';

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
		overline: overlineStyle,
		paragraph: paragraphStyle,
		text: textStyle,
		subheading: subheadingStyle,
	},
};

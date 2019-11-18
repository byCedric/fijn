import { buttonBaseStyle } from './button';
import { containedStyle } from './contained-button';
import { outlinedStyle } from './outlined-button';
import { textStyle } from './text-button';

export const theme = {
	borders: {
		button: '1px solid transparent',
	},
	radii: {
		button: '4px',
	},
	fonts: {
		button: 'sans-serif',
	},
	fontWeights: {
		button: 500,
	},
	button: {
		base: buttonBaseStyle,
		contained: containedStyle,
		outlined: outlinedStyle,
		text: textStyle,
	},
};

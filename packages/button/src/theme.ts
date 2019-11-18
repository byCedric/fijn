import { buttonBaseStyle } from './button';
import { containedStyle } from './contained-button';
import { outlinedStyle } from './outlined-button';
import { textStyle } from './text-button';

export const theme = {
	radii: {
		button: '4px',
	},
	fontWeights: {
		button: '500',
	},
	button: {
		base: buttonBaseStyle,
		contained: containedStyle,
		outlined: outlinedStyle,
		text: textStyle,
	},
};

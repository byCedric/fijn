import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { button, ButtonProps } from './button';

export const TextButton = styled.button<ButtonProps>`
	${button}
`;

TextButton.defaultProps = {
	vx: 'button.text',
	variant: 'secondary',
};

export const textStyle: StyleObject = {
	primary: {
		variant: 'button.base',
		color: 'primary',
		':hover': {
			color: 'primaries.4',
		},
		':focus': {
			color: 'primaries.4',
		},
		':active': {
			color: 'primaries.6',
		},
		':disabled': {
			color: 'primary',
			cursor: 'default',
			opacity: 0.5,
		},
	},
	secondary: {
		variant: 'button.base',
		color: 'secondary',
		':hover': {
			color: 'secondaries.4',
		},
		':focus': {
			color: 'secondaries.4',
		},
		':active': {
			color: 'secondaries.6',
		},
		':disabled': {
			color: 'secondary',
			cursor: 'default',
			opacity: 0.5,
		},
	},
};

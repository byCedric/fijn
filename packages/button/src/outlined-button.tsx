import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { button, ButtonProps } from './button';

export const OutlinedButton = styled.button<ButtonProps>`
	${button}
`;

OutlinedButton.defaultProps = {
	vx: 'button.outlined',
	variant: 'secondary',
};

export const outlinedStyle: StyleObject = {
	primary: {
		variant: 'button.base',
		borderColor: 'primary',
		color: 'primary',
		':hover': {
			borderColor: 'primaries.4',
			color: 'primaries.4',
		},
		':focus': {
			borderColor: 'primaries.4',
			color: 'primaries.4',
		},
		':active': {
			borderColor: 'primaries.6',
			color: 'primaries.6',
		},
		':disabled': {
			borderColor: 'primary',
			color: 'primary',
			cursor: 'default',
			opacity: 0.5,
		}
	},
	secondary: {
		variant: 'button.base',
		borderColor: 'secondary',
		color: 'secondary',
		':hover': {
			borderColor: 'secondaries.4',
			color: 'secondaries.4',
		},
		':focus': {
			borderColor: 'secondaries.4',
			color: 'secondaries.4',
		},
		':active': {
			borderColor: 'secondaries.6',
			color: 'secondaries.6',
		},
		':disabled': {
			borderColor: 'secondary',
			color: 'secondary',
			cursor: 'default',
			opacity: 0.5,
		}
	},
};

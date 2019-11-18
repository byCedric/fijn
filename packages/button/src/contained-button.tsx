import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { button, ButtonProps } from './button';

export const ContainedButton = styled.button<ButtonProps>`
	${button}
`;

ContainedButton.defaultProps = {
	vx: 'button.contained',
	variant: 'secondary',
};

export const containedStyle: StyleObject = {
	primary: {
		variant: 'button.base',
		backgroundColor: 'primary',
		borderColor: 'primary',
		color: 'invert.primary',
		':hover': {
			backgroundColor: 'primaries.4',
			color: 'invert.primary',
		},
		':focus': {
			backgroundColor: 'primaries.4',
			color: 'invert.primary',
		},
		':active': {
			backgroundColor: 'primaries.6',
			borderColor: 'primaries.6',
			color: 'invert.primary',
		},
		':disabled': {
			backgroundColor: 'primary',
			borderColor: 'primary',
			color: 'invert.primary',
			cursor: 'default',
			opacity: 0.5,
		},
	},
	secondary: {
		variant: 'button.base',
		backgroundColor: 'secondary',
		borderColor: 'secondary',
		color: 'invert.secondary',
		':hover': {
			backgroundColor: 'secondaries.4',
			color: 'invert.secondary',
		},
		':focus': {
			backgroundColor: 'secondaries.4',
			color: 'invert.secondary',
		},
		':active': {
			backgroundColor: 'secondaries.6',
			borderColor: 'secondaries.6',
			color: 'invert.secondary',
		},
		':disabled': {
			backgroundColor: 'secondary',
			borderColor: 'secondary',
			color: 'invert.secondary',
			cursor: 'default',
			opacity: 0.5,
		},
	},
};

import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { button, ButtonProps } from './button';

export const ContainedButton = styled.button<ButtonProps>`
	${button}
`;

ContainedButton.defaultProps = {
	vx: 'button.outlined',
	variant: 'secondary',
};

export const containedStyle: StyleObject = {
	primary: {
		variant: 'button.base',
		backgroundColor: 'primary',
		color: 'white',
	},
	secondary: {
		variant: 'button.base',
		backgroundColor: 'primary',
		color: 'white',
	},
};

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
	},
	secondary: {
		variant: 'button.base',
		color: 'secondary',
	},
};

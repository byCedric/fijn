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
	},
	secondary: {
		variant: 'button.base',
		borderColor: 'primary',
	},
};

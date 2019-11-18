import { StyleObject } from '@fijn/core';
import { variant, VariantProps } from '@fijn/core';
import { css } from 'styled-components';
import {
	border,
	BorderProps,
	color,
	ColorProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
} from 'styled-system';

export const button = css`
	${variant}
	${border}
	${color}
	${layout}
	${space}
`;

export interface ButtonProps extends BorderProps, ColorProps, LayoutProps, SpaceProps, VariantProps {
	//
}

export const buttonBaseStyle: StyleObject = {
	appearance: 'none',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
	borderRadius: 'button',
	fontSize: 1,
	fontWeight: 'button',
	letterSpacing: '0.05em',
	outline: 'none',
	paddingX: 3,
	paddingY: 2,
};

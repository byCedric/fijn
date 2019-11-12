import { variant, VariantProps } from '@fijn/core';
import { css } from 'styled-components';
import {
	color,
	ColorProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
	typography as baseTypography,
	TypographyProps as BaseTypographyProps,
} from 'styled-system';

export const typography = css`
	${variant}
	${baseTypography}
	${color}
	${layout}
	${space}
`;

export interface TypographyProps extends BaseTypographyProps, ColorProps, LayoutProps, SpaceProps, VariantProps {
	//
}

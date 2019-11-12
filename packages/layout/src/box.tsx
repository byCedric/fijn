import { variant, VariantProps } from '@fijn/core';
import styled from 'styled-components';
import {
	color,
	ColorProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
} from 'styled-system';

export const Box = styled.div<BoxProps>`
	${variant}
	${color}
	${layout}
	${space}
`;

Box.defaultProps = {
	vx: 'layout',
	variant: 'box',
};

export interface BoxProps extends ColorProps, LayoutProps, SpaceProps, VariantProps {
	//
}

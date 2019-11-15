import { variant, VariantProps, StyleObject } from '@fijn/core';
import styled from 'styled-components';
import {
	color,
	ColorProps,
	flexbox,
	FlexboxProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
} from 'styled-system';

export const Flex = styled.div<FlexProps>`
	${variant}
	${color}
	${flexbox}
	${layout}
	${space}
`;

Flex.defaultProps = {
	vx: 'layout',
	variant: 'flex',
};

export interface FlexProps extends ColorProps, FlexboxProps, LayoutProps, SpaceProps, VariantProps {
	//
}

export const flexStyles: StyleObject = {
	display: 'flex',
};

import { variant, VariantProps, StyleObject } from '@fijn/core';
import styled from 'styled-components';
import {
	flexbox,
	FlexboxProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
} from 'styled-system';

export const Flex = styled.div<FlexProps>`
	${variant}
	${flexbox}
	${layout}
	${space}
`;

Flex.defaultProps = {
	vx: 'layout',
	variant: 'flex',
};

export interface FlexProps extends FlexboxProps, LayoutProps, SpaceProps, VariantProps {
	//
}

export const flexStyles: StyleObject = {
	display: 'flex',
};

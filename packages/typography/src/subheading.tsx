import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { typography, TypographyProps } from './typography';

export const Subheading = styled.span<TypographyProps>`
	${typography}
`;

Subheading.defaultProps = {
	vx: 'typography',
	variant: 'subheading',
};

export const subheadingStyle: StyleObject = {
	//
};

import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { typography, TypographyProps } from './typography';

export const Link = styled.a<TypographyProps>`
	${typography}
`;

Link.defaultProps = {
	vx: 'typography',
	variant: 'link',
};

export const linkStyle: StyleObject = {
	color: 'inherit',
};

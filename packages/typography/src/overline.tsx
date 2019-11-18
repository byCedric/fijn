import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { typography, TypographyProps } from './typography';

export const Overline = styled.em<TypographyProps>`
	${typography}
`;

Overline.defaultProps = {
	vx: 'typography',
	variant: 'overline',
};

export const overlineStyle: StyleObject = {
	display: 'block',
	fontSize: 0,
	fontStyle: 'normal',
	letterSpacing: '0.05em',
	textTransform: 'uppercase',
	userSelect: 'none',
};

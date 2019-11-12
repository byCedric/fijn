import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { typography, TypographyProps } from './typography';

export const Caption = styled.em<TypographyProps>`
	${typography}
`;

Caption.defaultProps = {
	vx: 'typography',
	variant: 'caption',
};

export const captionStyle: StyleObject = {
	display: 'block',
	fontSize: 0,
	fontStyle: 'normal',
	letterSpacing: '0.05em',
	textTransform: 'uppercase',
	userSelect: 'none',
};

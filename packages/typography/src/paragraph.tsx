import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { typography, TypographyProps } from './typography';

export const Paragraph = styled.p<TypographyProps>`
	${typography}
`;

Paragraph.defaultProps = {
	vx: 'typography',
	variant: 'paragraph',
};

export const paragraphStyle: StyleObject = {
	margin: 0,
};

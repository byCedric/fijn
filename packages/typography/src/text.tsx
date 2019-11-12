import { StyleObject } from '@fijn/core';
import styled from 'styled-components';
import { typography, TypographyProps } from './typography';

export const Text = styled.span<TypographyProps>`
	${typography}
`;

Text.defaultProps = {
	vx: 'typography',
	variant: 'text',
};

export const textStyle: StyleObject = {
	display: 'inline-block',
};

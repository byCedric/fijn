import { StyleObject } from '@fijn/core';
import React from 'react';
import styled from 'styled-components';
import { typography, TypographyProps } from './typography';

export const BaseHeading = styled.h1<TypographyProps>`
	${typography}
`;

BaseHeading.defaultProps = {
	vx: 'typography',
	variant: 'heading',
};

export const headingStyle: StyleObject = {
	margin: 0,
	fontFamily: 'heading',
	lineHeight: 'heading',
	fontWeight: 'heading',
};

export const Heading: React.FC<HeadingProps> = ({ level, ...props }) => {
	const element = `h${level}`;
	const variant = `headings.${level}`;

	return (
		<BaseHeading variant={variant} {...props as any} as={element as any}>
			{props.children}
		</BaseHeading>
	);
};

export interface HeadingProps extends Omit<Partial<HTMLHeadingElement>, 'children'>, TypographyProps {
	/** The "semantic" level or type of the title, like h1 or h3 (defaults to 1) */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

Heading.defaultProps = {
	level: 1,
};

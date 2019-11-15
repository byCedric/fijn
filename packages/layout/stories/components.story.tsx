import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { Box, Flex } from '../src';

const stories = storiesOf('Layout', module);

stories.add('Box', () => {
	const boxProps = {
		p: text('padding', '3', 'padding'),
		px: text('padding horizontally', undefined, 'padding'),
		py: text('padding vertically', undefined, 'padding'),
		pt: text('padding top', undefined, 'padding'),
		pr: text('padding right', undefined, 'padding'),
		pb: text('padding bottom', undefined, 'padding'),
		pl: text('padding left', undefined, 'padding'),
		mt: text('margin top', undefined, 'margin'),
		mr: text('margin right', undefined, 'margin'),
		mb: text('margin bottom', undefined, 'margin'),
		ml: text('margin left', undefined, 'margin'),
		mx: text('margin horizontally', undefined, 'margin'),
		my: text('margin vertically', undefined, 'margin'),
		m: text('margin', '3', 'margin'),
		width: text('width', undefined, 'dimensions'),
		maxWidth: text('max width', undefined, 'dimensions'),
		minWidth: text('min width', undefined, 'dimensions'),
		height: text('height', undefined, 'dimensions'),
		maxHeight: text('max height', undefined, 'dimensions'),
		minHeight: text('min height', undefined, 'dimensions'),
		color: text('text color', '#fff', 'style'),
		backgroundColor: text('background color', '#000', 'style'),
		opacity: text('opacity', undefined, 'style') as any,
		overflow: text('overflow', undefined, 'style'),
		overflowX: text('overflow horizontally', undefined, 'style') as any,
		overflowY: text('overflow vertically', undefined, 'style') as any,
	};

	// todo: refactor into separate utility package
	for (const prop in boxProps) {
		if (boxProps[prop] === undefined) {
			delete boxProps[prop];
		}
	}

	return (
		<Box {...boxProps}>
			{text('children', 'This is a box')}
		</Box>
	);
});

stories.add('Flex', () => (
	<Box color='#fff'>
		<Flex flexDirection={select('direction', ['row', 'column'], 'row') as any}>
			<Flex flex={1} p='1rem' bg='#000'>flex child</Flex>
			<Flex flex={1} p='1rem' bg='#111'>flex child</Flex>
			<Flex flex={1} p='1rem' bg='#222'>flex child</Flex>
		</Flex>
	</Box>
));

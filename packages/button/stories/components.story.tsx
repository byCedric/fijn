import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { themeDecorator } from '../../../.storybook/theme';
import { theme, TextButton } from '../src';
import { Caption, theme as typographyTheme } from '../../typography/src';
import { Flex, Box, theme as layoutTheme } from '../../layout/src';

const stories = storiesOf('Button', module);

stories.addDecorator(
	themeDecorator({
		...typographyTheme,
		...layoutTheme,
		...theme,
		colors: {
			primary: '#ff0000',
			dim: '#999',
		},
		root: {
			fontFamily: 'sans-serif',
			color: 'white',
			margin: 3,
		},
	})
);

stories.add('All', () => (
	<Flex>
		<Flex p={2} flexDirection='column'>
			<Caption>Text Buttons</Caption>
			<Box my={3}>
				<TextButton>normal</TextButton>
			</Box>
			<Box my={3}>
				<TextButton>contained</TextButton>
			</Box>
			<Box my={3}>
				<TextButton>outlined</TextButton>
			</Box>
		</Flex>
	</Flex>
));

stories.add('TextButton', () => (
	<TextButton>{text('text', 'caption')}</TextButton>
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { themeDecorator } from '../../../.storybook/theme';
import { ContainedButton, OutlinedButton, TextButton, theme as buttonTheme } from '../src';
import { Overline, Link, theme as typographyTheme } from '../../typography/src';
import { Box, theme as layoutTheme } from '../../layout/src';

const stories = storiesOf('Button', module);

stories.addDecorator(
	themeDecorator({
		...typographyTheme,
		...layoutTheme,
		...buttonTheme,
		colors: {
			dim: '#999999',
			primary: '#FF4D18',
			primaries: {
				4: '#FF7951',
				5: '#FF4D18',
				6: '#D13000',
			},
			secondary: '#cccccc',
			secondaries: {
				4: '#e5e5e5',
				5: '#cccccc',
				6: '#999999',
			},
			invert: {
				primary: '#FFFFFF',
				secondary: '#333333',
			},
		},
		root: {
			fontFamily: 'sans-serif',
			color: 'white',
			margin: 3,
		},
	})
);``

stories.add('All', () => (
	<>
		<Overline color='dim'>(Contained) Button</Overline>
		<Box my={3}>
			<ContainedButton mx={3} ml={0}>normal</ContainedButton>
			<ContainedButton mx={3} disabled>disabled</ContainedButton>
			<ContainedButton mx={3} variant='primary'>primary</ContainedButton>
			<ContainedButton mx={3} variant='primary' disabled>primary disabled</ContainedButton>
		</Box>

		<Overline color='dim'>Outlined Button</Overline>
		<Box my={3}>
			<OutlinedButton mx={3} ml={0}>normal</OutlinedButton>
			<OutlinedButton mx={3} disabled>disabled</OutlinedButton>
			<OutlinedButton mx={3} variant='primary'>primary</OutlinedButton>
			<OutlinedButton mx={3} variant='primary' disabled>primary disabled</OutlinedButton>
		</Box>

		<Overline color='dim'>Text Button</Overline>
		<Box my={3}>
			<TextButton>normal</TextButton>
			<TextButton disabled>disabled</TextButton>
			<TextButton variant='primary'>primary</TextButton>
			<TextButton variant='primary' disabled>primary disabled</TextButton>
		</Box>

		<Overline color='dim'>Link</Overline>
		<Box my={3}>
			<Link variant='button.contained.secondary' mx={3} ml={0} href='https://google.com'>normal</Link>
			<Link variant='button.outlined.secondary' mx={3} href='https://google.com'>outlined</Link>
			<Link variant='button.text.secondary' href='https://google.com'>text</Link>
		</Box>
	</>
));

stories.add('TextButton', () => {
	const buttonProps = {
		variant: select('variant', ['primary', 'secondary'], 'primary'),
		disabled: boolean('disabled', false),
		onClick: () => console.log('clicked'),
	};

	if (!buttonProps.disabled) {
		delete buttonProps.disabled;
	}

	return (
		<TextButton {...buttonProps}>
			{text('text', 'button')}
		</TextButton>
	);
});

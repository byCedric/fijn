import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { themeDecorator } from '../../../.storybook/theme';
import { theme, Caption, Heading, Link, Paragraph, Text } from '../src';

const stories = storiesOf('Typography', module);

stories.addDecorator(
	themeDecorator({
		...theme,
		colors: { dim: '#999' },
		root: {
			fontFamily: 'sans-serif',
			color: 'white',
			margin: 3,
		},
	})
);

stories.add('All', () => (
	<>
		<Caption my={1} color='dim'>heading</Caption>
		<Heading mb={3}>Headings are useful to name things</Heading>

		<Caption my={1} color='dim'>paragraph</Caption>
		<Paragraph mb={3}>
			Paragraphs are longer and descriptive text about certain objects.
			Use them for explanations and user-relevant text.
		</Paragraph>

		<Caption my={1} color='dim'>text</Caption>
		<Text mb={3}>Non-semantic meaningful text</Text>

		<Caption my={1} color='dim'>link</Caption>
		<Link mb={3} href='https://github.com/peakfijn/fijn' target='_blank'>
			GitHub
		</Link>
	</>
));

stories.add('Caption', () => (
	<Caption>{text('text', 'caption')}</Caption>
));

stories.add('Heading', () => (
	<Heading level={select('level', [1, 2, 3, 4, 5, 6], 1)}>
		{text('text', 'This is a heading')}
	</Heading>
));

stories.add('Link', () => (
	<Link
		href={text('href', 'https://github.com/peakfijn/fijn')}
		target={select('target', { self: '_self', blank: '_blank', parent: '_parent', top: '_top' }, 'self')}
	>
		{text('text', 'Link to GitHub')}
	</Link>
));

stories.add('Paragraph', () => (
	<Paragraph>
		{text('text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec enim at neque vehicula tincidunt. Ut sit amet ante a lectus pulvinar efficitur. Nulla malesuada orci id justo congue venenatis.')}
	</Paragraph>
));

stories.add('Text', () => (
	<Text>{text('text', 'Some text without semantic meaning')}</Text>
));

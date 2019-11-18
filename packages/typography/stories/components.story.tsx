import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { Box } from '@fijn/layout';
import { themeDecorator } from '../../../.storybook/theme';
import { theme, Caption, Heading, Link, Overline, Paragraph, Text, Subheading } from '../src';

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
		<Box my={2}>
			<Overline color='dim'>heading</Overline>
			<Heading>Headings are useful to name things</Heading>
		</Box>

		<Box my={2}>
			<Overline color='dim'>subheading</Overline>
			<Subheading>Subheading can be used as tagline combined with a heading</Subheading>
		</Box>

		<Box my={2}>
			<Overline color='dim'>paragraph</Overline>
			<Paragraph>
				Paragraphs are longer and descriptive text about certain objects.
				Use them for explanations and user-relevant text.
			</Paragraph>
		</Box>

		<Box my={2}>
			<Overline color='dim'>text</Overline>
			<Text>Non-semantic meaningful text</Text>
		</Box>

		<Box my={2}>
			<Overline color='dim'>overline</Overline>
			<Text>The text above is an overline</Text>
		</Box>

		<Box my={2}>
			<Overline color='dim'>link</Overline>
			<Link href='https://github.com/peakfijn/fijn' target='_blank'>
				GitHub
			</Link>
		</Box>

		<Box my={2}>
			<Overline color='dim'>caption</Overline>
			<Box bg='dim' my={1} height='1rem' />
			<Caption>
				Captions are used to explain entities
			</Caption>
		</Box>
	</>
));

stories.add('Heading', () => (
	<Heading level={select('level', [1, 2, 3, 4, 5, 6], 1)}>
		{text('text', 'This is a heading')}
	</Heading>
));

stories.add('Subheading', () => (
	<Box as='header'>
		<Heading>{text('heading', 'This is a heading')}</Heading>
		<Subheading>{text('subheading', 'And this is a tagline as subheading')}</Subheading>
	</Box>
));

stories.add('Overline', () => (
	<Overline>{text('text', 'overline')}</Overline>
));

stories.add('Paragraph', () => (
	<Paragraph>
		{text('text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec enim at neque vehicula tincidunt. Ut sit amet ante a lectus pulvinar efficitur. Nulla malesuada orci id justo congue venenatis.')}
	</Paragraph>
));

stories.add('Text', () => (
	<Text>{text('text', 'Some text without semantic meaning')}</Text>
));

stories.add('Link', () => (
	<Link
		href={text('href', 'https://github.com/peakfijn/fijn')}
		target={select('target', { self: '_self', blank: '_blank', parent: '_parent', top: '_top' }, 'self')}
	>
		{text('text', 'Link to GitHub')}
	</Link>
));

stories.add('Caption', () => (
	<Box>
		<Box bg='dim' my={1} height='1rem' />
		<Caption>{text('text', 'This is a caption')}</Caption>
	</Box>
));

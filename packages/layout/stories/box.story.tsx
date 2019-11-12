import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { theme, Box } from '../build';
import { themeDecorator } from '../../../.storybook/theme';

// create a section in the overview called 'Fijn'
const stories = storiesOf('Fijn', module);

// this wraps your story in a theme provider
stories.addDecorator(themeDecorator(theme));

// create a story
stories.add(
	'with margin',
	() => (
		<Box margin={32}>
			{text('Text', 'Hello Button')}
		</Box>
	),
	{
		// add an explanation about the component. To see all possibilities for this addon,
		// please see: https://github.com/storybookjs/storybook/tree/release/3.4/addons/info
		info: {
			text: `In-depth explanation of this story.`
		}
	}
);

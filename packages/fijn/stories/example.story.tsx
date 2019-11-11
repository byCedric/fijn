import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { theme } from '../src';
import { themeDecorator } from '../../../.storybook/theme';

// create a section in the overview called 'Fijn'
const stories = storiesOf('Fijn', module);

// this wraps your story in a theme provider
stories.addDecorator(themeDecorator(theme));

// create a story
stories.add(
	// call it 'With Text'
	'With Text',
	// the component to render
	() => <button
		onClick={() => console.log('Hello world!')}
		// create a boolean property that can be controlled from the knobs menu
		disabled={boolean('Disabled', false)}
	>
		{/* create text content that can be controlled from the knobs menu */}
		{text('Text', 'Hello Button')}
	</button>,
	{
		// add an explanation about the component. To see all possibilities for this addon,
		// please see: https://github.com/storybookjs/storybook/tree/release/3.4/addons/info
		info: {
			text: `In-depth explanation of this story.`
		}
	}
);

// create another story
stories.add(
	'With Emoji',
	() => <button
		onClick={() => console.log('Hello emojis!')}
		disabled={boolean('Disabled', false)}
	>
		<span role="img" aria-label="so cool">
			{text('Text', '😀 😎 👍 💯')}
		</span>
	</button>
);

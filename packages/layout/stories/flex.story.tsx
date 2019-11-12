import React from 'react';
import { storiesOf } from '@storybook/react';
import { theme, Box, Flex } from '../build';
import { themeDecorator } from '../../../.storybook/theme';

// create a section in the overview called 'Fijn'
const stories = storiesOf('Flex', module);

// this wraps your story in a theme provider
stories.addDecorator(themeDecorator(theme));

// create a story
stories.add(
	'with 3 columns',
	() => (
		<Flex>
			<Box backgroundColor='red'>column</Box>
			<Box backgroundColor='green'>green</Box>
			<Box backgroundColor='blue'>blue</Box>
		</Flex>
	),
	{
		// add an explanation about the component. To see all possibilities for this addon,
		// please see: https://github.com/storybookjs/storybook/tree/release/3.4/addons/info
		info: {
			text: `In-depth explanation of this story.`
		}
	}
);

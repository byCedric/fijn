import { configure, addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';
import '@storybook/addon-console';

addParameters({
	// set viewports
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
	// set dark theme to not burn our eyes because we're up at 3 AM
	options: {
		theme: themes.dark,
	}
});

// add addon-info
addDecorator(
	withInfo({
		source: false
	})
);

// add addon-knobs
addDecorator(withKnobs);

// load in all stories
configure(require.context(
	'../packages',
	true,
	// matches "/packages/<any package>/stories/<any file>.story.tsx"
	/\/[^\/]+\/stories\/([^\/]+).story.tsx$/
), module);

import React from 'react';

// TODO: Import this from core instead of using this placeholder
const ThemeProvider = (props) => (<>{props.children}</>);

export const themeDecorator = (
	theme => (
		storyFunction => (
			<ThemeProvider theme={theme}>{storyFunction()}</ThemeProvider>
		)
	)
);

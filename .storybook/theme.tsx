import React from 'react';
import { ThemeProvider } from '../packages/core';
import { Box } from '../packages/layout';

export const themeDecorator = (
	theme => (
		storyFunction => (
			<ThemeProvider theme={theme}>
				<Box variant='root'>
					{storyFunction()}
				</Box>
			</ThemeProvider>
		)
	)
);

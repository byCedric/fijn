import React from 'react';
import { render } from '@testing-library/react';
import { Box } from '../src/box';

it('renders a div', () => {
	const { getByTestId } = render(
		<Box data-testid='box'>
			some name
		</Box>
	);

	expect(getByTestId('box').nodeName).toBe('DIV');
});

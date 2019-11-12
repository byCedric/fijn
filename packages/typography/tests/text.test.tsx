import React from 'react';
import { render } from '@testing-library/react';
import { Text } from '../src';

it('renders a span', () => {
	const { getByTestId } = render(
		<Text data-testid='text'>
			random text
		</Text>
	);

	expect(getByTestId('text').nodeName).toBe('SPAN');
});

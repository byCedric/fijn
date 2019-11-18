import React from 'react';
import { render } from '@testing-library/react';
import { Caption } from '../src';

it('renders a span', () => {
	const { getByTestId } = render(
		<Caption data-testid='caption'>
			some additional text
		</Caption>
	);

	expect(getByTestId('caption').nodeName).toBe('SPAN');
});

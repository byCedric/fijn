import React from 'react';
import { render } from '@testing-library/react';
import { Caption } from '../src';

it('renders an em', () => {
	const { getByTestId } = render(
		<Caption data-testid='caption'>
			some name
		</Caption>
	);

	expect(getByTestId('caption').nodeName).toBe('EM');
});

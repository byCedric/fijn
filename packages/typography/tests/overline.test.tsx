import React from 'react';
import { render } from '@testing-library/react';
import { Overline } from '../src';

it('renders an em', () => {
	const { getByTestId } = render(
		<Overline data-testid='overline'>
			some overline
		</Overline>
	);

	expect(getByTestId('overline').nodeName).toBe('EM');
});

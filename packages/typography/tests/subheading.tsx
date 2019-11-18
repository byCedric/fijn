import React from 'react';
import { render } from '@testing-library/react';
import { Subheading } from '../src';

it('renders a span', () => {
	const { getByTestId } = render(
		<Subheading data-testid='subheading'>
			this is a subheading
		</Subheading>
	);

	expect(getByTestId('subheading').nodeName).toBe('SPAN');
});

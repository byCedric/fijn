import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from '../src';

it('renders a heading', () => {
	const { getByTestId } = render(
		<Heading data-testid='heading'>
			This is a title
		</Heading>
	);

	expect(getByTestId('heading').nodeName).toBe('H1');
});

it('renders a h3 based on level 3', () => {
	const { getByTestId } = render(
		<Heading data-testid='heading' level={3}>
			This is a title
		</Heading>
	);

	expect(getByTestId('heading').nodeName).toBe('H3');
});

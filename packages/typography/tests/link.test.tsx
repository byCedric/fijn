import React from 'react';
import { render } from '@testing-library/react';
import { Link } from '../src';

it('renders an anchor with href', () => {
	const { getByTestId } = render(
		<Link data-testid='link' href='https://peakfijn.nl'>
			nice hyperlink
		</Link>
	);

	const link = getByTestId('link');

	expect(link.nodeName).toBe('A');
	// todo: enable basic testing tools for fijn
	// expect(link).toHaveAttribute('href', 'https://peakfijn.nl');
});

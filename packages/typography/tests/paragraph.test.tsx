import React from 'react';
import { render } from '@testing-library/react';
import { Paragraph } from '../src';

it('renders a paragraph', () => {
	const { getByTestId } = render(
		<Paragraph data-testid='paragraph'>
			Some informational text that has a meaning when used.
		</Paragraph>
	);

	expect(getByTestId('paragraph').nodeName).toBe('P');
});

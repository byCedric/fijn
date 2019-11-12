import React from 'react';
import { render } from '@testing-library/react';
import { Flex } from '../src/flex';

it('renders a div', () => {
	const { getByTestId } = render(
		<Flex data-testid='flex'>
			some name
		</Flex>
	);

	expect(getByTestId('flex').nodeName).toBe('DIV');
});

// todo: implement testing package with jest-styled-components and @testing-library/react
// it('has display: flex rule', () => {
// 	const { getByTestId } = render(
// 		<Flex data-testid='flex'>
// 			some name
// 		</Flex>
// 	);

// 	expect(getByTestId('flex')).toHaveStyleRule('display', 'flex');
// });

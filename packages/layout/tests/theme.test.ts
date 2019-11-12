import { theme } from '../src/theme';

it('exports theme with layout', () => {
	expect(theme).toHaveProperty('layout');
});

it('exports flex styles', () => {
	expect(theme.layout).toHaveProperty('flex');
});

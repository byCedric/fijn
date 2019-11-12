import { theme } from '../src';

it('exports theme with typography', () => {
	expect(theme).toHaveProperty('typography');
});

it('exports caption styles', () => {
	expect(theme.typography).toHaveProperty('caption');
});

it('exports heading styles', () => {
	expect(theme.typography).toHaveProperty('heading');
	expect(theme.typography).toHaveProperty('headings');

	[1, 2, 3, 4, 5, 6].forEach((i) => {
		expect(theme.typography.headings).toHaveProperty(`${i}`);
	});
});

it('exports link styles', () => {
	expect(theme.typography).toHaveProperty('link');
});

it('exports paragraph styles', () => {
	expect(theme.typography).toHaveProperty('paragraph');
});

it('exports text styles', () => {
	expect(theme.typography).toHaveProperty('text');
});

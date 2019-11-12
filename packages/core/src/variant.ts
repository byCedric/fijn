import css, { get } from '@styled-system/css';
import { StyledProps } from 'styled-components';

/**
 * Method or mixin to add scoped variants from theme.
 * It behaves different from the styled system variant, because its pulling theme styles.
 * The code itself is based on Rebass, but avoided to make it as compatible as possible for non-web environments.
 *
 * @todo check if `css` is necessary, theme styles should be wrapped already in css
 */
export function variant(args: StyledProps<VariantProps>) {
	const key = args.vx ? `${args.vx}.${args.variant}` : args.variant;
	const styles = get(args.theme, key) || get(args.theme, args.variant);

	return css(styles)(args.theme);
}

export interface VariantProps {
	/** The scope of the variant, used as prefix to fetch the variant styling */
	vx?: string;
	/** The name of the variant, used to fetch the styling */
	variant?: string;
}

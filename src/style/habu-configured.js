import { configureCss, cssProps, cssVals } from 'habu';
import theme from './theme';

const css = configureCss({ theme, cssProps, cssVals, prefixesToRemove: ['colors'] });
export default css;

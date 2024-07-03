import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
import presetTypography from '@unocss/preset-typography';

export default defineConfig({
  presets: [presetUno(), presetTypography()],
});

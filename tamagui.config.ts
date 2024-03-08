import { themes, tokens } from '@tamagui/themes';
import { config } from '@tamagui/config/v2';
import { createFont, createTamagui } from 'tamagui';

const robotoFace = {
	normal: { normal: 'Roboto', italic: 'Roboto-Italic' },
	bold: { normal: 'RobotoBold', italic: 'RobotoBoldItalic' },
	400: { normal: 'Roboto', italic: 'RobotoItalic' },
	500: { normal: 'RobotoMedium', italic: 'RobotoMediumItalic' },
	700: { normal: 'RobotoBold', italic: 'RobotoBoldItalic' },
	800: { normal: 'RobotoBold', italic: 'RobotoBoldItalic' },
	900: { normal: 'RobotoBold', italic: 'RobotoBoldItalic' }
};

const headingFont = createFont({
	size: config.fonts.heading.size,
	lineHeight: config.fonts.heading.lineHeight,
	weight: config.fonts.heading.weight,
	letterSpacing: config.fonts.heading.letterSpacing,
	face: robotoFace
});

const bodyFont = createFont({
	size: config.fonts.body.size,
	lineHeight: config.fonts.body.lineHeight,
	weight: config.fonts.body.weight,
	letterSpacing: config.fonts.body.letterSpacing,
	face: robotoFace
});

export const appConfig = createTamagui({
	themes,
	tokens,
	fonts: {
		heading: headingFont,
		body: bodyFont
	}
});

export type AppConfig = typeof appConfig;

declare module 'tamagui' {
	// or '@tamagui/core'
	// overrides TamaguiCustomConfig so your custom types
	// work everywhere you import `tamagui`
	interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;

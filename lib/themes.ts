import { type MaterialColors } from '@expo/ui/jetpack-compose';

/**
 * Blue seed (#2563EB) default palettes.
 * Used when Monet is OFF or on platforms without dynamic color support.
 */

const BLUE_SEED = '#2563EB';

export const DEFAULT_LIGHT_COLORS: MaterialColors = {
    primary: '#2563EBFF',
    onPrimary: '#FFFFFFFF',
    primaryContainer: '#DBE1FEFF',
    onPrimaryContainer: '#001849FF',
    inversePrimary: '#B3C5FFFF',

    secondary: '#565E71FF',
    onSecondary: '#FFFFFFFF',
    secondaryContainer: '#DAE2F9FF',
    onSecondaryContainer: '#131C2BFF',

    tertiary: '#705574FF',
    onTertiary: '#FFFFFFFF',
    tertiaryContainer: '#FAD8FDFF',
    onTertiaryContainer: '#2A132EFF',

    background: '#FEFBFFFF',
    onBackground: '#1B1B1FFF',

    surface: '#FEFBFFFF',
    onSurface: '#1B1B1FFF',
    surfaceVariant: '#E1E2ECFF',
    onSurfaceVariant: '#44474EFF',
    surfaceTint: '#2563EBFF',
    surfaceBright: '#FEFBFFFF',
    surfaceDim: '#DED9E2FF',
    surfaceContainer: '#F2EDF6FF',
    surfaceContainerHigh: '#ECE7F0FF',
    surfaceContainerHighest: '#E6E1EAFF',
    surfaceContainerLow: '#F8F3FCFF',
    surfaceContainerLowest: '#FFFFFFFF',
    inverseSurface: '#303034FF',
    inverseOnSurface: '#F2F0F4FF',

    error: '#BA1A1AFF',
    onError: '#FFFFFFFF',
    errorContainer: '#FFDAD6FF',
    onErrorContainer: '#410002FF',

    outline: '#74777FFF',
    outlineVariant: '#C4C6D0FF',

    scrim: '#000000FF',

    primaryFixed: '#DBE1FEFF',
    primaryFixedDim: '#B3C5FFFF',
    onPrimaryFixed: '#001849FF',
    onPrimaryFixedVariant: '#1E4083FF',

    secondaryFixed: '#DAE2F9FF',
    secondaryFixedDim: '#BEC6DCFF',
    onSecondaryFixed: '#131C2BFF',
    onSecondaryFixedVariant: '#3E4759FF',

    tertiaryFixed: '#FAD8FDFF',
    tertiaryFixedDim: '#D8BBDEFF',
    onTertiaryFixed: '#2A132EFF',
    onTertiaryFixedVariant: '#583E57FF',
};

export const DEFAULT_DARK_COLORS: MaterialColors = {
    primary: '#B3C5FFFF',
    onPrimary: '#002C72FF',
    primaryContainer: '#1E4083FF',
    onPrimaryContainer: '#DBE1FEFF',
    inversePrimary: '#2563EBFF',

    secondary: '#BEC6DCFF',
    onSecondary: '#283041FF',
    secondaryContainer: '#3E4759FF',
    onSecondaryContainer: '#DAE2F9FF',

    tertiary: '#D8BBDEFF',
    onTertiary: '#412A42FF',
    tertiaryContainer: '#583E57FF',
    onTertiaryContainer: '#FAD8FDFF',

    background: '#131316FF',
    onBackground: '#E3E2E6FF',

    surface: '#131316FF',
    onSurface: '#E3E2E6FF',
    surfaceVariant: '#44474EFF',
    onSurfaceVariant: '#C4C6D0FF',
    surfaceTint: '#B3C5FFFF',
    surfaceBright: '#39393DFF',
    surfaceDim: '#131316FF',
    surfaceContainer: '#1F1F23FF',
    surfaceContainerHigh: '#2A2A2EFF',
    surfaceContainerHighest: '#353539FF',
    surfaceContainerLow: '#1B1B1FFF',
    surfaceContainerLowest: '#0E0E12FF',
    inverseSurface: '#E3E2E6FF',
    inverseOnSurface: '#303034FF',

    error: '#FFB4ABFF',
    onError: '#690005FF',
    errorContainer: '#93000AFF',
    onErrorContainer: '#FFDAD6FF',

    outline: '#8E9099FF',
    outlineVariant: '#44474EFF',

    scrim: '#000000FF',

    primaryFixed: '#DBE1FEFF',
    primaryFixedDim: '#B3C5FFFF',
    onPrimaryFixed: '#001849FF',
    onPrimaryFixedVariant: '#1E4083FF',

    secondaryFixed: '#DAE2F9FF',
    secondaryFixedDim: '#BEC6DCFF',
    onSecondaryFixed: '#131C2BFF',
    onSecondaryFixedVariant: '#3E4759FF',

    tertiaryFixed: '#FAD8FDFF',
    tertiaryFixedDim: '#D8BBDEFF',
    onTertiaryFixed: '#2A132EFF',
    onTertiaryFixedVariant: '#583E57FF',
};

export { BLUE_SEED };

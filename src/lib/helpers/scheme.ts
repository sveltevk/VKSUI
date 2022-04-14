import type { AppearanceSchemeType, AppearanceType } from '@vkontakte/vk-bridge';
import { getScheme } from './getScheme';
import { VKCOM } from '../lib/platform';
import type { PlatformType } from '../lib/platform';

export enum Scheme {
	/**
	 * @deprecated будет удалено в 5.0.0
	 * версия оставлена для совместимости со старыми версиями клиентов
	 */
	DEPRECATED_CLIENT_LIGHT = 'client_light',
	/**
	 * @deprecated будет удалено в 5.0.0
	 * версия оставлена для совместимости со старыми версиями клиентов
	 */
	DEPRECATED_CLIENT_DARK = 'client_dark',
	/**
	 * @deprecated будет удалено в 5.0.0
	 * версия оставлена для совместимости с vkcom, когда там была только одна схема
	 */
	VKCOM = 'vkcom',

	BRIGHT_LIGHT = 'bright_light',
	SPACE_GRAY = 'space_gray',
	VKCOM_LIGHT = 'vkcom_light',
	VKCOM_DARK = 'vkcom_dark'
}

export type AppearanceScheme =
	| AppearanceSchemeType
	| Scheme.VKCOM
	| Scheme.VKCOM_DARK
	| Scheme.VKCOM_LIGHT
	| 'inherit';

export interface NormalizeSchemeProps {
	platform: PlatformType;
	scheme?: AppearanceScheme;
	appearance?: AppearanceType;
}

export function normalizeScheme({
	platform,
	scheme,
	appearance
}: NormalizeSchemeProps): Scheme | 'inherit' {
	if (appearance) {
		return getScheme({ platform, appearance });
	}

	if (scheme === 'inherit') {
		return scheme;
	}

	if (platform === VKCOM && (scheme === Scheme.BRIGHT_LIGHT || scheme === Scheme.SPACE_GRAY)) {
		return Scheme.VKCOM_LIGHT;
	}

	return scheme as Scheme;
}

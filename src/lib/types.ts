import type { PlatformType } from './lib/platform';
import type { Insets } from '@vkontakte/vk-bridge';

export type AlignType = 'left' | 'center' | 'right';

export interface HasPlatform {
	/**
	 * @ignore
	 */
	platform?: PlatformType;
}

export interface HasInsets {
	/**
	 * @ignore
	 */
	insets?: Partial<Insets>;
}

export interface Version {
	major: number;
	minor?: number;
	patch?: number;
}

export type AnyFunction = (...args: any[]) => any;

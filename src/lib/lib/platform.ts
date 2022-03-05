import { canUseDOM } from './dom';

export enum Platform {
	ANDROID = 'android',
	IOS = 'ios',
	VKCOM = 'vkcom'
}

export const ANDROID: Platform = Platform.ANDROID;
export const IOS: Platform = Platform.IOS;
export const VKCOM: Platform = Platform.VKCOM;

export type PlatformType = Platform.ANDROID | Platform.IOS | Platform.VKCOM;
// | string;

export function platform(useragent?: string): PlatformType {
	const ua = useragent || (canUseDOM && navigator.userAgent) || '';

	return /iphone|ipad|ipod/i.test(ua) ? IOS : ANDROID;
}

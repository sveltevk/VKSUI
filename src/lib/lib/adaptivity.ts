import { hasMouse as _hasMouse, hasHover as _hasHover } from '@vkontakte/vkjs';

export const AdaptivityContextKey = 'AdaptivityContext';

export enum SizeType {
	COMPACT = 'compact',
	REGULAR = 'regular'
}

export enum ViewWidth {
	SMALL_MOBILE = 1,
	MOBILE,
	SMALL_TABLET,
	TABLET,
	DESKTOP
}

export enum ViewHeight {
	EXTRA_SMALL = 1,
	SMALL,
	MEDIUM
}

export interface SizeProps {
	sizeX?: SizeType;
	sizeY?: SizeType;
}

export interface AdaptivityContextInterface extends SizeProps {
	viewWidth?: ViewWidth;
	viewHeight?: ViewHeight;
	hasMouse?: boolean;
	deviceHasHover?: boolean;
}

export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 1024;
export const SMALL_TABLET_SIZE = 768;
export const MOBILE_SIZE = 320;

export const MOBILE_LANDSCAPE_HEIGHT = 414;
export const MEDIUM_HEIGHT = 720;

export const calculateAdaptivity = (
	windowWidth: number,
	windowHeight: number,
	props: AdaptivityContextInterface
) => {
	let viewWidth = ViewWidth.SMALL_MOBILE;
	let viewHeight = ViewHeight.SMALL;
	let sizeY = SizeType.REGULAR;
	let sizeX = SizeType.REGULAR;
	let hasMouse = props.hasMouse ?? _hasMouse;
	let deviceHasHover = props.deviceHasHover ?? _hasHover;

	if (windowWidth >= DESKTOP_SIZE) {
		viewWidth = ViewWidth.DESKTOP;
	} else if (windowWidth >= TABLET_SIZE) {
		viewWidth = ViewWidth.TABLET;
	} else if (windowWidth >= SMALL_TABLET_SIZE) {
		viewWidth = ViewWidth.SMALL_TABLET;
	} else if (windowWidth >= MOBILE_SIZE) {
		viewWidth = ViewWidth.MOBILE;
	} else {
		viewWidth = ViewWidth.SMALL_MOBILE;
	}

	if (windowHeight >= MEDIUM_HEIGHT) {
		viewHeight = ViewHeight.MEDIUM;
	} else if (windowHeight > MOBILE_LANDSCAPE_HEIGHT) {
		viewHeight = ViewHeight.SMALL;
	} else {
		viewHeight = ViewHeight.EXTRA_SMALL;
	}

	props.viewWidth && (viewWidth = props.viewWidth);
	props.viewHeight && (viewHeight = props.viewHeight);

	if (viewWidth <= ViewWidth.MOBILE) {
		sizeX = SizeType.COMPACT;
	}

	if ((viewWidth >= ViewWidth.SMALL_TABLET && hasMouse) || viewHeight <= ViewHeight.EXTRA_SMALL) {
		sizeY = SizeType.COMPACT;
	}

	props.sizeX && (sizeX = props.sizeX);
	props.sizeY && (sizeY = props.sizeY);

	return { viewWidth, viewHeight, sizeX, sizeY, hasMouse, deviceHasHover };
};

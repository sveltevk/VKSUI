export enum ContextKey {
	isWebView = 'vkui_isWebView',
	webviewType = 'vkui_webviewType',
	scheme = 'vkui_scheme',
	appearance = 'vkui_appearance',
	classAppearance = 'vkui_classAppearance',
	app = 'vkui_app',
	transitionMotionEnabled = 'vkui_transitionMotionEnabled',
	platform = 'vkui_platform',
	hasNewTokens = 'vkui_hasNewTokens'
}

export enum Appearance {
	DARK = 'dark',
	LIGHT = 'light'
}

export enum Scheme {
	BRIGHT_LIGHT = 'bright_light',
	SPACE_GRAY = 'space_gray',
	VKCOM_LIGHT = 'vkcom_light',
	VKCOM_DARK = 'vkcom_dark'
}

export enum WebviewType {
	VKAPPS = 'vkapps',
	INTERNAL = 'internal'
}

export enum ContextKey {
	isWebView = 'vkui_isWebView',
	webviewType = 'vkui_webviewType',
	scheme = 'vkui_scheme',
	appearance = 'vkui_appearance',
	app = 'vkui_app',
	transitionMotionEnabled = 'vkui_transitionMotionEnabled',
	platform = 'vkui_platform',
	hasNewTokens = 'vkui_hasNewTokens',
	contentWindow = 'vkui_contentWindow',
	contentDocument = 'vkui_contentDocument'
}

export enum Appearance {
	DARK = 'dark',
	LIGHT = 'light'
}

export enum Scheme {
	DEPRECATED_CLIENT_LIGHT = 'client_light',
	DEPRECATED_CLIENT_DARK = 'client_dark',
	BRIGHT_LIGHT = 'bright_light',
	SPACE_GRAY = 'space_gray'
}

export enum WebviewType {
	VKAPPS = 'vkapps',
	INTERNAL = 'internal'
}

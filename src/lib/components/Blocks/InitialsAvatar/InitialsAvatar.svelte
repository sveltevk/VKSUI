<script context="module" lang="ts">
	/**
	 * Градиенты, которые можно использовать в алгоритме поиска градиентов по числовому идентификатору пользователя.
	 * @example user.id % 6 + 1
	 */
	export type InitialsAvatarNumberGradients = 1 | 2 | 3 | 4 | 5 | 6;
	export type InitialsAvatarTextGradients =
		| 'red'
		| 'pink'
		| 'orange'
		| 'yellow'
		| 'green'
		| 'l-blue'
		| 'blue'
		| 'violet';

	const COLORS_NUMBER_TO_TEXT_MAP: Record<
		InitialsAvatarNumberGradients,
		InitialsAvatarTextGradients
	> = {
		1: 'red',
		2: 'orange',
		3: 'yellow',
		4: 'green',
		5: 'l-blue',
		6: 'violet'
	};
	const getInitialsFontSize = (avatarSize: number) => {
		const calculatedFontSize = Math.ceil(avatarSize * 0.36);
		const evenFix = calculatedFontSize % 2;
		return calculatedFontSize + evenFix;
	};
</script>

<script lang="ts">
	import classNames from '$lib/lib/classNames';

	import Avatar, { AVATAR_DEFAULT_SHADOW, AVATAR_DEFAULT_SIZE } from '../Avatar/Avatar.svelte';

	/**
	 * `'red' | 'pink' | 'orange' | 'yellow' | 'green' | 'l-blue' | 'blue' | 'violet'`
	 *
	 * Если передано число, то оно будет сконвертировано в строчное представление цвета по следующей схеме:
	 *
	 * 1: 'red'
	 *
	 * 2: 'orange'
	 *
	 * 3: 'yellow'
	 *
	 * 4: 'green'
	 *
	 * 5: 'l-blue'
	 *
	 * 6: 'violet'
	 */
	export let gradientColor: number | InitialsAvatarTextGradients;
	export let size: number = AVATAR_DEFAULT_SIZE;
	export let shadow: boolean = AVATAR_DEFAULT_SHADOW;

	$: gradientName =
		typeof gradientColor === 'string' ? gradientColor : COLORS_NUMBER_TO_TEXT_MAP[gradientColor];
</script>

<!-- 
@component
Компонент для отображения текстовых аватаров на фоне градиента (например, когда у пользователя нет установленного изображения). 
Для лучшего отображения, рекомендуется использовать длину текста <b>не более 2 символов</b>.<br />
ВКонтакте использует формулу `user_id % 6 + 1` для определения градиента пользователя. Например, у пользователя c id 106 будет 5-й (`l-blue`) цвет градиента.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ display: 'flex', padding: 12, gap: 8, flexFlow: 'row wrap' }}>
  {[16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96].map((size) => {
    const user = getRandomUser();
    return (
      <InitialsAvatar size={size} gradientColor={user.id % 6 + 1}>{user.initials}</InitialsAvatar>
    )
  })}
</div>
```
-->

<Avatar
	style={`font-size:${getInitialsFontSize(size)}px;`}
	class={classNames('InitialsAvatar', `InitialsAvatar--color-${gradientName}`)}
	{shadow}
	{size}
>
	<span aria-hidden="true" class="InitialsAvatar__text">
		<slot />
	</span>
</Avatar>

<style>
	:global(.InitialsAvatar) {
		overflow: hidden;
		background: #99a2ad;
		background: linear-gradient(135deg, #b1b6bd, #99a2ad);
	}

	.InitialsAvatar__text {
		font-family: var(--fontdisplay);
		font-weight: 600;
		color: var(--white); /* stylelint-disable-line plugin/only-tokens-are-allowed */
		text-transform: uppercase;
		text-align: center;
	}

	:global(.InitialsAvatar--color-red) {
		background: #e52e40;
		background: linear-gradient(135deg, #ff7583, #e52e40);
	}

	:global(.InitialsAvatar--color-pink) {
		background: #e62e6b;
		background: linear-gradient(135deg, #ff8880, #e62e6b);
	}

	:global(.InitialsAvatar--color-orange) {
		background: #e66b2e;
		background: linear-gradient(135deg, #ffbf80, #e66b2e);
	}

	:global(.InitialsAvatar--color-yellow) {
		background: #e7a902;
		background: linear-gradient(135deg, #ffd54f, #e7a902);
	}

	:global(.InitialsAvatar--color-green) {
		background: #6cd97e;
		background: linear-gradient(135deg, #6cd97e, #12b212);
	}

	:global(.InitialsAvatar--color-l-blue) {
		background: #2bb4d6;
		background: linear-gradient(135deg, #7df1fa, #2bb4d6);
	}

	:global(.InitialsAvatar--color-blue) {
		background: #3f8ae0;
		background: linear-gradient(135deg, #6cf, #3f8ae0);
	}

	:global(.InitialsAvatar--color-violet) {
		background: #8f3fe0;
		background: linear-gradient(135deg, #d3a6ff, #8f3fe0);
	}
</style>

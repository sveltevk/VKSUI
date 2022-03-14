# WriteBar

Компонент для отрисовки поля ввода сообщения или комментария.

Для `before`, `inlineAfter` и `after` необходимо использовать одну или несколько [`WriteBarIcon`](WriteBarIcon).

Все остальные свойства кроме `class` прокидываются элементу `<textarea />`.

```svelte frame
<script>
	import {
		Panel,
		PanelHeader,
		Group,
		Separator,
		FixedLayout,
		Div,
		WriteBar,
		WriteBarIcon
	} from '@sveltevk/vksui';
	import Icon28SmileOutline from '@sveltevk/icons/dist/28/smile_outline';
	import Icon28CameraOutline from '@sveltevk/icons/dist/28/camera_outline';
	import Icon28VoiceOutline from '@sveltevk/icons/dist/28/voice_outline';
	import Icon28KeyboardBotsOutline from '@sveltevk/icons/dist/28/keyboard_bots_outline';

	let text = '';
	let text1 = '';
	let text2 = '';
	let text3 = 'Завтра в 7?';
	let text4 = 'Да';

	let isAttachmentsShown = false;
	let attachmentsCount = 5;

	let bottomPadding = 0;
</script>

<Panel id="writebar">
	<PanelHeader>WriteBar</PanelHeader>

	<Group>
		<WriteBar bind:value={text1} placeholder="Сообщение">
			<WriteBarIcon slot="before" mode="attach" />
			<svelte:fragment slot="after">
				<WriteBarIcon aria-label="Эмоджи и стикеры">
					<Icon28SmileOutline />
				</WriteBarIcon>

				<WriteBarIcon aria-label="Записать видео-сообщение">
					<Icon28CameraOutline />
				</WriteBarIcon>

				<WriteBarIcon aria-label="Записать голосовое сообщение">
					<Icon28VoiceOutline />
				</WriteBarIcon>
			</svelte:fragment>
		</WriteBar>
	</Group>

	<Group>
		<WriteBar bind:value={text2} placeholder="Сообщение">
			<WriteBarIcon slot="before" mode="attach" />
			<svelte:fragment slot="inlineAfter">
				{#if text2.length === 0}
					<WriteBarIcon aria-label="Открыть меню бота">
						<Icon28KeyboardBotsOutline />
					</WriteBarIcon>
				{/if}

				{#if text2.length > 0}
					<WriteBarIcon aria-label="Эмоджи и стикеры">
						<Icon28SmileOutline />
					</WriteBarIcon>
				{/if}
			</svelte:fragment>
			<svelte:fragment slot="after">
				{#if text2.length === 0}
					<WriteBarIcon aria-label="Эмоджи и стикеры">
						<Icon28SmileOutline />
					</WriteBarIcon>
				{/if}

				{#if text2.length === 0}
					<WriteBarIcon aria-label="Записать голосовое сообщение">
						<Icon28VoiceOutline />
					</WriteBarIcon>
				{/if}

				{#if text2.length > 0}<WriteBarIcon mode="send" />{/if}
			</svelte:fragment>
		</WriteBar>
	</Group>

	<Group>
		<WriteBar bind:value={text3} placeholder="Сообщение">
			<WriteBarIcon slot="before" mode="attach" />
			<svelte:fragment slot="inlineAfter">
				{#if text3.length > 0}
					<WriteBarIcon aria-label="Смайлы и стикеры">
						<Icon28SmileOutline />
					</WriteBarIcon>
				{/if}
			</svelte:fragment>
			<svelte:fragment slot="after">
				{#if text3.length === 0}
					<WriteBarIcon aria-label="Смайлы и стикеры">
						<Icon28SmileOutline />
					</WriteBarIcon>
				{/if}

				<WriteBarIcon mode="send" disabled={text3.length === 0} />
			</svelte:fragment>
		</WriteBar>
	</Group>

	<Group>
		<WriteBar bind:value={text4} placeholder="Сообщение">
			<WriteBarIcon slot="before" mode="attach" />
			<svelte:fragment slot="inlineAfter">
				{#if text4.length > 0}
					<WriteBarIcon aria-label="Смайлы и стикеры">
						<Icon28SmileOutline />
					</WriteBarIcon>
				{/if}
			</svelte:fragment>

			<svelte:fragment slot="after">
				{#if text4.length === 0}
					<WriteBarIcon aria-label="Смайлы и стикеры">
						<Icon28SmileOutline />
					</WriteBarIcon>
				{/if}

				<WriteBarIcon mode="done" disabled={text4.length === 0} />
			</svelte:fragment>
		</WriteBar>
	</Group>

	<div style:height={bottomPadding + 'px'} />

	<FixedLayout vertical="bottom">
		<div bind:offsetHeight={bottomPadding}>
			<Separator wide />

			{#if isAttachmentsShown}
				<div>
					<Div>Интерфейс прикрепления</Div>
					<Separator wide />
				</div>
			{/if}

			<WriteBar bind:value={text} placeholder="Сообщение">
				<WriteBarIcon
					slot="before"
					mode="attach"
					on:click={() => (isAttachmentsShown = !isAttachmentsShown)}
					count={isAttachmentsShown ? null : attachmentsCount}
				/>
				<svelte:fragment slot="inlineAfter">
					{#if text.length > 0}
						(
						<WriteBarIcon aria-label="Смайлы и стикеры">
							<Icon28SmileOutline />
						</WriteBarIcon>
					{/if}
				</svelte:fragment>
				<svelte:fragment slot="after">
					{#if text.length === 0}
						<WriteBarIcon aria-label="Смайлы и стикеры">
							<Icon28SmileOutline />
						</WriteBarIcon>
					{/if}

					{#if text.length === 0}
						<WriteBarIcon aria-label="Записать голосовое сообщение">
							<Icon28VoiceOutline />
						</WriteBarIcon>
					{/if}

					{#if text.length > 0}<WriteBarIcon mode="send" />{/if}
				</svelte:fragment>
			</WriteBar>
		</div>
	</FixedLayout>
</Panel>
```

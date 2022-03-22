export function portal(el: HTMLElement, target: HTMLElement | null) {
	let targetEl: HTMLElement;
	async function update(newTarget: HTMLElement | null) {
		if (newTarget === null) {
			return;
		}

		targetEl = newTarget;
		targetEl.appendChild(el);
		el.hidden = false;
	}

	function destroy() {
		if (el.parentNode) {
			el.parentNode.removeChild(el);
		}
	}

	update(target);
	return {
		update,
		destroy
	};
}

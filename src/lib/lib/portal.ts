export function portal(el: HTMLElement, target: HTMLElement | null) {
	let targetEl: HTMLElement;
	async function update(newTarget: HTMLElement | null) {
		if (newTarget instanceof HTMLElement) {
			targetEl = newTarget;
		} else if (newTarget === null) {
			return;
		} else {
			throw new TypeError(
				`Unknown portal target type: ${
					newTarget === null ? 'null' : typeof newTarget
				}. Allowed types: HTMLElement.`
			);
		}
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

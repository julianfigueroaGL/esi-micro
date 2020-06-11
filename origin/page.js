let cartCount = 0;
document.getElementById('buy').addEventListener('click', () => {
	cartCount += 1;
	window.dispatchEvent(
		new CustomEvent('updateCart', {
			detail: {
				cartCount,
			},
		})
	);
});

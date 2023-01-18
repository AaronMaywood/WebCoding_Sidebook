window.addEventListener('DOMContentLoaded', (event) => {
	/* 外部リンクをすべて別タブで開くようにする */
	let refs = document.querySelectorAll('.reference.external');
	refs.forEach( i => {
		i.setAttribute('target','_blank');
	});
});

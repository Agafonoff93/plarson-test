

function forWindowOnload(callback) {
	document.addEventListener('readystatechange', () => {
		if (document.readyState === 'interactive') {
			callback();
			document.addEventListener('DOMContentLoaded', () => {
				console.log('ПОСЛЕ  события DOMContentLoaded.');
			});
		}
	})
}

const smbFunction = () => {
	console.log('ДО  события DOMContentLoaded.');
}

forWindowOnload(smbFunction)

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM готов!');
})





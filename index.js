// Code your solutions in this file
function writeCards(arrNames,event) {
	let TYCards = []
	for (let i = 0; i < arrNames.length; i++) {
		TYCards.push(`Thank you, ${arrNames[i]}, for the wonderful ${event} gift!`)
		}
	return TYCards
	}

function countDown(start) {
	while (start > -1) {
		console.log(start);
		start--;
		}
	}

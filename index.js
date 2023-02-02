// Code your solutions in this file
const messages = [];
function writeCards(message, message2) {
	for (let i = 0; i < message.length; i++ ) {
		messages.push(`Thank you, ${message[i]}, for the wonderful ${message2} gift!`);
	}
	console.log(messages);
	return messages;
};

function countDown(count) {
	while (count > -1) {
		console.log(count);
		count--;
	}
}

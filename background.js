chrome.commands.onCommand.addListener((command) => {
	sendCommandToActiveTab(command);
});

const sendCommandToActiveTab = (command, payload) => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(
			tabs[0].id,
			{ command, payload },
			(response) => null
		);
	});
};

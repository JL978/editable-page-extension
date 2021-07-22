chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ editState: false });
});

let editState;

chrome.storage.sync.get(['editState'], function(result) {
	editState = result.key;
});


chrome.commands.onCommand.addListener((command) => {
	editState = !editState
	chrome.storage.sync.set({ editState });
	const payload = editState ? "true":"false"
	sendCommandToActiveTab(command, payload)
});

const sendCommandToActiveTab = (command, payload) => {
	chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
		chrome.tabs.sendMessage(
			tabs[0].id, 
			{command, payload}, 
			(response) => null
		)
	});
}
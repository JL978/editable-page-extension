let editable = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	const { command } = request;
	if (command === "toggle-edit") {
		editable = !editable;
		const state = editable ? "true" : "false";
		setPageEditable(state);
	}
});

function setPageEditable(state) {
	document.querySelector("html").contentEditable = state;
}

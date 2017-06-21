'use strict'

export default class ChatController {
	constructor(MessageService) {
        this._messageService = MessageService;
        this.messages = [];

        this._messageService.getMessages().then((response) => {
        	this.messages = response.data;
			console.log(this.messages);
		});

        this.html = "";
	}

	send() {
		this.messages.push({
			sender:"kite",
			text: this.text
		});
		
		this.text = ""
	}
}

ChatController.$inject = ['MessageService'];
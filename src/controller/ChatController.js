'use strict'

export default class ChatController {
	constructor(MessageService, WebSocketService, $rootScope) {
        this._messageService = MessageService;
        this._webSocketService = WebSocketService;
        this._webSocketService.subscribe(this);
        this.messages = [];
        this._rootScope = $rootScope;

        this._messageService.getMessages().then((response) => {
        	this.messages = response.data;
			console.log(this.messages);
		});

        this.html = "";
	}

	send() {
		let messsage = {
            sender:"kite",
            text: this.text
        };

	    this.messages.push(messsage);
		
		this.text = "";
        this._webSocketService.send(messsage);
	}

    receive(message) {
	    this.messages.push({text: message, sender:""});
        this._rootScope.$apply()
    }
}

ChatController.$inject = ['MessageService', 'WebSocketService', '$rootScope'];
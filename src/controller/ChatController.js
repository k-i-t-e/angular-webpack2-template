'use strict'

export default class ChatController {
	constructor(MessageService, WebSocketService, AuthService, $rootScope) {
        this._messageService = MessageService;
        this._webSocketService = WebSocketService;
        this._authService = AuthService;
        this._webSocketService.subscribe(this);
        this.messages = [];
        this._rootScope = $rootScope;

        this._messageService.getMessages().then((response) => {
        	this.messages = response.data;
			console.log(this.messages);
		});

        this.html = "";
	}

	getName() {
	    return this._authService.name ? this._authService.name : null;
    }

	send() {
		let messsage = {
            sender:this.getName(),
            text: this.text
        };

	    this.messages.push(messsage);
		
		this.text = "";
        this._webSocketService.send(messsage);
	}

	isMyMessage(message) {
	    return message.sender === this.getName()
    }

    receive(message) {
	    this.messages.push(message);
        this._rootScope.$apply()
    }
}

ChatController.$inject = ['MessageService', 'WebSocketService', 'AuthService', '$rootScope'];
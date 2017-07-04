'use strict'

export default class ChatController {
	constructor(MessageService, WebSocketService, AuthService, $scope) {
        this._messageService = MessageService;
        this._webSocketService = WebSocketService;
        this._authService = AuthService;
        this._webSocketService.subscribe(this);
        this.messages = [];
        this._scope = $scope;

        this._messageService.getMessages().then((response) => {
        	this.messages = response.data;
		});
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
        this.topIndex = this.messages.length;
        this._scope.$apply()
    }
}

ChatController.$inject = ['MessageService', 'WebSocketService', 'AuthService', '$scope'];
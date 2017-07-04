'use strict'

export default class ChatController {
	constructor(MessageService, WebSocketService, AuthService, $scope) {
        this._messageService = MessageService;
        this._webSocketService = WebSocketService;
        this._authService = AuthService;
        this._webSocketService.subscribe(this);
        this.messages = [];
        this._scope = $scope;
        this.topIndex = 0;

        this._messageService.getMessages().then((response) => {
        	this.messages = response.data;
			//this.topIndex = this.messages.length + 100;
			//console.log(this.topIndex)
		});

        this._scope.$watch('chatCtrl.messages.length', this.updateTopIndex());
	}

	updateTopIndex() {
	    return (oldLength, length) => {
	        if (oldLength === length) {
	            return
            }

	        this.topIndex = Math.max(oldLength, length);
            console.log(this.topIndex)
        }
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
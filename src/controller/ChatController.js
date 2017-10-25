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

    $onChanges(changesObj) {
        if (changesObj.address.currentValue === "Global") {
            this._messageService.getMessages().then((response) => {
                this.messages = response.data;
            });
        } else {
            this.address = changesObj.address.currentValue;
            this._messageService.getMessages(this.getName(), this.address).then((response) => {
                this.messages = response.data;
            });
        }
    }

	getName() {
	    return this._authService.name ? this._authService.name : null;
    }

	send() {
		let message = {
            from: this.getName(),
            text: this.text,
            to: null
        };

		if (this.address && this.address !== 'Global') {
		    message.to = this.address;
		    this.onMessage({message : message})
        }

        this.messages.push(message);
		
		this.text = "";
        this._webSocketService.send(message);
	}

	isMyMessage(message) {
	    return message.from === this.getName()
    }

    receive(message) {
        this._scope.$apply(() => {
            if ((message.address !== null && message.from === this.address) || (this.address === 'Global' && message.from === null)) {
                this.messages.push(message);
                this.topIndex = this.messages.length;
            }
            this.onMessage({message : message})
        });
    }
}

ChatController.$inject = ['MessageService', 'WebSocketService', 'AuthService', '$scope'];
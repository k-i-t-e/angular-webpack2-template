'use strict'

export default class ChatsController {
    constructor(MessageService, AuthService) {
        this._messageService = MessageService;
        this._authService = AuthService;
        this.users = ['Global'];
        this.chats = {
            'Global': null
        };
        this.address = 'Global';

        this.getChats();
    }

    addChat(user) {
        let userTrimmed = user.trim();
        if (user && userTrimmed !== "" && this.users.indexOf(userTrimmed) < 0) {
            this.users.push(userTrimmed);
            this.chats[userTrimmed] = null;
        }

        this.username = '';
    }

    selectChat(user) {
        this.address = user;
    }

    getChats() {
        this._messageService.getChats(this._authService.name).then((response) => {
            response.data.forEach((msg) => {
                if (msg.address === this._authService.name) {
                    this.chats[msg.sender] = msg.text;
                    this.users.push(msg.sender);
                } else {
                    this.chats[msg.address] = msg.text;
                    this.users.push(msg.address);
                }
            });
        })
    }
}

ChatsController.$inject = ['MessageService', 'AuthService'];
'use strict'

export default class ChatsController {
    constructor(MessageService) {
        this._messageSerice = MessageService;
        this.users = ['global'];
        this.chats = {
            'global': null
        };
        this.address = 'global';
    }

    addChat(user) {
        if (user && user.trim() !== "") {
            this.users.push(user);
            this.chats[user] = null;
            this.username = '';
        }
    }

    selectChat(user) {
        this.address = user;
    }
}

ChatsController.$inject = ['MessageService'];
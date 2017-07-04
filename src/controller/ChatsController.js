'use strict'

export default class ChatsController {
    constructor(MessageService) {
        this._messageSerice = MessageService;
        this.chats = {
            'global': null
        }
    }

    addChat(user) {
        this.chats[user] = null
    }
}

ChatsController.$inject = ['MessageService'];
'use strict'

export default class ChatsController {
    constructor(MessageService, AuthService, $scope) {
        this._messageService = MessageService;
        this._authService = AuthService;
        this.users = ['Global'];
        this.chats = {
            'Global': null
        };
        this.unreadCounts = {};
        this.address = 'Global';
        this._scope = $scope;

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
        this.unreadCounts[user] = 0;
    }

    getChats() {
        this._messageService.getChats(this._authService.name).then((response) => {
            response.data.forEach((msg) => {
                if (msg.to === this._authService.name) {
                    this.chats[msg.from] = msg.text;
                    this.users.push(msg.from);
                } else {
                    this.chats[msg.to] = msg.text;
                    this.users.push(msg.to);
                }
            });
        })
    }

    updateChats(message) {
        if (message.to) { // ignore global messages and join/leave
            let user = message.to === this._authService.name ? message.from : message.to;

            if (!this.chats[user]) {
                this.users.push(user);
            }

            this.chats[user] = message.text;

            if (message.from !== this.address && message.to !== this.address) {
                if (this.unreadCounts[user]) {
                    this.unreadCounts[user]++;
                } else {
                    this.unreadCounts[user] = 1;
                }
            }
        }

        console.log(message)
    }

    hasUnread(from) {
        if (from === 'Global') {
            return false;
        }

        return this.unreadCounts[from] && this.unreadCounts[from] > 0;
    }
}

ChatsController.$inject = ['MessageService', 'AuthService', '$scope'];
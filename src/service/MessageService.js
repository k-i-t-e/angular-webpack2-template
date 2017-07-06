'use strict'

export default class MessageService {
    constructor($http, $q) {
        this._data = [{
            sender:"kite",
            text:"ololo"
        }, {
            sender:"kite",
            text:"message!"
        }];

        this._http = $http;
        this._q = $q;
    }

    getMessages(to, from) {
        if (to && from) {
            return this._http.get(`http://localhost:9000/api/messages/${to}/${from}`);
        }

        return this._http.get("http://localhost:9000/api/messages/");
    }

    getChats(user) {
        return this._http.get(`http://localhost:9000/api/chats/${user}`)
    }

    _mockMessages() {
        return this._q((resolve, reject) => {
            resolve({data: this._data})
        })
    }
}
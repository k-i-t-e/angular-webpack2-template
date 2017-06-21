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

    getMessages() {
        //return this._mockMessages()
        return this._http.get("http://localhost:9000/api/messages/kite");
    }

    _mockMessages() {
        return this._q((resolve, reject) => {
            resolve({data: this._data})
        })
    }
}
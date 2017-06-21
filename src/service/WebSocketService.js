'use strict'

export default class WebSocketService {
    constructor($q) {
        this._q = $q;
        this._ws = new WebSocket("ws://localhost:9000/api/chat/kite");
        this._subscribers = [];
        this._init();
    }

    send(message) {
        this._ws.send(JSON.stringify(message))
    }

    subscribe(subscriber) {
        this._subscribers.push(subscriber)
    }

    unsubscribe(subscriber) {
        this._subscribers.filter(s => s != subscriber)
    }

    _getMessage(message) {
        this._subscribers.forEach((s) => s.receive(message))
    }

    _init() {
        this._ws.onopen = function() {
            console.log("Socket has been opened!");
        };

        this._ws.onmessage = (message) => {
            console.log(message);
            this._getMessage(message.data);
        };
    }
}
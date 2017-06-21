'use strict'

export default class WebSocketService {
    constructor($q) {
        this._q = $q;
        this._subscribers = [];
    }

    send(message) {
        if (!this._ws) {
            throw new Error("WebSocketService has not been initiated, call init() method before")
        }

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

    init(name) {
        if (!this._ws) {
            this._ws = new WebSocket("ws://localhost:9000/api/chat/" + name);

            this._ws.onopen = function() {
                console.log("Socket has been opened!");
            };

            this._ws.onmessage = (message) => {
                console.log(message);
                this._getMessage(message.data);
            };
        }
    }
}
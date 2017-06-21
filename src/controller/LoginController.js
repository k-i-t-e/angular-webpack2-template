'use strict'

export default class LoginController {
    constructor(WebSocketService) {
        this._webSocketService = WebSocketService;
    }

    login(name) {
        this._webSocketService.init(name);
    }
}
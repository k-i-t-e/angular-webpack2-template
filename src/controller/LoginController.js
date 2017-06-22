'use strict'

export default class LoginController {
    constructor(WebSocketService, AuthService) {
        this._webSocketService = WebSocketService;
        this._authService = AuthService
    }

    login(name) {
        this._webSocketService.init(name);
        this._authService.name = name;
    }
}

LoginController.$inject = ['WebSocketService', 'AuthService'];
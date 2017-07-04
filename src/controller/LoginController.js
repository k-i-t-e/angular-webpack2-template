'use strict'

export default class LoginController {
    constructor(WebSocketService, AuthService, $state) {
        this._webSocketService = WebSocketService;
        this._authService = AuthService;
        this._state = $state
    }

    login(name) {
        this._webSocketService.init(name);
        this._authService.name = name;
        this._state.go('chats')
    }
}

LoginController.$inject = ['WebSocketService', 'AuthService', '$state'];
routing.$inject = ['$urlRouterProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when(/\/.+/, ['AuthService', '$state', function (AuthService, $state) {
        if (!AuthService.name) {
            $state.go('login')
        }
    }]);

    $urlRouterProvider.otherwise('/');


    let loginState = {
        name: 'login',
        url: '/',
        component: 'login'
    };

    let chatState = {
        name: 'chats',
        url: '/chats',
        component: 'chats'
    };

    $stateProvider.state(loginState);
    $stateProvider.state(chatState);
}
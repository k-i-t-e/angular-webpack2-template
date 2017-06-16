import ChatController from '../controller/ChatController'

export default function ChatDirective() {
	return {
		templateUrl: 'view/ChatDirective.html',
		controller: "ChatController",
		controllerAs: "chatCtrl"
	}
}
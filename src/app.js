'use strict'

import angular from 'angular'
import ChatController from './controller/ChatController'
import LoginController from './controller/LoginController'

import MessageService from './service/MessageService'
import WebSocketService from './service/WebSocketService'

const app = angular.module('chat', []);

app
	.component('chat', {
		templateUrl:'./view/ChatDirective.html',
		controller: ChatController,
		controllerAs:'chatCtrl'
	})
	.component('login', {
		templateUrl: './view/loginComponent.html',
		controller: LoginController
	})
	.service('MessageService', MessageService)
	.service('WebSocketService', WebSocketService);


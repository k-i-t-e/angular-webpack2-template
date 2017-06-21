'use strict'

import angular from 'angular'
import TestController from './controller/TestController'
import ChatController from './controller/ChatController'

import MessageService from './service/MessageService'
import WebSocketService from './service/WebSocketService'

import ChatDirective from './directive/ChatDirective'

const app = angular.module('chat', []);
app.controller('testCtrl', TestController)
	.controller('ChatController', ChatController)
	.service('MessageService', MessageService)
	.service('WebSocketService', WebSocketService)
	.directive('chat', ChatDirective);


'use strict'

import angular from 'angular'
import TestController from './controller/TestController'
import ChatController from './controller/ChatController'
import MessageService from './service/MessageService'
import ChatDirective from './directive/ChatDirective'

const app = angular.module('chat', []);
app.controller('testCtrl', TestController)
	.controller('ChatController', ChatController)
	.service('MessageService', MessageService)
	.directive('chat', ChatDirective);


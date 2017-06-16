'use strict'

import angular from 'angular'
import {test} from './modules/test'
import TestController from './controller/TestController'
import ChatController from './controller/ChatController'
import ChatDirective from './directive/ChatDirective'

const app = angular.module('chat', []);
app.controller('testCtrl', TestController)
	.controller('ChatController', ChatController)
	.directive('chat', ChatDirective)



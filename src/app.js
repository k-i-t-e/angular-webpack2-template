'use strict'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import angularMaterial from 'angular-material';
import glue from 'angularjs-scroll-glue';

import 'angular-material/angular-material.css';
import './css/styles.css'

import ChatController from './controller/ChatController'
import LoginController from './controller/LoginController'

import MessageService from './service/MessageService'
import WebSocketService from './service/WebSocketService'
import AuthService from './service/AuthService'

import routing from './app.config.routing';
import themes from './app.config.themes';

const app = angular.module('chat', [uiRouter, angularMaterial, glue]);

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
	.service('WebSocketService', WebSocketService)
	.service('AuthService', AuthService)
	.config(routing)
	.config(themes);


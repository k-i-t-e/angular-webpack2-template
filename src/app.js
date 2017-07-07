'use strict'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import angularMaterial from 'angular-material';
import glue from 'angularjs-scroll-glue';
import ngMdIcons from 'angular-material-icons'

import 'angular-material/angular-material.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import './css/styles.css'

import ChatController from './controller/ChatController'
import ChatsController from './controller/ChatsController'
import LoginController from './controller/LoginController'

import MessageService from './service/MessageService'
import WebSocketService from './service/WebSocketService'
import AuthService from './service/AuthService'

import routing from './app.config.routing';
import themes from './app.config.themes';

const app = angular.module('chat', [uiRouter, angularMaterial, glue, ngMdIcons]);

app
	.component('chat', {
		templateUrl:'./view/chatComponent.html',
		controller: ChatController,
		controllerAs:'chatCtrl',
        bindings: {
            address:'<',
			onMessage:'&'
        }
	})
	.component('login', {
		templateUrl: './view/loginComponent.html',
		controller: LoginController
	})
    .component('chats', {
        templateUrl:'./view/ChatDirective.html',
        controller: ChatsController,
    })
	.service('MessageService', MessageService)
	.service('WebSocketService', WebSocketService)
	.service('AuthService', AuthService)
	.config(routing)
	.config(themes);


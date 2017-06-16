'use strict'

import angular from 'angular'
import {test} from './modules/test'
import TestController from './controller/TestController'

const app = angular.module('chat', []);
app.controller('testCtrl', TestController);


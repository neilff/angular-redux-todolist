import './_main.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import todoList from '../todo-list';

import MainController from './main-controller';

export default angular
  .module('app.components.main', [
    uiRouter,
    todoList
  ])
  .controller('MainController', MainController)
  .name;

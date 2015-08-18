import angular from 'angular';

import TodoListController from './todo-list-controller';
import todoActionsService from '../../actions/todo-actions';

export default angular
  .module('app.components.todoList', [
    todoActionsService
  ])
  .controller('TodoListController', TodoListController)
  .directive('todoList', function() {
    return {
      restrict: 'E',
      controller: 'TodoListController',
      controllerAs: 'vm',
      bindToController: true,
      template: require('./todo-list-tpl.html'),
    };
  })
  .name;

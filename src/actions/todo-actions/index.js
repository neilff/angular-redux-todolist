import angular from 'angular';

import todoActionsService from './todo-actions-service';

export default angular
  .module('app.actions.todoActions', [])
  .factory('todoActions', todoActionsService)
  .name;

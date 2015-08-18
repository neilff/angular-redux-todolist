import './styles/main.scss';

import angular from 'angular';
import * as redux from 'redux';
import ngRefux from 'ng-redux';

import router from './core/router';
import i18n from './core/i18n';

import main from './components/main';

import reducer from './reducers/todo-reducers.js';

angular
  .module('app', [
    ngRefux,
    main,
    router,
    i18n
  ])
  .run(function ($log) {
    $log.log('application online');
  })
  .config(($ngReduxProvider) => {
    let store = redux.createStore(reducer);
    $ngReduxProvider.setReduxStore(store);
  });

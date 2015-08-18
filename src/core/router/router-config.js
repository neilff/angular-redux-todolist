import template from '../../components/main/main-tpl.html';

export default function routerConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state('main', {
      url: '/main?id?query?filters',
      views: {
        main: {
          template: template,
          controller: 'MainController',
          controllerAs: 'main'
        }
      }
    });
}

routerConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

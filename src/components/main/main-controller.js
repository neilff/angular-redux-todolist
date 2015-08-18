export default class HomeController {
  constructor($ngRedux) {
    this.randomNumber = null;

    $ngRedux.connect(state => state, state => this.state = state);
  }

  generateNumber() {
    this.randomNumber = Math.ceil(Math.random() * 10);
  }
}

HomeController.$inject = ['$ngRedux'];

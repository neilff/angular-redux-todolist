import { VisibilityFilters } from '../../actions/todo-actions/todo-actions-service';

export default class TodoListController {
  constructor($ngRedux, todoActions) {
    this.todos = [];
    this.filteredTodos = [];
    this.todoActions = todoActions;

    $ngRedux.connect(state => state.todos, todos => this.todos = todos);
    $ngRedux.connect(this.selectTodos, filteredTodos => this.filteredTodos = filteredTodos);
  }

  selectTodos({todos, visibilityFilter}) {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
    }
  }

  createTodo(model = '') {
    this.todoActions.addTodo(model);
  }

  removeTodo(idx = null) {
    this.todoActions.completeTodo(idx);
  }

  setVisibility(visibility) {
    let filter = VisibilityFilters[visibility];
    this.todoActions.setVisibilityFilter(filter);
  }
}

TodoListController.$inject = ['$ngRedux', 'todoActions'];

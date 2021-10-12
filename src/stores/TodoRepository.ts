import Repository from '@stores/Repository';
import { TodoItem } from '@screens/todo/constants';

export const TodoRepository = new Repository<TodoItem[]>('Todos', []);

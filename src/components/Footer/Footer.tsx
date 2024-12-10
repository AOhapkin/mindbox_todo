import './Footer.css'
import TasksFilter from '../TasksFilter/TasksFilter';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">COUNTER items left</span>
      <TasksFilter />
      <button type="button" className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}
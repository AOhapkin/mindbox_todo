import './TasksFilter.css'
import { nanoid } from 'nanoid';

export default function TasksFilter() {
  const statuses = ['All', 'Active', 'Completed'];
  const filterItems = statuses.map((status) => (
    <li key={nanoid()}>
      <button type='button'>{status}</button>
    </li>
  ));

  return <ul className="filters">{filterItems}</ul>
}

import Task from '../Task/Task'
import './TaskList.css'

export default function TaskList() {
  return <ul className="task-list">
    <li className='list-item'>
      <Task />
    </li>
    <li className='list-item'>
      <Task />
    </li>
    <li className='list-item'>
      <Task />
    </li>
  </ul>
}
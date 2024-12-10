import './NewTaskForm.css'

export default function NewTaskForm() {
  return (
    <header className="header">
      <h1>Todos</h1>
      <form action="#" className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  )
}
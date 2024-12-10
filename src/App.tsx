import './App.css'
import Footer from './components/Footer/Footer.tsx'
import NewTaskForm from './components/NewTaskForm/NewTaskForm.tsx'
import TaskList from './components/TaskList/TaskList.tsx'

function App() {
  return (
    <section className='todoapp'>
      <NewTaskForm />
      <section className="main">
        <TaskList />
        <Footer />
      </section>
    </section>
  )
}

export default App

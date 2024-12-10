import './Task.css'

export default function Task() {
  return (
    <div className='task'>
      <input type="checkbox" className='toggle' id='toggle' />
      <label htmlFor="toggle">{'taks text'}</label>
    </div>
  )
}
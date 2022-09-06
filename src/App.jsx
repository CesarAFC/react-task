//npm create vite, name, react
//npm install para instalar dependencias
//npm run dev para iniciar proyecto 

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App
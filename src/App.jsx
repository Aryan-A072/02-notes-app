import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task]

    copyTask.push({title, details})
    
    setTask(copyTask)
    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (id) => {
    const remveTask = [...task]

    remveTask.splice(id, 1)

    setTask(remveTask)
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e) => {
          submitHandler(e)
        }}
        className='lg:w-1/2 flex gap-4 p-10 flex-col items-start'>

        <h1 className='font-bold mb-2 text-4xl'>Create Notes</h1>

        <input 
        type='text' 
        placeholder='Enter your title'
        className='w-full font-medium border-2 rounded px-5 py-2 outline-none'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        ></input>
        <textarea 
        type='text' 
        placeholder='Enter your Description'
        className='h-32 w-full font-medium px-5 py-2 outline-none border-2 rounded'
        value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }}
        />
        <button 
        className='w-full bg-white text-black font-medium text-xl outline-none
        px-5 py-2 rounded active:bg-gray-300'>
        Add Note
        </button>

      </form>

        {/* Second Part */}
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='font-bold text-4xl'>Recent Notes</h1>
        <div id='scrll' className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function(elem, idx) {

            return <div key={idx}
            className="min-h-52 h-fit w-40 flex justify-between flex-col items-start bg-cover rounded-xl pt-9 pb-4 px-4 relative bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg text-black font-bold'>{elem.title}</h3>
                <p className='leading-tight font-semibold text-gray-600 text-xs mt-2 whitespace-break-spaces'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }}
              className='mt-1 w-full bg-red-500 rounded text-xs font-bold text-white py-1 active:scale-95 active:bg-red-600'>
                Delete
              </button>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App
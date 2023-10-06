"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) =>
  {
    e.preventDefault()
    console.log(title)
    console.log(desc)

    setmainTask([...mainTask, {title,desc}]) // storing the data and maintaining the previous data in the same variable

    setdesc("")
    settitle("")

    console.log(mainTask)
  }

  const deleteHandler = (i) =>
  {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2 className='font-bold'>No Available Tasks</h2>
  if(mainTask.length>0)
  {
    renderTask = mainTask.map((t,i) =>
    {
      return(
        <li key={i} className='flex items-center justify-between'>
          <div className='mb-5'>
            <h2 className='text-3xl font-semibold'>{t.title}</h2>
            <p className='text-2xl font-semibold'>{t.desc}</p>
          </div>
          <button
          onClick={() => 
          {
            deleteHandler(i)
          }}
          className='bg-red-400 font-bold text-white px-4 py-2 rounded'>Completed</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My ToDo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter Your Task' className='border-zinc-800 m-5 text-2xl border-4 px-4 py-2' 
        value={title} //displaying the input in the input field
        onChange={(e)=>
        {
          //console.log(e.target.value)
          settitle(e.target.value) //setting the value in the title variable
        }}
        ></input>
        <input type='text' placeholder='Enter Description Here' className='border-zinc-800 m-5 text-2xl border-4 px-4 py-2'
        value={desc}
        onChange={(e)=>
        {
          //console.log(e.target.value)
          setdesc(e.target.value)
        }}
        ></input>
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-500'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page
import React from 'react'
import { Irecipes } from '../types/tasks';

interface DisplayRecipes
{
tasks:Irecipes[];
}
const Recipelist:React.FC<DisplayRecipes>=({tasks})=>{
   {
    return (
        <>
      <div>
        {tasks.map(task=>
        (
        <span key={task.id}>{task.text}</span>
        )
        )
      }
      </div>
      </>
    )
  }
}

export default Recipelist


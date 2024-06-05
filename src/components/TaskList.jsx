import React from 'react'
import Task from './Task'
export default function TaskList(props){
    const listtask=props.task.map((task)=>{
        return <Task key={task.id} task={task}/>
    })
    return(
        <div class="flex flex-col gap-y-5">
            {listtask}

        </div>
    )
}

import React from 'react'
import Button from './Button'
export default function Task(props){
    return(
        <div class="flex gap-x-2">
            <p class="grow bg-gray-300">{props.task.name}</p>
            <Button text={'Delete'}/>
            <Button text={'Edit'}/>
        </div>
    )
}

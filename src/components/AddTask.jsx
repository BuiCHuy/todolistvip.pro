import React from 'react'
import Button from './Button'
export default function AddTask(props){
    return(
        <div>
            <form action="" class="flex flex-col">
                <input name={'id'} type="text" placeholder='add item...'/>
                <Button text={'Add Task'}/>
            </form>
        </div>
    )
}

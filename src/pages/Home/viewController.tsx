import { useState } from "react"
import {v4 as uuidv4} from 'uuid'  

interface TaskProps {
    id: number | string
    title: string
    body: string
}

export const ViewController = () =>{
    const [tasks, setTasks] = useState<TaskProps[]>([
        {
        id: uuidv4(),
        title: 'This is an test',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam quas, officiis tempore fuga ab perspiciatis fugiat doloribus, perferendis consectetur porro, aut placeat asperiores dicta facilis libero in corporis magnam!'
    },
        {
        id: uuidv4(),
        title: 'This is an test',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam quas, officiis tempore fuga ab perspiciatis fugiat doloribus, perferendis consectetur porro, aut placeat asperiores dicta facilis libero in corporis magnam!'
    },
        {
        id: uuidv4(),
        title: 'This is an test',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam quas, officiis tempore fuga ab perspiciatis fugiat doloribus, perferendis consectetur porro, aut placeat asperiores dicta facilis libero in corporis magnam!'
    },
        {
        id: uuidv4(),
        title: 'This is an test',
        body: 'klçklhf hgfhlfgh fghgfh'
    },
        {
        id: uuidv4(),
        title: 'This is an test',
        body: 'klçklhf hgfhlfgh fghgfh'
    },
        {
        id: uuidv4(),
        title: 'This is an test',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam quas, officiis tempore fuga ab perspiciatis fugiat doloribus, perferendis consectetur porro, aut placeat asperiores dicta facilis libero in corporis magnam!'
    },
])
    return {
        tasks
    }
}

import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";


const url = 'https://jsonplaceholder.typicode.com/todos/1';

export const getTodos = () => { 
    return axios.get(url);
}

interface Todo{
    id: number,
    title: string,
    completed: boolean
  }

 const qwerty = async () => { 
  try {
    const resp = await getTodos();
    const data =  resp.data as Todo
    console.log('data', data);

    const { completed, id, title } = data;

    logTodo( id, title, completed)

  } catch (error) {
    
  }

 }
 qwerty()


const logTodo = (
    id: number,
    title: string,
    completed: boolean) => {
  
  console.log(`
    ID: ${id}
    TITLE: ${title}
    COPLETED: ${completed}
  `);
}


const arr = ['a', 'b', 'c'  ]
const arr1: Array<number> = [1, 2];
const arr2 : string[][] = [];

type myType = (string | number)
const arr3: myType[]=[];

arr3.push(3, 'a')

console.log('arr3', arr3)



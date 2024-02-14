
import {Irecipes} from "./types/tasks";

const baseUrl='http://localhost:3000/';

export const getAllTodos=async():Promise<Irecipes[]>=>
{
const res=await fetch(`${baseUrl}/api/recipes/${User_id}`);

const todos=await res.json();

return todos;

}
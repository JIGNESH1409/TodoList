const todoKey="reactTodo";
export const getlocalStorage=()=>{
    const Gettodo=localStorage.getItem(todoKey);
    if(!Gettodo){
      return [];
    }
    return JSON.parse(Gettodo)
};
export const setlocalstorage=(task)=>{
     localStorage.setItem(todoKey,JSON.stringify(task))
} 
 

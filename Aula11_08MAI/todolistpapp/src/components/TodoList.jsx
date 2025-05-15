import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

export default function TodoList() {
    const tasks = ["Uma tarefa", "Outra tarefa", "Alguma coisa", "mais um" ]

    fetch("http://localhost:3000/tasks/").then((res) => {
        console.log("res",res);
        res.json().then((data) => {
            console.log("data",data);  
                      
        })
    })

    return (
        <>
            <TaskForm />
            { tasks.map((tarefa) => <TaskItem nome={tarefa} key={tarefa} /> ) }
        </>
    )
}
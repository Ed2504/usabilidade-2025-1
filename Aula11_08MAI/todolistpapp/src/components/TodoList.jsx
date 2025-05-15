import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

export default function TodoList() {
    const tasks = ["Uma tarefa", "Outra tarefa", "Outra tarefa", "Alguma coisa", "mais um" ]

    return (
        <>
            <TaskForm />
            { tasks.map((tarefa) => <TaskItem nome={tarefa} key={tarefa} /> ) }
        </>
    )
}
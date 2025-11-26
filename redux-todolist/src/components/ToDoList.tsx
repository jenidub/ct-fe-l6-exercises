import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../redux/store";
import { addTask, removeTask, toggleCompleted } from "../redux/todoReducer";

const ToDoList = () => {
    const { toDoList } = useSelector((state: RootState) => state.toDoList);
    console.log(toDoList);

    const dispatch = useDispatch<AppDispatch>();
    const [ newTaskName, setNewTaskName ] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTask(newTaskName));
    }

    return(
        <>
            <h1 style={{margin: "10px 0px",}}>JeniDub ToDo List</h1>
            <h2 style={{margin: "0px",}}><em>The Redux Remix</em></h2>
            <div>
                {toDoList.length !== 0 ? 
                    toDoList.map(item => {
                        return (
                            <div key={item.name}>
                                <h3>{item.name}</h3>
                                <p><i>{item.completed ? `[=>] Completed` : `[X] Not Yet Completed`}</i></p>
                                <Form>
                                    <Form.Check
                                        type={`checkbox`}
                                        id={`default-${"checkbox"}`}
                                        label={`Remove Task`}
                                        checked={!item.active}
                                        onChange={() => dispatch(removeTask(item.name))}
                                    />
                                    <Form.Check
                                        type={`checkbox`}
                                        id={`default-${"checkbox"}`}
                                        label={`Mark Task Completed`}
                                        checked={!item.active}
                                        onChange={() => dispatch(toggleCompleted(item.name))}
                                    />
                                </Form>
                            </div>
                        )})
                    :
                    <h2>No Items in the To Do List</h2>
                }
            </div>
            <hr style={{margin: "30px 0px"}} />
            <div>
                <Form onSubmit={handleSubmit}>
                        <div style={{margin: "10px 0px", fontWeight: "700"}}>
                            <Form.Label>Enter the New Task Name</Form.Label>
                        </div>
                        <Form.Control
                            type="text"
                            id="newTask"
                            aria-describedby="taskName"
                            onChange={(e) => setNewTaskName(e.target.value)}
                        />
                    <div style={{margin: "10px 0px",}}>
                        <Button type="submit">Add Task</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default ToDoList;

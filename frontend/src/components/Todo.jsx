/* eslint-disable */
function Todo({ alltodos, setTodos }) {
    
    function handleCompletion(id) {
        console.log("Sending PUT REQUEST");
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        }).then(response => {
            const res = response.json();
            if (!response.ok) {
                throw new Error("Failed to update todo");
            }
            return res;
        }).then(updatedTodo => {
            setTodos(prevTodos =>
              prevTodos.map(todo =>
                todo._id === id ? { ...todo, completed: true } : todo
              )
            );
          }).catch(error => {
            console.error("Error:", error);
            alert("Failed to mark todo as completed.");
        });
    }

    return (
        <>
            <div>
                {alltodos && alltodos.length > 0 ? (
                    alltodos.map(todo => (
                        <div key={todo._id}>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button onClick={() => handleCompletion(todo._id)} disabled={todo.completed}>
                                {todo.completed ? "Completed" : "Mark as complete"}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No todos available</p>
                )}
            </div>
        </>
    );
}

export default Todo;
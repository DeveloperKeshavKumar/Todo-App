/* eslint-disable react/prop-types */
{/* <div>
    <h1>Title:</h1>
    <p>Description: </p>
    <button>Mark as completed</button>
</div> */}
function Todo({ todos }) {
    return (<>
        {
            todos.map(function (todo, index) {
                return (
                    <div key={index}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
                    </div>
                )
            })
        }
    </>
    );
}

export default Todo;
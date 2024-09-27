import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState(""); // causes a lot of rerendering          <---  ^
    const [description, setDescription] = useState(""); // exploits the main use of react |
    function sendData() {
        // fetch("http://localhost:3000/todos",{
        //     method: "POST",
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({
        //         title: document.getElementById('title').value,
        //         description:document.getElementById('description').value
        //     })
        // })

        // But if ye document.xyxy use hi krna hai to React ki kya zroorat.
        // There are 2 ways of handling this in react: 1.) Unoptimal Wiely used (local state variables) 2.) Optimal less used (react-query)


        fetch("http://localhost:3000/todos",{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({title,description})
        })
    }
    return (<>
        <form>
            <input type="text" placeholder="Title" id="title" name="" onChange={function (e) {
                const val = e.target.value;
                setTitle(val);
            }} /> <br />
            <input type="text" placeholder="Description" id="description" onChange={function (e) {
                const val = e.target.value;
                setDescription(val);
            }} /><br />
            {/* How to send data to backend  */}

            <button type="submit" onClick={sendData}>Add To-Do</button>
        </form>
    </>);
}

// export default CreateTodo;
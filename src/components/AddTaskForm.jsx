const AddTaskForm = ({onAdd}) => {
    let input = "";

    return (
        <div className="mt-10 lg:w-2/4 mx-auto px-2">
            <form>
                <div className="flex ">
                    <input type="text" className="form-control shadow-md w-3/4 p-3"  placeholder="What next do you have today?" id="addFormInput" onChange={(e) => {
                        input = e.target.value;
                    }}/>

                    <button className="bg-green-600 py-2 px-3 text-white shadow rounded w-1/4" onClick={(e) => {
                        e.preventDefault();
                        onAdd(input, false)
                        document.querySelector("#addFormInput").value = "";
                    }}>Submit</button>
                </div>
            </form>
        </div>
    );
}


export default AddTaskForm;

import {useSelector, useDispatch} from "react-redux";
import {submitData} from "../store/userReducer";
import {useState} from "react";

const UserForm = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState('')
    const userData = useSelector(state => state)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(submitData(name, age, gender))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange={event => setName(event.target.value)}/><br/>

                <label>Age:</label>
                <input type="number" onChange={event => setAge(Number(event.target.value))}/><br/>

                <label>Gender:</label>
                <select onChange={event => setGender(event.target.value)}>
                    <option value="">Choose</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br/>

                <input type="submit" value="Submit my info"/>
            </form>

            <div>
                <h2>Your information</h2>
                <p>Your name: {userData.name}</p>
                <p>Your age: {userData.age}</p>
                <p>Your gender: {userData.gender}</p>
            </div>
        </div>
    );
};

export default UserForm;
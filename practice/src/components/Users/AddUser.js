import classes from "./AddUser.module.css"
import { useState } from 'react'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        username: '',
        age: ''
    });
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (formData.username.trim().length === 0 || formData.age.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter valid name and age (non-empty values)."
            })
            return
        }
        if (+formData.age < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)."
            })
            return;
        }
        onAdd(formData)
        setFormData({
            username: '',
            age: ''
        })
    }
    const handleChange = (event) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [event.target.id]: event.target.value
            }
        })
    }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <div>
            {error &&
                <ErrorModal onConfirm={errorHandler} {...error} />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="username" type="text" onChange={handleChange} value={formData.username} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={handleChange} value={formData.age} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;

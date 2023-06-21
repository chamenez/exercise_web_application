import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ( props ) => {

    const [name, setName] = useState(props.exerciseToEdit.name);
    const [reps, setReps] = useState(props.exerciseToEdit.reps);
    const [weight, setWeight] = useState(props.exerciseToEdit.weight);
    const [unit, setUnit] = useState(props.exerciseToEdit.unit);
    const [date, setDate] = useState(props.exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date}
        const response = await fetch(`/exercises/${props.exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Edit Exercise</h1>
            <input
                type="text"
                // placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                // placeholder="Enter reps here"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                // placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select value = {unit} onChange={e => setUnit(e.target.value)}>
                {/* <option>--Please select a unit--</option> */}
                <option value = "lbs">lbs</option>
                <option value = "kgs">kgs</option>
            </select>
            <input
                type="text"
                // placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={editExercise}
            >Save</button>
        </div>
    );
}

export default EditExercisePage;
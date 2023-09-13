import React from 'react'
import Form from '../Form';

export default function NewStudio(props) {
    const saveStudioDataHandler = (enteredStudioData) => {
        const studioData = {
            ...enteredStudioData,
            id: Math.random().toString()
        };
       props.onAddStudio(studioData);
    }

    return (
    <div>
        <Form onSaveStudioData = {saveStudioDataHandler} />
    </div>
  )
}

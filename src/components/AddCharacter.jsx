import { useState } from "react"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function AddCharacter( {createCharacter} ) {

    const [createNewCharacter, setNewCharacter] = useState({
        fullName: "",
        title: "",
        family: "",
        imageUrl: "",
    })

    function onInput(e) {
        setNewCharacter({...createNewCharacter, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        createCharacter(createNewCharacter);
        setNewCharacter({ fullName: "", title: "", family: "", imageUrl: "" });
}

    return (
        <Box 
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                mx: "auto",
                mt: 4,
            }}>
            <TextField
                id="outlined-basic"
                label="Nombre del personaje"
                variant="outlined"
                name="fullName"
                value={createNewCharacter.fullName}
                onChange={onInput}
            />
            <TextField
                id="outlined-basic"
                label="Titulo del personaje"
                variant="outlined"
                name="title"
                value={createNewCharacter.title}
                onChange={onInput}
            />
            <TextField
                id="outlined-basic"
                label="Familia del personaje"
                variant="outlined"
                name="family"
                value={createNewCharacter.family}
                onChange={onInput}
            />
            <TextField
                label="URL de imagen"
                variant="outlined"
                name="imageUrl"
                value={createNewCharacter.imageUrl}
                onChange={onInput}
            />
            <Button type="submit" variant="contained">CREAR</Button>
        </Box>
    )
}

export default AddCharacter
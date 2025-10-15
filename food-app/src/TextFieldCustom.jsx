import { TextField } from '@mui/material'
import React from 'react'

const TextFieldCustom = ({ label, name, value, type, method, error }) => {
    return (
        <>
            <TextField
                fullWidth
                label={label ? label : ""}
                variant="outlined"
                margin="normal"
                name={name}
                type={type}
                value={value}
                error={error}
                onChange={(e) => method(e, e.target.name, e.target.value)}
                sx={{
                    input: { color: "white" },
                    label: { color: "#ccc" },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#ccc",
                        },
                        "&:hover fieldset": {
                            borderColor: "#fff",
                        },
                    },
                }}
            />
        </>
    )
}

export default TextFieldCustom
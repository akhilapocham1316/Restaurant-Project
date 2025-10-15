import React, { useState } from 'react'
import Reviews from './Reviews'
import { Box, Button, Typography } from '@mui/material'
import TextFieldCustom from './TextFieldCustom'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    date: "",
    guests: "",
    comments: ""
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    navigate("/")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value })
  }

  return (
    <>
      <Box>
        <Typography variant="h4" className="text-center fw-bold black-icon" style={{ marginTop: "6rem" }}>
          Book A Table
        </Typography>

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          gap: "12rem",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem"
        }}>

          <Box sx={{ maxWidth: "400px", textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Where to find us
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: "600px", mb: 5 }}>
              47 Baker Street, Hyderabad, India
            </Typography>
            <Typography sx={{ mb: 2 }} variant='h4'>Opening hours</Typography>
            <Typography sx={{ mb: 2 }} variant='body1'>Mon - Fri: 09:00 - 17:00</Typography>
            <Typography sx={{ mb: 2 }} variant='body1'>Sat - Sun: 10:00 - 15:00</Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: "700px", width: "100%", backgroundColor: "black", padding: "4rem" }}>

            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>

              <TextFieldCustom
                label={"First Name"}
                name={"firstName"}
                value={contactData.firstName}
                method={handleChange}
                type={"text"}
                error={""}
              />

              <TextFieldCustom
                label={"Last Name"}
                name={"lastName"}
                value={contactData.lastName}
                method={handleChange}
                type={"text"}
                error={""}
              />

            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>

              <TextFieldCustom
                label={"Phone Number"}
                name={"phoneNumber"}
                value={contactData.phoneNumber}
                method={handleChange}
                type={"number"}
                error={""}
              />

              <TextFieldCustom
                label={"Email"}
                name={"email"}
                value={contactData.email}
                method={handleChange}
                type={"email"}
                error={""}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
              <TextFieldCustom
                name={"date"}
                value={contactData.date}
                method={handleChange}
                type={"date"}
                error={""}
              />

              <TextFieldCustom
                label={"No Of Guests"}
                name={"guests"}
                value={contactData.guests}
                method={handleChange}
                type={"number"}
                error={""}
              />
            </Box>

            <TextFieldCustom
              label={"Comments"}
              name={"comments"}
              value={contactData.comments}
              method={handleChange}
              type={"text"}
              error={""}
              multiline={true}
              rows={4}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="error"
              sx={{ mt: 2, fontWeight: "bold", fontSize: "18px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      <Reviews />
    </>
  )
}

export default Contact

import React, { useState, useEffect } from "react";
import axios from 'axios';

// CreateSong component
const CreateSong = () => {
    const [formValues, setFormValues] = useState({ title: '', artist: '', rating: '' })
    // onSubmit handler
    const onSubmit = songObject => {
        axios.post()
    }
}
import React, { useEffect } from "react";
import axios from "../config/axios.config";

const Main = () => {

    useEffect(() => {
        axios.get('/todos').then(({data}) => console.log(data) )
    }, []);

    return (
      <div>Hello</div>
    )
};

export default Main;
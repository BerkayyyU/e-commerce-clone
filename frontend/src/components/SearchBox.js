import React, { useState } from "react";

export default function SearchBox(props){
    const [name, setName] = useState('');
    const submitHandler = (e) => {
        e.preventDefault(); // We are not gonna refresh this page
        props.history.push(`/search/name/${name}`)
    }

    return (
        <form className="search" onSubmit={submitHandler}>
            <div className="row">
                <input type="text" name="q" id="q" onChange={(e)=> setName(e.target.value)}></input>
                <button className="primary" type="submit">Ara</button>
            </div>
        </form>
    )
}
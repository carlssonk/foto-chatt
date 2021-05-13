import React from "react";
// ###########################################################
// Temporär page. Funktionaliteten här kommer vara i Chat.jsx
// ###########################################################

function Home() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/global", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ msg: "hello" }),
        });
        const data = await res.json();
        console.log(data);
    };

    return (
        <>
            <h2>Home Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" />
            </form>
        </>
    );
}

export default Home;

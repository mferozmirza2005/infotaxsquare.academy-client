import Lobby from "./components/Lobby/Lobby";
// import Room from "./components/Room/Room";
import React, { Fragment } from "react";
// import { Routes, Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Lobby />
                {/* <Routes>
                    <Route path="/" element={<Lobby />} />
                    <Route path="/room/:roomId" element={<Room />} />
                </Routes> */}
            </Fragment>
        );
    }
}

export default App
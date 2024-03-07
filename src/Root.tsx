import { createRoot, Root } from "react-dom/client";
import { SocketProvider } from "./contexts/SocketProvider";
// import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";

class Index {
    root:Root = createRoot(document.getElementById("root"));

    InitializeRoot = ()=>{
        this.root.render(
            <React.StrictMode>
                {/* <BrowserRouter> */}
                    <SocketProvider>
                        <App />
                    </SocketProvider>
                {/* </BrowserRouter> */}
            </React.StrictMode>
        );

        return this.root;
    }
}

export default Index;
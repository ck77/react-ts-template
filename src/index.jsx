import React from 'react';
import { createRoot } from "react-dom/client";

const Main = () => <h1>Hi Orange！</h1>;

const root = createRoot(document.getElementById("root"));
root.render(
    <Main />
);
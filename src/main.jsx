import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Section from "./components/section";
import Div1 from "./components/div1";
import Div2 from "./components/div2";
import Form from "./components/form";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    { 
      <header>
        <div>
          <h1>Main</h1>
        </div>
        <div>
          <h1>Section</h1>
        </div>
        <div>
        <h1>div</h1>
        </div>
        <div>
        <h1>div</h1>
        </div>
        <div>
        <h1>Form</h1>
        </div>
      </header>
    }
    <Section />
    <Div1 />
    <Div2 />
    <Form />
  </StrictMode>
);

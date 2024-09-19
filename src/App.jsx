import React from "react";
import Item from "./components/item/index.js";
import Content from "./components/content/index.js";
import Buttons from "./components/buttons/index.js";

const image1 = 'https://plus.unsplash.com/premium_photo-1676465057173-6828122f7d28?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

function App() {
  return (
    <div className="w-full flex flex-col items-center gap-2 ">
      <div className="w-[829px] h-[646px] mt-28">
        <div className="w-full">
          
          <Content title={"Title"} subtitle={"subtitle"}/>
          
          <div className="w-full flex flex-col items-center mt-4 mx-6"> <Buttons/> </div>
        </div>
        <div className="w-full gap-1 px-2 ">
          <Item image={image1} title={"Item 1"}/>
          <Item image={image1} title={"Item 2"}/>
          <Item image={image1} title={"Item 3"}/>
        </div>
      </div>
    </div>
  );
}

export default App;


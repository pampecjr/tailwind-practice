import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2 m-[0px]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

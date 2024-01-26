import React from "react";
import Cards from "./components/Cards";
import Heading from "./components/Heading";

export default function App() {
  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <div className="wrapper | mx-2 mt-2">
          <Heading />
          <Cards />
        </div>
      </main>
    </>
  );
}

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

// Next, I Open this Project Make sure I have to change the media quries break points

// Day 1:- Leaving with A completed Card Layout.
// Tomorrow, have to fix the margin-top and bottom for the Cards Sections and I have to make some minor changes and Also has to learn about how to make a sidebar

import React from "react";

export default function Heading() {
  return (
    <>
      <article>
        <div className="header-bg | grid gap-2 text-center p-8 md:p-14">
          <div className="heading-content">
            <h1 className="text-[57px] md:text-[88px] xl:text-[112px]">
              Sameer
            </h1>
            <span>
              A Driven and passinate Frontend Developer for creating engaging
              and interactive UI, seeking for a opportunity in real world.
            </span>
          </div>
          <div className="heading-btn | flex gap-2 justify-center">
            <a
              className="bg-blue-600 rounded-[48px] text-blue-50 text-2xl p-4 active:rounded-2xl transition-all duration-300 ease-in-out"
              // href=""
            >
              See my work
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

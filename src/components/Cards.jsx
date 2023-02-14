import React from "react";

export default function Cards() {
  return (
    <>
      <div>
        <div className="margin-wrapper | m-6">
          <h2 className="font-medium mb-2 text-4xl md:text-5xl">Projects</h2>
        </div>
        <div className="card-wrapper | grid gap-2 md:grid-cols-2 xl:grid-cols-6 grid-flow-row">
          <article className="border-none rounded-3xl bg-red-500 xl:col-span-2">
            <div className="flex flex-col justify-between bg-emerald-400 rounded-3xl w-full h-full overflow-hidden">
              <div
                className="bg"
                style={{
                  backgroundImage: 'url("/src/assets/bg-dark.jpg")',
                }}
              ></div>

              <div className="Content | bg-purple-500 grid gap-2 m-6 self-start w-full">
                <span className="text-2xl font-medium">Accordion</span>
                <div className="Tech-Logos">
                  <span>CSS</span>
                </div>
                <span className="text-sm md:text-base">
                  A Simple and Beautifull Accordion
                </span>
                <div className="flex gap-2">
                  <a
                    className=" bg-yellow-400 rounded-[48px] px-6 py-3 font-medium shadow z-10 active:rounded-2xl transition-all duration-300 ease-in-out"
                    // href=""
                    target={"_blank"}
                  >
                    Try it
                  </a>
                  <a
                    className="bg-yellow-400 rounded-[48px] px-6 py-3 font-medium shadow z-10 active:rounded-2xl transition-all duration-300 ease-in-out"
                    // href=""
                    target={"_blank"}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="border-none rounded-3xl bg-red-500 xl:col-span-2">
            <div className="flex flex-col justify-between bg-emerald-400 rounded-3xl w-full h-full overflow-hidden">
              <div
                className="bg"
                style={{
                  backgroundImage: 'url("/src/assets/bg-light.jpg")',
                }}
              ></div>

              <div className="Content | bg-purple-500 grid gap-2 m-6 self-start w-full">
                <span className="text-2xl font-medium">Accordion</span>
                <div className="Tech-Logos">
                  <span>CSS</span>
                </div>
                <span className="text-sm md:text-base">
                  A Simple and Beautifull Accordion
                </span>
                <div className="flex gap-2">
                  <a
                    className=" bg-yellow-400 rounded-[48px] px-6 py-3 font-medium shadow z-10 active:rounded-2xl transition-all duration-300 ease-in-out"
                    // href=""
                    target={"_blank"}
                  >
                    Try it
                  </a>
                  <a
                    className="bg-yellow-400 rounded-[48px] px-6 py-3 font-medium shadow z-10 active:rounded-2xl transition-all duration-300 ease-in-out"
                    // href=""
                    target={"_blank"}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="border-none rounded-3xl bg-red-500 xl:col-span-2">
            <div className="flex flex-col justify-between bg-emerald-400 rounded-3xl w-full h-full overflow-hidden">
              <div
                className="bg"
                style={{
                  backgroundImage: 'url("/src/assets/bg-dark.jpg")',
                }}
              ></div>

              <div className="Content | bg-purple-500 grid gap-2 m-6 self-start w-full">
                <span className="text-2xl font-medium">Accordion</span>
                <div className="Tech-Logos">
                  <span>CSS</span>
                </div>
                <span className="text-sm md:text-base">
                  A Simple and Beautifull Accordion
                </span>
                <div className="flex gap-2">
                  <a
                    className=" bg-yellow-400 rounded-[48px] px-6 py-3 font-medium shadow z-10 active:rounded-2xl transition-all duration-300 ease-in-out"
                    // href=""
                    target={"_blank"}
                  >
                    Try it
                  </a>
                  <a
                    className="bg-yellow-400 rounded-[48px] px-6 py-3 font-medium shadow z-10 active:rounded-2xl transition-all duration-300 ease-in-out"
                    // href=""
                    target={"_blank"}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

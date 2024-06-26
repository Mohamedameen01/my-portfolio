import React from "react";

function Skills() {
  return (
    <section
      id="about"
      className="flex flex-col items-center md:items-start md:pl-5 max-w-[1280px] h-max text-white mx-auto "
    >
      <h1 className="font-semibold capitalize text-xl md:text-2xl m-4">
        What i know
      </h1>
      <div className="rounded-lg bg-gray-900 w-fit uppercase p-4 grid grid-cols-2 md:flex">
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          html
        </h1>
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          css
        </h1>
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          javascript
        </h1>
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          react
        </h1>
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          node js
        </h1>
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          mongodb
        </h1>
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          firebase
        </h1>
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          git&github
        </h1>
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          tailwind css
        </h1>
        <h1 className="rounded-lg p-2 bg-black w-fit m-3  hover:scale-105">
          bootstrap
        </h1>
      </div>
    </section>
  );
}

export default Skills;

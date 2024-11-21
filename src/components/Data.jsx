import React from "react";

export default function Data({title, desc}) {
  return (
    <div className="border-2 border-black m-2 p-2 w-1/2 rounded-xl">
      <div class="m-2 p-2">
        <label for="task-title" class="font-extrabold font-mono text-lg">
          Title:
        </label>
        <br />
        <input
          className="border-2 border-black rounded-lg"
          type="text"
          id="task-title"
          value={title}
        />
      </div>
      <div class="m-2 p-2">
        <label for="task-desc" class="font-extrabold font-mono text-lg">
          Description:
        </label>
        <br />
        <input
          className="border-2 border-black rounded-lg"
          type="text"
          id="task-desc"
          values={title}
        />
      </div>
      <div className="flex flex-row justify-end m-1 p-1">
        <button
          type="button"
          class="text-white bg-green-700 hover:bg-green-800  font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
        >
          SAVE
        </button>
      </div>
    </div>
  );
}

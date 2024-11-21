import React from "react";
import QuotesFetcher from "./QuoteFetcher";

export default function SideBar() {
  return (
    <div className="side-bar border-black border-2 min-h-full rounded-lg">
      <div className="todo-list">
        <h1 className="font-bold text-2xl m-2 font-mono text-center">
          TODO List
        </h1>
      </div>
      <div className="action-buttons flex flex-col items-center p-2">
      <button
          type="button"
          class="text-black-700 hover:text-white border border-black-700 hover:bg-black font-medium rounded-lg text-sm px-5 py-2 m-2 w-full text-center  "
        >
          Add new TODO
        </button>
        <button
          type="button"
          class="text-black-700 hover:text-white border border-black-700 hover:bg-black font-medium rounded-lg text-sm px-5 py-2 m-2 w-full text-center  "
        >
          Show all TODO(s)
        </button>
        <button
          type="button"
          class="text-black-700 hover:text-white border border-black-700 hover:bg-black font-medium rounded-lg text-sm px-5 py-2 m-2 w-full text-center  "
        >
          Completed TODO(s)
        </button>
      </div>
      <div className="quotes">
        <QuotesFetcher />
      </div>
    </div>
  );
}

import React from "react";

export default function ViewButtons() {
  return (
    <div>
      <div class="inline-flex rounded-md shadow-sm m-2" role="group">
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10  focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        >
          Today
        </button>
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10  focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        >
          This Week
        </button>
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10  focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        >
          This Month
        </button>
      </div>
    </div>
  );
}

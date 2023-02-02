import React from 'react'

const Search = () => {
  return (
    <div className="flex flex-col justify-evenly items-center py-5 md:flex-row">
      <div className="flex pb-2 text-md justify-center items-center md:pb-0">
        <label>My doctor:</label>
        <select className="text-md px-1">
          <option selected>Choose a doctor</option>
          <option>Dr. Baskin</option>
          <option>Dr. Ngo</option>
          <option>Dr. Cameron</option>
          <option>Dr. Howard</option>
          <option>Dr. Camargo</option>
        </select>
      </div>
      <div className="flex px-5">
        <input
          type="text"
          className="flex text-left px-10 py-2 text-boablue bg-white border rounded-l-lg focus:border-boablue focus:outline-none"
          placeholder="Search for any drug..."
        />
        <button className="px-5 text-white bg-boablue rounded-r-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Search


import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { JobCategories, JobLocations } from '../assets/assets'

const AddJobs = () => {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState('Banglore')
  const [category, setCategory] = useState('Programming')
  const [level, setLevel] = useState('Beginner level')
  const [salary, setSalary] = useState(0)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      })
    }
  }, [])

  return (
    <div className="w-full p-0 m-0"> 
     <form className="flex flex-col gap-6 max-w-5xl w-full mx-auto px-6 pt-0 mt-0">

        {/* Job Title */}
        <div>
          <p className="text-sm font-medium mb-1">Job Title</p>
          <input
            type="text"
            placeholder="Type here"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* Job Description */}
        <div>
          <p className="text-sm font-medium mb-1">Job Description</p>
          <div
            ref={editorRef}
            className="bg-white border border-gray-300 rounded-md min-h-[130px]"
          />
        </div>

        {/* Dropdowns Row */}
        <div className="flex flex-wrap gap-4">
          {/* Job Category */}
          <div className="flex-1 min-w-[200px]">
            <p className="text-sm font-medium mb-1">Job Category</p>
            <select
              onChange={e => setCategory(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-blue-400"
            >
              {JobCategories.map((category, i) => (
                <option key={i} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Job Location */}
          <div className="flex-1 min-w-[200px]">
            <p className="text-sm font-medium mb-1">Job Location</p>
            <select
              onChange={e => setLocation(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-blue-400"
            >
              {JobLocations.map((location, i) => (
                <option key={i} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* Job Level */}
          <div className="flex-1 min-w-[200px]">
            <p className="text-sm font-medium mb-1">Job Level</p>
            <select
              onChange={e => setLevel(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="Beginner level">Beginner level</option>
              <option value="Intermediate level">Intermediate level</option>
              <option value="Senior level">Senior level</option>
            </select>
          </div>
        </div>

        {/* Salary */}
        <div className="w-[200px]">
          <p className="text-sm font-medium mb-1">Job Salary</p>
          <input
            type="number"
            placeholder="2500"
            value={salary}
            onChange={e => setSalary(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white rounded-md">ADD</button>
      </form>
    </div>
  )
}

export default AddJobs

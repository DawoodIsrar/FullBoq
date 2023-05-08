import React from 'react'

function UpdateProfile() {
  return (
    <>
     <div className="flex items-center justify-center  mx-6 my-4">
            <div className="w-full max-w-sm">
              <form action="/password/email" className="w-full  p-8">
                <div>
                  <label
                    htmlFor="old-password"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="password"
                    id="old-email"
                    className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                    value=""
                    required=""
                    autoFocus=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="password"
                    id="new-email"
                    className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                    value=""
                    required=""
                    autoFocus=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone No
                  </label>
                  
                  <input
                    type="password"
                    id="new-email"
                    className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                    value=""
                    required=""
                    autoFocus=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                 Address
                  </label>
                  <input
                    type="password"
                    id="new-email"
                    className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                    value=""
                    required=""
                    autoFocus=""
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 w-full"
                >
                  <span>Update Email</span>
                </button>
              </form>
            </div>
          </div>
    </>
  )
}

export default UpdateProfile
import React from 'react'

function Cards() {
  return (
    <>
<div className="flex flex-wrap mb-2  ">
    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-2 md:pr-2  shadow-lg py-2">
        <div className="bg-green-600 border rounded shadow p-2">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                <div className="flex-1 text-right">
                    <h5 className="text-white">Estimated  Projects</h5>
                    <h3 className="text-white text-3xl ">30<span className="text-green-400 "><i className="fas fa-caret-down pl-1"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-2 py-2 md:pl-2 shadow-lg">
        <div className="bg-blue-600 border rounded shadow p-2">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4"><i className="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                <div className="flex-1 text-right">
                    <h5 className="text-white">Total Projects</h5>
                    <h3 className="text-white text-3xl">100 <span className="text-blue-400"><i className="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-2 py-2 md:pr-2 xl:pr-3 xl:pl-1 shadow-lg">
        <div className="bg-orange-600 border rounded shadow p-2">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4"><i className="fa-solid fa-bars-progress fa-2x fa-fw fa-inverse"></i></div>
                <div className="flex-1 text-right pr-1">
                    <h5 className="text-white">In Progress Project</h5>
                    <h3 className="text-white text-3xl">2 <span className="text-orange-400"><i className="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default Cards
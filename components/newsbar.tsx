

export default function News() {
  return (
    <div id="newsbar" className="bg-blue-700 sticky top-0">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Welcome to OpenPortfolio!</span>
              <span className="hidden md:inline">Check the lastest updates here and support this work!.</span>
            </p>
          </div>
          <div className="order-1 mt-2 flex-shrink-0 w-full sm:order-1 sm:mt-0 sm:w-auto">
            <a
              href="https://github.com/taricsa/openportfolio"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

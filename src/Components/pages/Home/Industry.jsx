
const Industry = () => {
    return (
        <div>
            <h1 className='text-center text-3xl md:text-5xl font-bold my-4 md:my-8'> Industry Insights</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4">


                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Emerging Technologies</h5>
                    </a>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">5G is designed to deliver dramatically faster data speeds compared to its predecessors. Peak data rates can reach several gigabits per second, enabling quicker downloads, seamless streaming, and low-latency applications.</li>
                   
                    <a  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Future of Work</h5>
                    </a>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">The Remote Work Revolution represents a paradigm shift in how individuals and organizations approach work, breaking away from traditional office-based structures to embrace more flexible and decentralized models. </li>
                   

                    <a  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quantum Computing</h5>
                    </a>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantum computing is a revolutionary paradigm in information processing that leverages the principles of quantum mechanics to perform computations. Unlike classical computers, which use bits to represent information as 0s and 1s.</li>
                    <a  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Edge Computing</h5>
                    </a>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Edge computing is a distributed computing paradigm that brings computation and data storage closer to the source of data generation, reducing latency and improving efficiency. Unlike traditional cloud computing, where data processing </li>
                    <a  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Industry;
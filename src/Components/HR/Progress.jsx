

const Progress = () => {




    return (
        <div>
           <div className="flex gap-5">
           <div >
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Name</label>
                <select name="task" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>

                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Paper-work">Paper-work</option>
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Month</label>
                <select name="task" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>

                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Paper-work">Paper-work</option>
                </select>
            </div>
           </div>


        </div>
    );
};

export default Progress;
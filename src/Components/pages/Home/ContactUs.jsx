import toast from "react-hot-toast";



const ContactUs = () => {
    window.scrollTo(0, 0)
    const handleContact = (e) => {
        e.preventDefault()
        toast.success('Massage Send')
        e.target.reset()
    }
    return (
        <div>
            <div>
                <div className="max-w-7xl mx-auto py-10">
                    <h1 className="text-center space-y-3 text-5xl font-extrabold py-20">Contact Us </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-7">
                        <div className="text-center space-y-3 ">
                            <p className="text-3xl font-bold">Physical Address</p>
                            <p className="font-semibold text-lg">4724 Golden Ridge Road,
                                <p> Schenectady</p>
                                <p> New York</p> </p>
                        </div>
                        <div className="text-center space-y-3">
                            <p className="text-3xl font-bold">Phone Numbers</p>
                            <p className="font-semibold text-lg">General Inquiries: +880 0000000000</p>
                            <p className="font-semibold text-lg">Reservations:      +880 1111111111</p>
                            <p className="font-semibold text-lg">Customer Support:  +880 2222222222</p>
                        </div>
                        <div className="text-center space-y-3 ">
                            <p className="text-3xl font-bold">Email Addresses</p>
                            <p className="font-semibold text-lg">General Inquiries: info@techPulse.com</p>
                            <p className="font-semibold text-lg">Reservations: reservations@techPulse.com</p>
                            <p className="font-semibold text-lg">Customer Support: support@techPulse.com</p>
                        </div>
                        <div className="text-center  space-y-3">
                        <form onSubmit={handleContact} className=" space-y-3 max-w-lg mx-auto">
                            <p className="text-3xl font-bold">Contact Form</p>
                            <div className="mb-6">
                                <label  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" id="large-input" className="block w-full border-2  p-4 text-gray-900  border-blue-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div className="mb-6">
                                <label  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Phone Number</label>
                                <input type="number" id="large-input" className="block w-full border-2  p-4 text-gray-900  border-blue-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div className="mb-6">
                                <label  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input type="email" id="large-input" className="block w-full border-2  p-4 text-gray-900  border-blue-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div className="mb-6">
                                <label  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your Massage</label>
                                <input type="text" id="large-input" className="block w-full border-2 h-28  p-4 text-gray-900  border-blue-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <input className="px-5 p-1 bg-blue-gray-200 rounded-xl" type="submit" />

                        </form>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
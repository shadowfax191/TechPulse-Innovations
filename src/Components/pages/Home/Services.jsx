const Services = () => {
    return (
        <div>
            <h1 className='text-center text-3xl md:text-5xl font-bold my-4 md:my-8'>Services</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                <div className="rounded-xl border-2 border-blue-gray-200">
                    <img className="h-60  w-full rounded-lg" src="https://i.ibb.co/bmWtJ4B/9437d7766f7278267511f8a3672cde1aa6349872-1456x816.webp" alt="" />

                    <div className="p-5">
                        <h1  className="text-lg font-bold  pb-3">Software Development</h1>

                        <ul className="pl-3">
                            <li>- Web Application Development</li>
                            <li>- Mobile App Development (iOS, Android) </li>
                            <li>- Desktop Application Development  </li>
                            <li>- Custom Software Solutions </li>
                        </ul>
                    </div>
                </div>
                <div className="rounded-xl border-2 border-blue-gray-200">
                    <img className="h-60 w-full rounded-lg" src="https://i.ibb.co/xGT4JFb/course-1663052056.jpg" alt="" />

                    <div className="p-3">
                        <h1  className="text-lg font-bold  pb-3">Web Development</h1>

                        <ul className="pl-3">
                            <li>- Website Design and Development</li>
                            <li>- Frontend and Backend Development </li>
                            <li>- E-commerce Development  </li>
                            <li>- Content Management Systems (CMS)  </li>
                        </ul>
                    </div>
                </div>
                <div className="rounded-xl border-2 border-blue-gray-200">
                    <img className="h-60 w-full rounded-lg" src="https://i.ibb.co/Fwk3GTP/2022-10-14-Blog-Feature-What-is-Cloud-Computing-1-1200x620.png" alt="" />

                    <div className="p-3">
                        <h1 className="text-lg font-bold  pb-3">Cloud Computing</h1>
                        <ul className="pl-3">
                            <li>- Cloud Application Development</li>
                            <li>- Cloud Migration and Consulting </li>
                            <li>- Infrastructure as a Service (IaaS)  </li>
                            <li>- Platform as a Service (PaaS) </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
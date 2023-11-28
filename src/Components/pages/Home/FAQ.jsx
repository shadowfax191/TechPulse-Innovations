
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
const FAQ = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="mx-auto">
            <h1 className='text-center text-3xl md:text-5xl font-bold my-4 md:my-8'>F.A.Q</h1>

            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>What services does TechPulse Innovations provide?</AccordionHeader>
                <AccordionBody>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Software Development: Customized software solutions designed to address specific business challenges.</li>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">  Web Development: Building responsive and engaging websites to enhance your online presence.</li>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">                     Cloud Computing: Leveraging cloud technologies for scalable, secure, and cost-effective solutions.
                    </li>

                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    How does TechPulse Innovations ensure data security and privacy?
                </AccordionHeader>
                <AccordionBody>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Encryption: Implementing robust encryption protocols to protect data during transmission and storage.</li>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Access Controls: Strict access controls and authentication mechanisms to ensure that only authorized personnel can access critical data.
                    </li>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Regular Audits: Conducting regular security audits and assessments to identify and address potential vulnerabilities.
                    </li>

                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    What industries does TechPulse Innovations cater to?
                </AccordionHeader>
                <AccordionBody>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">  Finance: Creating secure and efficient fintech applications, payment gateways, and financial analytics tools.
                    </li>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Retail: Enhancing the retail experience with e-commerce solutions, inventory management systems, and customer relationship management (CRM) tools.</li>
                    <li className="mb-3 font-normal text-gray-700 dark:text-gray-400">Manufacturing: Implementing Industry 4.0 solutions, IoT integration, and automation to optimize manufacturing processes. </li>
                </AccordionBody>
            </Accordion>
        </div>
    );
};

export default FAQ;

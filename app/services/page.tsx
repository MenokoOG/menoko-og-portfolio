import React from "react";

interface Service {
  title: string;
  description: React.ReactNode;
}

const servicesData: Service[] = [
  {
    title: "Responsive Web Design",
    description:
      "I design visually stunning websites that provide a seamless, consistent experience across all devices, from desktops to tablets and mobile phones.",
  },
  {
    title: "Single Page Applications",
    description:
      "I create single-page applications (SPAs) that deliver a fluid, uninterrupted user experience, eliminating the need for page reloads and improving overall usability.",
  },
  {
    title: "Brand Portfolio Websites",
    description:
      "Elevate your brand with a compelling online presence. I design portfolio websites that highlight your unique identity and accomplishments, drawing in clients and opportunities.",
  },
  {
    title: "E-commerce WebApps",
    description:
      "Explore the world of seamless online shopping with custom E-commerce WebApps. I design and develop dynamic, intuitive interfaces that provide a smooth, effortless experience with every click.",
  },
  {
    title: "Existing websites upgrade",
    description:
      "Refresh your digital presence with my expertise in upgrading and modernizing existing websites. I add cutting-edge features and contemporary designs to engage and captivate your audience all over again.",
  },
  {
    title: "Cross-Functional Collaboration",
    description:
      "I work seamlessly with UX designers, backend developers, and other stakeholders to deliver cohesive, well-rounded projects, fostering collaboration and teamwork.",
  },
  {
    title: "Animation and Interactivity",
    description:
      "I specialize in integrating animations and interactive elements to boost user engagement, crafting dynamic and visually captivating frontend experiences.",
  },
  {
    title: "Landing Pages",
    description:
      "I specialize in creating custom landing pages tailored to your specific needs, ensuring a compelling digital presence that perfectly aligns with your brand or product.",
  },
  {
    title: "Agile, Scrum, and AI-Driven Development",
    description: (
      <>
        I implement Agile, Scrum, and ITIL4 methodologies to ensure a flexible,
        efficient, and collaborative workflow. By using AI-driven technologies,
        I deliver intelligent, data-driven solutions tailored to meet your
        business objectives. Whether you need iterative development, efficient
        IT service management, or intelligent automation, I provide strategies
        to help your business stay ahead in a fast-paced digital environment.{" "}
        <br />
        Learn more about these methodologies:{" "}
        <a
          href="https://www.atlassian.com/agile"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agile
        </a>{" "}
        |{" "}
        <a
          href="https://www.atlassian.com/agile/scrum"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scrum
        </a>
      </>
    ),
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="mx-auto flex flex-wrap items-center bg-opacity-70 p-8 rounded-lg"
    >
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-white">
            Services
          </h2>
          <p className="text-gray-600 dark:text-white">
            Explore the services I offer to help bring your ideas to life.
          </p>
        </header>
        <div className="flex flex-wrap justify-center">
          {servicesData.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="card bg-base-100 dark:bg-gray-800 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl font-semibold text-blue-600 dark:text-blue-600 mb-4">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

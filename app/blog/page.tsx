import React from "react";

const blogPosts = [
  {
    title:
      "Exploring a Dynamic Function for Your Projects: Unleashing the Power of Node.js File System Scanning",
    link: "https://medium.com/@jefftkddan/exploring-a-dynamic-function-for-your-projects-unleashing-the-power-of-node-js-3c75301ac411",
  },
  {
    title:
      "Cruising on the Coding Highway: A Joyride with JavaScript and Python",
    link: "https://medium.com/@jefftkddan/cruising-on-the-coding-highway-a-joyride-with-javascript-and-python-d28a1a4ea109",
  },
  {
    title: "JavaScript Loops and the Map Method: A Fun Exploration",
    link: "https://medium.com/@jefftkddan/javascript-loops-and-the-map-method-a-fun-exploration-cb672439e94d",
  },
  {
    title:
      "Menoko OG’s Magical Python Quest: Unleashing Coding Sorcery with Loops and List Comprehensions",
    link: "https://medium.com/@jefftkddan/menoko-ogs-magical-python-quest-unleashing-coding-sorcery-with-loops-and-list-comprehensions-22c3e8a0ab99",
  },
  {
    title:
      "Transitioning from Combat Engineering to Software Engineering: A Path to Healing and Growth",
    link: "https://medium.com/@jefftkddan/transitioning-from-combat-engineering-to-software-engineering-a-path-to-healing-and-growth-1be494cd7d18",
  },
  {
    title:
      "A Click is just a Click: Three Stages of Learning Development the Bruce Lee Way",
    link: "https://medium.com/@jefftkddan/a-click-is-just-a-click-three-stages-of-learning-development-the-bruce-lee-way-1a374d9efab9",
  },
  {
    title:
      "Unveiling the Magic: Immutable and Mutable Data Types in Python and JavaScript",
    link: "https://medium.com/@jefftkddan/title-unveiling-the-magic-immutable-and-mutable-data-types-in-python-and-javascript-3811cc451b9b",
  },
  {
    title:
      "The Human Touch: Unveiling the True Power Behind Technology: Don't Be Scared of AI",
    link: "https://medium.com/@jefftkddan/the-human-touch-unveiling-the-true-power-behind-technology-dont-be-scared-of-ai-ef6fe5fd88bc",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="mx-auto flex flex-wrap items-center bg-opacity-70 p-8 rounded-lg"
    >
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-white">
            Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Here are some articles I wrote on{" "}
            <a
              href="https://medium.com/"
              target="_blank"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Medium
            </a>{" "}
            blog site.
          </p>
        </header>
        <div className="flex flex-wrap justify-center">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="card bg-base-100 dark:bg-gray-800 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    <a
                      href={post.link}
                      target="_blank"
                      className="text-blue-600  dark:text-blue-400"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Read more about this topic on Medium.
                  </p>
                  <div className="card-actions justify-between mt-4">
                    <a
                      href={post.link}
                      target="_blank"
                      className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

import React from "react";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
           
          title="narawear Website"
          main="Narawear is an online platform built with Node.js, Express, MongoDB, and a responsive frontend to offer a seamless shopping experience with secure payments and eco-friendly fashion."
          image="https://cdn.shopify.com/s/files/1/0722/8951/7782/collections/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg?v=1728991225"
        />
        <ProjectCard
          title="Cake Bakery"
          main="A visually delightful Cake Bakery website crafted with HTML, CSS, and Bootstrap, featuring a responsive design, elegant layouts, and easy navigation to showcase delicious treats"
          image="https://tse3.mm.bing.net/th?id=OIP.UQelnFFX7vihRqgND4YzUQHaGV&pid=Api&P=0&h=180"
        />
        <ProjectCard
          title="Weather Application"
          main="A dynamic Weather Application built to display real-time weather updates and forecasts, featuring a responsive design and seamless user experience using modern web technologies."
          image="https://up.yimg.com/ib/th?id=OIP.jja2VmQ9vny99ZUArR_6BAHaEj&pid=Api&rs=1&c=1&qlt=95&w=180&h=111"
        />
      </div>
    </div>
  );
};

export default Projects;
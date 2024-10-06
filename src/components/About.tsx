import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Garth Scaysbrook" className="rounded-full w-64 h-64 object-cover mx-auto" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hi, I'm Garth Scaysbrook, a passionate web developer with a keen eye for design and a love for creating intuitive user experiences. With years of experience in front-end and back-end technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the great outdoors. I believe in continuous learning and always strive to stay up-to-date with the latest industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'

const About = () => {
  return (
    <div>
        <div className="banner-about">
        <div className="banner-content-about">
          <h1 className="heading">About us</h1>
          <div className="button-violet">Join Now!</div>
        </div>
      </div>
      <div className="feature">
        <img
          src="/assets/trainer.jpg"
          alt=""
          className="feature-img"
        />
        <div className="feature-content">
          <h2>Our Trainers</h2>
          <p className="content">
          Work one-on-one with a Certified Personal Trainer to achieve your goals effectively and efficiently. Our Personal Trainers will work with you to build a custom fitness and nutrition plan that works for you. It’s fun!
          </p>
          <button className="button-black">Book a Free Goal Session</button>
        </div>
      </div>
      <div className="feature-rev">
        <div className="feature-content">
          <h2>Small Group Training</h2>
          <p className="content">
          THE WORX is our exclusive Small Group Training program available with select Fitness World memberships. Based on the HIIT (High Intensity Interval Training) style, and guided by one of our certified leaders, THE WORX is a great way to get sweaty.
          </p>
          <button className="button-black">View Schedule</button>
        </div>
        <img
          src="/assets/class.png"
          alt=""
          className="feature-img"
        />
      </div>
      <div className="feature">
        <img
          src="/assets/crossfit.jpg"
          alt=""
          className="feature-img"
        />
        <div className="feature-content">
          <h2>Become a personal Trainer</h2>
          <p className="content">
          Become a Personal Trainer
Are you looking to take your passion for fitness to the next level? Become a Certified Personal Trainer with BC Personal Training Institute. Fitness World is proud to offer all graduates guaranteed job placement at one of our locations.
          </p>
          <button className="button-black">Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default About
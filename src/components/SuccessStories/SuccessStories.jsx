import React from 'react';
import './SuccessStories.css';
import img1 from '../../Images/t1.png'
import img2 from '../../Images/t2.png'
import img3 from '../../Images/t3.png'

const stories = [
  {
    name: 'Henry Wang',
    title: 'L5 Software Developer at Goggle',
    image: img1,
    quote: 'The resume optimization tool made my skills stand out instantly. I landed 3 interviews in a week.',
  },
  {
    name: 'Josh Dhaliwal',
    title: 'Staff Software Developer at Udemy',
    image: img2,
    quote: 'Career coaching with Nexora was game-changing. The feedback was honest, sharp, and effective.',
  },
  {
    name: 'Shawn Williams',
    title: 'Senior Software Developer at Amazon',
    image: img3,
    quote: 'Every part of the process — from job matching to mock interviews — was seamless and helpful.',
  },
];

export default function SuccessStories() {
  return (
    <section className="success-section">
      <div className="success-inner">
        <h2 className="success-title">Success Stories</h2>
        <div className="success-cards">
          {stories.map((story, index) => (
            <div className="story-card" key={index}>
              <img src={story.image} alt={story.name} className="story-avatar" />
              <p className="story-quote">“{story.quote}”</p>
              <p className="story-name">{story.name}</p>
              <p className="story-title">{story.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import LazyHero from 'react-lazy-hero';

export default function LandingPage() {
  return (
    <div>
      <LazyHero imageSrc={require('../assets/katsu.jpeg')}>
        <h1>Katsu Mama</h1>
      </LazyHero>
    </div>
  )
}

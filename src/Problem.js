import React from 'react';
import './Problem.css';

function Problem() {
  return (
    <div>
      <div className="IntroText">
      "Sono tornato a casa lungo quei canali di una vecchia Milano più benevola…Dovevo conoscere meglio quella città, che riservava tanti stupori." <br />
      </div>
      <div className="ProblemText">
          <p className='BodyText'> <span className='emphasis'>So, Phoenix Twitter hates the canal</span>. 
          In fact, you'd be hard pressed to find a apologist anywhere. 
          The canal is, according to most, a lost opportunity for urban vibrancy.
          It is <span className='emphasis'>dangerous and ugly</span>. 
          A place for a good run, maybe, but that's it.
          Cities like Amerstdam and Venice, those refreshing cosmopolitan thinkers, did it right, critics claim.<br/><br/>
          But you <span className='emphasis'>should not hate our canal</span>, and <span className='emphasis'>you should not judge it</span>, even if it leaves us wanting.
          <br/><br/>This website aims to justify <span className='emphasis'>why the canal is as it is</span>, and what might be done to <span className='emphasis'>improve it.</span>
          </p>
      </div>
    </div>
  );
}

export default Problem;

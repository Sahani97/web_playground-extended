import React, { useState } from 'react';
import BearAudio from '../assets/media/bear.mp3';
import BearAudioOgg from '../assets/media/bear.ogg';

function AudioPlayer(): React.JSX.Element {
  const [showTranscript, setShowTranscript] = useState(false);

  const toggleTranscript = () => {
    setShowTranscript((prev) => !prev);
  };

  return (
    <section className="audio-player">
      <h3>Mating Rituals</h3>
      <p>
        Bears are romantic creatures by nature, and will naturally look for a mate that
        they can spend the rest of their lives with. They will woo a potential suitor by
        making their dwelling look attractive — for example with cave paintings or a bed
        of reeds in the case of a wild bear, and mood lighting and a Michael Bublé CD in
        the case of an urban bear.
      </p>
      <p>The following audio clip contains information about bear mating rituals:</p>
      <audio controls>
        <source src={BearAudio} type="audio/mpeg" />
        <source src={BearAudioOgg} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      <button
        className="show-hide"
        onClick={toggleTranscript}
        aria-expanded={showTranscript}
      >
        {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
      </button>
      {showTranscript && (
        <div className="audio-transcript">
          <h3>Transcript: Bear Mating Rituals</h3>
          <p>
            This isn't really an audio fact file about bears but it is, an audio file that
            you can transcribe.
          </p>
        </div>
      )}
    </section>
  );
}

export default AudioPlayer;

"use client";

import { useState, useRef, useEffect, RefObject } from 'react';
import { Music, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = ({ audioRef }: { audioRef: RefObject<HTMLAudioElement | null> }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const internalAudioRef = useRef<HTMLAudioElement>(null);

   useEffect(() => {
    if(audioRef) {
      (audioRef as any).current = internalAudioRef.current;
    }
  }, [audioRef]);

  const togglePlayPause = () => {
    const audio = internalAudioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = internalAudioRef.current;
    if(!audio) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Initial check in case autoplay was successful
    if(!audio.paused) {
      setIsPlaying(true);
    }
    
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    }

  }, []);

  return (
    <>
      <audio ref={internalAudioRef} loop>
        <source src="/wedding-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="fixed bottom-4 right-4 z-50">
        <Button variant="secondary" size="icon" className="rounded-full w-12 h-12 shadow-lg" onClick={togglePlayPause} aria-label={isPlaying ? "Pause music" : "Play music"}>
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
      </div>
    </>
  );
};

export default MusicPlayer;

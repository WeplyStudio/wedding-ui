"use client";

import { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  useEffect(() => {
    // Attempt to autoplay, might be blocked by browser policy
    // but works if user has interacted with the site before.
    // Start muted to comply with most autoplay policies.
    if(audioRef.current) {
        audioRef.current.muted = true;
        audioRef.current.play().then(() => {
            setIsPlaying(true);
            if(audioRef.current) audioRef.current.muted = false; // Unmute after play starts
        }).catch((error) => {
            console.log("Autoplay was prevented:", error);
            // Autoplay was prevented, user will have to click to play.
            setIsPlaying(false);
        });
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
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

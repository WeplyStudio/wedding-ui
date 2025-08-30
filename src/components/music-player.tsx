
"use client";

import { useState, useRef, useEffect, forwardRef } from 'react';
import { Music, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = forwardRef<HTMLAudioElement>((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const internalAudioRef = useRef<HTMLAudioElement>(null);

  // This effect ensures the external ref and internal ref are the same instance.
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(internalAudioRef.current);
      } else {
        (ref as React.MutableRefObject<HTMLAudioElement | null>).current = internalAudioRef.current;
      }
    }
  }, [ref]);

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
    if (!audio) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Initial check in case autoplay was successful
    if (!audio.paused) {
      setIsPlaying(true);
    }
    
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <>
      <audio ref={internalAudioRef} loop>
        <source src="https://pouch.jumpshare.com/preview/1xoUdVYJat_mP9mQ_Fz-pCH5rKZevOxD1hZSHCSWx7ZZVFP27dF5AULAUvuAbsxgNch_EP84SbfvH8lJnYZLbDH_o7FZUL3QnJ9LdFBgYnkj-KIVDp0e_A8wblQYMGh9C3XtMRaKl993t-_DAu64WW6yjbN-I2pg_cnoHs_AmgI.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="fixed bottom-4 right-4 z-50">
        <Button variant="secondary" size="icon" className="rounded-full w-12 h-12 shadow-lg" onClick={togglePlayPause} aria-label={isPlaying ? "Pause music" : "Play music"}>
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
      </div>
    </>
  );
});

MusicPlayer.displayName = "MusicPlayer";

export default MusicPlayer;

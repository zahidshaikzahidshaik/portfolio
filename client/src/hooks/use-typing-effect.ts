import { useState, useEffect, useCallback } from 'react';

interface UseTypingEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBeforeDelete?: number;
  pauseBeforeType?: number;
}

export function useTypingEffect({
  phrases,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseBeforeDelete = 1000,
  pauseBeforeType = 500,
}: UseTypingEffectProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  const nextPhrase = useCallback(() => {
    setPhraseIndex((current) => (current + 1) % phrases.length);
    setCharIndex(0);
    setIsDeleting(false);
  }, [phrases.length]);

  useEffect(() => {
    if (!phrases.length) return;

    const currentPhrase = phrases[phraseIndex];

    // Handle typing and deleting logic
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting characters
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prevCharIndex) => prevCharIndex - 1);

        // If all characters are deleted
        if (charIndex <= 1) {
          setIsDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
          setTimeout(() => {
            setCharIndex(0);
          }, pauseBeforeType);
        }
      } else {
        // Typing characters
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prevCharIndex) => prevCharIndex + 1);

        // If all characters are typed
        if (charIndex >= currentPhrase.length - 1) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseBeforeDelete);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [
    phrases,
    phraseIndex,
    charIndex,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseBeforeType,
  ]);

  return { text, isDeleting, selectedPhrase: phrases[phraseIndex], nextPhrase };
}

import React, { useState, useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

const Popup = ({ message }) => {
  const [isActive, setIsActive] = useState(false);
  const queryClient = useQueryClient();
  const timerRef = useRef(null);

  useEffect(() => {
    if (message) {
      setIsActive(true);
      // Nascondi il popup dopo 3 secondi
      timerRef.current = setTimeout(() => {
        setIsActive(false);
        queryClient.setQueryData(['message'], null);
      }, 3000);
    } else {
      // Se il messaggio è vuoto, assicuriamoci che il popup sia nascosto
      setIsActive(false);
    }

    // Ripulisci il timer quando il componente viene smontato o quando il messaggio cambia
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [message]);

  const handlePopupClick = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`popup ${isActive ? 'active' : ''}`}
      onClick={handlePopupClick}
    >
      <p>{message}</p>
    </div>
  );
};

export default Popup;

import React, { useState, useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

const Popup = ({ message }) => {
  const [isActive, setIsActive] = useState(false);
  const queryClient = useQueryClient();
  const timerRef = useRef(null);

  useEffect(() => {
    if (message) {
      setIsActive(true);
      // Hide popup after 3 seconds
      timerRef.current = setTimeout(() => {
        setIsActive(false);
        queryClient.setQueryData(['message'], null);
      }, 3000);
    } else {
      // If the message is empty, make sure the popup is hidden
      setIsActive(false);
    }

    // Clear the timer when the component is disassembled or when the message changes
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

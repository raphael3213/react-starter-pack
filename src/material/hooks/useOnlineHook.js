import { useEffect, useState } from "react";

export function useOnlineHook() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function onOnline() {
      setIsOnline(true);
    }

    function onOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  });

  return isOnline;
}

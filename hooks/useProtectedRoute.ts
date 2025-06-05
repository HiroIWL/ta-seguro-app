import { useAuth } from "@/context/AuthContext";
import { useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";

export function useProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (segments.length > 0) {
      setIsReady(true);
    }
  }, [segments]);

  useEffect(() => {
    const inTabsGroup = segments[0] === "(tabs)";
    if (isReady && !isAuthenticated && inTabsGroup) {
      router.navigate('/login')
    }
  }, [isReady, isAuthenticated, segments]);
}

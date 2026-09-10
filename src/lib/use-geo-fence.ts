import { useEffect, useState } from "react";
import { inSouthShore } from "@/lib/catalog";

export type GeoFence = "unknown" | "south-shore" | "elsewhere";

export function useGeoFence(enabled: boolean) {
  const [geo, setGeo] = useState<GeoFence>("unknown");

  useEffect(() => {
    if (!enabled) {
      setGeo("unknown");
      return;
    }
    if (!navigator.geolocation) {
      setGeo("unknown");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeo(
          inSouthShore(pos.coords.latitude, pos.coords.longitude)
            ? "south-shore"
            : "elsewhere",
        );
      },
      () => setGeo("unknown"),
      { maximumAge: 86_400_000, timeout: 8_000, enableHighAccuracy: false },
    );
  }, [enabled]);

  return geo;
}

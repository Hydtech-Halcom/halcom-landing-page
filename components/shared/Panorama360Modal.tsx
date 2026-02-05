"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

declare global {
  interface Window {
    PANOLENS: {
      ImagePanorama: new (imageSrc: string) => ImagePanorama;
      Viewer: new (options?: ViewerOptions) => Viewer;
    };
    THREE: {
      Vector3: new (x: number, y: number, z: number) => Vector3;
    };
  }
}

interface Vector3 {
  x: number;
  y: number;
  z: number;
  clone: () => Vector3;
}

interface ImagePanorama {
  dispose: () => void;
  addEventListener: (event: string, callback: () => void) => void;
}

interface ViewerOptions {
  container?: HTMLElement;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  controlBar?: boolean;
}

interface Viewer {
  add: (panorama: ImagePanorama) => void;
  dispose: () => void;
  onWindowResize: () => void;
  tweenControlCenter: (
    vector: { x: number; y: number; z: number },
    duration: number,
  ) => void;
  OrbitControls: {
    target: { set: (x: number, y: number, z: number) => void };
  };
  camera: {
    position: { set: (x: number, y: number, z: number) => void };
  };
}

interface Panorama360ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description?: string;
  /** Initial look at position in degrees. { longitude: 0-360, latitude: -90 to 90 } */
  initialLookAt?: {
    longitude: number; // 0-360 degrees (horizontal)
    latitude: number; // -90 to 90 degrees (vertical)
  };
}

// Convert degrees to radians
const degToRad = (deg: number) => (deg * Math.PI) / 180;

// Convert spherical coordinates (longitude, latitude) to THREE.Vector3
const createLookAtVector = (
  longitude: number,
  latitude: number,
  radius: number = 1000,
): Vector3 | null => {
  if (!window.THREE) return null;

  const phi = degToRad(90 - latitude); // polar angle from top
  const theta = degToRad(longitude); // azimuthal angle

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new window.THREE.Vector3(x, y, z);
};

export function Panorama360Modal({
  isOpen,
  onClose,
  imageSrc,
  title,
  description,
  initialLookAt = { longitude: 0, latitude: 0 },
}: Panorama360ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const panoramaRef = useRef<ImagePanorama | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  const cleanupViewer = useCallback(() => {
    if (viewerRef.current) {
      try {
        viewerRef.current.dispose();
      } catch (e) {
        console.warn("Error disposing viewer:", e);
      }
      viewerRef.current = null;
    }
    if (panoramaRef.current) {
      try {
        panoramaRef.current.dispose();
      } catch (e) {
        console.warn("Error disposing panorama:", e);
      }
      panoramaRef.current = null;
    }
  }, []);

  const initViewer = useCallback(() => {
    if (!containerRef.current || !window.PANOLENS) {
      console.warn("Container or PANOLENS not ready");
      return;
    }

    // Clean up existing viewer first
    cleanupViewer();

    try {
      // Create panorama
      const panorama = new window.PANOLENS.ImagePanorama(imageSrc);

      // Create viewer with container - disable autoRotate initially
      const viewer = new window.PANOLENS.Viewer({
        container: containerRef.current,
        autoRotate: false, // Start with no rotation
        autoRotateSpeed: 0.2,
        controlBar: true,
      });

      viewer.add(panorama);
      panoramaRef.current = panorama;
      viewerRef.current = viewer;

      // Listen for load complete and set initial position
      panorama.addEventListener("load", () => {
        setIsLoading(false);

        // Set initial look at position after a small delay
        if (viewerRef.current && initialLookAt) {
          setTimeout(() => {
            if (viewerRef.current && window.THREE) {
              const target = createLookAtVector(
                initialLookAt.longitude,
                initialLookAt.latitude,
              );
              if (target) {
                // Use tweenControlCenter with duration 0 for instant positioning
                viewerRef.current.tweenControlCenter(target, 0);
              }

              // Enable auto rotate after positioning
              setTimeout(() => {
                if (viewerRef.current) {
                  (
                    viewerRef.current as unknown as { autoRotate: boolean }
                  ).autoRotate = true;
                }
              }, 500);
            }
          }, 100);
        }
      });

      // Trigger resize after a short delay
      setTimeout(() => {
        if (viewerRef.current) {
          viewerRef.current.onWindowResize();
        }
      }, 200);
    } catch (error) {
      console.error("Error initializing Panolens viewer:", error);
      setIsLoading(false);
    }
  }, [imageSrc, cleanupViewer, initialLookAt]);

  const loadScripts = useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      // Check if already loaded
      if (window.PANOLENS && window.THREE) {
        setScriptsLoaded(true);
        resolve();
        return;
      }

      // Check if scripts are already in DOM
      const existingThree = document.querySelector(
        'script[src*="three@0.105.2"]',
      );
      const existingPanolens = document.querySelector(
        'script[src*="panolens@0.12.0"]',
      );

      if (existingThree && existingPanolens && window.PANOLENS) {
        setScriptsLoaded(true);
        resolve();
        return;
      }

      // Load Three.js first
      const threeScript = document.createElement("script");
      threeScript.src =
        "https://cdn.jsdelivr.net/npm/three@0.105.2/build/three.min.js";

      threeScript.onload = () => {
        // Then load Panolens
        const panolensScript = document.createElement("script");
        panolensScript.src =
          "https://cdn.jsdelivr.net/npm/panolens@0.12.0/build/panolens.min.js";

        panolensScript.onload = () => {
          setScriptsLoaded(true);
          resolve();
        };
        panolensScript.onerror = () =>
          reject(new Error("Failed to load Panolens"));
        document.head.appendChild(panolensScript);
      };
      threeScript.onerror = () => reject(new Error("Failed to load Three.js"));
      document.head.appendChild(threeScript);
    });
  }, []);

  // Load scripts when modal opens
  useEffect(() => {
    if (isOpen && !scriptsLoaded) {
      loadScripts().catch((error) => {
        console.error("Failed to load Panolens scripts:", error);
        setIsLoading(false);
      });
    }
  }, [isOpen, scriptsLoaded, loadScripts]);

  // Initialize viewer when scripts are loaded and container is ready
  useEffect(() => {
    if (isOpen && scriptsLoaded && containerRef.current) {
      // Give DOM time to render
      const timer = setTimeout(() => {
        initViewer();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen, scriptsLoaded, initViewer]);

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  // Cleanup on close
  useEffect(() => {
    if (!isOpen) {
      cleanupViewer();
    }
  }, [isOpen, cleanupViewer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupViewer();
    };
  }, [cleanupViewer]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-none sm:max-w-none w-[95vw] h-[95vh] p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-2">
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="relative flex-1 w-full h-[calc(95vh-80px)]">
          <div ref={containerRef} className="absolute inset-0 bg-black" />
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-10">
              <Loader2 className="w-10 h-10 animate-spin text-white mb-3" />
              <p className="text-white text-sm">Memuat panorama 360°...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Panorama360Modal;

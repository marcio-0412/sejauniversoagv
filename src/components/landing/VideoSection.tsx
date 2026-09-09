import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

interface VideoSectionProps {
  title: string;
  subtitle: string;
  id?: string;
  thumbnail?: string;
  videoSrc?: string;
}

const VideoSection = ({ title, subtitle, id, thumbnail, videoSrc }: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section id={id} className="section-padding bg-background">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-lg mb-4">{title}</h2>
          <p className="body-lg max-w-2xl mx-auto mb-12">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/5 border border-border/50 group"
        >
          {isPlaying && videoSrc ? (
            <div className="absolute inset-0 bg-black">
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full"
                controls
                autoPlay
                preload="auto"
                playsInline
                onCanPlay={(e) => {
                  const v = e.currentTarget;
                  if (v.paused) v.play().catch(() => {});
                }}
                onEnded={handleClose}
              />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Fechar vídeo"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <>
              {thumbnail && (
                <img src={thumbnail} alt={title} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300"
                  aria-label="Reproduzir vídeo"
                >
                  <Play size={32} className="ml-1" />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

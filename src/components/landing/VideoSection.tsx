import { useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoSectionProps {
  title: string;
  subtitle: string;
  id?: string;
  thumbnail?: string;
  videoSrc?: string;
}

const VideoSection = ({ title, subtitle, id, thumbnail, videoSrc }: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {};

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
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              className="absolute inset-0 w-full h-full bg-black"
              controls
              preload="metadata"
              playsInline
            />
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

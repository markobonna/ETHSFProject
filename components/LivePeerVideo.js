import { Player } from "@livepeer/react";

const PosterImage = () => {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/en/b/b9/Taylor_Swift_-_Anti-Hero.png"
      layout="fill"
      objectFit="cover"
      priority
      placeholder="blur"
    />
  );
};

export const LivePeerVideo = () => {
  return (
    <Player
      title="Taylor Swift - Anti-Hero (Official Music Video).mp4"
      playbackId="6351eldj2qv2crlv"
      poster={<PosterImage />}
      showPipButton
    />
  );
};

function VideoPlayer({ src }) {
  return (
    <video className="h-full w-carousel ms-16 mb-4 rounded-lg" controls autoPlay>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;

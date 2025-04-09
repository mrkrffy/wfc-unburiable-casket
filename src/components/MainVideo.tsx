const MainVideo = () => {
  return (
    <div className="flex items-center justify-center pb-20 relative z-2">
      <iframe
        className="w-full lg:rounded-2xl h-[calc(60vh-10rem)] lg:w-[75vw] lg:h-[calc(100vh-10rem)]"
        src="https://www.youtube.com/embed/DvAXkjfeEoU?si=o78mqqNuew08eg9z"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="no-referrer"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainVideo;

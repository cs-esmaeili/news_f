import VideoJS from "@/components/dashboard/videoPlayer";

const VideoModal = ({ baseUrl, video }) => {

  return (
    <div className="block w-[500px] h-max ">
      <VideoJS
        options={{
          autoplay: false,
          controls: true,
          responsive: true,
          fluid: true,
          sources: [
            {
              src: baseUrl + video,
              type: "video/mp4",
            },
          ],
        }}
      />
    </div>
  );
};

export default VideoModal;

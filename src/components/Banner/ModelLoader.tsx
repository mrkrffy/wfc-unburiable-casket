import { Html, useProgress } from "@react-three/drei";

const ModelLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="w-48 flex flex-col justify-center items-center space-y-2">
        <div className="h-2 w-full bg-[var(--color-text-background)] rounded-lg opacity-20" />

        <div
          className="absolute inset-0 h-2 bg-[var(--color-primary)] rounded-lg opacity-100"
          style={{ width: `${progress}%`, transition: "width 0.3s" }}
        />
        <div className=" p-0">
          <span className="text-white text-lg">{Math.floor(progress)}%</span>
        </div>
      </div>
    </Html>
  );
};

export default ModelLoader;

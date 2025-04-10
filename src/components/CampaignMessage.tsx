import Percentage from "@/assets/images/letters/percentage.svg?react";

const CampaignMessage = () => {
  const textStyle = "lg:text-xl text-lg leading-tight";

  return (
    <>
      <div
        id="campaign-message-section"
        className="flex flex-col justify-center items-center py-10 pb-20 px-[10vw] space-y-6 relative z-2"
      >
        <p className="text-white text-center">
          <span className={textStyle}>
            This casket stands as a solemn tribute to every woman whose life was taken by femicide in South Africa in
            just one year.
          </span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>
            It is built <Percentage className="h-3.5 w-auto inline text-white" /> larger than a standard casket,
            mirroring the devastating rise in femicide in that same year.
          </span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>
            Woven in traditional Zulu art; each purple bead represents a woman whose life was cut short.
          </span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>It's a symbol too heavy to ignore.</span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>
            The casket will remain unburied as a physical and digital measure of the crisis.
          </span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>
            Until decisive action is taken and femicide ends, we will continue to #UnburyTheTruth.
          </span>
        </p>
      </div>
    </>
  );
};

export default CampaignMessage;

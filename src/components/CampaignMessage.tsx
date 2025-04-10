import Percentage from "@/assets/images/letters/percentage.svg?react";

const CampaignMessage = () => {
  const renderLineDivider = () => {
    return <div className="w-1.5 h-6 bg-[var(--color-text-background)]"></div>;
  };

  const textStyle =
    "lg:text-xl text-lg bg-[var(--color-text-background)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]  leading-6";

  return (
    <>
      <div
        id="campaign-message-section"
        className="flex flex-col justify-center items-center py-20 px-[10vw] space-y-0 -mt-40 lg:mt-30 relative z-2"
      >
        <p className="text-white text-center">
          <span className={textStyle}>
            This casket stands as a solemn tribute to every woman whose life was taken by femicide in South Africa in
            just one year.
          </span>
        </p>
        {renderLineDivider()}
        <p className="text-white text-center">
          <span className={textStyle}>
            It is built <Percentage className="h-4 w-auto inline" /> larger than a standard casket, mirroring the
            devastating rise in femicide in that same year.
          </span>
        </p>
        {renderLineDivider()}
        <p className="text-white text-center">
          <span className={textStyle}>
            Woven in traditional Zulu art; each purple bead represents a woman whose life was cut short.
          </span>
        </p>
        {renderLineDivider()}
        <p className="text-white text-center">
          <span className={textStyle}>It's a symbol too heavy to ignore.</span>
        </p>
        {renderLineDivider()}
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

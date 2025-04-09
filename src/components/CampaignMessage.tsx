import Percentage from "@/assets/images/letters/percentage.svg?react";

const CampaignMessage = () => {
  const renderLineDivider = () => {
    return <div className="w-1.5 h-6 my-0.5 bg-[var(--color-text-background)]"></div>;
  };

  return (
    <>
      <div
        id="campaign-message-section"
        className="flex flex-col justify-center items-center py-20 px-[10vw] space-y-0 mt-50 relative z-2"
      >
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2 py-1">
          This casket stands as a solemn tribute to every woman whose life was taken by femicide in South Africa in just
          one year.
        </p>
        {renderLineDivider()}
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2 py-1">
          It is built <Percentage className="h-4 w-auto inline" /> larger than a standard casket, mirroring the
          devastating rise in femicide in that same year.
        </p>
        {renderLineDivider()}
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2 py-1">
          Woven in traditional Zulu art; each purple bead represents a woman whose life was cut short.
        </p>
        {renderLineDivider()}
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2 py-1">
          It's a symbol too heavy to ignore.
        </p>
        {renderLineDivider()}
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2 py-1">
          The casket will remain unburied as a physical and digital measure of the crisis.
        </p>
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2 py-1 mt-0.5">
          Until decisive action is taken and femicide ends, we will continue to #UnburyTheTruth.
        </p>
      </div>
    </>
  );
};

export default CampaignMessage;

import UnburyTheTruthWhite from "@/assets/images/unbury-the-truth-white.svg?react";

const HashtagDivider = () => {
  return (
    <>
      <div className="relative h-auto w-full">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-[var(--color-primary)]" />
          <div className="flex-1 bg-[var(--color-secondary)]" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <UnburyTheTruthWhite className="lg:w-[60vw] w-[95vw]" />
        </div>
      </div>
    </>
  );
};

export default HashtagDivider;

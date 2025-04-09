const SupportCampaign = () => {
  const renderLink = () => {
    return (
      <div className=" rounded absolute -ml-15">
        <div className="bg-white py-1 px-4 rounded-full">
          <a
            href="https://womenforchange.co.za/"
            hrefLang="en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] bg-[var(--color-text-background)]"
          >
            womenforchange.co.za
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center pb-14 pt-4">
      <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)]">
        Visit <div className="w-48 inline-block"></div> to support.
      </p>
      {renderLink()}
    </div>
  );
};

export default SupportCampaign;

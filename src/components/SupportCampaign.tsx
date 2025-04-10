const SupportCampaign = () => {
  const renderLink = () => {
    return (
      <div className=" rounded ">
        <div className="bg-white py-1 px-4 rounded-full">
          <a
            href="https://womenforchange.co.za/"
            hrefLang="en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            womenforchange.co.za
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center pb-14 pt-4">
      <div className="lg:text-xl text-lg text-white text-center">
        Visit <div className="inline-block mx-1">{renderLink()}</div> to support.
      </div>
    </div>
  );
};

export default SupportCampaign;

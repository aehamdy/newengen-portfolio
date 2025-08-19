function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-dvh pt-[95px] pb-[80px] text-content-light">
      <div className="flex flex-col md:justify-between gap-md">
        <h1 className="flex flex-col gap-0 font-black text-[65px] md:text-8xlarge">
          <div className="leading-[65px] md:leading-22">GENUINE.</div>
          <div className="leading-[65px] md:leading-22">IMPACT.</div>
        </h1>

        <p className="md:w-7/10 text-[20px] md:text-xlarge">
          We are an industry-leading digital marketing agency partnering with
          bold brands to drive impact across every stage of the customer journey
          - maximizing it, measuring it, and repeating it.
        </p>
      </div>

      <div className=""></div>
    </section>
  );
}

export default HeroSection;

import React from "react";

const Footer = () => {
  return (
    <section className="flex md:flex-row flex-col bg-projects-texture  px-[4.5rem] py-28 mt-16 justify-between">
      <div className="lg:ml-7 lg:max-w-2xl">
        <h1 className="xl:text-5xl text-4xl font-bold text-text-primary">
          Get in<span className="text-primary">&nbsp;Touch.</span>
        </h1>
        <p className=" text-text-primary xl:text-lg text-sm font-[100] xxs:text-sm sm:text-base ml-1 xxs:mt-4">
          If you have any questions or concerns, please don't hesitate to get in
          touch with us. We're here to help and support you.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <div className="flex gap-3 items-center">
          <img src="/phone.png" alt="Phone Number" className="w-8 h-auto " />
          <a
            href="tel:+923250573249"
            className="text-primary text-base font-medium"
          >
            +92-325-0573-249
          </a>
        </div>
        <div className="flex gap-3 items-center ">
          <img src="/mail.png" alt="Mail" className="w-7 h-auto" />
          <a
            href="mailto:aliraza.dev08@gmail.com"
            className="text-primary text-base font-medium"
          >
            aliraza.dev08@gmail.com
          </a>
        </div>
        <div className="flex gap-3 items-center -ml-1">
          <img src="/insta.svg" alt="insta" className="w-10 h-auto" />
          <a
            href="https://www.instagram.com/ali.dev14?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="text-primary text-base font-medium"
          >
            @ali.dev14
          </a>
        </div>
        <div className="flex gap-3 items-center -ml-1">
          <img src="/fb.svg" alt="facebook" className="w-9 h-auto" />
          <a
            href="https://www.facebook.com/profile.php?id=100044126628057&mibextid=ZbWKwL"
            target="_blank"
            className="text-primary text-base font-medium"
          >
            Ali Raza
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

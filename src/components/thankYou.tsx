export const ThankYou = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-4 py-[36px]">
      <figure className="w-[150px] h-[150px]">
        <img
          //   style={{ width: "200px" }}
          src="https://www.citypng.com/public/uploads/preview/thank-you-calligraphy-red-text-free-png-11636935324tazy3bfxxf.png"
          alt="Form completed, thank you!"
        />
      </figure>
      {/* <h2>Thank you</h2> */}
      <span className="text-center">
        <p>Thanks for confirming your subscription!</p>
        <p>
          We hope you have using our platform. If you ever need support, please
          feel free to email us at support@EAGaming.com
        </p>
      </span>
    </section>
  );
};

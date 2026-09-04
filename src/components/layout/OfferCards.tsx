import offer1 from "../../assets/card1.png";
import offer2 from "../../assets/card2.png";
import offer3 from "../../assets/card3.png";

const OfferCards = () => {
  const images = [offer1, offer2, offer3];

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-[16/7] w-full overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={`Offer ${index + 1}`}
              className="block h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferCards;

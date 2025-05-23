import React from "react";

const features = [
  {
    title: "🐶 Pet Friendly",
    description: "Travel with your pets comfortably without any hassle. Our vehicles are equipped with pet-friendly accessories like seat covers and ventilation.",
  },
  {
    title: "🌱 Eco-Friendly",
    description: "Our rides are powered by clean energy, reducing carbon emissions and promoting a greener planet. Choose sustainability without compromising on comfort.",
  },
  {
    title: "🔇 Quiet Environment",
    description: "Enjoy a peaceful ride with minimal noise pollution. Our electric vehicles provide a smooth and silent travel experience for ultimate relaxation.",
  },
  {
    title: "⚡ Fast Charging",
    description: "Our fleet is equipped with the latest fast-charging technology, ensuring minimal downtime and more time on the road.",
  },
  {
    title: "🛡️ Safe & Secure",
    description: "With real-time GPS tracking, emergency assistance, and highly vetted drivers, your safety is our top priority.",
  },
  {
    title: "📶 Free Wi-Fi",
    description: "Stay connected on the go with free high-speed Wi-Fi available in all our vehicles. Work or browse without interruptions.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-14">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Why Choose Us?
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        We provide the best eco-friendly and comfortable rides with top-notch features that enhance your travel experience. Here’s what makes us special:
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-3">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

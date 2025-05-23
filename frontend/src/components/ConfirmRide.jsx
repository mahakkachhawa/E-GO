import React, { useState } from 'react';

const ConfirmRide = (props) => {
  const vehicleImages = {
    car: "https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg",
    moto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
    auto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
  };

  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
      props.setVehicleFound(true);
      props.setConfirmRidePanel(false);
      props.createRide();
    }, 4000);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-solid mb-4"></div>
        <p className="text-lg font-semibold text-gray-700">Looking for a driver...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full flex justify-center px-4">
         <h5
    className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 text-gray-400 cursor-pointer"
    onClick={() => props.setConfirmRidePanel(false)}
  >
    <i className="text-3xl ri-arrow-down-wide-line"></i>
  </h5>
      <div className="relative w-[60%]  bg-white p-5 rounded-lg shadow-md border-2">
        

        <h3 className="text-2xl font-semibold text-center mb-5">Confirm your Ride</h3>

        <div className="flex flex-col items-center gap-4">
          <img
            className="h-20 object-contain"
            src={vehicleImages[props.vehicleType]}
            alt={props.vehicleType}
          />

          <div className="w-full space-y-4 mt-4">
            <div className="flex items-start gap-4 border-b pb-3">
              <i className="ri-map-pin-user-fill text-xl"></i>
              <div>
                <h3 className="text-lg font-medium">
                  {props.pickup || 'Pick-up location not selected'}
                </h3>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b pb-3">
              <i className="ri-map-pin-2-fill text-xl"></i>
              <div>
                <h3 className="text-lg font-medium">
                  {props.destination || 'Destination not selected'}
                </h3>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="ri-currency-line text-xl"></i>
              <div>
                <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
                <p className="text-sm text-gray-600 -mt-1">Payment</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleConfirm}
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg mt-4"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRide;

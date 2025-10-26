import React from 'react';

const PartnerShowcase = () => {
  return (
    <div className="mt-4 md:mt-12 py-12 md:py-16 lg:py-20 bg-gray-100 text-center rounded-2xl" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-blue-700 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Our Partners & Sponsors
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          Discover the innovative companies and products that support our mission.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Placeholder for partner logos */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="Partner 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
            <img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="Partner 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Partner 3" className="w-full h-full object-cover" />
          </div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
            <img src="https://reductress.com/wp-content/uploads/2019/06/petite-woman-1-820x500.jpg" alt="Partner 4" className="w-full h-full object-cover" />
          </div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8q9_QFtH2MnFm7XMaadIH73lhk4hadzM6w&s" alt="Partner 5" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerShowcase;
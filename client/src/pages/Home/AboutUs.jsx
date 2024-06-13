import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChalkboardTeacher, FaHeadphones, FaRegFileAlt } from 'react-icons/fa';


const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">What will you get?</h1>
          <div className="border-t-2 border-red-500 w-16 mx-auto my-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10" data-aos="zoom-in">
  <div className="w-full md:w-80 h-auto rounded-lg shadow-md p-4 text-center bg-slate-50 mx-auto mb-4 md:mb-0">
  <FaChalkboardTeacher className="text-4xl text-red-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Learn from Experts</h3>
    <p className="text-gray-500">Stay motivated with engaging instructors</p>
  </div>
  <div className="w-full md:w-80 h-auto rounded-lg shadow-md p-4 text-center bg-slate-50 mx-auto mb-4 md:mb-0">
  <FaRegFileAlt className="text-4xl text-red-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Learn the Latest Top Skills</h3>
    <p className="text-gray-500">
Build skills your way, from labs to courses</p>
  </div>
  <div className="w-full md:w-80 h-auto rounded-lg shadow-md p-4 text-center bg-slate-50 mx-auto">
  <FaHeadphones className="text-4xl text-red-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Lifetime Access & Support</h3>
    <p className="text-gray-500">
Keep up with in the latest in cloud</p>
  </div>
</div>

      </div>
    </div>

  );
};

export default AboutUs;
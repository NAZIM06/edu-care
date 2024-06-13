import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../../components/Hooks/useAuth';

const PopularClasses = () => {
  const { user } = useAuth()
  const [classData, setClassData] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/popular-classes`)
      .then(res => setClassData(res.data))
  }, [])
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/current-user?email=${user?.email}`)
      .then(res => {
        setCurrentUser(res.data)
      })
  }, [])


  const handleSelect = (singleClass) => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        text: 'Without login you can not select class',
        footer: '<a href="/login">Please login</a>'
      })
      return;
    }
    if (currentUser.role === 'admin') {
      Swal.fire({
        icon: 'error',
        text: 'As an admin you can not select any class',
      })
      return;
    }
    if (currentUser.role === 'instructor') {
      Swal.fire({
        icon: 'error',
        text: 'As an instructor you can not select any class',
      })
      return;
    }
    const selectedClass = { singleClass, studentEmail: user?.email, classId: singleClass._id }
    axios.post(`${import.meta.env.VITE_BASE_URL}/selected-class`, selectedClass)
      .then(res => {
        if (res.data.acknowledged) {
          Swal.fire({
            icon: 'success',
            text: 'Class selected successfully',
          })
        }
      })
  }
  return (
    <div className="md:p-10 mb-5 mx-auto w-11/12">
          <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Popular Courses</h1>
                <div className="border-t-2 border-red-500 w-16 mx-auto my-4"></div>
                <p className="text-gray-600">Develop a passion for learning. If you do, you would never cease to grow. We
fuel your passion at Online Learning!</p>
            </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 justify-center">
        {classData.slice(0, 6).map((classes) => (
          <div key={classes._id} className={`card w-full group shadow-lg rounded-lg overflow-hidden  ${classes.seats === 0 && 'bg-red-600'}`}>
            <figure className="overflow-hidden">
              <img className='w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300' src={classes.image} alt="class" />
            </figure>
            <div className="card-body p-4">
              <p className='font-bold'>Class name: <span className='font-normal'>{classes.className}</span></p>
              <p className='font-semibold'>Instructor Name: <span className='font-normal'>{classes.instructorName}</span></p>
              <div className="flex justify-between">
                <p className='font-semibold'>Available Seats: <span className='font-normal'>{classes.seats}</span></p>
                <p className='font-semibold'>Price: <span className='font-normal'>${classes.price}</span></p>
              </div>

              <button onClick={() => handleSelect(classes)} className="bg-[#FF1949] hover:bg-[#385777] text-white font-bold py-2 px-4 rounded-md">Select</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../components/Hooks/useAuth';

const Classes = () => {
    const { user } = useAuth();
    const [currentUser, setCurrentUser] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    const { data: allClasses = [], refetch } = useQuery({
        queryKey: ['all-classes'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/approved-all-classes`);
            return response.data;
        }
    });

    useEffect(() => {
        if (user?.email) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/current-user?email=${user?.email}`)
                .then(res => {
                    setCurrentUser(res.data);
                });
        }
    }, [user]);

    const handleSelect = (singleClass) => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                text: 'Without login you cannot select a class',
                footer: '<a href="/login">Please login</a>'
            });
            return;
        }
        const selectedClass = { singleClass, studentEmail: user?.email, classId: singleClass._id };
        axios.post(`${import.meta.env.VITE_BASE_URL}/selected-class`, selectedClass)
            .then(res => {
                if (res.data.acknowledged) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        text: 'Class selected successfully',
                    });
                }
            });
    };

    // Filter classes based on search query
    const filteredClasses = allClasses.filter(classes =>
        classes.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
        classes.instructorName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='md:p-10 my-10 mx-auto w-11/12'>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">All Courses</h1>
                <div className="border-t-2 border-red-500 w-16 mx-auto my-4"></div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by class or instructor name"
                    className="mt-4 px-4 py-2 border-2 border-[#263B5E] rounded-md w-full md:w-1/2 mx-auto"
                />
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 justify-center'>
                {filteredClasses.map((classes) =>
                    <div key={classes._id} className={`card w-full group shadow-lg rounded-lg overflow-hidden ${classes.seats === 0 ? 'bg-red-600' : 'bg-white'}`}>
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
                            <button
                                disabled={classes.seats === 0 || currentUser.role === 'admin' || currentUser.role === 'instructor'}
                                onClick={() => handleSelect(classes)}
                                className="bg-[#FF1949] hover:bg-[#385777] text-white font-bold py-2 px-4 rounded-md"
                            >
                                Enroll
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Classes;

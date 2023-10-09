
import { FaSlackHash } from 'react-icons/fa';
import './Blogs.css'



const Blogs = () => {
    return (
        <div className=' w-full my-12 '>
            <div >
                <h1
                    className=' text-4xl  uppercase font-semibold text-center p-3'>Welcome to <span className='text-[#FD6E0A] font-bold'>EMC</span> </h1>
            </div>
            <div>
                <p className='text-center mt-4 font-semibold md:text-xl'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,<br />
                    We offer full range of Events Management Services that scale to your needs & budget.</p>
            </div>


            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:mt-12'>

                {/* canrd -1 */}
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className='p-2'>
                    <div className='flex items-center gap-3 '>
                        <p className='text-6xl text-[#FD6E0A]'><FaSlackHash></FaSlackHash></p>
                        <h1 className='text-xl font-semibold'>Great Services</h1>
                    </div>
                    <p
                        className='p-2 mt-3'>
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation</p>

                    <button className='box border p-1 mt-4'>Show more</button>
                </div>
                {/* canrd -2 */}
                <div data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine"
                    className='p-2'>
                    <div className='flex items-center gap-3 '>
                        <p className='text-6xl text-[#FD6E0A]'><FaSlackHash></FaSlackHash></p>
                        <h1 className='text-xl font-semibold'>Great People</h1>
                    </div>
                    <p className='p-2 mt-3'>
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation</p>

                    <button className='box border p-1 mt-4'>Show more</button>
                </div>
                {/* canrd -3 */}
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className='p-2'>
                    <div className='flex items-center gap-3 '>
                        <p className='text-6xl text-[#FD6E0A]'><FaSlackHash></FaSlackHash></p>
                        <h1 className='text-xl font-semibold'>Great Ideas</h1>
                    </div>
                    <p className='p-2 mt-3'>
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation</p>

                    <button className='box border p-1 mt-4'>Show more</button>
                </div>



            </div>


        </div>
    );
};

export default Blogs;
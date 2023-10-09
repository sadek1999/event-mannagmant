
import Marquee from "react-fast-marquee";


const Clinds = () => {
    return (
        <div className='my-10'>
            
            <h1 className='text-4xl font-bold uppercase text-center p-3'>Our Clinds</h1>


            <div className=" w-full h-80  space-y-3  items-center bg-no-repeat bg-cover  
              bg-[url(https://i.ibb.co/0t5CKLV/Screenshot-2023-10-08-225404.png)]">

                    <div className=" w-full h-80  bg-[#00000080] flex items-center ">
                        <div className=" mx-auto  ">
                        <Marquee className=' ' pauseOnHover={true} speed={50} >
            
            <img  className='rounded-full h-28 mx-4 md:h-40 md:mx-8 ' src="https://i.ibb.co/4mNmcXW/university-education-logo-design-template-free-vector.jpg" alt="" />
        
            <img className='rounded-full h-28 mx-4 md:h-40  md:mx-8 ' src="https://i.ibb.co/gF5vvmV/pngtree-orange-round-simple-books-university-educational-logo-image-216186.jpg" alt="" />
        
            <img className='rounded-full h-28 mx-4 md:h-40 md:mx-8 ' src="https://i.ibb.co/FhDSQc1/73848230-university-logo-design.jpg" alt="" />
             
            <img className='rounded-full h-28 mx-4 md:h-40 md:mx-8 ' src="https://i.ibb.co/4mNmcXW/university-education-logo-design-template-free-vector.jpg" alt="" />
        
            <img className='rounded-full h-28 mx-4 md:h-40 md:mx-8' src="https://i.ibb.co/ZdymshR/74377645-university-logo-element.jpg" alt="" />

            <img className='rounded-full h-28 mx-4 md:h-40 md:mx-8 ' src="https://i.ibb.co/FhDSQc1/73848230-university-logo-design.jpg" alt="" />
            
            
          
        </Marquee>
                        </div>
                    </div>
                </div>
           
           
   
            
        </div>

        
    );
};

export default Clinds;
import React from 'react';
import { FaUser } from 'react-icons/fa';

const About = (HandlePop ) => {
    return (
    <>
    <div>
                <div className="container">
                    <h1 className='pt-20 tracking-wider text-4xl font-semibold text-primary text-center '>About Us</h1>
                    <div className="bg-primaryDark/20 p-10 my-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio assumenda recusandae odio sit eveniet reiciendis molestias nemo obcaecati, porro accusantium, perferendis provident nostrum totam libero blanditiis mollitia cupiditate eligendi consectetur eius, tempore vero! Delectus vero iure dolor earum id molestiae beatae alias quia? Beatae similique molestiae quibusdam consequuntur possimus facere perspiciatis, facilis tempore, unde quia obcaecati eligendi magnam suscipit!
                        <div className='pt-10 flex justify-center'>

                             <button onClick={HandlePop} className='flex justify-center items-center gap-2 bg-secondary text-white text-xl py-2 px-5 rounded hover:scale-105 h-[40px] duration-300'>
                                <FaUser className=''/>
                                Account
                            </button>
                        </div>
                    </div>
      </div>
   </div>
    </>
  )
}

export default About

"use client";

import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}
 
const teamMembers: TeamMember[] = [
    {
      name: "James Carter",
      role: "Director",
      image: "/aboutper1.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Emily Davis",
      role: "Product Engineer",
      image: "/aboutper2.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Natalie Parker",
      role: "Sales Executive",
      image: "/aboutper3.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Charlotte Wilson",
      role: "Engineer",
      image: "/aboutper4.png",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ]; 
const MeetOurTeam = () => {
    return (
        <div className='mb-[60px]'>
              <div className="container mx-auto px-4 my-[60px]">
      <div className="text-center pb-[36px]">
        <h2 className="text-[35px] font-semibold">
          <span className="text-black">Meet </span>
          <span className="text-amber-500">Our</span>
          <span className="text-black"> Team</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group">
            <div className="relative h-[370px] w-full overflow-hidden ">
              <Image 
                src={member.image} 
                alt={member.name}
                fill
                className="object-cover "
              />
            </div>
            <div className=" text-white p-4 absolute -bottom-8  " 
           style={{
            backgroundImage: `url('/bg.png')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "120px",   
            objectFit: 'fill', 
        }}>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              <div className="flex items-center justify-end gap-1 mt-2 space-x-2">
                <a href={member.social.facebook} className="text-white hover:text-amber-500">
                  <Facebook size={16} />
                </a>
                <a href={member.social.twitter} className="text-white hover:text-amber-500">
                  <Twitter size={16} />
                </a>
                <a href={member.social.instagram} className="text-white hover:text-amber-500">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default MeetOurTeam;
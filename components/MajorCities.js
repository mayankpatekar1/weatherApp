import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MumbaiImage from '../public/images/Mumbai.jpg';
import CanadaImage from '../public/images/Canada.jpg';
import DubaiImage from '../public/images/Dubai.jpg';
import NewyorkImage from '../public/images/New-york.jpg'; 

const MajorCity = [
    {
        name: "Mumbai",
        image: MumbaiImage,
        url: '/location/mumbai-1275339',
    },
    {
        name: "Canada",
        image: CanadaImage,
        url: '/location/canada-625199',
    },
    {
        name: "Dubai",
        image: DubaiImage,
        url: '/location/dubai-292223',
    },
    {
        name: "New York",
        image: NewyorkImage,
        url: '/location/bangkok-1609348',
    },
];

export default function MajorCities() {
  return (
    <div className='places'>
    <div className='places__row'>
    {MajorCity.length > 0 && 
        (MajorCity.map((place,index)=>{
            return(
                <div className="places__box" key={index}>
            <Link href={place.url}>
            <a>
                <div className='places__image-wrapper'>
                <Image 
                src={place.image} 
                alt={`${place.name} Image`} 
                layout="fill" 
                objectFit="cover"
                />

                </div>
                <span>{place.name}</span>
            </a>

            </Link>

            </div>
            );
            
        }))
    }

    </div>

    </div>
  )
}

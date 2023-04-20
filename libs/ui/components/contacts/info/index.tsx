import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export const ContactInfo: React.FC = () => {
  return (
    <div className='flex flex-col items-start justify-start space-y-7'>
      <div className='flex flex-row items-end justify-start space-x-2'>
        <MapPinIcon className='h-4 w-4 lg:h-8 lg:w-8 text-blue-haze' />
        <h5 className='text-xs md:text-base'>
          <span className='uppercase'>Domodossola</span>, Piedmont (Italy)
        </h5>
      </div>
      <div className='flex flex-row items-end justify-start space-x-2'>
        <EnvelopeIcon className='h-4 w-4 lg:h-8 lg:w-8 text-blue-haze' />
        <h5 className='text-xs md:text-base'>aidenpwnz@proton.me</h5>
      </div>
    </div>
  );
};

import Image from 'next/image';

export default function Frame() {
  return (
    <>
      <Image
        alt=''
        src='https://images.unsplash.com/photo-1700675654221-d9c62be751c8'
        height={600}
        width={600}
        className='w-full object-cover aspect-square col-span-2'
      />

      <div className='bg-white p-4 px-6'>
        <h3>photo name</h3>
        <p>Taken by xdd</p>
      </div>
    </>
  );
}
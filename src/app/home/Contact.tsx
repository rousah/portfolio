import React from 'react';

export default function Contact() {
  const marginTopClassName = 'mt-8 md:mt-16';

  return (
    <div className="bg-pink p-[24px] flex justify-between flex-col">
      <div className="text-lg text-black">
        <div className={marginTopClassName}>email</div>
        <div className={marginTopClassName}>github</div>
        <div className={marginTopClassName}>Amsterdam</div>
      </div>
      <div className="px-[24px] text-right text-4xl">Contact</div>
    </div>
  );
}

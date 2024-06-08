import React from 'react';

const ZodErrors = ({error}: { error: string[] }) => {
  if (!error) return null;
  return error.map((err: string, index: number) => (
    <div key={index} className="text-custom-white text-xs flex gap-1 items-center">
      <span className="text-custom-red">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor"
                                                                                                   d="M11.001 10h2v5h-2zM11 16h2v2h-2z"/><path
          fill="currentColor"
          d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968zM4.661 19L12 5.137L19.344 19z"/></svg>
      </span>
      <p className="font-montserrat font-extralight">{err}</p>
    </div>
  ));
};

export default ZodErrors;
import React from 'react';

export const SectionBody = (props: { children: React.ReactNode }) => {
  return (
    <section className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
      {props.children}
    </section>
  );
};

import React from 'react';

export const Intro = (props: { children: React.ReactNode }) => {
  return <div className="italic pb-10">{props.children}</div>;
};

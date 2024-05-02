import { NavElement } from './NavElement.tsx';
import { NavElementEnum } from './NavElementEnum.tsx';

export const MainNav = () => {
  return (
    <>
      <nav className="bg-gray-400">
        {Object.values(NavElementEnum).map((navElement, idx) => {
          return <NavElement key={idx} element={navElement}></NavElement>;
        })}
      </nav>
    </>
  );
};

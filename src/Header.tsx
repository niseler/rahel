import {NavElement} from './Navigation/NavElement.tsx';
import {NavElementEnum} from "./Navigation/NavElementEnum.tsx";

export const Header = () => {
  return (
    <>
      <div className="bg-fce4ec  max-w-screen-md sticky top-0 bg-fce4ec block max-w-screen-m">
        <header className="bg-gray-400">
          <div className="flex">
            <img src="assets/heart.png" alt="Herz" width="48" height="48" />
            <h1 className="w-90 mx-auto text-center block">Für Rahel</h1>
            <img src="assets/heart.png" alt="Herz" width="48" height="48" />
          </div>
        </header>
        <nav className="bg-gray-400">
          {
            Object.values(NavElementEnum).map((navElement, idx) => {
              return <NavElement key={idx} element={navElement}></NavElement>;
            })
          }
        </nav>
      </div>
    </>
  );
};

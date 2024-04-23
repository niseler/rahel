
import { mainNavStore, setMainNav } from '../Sections/Nav/mainNavStore.ts';
import {NavElementEnum} from "./NavElementEnum.tsx";

export const NavElement = (props: { element: NavElementEnum }) => {
  const element = props.element;
  const mainNav = mainNavStore((state) => state.value);
  return (
    <a
      onClick={(_e) => setMainNav({ value: element })}
      data-id={element}
      className={mainNav === element ? 'text-red-600 no-underline m-0.5 mx-1' : 'no-underline m-0.5 mx-1'}
    >
      {element}
    </a>
  );
};

import { mainNavStore, setMainNav } from '../Sections/Nav/mainNavStore.ts';
import { NavElementEnum } from './NavElementEnum.tsx';
import { cn } from '../tools/utils.ts';
import { mapping } from './NavImages.ts';

export const NavElement = (props: { element: NavElementEnum }) => {
  const element = props.element;
  const mainNav = mainNavStore((state) => state.value);

  return (
    <a
      onClick={(_e) => setMainNav({ value: element })}
      className={cn('no-underline m-0.5 mx-1', { 'text-red-500': mainNav === element })}
    >
      {!mapping.hasOwnProperty(element) ? (
        element
      ) : (
        <img
          className={cn('no-underline m-0.5 mx-1 inline', { 'bg-red-200': mainNav === element })}
          width={20}
          height={20}
          alt={element.toString()}
          title={element.toString()}
          src={mapping[element]}
        />
      )}{' '}
    </a>
  );
};

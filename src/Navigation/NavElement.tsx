import {NavElementInterface} from "../Interfaces.tsx";

export const NavElement = (props: { element: NavElementInterface }) => {
    const element = props.element
    return (
        <a
            onClick={element.cb}
            data-id={element.label}
            className={element.active ? 'text-red-600 no-underline m-0.5 mx-1' : 'no-underline m-0.5 mx-1'}
        >
            {element.label}
        </a>
    )
}
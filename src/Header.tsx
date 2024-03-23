
import {NavElement} from "./App.tsx";
import {NavElementInterface} from "./Interfaces.tsx";

export const Header = (props: { navState: NavElementInterface[] }) => {
    return (
        <>
            <div className="bg-fce4ec  max-w-screen-md sticky top-0 bg-fce4ec block max-w-screen-m">
                <header className="bg-gray-400">
                    <div className="flex">
                        <img src="assets/heart.png" alt="Herz" width="48" height="48"/>
                        <h1 className="w-90 mx-auto text-center block">Für Rahel</h1>
                        <img src="assets/heart.png" alt="Herz" width="48" height="48"/>
                    </div>
                </header>
                <nav className='bg-gray-400'>
                    {props.navState.map((element) => {
                        return <NavElement key={element.label} element={element}></NavElement>
                    })}
                </nav>
            </div>

        </>
    )
}
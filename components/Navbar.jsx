export function Navbar() {
    return (
        <>
            <div className="navBarContainer">
                <ul className="navBar">
                    <li>
                        <a href="">linkedIn</a>
                    </li>
                    <li>
                        <a href="">GitHub</a>
                    </li>
                    <li>
                        <a href="">Project 1</a>
                    </li>
                    <li>
                        <a href="">Project 2</a>
                    </li>
                </ul>
            </div>

            <style jsx>
                {`
                    .navBarContainer {
                        display: flex;
                        position: fixed;
                        top: 0;
                        width: 100%;
                        background-color: grey;
                    }
                    .navBar {
                        list-style: none;
                        display: flex;
                        flex-direction: row;
                        gap: 20px;
                        justify-content: space-evenly;
                        width: 100%;
                        height: 2rem;
                    }
                    .navBar li {
                        width: 200px;
                        background-color: black;
                        height: 2rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .navBar a {
                        text-decoration: none;
                        color: white;
                    }
                `}
            </style>
        </>
    );
}

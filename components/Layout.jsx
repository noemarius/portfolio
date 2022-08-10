import { Bio } from "./Bio";
import { Cards } from "./cards";
import { Navbar } from "./Navbar";

export function Layout() {
    let bioContent =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, itaque. Alias, tenetur aliquid enim repudiandae nisi sequi beatae eum? Doloribus nulla nisi minima ab odio consequatur incidunt numquam atque cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, itaque. Alias, tenetur aliquid enim repudiandae nisi sequi beatae eum? Doloribus nulla nisi minima ab odio consequatur incidunt numquam atque cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, itaque. Alias, tenetur aliquid enim repudiandae nisi sequi beatae eum? Doloribus nulla nisi minima ab odio consequatur incidunt numquam atque cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, itaque. Alias, tenetur aliquid enim repudiandae nisi sequi beatae eum? Doloribus nulla nisi minima ab odio consequatur incidunt numquam atque cum.";
    return (
        <>
            <Navbar />
            <div className="mainContainer">
                <h1>About Me</h1>
                <div className="bioContainer">
                    <Bio bioText={bioContent} />
                </div>
                <h1>My Resume</h1>
                <div className="cardContainerWork">
                    <h2>Work Experience</h2>
                    <Cards
                        title="uhwqdohwqudwq"
                        date="2020-01-02"
                        desc="lqoiwdqoiwj"
                    />
                    <Cards
                        title="uhwqdohwqudwq"
                        date="2020-01-02"
                        desc="lqoiwdqoiwj"
                    />
                    <Cards
                        title="uhwqdohwqudwq"
                        date="2020-01-02"
                        desc="lqoiwdqoiwj"
                    />
                </div>
                <div className="cardContainerEduc">
                    <h2>Education</h2>
                    <Cards
                        title="uhwqdohwqudwq"
                        date="2020-01-02"
                        desc="lqoiwdqoiwj"
                    />
                    <Cards
                        title="uhwqdohwqudwq"
                        date="2020-01-02"
                        desc="lqoiwdqoiwj"
                    />
                    <Cards
                        title="uhwqdohwqudwq"
                        date="2020-01-02"
                        desc="lqoiwdqoiwj"
                    />
                </div>
            </div>
            <style jsx>{`
                .mainContainer {
                    display: flex;
                    flex-direction: column;
                    background-color: grey;
                    min-height: 1000px;
                    width: 80%;
                    margin: auto;
                    margin-top: 2rem;
                    gap: 20px;
                }
                .cardContainerWork,
                .cardContainerEduc {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .bioContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-height: 200px;
                }
                .mainContainer div > h1 {
                    padding: 0 20px 0 0;
                    font-size: 36px;
                    font-weight: 900;
                    flex: 0 0 100%;
                }

                .mainContainer div > h2 {
                    flex: 0 0 100%;
                }
            `}</style>
        </>
    );
}

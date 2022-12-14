import { Bio } from "./Bio";
import { Cards } from "./Cards";
import { Navbar } from "./Navbar";

export function Layout() {
    let bioContent =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, itaque. Alias, tenetur aliquid enim repudiandae nisi sequi beatae eum? Doloribus nulla nisi minima ab odio consequatur incidunt numquam atque cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, itaque. Alias, tenetur aliquid enim repudiandae nisi sequi beatae eum? Doloribus nulla nisi minima ab odio consequatur incidunt numquam atque cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, itaque. Alias, tenetur aliquid enim repudiandae nisi sequi beatae eum? Doloribus nulla nisi minima ab odio consequatur incidunt numquam atque cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, itaque. Alias, tenetur aliquid enim repudiandae nisi sequi beatae eum? Doloribus nulla nisi minima ab odio consequatur incidunt numquam atque cum.";
    return (
        <>
            <div className="mainContainer">
                <div className="navContainer">
                    <Navbar menuMode="horizontal" />
                </div>
                <div className="contentContainer">
                    <div className="bioContainer">
                        <h1>About Me</h1>
                        <Bio bioText={bioContent} />
                    </div>
                    <div className="cardContainer">
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
                </div>
            </div>
            <style jsx>{`
                .mainContainer {
                    display: flex;
                    flex-direction: column;
                    background-color: grey;
                    min-height: 1000px;
                    width: 100%;
                    margin: 0;
                    gap: 20px;
                }
                .cardContainerWork,
                .cardContainerEduc {
                    flex: 0 0 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
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
                    font-weight: 600;
                    flex: 0 0 100%;
                }

                .mainContainer div > h2 {
                    flex: 0 0 100%;
                    position: relative;
                }
                .cardContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                .navContainer {
                    height: auto;
                }
                .contentContainer {
                    position: relative;
                    width: 100%;
                    padding: 8px;
                }
            `}</style>
        </>
    );
}

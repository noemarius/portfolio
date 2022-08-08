export function Layout() {
    return (
        <>
            <div className="mainContainer"></div>
            <style jsx>{`
                .mainContainer {
                    display: flex;
                    flex-direction: column;
                    background-color: grey;
                    height: 1000px;
                    width: 100%;
                }
            `}</style>
        </>
    );
}

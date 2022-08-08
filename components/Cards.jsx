export function Cards(props) {
    return (
        <>
            <div className="card">
                <div>img</div>
                <div className="cardInfo">
                    info
                    <h3>{props.title}</h3>
                    <h4>{props.date}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
            <style jsx>{`
                .card {
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                    background-color: red;
                }

                .cardInfo {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                .cardInfo h3 {
                    flex: 0 0 100%;
                }
                .cardInfo h4 {
                    flex: 0 0 100%;
                }
            `}</style>
        </>
    );
}

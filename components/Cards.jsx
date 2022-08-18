export function Cards(props) {
    return (
        <>
            <div className="card">
                <div className="cardImg">
                    <img src="https://picsum.photos/200" alt="" />
                </div>
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
                    flex-direction: row;
                    width: 300px;
                    height: 100px;
                    border: 1px solid black;
                    border-radius: 10px;
                    gap: 30px;
                    overflow: hidden;
                }
                .cardImg {
                    width: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .cardImg img {
                    object-fit: fill;
                    width: 150px;
                    padding: 0;
                    margin: 0;
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

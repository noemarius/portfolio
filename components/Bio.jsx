export function Bio(props) {
    return (
        <>
            <div className="bio">
                <p>{props.bioText}</p>
            </div>
            <style jsx>
                {`
                    .bio p {
                        padding: 12px;
                    }
                `}
            </style>
        </>
    );
}

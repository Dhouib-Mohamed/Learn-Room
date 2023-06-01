import notfound from "../assets/notfound.png";


function NotFound() {
    return (
        <>
            <div style={{ display: 'flex',height:"750px", justifyContent: 'center', alignItems: 'center' }}>
                <img src={notfound} alt="quote" />
            </div></>
    );
}

export default NotFound;

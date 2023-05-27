import PreviewHeader from "../components/PreviewHeader.tsx";

export default function Preview() {
    return(
        <><PreviewHeader/>
            <div style={{height: '1000px', display: 'flex', alignItems: 'center'}}>
                <div style={{flex: 1, textAlign: 'left'}}>
                    <div style={{padding: '20px'}}>
                        <h1>Text Box</h1>
                        <p>This is some text inside the box.</p>
                        <button>Click me</button>
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <img src="your-image-url.jpg" alt="Your Image" style={{width: '100%', height: '100%'}}/>
                </div>
            </div>
        </>
    )
}
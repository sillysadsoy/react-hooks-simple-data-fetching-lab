// create your App component here
import { useState, useEffect } from 'react';

function App() {
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => setImgSrc(data.message));
    }, []);

    return (
        <div>
            <p>Loading...</p>
            <img alt='A Random Dog'
                 src={imgSrc} />
         </div>
    );
};

export default App;
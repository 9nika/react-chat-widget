import {useState, useEffect} from 'react';

export const UploadMessage = ({name, getLoaded, alignRight}) => {

  const [loaded, setLoaded] = useState(0);

  useEffect( () => {
    let qInterval = setInterval( () => {
      const gotLoaded = getLoaded(name);
      setLoaded(gotLoaded);
      if (gotLoaded > 0.99) clearInterval(qInterval);
    }, 1000)
  }, [name, getLoaded])

  const style = {
    display: "block", maxWidth: '300px', padding: 15, backgroundColor: "#f4f7f9", borderRadius: 10,
    marginLeft: alignRight ? 'auto' : 'initial'
  };
  
  return <>
    { loaded < 0.99 &&
      <div style={style} >
        <h1>📂</h1>
         {Math.round(loaded*100)}% Uploaded
      </div>
    }
  </>;

}



export const PhotoMessage = ({src, alignRight}) => {

  return <>
    <img src={src} alt="Message" style={{maxWidth: '300px', marginLeft: alignRight ? 'auto' : 'initial'}} />
  </>;

}


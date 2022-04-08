
export const FileMessage = ({href, alignRight}) => {

  const style = {
    display: "block", maxWidth: '300px', padding: 15, backgroundColor: "#f4f7f9", borderRadius: 10,
    marginLeft: alignRight ? 'auto' : 'initial'
  };
  
  return <>
    <a href={href} target="_blank" rel="noreferrer" style={style} >
      <h1>📂</h1>
       Download File
    </a>
  </>;

}


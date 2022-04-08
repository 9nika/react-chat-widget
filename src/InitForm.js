import {useRef} from 'react';

const formElements = {
  width: '94%', display: 'block', 
  margin: '3%', padding: 10,
  borderRadius: 10, border: 'none',
}
export const InitForm = ({handleInitForm, isShown}) => {

  const nameRef = useRef();
  const emailRef = useRef();

  const handleClickStart = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    handleInitForm({name, email})
  };

  const handleClickAttach = () => {
    document.getElementById('livx-chat-siofu_input').click();
  }

  return <>
    {isShown.current &&

      <div style={{width: '100%', display: 'block', padding: 10, backgroundColor: "#f4f7f9", borderRadius: 10}} >
        <input placeholder="Your Name" ref={nameRef} style={formElements} />
        <input placeholder="Your Email" ref={emailRef} style={formElements}  />
        <button onClick={handleClickStart} style={{...formElements, backgroundColor:"#35cce6", color: "#fff", cursor: "pointer"}} > Start Chat </button>
      </div >
    }
    
    <style> { " .rcw-sender { padding-top: 15px } "}</style>
    
    <button onClick={handleClickAttach} style={{position: "fixed", bottom: '38px', zIndex: 10, background: 'none', border: 'none', fontSize: '21px'}}>
      <img alt="attach a file" height="20" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjYwNS45NDJweCIgaGVpZ2h0PSI2MDUuOTQycHgiIHZpZXdCb3g9IjAgMCA2MDUuOTQyIDYwNS45NDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwNS45NDIgNjA1Ljk0MjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzUuMDk5LDBjLTQ1LjYzMiwwLTg4LjU0NCwxNy43NzctMTIwLjgyMiw1MC4wNTVMNTAuMDM2LDMxNC4yNzZjLTY2LjYwMyw2Ni42MjItNjYuNjAzLDE3NS4wMTgsMCwyNDEuNjQNCgkJCWMzMi4yNjksMzIuMjU5LDc1LjE3MSw1MC4wMjYsMTIwLjgwOCw1MC4wMjZzODguNTQ0LTE3Ljc2OCwxMjAuODEyLTUwLjAyNmwxOS43NTctMTkuNzUxbC0xMi4zMjEsMC41ODgNCgkJCWMtMC4wNjIsMC4wMDUtMC43MjgsMC4wMzMtMS44ODksMC4wMzNjLTUuNzA5LDAtMjUuNzc2LTAuNzQ2LTQ0LjMwOS0xMC4zMTJsLTIuODE1LTEuNDU0bC0yLjQzLDIuMDI3DQoJCQljLTIxLjQyNSwxNy45MTUtNDguNzA2LDI3Ljc3OS03Ni44MDYsMjcuNzc5Yy0zMi4wMzQsMC02Mi4xMTgtMTIuNDMyLTg0LjcxNC0zNS4wMDljLTIyLjU5Mi0yMi41OTEtMzUuMDM3LTUyLjY4LTM1LjAzNy04NC43MjQNCgkJCXMxMi40NDUtNjIuMTI3LDM1LjAzNy04NC43MjRMMzUwLjM3LDg2LjE0OWMyMi41OTItMjIuNTkxLDUyLjY4NS0zNS4wMzcsODQuNzI5LTM1LjAzN2MzMi4wNCwwLDYyLjEyOCwxMi40NDYsODQuNzI0LDM1LjAzNw0KCQkJYzQ2LjY2Niw0Ni43MDMsNDYuNjY2LDEyMi42OTYsMC4wMDUsMTY5LjM5OUwzNTQuNzk4LDQyMC4xOWMtOC4yOTEsOC4zMDYtMTkuNzcxLDEyLjg4MS0zMi4zMzEsMTIuODgxDQoJCQljLTEzLjY0MSwwLTI2Ljg0Ny01LjM5NC0zNi4yNDItMTQuODA4Yy05LjAxOC05LjAwOC0xNC4xODEtMjEuNTYzLTE0LjE3Ni0zNC40NjNjMC0xMi42MDQsNC43NzYtMjQuMzA0LDEzLjQzMS0zMi45MzgNCgkJCUw0MzIuNTQxLDIwNC4zNmwtMzYuMDk5LTM2LjA5NEwyNDkuMzY2LDMxNC43NWMtMTguNDc5LDE4LjQ3OS0yOC41MzksNDMuMjg0LTI4LjMzNCw2OS44NA0KCQkJYzAuMjA2LDI2LjQ0NCwxMC41MzgsNTEuMjIyLDI5LjA5LDY5Ljc3MmMxOC44NzEsMTguODY3LDQ1LjIyNiwyOS42ODcsNzIuMzIxLDI5LjY4N2MyNi4yNDQsMCw1MC41NjYtOS44NjMsNjguNDg2LTI3Ljc2NQ0KCQkJbDE2NC45ODYtMTY0LjYyOGM2Ni41ODktNjYuNjMxLDY2LjU4OS0xNzUuMDE4LDAtMjQxLjYwMUM1MjMuNjQzLDE3Ljc3Nyw0ODAuNzMxLDAsNDM1LjA5OSwweiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
    </button>

    </>
}


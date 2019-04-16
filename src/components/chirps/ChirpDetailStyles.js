import styled from 'styled-components';

export const Section = styled.section`
margin: 50px auto 0px auto;
border: 2px solid navy;
padding: 15px;
display: flex;
background: rgba(255,250,250, 0.85);
z-index: 10;
width: 60%;
.link {
  text-decoration: none;
  color: black;
}
button {
  height: 25px;
  background: red;
  color: white;
  border-radius: 5px;
}
h4 {
  font-weight: 300;
  margin: 0;
}
.info {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.body {
}
img {
  margin-right: 10px;
}
.handle {
  margin: 0 0 10px 0;
}
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  margin-top: -15%;
  img {
    z-index: -1;
    width: 50%;
    height: 50%;
  }
`;

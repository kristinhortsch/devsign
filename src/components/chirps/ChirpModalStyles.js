import styled from 'styled-components';

export const Section = styled.section`
.backdropStyle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(178, 178, 187, 0.7);
  .chirpModal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    width: 30%;
    margin: 10% auto;
    padding: 10px;
    box-shadow: 2px 2px 5px #00bfff;
    position: relative;
    .closeButton {
      text-align: right;
      position: absolute;
      top: 0;
      right: 0;
      margin-bottom: 3%;
      color: red;
    }
  }
  h3 {
    font-weight: 200;
  }
  @media only screen and (max-width:600px)  { 
    .chirpModal {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: white;
      width: 60%;
      margin: 50% auto;
      padding: 10px;
      box-shadow: 2px 2px 5px #00bfff;
      position: relative;
  }
}
`;

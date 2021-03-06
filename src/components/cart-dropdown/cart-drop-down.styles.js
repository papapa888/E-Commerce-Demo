import styled from 'styled-components'

export const CartDropdownContainer = styled.div`
position: absolute;
width: 250px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 77px;
right: 42px;
z-index: 5;
&::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  };
  margin-top: auto;
  white-space: nowrap;
`

export const CartItems = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
// `
// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   ::-webkit-scrollbar {
//     display: none; /* for Chrome, Safari, and Opera */
//   }
//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }

//   button {
    // margin-top: auto;
    // white-space: nowrap;
//   }
// }

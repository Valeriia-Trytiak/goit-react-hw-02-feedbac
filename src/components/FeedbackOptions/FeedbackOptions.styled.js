import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
display: inline-block;	
	
	padding: 0 24px;
	outline: none;
	border: 1px solid #fff;
	border-radius: 50px;
	height: 46px;
	line-height: 46px;
	font-size: 16px;
	font-weight: 600;
	text-decoration: none;
    text-transform: capitalize;
	color: #444;
	background-color: #fff;
	box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
	touch-action: manipulation;  
	vertical-align: top;
	transition: box-shadow 0.2s;

    &:hover{
    box-shadow: 0 1px 2px 0 rgb(26 115 232 / 45%), 0 1px 3px 1px rgb(26 115 232 / 30%);
	background-color: #297be6;
    color: white;
    }

    &:focus {
	box-shadow: 0 0 0 3px lightskyblue;
    }
`

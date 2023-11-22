import { createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
}

body{
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
}
`;

export default Global;
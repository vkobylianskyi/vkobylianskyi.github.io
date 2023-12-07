import { Button, styled } from "@mui/material";

export const FormAction = styled(Button)`
    display: block;
    text-transform: none;
    background: linear-gradient(135deg, #ff8c05 0%, #d61a5e 100%);
    color: #fff;
    border: 0;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 2px;
    padding: 13px 20px;
    font-weight: 700;
    font-size: 16px;
    position: relative;
    text-align: center;

    &:hover::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 80%;
        background: ${({ theme }) => theme.palette.primary.light};
        animation: titles 0.4s cubic-bezier(0.25, 0.61, 1, 0.47) forwards;
        transform: translateY(100%);
        animation-delay: 0.1s;
        z-index: 1;
    }

    @keyframes titles {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(-101%);
        }
    }

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            marginLeft: 0,
            marginTop: "30px",
        },
    })}
`;

import { Box, Link, styled, Typography } from "@mui/material";

export const DocumentsWrapper = styled(Box)`
    padding: 30px;
    background-color: ${({ theme }) => theme.palette.primary.light};
    margin-top: 40px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);

    ${({ theme }) => ({
        [theme.breakpoints.up("lg")]: {
            padding: 40,
        },
    })}
`;

export const DocumentsTitle = styled(Typography)`
    position: relative;
    z-index: 2;
`;

export const DocumentsLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    display: block;
    background: linear-gradient(135deg, #ff8c05 0%, #d61a5e 100%);
    color: #fff;
    border: 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 2px;
    padding: 13px 20px;
    font-weight: 700;
    font-size: 16px;
    position: relative;
    text-align: center;
    width: 225px;

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
            order: 2,
            
            "&:first-of-type": {
                order: 1
            },
        
            "&:nth-of-type(2)": {
                order: 0
            }
        },
    })}
`;

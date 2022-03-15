import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all .3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb .5s;

    :hover {
        opacity: .8;
    }
    
    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
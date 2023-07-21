import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    margin-top: 30px;
    width: 100%;
    max-width: 400px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
`

export const UploadContent = styled.div`
    width: 100%;
    max-width: 400px;
    border-radius: 4px;
    padding: 20px;
    margin-top: 15px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    transition: 0.2s;

    background-color: #edebeb;
    :hover{
        background-color: white;
        transition: 0.2s;
    }

    p{
        margin-right: 5px;
        color: black;
    }
`
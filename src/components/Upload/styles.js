import styled, { css } from 'styled-components'

const dragActive = css`
    border-color: #4fe039;
`

const dragReject = css`
    border-color: #f04242;
`

export const DropContainer = styled.div`
    border: 2px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive}
    ${props => props.isDragReject && dragReject}
`

const messageColors = {
    default: '#999',
    error: '#f04242',
    success: '#4fe039'
}

export const UploadMessage = styled.p`
    padding: 20px;
    color: ${props => messageColors[props.type || messageColors.default]}
`
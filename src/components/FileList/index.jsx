import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import {MdLink, MdError, MdCheck} from 'react-icons/md'

import { Container, FileInfo, Preview } from './styles'

const FileList = ({ files, onDelete }) => {
    return(
        <Container>
            {files.map(file => (
                    <li key={file.id}>
                        <FileInfo>
                            {file.preview && <Preview src={file.preview}/>}
                            <div>
                                <strong>{file.name}</strong>
                                <span>{file.readableSize}<button onClick={() => onDelete(file.id)}>{file.uploaded ? 'Excluir' : 'Cancelar'}</button></span>
                            </div>
                        </FileInfo>
                        <div style={{display: 'flex'}}>
                            {!file.uploaded && !file.error && <CircularProgressbar 
                                styles={{ root: {width: 24}, path: {stroke: '#336979'} }}
                                strokeWidth={15}
                                value={file.progress}
                            />}
                            {file.url && <a href={file.url} target="_black" rel="noopener noreferrer">
                                <MdLink style={{ marginRight: 8 }} size={24} color="#222"></MdLink>
                            </a>}
                            {file.uploaded && <MdCheck size={24} color='#4fe039'></MdCheck>}
                            {file.error && <MdError size={24} color='#f04242'></MdError>}
                        </div>
                    </li>
            ))}
        </Container>
    )
}

export default FileList
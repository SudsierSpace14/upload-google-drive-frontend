import GlobalStyle from "./styles/global";
import { Component } from "react";

import { Container, Content, UploadContent } from './styles'
import FileList from './components/FileList'
import { MdFileUpload } from 'react-icons/md'

import Upload from "./components/Upload"
import api from './services/api'

import { uniqueId } from 'lodash'
import filesize from 'filesize'

class App extends Component {

  state = {
    uploadedFiles: []
  }

  handleType = (file) => {
    if (file.name.split('.')[1] === 'psd') {
      return 'https://w7.pngwing.com/pngs/818/370/png-transparent-photoshop-2020-logo-icon-thumbnail.png'
    }
    if (file.name.split('.')[1] === 'html') {
      return 'https://image.flaticon.com/icons/png/512/174/174854.png'
    }
    if (file.name.split('.')[1] === 'js') {
      return 'data:image/png;base64,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'
    }
    if (file.name.split('.')[1] === 'txt') {
      return 'https://image.flaticon.com/icons/png/512/201/201195.png'
    }
    if (file.name.split('.')[1] === 'css') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
    }
    if (file.name.split('.')[1] === 'zip' || file.name.split('.')[1] === 'rar') {
      return 'https://image.flaticon.com/icons/png/512/1242/1242452.png'
    }
    if (file.name.split('.')[1] === 'docx') {
      return 'https://cdn.iconscout.com/icon/free/png-512/microsoft-word-1411849-1194338.png'
    }
    if (file.type === 'application/pdf') {
      return 'https://image.flaticon.com/icons/png/512/337/337946.png'
    }
    if (file.type.split('/')[0] === 'image') {
      return URL.createObjectURL(file)
    }
    if (file.type.split('/')[0] === 'video') {
      return 'https://image.flaticon.com/icons/png/512/92/92353.png'
    }

    return null
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: this.handleType(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    })
  }

  onClickUpload = () => {
    this.state.uploadedFiles.forEach(elem => !elem.uploaded && this.processUpload(elem));
  }

  handleDelete = async id => {
    const file = this.state.uploadedFiles.find(e => e.id === id)

    if (file.uploaded) {
      await api.delete(`posts/${id}`)
      this.setState({
        uploadedFiles: this.state.uploadedFiles.filter(e => e.id !== id)
      })
    } else {
      this.setState({
        uploadedFiles: this.state.uploadedFiles.filter(e => e.id !== id)
      })
    }
  }

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(elem => {
        return elem.id === id ? { ...elem, ...data } : elem
      })
    })
  }

  processUpload = uploadedFile => {
    const data = new FormData()

    data.append('file', uploadedFile.file, uploadedFile.name)

    api.post('posts', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total))

        this.updateFile(uploadedFile.id, { progress })
      }
    }).then(res => {
      this.updateFile(uploadedFile.id, {
        uploaded: true,
        id: res.data.post._id,
        url: res.data.webViewLink
      })
    })
      .catch(() => this.updateFile(uploadedFile.id, {
        error: true
      }))
  }

  render() {

    const { uploadedFiles } = this.state

    return (
      <Container>
        <GlobalStyle />
        <Content>
          <Upload onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (
            <FileList files={uploadedFiles} onDelete={this.handleDelete} />
          )}
        </Content>
        <UploadContent onClick={this.onClickUpload}>
          <p>Upload</p>
          <MdFileUpload size={24} color='black'></MdFileUpload>
        </UploadContent>
      </Container>
    );
  }
}

export default App;

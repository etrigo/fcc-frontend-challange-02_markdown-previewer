import React, { useState, useEffect } from 'react'
import './styles/style.css'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import markdown from './utilities/markdown.md'


const App = () => {
  const [editorContent, setEditorContent] = useState("")
  
  // get inition markdown from file and set to state
  useEffect(() => {
    async function getMarkdown() {
      const res = await fetch(markdown)
      const text = await res.text()
      setEditorContent(text)
    }
    getMarkdown()
  }, [])

  function handleChange(event) {
    setEditorContent(event.value)
  }
  

  return (
    <div id='wrapper'>
      <Editor text={editorContent} change={handleChange} />
      <Previewer text={editorContent} />
    </div>
  )
}

export default App
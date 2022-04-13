import React, { useState, useEffect } from 'react'
import './styles/style.css'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import markdown from './utilities/markdown.md'

const App = () => {
  const [editorContent, setEditorContent] = useState('')
  const [expanded, setExpanded] = useState({
    expandEditor: false,
    expandPreview: false
  })

  // get inition markdown from file and set to state
  useEffect(() => {
    async function getMarkdown () {
      const res = await fetch(markdown)
      const text = await res.text()
      setEditorContent(text)
    }
    getMarkdown()
  }, [])

  function handleChange (event) {
    setEditorContent(event.value)
  }

  function handleExpand (type) {
    setExpanded(prev => {
      Object.keys(prev).filter(key =>
        !prev[type] ? (prev[key] = false) : prev[key]
      )
      return {
        ...prev,
        [type]: !prev[type]
      }
    })
  }
  console.log(expanded.expandEditor)

  return (
    <div id='wrapper'>
      <Editor
        text={editorContent}
        change={handleChange}
        expanded={expanded}
        expand={handleExpand}
      />
      <Previewer
        text={editorContent}
        expanded={expanded}
        expand={handleExpand}
      />
      <div id='credentials-box'>
        <p>
          Concept bv{' '}
          <a href='https://freecodeCamp.com/' target='_blank'>
            FCC
          </a>{' '}
          | Build by{' '}
          <a href='https://github.com/etrigo/' target='_blank'>
            Etrigo
          </a>
        </p>
      </div>
    </div>
  )
}

export default App

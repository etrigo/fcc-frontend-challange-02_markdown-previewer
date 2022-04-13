import React from 'react'
import {
  FaFreeCodeCamp,
  FaExpandArrowsAlt,
  FaCompressArrowsAlt
} from 'react-icons/fa'

const Editor = ({text, change}) => {
  return (
    <div id='editor-wrap'>
      <div id='editor-header'>
        <div>
          <FaFreeCodeCamp />
          <h1>Editor</h1>
        </div>
        <FaExpandArrowsAlt />
      </div>
      <textarea id='editor' type='text' value={text} onChange={event => change(event.target) } ></textarea>
    </div>
  )
}

export default Editor

import React from 'react'
import {
  FaFreeCodeCamp,
  FaExpandArrowsAlt,
  FaCompressArrowsAlt
} from 'react-icons/fa'

const Editor = ({ text, change, expanded, expand }) => {
  const expander = expanded.expandEditor ? (
    <FaCompressArrowsAlt onClick={() => expand('expandEditor')} />
  ) : (
    <FaExpandArrowsAlt onClick={() => expand('expandEditor')} />
  )

  const expandClass = expanded.expandEditor ? "expanded" : expanded.expandPreview && "hidden"
  // const display = expanded.expandPreview && {display: 'none'}

  return (
    <div id='editor-wrap' className={expandClass} >
      <div id='editor-header'>
        <div>
          <FaFreeCodeCamp />
          <h1>Editor</h1>
        </div>
        {expander}
      </div>
      <textarea
        id='editor'
        type='text'
        value={text}
        onChange={event => change(event.target)}
      ></textarea>
    </div>
  )
}

export default Editor

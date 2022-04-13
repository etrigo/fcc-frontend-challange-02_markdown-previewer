import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import {
  FaFreeCodeCamp,
  FaExpandArrowsAlt,
  FaCompressArrowsAlt
} from 'react-icons/fa'


const Previewer = ({text, expanded, expand}) => {
  const expander = expanded.expandPreview ? (
    <FaCompressArrowsAlt onClick={() => expand('expandPreview')} />
  ) : (
    <FaExpandArrowsAlt onClick={() => expand('expandPreview')} />
  )

  const expandClass = expanded.expandPreview ? "expanded" : expanded.expandEditor && "hidden"

  return (
    <div id='preview-wrap' className={expandClass}>
      <div id='preview-header'>
        <div>
          <FaFreeCodeCamp />
          <h1>Preview</h1>
        </div>
        {expander}
      </div>
      <div id='preview'>      
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm, remarkBreaks]} />
      </div>
    </div>
  )
}

export default Previewer
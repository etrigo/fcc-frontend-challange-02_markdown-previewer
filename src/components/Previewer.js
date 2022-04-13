import React from 'react'
import { marked } from 'marked'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  FaFreeCodeCamp,
  FaExpandArrowsAlt,
  FaCompressArrowsAlt
} from 'react-icons/fa'


const Previewer = ({text}) => {
  return (
    <div id='preview-wrap'>
      <div id='preview-header'>
        <div>
          <FaFreeCodeCamp />
          <h1>Preview</h1>
        </div>
        <FaExpandArrowsAlt />
      </div>
      <div id='preview'>      
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}

export default Previewer
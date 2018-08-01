import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Controlled as CodeMirror} from 'react-codemirror2'

import codeMirrorCSS from 'codemirror/lib/codemirror.css'

const sampleCodeInternal =
`pragma solidity ^0.4.15;

// Proof of Existence contract, version 1
contract ProofOfExistence1 {

  // state
  bytes32 public proof;

  // calculate and store the proof for a document
  // *transactional function*
  function notarize(string document) {
    proof = proofFor(document);
  }

  // helper function to get a document's sha256
  // *read-only function*
  function proofFor(string document) constant returns (bytes32) {
    return sha256(document);
  }
}`

class CodeInputArea extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  }

  constructor(props) {
    super();
    this.state = {
      value: props.code || sampleCodeInternal
    };
  }

  handleChange = (editor, data, value) => {
    this.props.handleChange
      ? this.props.handleChange(value, data, editor)
      : console.log('controlled', {value})
  }

  render() {
    return (
      <React.Fragment>
        <CodeMirror
          value={this.state.value}
          options={{
            mode: 'xml',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            this.setState({value});
          }}
          onChange={(editor, data, value) => {
            this.handleChange(editor, data, value)
          }}
        />
      <style jsx global>
        {codeMirrorCSS}
      </style>
      <style jsx global>{`
        .CodeMirror * {
          font-family: monospace !important;
          font-size: 12px !important;
        }
        .CodeMirror-gutter { background: #f2f4f9; }
        .CodeMirror-linenumber { color: #052892; font-weight: bold; }
        pre.CodeMirror-line { padding-left: 20px; }
      `}
      </style>
    </React.Fragment>
    );
  }
}

// CodeInputArea.defaultProps = {}

export default CodeInputArea
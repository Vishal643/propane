import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const PostStory2 = ({ handleDesc1 }) => {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);
	const [convertedContent, setConvertedContent] = useState(null);
	const handleEditorChange = (state) => {
		setEditorState(state);
		convertContentToHTML();
	};
	const convertContentToHTML = () => {
		let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
		setConvertedContent(currentContentAsHTML);
		handleDesc1(currentContentAsHTML);
	};

	return (
		<div className='App'>
			<Editor
				editorState={editorState}
				onEditorStateChange={handleEditorChange}
				wrapperClassName='wrapper-class'
				editorClassName='editor-class'
				toolbarClassName='toolbar-class'
			/>
		</div>
	);
};
export { PostStory2 };

import JoditEditor from 'jodit-react';
import React from 'react';

const Write = () => {
  const config = {
    readonly: false,
    allowResizeX: false,
    allowResizeY: false,
    height: '700px',
    width: '100%',
    enableDragAndDropFileToEditor: true,
    spellcheck: true,
    buttons: [
      'source',
      '|',
      'bold',
      'italic',
      'underline',
      '|',
      'ul',
      'ol',
      '|',
      'font',
      'fontsize',
      'brush',
      'paragraph',
      '|',
      'image',
      'table',
      'link',
      '|',
      'align',
      '|',
      'undo',
      'redo',
      '|',
      'image',
      'video',
      'table',
    ],
    uploader: { insertImageAsBase64URI: true },
    removeButtons: ['brush', 'file'],
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: true,
    toolbarAdaptive: true,
    toolbarSticky: true,
    resizeBy: false,
    style: {
      background: 'Transparent',
      color: 'rgba(0,0,0,1)',
      border: 'none',
    },
  };
  return (
    <>
      <div className="write1"></div>
      <div className="write">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/760728/pexels-photo-760728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="writeImg"
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i class="fa fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
            <input
              type="text"
              placeholder="Title..."
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup1">
            <JoditEditor config={config} />
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
};

export default Write;

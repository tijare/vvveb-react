import React, { useEffect } from 'react';
import EditorTemplate from './EditorTemplating'
const NewsEditor = (props) => {
    const {
        init,
        initEditorPlugin
    } = props;
    useEffect(()=>{
        if(initEditorPlugin){
            init()
        }
        
    },[initEditorPlugin])
    return (
        <div id="vvveb-builder">
    
          <div id="top-panel">
            {/* <img src="./vvv/img/logo.png" alt="Vvveb" className="float-left" id="logo" /> */}
    
    
            <div className="btn-group float-left" role="group">
              <button className="btn btn-light" title="Toggle file manager" id="toggle-file-manager-btn"
                data-vvveb-action="toggleFileManager" data-toggle="button" aria-pressed="false">
                {/* <img src="./vvv/libs/builder/icons/file-manager-layout.svg" width="20px" height="20px" /> */}
              </button>
    
              <button className="btn btn-light" title="Toggle left column" id="toggle-left-column-btn"
                data-vvveb-action="toggleLeftColumn" data-toggle="button" aria-pressed="false">
                {/* <img src="./vvv/libs/builder/icons/left-column-layout.svg" width="20px" height="20px" /> */}
              </button>
    
              <button className="btn btn-light" title="Toggle right column" id="toggle-right-column-btn"
                data-vvveb-action="toggleRightColumn" data-toggle="button" aria-pressed="false">
                {/* <img src="./vvv/libs/builder/icons/right-column-layout.svg" width="20px" height="20px" /> */}
              </button>
            </div>
    
            <div className="btn-group mr-3" role="group">
              <button className="btn btn-light" title="Undo (Ctrl/Cmd + Z)" id="undo-btn" data-vvveb-action="undo"
                data-vvveb-shortcut="ctrl+z">
                <i className="la la-undo"></i>
              </button>
    
              <button className="btn btn-light" title="Redo (Ctrl/Cmd + Shift + Z)" id="redo-btn" data-vvveb-action="redo"
                data-vvveb-shortcut="ctrl+shift+z">
                <i className="la la-undo la-flip-horizontal"></i>
              </button>
            </div>
    
    
            <div className="btn-group mr-3" role="group">
              <button className="btn btn-light" title="Designer Mode (Free component dragging)" id="designer-mode-btn"
                data-toggle="button" aria-pressed="false" data-vvveb-action="setDesignerMode">
                <i className="la la-hand-grab-o"></i>
              </button>
    
              <button className="btn btn-light" title="Preview" id="preview-btn" type="button" data-toggle="button"
                aria-pressed="false" data-vvveb-action="preview">
                <i className="la la-eye"></i>
              </button>
    
              <button className="btn btn-light" title="Fullscreen (F11)" id="fullscreen-btn" data-toggle="button"
                aria-pressed="false" data-vvveb-action="fullscreen">
                <i className="la la-arrows"></i>
              </button>
    
              <button className="btn btn-light" title="Download" id="download-btn" data-vvveb-action="download"
                data-download="index.html">
                <i className="la la-download"></i>
              </button>
    
            </div>
    
    
            <div className="btn-group mr-3 float-right" role="group">
              <button className="btn btn-primary btn-icon" title="Export (Ctrl + E)" id="save-btn"
                data-vvveb-action="saveAjax" data-vvveb-url="/admin/?module=editor/editor&action=save"
                data-v-vvveb-shortcut="ctrl+e">
                <i className="la la-save"></i> <span data-v-gettext>Save page</span>
              </button>
            </div>
    
            <div className="btn-group float-right mr-3 responsive-btns" role="group">
              <button id="mobile-view" data-view="mobile" className="btn btn-light" title="Mobile view"
                data-vvveb-action="viewport">
                <i className="la la-mobile-phone"></i>
              </button>
    
              <button id="tablet-view" data-view="tablet" className="btn btn-light" title="Tablet view"
                data-vvveb-action="viewport">
                <i className="la la-tablet"></i>
              </button>
    
              <button id="desktop-view" data-view="" className="btn btn-light" title="Desktop view"
                data-vvveb-action="viewport">
                <i className="la la-laptop"></i>
              </button>
    
            </div>
    
          </div>
    
          <div id="left-panel">
    
            <div className="drag-elements">
    
              <div className="header">
                <ul className="nav nav-tabs  nav-fill" id="elements-tabs" role="tablist">
                  <li className="nav-item component-tab">
                    <a className="nav-link active" id="components-tab" data-toggle="tab" href="#components"
                      role="tab" aria-controls="components" aria-selected="true" title="Components">
                      {/* <img
                        src="./vvv/libs/builder/icons/product.svg" height="23" /> */}
                      <div><small>Components</small></div>
                    </a>
                  </li>
                  <li className="nav-item blocks-tab">
                    <a className="nav-link" id="blocks-tab" data-toggle="tab" href="#blocks" role="tab"
                      aria-controls="blocks" aria-selected="false" title="Blocks">
                      {/* <img
                        src="./vvv/libs/builder/icons/list_group.svg" height="23" /> */}
                      <div><small>Sections</small></div>
                    </a>
                  </li>
                  <li className="nav-item component-properties-tab" style={{ display: 'none' }}>
                    <a className="nav-link" id="properties-tab" data-toggle="tab" href="#properties" role="tab"
                      aria-controls="blocks" aria-selected="false" title="Properties">
                      {/* <img
                        src="./vvv/libs/builder/icons/filters.svg" height="23" /> */}
                      <div><small>Properties</small></div>
                    </a>
                  </li>
                </ul>
    
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="components" role="tabpanel"
                    aria-labelledby="components-tab">
    
                    <div className="search">
                      <input className="form-control form-control-sm component-search"
                        placeholder="Search components" type="text" data-vvveb-action="componentSearch"
                        data-vvveb-on="keyup" />
                      <button className="clear-backspace" data-vvveb-action="clearComponentSearch">
                        <i className="la la-close"></i>
                      </button>
                    </div>
    
                    <div className="drag-elements-sidepane sidepane">
                      <div>
    
                        <ul className="components-list clearfix" data-type="leftpanel">
                        </ul>
    
                      </div>
                    </div>
                  </div>
    
                  <div className="tab-pane fade" id="blocks" role="tabpanel" aria-labelledby="blocks-tab">
    
    
                    <ul className="nav nav-tabs nav-fill sections-tabs" id="properties-tabs" role="tablist">
                      <li className="nav-item content-tab">
                        <a className="nav-link active" data-toggle="tab" href="#sections-new-tab" role="tab"
                          aria-controls="components" aria-selected="true">
                          <i className="la la-plus"></i>
                          <div><span>Add section</span></div>
                        </a>
                      </li>
                      <li className="nav-item style-tab">
                        <a className="nav-link" data-toggle="tab" href="#sections-list" role="tab"
                          aria-controls="blocks" aria-selected="false">
                          <i className="la la-bars"></i>
                          <div><span>Page Sections</span></div>
                        </a>
                      </li>
                    </ul>
    
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="sections-new-tab" data-section="content"
                        role="tabpanel" aria-labelledby="content-tab">
    
    
                        <div className="search">
                          <input className="form-control form-control-sm block-search"
                            placeholder="Search sections" type="text" data-vvveb-action="blockSearch"
                            data-vvveb-on="keyup" />
                          <button className="clear-backspace" data-vvveb-action="clearBlockSearch">
                            <i className="la la-close"></i>
                          </button>
                        </div>
    
    
                        <div className="drag-elements-sidepane sidepane">
                          <div>
    
                            <ul className="blocks-list clearfix" data-type="leftpanel">
                            </ul>
    
                          </div>
                        </div>
    
                      </div>
    
                      <div className="tab-pane fade show" id="sections-list" data-section="style" role="tabpanel"
                        aria-labelledby="style-tab">
    
                        <div className="sections">
    
                          <div className="section-item">
                            <div className="handle"></div>
                            <div>
    
                              <div className="name">Top header <div className="type">header</div>
                              </div>
    
                            </div>
                            <div className="buttons">
                              <a className="delete-btn" href="" title="Remove element"><i
                                className="la la-trash text-danger"></i></a>
                              <a className="up-btn" href="" title="Move element up"><i
                                className="la la-arrow-up"></i></a>
                              <a className="down-btn" href="" title="Move element down"><i
                                className="la la-arrow-down"></i></a>
                              <a className="properties-btn" href="" title="Properties"><i
                                className="la la-cog"></i></a>
                            </div>
                          </div>
                          <div className="section-item">
                            <div className="handle"></div>
                            <div>
    
                              <div className="name">Welcome area <div className="type">section</div>
                              </div>
    
                            </div>
                            <div className="buttons">
                              <a className="delete-btn" href="" title="Remove element"><i
                                className="la la-trash text-danger"></i></a>
                              <a className="up-btn" href="" title="Move element up"><i
                                className="la la-arrow-up"></i></a>
                              <a className="down-btn" href="" title="Move element down"><i
                                className="la la-arrow-down"></i></a>
                              <a className="properties-btn" href="" title="Properties"><i
                                className="la la-cog"></i></a>
                            </div>
                          </div>
    
                        </div>
    
                      </div>
    
                    </div>
    
                  </div>
    
                  <div className="tab-pane fade" id="properties" role="tabpanel" aria-labelledby="blocks-tab">
                    <div className="component-properties-sidepane">
                      <div>
                        <div className="component-properties">
                          <ul className="nav nav-tabs nav-fill" id="properties-tabs" role="tablist">
                            <li className="nav-item content-tab">
                              <a className="nav-link active" data-toggle="tab"
                                href="#content-left-panel-tab" role="tab" aria-controls="components"
                                aria-selected="true">
                                <i className="la la-lg la-cube"></i>
                                <div><span>Content</span></div>
                              </a>
                            </li>
                            <li className="nav-item style-tab">
                              <a className="nav-link" data-toggle="tab" href="#style-left-panel-tab"
                                role="tab" aria-controls="blocks" aria-selected="false">
                                <i className="la la-lg la-image"></i>
                                <div><span>Style</span></div>
                              </a>
                            </li>
                            <li className="nav-item advanced-tab">
                              <a className="nav-link" data-toggle="tab" href="#advanced-left-panel-tab"
                                role="tab" aria-controls="blocks" aria-selected="false">
                                <i className="la la-lg la-cog"></i>
                                <div><span>Advanced</span></div>
                              </a>
                            </li>
                          </ul>
    
                          <div className="tab-content">
                            <div className="tab-pane fade show active" id="content-left-panel-tab"
                              data-section="content" role="tabpanel" aria-labelledby="content-tab">
                              <div className="mt-4 text-center">Click on an element to edit.</div>
                            </div>
    
                            <div className="tab-pane fade show" id="style-left-panel-tab"
                              data-section="style" role="tabpanel" aria-labelledby="style-tab">
                            </div>
    
                            <div className="tab-pane fade show" id="advanced-left-panel-tab"
                              data-section="advanced" role="tabpanel" aria-labelledby="advanced-tab">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
    
    
          <div id="canvas">
            <div id="iframe-wrapper">
              <div id="iframe-layer">
    
                <div id="highlight-box">
                  <div id="highlight-name"></div>
    
                  <div id="section-actions">
                    <a id="add-section-btn" href="" title="Add element"><i className="la la-plus"></i></a>
                  </div>
                </div>
    
                <div id="select-box">
    
                  <div id="wysiwyg-editor">
                    <a id="bold-btn" href="" title="Bold"><i className="la la-bold"></i></a>
                    <a id="italic-btn" href="" title="Italic"><i className="la la-italic"></i></a>
                    <a id="underline-btn" href="" title="Underline"><i className="la la-underline"></i></a>
                    <a id="strike-btn" href="" title="Strikeout"><del>S</del></a>
                    <a id="link-btn" href="" title="Create link"><i className="la la-link"></i></a>
    
                    <div className="dropdown">
                      <a className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="la la-align-left"></i>
                      </a>
    
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#"><i className="la la-lg la-align-left"></i> Align
                                        Left</a>
                        <a className="dropdown-item" href="#"><i className="la la-lg la-align-center"></i> Align
                                        Center</a>
                        <a className="dropdown-item" href="#"><i className="la la-lg la-align-right"></i> Align
                                        Right</a>
                        <a className="dropdown-item" href="#"><i className="la la-lg la-align-justify"></i> Align
                                        Justify</a>
                      </div>
                    </div>
    
                    <input name="color" type="color" pattern="#[a-f0-9]{6}" className="form-control" />
    
                    <select className="custom-select">
                      <option value="">Default</option>
                      <option value="Arial, Helvetica, sans-serif">Arial</option>
                      <option value="'Lucida Sans Unicode', 'Lucida Grande', sans-serif">Lucida Grande
                                </option>
                      <option value="'Palatino Linotype', 'Book Antiqua', Palatino, serif">Palatino Linotype
                                </option>
                      <option value="'Times New Roman', Times, serif">Times New Roman</option>
                      <option value="Georgia, serif">Georgia, serif</option>
                      <option value="Tahoma, Geneva, sans-serif">Tahoma</option>
                      <option value="'Comic Sans MS', cursive, sans-serif">Comic Sans</option>
                      <option value="Verdana, Geneva, sans-serif">Verdana</option>
                      <option value="Impact, Charcoal, sans-serif">Impact</option>
                      <option value="'Arial Black', Gadget, sans-serif">Arial Black</option>
                      <option value="'Trebuchet MS', Helvetica, sans-serif">Trebuchet</option>
                      <option value="'Courier New', Courier, monospace">Courier New</option>
                      <option value="'Brush Script MT', sans-serif">Brush Script</option>
                    </select>
                  </div>
    
                  <div id="select-actions">
                    <a id="drag-btn" href="" title="Drag element"><i className="la la-arrows"></i></a>
                    <a id="parent-btn" href="" title="Select parent"><i
                      className="la la-level-down la-rotate-180"></i></a>
    
                    <a id="up-btn" href="" title="Move element up"><i className="la la-arrow-up"></i></a>
                    <a id="down-btn" href="" title="Move element down"><i className="la la-arrow-down"></i></a>
                    <a id="clone-btn" href="" title="Clone element"><i className="la la-copy"></i></a>
                    <a id="delete-btn" href="" title="Remove element"><i className="la la-trash"></i></a>
                  </div>
                </div>
    
                <div id="add-section-box" className="drag-elements">
    
                  <div className="header">
                    <ul className="nav nav-tabs" id="box-elements-tabs" role="tablist">
                      <li className="nav-item component-tab">
                        <a className="nav-link active" id="box-components-tab" data-toggle="tab"
                          href="#box-components" role="tab" aria-controls="components"
                          aria-selected="true"><i className="la la-lg la-cube"></i>
                          <div><small>Components</small></div>
                        </a>
                      </li>
                      <li className="nav-item blocks-tab">
                        <a className="nav-link" id="box-blocks-tab" data-toggle="tab" href="#box-blocks"
                          role="tab" aria-controls="blocks" aria-selected="false"><i
                            className="la la-lg la-image"></i>
                          <div><small>Blocks</small></div>
                        </a>
                      </li>
                      <li className="nav-item component-properties-tab" style={{ display: 'none' }}>
                        <a className="nav-link" id="box-properties-tab" data-toggle="tab" href="#box-properties"
                          role="tab" aria-controls="blocks" aria-selected="false"><i
                            className="la la-lg la-cog"></i>
                          <div><small>Properties</small></div>
                        </a>
                      </li>
                    </ul>
    
                    <div className="section-box-actions">
    
                      <div id="close-section-btn" className="btn btn-light btn-sm bg-white btn-sm float-right"><i
                        className="la la-close"></i></div>
    
                      <div className="small mt-1 mr-3 float-right">
    
                        <div className="custom-control custom-radio custom-control-inline">
                          <input type="radio" id="add-section-insert-mode-after" value="after"
                            defaultChecked="checked" name="add-section-insert-mode"
                            className="custom-control-input" />
                          <label className="custom-control-label"
                            htmlFor="add-section-insert-mode-after">After</label>
                        </div>
    
                        <div className="custom-control custom-radio custom-control-inline">
                          <input type="radio" id="add-section-insert-mode-inside" value="inside"
                            name="add-section-insert-mode" className="custom-control-input" />
                          <label className="custom-control-label"
                            htmlFor="add-section-insert-mode-inside">Inside</label>
                        </div>
    
                      </div>
    
                    </div>
    
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="box-components" role="tabpanel"
                        aria-labelledby="components-tab">
    
                        <div className="search">
                          <input className="form-control form-control-sm component-search"
                            placeholder="Search components" type="text"
                            data-vvveb-action="addBoxComponentSearch" data-vvveb-on="keyup" />
                          <button className="clear-backspace" data-vvveb-action="clearComponentSearch">
                            <i className="la la-close"></i>
                          </button>
                        </div>
    
                        <div>
                          <div>
    
                            <ul className="components-list clearfix" data-type="addbox">
                            </ul>
    
                          </div>
                        </div>
    
                      </div>
                      <div className="tab-pane fade" id="box-blocks" role="tabpanel" aria-labelledby="blocks-tab">
    
                        <div className="search">
                          <input className="form-control form-control-sm block-search"
                            placeholder="Search blocks" type="text"
                            data-vvveb-action="addBoxBlockSearch" data-vvveb-on="keyup" />
                          <button className="clear-backspace" data-vvveb-action="clearBlockSearch">
                            <i className="la la-close"></i>
                          </button>
                        </div>
    
                        <div>
                          <div>
    
                            <ul className="blocks-list clearfix" data-type="addbox">
                            </ul>
    
                          </div>
                        </div>
    
                      </div>
                    </div>
                  </div>
    
                </div>
              </div>
              <iframe src="about:none" id="iframe1"></iframe>
            </div>
    
    
          </div>
    
          <div id="right-panel">
            <div className="component-properties">
    
              <ul className="nav nav-tabs nav-fill" id="properties-tabs" role="tablist">
                <li className="nav-item content-tab">
                  <a className="nav-link active" data-toggle="tab" href="#content-tab" role="tab"
                    aria-controls="components" aria-selected="true">
                    <i className="la la-lg la-cube"></i>
                    <div><span>Content</span></div>
                  </a>
                </li>
                <li className="nav-item style-tab">
                  <a className="nav-link" data-toggle="tab" href="#style-tab" role="tab" aria-controls="blocks"
                    aria-selected="false">
                    <i className="la la-lg la-image"></i>
                    <div><span>Style</span></div>
                  </a>
                </li>
                <li className="nav-item advanced-tab">
                  <a className="nav-link" data-toggle="tab" href="#advanced-tab" role="tab" aria-controls="blocks"
                    aria-selected="false">
                    <i className="la la-lg la-cog"></i>
                    <div><span>Advanced</span></div>
                  </a>
                </li>
              </ul>
    
              <div className="tab-content">
                <div className="tab-pane fade show" id="content-tab" data-section="content" role="tabpanel"
                  aria-labelledby="content-tab">

                </div>
    
                <div className="tab-pane fade show active" id="style-tab" data-section="style" role="tabpanel"
                  aria-labelledby="style-tab">
                </div>
    
                <div className="tab-pane fade show" id="advanced-tab" data-section="advanced" role="tabpanel"
                  aria-labelledby="advanced-tab">
                </div>
    
    
              </div>
    
    
    
            </div>
          </div>
          <EditorTemplate />
    </div >
    
      );
}

export default NewsEditor;
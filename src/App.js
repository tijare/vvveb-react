import React, { useEffect, useState } from 'react';
import Editor from './Editor';
import $ from 'jquery';

function App() {
  const [initEditorPlugin, setInitEditorPlugin] = useState(false);
  const jsPlugin = [
    '/assets/vvvebjs-libs/js/jquery.min.js',
    '/assets/vvvebjs-libs/js/jquery.hotkeys.js',
    '/assets/vvvebjs-libs/js/popper.min.js',
    '/assets/vvvebjs-libs/js/bootstrap.min.js',
    '/assets/vvvebjs-libs/libs/builder/builder.js',
    '/assets/vvvebjs-libs/libs/builder/undo.js',
    '/assets/vvvebjs-libs/libs/builder/inputs.js',
    '/assets/vvvebjs-libs/libs/builder/components-bootstrap4.js',
    '/assets/vvvebjs-libs/libs/builder/components-widgets.js',
    '/assets/vvvebjs-libs/libs/builder/blocks-bootstrap4.js',
  ];
  const totalPlugin = jsPlugin.length;
  const VvvebjsLib = [];
  useEffect(() => {

    var index = 0;
      jsPlugin.forEach((jsLib) => {
        index++
        let Vvvebjs = document.createElement('script');
        Vvvebjs.src = jsLib;
        document.body.appendChild(Vvvebjs);
        VvvebjsLib.push(Vvvebjs);
        Vvvebjs.onload = () => VvvebjsLib.push(Vvvebjs);
        if (totalPlugin == index) {
          Vvvebjs.onload = () => reRenderStricly()
        }
      })

    return () => {
      VvvebjsLib.forEach((jsLib) => {
        document.body.removeChild(jsLib);
      })
    }
  }, [])
  const reRenderStricly = () => {
    setInitEditorPlugin(true);
  }

  const initVvveb = () => {
    $(document).ready(function () {
      if (typeof window.Vvveb != 'undefined') {
        const Vvveb = window.Vvveb;
        if (window.location.hash.indexOf("no-right-panel") != -1) {
          $("#vvveb-builder").addClass("no-right-panel");
          $(".component-properties-tab").show();
          Vvveb.Components.componentPropertiesElement = "#left-panel .component-properties";
        } else {
          $(".component-properties-tab").hide();
        }

        Vvveb.Builder.init('/template', function () {
          //run code after page/iframe is loaded
        });

        Vvveb.Gui.init();
      } else {
        initVvveb();
      }
    });
  }
  return (
    <>
      <Editor init={initVvveb} initEditorPlugin={initEditorPlugin} />
    </>
  );
}

export default App;

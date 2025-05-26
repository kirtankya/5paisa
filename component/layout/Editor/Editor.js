import React, { useEffect } from "react";
import mermaid from "mermaid";
import Prism from "prismjs";
import ClipboardJS from "clipboard";
import { marked } from "marked";
import "prismjs/themes/prism-tomorrow.min.css";
mermaid?.initialize({
  startOnLoad: true,
  theme: "base",
  htmlLabels: true,
  arrowMarkerAbsolute: true,
  wrap: true,
  securityLevel: "strict",
  fontFamily: "'Montserrat', sans-serif",
  sequence: {
    mirrorActors: true,
  },
  themeVariables: {
    primaryColor: "#f0e9f4",
    secondaryColor: "#ffffff",
    primaryTextColor: "#000",
    secondaryTextColor: "#000",
    primaryBorderColor: "#c36bd6",
    secondaryBorderColor: "#c36bd6",
    lineColor: "#c36bd6",
    tertiaryColor: "#ffffff",
    fontSize: "18px",
  },
});
export const Editor = ({ Data }) => {
  useEffect(() => {
    mermaid?.contentLoaded();
    if (window.MathJax) {
      window.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
        },
      });
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    }
    Prism.highlightAll();
    const setup = new ClipboardJS(".Copy_Code");
    setup?.on("success", function (e) {
      e.trigger.innerHTML = `<svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#8BC34A" points="24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"></polygon><polygon fill="#CCFF90" points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"></polygon></svg> Copied!`;
      setTimeout(() => {
        e.trigger.innerHTML = `<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path></svg> Copy code`;
      }, 1000);
      e.clearSelection();
    });
  }, [Data]);
  const DiagramRegex = /```mermaid([\s\S]*?)```/gms;
  const WithDiagram =
    Data &&
    Data?.replace(DiagramRegex, (_, Content, i) => {
      return `<div data-id="${i}" id="mermaid-diagram" class="mermaid">${Content}</div>`;
    });
  const CodeRegex = /```([\s\S]*?)```/gms;
  const WithCode =
    WithDiagram &&
    WithDiagram?.replace(CodeRegex, (_, Content, i) => {
      const html = Content?.replace(/</g, "&lt;")?.replace(/>/g, "&gt;");
      const codeContent = html
        ?.split("\n")
        ?.filter((line) => line?.trim() !== "")
        ?.join("\n");
      return `<div class='Code_Canvas'><div class="Canvas_Head"><span>${html?.split("\n")[0]
        }</span> <button class="Copy_Code svg${i}" data-clipboard-target="#clipbord${i}">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path></svg>Copy code</button></div>
        <pre class="Canvas" id='clipbord${i}'><code class="language-js" >${codeContent?.substring(
          codeContent?.indexOf("\n") + 1
        )}</code></pre></div>`;
    });
  const OutPut =
    WithCode &&
    WithCode?.replace(/`(.*?)`/gm, '<code class="Highlight">`$1`</code>');
  const renderer = {
    table(header, body) {
      return `<div class='Table_Cover_Block'><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
    },
    heading(text, level) {
      const id = text.toLowerCase().replace(/[^\w]+/g, "-");
      const title = text;
      return `<h2 id = "${id}" title="${title}" > ${text}</h2> `;
    },

  };
  marked.use({ renderer });
  return (
    <div
      className="Editor"
      dangerouslySetInnerHTML={{
        __html: marked.parse(OutPut || ""),
      }}
    />
  );
};
export const MathX = ({ Data }) => {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
        },
      });
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    }
  }, [Data]);
  return <div className="MathX_Editor">{Data}</div>;
};

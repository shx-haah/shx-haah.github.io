window.MathJax = {
    loader: {load: ['[tex]/color']},
    tex: {
      tex: {packages: {'[+]': ['color']}},
      inlineMath: [["\\(", "\\)"]],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };
  
  document$.subscribe(() => { 
    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
  })
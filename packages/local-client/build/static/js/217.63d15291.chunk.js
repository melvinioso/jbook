(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[217],{390:function(n,a){!function(n){var a=n.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,e){"string"==typeof a&&(a=[a]),a.forEach((function(a){!function(a,e){var t="doc-comment",o=n.languages[a];if(o){var i=o[t];if(!i){i=(o=n.languages.insertBefore(a,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[t]}if(i instanceof RegExp&&(i=o[t]={pattern:i}),Array.isArray(i))for(var r=0,s=i.length;r<s;r++)i[r]instanceof RegExp&&(i[r]={pattern:i[r]}),e(i[r]);else e(i)}}(a,(function(n){n.inside||(n.inside={}),n.inside.rest=e}))}))}}),a.addSupport(["java","javascript","php"],a)}(Prism)}}]);
//# sourceMappingURL=217.63d15291.chunk.js.map
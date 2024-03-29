import { createGlobalStyle } from "styled-components"

const Prism = createGlobalStyle`
code[class*="language-"],
pre[class*="language-"] {
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	color: #90a4ae;
	background: #fafafa;
	font-family: Consolas,Menlo,Monaco,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Courier New,Courier,monospace;
	font-size: 13px;
	line-height: 1.5em;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

code[class*="language-"]::-moz-selection,
pre[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection,
pre[class*="language-"] ::-moz-selection {
	background: #cceae7;
	background-color: #cceae7;
	color: #263238;
}

code[class*="language-"]::selection,
pre[class*="language-"]::selection,
code[class*="language-"] ::selection,
pre[class*="language-"] ::selection {
	background: #cceae7;
	background-color: #cceae7;
	color: #263238;
}

:not(pre) > code[class*="language-"] {
	white-space: normal;
    border-radius: 0.2em;
    padding: 0.3em;
    background: #d2fffb;
    color: #5232f7;
    font-size: 15px;
}

pre[class*="language-"] {
	overflow: auto;
	position: relative;
	margin: 0.5em 0;
	padding: 2.25em 2em;
    border-radius: 10px;
}

.language-css > code,
.language-sass > code,
.language-scss > code {
	color: #f76d47;
}

[class*="language-"] .namespace {
	opacity: 0.7;
}

.token.atrule {
	color: #7c4dff;
}

.token.attr-name {
	color: #7c4dff;
}

.token.attr-value {
	color: #f6a434;
}

.token.attribute {
	color: #f6a434;
}

.token.boolean {
	color: #7c4dff;
}

.token.builtin {
	color: #7c4dff;
}

.token.cdata {
	color: #7c4dff;
}

.token.char {
	color: #7c4dff;
}

.token.class {
	color: #7c4dff;
}

.token.class-name {
	color: #6182b8;
}

.token.comment {
	color: #aabfc9;
}

.token.constant {
	color: #7c4dff;
}

.token.deleted {
	color: #e53935;
}

.token.doctype {
	color: #aabfc9;
}

.token.entity {
	color: #e53935;
}

.token.function {
	color: #7c4dff;
}

.token.hexcode {
	color: #f76d47;
}

.token.id {
	color: #7c4dff;
	font-weight: bold;
}

.token.important {
	color: #7c4dff;
	font-weight: bold;
}

.token.inserted {
	color: #7c4dff;
}

.token.keyword {
	color: #7c4dff;
}

.token.number {
	color: #f76d47;
}

.token.operator {
	color: #7c4dff;
}

.token.prolog {
	color: #aabfc9;
}

.token.property {
	color: #5232f7;
}

.token.pseudo-class {
	color: #f6a434;
}

.token.pseudo-element {
	color: #f6a434;
}

.token.punctuation {
	color: #7c4dff;
}

.token.regex {
	color: #6182b8;
}

.token.selector {
	color: #e53935;
}

.token.string {
	color: #f6a434;
}

.token.symbol {
	color: #7c4dff;
}

.token.tag {
	color: #e53935;
}

.token.unit {
	color: #f76d47;
}

.token.url {
	color: #e53935;
}

.token.variable {
	color: #e53935;
}
`

export default Prism

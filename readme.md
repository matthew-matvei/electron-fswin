# Introduction

This is a fork of [`fswin`](http://xxoo.github.com/node-fswin), a native
[`node.js`](http://nodejs.org) add-on that works on windows. It ports some platform
specified filesystem APIs and made them easy to use in javascript.

The motivation for this fork is to make the module more compatible with any Electron
application (particularly when building dependencies with
`electron-builder install-app-deps`), and provides typings to work better with TypeScript.

All rights (and most responsibilities ;) ) are still held by the original author,
Xiao Shen.

For details and examples see [wiki](https://github.com/xxoo/node-fswin/wiki)

## System requirements

In order to work well with TypeScript code that attempts to import this package,
it does not demand the 'win32' OS explicitly in the `package.json`. However, calling
code still needs to account for this if developing across systems. The simplest
way is to not invoke its functionality when `process.platform !== "win32"`.

## License

	Copyright Xiao Shen and other fsWin contributors. All rights reserved.
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to
	deal in the Software without restriction, including without limitation the
	rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	sell copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
	IN THE SOFTWARE.

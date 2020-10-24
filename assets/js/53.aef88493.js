(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1709:function(a,e,s){"use strict";s.r(e);var t=s(7),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"lerna入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna入门"}},[a._v("#")]),a._v(" lerna入门")]),s("h1",{attrs:{id:"主页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主页"}},[a._v("#")]),a._v(" 主页")]),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/lerna/lerna"),s("OutboundLink")],1)])]),s("h1",{attrs:{id:"简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[a._v("#")]),a._v(" 简述")]),s("p",[a._v("当你开发一个较复杂的模块的时候，往往会进行拆分，拆分成更小的模块分散到各个仓库下，这样的坏处是当模块多了之后很难管理，比如修改了一个模块，另外依赖该模块的模块需要手动去升级发布，而且具体有多少依赖该模块的模块也很难理清，lerna就是解决这个问题的一个工具")]),s("p",[a._v("它规定了特定的项目结构，主要来说就是把所有模块都放在一个仓库下进行管理，通过lerna提供的命令来进行模块依赖、安装、更新、发布")]),s("h1",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm i -g lerna\n")])])]),s("h1",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),s("p",[a._v("1.为所有模块安装依赖")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lerna bootstrap\n")])])]),s("p",[a._v("2.发布")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lerna publish # 用于发布更新\nlerna publish --skip-git # 不会创建git commit或tag\nlerna publish --skip-npm # 不会把包publish到npm上\n")])])]),s("p",[a._v("3.初始化项目")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lerna init # 固定模式(Fixed mode)默认为固定模式，packages下的所有包共用一个版本号(version)\nlerna init --independent # 独立模式(Independent mode)，每一个包有一个独立的版本号\n")])])]),s("p",[a._v("4.为packages文件夹下的package安装依赖")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lerna add <package>[@version] [--dev] # 命令签名\n# 例如\nlerna add module-1 --scope=module-2 # 将 module-1 安装到 module-2\nlerna add module-1 --scope=module-2 --dev # 将 module-1 安装到 module-2 的 devDependencies 下\nlerna add module-1 # 将 module-1 安装到除 module-1 以外的所有模块\nlerna add babel-core # 将 babel-core 安装到所有模块\n")])])]),s("h1",{attrs:{id:"基本工作流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本工作流"}},[a._v("#")]),a._v(" 基本工作流")]),s("p",[a._v("1.创建项目文件夹")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mkdir lerna-demo\n")])])]),s("p",[a._v("2.进入文件夹并进行初始化")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd lerna-demo\nlerna init\n")])])]),s("p",[a._v("生成的目录结构如下：")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("- packages(目录)\n- lerna.json(配置文件)\n- package.json(工程描述文件)\n")])])]),s("p",[a._v("3.在packages目录下创建各个package，如：")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(".\n├── lerna.json\n├── package.json\n└── packages    \n\t├── house    \n\t│   ├── index.js    \n\t│   ├── node_modules    \n\t│   └── package.json    \n\t└── window        \n\t\t├── index.js        \n\t\t├── node_modules        \n\t\t└── package.json\n")])])]),s("p",[a._v("4.添加依赖")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lerna add lodash --scope=house//只给house添加依赖lodash\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lerna add window --scope=house//将window添加到house的依赖里\n")])])]),s("blockquote",[s("p",[a._v("lerna会自动检测到window隶属于当前项目，直接采用symlink的方式关联过去")])]),s("p",[a._v("5.发布到npm")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lerna publish\n")])])]),s("p",[a._v("6.更新模块")]),s("blockquote",[s("p",[a._v("假如只修改了window模块")])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("→ lerna updated\nlerna info version 2.9.1\nlerna info Checking for updated packages...\nlerna info Comparing with v1.0.9.\nlerna info Checking for prereleased packages...\nlerna info result\n- jx-house\n- jx-window\n")])])]),s("blockquote",[s("p",[a._v("lerna会自动检测哪些组件发生了改变")])])])}),[],!1,null,null,null);e.default=n.exports}}]);
webpackJsonp([98],{1179:function(e,t){e.exports={content:["section",["p","Note: Just for selecting picture. Generally ",["code","ImagePicker"]," is used to select picture before uploading, but without the feature of uploading."],["p","If you have permission issues Please checkout ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/issues/90"},"https://github.com/ant-design/ant-design-mobile-rn/issues/90"]]],meta:{category:"Components",type:"Data Entry",title:"ImagePicker",filename:"components/image-picker/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","styles"],["td","Styles object for the various elements of the ImagePicker"],["td","Object"],["td","See ",["code","/components/image-picker/style/index.native.tsx"]," for the defaults"]],["tr",["td","files"],["td","Picture files array which includes ",["code","url"],"(required) in each object"],["td","Array"],["td","[]"]],["tr",["td","onChange"],["td","Callback is called when the value of ",["code","files"]," is changed. The ",["code","operationType"]," is one of ",["code","add"]," or ",["code","remove"],"(the third argument is the removed index)."],["td","(files: Object, operationType: string, index: number): void"],["td"]],["tr",["td","onImageClick"],["td","Callback is called when the user clicks the selected picture"],["td","(index: number, files: Array): void"],["td"]],["tr",["td","onAddImageClick"],["td","Callback is called when the selector button is clicked"],["td","(): void"],["td"]],["tr",["td","onFail"],["td","Callback is called when the image selection is cancelled"],["td","(msg: string): void"],["td"]],["tr",["td","selectable"],["td","whether to show selector button"],["td","boolean"],["td","true"]]]],["blockquote",["p","Note: Only return assets-library type for RN, if you want to upload files, see ",["a",{title:null,href:"https://github.com/facebook/react-native/issues/201"},"https://github.com/facebook/react-native/issues/201"]]]]}}});
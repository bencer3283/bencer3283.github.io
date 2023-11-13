"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[13],{2019:function(e,r,t){t.r(r),t.d(r,{Head:function(){return N},default:function(){return C}});var n=t(7294),a=t(1883),l=t(6117),c=t(7747),i=t(2718),s=t(5001),m=t(4236),o=t(2675),u=t(3990),d=t(3614),p=t(2757),f=t(607),g=t(6554),k=t(3179),h=t(2381),x=t(8702),b=t(5432),_=t(5893),E=(0,g.G)((function(e,r){const{className:t,centerContent:n,...a}=(0,k.Lr)(e),l=(0,h.mq)("Container",e);return(0,_.jsx)(x.m.div,{ref:r,className:(0,b.cx)("chakra-container",t),...a,__css:{...l,...n&&{display:"flex",flexDirection:"column",alignItems:"center"}}})}));E.displayName="Container";var w=t(3459),y=t(9357),v=t(8565);var C=e=>{let{data:r}=e;return n.createElement(l.Z,null,n.createElement(c.xu,{overflowY:"auto"},n.createElement(i.a,{separator:n.createElement(w.X,{color:"gray.500"})},n.createElement(s.g,null,n.createElement(m.A,{as:a.Link,to:"/"},"Home")),n.createElement(s.g,null,n.createElement(m.A,{as:a.Link,to:"/"+r.markdownRemark.parent.relativeDirectory},n.createElement(o.x,{textTransform:"capitalize"}," ",r.markdownRemark.parent.relativeDirectory," "))),n.createElement(s.g,null,n.createElement(m.A,{as:a.Link,to:"./",isCurrentPage:!0,noOfLines:2},r.markdownRemark.frontmatter.title,", ",r.markdownRemark.frontmatter.subtitle))),n.createElement(u.Z,{m:"2rem"},n.createElement(d.O,null,n.createElement(p.X,null,r.markdownRemark.frontmatter.title)),n.createElement(f.e,null,n.createElement(p.X,{size:"md"},r.markdownRemark.frontmatter.subtitle))),n.createElement(E,{maxW:{base:"lg",md:"60vw"},sx:{h2:{fontSize:"x-large",fontWeight:"bold",lineHeight:1.3,pb:2,pt:8},h3:{fontSize:"large",fontWeight:"bold",lineHeight:1.6},ul:{paddingStart:"48px"},a:{textDecoration:"underline"},code:{fontSize:"8pt",lineHeight:"8pt",paddingBlock:"3em"},hr:{padding:"8pt",paddingBlock:"8pt"}},dangerouslySetInnerHTML:{__html:r.markdownRemark.html}})))};const N=e=>{let{location:r,params:t,data:a,pageContext:l}=e;return n.createElement(y.H,{title:a.markdownRemark.frontmatter.title+" | "+(0,v.$)().title,description:a.markdownRemark.frontmatter.meta_description})}},2183:function(e,r,t){t.d(r,{W:function(){return a},w:function(){return l}});var n=t(5227),[a,l]=(0,n.k)({name:"BreadcrumbStylesContext",errorMessage:"useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Breadcrumb />\" "})},2718:function(e,r,t){t.d(r,{a:function(){return d}});var n=t(2183),a=t(5432),l=t(2495),c=t(6554),i=t(2381),s=t(3179),m=t(8702),o=t(7294),u=t(5893),d=(0,c.G)((function(e,r){const t=(0,i.jC)("Breadcrumb",e),c=(0,s.Lr)(e),{children:d,spacing:p="0.5rem",separator:f="/",className:g,listProps:k,...h}=c,x=(0,l.W)(d),b=x.length,_=x.map(((e,r)=>(0,o.cloneElement)(e,{separator:f,spacing:p,isLastChild:b===r+1}))),E=(0,a.cx)("chakra-breadcrumb",g);return(0,u.jsx)(m.m.nav,{ref:r,"aria-label":"breadcrumb",className:E,__css:t.container,...h,children:(0,u.jsx)(n.W,{value:t,children:(0,u.jsx)(m.m.ol,{className:"chakra-breadcrumb__list",...k,__css:{display:"flex",alignItems:"center",...t.list},children:_})})})}));d.displayName="Breadcrumb"},5001:function(e,r,t){t.d(r,{g:function(){return d}});var n=t(4236),a=t(2183),l=t(6554),c=t(8702),i=t(5893),s=(0,l.G)((function(e,r){const{spacing:t,...n}=e,l={mx:t,...(0,a.w)().separator};return(0,i.jsx)(c.m.span,{ref:r,role:"presentation",...n,__css:l})}));s.displayName="BreadcrumbSeparator";var m=t(2495),o=t(5432),u=t(7294),d=(0,l.G)((function(e,r){const{isCurrentPage:t,separator:l,isLastChild:d,spacing:p,children:f,className:g,...k}=e,h=(0,m.W)(f).map((e=>e.type===n.A?(0,u.cloneElement)(e,{isCurrentPage:t}):e.type===s?(0,u.cloneElement)(e,{spacing:p,children:e.props.children||l}):e)),x={display:"inline-flex",alignItems:"center",...(0,a.w)().item},b=(0,o.cx)("chakra-breadcrumb__list-item",g);return(0,i.jsxs)(c.m.li,{ref:r,className:b,...k,__css:x,children:[h,!d&&(0,i.jsx)(s,{spacing:p,children:l})]})}));d.displayName="BreadcrumbItem"},4236:function(e,r,t){t.d(r,{A:function(){return s}});var n=t(2183),a=t(6554),l=t(8702),c=t(5432),i=t(5893),s=(0,a.G)((function(e,r){const{isCurrentPage:t,as:a,className:s,href:m,...o}=e,u=(0,n.w)(),d={ref:r,as:a,className:(0,c.cx)("chakra-breadcrumb__link",s),...o};return t?(0,i.jsx)(l.m.span,{"aria-current":"page",__css:u.link,...d}):(0,i.jsx)(l.m.a,{__css:u.link,href:m,...d})}));s.displayName="BreadcrumbLink"},3459:function(e,r,t){t.d(r,{X:function(){return n}});var n=(0,t(4027).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})}}]);
//# sourceMappingURL=component---src-components-post-js-602d6d111bab7e13355c.js.map
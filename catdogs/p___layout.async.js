(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{ksol:function(e,a,t){e.exports={normal:"normal___1kbBs",header:"header___2mK68","menu-container":"menu-container___2SZkG","menu-wrap":"menu-wrap___3FUYe","ant-menu-submenu":"ant-menu-submenu___3k9g8","ant-menu-submenu-horizontal":"ant-menu-submenu-horizontal___1Afb_","ant-menu-overflowed-submenu":"ant-menu-overflowed-submenu___3iJQH","ant-menu-item-selected":"ant-menu-item-selected___NFgOr","avatar-wrap":"avatar-wrap___3rDDE",list:"list___2_RMK",username:"username___2c2rr",logout:"logout___3X95-","main-content":"main-content___u3oto"}},r7w9:function(e,a,t){"use strict";var n=[{path:"/sign",component:"./sign/_layout",routes:[{path:"/sign/signup",component:"./sign/signUp"},{path:"/sign/signin",component:"./sign/signIn"}]},{path:"/",component:"./_layout",routes:[{path:"/news",component:"./news"},{path:"/home",component:"./home"},{path:"/forum",component:"./forum"},{path:"/tutorial",component:"./tutorial"},{path:"/",redirect:"/home"},{path:"*",component:"./page404"}]},{path:"*",component:"./page404"}];e.exports=n},yyuV:function(e,a,t){"use strict";t.r(a);t("Telt");var n=t("Tckk"),r=(t("qVdP"),t("jsC+")),o=(t("lUTK"),t("BvKs")),m=(t("B9cy"),t("Ol7k")),s=t("q1tI"),l=t.n(s),c=t("MuoO"),u=t("ksol"),i=t.n(u),p=t("mOP9"),_=t("VeD8"),h=t("pQ8y"),g=m["a"].Header,d=m["a"].Footer,E=m["a"].Content,b=t("r7w9");class w extends l.a.Component{constructor(e){super(e),this.state={username:"Admin",routes:b.slice(-2,-1)[0].routes}}render(){console.log(this.props);var e,a=l.a.createElement(o["b"],null,l.a.createElement(o["b"].Item,null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"#"},"\u4e2a\u4eba\u4e2d\u5fc3")),l.a.createElement(o["b"].Divider,null),l.a.createElement(o["b"].Item,{className:i.a.logout},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"#"},"\u9000\u51fa\u767b\u5f55"))),t=this.state.routes;try{e=t[t.findIndex(e=>e.path.includes(window.location.pathname))].path}catch(a){e=""}return l.a.createElement(m["a"],{className:i.a.normal},l.a.createElement(g,{className:i.a.header},l.a.createElement("div",{className:i.a["menu-container"]},l.a.createElement("div",{className:i.a.logo},"Logo"),l.a.createElement(o["b"],{mode:"horizontal",defaultSelectedKeys:[e],style:{lineHeight:"64px",color:"#fff"},className:"menu-wrap "+i.a["menu-wrap"]},l.a.createElement(o["b"].Item,{key:"/home"},l.a.createElement(p["a"],{to:"/home"},"\u9996\u9875")),l.a.createElement(o["b"].Item,{key:"/tutorial"},l.a.createElement(p["a"],{to:"/tutorial"},"\u6559\u7a0b")),l.a.createElement(o["b"].Item,{key:"/news"},l.a.createElement(p["a"],{to:"/news"},"\u8d44\u8baf")),l.a.createElement(o["b"].Item,{key:"/forum"},l.a.createElement(p["a"],{to:"/forum"},"\u8bba\u575b")))),l.a.createElement("div",{className:i.a["avatar-wrap"]},this.props.isLoggedIn?l.a.createElement(r["a"],{overlay:a,trigger:["hover"]},l.a.createElement("div",null,l.a.createElement(n["a"],{size:"large",icon:"user",className:i.a.avatar}),l.a.createElement("span",{className:i.a.username},this.state.username))):l.a.createElement("div",null,l.a.createElement(p["a"],{to:"/sign/signin"},"\u767b\u5f55 ")," /"," ",l.a.createElement(p["a"],{to:"/sign/signup"},"\u6ce8\u518c")))),l.a.createElement(_["a"],{exit:!1},l.a.createElement(h["a"],{key:location.pathname,classNames:"fade",timeout:300},l.a.createElement(E,{className:i.a["main-content"]},this.props.children))),l.a.createElement(d,null,"Catdogs.club \xa9",(new Date).getFullYear()," Created by McCarthey, Yoko"))}}function f(e){var a=e.sign.isLoggedIn;return{isLoggedIn:a}}a["default"]=Object(c["connect"])(f)(w)}}]);
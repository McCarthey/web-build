(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{HSJP:function(e,a,t){e.exports={"sign-page-header":"sign-page-header___3iOdp","login-form":"login-form___3AaoB","login-form-forgot":"login-form-forgot___2gFL6","login-form-button":"login-form-button___2eZL_"}},ooX6:function(e,a,t){"use strict";t.r(a);t("+L6B");var r=t("2/Rp"),o=(t("Pwec"),t("CtXQ")),n=(t("5NDa"),t("5rEg")),l=(t("y8nQ"),t("Vl3Y")),s=t("q1tI"),i=t.n(s),m=t("MuoO"),p=t("mOP9"),c=t("HSJP"),g=t.n(c);class u extends i.a.Component{constructor(e){super(e),this.handleSignUp=(e=>{e.preventDefault(),this.props.form.validateFields((e,a)=>{e||this.props.dispatch({type:"sign/signUp",payload:a})})}),this.state={email:"",registerDone:!1}}render(){var e=this.props.form.getFieldDecorator;return i.a.createElement(l["a"],{onSubmit:this.handleSignUp,className:g.a["login-form"]},i.a.createElement(l["a"].Item,null,e("email",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1"}]})(i.a.createElement(n["a"],{prefix:i.a.createElement(o["a"],{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u90ae\u7bb1"}))),i.a.createElement(l["a"].Item,null,e("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(i.a.createElement(n["a"],{prefix:i.a.createElement(o["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),i.a.createElement(l["a"].Item,null,i.a.createElement(r["a"],{type:"primary",htmlType:"submit",className:g.a["login-form-button"]},"\u6ce8\u518c"),"\u5df2\u6709\u5e10\u53f7\uff1f ",i.a.createElement(p["a"],{to:"/sign/signin"},"\u5373\u523b\u767b\u5f55")))}}var d=l["a"].create({name:"normal_login"})(u);a["default"]=Object(m["connect"])()(d)}}]);
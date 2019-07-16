(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"/Z3c":function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),o=a("gIcY"),e=function(){function n(){var n=this;this.form=new o.FormGroup({}),this.model={},this.options={},this.existingUsers=["user1","user2","user3"],this.fields=[{key:"text",type:"input",templateOptions:{label:"Username (validated on `blur`)",placeholder:"Username",required:!0},modelOptions:{updateOn:"blur"},asyncValidators:{uniqueUsername:{expression:function(s){return new Promise(function(a,l){setTimeout(function(){a(-1===n.existingUsers.indexOf(s.value))},1e3)})},message:"This username is already taken."}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),r={examples:[{title:"Async validation and `updateOn`",description:"\n              This example shows how to determine when the control should trigger validation.<br/>\n              By default, controls are validated on a `change` event. It may be a better experience to validate on `blur` or even `submit`, <br/>\n              especially if async validation can become an expensive operation.\n            ",component:e,files:[{file:"app.component.html",content:a("yDvP"),filecontent:a("uMXW")},{file:"app.component.ts",content:a("3eQ+"),filecontent:a("2H+r")},{file:"app.module.ts",content:a("QsCZ"),filecontent:a("8J4t")}]}]},t=function(){return function(){}}(),p=a("NcP4"),m=a("AcC/"),i=a("htty"),u=a("LgGJ"),c=a("MT1c"),d=a("1Q/V"),f=a("9+aI"),g=a("haId"),h=a("LJsP"),j=a("yR2A"),y=a("UFMs"),b=a("pMnS"),v=a("4o01"),F=a("Ip0R"),w=a("Dl9q"),x=a("UcnZ"),C=a("DAbo"),k=a("9Glx"),M=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["",""]))],null,function(n,s){n(s,1,0,s.context.$implicit)})}function O(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Existing usernames"])),(n()(),l["\u0275eld"](2,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,_)),l["\u0275did"](4,278528,null,0,F.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),l["\u0275eld"](5,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var o=!0,e=n.component;return"submit"===s&&(o=!1!==l["\u0275nov"](n,7).onSubmit(a)&&o),"reset"===s&&(o=!1!==l["\u0275nov"](n,7).onReset()&&o),"ngSubmit"===s&&(o=!1!==e.submit()&&o),o},null,null)),l["\u0275did"](6,16384,null,0,o["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](7,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),l["\u0275did"](9,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),l["\u0275eld"](10,0,null,null,2,"formly-form",[],null,null,null,w.b,w.a)),l["\u0275prd"](512,null,x.a,x.a,[C.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](12,966656,null,0,k.a,[x.a,C.b,[8,null],[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](13,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,4,0,a.existingUsers),n(s,7,0,a.form),n(s,12,0,a.form,a.model,a.fields,a.options)},function(n,s){n(s,5,0,l["\u0275nov"](s,9).ngClassUntouched,l["\u0275nov"](s,9).ngClassTouched,l["\u0275nov"](s,9).ngClassPristine,l["\u0275nov"](s,9).ngClassDirty,l["\u0275nov"](s,9).ngClassValid,l["\u0275nov"](s,9).ngClassInvalid,l["\u0275nov"](s,9).ngClassPending)})}function U(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,O,M)),l["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var R=l["\u0275ccf"]("formly-app-example",e,U,{},{},[]),S=a("M2Lx"),A=a("eDkP"),G=a("Fzqc"),N=a("v9Dh"),q=a("ZYjt"),T=a("Wf4p"),D=a("6LlJ"),I=a("F6kA"),L=a("dWZg"),P=a("lLAP"),E=a("4c35"),J=a("qAlS"),Z=a("La40"),B=a("SMsm"),Q=a("UodH"),V=a("5QwG"),W=a("qkla"),H=a("iZhS"),Y=a("me7w"),z=a("N3PW"),X=a("l4pn"),$=a("Fv2i"),K=a("wBYW"),nn=a("IE48"),sn=a("Q4Tx"),an=a("XR12"),ln=a("Nsh5"),on=a("8mMr"),en=a("mqvi"),rn=a("lYui"),tn=a("VGFS"),pn=a("1ey0"),mn=function(){return function(){}}(),un=a("ZYCi"),cn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return dn});var dn=l["\u0275cmf"](t,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,m.a,i.a,u.a,c.a,d.a,f.a,g.a,h.a,j.a,y.a,b.a,v.a,R]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,F.NgLocalization,F.NgLocaleLocalization,[l.LOCALE_ID,[2,F["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,S.c,S.c,[]),l["\u0275mpd"](4608,A.c,A.c,[A.i,A.e,l.ComponentFactoryResolver,A.h,A.f,l.Injector,l.NgZone,F.DOCUMENT,G.b,[2,F.Location]]),l["\u0275mpd"](5120,A.j,A.k,[A.c]),l["\u0275mpd"](5120,N.b,N.c,[A.c]),l["\u0275mpd"](4608,q.HAMMER_GESTURE_CONFIG,T.c,[[2,T.g],[2,T.l]]),l["\u0275mpd"](4608,D.a,D.a,[]),l["\u0275mpd"](4608,I.a,I.a,[]),l["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),l["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_j"],o["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,x.a,x.a,[C.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,F.CommonModule,F.CommonModule,[]),l["\u0275mpd"](1073742336,L.b,L.b,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,P.a,P.a,[]),l["\u0275mpd"](1073742336,G.a,G.a,[]),l["\u0275mpd"](1073742336,E.g,E.g,[]),l["\u0275mpd"](1073742336,J.c,J.c,[]),l["\u0275mpd"](1073742336,A.g,A.g,[]),l["\u0275mpd"](1073742336,T.l,T.l,[[2,T.d],[2,q.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,N.e,N.e,[]),l["\u0275mpd"](1073742336,T.v,T.v,[]),l["\u0275mpd"](1073742336,Z.j,Z.j,[]),l["\u0275mpd"](1073742336,B.c,B.c,[]),l["\u0275mpd"](1073742336,Q.c,Q.c,[]),l["\u0275mpd"](1073742336,V.b,V.b,[]),l["\u0275mpd"](512,C.b,C.b,[]),l["\u0275mpd"](1024,C.a,function(n){return[{wrappers:[{name:"addons",component:W.a}],extensions:[{name:"addons",extension:{postPopulate:H.a}}]},{types:[{name:"input",component:Y.a,wrappers:["form-field"]},{name:"checkbox",component:z.a,wrappers:["form-field"]},{name:"radio",component:X.a,wrappers:["form-field"]},{name:"select",component:$.a,wrappers:["form-field"]},{name:"textarea",component:K.a,wrappers:["form-field"]},{name:"multicheckbox",component:nn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:sn.a}]},an.b(n),{validationMessages:[{name:"required",message:"This field is required"}]}]},[C.b]),l["\u0275mpd"](1073742336,an.a,an.a,[C.b,[2,C.a]]),l["\u0275mpd"](1073742336,ln.h,ln.h,[]),l["\u0275mpd"](1073742336,on.b,on.b,[]),l["\u0275mpd"](1073742336,en.a,en.a,[]),l["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bc"],o["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,tn.a,tn.a,[]),l["\u0275mpd"](1073742336,pn.a,pn.a,[]),l["\u0275mpd"](1073742336,mn,mn,[]),l["\u0275mpd"](1073742336,un.s,un.s,[[2,un.y],[2,un.p]]),l["\u0275mpd"](1073742336,t,t,[]),l["\u0275mpd"](1024,un.n,function(){return[[{path:"",component:cn.a,data:r}]]},[])])})},"2H+r":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup, FormControl } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  existingUsers = [\n    'user1',\n    'user2',\n    'user3',\n  ];\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Username (validated on `blur`)',\n        placeholder: 'Username',\n        required: true,\n      },\n      modelOptions: {\n        updateOn: 'blur',\n      },\n      asyncValidators: {\n        uniqueUsername: {\n          expression: (control: FormControl) => {\n            return new Promise((resolve, reject) => {\n              setTimeout(() => {\n                resolve(this.existingUsers.indexOf(control.value) === -1);\n              }, 1000);\n            });\n          },\n          message: 'This username is already taken.',\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},"3eQ+":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup, FormControl } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  existingUsers = [\n    <span class="hljs-string">\'user1\'</span>,\n    <span class="hljs-string">\'user2\'</span>,\n    <span class="hljs-string">\'user3\'</span>,\n  ];\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Username (validated on `blur`)\'</span>,\n        placeholder: <span class="hljs-string">\'Username\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      modelOptions: {\n        updateOn: <span class="hljs-string">\'blur\'</span>,\n      },\n      asyncValidators: {\n        uniqueUsername: {\n          expression: <span class="hljs-function">(<span class="hljs-params">control: FormControl</span>) =&gt;</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {\n              setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n                resolve(<span class="hljs-keyword">this</span>.existingUsers.indexOf(control.value) === <span class="hljs-number">-1</span>);\n              }, <span class="hljs-number">1000</span>);\n            });\n          },\n          message: <span class="hljs-string">\'This username is already taken.\'</span>,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},"8J4t":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},QsCZ:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},uMXW:function(n,s){n.exports='<b>Existing usernames</b>\n<ul>\n  <li *ngFor="let u of existingUsers">{{ u }}</li>\n</ul>\n\n<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},yDvP:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Existing usernames<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let u of existingUsers"</span>&gt;</span>{{ u }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);
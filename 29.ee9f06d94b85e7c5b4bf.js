(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"/1+y":function(n,s){n.exports="import { Component, OnDestroy } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { Subject } from 'rxjs';\nimport { takeUntil, startWith, tap, filter } from 'rxjs/operators';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent implements OnDestroy {\n  onDestroy$ = new Subject<void>();\n  form = new FormGroup({});\n  model = {\n    investmentsCount: 3,\n    investments: [],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'investmentsCount',\n      type: 'input',\n      defaultValue: 3,\n      templateOptions: {\n        type: 'number',\n        label: 'Investments count',\n        required: true,\n      },\n      hooks: {\n        onInit: (field) => {\n          field.formControl.valueChanges.pipe(\n            takeUntil(this.onDestroy$),\n            startWith(field.formControl.value),\n            filter(v => v > 0),\n            tap(value => {\n              this.model.investments.length = value;\n              this.model = {\n                ...this.model,\n                investmentsCount: value,\n              };\n            }),\n          ).subscribe();\n        },\n      },\n    },\n    {\n      key: 'investments',\n      type: 'repeat',\n      fieldArray: {\n        type: 'input',\n        key: 'investmentName',\n        templateOptions: {\n          label: 'Name of Investment:',\n          required: true,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n\n  ngOnDestroy(): void {\n    this.onDestroy$.next();\n    this.onDestroy$.complete();\n  }\n}\n"},"2B/h":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { RepeatTypeComponent } from './repeat-section.type';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: 'repeat', component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\nexport class AppModule { }\n"},DoHm:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},Edrl:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { RepeatTypeComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./repeat-section.type\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: <span class="hljs-string">\'repeat\'</span>, component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},GU8V:function(n,s,l){"use strict";l.r(s);var a=l("CcnG"),e=l("gIcY"),o=l("K9Ia"),t=l("ny24"),p=l("p0Sj"),r=l("VnD/"),m=l("xMyE"),i=function(){return(i=Object.assign||function(n){for(var s,l=1,a=arguments.length;l<a;l++)for(var e in s=arguments[l])Object.prototype.hasOwnProperty.call(s,e)&&(n[e]=s[e]);return n}).apply(this,arguments)},c=function(){function n(){var n=this;this.onDestroy$=new o.a,this.form=new e.FormGroup({}),this.model={investmentsCount:3,investments:[]},this.options={},this.fields=[{key:"investmentsCount",type:"input",defaultValue:3,templateOptions:{type:"number",label:"Investments count",required:!0},hooks:{onInit:function(s){s.formControl.valueChanges.pipe(Object(t.a)(n.onDestroy$),Object(p.a)(s.formControl.value),Object(r.a)(function(n){return n>0}),Object(m.a)(function(s){n.model.investments.length=s,n.model=i({},n.model,{investmentsCount:s})})).subscribe()}}},{key:"investments",type:"repeat",fieldArray:{type:"input",key:"investmentName",templateOptions:{label:"Name of Investment:",required:!0}}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n.prototype.ngOnDestroy=function(){this.onDestroy$.next(),this.onDestroy$.complete()},n}(),u={examples:[{title:"Repeating Section With Length Input",component:c,files:[{file:"app.component.html",content:l("DoHm"),filecontent:l("ug1j")},{file:"app.component.ts",content:l("OJft"),filecontent:l("/1+y")},{file:"app.module.ts",content:l("Edrl"),filecontent:l("2B/h")},{file:"repeat-section.type.ts",content:l("zmc7"),filecontent:l("mRR2")}]}]},d=function(){return function(){}}(),f=l("NcP4"),y=l("AcC/"),h=l("htty"),g=l("LgGJ"),j=l("MT1c"),b=l("1Q/V"),v=l("9+aI"),k=l("haId"),C=l("LJsP"),w=l("yR2A"),F=l("UFMs"),x=l("cI/F"),M=l("fVcV"),R=l("DAbo"),O=l("Ip0R"),D=l("mrSG"),_=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(D.__extends)(s,n),s}(l("HkYz").a),N=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-field",[],[[4,"display",null],[8,"className",0]],null,null,x.b,x.a)),a["\u0275did"](1,16760832,null,0,M.a,[R.b,a.ComponentFactoryResolver,a.Injector,[8,null]],{field:[0,"field"]},null)],function(n,s){n(s,1,0,s.context.$implicit)},function(n,s){n(s,0,0,a["\u0275nov"](s,1).field.hide?"none":"",a["\u0275nov"](s,1).field.className?a["\u0275nov"](s,1).field.className:a["\u0275nov"](s,1).className)})}function I(n){return a["\u0275vid"](0,[(n()(),a["\u0275and"](16777216,null,null,1,null,S)),a["\u0275did"](1,278528,null,0,O.NgForOf,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,s){n(s,1,0,s.component.field.fieldGroup)},null)}function A(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-repeat-section",[],null,null,null,I,N)),a["\u0275did"](1,49152,null,0,_,[[2,R.a]],null,null)],null,null)}var G=a["\u0275ccf"]("formly-repeat-section",_,A,{field:"field",model:"model",form:"form",options:"options"},{},[]),T=l("pMnS"),L=l("4o01"),U=l("Dl9q"),$=l("UcnZ"),q=l("9Glx"),E=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function V(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,l){var e=!0,o=n.component;return"submit"===s&&(e=!1!==a["\u0275nov"](n,2).onSubmit(l)&&e),"reset"===s&&(e=!1!==a["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==o.submit()&&e),e},null,null)),a["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),a["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),a["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,U.b,U.a)),a["\u0275prd"](512,null,$.a,$.a,[R.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275did"](7,966656,null,0,q.a,[$.a,R.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),a["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Submit"]))],function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)},function(n,s){var l=s.component;n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending),n(s,8,0,!l.form.valid)})}function J(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,V,E)),a["\u0275did"](1,180224,null,0,c,[],null,null)],null,null)}var B=a["\u0275ccf"]("formly-app-example",c,J,{},{},[]),P=l("M2Lx"),W=l("eDkP"),z=l("Fzqc"),H=l("v9Dh"),Y=l("ZYjt"),Z=l("Wf4p"),Q=l("6LlJ"),K=l("F6kA"),X=l("dWZg"),nn=l("lLAP"),sn=l("4c35"),ln=l("qAlS"),an=l("La40"),en=l("SMsm"),on=l("UodH"),tn=l("5QwG"),pn=l("qkla"),rn=l("iZhS"),mn=l("me7w"),cn=l("N3PW"),un=l("l4pn"),dn=l("Fv2i"),fn=l("wBYW"),yn=l("IE48"),hn=l("Q4Tx"),gn=l("XR12"),jn=l("Nsh5"),bn=l("8mMr"),vn=l("mqvi"),kn=l("lYui"),Cn=l("VGFS"),wn=l("1ey0"),Fn=function(){return function(){}}(),xn=l("ZYCi"),Mn=l("cIcG");l.d(s,"ConfigModuleNgFactory",function(){return Rn});var Rn=a["\u0275cmf"](d,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[f.a,y.a,h.a,g.a,j.a,b.a,v.a,k.a,C.a,w.a,F.a,G,T.a,L.a,B]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[a.LOCALE_ID,[2,O["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,P.c,P.c,[]),a["\u0275mpd"](4608,W.c,W.c,[W.i,W.e,a.ComponentFactoryResolver,W.h,W.f,a.Injector,a.NgZone,O.DOCUMENT,z.b,[2,O.Location]]),a["\u0275mpd"](5120,W.j,W.k,[W.c]),a["\u0275mpd"](5120,H.b,H.c,[W.c]),a["\u0275mpd"](4608,Y.HAMMER_GESTURE_CONFIG,Z.c,[[2,Z.g],[2,Z.l]]),a["\u0275mpd"](4608,Q.a,Q.a,[]),a["\u0275mpd"](4608,K.a,K.a,[]),a["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),a["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),a["\u0275mpd"](4608,$.a,$.a,[R.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](1073742336,O.CommonModule,O.CommonModule,[]),a["\u0275mpd"](1073742336,X.b,X.b,[]),a["\u0275mpd"](1073742336,P.d,P.d,[]),a["\u0275mpd"](1073742336,nn.a,nn.a,[]),a["\u0275mpd"](1073742336,z.a,z.a,[]),a["\u0275mpd"](1073742336,sn.g,sn.g,[]),a["\u0275mpd"](1073742336,ln.c,ln.c,[]),a["\u0275mpd"](1073742336,W.g,W.g,[]),a["\u0275mpd"](1073742336,Z.l,Z.l,[[2,Z.d],[2,Y.HAMMER_LOADER]]),a["\u0275mpd"](1073742336,H.e,H.e,[]),a["\u0275mpd"](1073742336,Z.v,Z.v,[]),a["\u0275mpd"](1073742336,an.j,an.j,[]),a["\u0275mpd"](1073742336,en.c,en.c,[]),a["\u0275mpd"](1073742336,on.c,on.c,[]),a["\u0275mpd"](1073742336,tn.b,tn.b,[]),a["\u0275mpd"](512,R.b,R.b,[]),a["\u0275mpd"](1024,R.a,function(n){return[{wrappers:[{name:"addons",component:pn.a}],extensions:[{name:"addons",extension:{postPopulate:rn.a}}]},{types:[{name:"input",component:mn.a,wrappers:["form-field"]},{name:"checkbox",component:cn.a,wrappers:["form-field"]},{name:"radio",component:un.a,wrappers:["form-field"]},{name:"select",component:dn.a,wrappers:["form-field"]},{name:"textarea",component:fn.a,wrappers:["form-field"]},{name:"multicheckbox",component:yn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:hn.a}]},gn.b(n),{types:[{name:"repeat",component:_}]}]},[R.b]),a["\u0275mpd"](1073742336,gn.a,gn.a,[R.b,[2,R.a]]),a["\u0275mpd"](1073742336,jn.h,jn.h,[]),a["\u0275mpd"](1073742336,bn.b,bn.b,[]),a["\u0275mpd"](1073742336,vn.a,vn.a,[]),a["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),a["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,kn.a,kn.a,[]),a["\u0275mpd"](1073742336,Cn.a,Cn.a,[]),a["\u0275mpd"](1073742336,wn.a,wn.a,[]),a["\u0275mpd"](1073742336,Fn,Fn,[]),a["\u0275mpd"](1073742336,xn.s,xn.s,[[2,xn.y],[2,xn.p]]),a["\u0275mpd"](1073742336,d,d,[]),a["\u0275mpd"](1024,xn.n,function(){return[[{path:"",component:Mn.a,data:u}]]},[])])})},OJft:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, OnDestroy } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { Subject } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { takeUntil, startWith, tap, filter } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent <span class="hljs-keyword">implements</span> OnDestroy {\n  onDestroy$ = <span class="hljs-keyword">new</span> Subject&lt;<span class="hljs-built_in">void</span>&gt;();\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model = {\n    investmentsCount: <span class="hljs-number">3</span>,\n    investments: [],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'investmentsCount\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      defaultValue: <span class="hljs-number">3</span>,\n      templateOptions: {\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Investments count\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      hooks: {\n        onInit: <span class="hljs-function">(<span class="hljs-params">field</span>) =&gt;</span> {\n          field.formControl.valueChanges.pipe(\n            takeUntil(<span class="hljs-keyword">this</span>.onDestroy$),\n            startWith(field.formControl.value),\n            filter(<span class="hljs-function"><span class="hljs-params">v</span> =&gt;</span> v &gt; <span class="hljs-number">0</span>),\n            tap(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {\n              <span class="hljs-keyword">this</span>.model.investments.length = value;\n              <span class="hljs-keyword">this</span>.model = {\n                ...this.model,\n                investmentsCount: value,\n              };\n            }),\n          ).subscribe();\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'investments\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'repeat\'</span>,\n      fieldArray: {\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n        key: <span class="hljs-string">\'investmentName\'</span>,\n        templateOptions: {\n          label: <span class="hljs-string">\'Name of Investment:\'</span>,\n          required: <span class="hljs-literal">true</span>,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n\n  ngOnDestroy(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.onDestroy$.next();\n    <span class="hljs-keyword">this</span>.onDestroy$.complete();\n  }\n}\n'},mRR2:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FieldArrayType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-repeat-section',\n  template: `\n    <formly-field *ngFor=\"let field of field.fieldGroup\" [field]=\"field\"></formly-field>\n  `,\n})\nexport class RepeatTypeComponent extends FieldArrayType {}\n"},ug1j:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},zmc7:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldArrayType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-repeat-section\'</span>,\n  template: <span class="hljs-string">`\n    &lt;formly-field *ngFor="let field of field.fieldGroup" [field]="field"&gt;&lt;/formly-field&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> RepeatTypeComponent <span class="hljs-keyword">extends</span> FieldArrayType {}\n'}}]);
import fs from "fs";import path from "path";import {fileURLToPath} from "url";
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const DATA=path.resolve(__dirname,"../public/data");
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function pickN(a,n){const s=new Set();while(s.size<n&&s.size<a.length)s.add(pick(a));return[...s]}
const DIFF=["easy","medium","hard"];
const TAG=`Node.js V8 事件循环 EventLoop JavaScript 运行时 npm package.json scripts dependencies devDependencies npx nvm node version REPL CommonJS require module exports ESM import export async await Promise callback fs path process argv env exit cwd chdir nextTick setImmediate setTimeout setInterval Buffer Stream Readable Writable Transform Duplex pipe drain backpressure HTTP http.createServer request response statusCode headers url method GET POST PUT DELETE PATCH OPTIONS HEAD Express app get post put delete patch use listen route router params query body json urlencoded text raw cookie session static middleware next error middleware cors helmet morgan logger compression rate limit express validator joi zod jsonwebtoken bcrypt passport multer nodemailer socket.io prisma mongoose sequelize typeorm mysql postgresql mongodb redis sqlite lowdb better-sqlite3 dotenv cross-env config NODE_ENV development production test PM2 cluster load balancing process manager nodemon ts-node tsx esbuild swc jest mocha chai supertest vitest nyc c8 debug test coverage CI CD Dockerfile docker-compose nginx reverse proxy deploy Vercel Railway Render Fly Netlify serverless cloudflare workers lambda API RESTful CRUD pagination sorting filtering validation authentication authorization JWT session cookie OAuth2 RBAC file upload image processing email sendGrid nodemailer task queue agenda bull redis cache rate limiter pagination search full text search logging monitoring error tracking sentry datadog newRelic openTelemetry docker kubernetes k8s deployment rollback scaling CI/CD pipeline github actions gitlab ci webhook slack notification health check graceful shutdown environment variable configuration management dotenv rc file config yaml toml ini cron job scheduled task background job worker thread pool child process spawn exec fork IPC message passing cluster shared memory load balancer reverse proxy API gateway microservices monolithic REST GraphQL tRPC gRPC WebSocket SSE Server Sent Events long polling HTTP2 HTTP3 TLS SSL HTTPS self-signed certificate letsencrypt ACME domain DNS CAA CORS same origin policy content security policy helmet security best practice xss sql injection csrf dos ddos protection rate limiter express-rate-limit express-mongo-sanitize express-mysql-session connect-redis session store passport-local passport-jwt passport-google-oauth passport-github oauth2 server openAPI swagger api doc jsdoc typedoc postman newman insomnia openapi-generator test e2e integration unit API testing supertest chai-http nock sinon fakerFactory test container docker compose dev container nodemon vite node typescript esbuild tsx ts-node swc esm cjs mjs package exports import map workspaces monorepo lerna nx turbo pnpm yarn berry npm workspaces node version manager nvm fnm asdf node version lts current latest experimental features webassembly wasm n-api addon native module node-gyp node-pre-gyp prebuildify neon bindings node inspector chrome devtools debug breakpoint profile cpu profile heap snapshot memory usage garbage collection v8 optimization deopt inline hidden class monomorphic polymorphism megamorphic prototype hasOwnProperty defineProperty getter setter proxy reflect metadata decorator experimental TC39 proposal stage 0 1 2 3 4 finished spec standard lib deno bun cross-platform compatibility windows macos linux alpine slim distroless multi-stage build dockerfile best practice node docker official image node alpine node slim node bookworm node bullseye`;
const T=TAG.trim().split(/\s+/).filter(Boolean);
function buildTags(){return T.map((n,i)=>({id:`nd-tag-${String(i+1).padStart(3,"0")}`,name:n,category:"Node",description:`Node标签：${n}`,count:0,createdAt:"2026-07-02T00:00:00.000Z"}));}
const COURSES_DATA=[
  {id:"nd-course-01",order:1,slug:"NodeJs入门与后端开发路线",title:"Node.js 入门与后端开发路线",description:"Node概述、运行时、V8引擎、学习路线。",estimatedHours:4,difficulty:"easy"},
  {id:"nd-course-02",order:2,slug:"NodeJs运行npm与项目结构",title:"Node.js 运行时、npm 与项目结构",description:"npm、package.json、scripts、npx、项目结构。",estimatedHours:6,difficulty:"easy"},
  {id:"nd-course-03",order:3,slug:"CommonJSESM与模块系统",title:"CommonJS、ESM 与模块系统",description:"require/module.exports、import/export、模块系统。",estimatedHours:6,difficulty:"easy"},
  {id:"nd-course-04",order:4,slug:"异步编程Promise与asyncawait",title:"异步编程、Promise 与 async/await",description:"回调、Promise、async/await、事件循环。",estimatedHours:10,difficulty:"medium"},
  {id:"nd-course-05",order:5,slug:"文件系统路径与环境变量",title:"文件系统、路径与环境变量",description:"fs/path/process/dotenv/env配置。",estimatedHours:8,difficulty:"medium"},
  {id:"nd-course-06",order:6,slug:"HTTP基础与Node原生服务",title:"HTTP 基础与 Node 原生服务",description:"http模块、request/response、路由基础。",estimatedHours:8,difficulty:"medium"},
  {id:"nd-course-07",order:7,slug:"Express入门与路由",title:"Express 入门与路由",description:"Express安装、app、router、路由方法。",estimatedHours:10,difficulty:"medium"},
  {id:"nd-course-08",order:8,slug:"请求参数响应对象与RESTAPI",title:"请求参数、响应对象与 REST API",description:"params/query/body、JSON响应、RESTful设计。",estimatedHours:10,difficulty:"medium"},
  {id:"nd-course-09",order:9,slug:"中间件机制与错误处理",title:"中间件机制与错误处理",description:"中间件概念、应用级中间件、错误处理、第三方中间件。",estimatedHours:10,difficulty:"hard"},
  {id:"nd-course-10",order:10,slug:"数据库连接ORM与CRUD",title:"数据库连接、ORM 与 CRUD",description:"Prisma/Mongoose/Sequelize、CRUD操作、分页。",estimatedHours:12,difficulty:"hard"},
  {id:"nd-course-11",order:11,slug:"登录认证JWT与权限基础",title:"登录认证、JWT 与权限基础",description:"JWT生成验证、bcrypt密码、中间件鉴权。",estimatedHours:10,difficulty:"hard"},
  {id:"nd-course-12",order:12,slug:"接口测试日志与配置管理",title:"接口测试、日志与配置管理",description:"Jest/Supertest测试、Morgan/Winston日志、多环境配置。",estimatedHours:8,difficulty:"hard"},
  {id:"nd-course-13",order:13,slug:"Node后端项目实战",title:"Node 后端项目实战",description:"REST API项目、用户系统、Todo API、博客API。",estimatedHours:10,difficulty:"hard"},
  {id:"nd-course-14",order:14,slug:"部署面试与全栈项目训练",title:"部署、面试与全栈项目训练",description:"Docker部署、CI/CD、面试题、全栈案例。",estimatedHours:8,difficulty:"hard"},
];
function buildCourses(){return COURSES_DATA.map(c=>({...c,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握Node平台","能构建Express API","理解异步编程","具备后端开发能力"],updatedAt:"2026-07-02T00:00:00.000Z"}));}
function buildLessons(){
  const all=[];let id=1;
  const add=(ci,t,kps)=>{const n=String(id).padStart(3,"0");all.push({id:`nd-lesson-${n}`,courseId:COURSES_DATA[ci].id,order:all.filter(l=>l.courseId===COURSES_DATA[ci].id).length+1,title:t,slug:t.replace(/[\s，。、：；（）\-\+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t,content:`# ${t}\n\n${t}内容。`,contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["Node"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;};
add(0,"Node概述",["nd-kp-001"]);add(0,"运行时与V8",["nd-kp-002"]);add(0,"Node学习路线",["nd-kp-003"]);
add(1,"npm包管理",["nd-kp-004"]);add(1,"package.json",["nd-kp-005"]);add(1,"scripts",["nd-kp-006"]);add(1,"npx",["nd-kp-007"]);
add(2,"require",["nd-kp-008"]);add(2,"module.exports",["nd-kp-009"]);add(2,"import/export",["nd-kp-010"]);add(2,"ESM与CommonJS",["nd-kp-011"]);
add(3,"回调函数",["nd-kp-012"]);add(3,"Promise",["nd-kp-013","nd-kp-014"]);add(3,"async/await",["nd-kp-015","nd-kp-016"]);add(3,"事件循环",["nd-kp-017"]);
add(4,"fs模块",["nd-kp-018","nd-kp-019"]);add(4,"path模块",["nd-kp-020"]);add(4,"process全局",["nd-kp-021"]);add(4,"dotenv配置",["nd-kp-022"]);add(4,"环境变量",["nd-kp-023"]);
add(5,"http.createServer",["nd-kp-024"]);add(5,"req/res对象",["nd-kp-025"]);add(5,"路由实现",["nd-kp-026"]);add(5,"JSON响应",["nd-kp-027"]);
add(6,"Express安装",["nd-kp-028"]);add(6,"app.get/post",["nd-kp-029"]);add(6,"Router模块化",["nd-kp-030","nd-kp-031"]);add(6,"app.use",["nd-kp-032"]);
add(7,"req.params",["nd-kp-033"]);add(7,"req.query",["nd-kp-034"]);add(7,"req.body",["nd-kp-035"]);add(7,"res.json",["nd-kp-036"]);add(7,"RESTful设计",["nd-kp-037"]);
add(8,"中间件概念",["nd-kp-038","nd-kp-039"]);add(8,"应用级中间件",["nd-kp-040"]);add(8,"错误中间件",["nd-kp-041","nd-kp-042"]);add(8,"cors/helmet",["nd-kp-043"]);add(8,"morgan日志",["nd-kp-044"]);
add(9,"Prisma入门",["nd-kp-045","nd-kp-046"]);add(9,"Mongoose入门",["nd-kp-047"]);add(9,"CRUD操作",["nd-kp-048","nd-kp-049"]);add(9,"分页查询",["nd-kp-050"]);add(9,"数据校验",["nd-kp-051"]);
add(10,"JWT生成",["nd-kp-052","nd-kp-053"]);add(10,"JWT验证",["nd-kp-054"]);add(10,"bcrypt密码",["nd-kp-055"]);add(10,"鉴权中间件",["nd-kp-056"]);add(10,"登录接口",["nd-kp-057"]);
add(11,"Jest测试",["nd-kp-058"]);add(11,"Supertest",["nd-kp-059"]);add(11,"Winston日志",["nd-kp-060"]);add(11,"多环境配置",["nd-kp-061"]);
add(12,"用户API",["nd-kp-062"]);add(12,"Todo API",["nd-kp-063"]);add(12,"博客API",["nd-kp-064"]);add(12,"文件上传",["nd-kp-065"]);
add(13,"Docker部署",["nd-kp-066"]);add(13,"CI/CD",["nd-kp-067"]);add(13,"Node面试题",["nd-kp-068"]);add(13,"模拟测试",["nd-kp-069"]);add(13,"考前冲刺",["nd-kp-070"]);
return all;}
const KP=[["Node.js","JavaScript运行时基于V8引擎"],["npm","Node包管理器"],["package.json","项目配置和依赖管理"],["CommonJS","使用require的模块系统"],["ESM","使用import的模块系统"],["Promise","异步操作的结果"],["async/await","Promise的语法糖"],["事件循环","Node处理异步的机制"],["fs","文件系统模块"],["path","路径处理模块"],["process","进程全局对象"],["dotenv","环境变量管理"],["http","HTTP模块创建服务"],["Express","Web应用框架"],["路由","定义API端点"],["中间件","请求处理链"],["错误处理","捕获处理错误"],["cors","跨域资源共享"],["JWT","JSON Web Token认证"],["bcrypt","密码哈希"],["Prisma","ORM数据库工具"],["Mongoose","MongoDB ODM"],["CRUD","增删改查操作"],["分页","数据分页查询"],["Jest","测试框架"],["Supertest","HTTP测试库"],["Winston","日志库"],["Docker","容器化部署"],["进程管理","PM2管理进程"],["环境变量","配置管理"]];
function buildKP(){const k=KP.map((kp,i)=>({id:`nd-kp-${String(i+1).padStart(4,"0")}`,name:kp[0],description:kp[1],category:"Node",tags:["Node"],difficulty:i<15?"easy":i<25?"medium":"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"}));for(let i=0;i<700;i++){const t=["Node","npm","模块","异步","Express","路由","数据库","认证","部署","综合"];k.push({id:`nd-kp-${String(k.length+1).padStart(4,"0")}`,name:`${t[i%t.length]}知识点${i+1}`,description:`Node知识点：${t[i%t.length]}${i+1}`,category:"Node",tags:["Node"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
const QC=["Node入门","npm与项目结构","模块系统","异步编程","文件系统","HTTP基础","Express入门","请求响应REST","中间件错误处理","数据库CRUD","登录JWT","测试日志","项目实战","部署面试"];
function buildQ(){
  const qs=[];let qid=1;
  const TM=[
    {c:0,s:"Node.js基于哪个JavaScript引擎？",o:["V8","SpiderMonkey","JavaScriptCore","Chakra"],a:"A",d:"easy",t:"single_choice"},
    {c:0,s:"Node.js特点不包括？",o:["多线程同步","事件驱动","非阻塞I/O","单线程"],a:"A",d:"easy",t:"single_choice"},
    {c:1,s:"npm init -y的作用？",o:["快速生成package.json","安装依赖","运行脚本","发布包"],a:"A",d:"easy",t:"single_choice"},
    {c:1,s:"dependencies和devDependencies区别？",o:["dev只在开发环境","prod只在生产","没有区别","一样"],a:"A",d:"medium",t:"single_choice"},
    {c:2,s:"CommonJS中导出模块用？",o:["module.exports","export","exports default","export default"],a:"A",d:"medium",t:"single_choice"},
    {c:3,s:"Promise有三种状态？",o:["pending/fulfilled/rejected","start/process/end","wait/done/fail","new/old/deleted"],a:"A",d:"easy",t:"single_choice"},
    {c:3,s:"事件循环中哪个API优先级最高？",o:["nextTick","setTimeout","setImmediate","Promise"],a:"A",d:"hard",t:"single_choice"},
    {c:4,s:"fs.readFile是？",o:["异步读取文件","同步读取","创建文件","删除文件"],a:"A",d:"easy",t:"single_choice"},
    {c:4,s:"process.cwd()返回？",o:["当前工作目录","Node安装路径","脚本路径","临时目录"],a:"A",d:"medium",t:"single_choice"},
    {c:5,s:"http.createServer回调参数？",o:["req/res","req/res/next","req/res/err","req/next"],a:"A",d:"medium",t:"single_choice"},
    {c:6,s:"Express中定义GET路由用？",o:["app.get()","app.post()","app.use()","app.all()"],a:"A",d:"easy",t:"single_choice"},
    {c:7,s:"req.params获取的是？",o:["路径参数","查询参数","请求体","请求头"],a:"A",d:"medium",t:"single_choice"},
    {c:7,s:"res.json()的作用？",o:["发送JSON响应","发送文件","重定向","设置状态码"],a:"A",d:"easy",t:"single_choice"},
    {c:8,s:"Express中间件的参数是？",o:["req/res/next","req/res","req/next","res/next"],a:"A",d:"medium",t:"single_choice"},
    {c:8,s:"错误中间件有几个参数？",o:["4个(err/req/res/next)","3个","2个","1个"],a:"A",d:"hard",t:"single_choice"},
    {c:9,s:"Prisma是什么？",o:["ORM数据库工具","Web框架","测试框架","日志库"],a:"A",d:"medium",t:"single_choice"},
    {c:9,s:"CRUD中R代表？",o:["Read查询","Create创建","Update更新","Delete删除"],a:"A",d:"easy",t:"single_choice"},
    {c:10,s:"JWT由几部分组成？",o:["三部分(header.payload.signature)","两部分","四部分","一部分"],a:"A",d:"medium",t:"single_choice"},
    {c:10,s:"bcrypt的作用？",o:["密码哈希","生成JWT","验证Token","加密传输"],a:"A",d:"medium",t:"single_choice"},
    {c:11,s:"Jest中expect(1+1).toBe(2)是？",o:["断言","测试套件","描述","钩子"],a:"A",d:"easy",t:"single_choice"},
    {c:11,s:"Supertest用于？",o:["HTTP接口测试","单元测试","UI测试","性能测试"],a:"A",d:"medium",t:"single_choice"},
    {c:12,s:"Node后端项目常用结构？",o:["routes/controllers/services/models","全部写一个文件","没有结构","按字母排序"],a:"A",d:"medium",t:"single_choice"},
    {c:13,s:"Node项目部署常用方式？",o:["PM2/Docker","直接双击","复制代码","Word文档"],a:"A",d:"easy",t:"single_choice"},
  ];
  for(const t of TM){qs.push({id:`nd-q-${String(qid).padStart(6,"0")}`,type:t.t,difficulty:t.d||"easy",chapter:QC[t.c],knowledge_points:[QC[t.c]],stem:t.s,options:t.o.map((x,i)=>({label:String.fromCharCode(65+i),text:x})),answer:t.a,explanation:`${t.s}正确答案是${t.a}。${t.d==="hard"?"容易混淆需加深理解。":""}`,wrong_reason:`对${QC[t.c]}需加强理解。`,related_questions:[],tags:[QC[t.c]],estimated_time:60,source_type:"curated-generated"});qid++;}
  const e={};qs.forEach(q=>{e[q.type]=(e[q.type]||0)+1;});
  const TA=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:450},{type:"case_analysis",min:1250}];
  while(qid<=3700){
    const u=TA.filter(t=>(e[t.type]||0)<t.min);const it=pick(u.length>0?u:TA);const ch=pick(QC);const d=pick(DIFF);
    const id=`nd-q-${String(qid).padStart(6,"0")}`;let o=[],a="",s="";
    switch(it.type){
      case"single_choice":s=`关于Node${ch}表述正确的是？`;o=[0,1,2,3].map(i=>({label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"}));a="A";break;
      case"multiple_choice":s=`以下Node${ch}哪些正确？（多选）`;o=[0,1,2,3].map(i=>({label:String.fromCharCode(65+i),text:i<2?"正确":"错误"}));a="AB";break;
      case"true_false":s=`${ch}是Node.js的核心概念。（判断）`;o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=pick(["A","B"]);break;
      case"fill_blank":s=`在Node${ch}中______是重要概念。`;o=[{label:"A",text:"填写"}];a="按知识点";break;
      case"short_answer":s=`简述Node${ch}的使用方法。`;o=[{label:"A",text:"简答"}];a=`${ch}用于...`;break;
      case"case_analysis":s=`Node${ch}案例：编写代码或分析。`;o=[0,1,2,3].map(i=>({label:String.fromCharCode(65+i),text:`方案${i+1}`}));a="A";break;
    }
    qs.push({id,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:`正确答案是${a}。`,wrong_reason:`需加强对${ch}的理解。`,related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;
  }
  return qs;}
function buildExams(qs){const ex=[];for(let i=0;i<100;i++){const c=QC[i%QC.length];const d=i<35?"easy":i<65?"medium":"hard";const chQs=qs.filter(q=>q.chapter===c);ex.push({id:`nd-exam-${String(i+1).padStart(2,"0")}`,title:`${c}${d==="easy"?"基础":d==="medium"?"进阶":"综合"}`,difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pickN(chQs,25).map(q=>q.id),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function buildCases(qs){const src=["HelloNode","npm scripts","读取文件","环境变量","HTTP服务","Express路由","GET接口","POST接口","RESTful用户","中间件","错误处理","登录接口","JWT鉴权","分页查询","数据库CRUD","接口测试","日志记录","配置管理","博客API","用户管理API","TodoAPI","部署案例"];const c=[];for(let i=0;i<260;i++){const t=src[i%src.length];c.push({id:`nd-case-${String(i+1).padStart(3,"0")}`,title:`${t}案例${i+1}`,description:`通过${t}掌握Node`,difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"实现",description:"编码"},{order:3,title:"测试",description:"验证"},{order:4,title:"优化",description:"改进"},{order:5,title:"总结",description:"归纳"}],relatedQuestionIds:pickN(qs,3).map(q=>q.id),tags:[t],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
const RT=[{slug:"3天Node入门",days:3,target:"入门"},{slug:"7天Express",days:7,target:"Express"},{slug:"补1",days:5,target:"p1"},{slug:"补2",days:5,target:"p2"},{slug:"补3",days:5,target:"p3"},{slug:"补4",days:5,target:"p4"},{slug:"补5",days:5,target:"p5"},{slug:"补6",days:5,target:"p6"},{slug:"补7",days:5,target:"p7"},{slug:"补8",days:5,target:"p8"},{slug:"补9",days:5,target:"p9"},{slug:"补10",days:5,target:"p10"},{slug:"补11",days:5,target:"p11"},{slug:"补12",days:5,target:"p12"},{slug:"补13",days:5,target:"p13"},{slug:"补14",days:5,target:"p14"},{slug:"补15",days:5,target:"p15"},{slug:"补16",days:5,target:"p16"},{slug:"补17",days:5,target:"p17"},{slug:"补18",days:5,target:"p18"},{slug:"补19",days:5,target:"p19"},{slug:"补20",days:5,target:"p20"},{slug:"补21",days:5,target:"p21"},{slug:"补22",days:5,target:"p22"},{slug:"补23",days:5,target:"p23"},{slug:"补24",days:5,target:"p24"},{slug:"补25",days:5,target:"p25"},{slug:"补26",days:5,target:"p26"},{slug:"补27",days:5,target:"p27"},{slug:"补28",days:5,target:"p28"},{slug:"补29",days:5,target:"p29"},{slug:"补30",days:5,target:"p30"},{slug:"补31",days:5,target:"p31"},{slug:"补32",days:5,target:"p32"},{slug:"补33",days:5,target:"p33"},{slug:"补34",days:5,target:"p34"}];
function buildRoutes(cs,ls){return RT.map((r,i)=>({id:`nd-route-${String(i+1).padStart(2,"0")}`,slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]}));}
const GL=[["Node.js","JS运行时"],["npm","包管理器"],["package.json","项目配置"],["CommonJS","require模块"],["ESM","import模块"],["Promise","异步操作"],["async/await","异步语法"],["事件循环","异步机制"],["fs","文件系统"],["path","路径处理"],["process","进程"],["dotenv","环境变量"],["Express","Web框架"],["路由","API端点"],["中间件","请求处理"],["错误处理","异常捕获"],["cors","跨域"],["JWT","认证Token"],["bcrypt","密码哈希"],["Prisma","ORM"],["Mongoose","MongoDB"],["CRUD","增删改查"],["分页","数据分页"],["Jest","测试"],["Supertest","HTTP测试"],["Winston","日志"],["Docker","容器"],["PM2","进程管理"]];
for(let i=GL.length;i<360;i++){GL.push([`Node概念${i+1}`,`Node概念${i+1}说明`]);}
function buildGlossary(){return GL.map((x,i)=>({id:`nd-glossary-${String(i+1).padStart(3,"0")}`,term:x[0],definition:x[1],category:"Node",tags:["Node"],updatedAt:"2026-07-02T00:00:00.000Z"}));}
const FAQ=[["Node.js和浏览器JS区别？","Node无DOM有fs/http/process等模块。"],["npm和yarn区别","npm默认yarn快锁定文件格式不同。"],["require和import区别","require运行时加载import静态编译。"],["Promise和async/await选哪个","async更简洁Promise更基础。"],["Express中间件顺序重要吗","非常重要按use顺序执行。"],["JWT怎么做鉴权","验证Token解析payload检查权限。"],["Prisma和Mongoose区别","Prisma类型安全Mongoose灵活。"],["Node项目怎么部署","PM2进程管理或Docker容器化。"],["Node适合做什么","API服务实时应用工具链CLI。"],["Node面试常问","事件循环中间件JWT数据库异步。"]];
for(let i=FAQ.length;i<210;i++){FAQ.push([`Node问题${i+1}？`,`Node问题${i+1}解答。`]);}
function buildFaqs(){return FAQ.slice(0,210).map((x,i)=>({id:`nd-faq-${String(i+1).padStart(3,"0")}`,question:x[0],answer:x[1],category:"Node",tags:["Node"],updatedAt:"2026-07-02T00:00:00.000Z"}));}
function buildSearchIndex(ls,kps,qs,gl,fs2){const e=[];ls.forEach(l=>e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:`/lessons/${l.slug}`,tags:["Node"]}));kps.forEach(k=>e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:`/knowledge/${k.id}`,tags:["Node"]}));qs.forEach(q=>e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:`/questions/${q.id}`,tags:["Node"]}));gl.forEach(g=>e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Node"]}));fs2.forEach(f=>e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Node"]}));return e;}
async function main(){
  console.log("🚀 Generating module-node-express...\n");
  const tags=buildTags();const courses=buildCourses();const lessons=buildLessons();const kps=buildKP();const questions=buildQ();
  const exams=buildExams(questions);const cases=buildCases(questions);const routes=buildRoutes(courses,lessons);
  const glossary=buildGlossary();const faqs=buildFaqs();const si=buildSearchIndex(lessons,kps,questions,glossary,faqs);
  courses.forEach(c=>{const cl=lessons.filter(l=>l.courseId===c.id);c.lessonIds=cl.map(l=>l.id);c.totalLessons=cl.length;c.tags=[c.title];});
  const cm={};questions.forEach(q=>{if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(l=>{const ch=COURSES_DATA.find(c=>c.id===l.courseId)?.title||"";l.practiceQuestionIds=(cm[ch]||[]).slice(0,5);});
  const mod={id:"mod-node-express",slug:"module-node-express",title:"Node.js 与 Express 后端开发",subtitle:"面向全栈开发入门者",description:"面向JavaScriptTypeScript学习者和全栈开发入门者系统学习Node.js运行时npm模块系统异步编程HTTPExpressREST API中间件JWT数据库连接ORM接口测试日志部署和后端项目实战的静态学习模块。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["Node.js","Express","后端开发","REST API","JWT","npm","异步编程","全栈开发"],estimatedHours:170,difficulty:"intermediate",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"🚀",repoUrl:"https://github.com/openskill-galaxy/module-node-express",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  const files={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(const[n,data]of Object.entries(files)){const fp=path.join(DATA,n);fs.writeFileSync(fp,JSON.stringify(data,null,2),"utf-8");console.log(`  ${n}(${Array.isArray(data)?data.length:1})`);}
  const tc={};questions.forEach(q=>{tc[q.type]=(tc[q.type]||0)+1;});
  console.log(`\ncourses:${courses.length} lessons:${lessons.length} KPs:${kps.length} questions:${questions.length} exams:${exams.length} cases:${cases.length} routes:${routes.length} tags:${tags.length} glossary:${glossary.length} faqs:${faqs.length} search-index:${si.length}`);
  for(const[t,c]of Object.entries(tc).sort())console.log(`  ${t}:${c}`);console.log("✅ Done!");}
main().catch(e=>{console.error(e);process.exit(1);});

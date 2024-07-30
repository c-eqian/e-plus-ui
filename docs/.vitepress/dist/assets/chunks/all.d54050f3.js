import{g as R,b as A}from"../app.390b7fa1.js";import{d as P,h,x as y,C as a,o,c as l,H as r,w as n,F as d,D as u,b as F,k as p,t as L,l as f,I as B,a as b}from"./framework.330b59dd.js";import"./theme.18bfc3c8.js";const x=["ArrowDown","ArrowRightBold","ArrowDownBold","ArrowUpBold","ArrowRight","ArrowUp","BottomLeft","Back","Bottom","CaretRight","BottomRight","CaretLeft","DArrowLeft","CaretBottom","DArrowRight","TopLeft","CaretTop","Right","TopLine","DCaret","Top","TopRight","ArrowLeftBold","ArrowLeft"],T=["Lv1","Lv10","Lv3","Lv4","Lv5","Lv6","Lv7","Lv2","Lv8","Lv9","Backtop","Vip","ChatDotRound","ChatDotSquare","ChatLineRound","ChatRound","ChatSquare","ChatLineSquare","CollectionTag","CollectionFill","Comment","Level0","Collection","Level1","Level5","Level2","Level3","Level4","Level6","LikeFill","LikeHeartFill","LinkConnect","LikeHeart","Revoke","Link","ShareSquare","Share","ShareSquare2","Star","TopText","UnlikeFill","UserVip"],V=["DataAnalysis","DataBoard","Filter","DataLine","Finished","List","Postcard","Histogram","SortDown","Sort","SortUp"],z=["FolderOpened","CopyDocument","DocumentAdd","DocumentCopy","DocumentDelete","DocumentChecked","Document","EditPen","Download","DocumentRemove","Edit","Files","Expand","Fold","FolderAdd","FolderChecked","FolderRemove","Folder","FolderDelete","Printer","UploadFilled","Upload"],U=["ForkSpoon","Food","GobletFull","Fries","GobletSquareFull","GobletSquare","Goblet","IceCreamSquare","IceCream","IceCreamRound","IceDrink","IceTea","KnifeFork"],I=["Goods","GoodsFilled","ShoppingCartFull"],q=["PictureFilled","Picture","PictureRounded","VideoCamera","VideoPause","VideoPlay","VideoCameraFilled"],G=["AddLocation","Submit","Aim","Apple","Auth","Avatar","AlarmClock","BellFilled","Bell","Camera","CameraFilled","Calendar","Checked","Check","CircleCheckFilled","CircleCheck","CircleCloseFilled","CircleClose","CirclePlusFilled","CirclePlus","Connection","Cpu","Crop","Close","Clock","Delete","DeleteFilled","Failed","FullScreen","DeleteLocation","HomeFilled","Grid","Hide","House","InfoFilled","Location","Loading","LocationFilled","Notification","Open","Lock","PhoneFilled","Operation","Phone","Place","Platform","Plus","Position","Promotion","Pointer","Rank","QuestionFilled","RefreshRight","RefreshLeft","Remove","Refresh","Search","RemoveFilled","Select","Setting","SwitchButton","Tools","Switch","StarFilled","SuccessFilled","TurnOff","Unlock","View","UserFilled","User","WarnTriangleFilled","WarningFilled","ZoomIn","ZoomOut","Warning"],H=["Guide"],O=["Cloudy","Lightning","Drizzling","Pouring","Sunny","Sunset","Sunrise"],v={arrow:x,contact:T,data:V,document:z,food:U,items:I,media:q,system:G,traffic:H,weather:O},E={class:"cz-grid cz-grid-cols-3 cz-grid-rows-3 cz-gap-2"},K={class:"cz-text-sm"},Q=P({__name:"all",setup(N){const i=Object.keys(v),c=h(i),S=()=>i.map(t=>({label:t})),s=h([]);return y(()=>s.value,t=>{if(R(t)){c.value=i;return}c.value=t}),(t,m)=>{const g=a("el-option"),D=a("el-select"),k=a("el-input"),w=a("ep-copy-text");return o(),l("div",null,[r(k,{placeholder:"Please input","suffix-icon":"Search"},{prepend:n(()=>[r(D,{multiple:"",modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=e=>s.value=e),placeholder:"全部",style:{width:"220px"}},{default:n(()=>[(o(!0),l(d,null,u(S(),e=>(o(),F(g,{label:e.label,value:e.label,key:e.label},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),(o(!0),l(d,null,u(c.value,e=>(o(),l("div",{key:e,class:"cz-w-full"},[p("h2",null,L(e),1),p("div",E,[(o(!0),l(d,null,u(f(v)[e],(C,_)=>(o(),l("div",{key:_,class:"cz-flex cz-p-6 cz-space-y-2 cz-flex-col"},[r(f(A),{color:"#67C23A",width:"24",height:"24"},{default:n(()=>[(o(),F(B(C)))]),_:2},1024),p("span",K,[r(w,null,{default:n(()=>[b(L(C),1)]),_:2},1024)])]))),128))])]))),128))])}}});export{Q as default};
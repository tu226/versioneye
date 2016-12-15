!function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(t){function n(e,t){var n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],r=Object.create(e.prototype);for(var i in n)r[i]=n[i];return r.constructor=t,t.prototype=r,t}function r(e){e=e||{},this.defaultProtocol=e.defaultProtocol||h.defaultProtocol,this.events=e.events||h.events,this.format=e.format||h.format,this.formatHref=e.formatHref||h.formatHref,this.nl2br=e.nl2br||h.nl2br,this.tagName=e.tagName||h.tagName,this.target=e.target||h.target,this.validate=e.validate||h.validate,this.ignoreTags=[],this.attributes=e.attributes||e.linkAttributes||h.attributes,this.className=e.className||e.linkClass||h.className;for(var t=e.ignoreTags||h.ignoreTags,n=0;n<t.length;n++)this.ignoreTags.push(t[n].toUpperCase())}function i(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}function o(e){return e}function a(e,t){return"url"===t?"_blank":null}function s(){return function(e){this.j=[],this.T=e||null}}function u(e,t,n,r){for(var i=0,o=e.length,a=t,s=[],u=void 0;i<o&&(u=a.next(e[i]));)a=u,i++;if(i>=o)return[];for(;i<o-1;)u=new m(r),s.push(u),a.on(e[i],u),a=u,i++;return u=new m(n),s.push(u),a.on(e[o-1],u),s}function c(){return function(e){e&&(this.v=e)}}function l(e){var t=e?{v:e}:{};return n(v,c(),t)}function p(e){return e instanceof y||e instanceof N}var h={defaultProtocol:"http",events:null,format:o,formatHref:o,nl2br:!1,tagName:"a",target:a,validate:!0,ignoreTags:[],attributes:null,className:"linkified"};r.prototype={resolve:function(e){var t=e.toHref(this.defaultProtocol);return{formatted:this.get("format",e.toString(),e),formattedHref:this.get("formatHref",t,e),tagName:this.get("tagName",t,e),className:this.get("className",t,e),target:this.get("target",t,e),events:this.getObject("events",t,e),attributes:this.getObject("attributes",t,e)}},check:function(e){return this.get("validate",e.toString(),e)},get:function(t,n,r){var i=this[t];if(!i)return i;switch("undefined"==typeof i?"undefined":e(i)){case"function":return i(n,r.type);case"object":var o=i[r.type]||h[t];return"function"==typeof o?o(n,r.type):o}return i},getObject:function(e,t,n){var r=this[e];return"function"==typeof r?r(t,n.type):r}};var f=Object.freeze({defaults:h,Options:r,contains:i}),d=s();d.prototype={defaultTransition:!1,on:function(e,t){if(e instanceof Array){for(var n=0;n<e.length;n++)this.j.push([e[n],t]);return this}return this.j.push([e,t]),this},next:function(e){for(var t=0;t<this.j.length;t++){var n=this.j[t],r=n[0],i=n[1];if(this.test(e,r))return i}return this.defaultTransition},accepts:function(){return!!this.T},test:function(e,t){return e===t},emit:function(){return this.T}};var m=n(d,s(),{test:function(e,t){return e===t||t instanceof RegExp&&t.test(e)}}),g=n(d,s(),{jump:function(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=this.next(new e(""));return n===this.defaultTransition?(n=new this.constructor(t),this.on(e,n)):t&&(n.T=t),n},test:function(e,t){return e instanceof t}}),v=c();v.prototype={toString:function(){return this.v+""}};var y=l(),b=l("@"),w=l(":"),x=l("."),C=l(),E=l(),_=l("\n"),S=l(),k=l("+"),T=l("#"),M=l(),A=l("?"),R=l("/"),D=l("_"),O=l(),N=l(),I=l(),P=l("{"),j=l("["),L=l("<"),$=l("("),F=l("}"),B=l("]"),U=l(">"),z=l(")"),H=Object.freeze({Base:v,DOMAIN:y,AT:b,COLON:w,DOT:x,PUNCTUATION:C,LOCALHOST:E,NL:_,NUM:S,PLUS:k,POUND:T,QUERY:A,PROTOCOL:M,SLASH:R,UNDERSCORE:D,SYM:O,TLD:N,WS:I,OPENBRACE:P,OPENBRACKET:j,OPENANGLEBRACKET:L,OPENPAREN:$,CLOSEBRACE:F,CLOSEBRACKET:B,CLOSEANGLEBRACKET:U,CLOSEPAREN:z}),q="aaa|aarp|abb|abbott|abogado|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|af|afl|ag|agency|ai|aig|airforce|airtel|al|alibaba|alipay|allfinanz|alsace|am|amica|amsterdam|an|analytics|android|ao|apartments|app|apple|aq|aquarelle|ar|aramco|archi|army|arpa|arte|as|asia|associates|at|attorney|au|auction|audi|audio|author|auto|autos|avianca|aw|ax|axa|az|azure|ba|baidu|band|bank|bar|barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bb|bbc|bbva|bcg|bcn|bd|be|beats|beer|bentley|berlin|best|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bom|bond|boo|book|boots|bosch|bostik|bot|boutique|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|camera|camp|cancerresearch|canon|capetown|capital|car|caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chloe|christmas|chrome|church|ci|cipriani|circle|cisco|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|date|dating|datsun|day|dclk|de|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|dnp|do|docs|dog|doha|domains|download|drive|dubai|durban|dvag|dz|earth|eat|ec|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|er|erni|es|esq|estate|et|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|fage|fail|fairwinds|faith|family|fan|fans|farm|fashion|fast|feedback|ferrero|fi|film|final|finance|financial|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|florist|flowers|flsmidth|fly|fm|fo|foo|football|ford|forex|forsale|forum|foundation|fox|fr|fresenius|frl|frogans|frontier|fund|furniture|futbol|fyi|ga|gal|gallery|gallup|game|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|gold|goldpoint|golf|goo|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|group|gs|gt|gu|gucci|guge|guide|guitars|guru|gw|gy|hamburg|hangout|haus|hdfcbank|health|healthcare|help|helsinki|here|hermes|hiphop|hitachi|hiv|hk|hm|hn|hockey|holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hr|hsbc|ht|hu|hyundai|ibm|icbc|ice|icu|id|ie|ifm|iinet|il|im|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|international|investments|io|ipiranga|iq|ir|irish|is|iselect|ist|istanbul|it|itau|iwc|jaguar|java|jcb|je|jetzt|jewelry|jlc|jll|jm|jmp|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kitchen|kiwi|km|kn|koeln|komatsu|kp|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|lamborghini|lamer|lancaster|land|landrover|lanxess|lasalle|lat|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|legal|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|limited|limo|lincoln|linde|link|live|living|lixil|lk|loan|loans|local|locus|lol|london|lotte|lotto|love|lr|ls|lt|ltd|ltda|lu|lupin|luxe|luxury|lv|ly|ma|madrid|maif|maison|makeup|man|management|mango|market|marketing|markets|marriott|mba|mc|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|mg|mh|miami|microsoft|mil|mini|mk|ml|mm|mma|mn|mo|mobi|mobily|moda|moe|moi|mom|monash|money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mp|mq|mr|ms|mt|mtn|mtpc|mtr|mu|museum|mutuelle|mv|mw|mx|my|mz|na|nadex|nagoya|name|natura|navy|nc|ne|nec|net|netbank|network|neustar|new|news|nexus|nf|ng|ngo|nhk|ni|nico|nikon|ninja|nissan|nl|no|nokia|norton|nowruz|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|office|okinawa|om|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|origins|osaka|otsuka|ovh|pa|page|pamperedchef|panerai|paris|pars|partners|parts|party|passagens|pe|pet|pf|pg|ph|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pohl|poker|porn|post|pr|praxi|press|pro|prod|productions|prof|promo|properties|property|protection|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|racing|re|read|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|ricoh|rio|rip|ro|rocher|rocks|rodeo|room|rs|rsvp|ru|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|saxo|sb|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scor|scot|sd|se|seat|security|seek|select|sener|services|seven|sew|sex|sexy|sfr|sg|sh|sharp|shell|shia|shiksha|shoes|show|shriram|si|singles|site|sj|sk|ski|skin|sky|skype|sl|sm|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|st|stada|star|starhub|statefarm|statoil|stc|stcgroup|stockholm|storage|store|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|taobao|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|team|tech|technology|tel|telecity|telefonica|temasek|tennis|tf|tg|th|thd|theater|theatre|tickets|tienda|tiffany|tips|tires|tirol|tj|tk|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tp|tr|trade|trading|training|travel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubs|ug|uk|unicom|university|uno|uol|us|uy|uz|va|vacations|vana|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|viking|villas|vin|vip|virgin|vision|vista|vistaprint|viva|vlaanderen|vn|vodka|volkswagen|vote|voting|voto|voyage|vu|vuelos|wales|walter|wang|wanggou|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|wme|wolterskluwer|work|works|world|ws|wtc|wtf|xbox|xerox|xin|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|youtube|yt|za|zara|zero|zip|zm|zone|zuerich|zw".split("|"),V="0123456789".split(""),W="0123456789abcdefghijklmnopqrstuvwxyz".split(""),K=[" ","\f","\r","\t","\x0B","\xa0","\u1680","\u180e"],Q=[],Y=function(e){return new m(e)},X=Y(),G=Y(S),J=Y(y),Z=Y(),ee=Y(I);X.on("@",Y(b)).on(".",Y(x)).on("+",Y(k)).on("#",Y(T)).on("?",Y(A)).on("/",Y(R)).on("_",Y(D)).on(":",Y(w)).on("{",Y(P)).on("[",Y(j)).on("<",Y(L)).on("(",Y($)).on("}",Y(F)).on("]",Y(B)).on(">",Y(U)).on(")",Y(z)).on([",",";","!",'"',"'"],Y(C)),X.on("\n",Y(_)).on(K,ee),ee.on(K,ee);for(var te=0;te<q.length;te++){var ne=u(q[te],X,N,y);Q.push.apply(Q,ne)}var re=u("file",X,y,y),ie=u("ftp",X,y,y),oe=u("http",X,y,y);Q.push.apply(Q,re),Q.push.apply(Q,ie),Q.push.apply(Q,oe);var ae=re.pop(),se=ie.pop(),ue=oe.pop(),ce=Y(y),le=Y(M);se.on("s",ce).on(":",le),ue.on("s",ce).on(":",le),Q.push(ce),ae.on(":",le),ce.on(":",le);var pe=u("localhost",X,E,y);Q.push.apply(Q,pe),X.on(V,G),G.on("-",Z).on(V,G).on(W,J),J.on("-",Z).on(W,J);for(var he=0;he<Q.length;he++)Q[he].on("-",Z).on(W,J);Z.on("-",Z).on(V,J).on(W,J),X.defaultTransition=Y(O);var fe=function(e){for(var t=e.replace(/[A-Z]/g,function(e){return e.toLowerCase()}),n=e.length,r=[],i=0;i<n;){for(var o=X,a=null,s=null,u=0,c=null,l=-1;i<n&&(s=o.next(t[i]));)a=null,o=s,o.accepts()?(l=0,c=o):l>=0&&l++,u++,i++;if(!(l<0)){i-=l,u-=l;var p=c.emit();r.push(new p(e.substr(i-u,u)))}}return r},de=X,me=Object.freeze({State:m,TOKENS:H,run:fe,start:de}),ge=c();ge.prototype={type:"token",isLink:!1,toString:function(){for(var e=[],t=0;t<this.v.length;t++)e.push(this.v[t].toString());return e.join("")},toHref:function(){return this.toString()},toObject:function(){var e=arguments.length<=0||void 0===arguments[0]?"http":arguments[0];return{type:this.type,value:this.toString(),href:this.toHref(e)}}};var ve=n(ge,c(),{type:"email",isLink:!0,toHref:function(){return"mailto:"+this.toString()}}),ye=n(ge,c(),{type:"text"}),be=n(ge,c(),{type:"nl"}),we=n(ge,c(),{type:"url",isLink:!0,toHref:function(){for(var e=arguments.length<=0||void 0===arguments[0]?"http":arguments[0],t=!1,n=!1,r=this.v,i=[],o=0;r[o]instanceof M;)t=!0,i.push(r[o].toString().toLowerCase()),o++;for(;r[o]instanceof R;)n=!0,i.push(r[o].toString()),o++;for(;p(r[o]);)i.push(r[o].toString().toLowerCase()),o++;for(;o<r.length;o++)i.push(r[o].toString());return i=i.join(""),t||n||(i=e+"://"+i),i},hasProtocol:function(){return this.v[0]instanceof M}}),xe=Object.freeze({Base:ge,EMAIL:ve,NL:be,TEXT:ye,URL:we}),Ce=function(e){return new g(e)},Ee=Ce(),_e=Ce(),Se=Ce(),ke=Ce(),Te=Ce(),Me=Ce(),Ae=Ce(we),Re=Ce(),De=Ce(we),Oe=Ce(we),Ne=Ce(),Ie=Ce(),Pe=Ce(),je=Ce(),Le=Ce(),$e=Ce(we),Fe=Ce(we),Be=Ce(we),Ue=Ce(we),ze=Ce(),He=Ce(),qe=Ce(),Ve=Ce(),We=Ce(),Ke=Ce(),Qe=Ce(ve),Ye=Ce(),Xe=Ce(ve),Ge=Ce(),Je=Ce(),Ze=Ce(),et=Ce(be);Ee.on(_,et).on(M,_e).on(R,Se),_e.on(R,Se),Se.on(R,ke),Ee.on(N,Te).on(y,Te).on(E,Ae).on(S,Te),ke.on(N,Oe).on(y,Oe).on(S,Oe).on(E,Oe),Te.on(x,Me),We.on(x,Ke),Me.on(N,Ae).on(y,Te).on(S,Te).on(E,Te),Ke.on(N,Qe).on(y,We).on(S,We).on(E,We),Ae.on(x,Me),Qe.on(x,Ke),Ae.on(w,Re).on(R,Oe),Re.on(S,De),De.on(R,Oe),Qe.on(w,Ye),Ye.on(S,Xe);var tt=[y,b,E,S,k,T,M,R,N,D,O],nt=[w,x,A,C,F,B,U,z,P,j,L,$];Oe.on(P,Ie).on(j,Pe).on(L,je).on($,Le),Ne.on(P,Ie).on(j,Pe).on(L,je).on($,Le),Ie.on(F,Oe),Pe.on(B,Oe),je.on(U,Oe),Le.on(z,Oe),$e.on(F,Oe),Fe.on(B,Oe),Be.on(U,Oe),Ue.on(z,Oe),ze.on(F,Oe),He.on(B,Oe),qe.on(U,Oe),Ve.on(z,Oe),Ie.on(tt,$e),Pe.on(tt,Fe),je.on(tt,Be),Le.on(tt,Ue),Ie.on(nt,ze),Pe.on(nt,He),je.on(nt,qe),Le.on(nt,Ve),$e.on(tt,$e),Fe.on(tt,Fe),Be.on(tt,Be),Ue.on(tt,Ue),$e.on(nt,$e),Fe.on(nt,Fe),Be.on(nt,Be),Ue.on(nt,Ue),ze.on(tt,$e),He.on(tt,Fe),qe.on(tt,Be),Ve.on(tt,Ue),ze.on(nt,ze),He.on(nt,He),qe.on(nt,qe),Ve.on(nt,Ve),Oe.on(tt,Oe),Ne.on(tt,Oe),Oe.on(nt,Ne),Ne.on(nt,Ne);var rt=[y,S,k,T,A,D,O,N];Te.on(rt,Ge).on(b,Je),Ae.on(rt,Ge).on(b,Je),Me.on(rt,Ge),Ge.on(rt,Ge).on(b,Je).on(x,Ze),Ze.on(rt,Ge),Je.on(N,We).on(y,We).on(E,Qe);var it=function(e){for(var t=e.length,n=0,r=[],i=[];n<t;){for(var o=Ee,a=null,s=null,u=0,c=null,l=-1;n<t&&!(a=o.next(e[n]));)i.push(e[n++]);for(;n<t&&(s=a||o.next(e[n]));)a=null,o=s,o.accepts()?(l=0,c=o):l>=0&&l++,n++,u++;if(l<0)for(var p=n-u;p<n;p++)i.push(e[p]);else{i.length>0&&(r.push(new ye(i)),i=[]),n-=l,u-=l;var h=c.emit();r.push(new h(e.slice(n-u,n)))}}return i.length>0&&r.push(new ye(i)),r},ot=Object.freeze({State:g,TOKENS:xe,run:it,start:Ee});Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});var at=function(e){return it(fe(e))},st=function(e){for(var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=at(e),r=[],i=0;i<n.length;i++){var o=n[i];!o.isLink||t&&o.type!==t||r.push(o.toObject())}return r},ut=function(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=at(e);return 1===n.length&&n[0].isLink&&(!t||n[0].type===t)};t.find=st,t.inherits=n,t.options=f,t.parser=ot,t.scanner=me,t.test=ut,t.tokenize=at}(window.linkify=window.linkify||{})}();
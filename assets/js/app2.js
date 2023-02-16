(()=> {
    var t, e= {
        6506: (t, e, s)=> {
            "use strict";
            var i= {};
            s.r(i), s.d(i, {
                cubicIn: ()=>k, cubicInOut: ()=>C, cubicOut: ()=>M, expoOut: ()=>P, getInterpolation: ()=>I, getProgress: ()=>O, lerp: ()=>A, parabola: ()=>N, restrictNum: ()=>D
            }
            );
            s(3937);
            var n=s(971),
            o=s(4522);
            n.p8.registerPlugin(o.t);
            const r=n.p8,
            a= {
                user:window.Useragnt, new:"", vw:0, vh:0, dpr:window.devicePixelRatio>1, scroll: {
                    cache: 0, old: 0, pos: 0, virtual: 0, dir: "stay", pow: 0
                }
                ,
                mouse: {
                    x: 0, y: 0, vx: 0, vy: 0
                }
                ,
                gl: {},
                evt:"click",
                act:"no-pc",
                dev:"no-pc",
                wid:"sp",
                land:!1,
                trst:!1,
                load:!1,
                nav:!1,
                dir:"",
                ps:!1,
                resize:function() {},
                comp:function() {},
                comps:function() {},
                hasWheelEvent:"onwheel"in document,
                hasMouseWheelEvent:"onmousewheel"in document,
                hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,
                hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,
                hasPointer:!!window.navigator.msPointerEnabled,
                hasKeyDown:"onkeydown"in document,
                isFirefox:navigator.userAgent.indexOf("Firefox")>-1
            },
            h=document,
            l= {
                init: function() {
                    this.pass()
                }
                ,
                pass:function() {
                    let t=!1;
                    try {
                        window.addEventListener("test", null, Object.defineProperty( {}, "passive", {
                            get: function() {
                                t=!0
                            }
                        }
                        ))
                    }
                    catch(t) {}!0===t&&(a.ps= {
                        passive: !1
                    }
                    )
                }
            }
            ;
            const c=new class {
                constructor() {
                    this.init()
                }
                init() {
                    this.bus=document.createElement("fakeelement")
                }
                on(t,
                e) {
                    this.bus.addEventListener(t, e)
                }
                once(t,
                e) {
                    var s=this.bus;
                    this.bus.addEventListener(t, (function i() {
                        s.removeEventListener(t, i), e.apply(this, arguments)
                    }
                    ))
                }
                off(t,
                e) {
                    this.bus.removeEventListener(t, e)
                }
                emit(t,
                e) {
                    var s=document.createEvent("CustomEvent");
                    return s.initCustomEvent(t, !1, !1, e), this.bus.dispatchEvent(s)
                }
            },
            u="UPDATE_GLOBAL";
            var m=s(5914),
            d=s(345),
            p=s(7970);
            const v=new class {
                constructor() {
                    this.$wrapper=null, this.dimensions=new m.F, this.dimensions_old=new m.F, this.aspect=null, this.isMobile=!1, this.pixelRatio=null, this.fbo_dimensions=new m.F, this.time=0, this.delta=0
                }
                init(t) {
                    let {
                        $canvas: e
                    }=t;
                    this.pixelRatio=Math.min(1.8, window.devicePixelRatio),
                    this.$canvas=e,
                    this.renderer=new d.C( {
                        antialias: !0, alpha: !0, canvas: this.$canvas, preserveDrawingBuffer: !0
                    }),
                    this.renderer.autoClearColor=!1,
                    this.renderer.sortObjects=!0,
                    this.renderer.setPixelRatio(this.pixelRatio),
                    this.clock=new p.S,
                    this.clock.start(),
                    this.resize()
                }
                resize() {
                    const t=document.body.clientWidth, e=window.innerHeight;
                    this.dimensions_old.copy(this.dimensions), this.dimensions.set(t, e), this.fbo_dimensions.set(t*this.pixelRatio, e*this.pixelRatio), this.aspect=t/e, this.baseScale=831/this.dimensions.y, this.isMobile=t<=1024, this.isMobile2=t<=767, this.renderer.setSize(this.dimensions.x, this.dimensions.y)
                }
                getScale(t,e) {
                    t.scale.set(e*this.baseScale, e*this.baseScale, e*this.baseScale)
                }
                getPositionFromTarget(t,e,s) {
                    let i=1;
                    s&&(i=this.baseScale, this.getScale(e, t.width));
                    const n=this.dimensions.y-t.top-this.dimensions.y/2-t.height/2, o=t.left-this.dimensions.x/2+t.width/2;
                    e.position.x=o, e.position.y=n*i
                }
                update() {
                    const t=this.clock.getDelta();
                    this.delta=t, this.time+=this.delta
                }
            }
            ;
            var f=s(7079);
            s(2856);
            const g=new class {
                constructor() {
                    this.aurora= {
                        color1: new f.I(11111), color2: new f.I(22222), color3: new f.I(0), color4: new f.I(134690)
                    }
                    ,
                    this.params= {
                        noiseIntensity: new m.F(1, .5), noiseScale: new m.F(1, .48), opacity: 1
                    }
                }
                init() {}
            }
            ;
            var y=s(1698),
            w=s(9717),
            x=s(394),
            _=s(2613),
            b=s(8670);
            const T="#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main(){\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}",
            S= {
                loading: {
                    isFinished: !0, progress: 0
                }
                ,
                firstView: {
                    iShow: !1, current: 0
                }
                ,
                about: {
                    isShow: !1
                }
                ,
                aboutVideos: {
                    isShow: !1, current: 0, isFocus: !1
                }
                ,
                isIndex:!1
            }
            ;
            const E=t=> {
                const e=t.split(".");
                let s=S;
                for(let t=0;t<e.length;t++)s=s[e[t]];
                return s
            }
            ,
            L=(t,
            e)=> {
                const s=t.split(".");
                let i=S;
                for(let t=0;t<s.length-1;t++)i=i[s[t]];
                i[s[s.length-1]]=e
            }
            ,
            A=function(t,
            e,
            s) {
                return t+(e-t)*s
            }
            ,
            M=function(t) {
                const e=t-1;
                return e*e*e+1
            }
            ,
            k=function(t) {
                return t*t*t
            }
            ,
            P=function(t) {
                return 1==t?t: 1-Math.pow(2, -10*t)
            }
            ,
            C=function(t) {
                return t<.5?4*t*t*t: .5*Math.pow(2*t-2, 3)+1
            }
            ,
            O=function(t,
            e,
            s) {
                return Math.min(1, Math.max(0, (t-e)/(s-e)))
            }
            ,
            I=function(t,
            e,
            s) {
                return t+(e-t)*s
            }
            ,
            N=function(t) {
                return-(2*t-1)*(2*t-1)+1
            }
            ,
            D=function(t,
            e) {
                const s=t/e;
                return(s-Math.floor(s))*e
            }
            ;
            const R=new class {
                constructor() {
                    this.auroraPixelRatio=.5
                }
                init() {
                    this.fbo_aurora=new y.d(v.dimensions.x*this.auroraPixelRatio, v.dimensions.y*this.auroraPixelRatio), this.fbo_output=new y.d(v.fbo_dimensions.x, v.fbo_dimensions.y), this.camera=new w.V, this.timeOffset=100*Math.random(), this.uniforms= {
                        uResolution: {
                            value: v.dimensions
                        }
                        ,
                        uTime: {
                            value: this.timeOffset
                        }
                        ,
                        uColor1: {
                            value: g.aurora.color1
                        }
                        ,
                        uColor2: {
                            value: g.aurora.color2
                        }
                        ,
                        uColor3: {
                            value: g.aurora.color3
                        }
                        ,
                        uColor4: {
                            value: g.aurora.color4
                        }
                        ,
                        uSaturate: {
                            value: 0
                        }
                        ,
                        uNoiseIntensity: {
                            value: g.params.noiseIntensity
                        }
                        ,
                        uNoiseScale: {
                            value: g.params.noiseScale
                        }
                        ,
                        uScrollOffset: {
                            value: 0
                        }
                        ,
                        uLightness: {
                            value: new m.F(.5, 0)
                        }
                    }
                    ,
                    this.plane_aurora=new x.K(new _._(2,
                    2),
                    new b.j( {
                        vertexShader: T, fragmentShader: "#define GLSLIFY 1\nuniform vec2 uResolution;\nuniform float uTime;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nuniform vec3 uColor3;\nuniform vec3 uColor4;\nuniform vec2 uNoiseIntensity;\nuniform vec2 uNoiseScale;\nuniform vec2 uLightness;\n\nvarying vec2 vUv;\n\n/* The MIT License\n * Copyright © 2013 Nikita Miropolskiy\n * \n * ( license has been changed from CCA-NC-SA 3.0 to MIT\n *\n *   but thanks for attributing your source code when deriving from this sample \n *   with a following link: https://www.shadertoy.com/view/XsX3zB )\n *\n * ~\n * ~ if you're looking for procedural noise implementation examples you might \n * ~ also want to look at the following shaders:\n * ~ \n * ~ Noise Lab shader by candycat: https://www.shadertoy.com/view/4sc3z2\n * ~\n * ~ Noise shaders by iq:\n * ~     Value    Noise 2D, Derivatives: https://www.shadertoy.com/view/4dXBRH\n * ~     Gradient Noise 2D, Derivatives: https://www.shadertoy.com/view/XdXBRH\n * ~     Value    Noise 3D, Derivatives: https://www.shadertoy.com/view/XsXfRH\n * ~     Gradient Noise 3D, Derivatives: https://www.shadertoy.com/view/4dffRH\n * ~     Value    Noise 2D             : https://www.shadertoy.com/view/lsf3WH\n * ~     Value    Noise 3D             : https://www.shadertoy.com/view/4sfGzS\n * ~     Gradient Noise 2D             : https://www.shadertoy.com/view/XdXGW8\n * ~     Gradient Noise 3D             : https://www.shadertoy.com/view/Xsl3Dl\n * ~     Simplex  Noise 2D             : https://www.shadertoy.com/view/Msf3WH\n * ~     Voronoise: https://www.shadertoy.com/view/Xd23Dh\n * ~ \n *\n */\n\n/* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */\nvec3 random3(vec3 c) {\n\tfloat j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));\n\tvec3 r;\n\tr.z = fract(512.0*j);\n\tj *= .125;\n\tr.x = fract(512.0*j);\n\tj *= .125;\n\tr.y = fract(512.0*j);\n\treturn r-0.5;\n}\n\n/* skew constants for 3d simplex functions */\nconst float F3 =  0.3333333;\nconst float G3 =  0.1666667;\n\n/* 3d simplex noise */\nfloat simplex3d(vec3 p) {\n\t /* 1. find current tetrahedron T and it's four vertices */\n\t /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */\n\t /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/\n\t \n\t /* calculate s and x */\n\t vec3 s = floor(p + dot(p, vec3(F3)));\n\t vec3 x = p - s + dot(s, vec3(G3));\n\t \n\t /* calculate i1 and i2 */\n\t vec3 e = step(vec3(0.0), x - x.yzx);\n\t vec3 i1 = e*(1.0 - e.zxy);\n\t vec3 i2 = 1.0 - e.zxy*(1.0 - e);\n\t \t\n\t /* x1, x2, x3 */\n\t vec3 x1 = x - i1 + G3;\n\t vec3 x2 = x - i2 + 2.0*G3;\n\t vec3 x3 = x - 1.0 + 3.0*G3;\n\t \n\t /* 2. find four surflets and store them in d */\n\t vec4 w, d;\n\t \n\t /* calculate surflet weights */\n\t w.x = dot(x, x);\n\t w.y = dot(x1, x1);\n\t w.z = dot(x2, x2);\n\t w.w = dot(x3, x3);\n\t \n\t /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */\n\t w = max(0.6 - w, 0.0);\n\t \n\t /* calculate surflet components */\n\t d.x = dot(random3(s), x);\n\t d.y = dot(random3(s + i1), x1);\n\t d.z = dot(random3(s + i2), x2);\n\t d.w = dot(random3(s + 1.0), x3);\n\t \n\t /* multiply d by w^4 */\n\t w *= w;\n\t w *= w;\n\t d *= w;\n\t \n\t /* 3. return the sum of the four surflets */\n\t return dot(d, vec4(52.0));\n}\n\nvoid main(){\n    vec2 st = vUv;\n    float time = uTime;\n\n    st -= 0.5;\n    st -= time * 0.1;\n    vec2 aspect = uResolution / min(uResolution.x, uResolution.y);\n    st *= aspect;\n\n    float noise1 = simplex3d(vec3(st * 1.0 * uNoiseScale.x, time) + 0.1 + time * 0.05) * 0.5 + 0.5;\n    float noise2 = simplex3d(vec3(st * 2.0 * uNoiseScale.y, time) + 0.1 + time * 0.05) * 0.5 + 0.5;\n    float noise3 = simplex3d(vec3(st * 2.0 * uNoiseScale.y, time) + 0.4 + time * 0.02) * 0.5 + 0.5;\n\n    vec3 color1 = mix(uColor4, uColor3, noise1);\n    vec3 color2 = mix(uColor1, uColor2, noise2);\n    vec3 color = mix(color1, color2, noise3 * noise3);\n\n    vec3 _color = pow(color * 1.4, vec3(1.3));\n    color = pow(color * 1.2, vec3(1.5));\n    \n\n    \n\n    // color = pow(color, vec3(1.5));\n    color *= uLightness.x;\n\n    color = mix(_color, color, uLightness.y);\n\n    gl_FragColor = vec4(color, 1.0);\n}", uniforms: this.uniforms
                    }
                    )),
                    this.plane_output=new x.K(new _._(2,
                    2),
                    new b.j( {
                        vertexShader: T, fragmentShader: "#define GLSLIFY 1\nuniform sampler2D uAuroraTex;\nuniform vec2 uRes;\nvarying vec2 vUv;\nfloat random (in vec2 _st_1540259130) {\n    return fract(sin(dot(_st_1540259130.xy,\n    vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main(){\n    vec2 aspect = uRes / max(uRes.x, uRes.y);\n\n    vec2 st = (gl_FragCoord.xy / uRes) / aspect;\n    vec3 color = texture2D(uAuroraTex, vUv).rgb;\n    float wn = random(st);\n\n    color = mix(color * color, color, wn * 0.5 + 0.5);\n\n    gl_FragColor = vec4(color, 1.0);\n\n}", uniforms: {
                            uAuroraTex: {
                                value: this.fbo_aurora.texture
                            }
                            ,
                            uRes: {
                                value: v.fbo_dimensions
                            }
                        }
                    }
                    )),
                    c.on("UPDATE_SCROLL",
                    (t=> {
                        let {
                            detail: e
                        }
                        =t;
                        e.offset.y>300?this.dark=1:this.isShow=!0
                    }
                    ))
                }
                resize() {
                    this.fbo_aurora.setSize(v.dimensions.x*this.auroraPixelRatio, v.dimensions.y*this.auroraPixelRatio), this.fbo_output.setSize(v.fbo_dimensions.x, v.fbo_dimensions.y)
                }
                update() {
                    const t=Math.min(1, 2*v.delta);
                    E("firstView.isShow")?this.uniforms.uLightness.value.x+=(.5-this.uniforms.uLightness.value.x)*t: this.uniforms.uLightness.value.x+=(1-this.uniforms.uLightness.value.x)*t, E("aboutVideos.isFocus")&&(this.uniforms.uLightness.value.x+=(0-this.uniforms.uLightness.value.x)*t), E("loading.isFinished")&&(this.uniforms.uLightness.value.y+=(1-this.uniforms.uLightness.value.y)*t), this.uniforms.uTime.value+=v.delta*A(.7, .2, this.uniforms.uLightness.value.y), v.renderer.setRenderTarget(this.fbo_aurora), v.renderer.render(this.plane_aurora, this.camera), v.renderer.setRenderTarget(this.fbo_output), v.renderer.render(this.plane_output, this.camera)
                }
            }
            ;
            var U=s(4567),
            F=s(8695),
            z=s(6945),
            V=s(1700),
            j=s(4361);
            const q=new class {
                constructor() {
                    this.textures= {
                        firstViewLoopText: {
                            src: "/assets/webgl/first-view-loop-text.png", value: null, isLoop: !0
                        }
                        ,
                        aboutTitleArea: {
                            src: "/assets/webgl/about-title-area.png", value: null
                        }
                        ,
                        workAll: {
                            src: "/assets/webgl/work-all.png", value: null, isLoop: !0
                        }
                        ,
                        about_sp: {
                            src: "/assets/img/index/about-sp.png", value: null
                        }
                        ,
                        about_pc: {
                            src: "/assets/img/index/about.png", value: null
                        }
                    }
                    ,
                    this.videos= {},
                    this.cmsDatas=null,
                    this.total=0,
                    this.count=0,
                    this.videoSize=new m.F(960,
                    540)
                }
                countTotal(t) {
                    for(let e in t)this.total++
                }
                compLoad() {
                    this.count++, c.emit("COUNT_LOADING", {
                        progress: this.count/this.total
                    }
                    ),
                    this.count==this.total&&c.emit("FINISH_LOADING")
                }
                setTextures(t,
                e) {
                    const s=document.body.querySelectorAll(e);
                    for(let e=0;
                    e<s.length;
                    e++) {
                        const i=s[e];
                        this.textures[t+"_"+e]= {
                            src: i.getAttribute("src"), $image: i, value: null
                        }
                    }
                }
                setVideos(t,
                e) {
                    const s=document.body.querySelectorAll(e);
                    for(let e=0;
                    e<s.length;
                    e++)this.videos[t+"_"+e]= {
                        $video: s[e], value: null
                    }
                }
                load() {
                    fetch("/assets/img/dev/media.json", {
                        method: "GET"
                    }
                    ).then((t=>t.json())).then((t=> {
                        this.cmsDatas=t;
                        for(let t in this.cmsDatas) {
                            const e=this.cmsDatas[t];
                            for(let s=0;
                            s<e.length;
                            s++)for(let i in e[s])"image"==i?this.textures[t+"_"+s]= {
                                src: e[s][i]
                            }
                            :"video"==i&&(this.videos[t+"_"+s]= {
                                src: e[s][i]
                            }
                            )
                        }
                        this.countTotal(this.textures),
                        this.countTotal(this.videos),
                        this.loadVideos(),
                        this.loadTextures()
                    }
                    ))
                }
                loadTextures() {
                    for(let t in this.textures) {
                        const e=this.textures[t];
                        (new z.d).load(e.src, (t=> {
                            e.value=t, e.isLoop&&(t.wrapS=V.rp, t.wrapT=V.rp), this.compLoad()
                        }
                        ))
                    }
                }
                async getMediaURLForTrack(t,
                e) {
                    await fetch(e, {
                        method: "HEAD"
                    }
                    ).then((e=> {
                        t.src=e.url
                    }
                    ))
                }
                async loadVideos() {
                    for(let t in this.videos) {
                        const e=this.videos[t], s=document.createElement("video");
                        let i=!0;
                        s.setAttribute("muted", !0), s.setAttribute("playsinline", ""), s.setAttribute("webkit-playsinline", ""), s.crossOrigin="anonymous", s.muted=!0, e.$video=s, s.addEventListener("canplaythrough", (()=> {
                            i&&(e.value=new j.f(s), this.compLoad(), i=!1)
                        }
                        )),
                        s.src=e.src,
                        s.load()
                    }
                }
                update() {}
            }
            ;
            s(9767);
            var G=s(3669),
            B=s(9376);
            const H=new class {
                constructor() {
                    this.camera=new w.V, this.fbo=new y.d(1024, 1024)
                }
                init() {
                    this.uniforms= {
                        uTime: {
                            value: 0
                        }
                    }
                    ,
                    this.plane=new x.K(new _._(2,
                    2),
                    new b.j( {
                        vertexShader: T, fragmentShader: "#define GLSLIFY 1\nuniform float uTime;\nvarying vec2 vUv;\n/* The MIT License\n * Copyright © 2013 Nikita Miropolskiy\n * \n * ( license has been changed from CCA-NC-SA 3.0 to MIT\n *\n *   but thanks for attributing your source code when deriving from this sample \n *   with a following link: https://www.shadertoy.com/view/XsX3zB )\n *\n * ~\n * ~ if you're looking for procedural noise implementation examples you might \n * ~ also want to look at the following shaders:\n * ~ \n * ~ Noise Lab shader by candycat: https://www.shadertoy.com/view/4sc3z2\n * ~\n * ~ Noise shaders by iq:\n * ~     Value    Noise 2D, Derivatives: https://www.shadertoy.com/view/4dXBRH\n * ~     Gradient Noise 2D, Derivatives: https://www.shadertoy.com/view/XdXBRH\n * ~     Value    Noise 3D, Derivatives: https://www.shadertoy.com/view/XsXfRH\n * ~     Gradient Noise 3D, Derivatives: https://www.shadertoy.com/view/4dffRH\n * ~     Value    Noise 2D             : https://www.shadertoy.com/view/lsf3WH\n * ~     Value    Noise 3D             : https://www.shadertoy.com/view/4sfGzS\n * ~     Gradient Noise 2D             : https://www.shadertoy.com/view/XdXGW8\n * ~     Gradient Noise 3D             : https://www.shadertoy.com/view/Xsl3Dl\n * ~     Simplex  Noise 2D             : https://www.shadertoy.com/view/Msf3WH\n * ~     Voronoise: https://www.shadertoy.com/view/Xd23Dh\n * ~ \n *\n */\n\n/* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */\nvec3 random3(vec3 c) {\n\tfloat j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));\n\tvec3 r;\n\tr.z = fract(512.0*j);\n\tj *= .125;\n\tr.x = fract(512.0*j);\n\tj *= .125;\n\tr.y = fract(512.0*j);\n\treturn r-0.5;\n}\n\n/* skew constants for 3d simplex functions */\nconst float F3 =  0.3333333;\nconst float G3 =  0.1666667;\n\n/* 3d simplex noise */\nfloat simplex3d(vec3 p) {\n\t /* 1. find current tetrahedron T and it's four vertices */\n\t /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */\n\t /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/\n\t \n\t /* calculate s and x */\n\t vec3 s = floor(p + dot(p, vec3(F3)));\n\t vec3 x = p - s + dot(s, vec3(G3));\n\t \n\t /* calculate i1 and i2 */\n\t vec3 e = step(vec3(0.0), x - x.yzx);\n\t vec3 i1 = e*(1.0 - e.zxy);\n\t vec3 i2 = 1.0 - e.zxy*(1.0 - e);\n\t \t\n\t /* x1, x2, x3 */\n\t vec3 x1 = x - i1 + G3;\n\t vec3 x2 = x - i2 + 2.0*G3;\n\t vec3 x3 = x - 1.0 + 3.0*G3;\n\t \n\t /* 2. find four surflets and store them in d */\n\t vec4 w, d;\n\t \n\t /* calculate surflet weights */\n\t w.x = dot(x, x);\n\t w.y = dot(x1, x1);\n\t w.z = dot(x2, x2);\n\t w.w = dot(x3, x3);\n\t \n\t /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */\n\t w = max(0.6 - w, 0.0);\n\t \n\t /* calculate surflet components */\n\t d.x = dot(random3(s), x);\n\t d.y = dot(random3(s + i1), x1);\n\t d.z = dot(random3(s + i2), x2);\n\t d.w = dot(random3(s + 1.0), x3);\n\t \n\t /* multiply d by w^4 */\n\t w *= w;\n\t w *= w;\n\t d *= w;\n\t \n\t /* 3. return the sum of the four surflets */\n\t return dot(d, vec4(52.0));\n}\n\nvoid main(){\n    float noise = simplex3d(vec3(vUv * 5.0, uTime * 0.5));\n\n    gl_FragColor = vec4(noise, 0.0, 0.0, 1.0);\n}", uniforms: this.uniforms
                    }
                    ))
                }
                update() {
                    this.uniforms.uTime.value+=v.delta, v.renderer.setRenderTarget(this.fbo), v.renderer.render(this.plane, this.camera)
                }
            }
            ;
            const Y=new class {
                constructor() {
                    this.camera=new w.V, this.targetPos=new m.F, this.currentPos=new m.F, this._currentPos=new m.F, this.currentPos2=new m.F, this.renderCount=0, this.dist1=new m.F, this.dist2=new m.F, this.dist=new m.F, this.distLength=0, this._hoverPos=new m.F, this.hoverPos=new m.F, this.mousemoveT=null, this.isMouseMoving=!1, this.scrollY= {
                        old: 0, current: 0
                    }
                    ,
                    this.uniforms= {
                        uMousePos: {
                            value: this.currentPos
                        }
                        ,
                        uDist: {
                            value: this.dist
                        }
                        ,
                        uResolution: {
                            value: v.dimensions
                        }
                        ,
                        uOldMap: {
                            value: null
                        }
                        ,
                        uNoiseMap: {
                            value: H.fbo.texture
                        }
                        ,
                        uScrollOffsetY: {
                            value: 0
                        }
                    }
                    ,
                    this.plane=new x.K(new _._(2,
                    2),
                    new b.j( {
                        vertexShader: T, fragmentShader: "#define GLSLIFY 1\nuniform vec2 uMousePos;\nuniform vec2 uDist;\nuniform vec2 uResolution;\nuniform sampler2D uOldMap;\nuniform sampler2D uNoiseMap;\nuniform float uScrollOffsetY;\nvarying vec2 vUv;\n\nvoid main(){\n    vec2 ratio = uResolution / max(uResolution.x, uResolution.y);\n    vec2 st = vUv;\n\n    vec2 dist = uDist * ratio * 10.0;\n    dist = min(abs(dist), vec2(0.2)) * sign(dist);\n\n    vec2 mousePos = (uMousePos + 1.0) * 0.5;\n    float noise = texture2D(uNoiseMap, vUv).g;\n\n    float l = length((mousePos - st) * ratio);\n\n    vec2 s = ((15.0) / uResolution) * ratio;\n\n    vec2 uv = vUv;\n    uv.y -= uScrollOffsetY / uResolution.y;\n    vec4 color = texture2D(uOldMap, uv);\n\n    vec4 color_1 = texture2D(uOldMap, uv + s * vec2(1.0, 0.0));\n    vec4 color_2 = texture2D(uOldMap, uv - s * vec2(1.0, 0.0));\n    vec4 color_3 = texture2D(uOldMap, uv + s * vec2(0.0, 1.0));\n    vec4 color_4 = texture2D(uOldMap, uv - s * vec2(0.0, 1.0));\n\n    float newR = min(1.0, color_1.r + color_2.r + color_3.r + color_4.r) * 0.27;\n    vec2 newGB = (color_1.gb + color_2.gb + color_3.gb + color_4.gb) * 0.27;\n\n    newR *= 0.95;\n    newGB *= 0.91;\n\n    float dl = length(dist);\n\n    float falloff = smoothstep(0.05, 0.0, l);\n    \n    color.r = mix(newR, falloff, falloff * falloff);\n    color.gb = mix(newGB, dist * falloff, falloff * falloff);\n    \n    color.a = 1.0;\n    gl_FragColor = color;\n}", uniforms: this.uniforms
                    }
                    ))
                }
                init() {
                    let t=!0;
                    document.body.addEventListener("mousemove", (e=> {
                        this.mousemoveT&&clearTimeout(this.mousemoveT), this.isMouseMoving=!0;
                        const s=e.clientX, i=e.clientY;
                        let n=s/v.dimensions.x, o=i/v.dimensions.y;
                        n=2*n-1, o=2*o-1, o*=-1, this.targetPos.set(n, o), t&&(t=!1, this.currentPos.set(n, o), this._currentPos.set(n, o)), this._hoverPos.set(e.clientX-v.dimensions.x/2, -(e.clientY-v.dimensions.y/2)), c.emit("UPDATE_MOUSEMOVE"), this.mousemoveT=setTimeout((()=> {
                            this.isMouseMoving=!1
                        }
                        ),
                        100)
                    }
                    ));
                    const e= {
                        type: V.cL
                    }
                    ;
                    this.fbos=[new y.d(v.dimensions.x,
                    v.dimensions.y,
                    e),
                    new y.d(v.dimensions.x,
                    v.dimensions.y,
                    e)],
                    this.fbo=this.fbos[1],
                    this.uniforms.uOldMap.value=this.fbos[0],
                    c.on("UPDATE_SCROLL",
                    (t=> {
                        let {
                            detail: e
                        }
                        =t;
                        this.scrollY.current=e.offset.y
                    }
                    ))
                }
                resize() {
                    for(let t=0;
                    t<this.fbos.length;
                    t++)this.fbos[t].setSize(v.dimensions.x, v.dimensions.y)
                }
                update() {
                    const t=Math.min(1, 7*v.delta), e=Math.min(1, 5*v.delta), s=Math.min(1, 2*v.delta);
                    this._currentPos.lerp(this.targetPos, t), this.dist1.subVectors(this._currentPos, this.currentPos), this.dist2.lerp(this.dist1, e), this.distLength=this.dist2.length(), this.dist.copy(this.dist1);
                    const i=this.dist.length();
                    this.dist.normalize().multiplyScalar(Math.min(.07, 3*i)), this.currentPos.copy(this._currentPos), this.currentPos2.lerp(this.targetPos, s);
                    let n=this.fbos[this.renderCount%2], o=this.fbos[1-this.renderCount%2];
                    this.uniforms.uOldMap.value=n.texture, this.uniforms.uScrollOffsetY.value=this.scrollY.current-this.scrollY.old, this.scrollY.old=this.scrollY.current, v.renderer.setRenderTarget(o), v.renderer.render(this.plane, this.camera), this.fbo=o, this.renderCount++, this.hoverPos.lerp(this._hoverPos, s)
                }
            }
            ,
            W="#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vPos;\n\nvoid main(){\n    vUv = uv;\n    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n    vPos = worldPosition.xyz;\n    gl_Position = projectionMatrix * viewMatrix * worldPosition;\n}";
            var X=s(3740);
            class $ {
                constructor(t) {
                    let {
                        progress: e, sectionName: s
                    }
                    =t;
                    this.sectionName=s,
                    this.group=new X.T,
                    this.showTime=0,
                    this.progress=e
                }
                hide() {
                    E(this.sectionName+".isShow")&&(this.showTime=0), L(this.sectionName+".isShow", !1)
                }
                show() {
                    E(this.sectionName+".isShow")&&(this.showTime=0), L(this.sectionName+".isShow", !0)
                }
                updateProgresses() {
                    for(let t in this.progress) {
                        const e=this.progress[t];
                        let s=Math.min(1, v.delta*e.e);
                        E(this.sectionName+".isShow")?(this.showTime>e.delay&&(e.t=1), e.se&&(s=Math.min(1, v.delta*e.se))): e.t=0, e.c+=(e.t-e.c)*s
                    }
                    this.showTime+=v.delta
                }
            }
            class K {
                constructor(t, e, s) {
                    this.group=s, this.num=e, this.$video=t.$video, this.texture=t.value, this.progress=0, this.isFirst=0==e, this.isSecond=1==e, this.isFadeout=!1, this.isPlaying=!1, this.$video.addEventListener("ended", (()=> {
                        this.isFirst&&this.$video.currentTime==this.$video.duration?this.goNext(): this.isSecond&&this.play(0)
                    }
                    ))
                }
                goNext() {
                    c.emit("UPDATE_FIRSTVIEW_NUM", {
                        num: (this.num+1)%3
                    }
                    )
                }
                updateNum() {
                    this.isFirst?(this.isFirst=!1, this.isOthers=!0, this.pause(!0)): this.isSecond?(this.isSecond=!1, this.isFirst=!0, this.play(0)): (this.isOthers=!1, this.isSecond=!0, this.play(0))
                }
                play(t) {
                    this.isPlaying=!0, void 0!==t&&this.setTime(t), this.$video.play()
                }
                pause(t) {
                    t&&(this.isPlaying=!1), this.$video.pause()
                }
                hide() {
                    this.$video.pause()
                }
                show() {
                    this.isPlaying&&this.$video.play()
                }
                setTime(t) {
                    this.$video.currentTime=t
                }
                update() {
                    this.progress=this.$video.currentTime/this.$video.duration, this.isFirst&&c.emit("UPDATE_FIRSTVIEW_PROGRESS", {
                        progress: this.progress, num: this.num
                    }
                    )
                }
            }
            class Z extends $ {
                constructor() {
                    super( {
                        progress: {
                            position: {
                                t: 0, c: 0, e: 2, delay: .3
                            }
                            ,
                            fadein: {
                                t: 0, c: 0, se: .7, e: 8, delay: .3
                            }
                            ,
                            text: {
                                t: 0, c: 0, se: 2, e: 12, delay: .7
                            }
                        }
                        ,
                        sectionName:"firstView"
                    }
                    ),
                    this.group2=new G.Z,
                    this.group.add(this.group2),
                    this.lookAtTarget=new B.P,
                    this.zInterval=60,
                    this.defPosition=this.getPosition(new B.P,
                    4),
                    this.defPosition.y*=.5,
                    this.videoGroupArray=[],
                    this.oldNum=0,
                    this.videoMngs=[],
                    this.focusNum=0,
                    this.scrollY=0,
                    this.stepNum=5,
                    this.targetPosition= {
                        start: this.getPosition(new B.P, -2), end: this.getPosition(new B.P, 3)
                    }
                    ,
                    c.on("UPDATE_SCROLL",
                    (t=> {
                        let {
                            detail: e
                        }
                        =t;
                        E("isIndex")&&(this.scrollY=e.offset.y,
                        e.offset.y>v.dimensions.y/2?(this.hide(),
                        this.hideVideos()):(this.show(),
                        this.showVideos()))
                    }
                    )),
                    c.on("UPDATE_FIRSTVIEW_NUM",
                    (t=> {
                        let {
                            detail: e
                        }
                        =t;
                        for(let t=0;
                        t<this.videoMngs.length;
                        t++) {
                            const e=this.videoMngs[t];
                            this.focusNum==t?e.group.userData._totalNum-=3: e.group.userData._totalNum--, e.updateNum()
                        }
                        this.oldNum=this.focusNum,
                        this.focusNum=e.num
                    }
                    )),
                    c.on("UPDATE_FIRSTVIEW_GONEXT",
                    (()=> {
                        c.emit("UPDATE_FIRSTVIEW_NUM", {
                            num: (this.focusNum+1)%3
                        }
                        )
                    }
                    ))
                }
                updateLowBattery() {
                    for(let t=0;
                    t<this.videoMngs.length;
                    t++)this.videoMngs[t].$video.play(), this.videoMngs[t].isPlaying||setTimeout((()=> {
                        this.videoMngs[t].$video.pause()
                    }
                    ),
                    10)
                }
                hideVideos() {
                    for(let t=0;
                    t<this.videoMngs.length;
                    t++)this.videoMngs[t].hide()
                }
                showVideos() {
                    for(let t=0;
                    t<this.videoMngs.length;
                    t++)this.videoMngs[t].show()
                }
                init() {
                    this.createLoopText(), this.createVideoMeshes(), this.isAnimation=!0
                }
                createLoopText() {
                    const t=q.textures.firstViewLoopText.value, e=t.image.naturalWidth/t.image.naturalHeight;
                    this.uniforms_text= {
                        uTexture: {
                            value: t
                        }
                        ,
                        uTime: {
                            value: 0
                        }
                        ,
                        uOpacity: {
                            value: 0
                        }
                    }
                    ,
                    this.loopText=new x.K(new _._(4,
                    1/e),
                    new b.j( {
                        vertexShader: W, fragmentShader: "#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform float uTime;\nuniform float uOpacity;\nvarying vec2 vUv;\n\nvoid main(){\n    vec2 st = vUv;\n    st.x *= 4.0;\n    st.x += fract(uTime * 0.02);\n    float alpha = texture2D(uTexture, st).a;\n\n    vec3 color = vec3(1.0);\n    \n    gl_FragColor = vec4(color, alpha * 0.05 * uOpacity);\n}", uniforms: this.uniforms_text, transparent: !0, depthTest: !1, depthWrite: !1
                    }
                    )),
                    this.loopTextHide=new B.P(0,
                    0,
                    this.defPosition.z),
                    this.loopTextShow=new B.P(0,
                    -100,
                    this.defPosition.z),
                    this.loopText.renderOrder=-1,
                    this.loopText.position.copy(this.loopTextHide),
                    this.group.add(this.loopText)
                }
                createVideoMeshes() {
                    let t=9/16;
                    this.uniforms= {
                        uResolution: {
                            value: v.fbo_dimensions
                        }
                        ,
                        uAuroraTex: {
                            value: R.fbo_output.texture
                        }
                        ,
                        uNoiseMap: {
                            value: H.fbo.texture
                        }
                        ,
                        uProgress: {
                            value: new B.P(0, 0, 0)
                        }
                        ,
                        uDim: {
                            value: new m.F(1, t)
                        }
                        ,
                        uFadeoutProgress: {
                            value: new m.F
                        }
                        ,
                        uTime: {
                            value: 0
                        }
                        ,
                        uZI: {
                            value: this.zInterval
                        }
                        ,
                        uOffsetY: {
                            value: this.scrollY
                        }
                    }
                    ;
                    const e=new _._(1,
                    t);
                    this.videoNum=q.cmsDatas.firstView.length;
                    for(let t=0;
                    t<this.videoNum;
                    t++) {
                        const s= {
                            userData: {}, meshes: [], uniforms: null
                        }
                        ;
                        this.videoMngs[t]=new K(q.videos[this.sectionName+"_"+t],
                        t,
                        s),
                        this.videoMngs[t].play(),
                        setTimeout((()=> {
                            this.videoMngs[t].pause(!0), 2!==t&&(this.videoMngs[t].isPlaying=!0)
                        }
                        ),
                        0),
                        s.userData._totalNum=s.userData.totalNum=t+2;
                        let i=s.userData.totalNum/this.stepNum;
                        s.userData.totalProgress=i-Math.floor(i),
                        s.userData.currentPos=new B.P,
                        s.userData.totalPos=new B.P;
                        const n= {
                            ...this.uniforms, uTex: {
                                value: q.textures[this.sectionName+"_"+t].value
                            }
                            ,
                            uFog: {
                                value: new m.F(0, 1)
                            }
                            ,
                            uOpacity: {
                                value: 1
                            }
                            ,
                            uUVScale: {
                                value: 1
                            }
                        }
                        ;
                        this.videoMngs[t].$video.addEventListener("playing",
                        (()=> {
                            n.uTex.value=q.videos[this.sectionName+"_"+t].value
                        }
                        ));
                        const o=new x.K(e,
                        new b.j( {
                            vertexShader: "#define GLSLIFY 1\nuniform vec2 uDim;\nuniform float uTime;\nuniform vec3 uProgress;\nvarying vec2 vUv;\nvarying vec3 vPos;\n\nconst float PI = 3.14159265359;\n\nmat2 rotation2D(float r){\n    float s = sin(r);\n    float c = cos(r);\n\n    return mat2(c, s, -s, c);\n}\nmat2 sheer(){\n    float r = -PI * 0.32;\n    return mat2(\n        vec2(1.0, 0.0),\n        vec2(-sin(r), cos(r))\n    );\n}\n\nvoid main(){\n    vUv = uv;\n    vec3 pos = position;\n\n    float ratio = 0.8;\n    pos.y *= -1.0;\n    pos.y *= ratio;\n    pos.y -= uDim.y * 0.5 * ratio;\n    // pos.xy = sheer() * pos.xy;\n    pos.y -= uDim.y * 0.5 * (1.0 + 0.03 + (1.0 - uProgress.x) * 1.5);\n    // pos.x *= vUv.y * (1.0 - vUv.x) * 0.5 + 1.0;\n\n    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);\n    vPos = worldPosition.xyz;\n\n    // pos.xy = sheer()*pos.xy;\n    gl_Position = projectionMatrix * viewMatrix * worldPosition;\n}", fragmentShader: "#define GLSLIFY 1\nuniform vec2 uResolution;\nuniform sampler2D uAuroraTex;\nuniform sampler2D uTex;\nuniform sampler2D uNoiseMap;\nuniform vec3 uProgress;\nuniform vec3 uTranslate;\nuniform float uZI;\nuniform vec2 uFog;\nuniform float uOffsetY;\nuniform float uOpacity;\nuniform float uUVScale;\n\nvarying vec2 vUv;\nvarying vec3 vPos;\n\nvoid main(){\n    vec3 color;\n\n    vec2 noiseUV = vUv * vec2(1.0, 9.0 / 16.0);\nnoiseUV -= 0.5;\nnoiseUV *= 0.3;\nnoiseUV += 0.5;\nfloat noise = texture2D(uNoiseMap, noiseUV).r;\n\nvec2 bgUV = gl_FragCoord.xy / uResolution;\nvec3 bg = texture2D(uAuroraTex, bgUV).rgb;\n\nvec2 videoUV = vUv;\n// videoUV -= 0.5;\n// videoUV *= (1.0 + uUVScale * 0.2);\n// videoUV += 0.5;\nvec3 video = texture2D(uTex, videoUV).rgb;\n\nfloat range = 1.0;\nfloat progress = uProgress.y * (1.0 + range);\nprogress = smoothstep(noise, noise + range, progress);\n\ncolor = mix(video, bg, uFog.x * uFog.y);\ncolor = mix(bg, color, progress);\n    // float refScale = smoothstep(-uZI * 2.0, 0.0, uTranslate.z);\n    // refScale = mix(5.0, 1.0, refScale);\n    // float refIntensity = smoothstep(-500.0, -400.0, vPos.y - uOffsetY);\n    // float bgIntensity = smoothstep(-500.0, -200.0, vPos.y - uOffsetY);\n\n    float refIntensity = smoothstep(0.5, 0.2, vUv.y);\n    float bgIntensity = smoothstep(1.0, 0.3, vUv.y);\n    color = mix(bg, color, bgIntensity * 0.5);\n\n    gl_FragColor = vec4(color, refIntensity * uOpacity * uProgress.z);\n}", uniforms: n, side: V.eh, transparent: !0
                        }
                        )),
                        r=new b.j( {
                            vertexShader: "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vPos;\n\nvoid main(){\n    vUv = uv;\n    vec3 pos = position;\n    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);\n    vPos = worldPosition.xyz;\n    gl_Position = projectionMatrix * viewMatrix * worldPosition;\n}", fragmentShader: "#define GLSLIFY 1\nuniform vec2 uResolution;\nuniform sampler2D uAuroraTex;\nuniform sampler2D uTex;\nuniform sampler2D uNoiseMap;\nuniform vec3 uProgress;\nuniform float uZI;\nuniform vec2 uFog;\nuniform float uOpacity;\nuniform float uUVScale;\n\nvarying vec2 vUv;\nvarying vec3 vPos;\n\nvoid main(){\n    vec3 color;\n    vec2 noiseUV = vUv * vec2(1.0, 9.0 / 16.0);\nnoiseUV -= 0.5;\nnoiseUV *= 0.3;\nnoiseUV += 0.5;\nfloat noise = texture2D(uNoiseMap, noiseUV).r;\n\nvec2 bgUV = gl_FragCoord.xy / uResolution;\nvec3 bg = texture2D(uAuroraTex, bgUV).rgb;\n\nvec2 videoUV = vUv;\n// videoUV -= 0.5;\n// videoUV *= (1.0 + uUVScale * 0.2);\n// videoUV += 0.5;\nvec3 video = texture2D(uTex, videoUV).rgb;\n\nfloat range = 1.0;\nfloat progress = uProgress.y * (1.0 + range);\nprogress = smoothstep(noise, noise + range, progress);\n\ncolor = mix(video, bg, uFog.x * uFog.y);\ncolor = mix(bg, color, progress);\n\n    gl_FragColor = vec4(color, uOpacity);\n}", uniforms: n, transparent: !0
                        }
                        ),
                        a=new x.K(e,
                        r);
                        this.group2.add(a),
                        this.group2.add(o),
                        s.meshes.push(a,
                        o),
                        s.uniforms=n
                    }
                }
                getPosition(t,
                e) {
                    return t.x=130*e, t.y=50*e, t.z=-e*this.zInterval, t
                }
                toggleVideos() {
                    for(let t=0;
                    t<this.videoMngs.length;
                    t++) {
                        const e=this.videoMngs[t];
                        this.group.visible?e.isPlaying&&e.play(): e.pause(!1)
                    }
                }
                calcParabola(t) {
                    const e=2.5, s=(Math.pow(e*t-1, 2), -1/.6*(t-1));
                    let i, n, o;
                    return t<.4?(n=t<.2?1-Math.pow(5*t-1, 2): 1, i=0, o=1-e*t): (n=1, i=1-s*s, o=1-Math.max(0, -e*t+2)), t>.8&&(n=1-Math.pow(5*t-4, 2)), i>.99&&(i=1), n<1e-4&&(n=0), {
                        fog: i, opacity: n, uvScale: o
                    }
                }
                update() {
                    if(this.uniforms) {
                        const t=v.isMobile?.9: .65;
                        this.uniforms.uTime.value+=v.delta, this.uniforms_text.uTime.value+=v.delta, this.updateProgresses(), this.uniforms.uProgress.value.set(this.progress.position.c, this.progress.fadein.c, this.progress.text.c);
                        let e=this.group.visible;
                        this.progress.fadein.c<.01?this.group.visible=!1: this.group.visible=!0, e!==this.group.visible&&this.toggleVideos();
                        for(let e=0;
                        e<this.videoMngs.length;
                        e++) {
                            const s=this.videoMngs[e], i=s.group;
                            let n=Math.min(1, .5*v.delta);
                            s.isOthers&&(n=Math.min(1, 2*v.delta)), i.userData.totalNum=A(i.userData.totalNum, i.userData._totalNum, n);
                            let o=i.userData.totalNum/this.stepNum;
                            i.userData.totalProgress=o-Math.floor(o), i.userData.currentPos.lerpVectors(this.targetPosition.start, this.targetPosition.end, i.userData.totalProgress), i.userData.totalPos.lerpVectors(this.defPosition, i.userData.currentPos, this.progress.position.c), i.uniforms.uFog.value.y=this.progress.fadein.c;
                            const r=this.calcParabola(i.userData.totalProgress);
                            i.uniforms.uFog.value.x=r.fog, i.uniforms.uOpacity.value=r.opacity*g.params.opacity, i.uniforms.uUVScale.value=r.uvScale;
                            for(let e=0;
                            e<i.meshes.length;
                            e++) {
                                const s=i.meshes[e];
                                s.position.copy(i.userData.totalPos), v.getScale(s, v.dimensions.x*t), s.rotation.y=-.3
                            }
                        }
                        for(let t=0;
                        t<this.videoMngs.length;
                        t++)this.videoMngs[t].update();
                        this.uniforms_text.uOpacity.value=this.progress.text.c*g.params.opacity;
                        const s=v.isMobile2?.25*-v.dimensions.y+this.scrollY:.5*this.scrollY;
                        this.group.position.y=s,
                        this.uniforms.uOffsetY.value=this.group.position.y,
                        this.group.rotation.x=v.isMobile2?-.1:0,
                        v.isMobile||(this.lookAtTarget.set(.1*Y.currentPos2.x,
                        .1*Y.currentPos2.y+s,
                        1),
                        this.group2.lookAt(this.lookAtTarget)),
                        this.loopText.position.lerpVectors(this.loopTextHide,
                        this.loopTextShow,
                        this.progress.position.c),
                        this.loopText.position.y+=v.isMobile2?.1*v.dimensions.x:0;
                        const i=(v.isMobile2,
                        2*v.dimensions.x);
                        v.getScale(this.loopText,
                        i)
                    }
                }
            }
            const J="#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform sampler2D uBg;\nuniform sampler2D uMouseMap;\nuniform sampler2D uAreaMap;\nuniform vec2 uResolution;\nuniform sampler2D uNoiseMap;\nuniform float uAspect;\nuniform vec2 uOpacity;\n\nvarying vec2 vUv;\nfloat random (in vec2 _st_1540259130) {\n    return fract(sin(dot(_st_1540259130.xy,\n    vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main(){\n    vec2 aspect = uResolution / max(uResolution.x, uResolution.y);\n\n    vec2 st = gl_FragCoord.xy / uResolution;\n\n    float distortionIntensity = texture2D(uAreaMap, vUv).r;\n\n    vec4 mouse = texture2D(uMouseMap, st);\n\n    vec2 mouse1 = min(0.1, mouse.r) * mouse.gb * distortionIntensity;\n\n    vec2 uv = vUv - mouse1 * 6.0;\n\n    float alpha = texture2D(uTexture, uv).a;\n\n    // bg\n    float mouse1length = length(mouse1);\n    float strength1 = mouse1length * 120.0;\n    strength1 = min(1.0, max(0.0, 1.0 - strength1));\n    strength1 = pow(strength1, 12.0);\n\n    vec2 bgUv = st - mouse1 * 8.0;\n\n    vec3 bg = texture2D(uBg, bgUv).rgb;\n\n    float wn = random(st / aspect);\n\n    bg = mix(bg * bg, bg, wn * 0.5 + 0.5);\n\n    // opacity;\n    vec2 noiseUV = vUv - 0.5;\n    noiseUV /= (1.0, uAspect) * 1.5;\n    noiseUV += 0.5;\n    float noise = texture2D(uNoiseMap, noiseUV).r;\n    float range = 1.0;\n    float progress = uOpacity.x * (1.0 + range);\n    progress = smoothstep(noise, noise + range, progress);\n\n    vec3 color = mix(bg, vec3(1.0), alpha * strength1 * progress);\n    gl_FragColor = vec4(color, uOpacity.y);\n}";
            class Q extends $ {
                constructor() {
                    c.on("UPDATE_SCROLL", (t=> {
                        let {
                            detail: e
                        }
                        =t;
                        this.checkPosition()
                    }
                    )),
                    super( {
                        progress: {
                            fadein: {
                                t: 0, c: 0, se: .4, e: 2, delay: 0
                            }
                        }
                        ,
                        sectionName:"about"
                    }
                    ),
                    c.on("PROGRESS_FOCUS_ABOUTVIDEO",
                    (t=> {
                        let {
                            detail: e
                        }
                        =t;
                        this.uniforms&&(this.uniforms.uOpacity.value.y=1-e.progress)
                    }
                    ))
                }
                getTargetElement() {
                    this.$targets=[document.querySelector(".-aboutimg.mobile"), document.querySelector(".-aboutimg.desktop")], this.$target=this.$targets[0]
                }
                init() {
                    this.targetData=null;
                    const t=q.textures.about_sp.value, e=t.image.naturalWidth/t.image.naturalHeight;
                    this.uniforms= {
                        uTexture: {
                            value: t
                        }
                        ,
                        uAreaMap: {
                            value: q.textures.aboutTitleArea.value
                        }
                        ,
                        uBg: {
                            value: R.fbo_aurora.texture
                        }
                        ,
                        uResolution: {
                            value: v.fbo_dimensions
                        }
                        ,
                        uMouseMap: {
                            value: Y.fbo.texture
                        }
                        ,
                        uOpacity: {
                            value: new m.F
                        }
                        ,
                        uNoiseMap: {
                            value: H.fbo.texture
                        }
                        ,
                        uAspect: {
                            value: e
                        }
                        ,
                        uOffsetY: {
                            value: 0
                        }
                    }
                    ,
                    this.mesh_0=new x.K(new _._(1,
                    1/e),
                    new b.j( {
                        vertexShader: W, fragmentShader: J, uniforms: this.uniforms, depthTest: !1, depthWrite: !1, transparent: !0
                    }
                    ));
                    const s=q.textures.about_pc.value,
                    i=s.image.naturalWidth/s.image.naturalHeight;
                    this.mesh_1=new x.K(new _._(1,
                    1/i),
                    new b.j( {
                        vertexShader: W, fragmentShader: J, uniforms: this.uniforms, depthTest: !1, depthWrite: !1, transparent: !0
                    }
                    )),
                    this.mesh_0.renderOrder=-1,
                    this.mesh_1.renderOrder=-1,
                    this.group.add(this.mesh_0),
                    this.group.add(this.mesh_1)
                }
                checkPosition() {
                    this.uniforms&&(this.uniforms.uOffsetY.value=-(this.targetData.top-this.targetData.height/2+v.dimensions.y/2), this.targetData.top<v.dimensions.y<.8?this.hide(): this.show())
                }
                resize() {
                    if(this.uniforms) {
                        let t, e;
                        v.isMobile?(this.$target=this.$targets[0], t=q.textures.about_sp.value, this.mesh_0.visible=!0, this.mesh_1.visible=!1): (this.$target=this.$targets[1], t=q.textures.about_pc.value, this.mesh_0.visible=!1, this.mesh_1.visible=!0), e=t.image.naturalWidth/t.image.naturalHeight, this.uniforms.uTexture.value=t, this.uniforms.uAspect.value=e
                    }
                }
                update() {
                    this.uniforms&&(this.targetData=this.$target.getBoundingClientRect(), this.updateProgresses(), this.uniforms.uOpacity.value.x=this.progress.fadein.c*g.params.opacity, this.uniforms.uMouseMap.value=Y.fbo.texture, v.getPositionFromTarget(this.targetData, this.mesh_0, !0), v.getPositionFromTarget(this.targetData, this.mesh_1, !0))
                }
            }
            var tt=s(9049);
            class et {
                constructor(t, e) {
                    this.num=e, this.$video=t.$video, this.texture=t.value, this.isPlaying=!1
                }
                play(t) {
                    this.isPlaying=!0, void 0!==t&&this.setTime(t), this.$video.play()
                }
                pause(t) {
                    t&&(this.isPlaying=!1), this.$video.pause()
                }
                setTime(t) {
                    this.$video.currentTime=t
                }
            }
            class st extends $ {
                constructor() {
                    super( {
                        progress: {
                            rotation: {
                                t: 0, c: 0, e: 2, delay: 0
                            }
                            ,
                            fadein: {
                                t: 0, c: 0, e: .5, delay: 0
                            }
                        }
                        ,
                        sectionName:"aboutVideos"
                    }
                    ),
                    c.on("UPDATE_SCROLL",
                    (t=> {
                        let {
                            detail: e
                        }
                        =t;
                        this.checkPosition()
                    }
                    )),
                    c.on("FOCUS_ABOUT_VIDEO",
                    (()=> {
                        c.emit("RETURN_FOCUS_ABOUT_VIDEO", {
                            isFocus: this.slider.isEnableFocus
                        }
                        ),
                        this.slider.isEnableFocus&&(this.slider.isActive=!1,
                        this.slider.isFocus=!0,
                        this.slider.focus.t=1,
                        L("aboutVideos.isFocus",
                        !0))
                    }
                    )),
                    c.on("UNFOCUS_ABOUT_VIDEO",
                    (()=> {
                        this.slider.isFocus&&!this.slider.focus_next.isSwitching&&(c.emit("RETURN_FOCUS_ABOUT_VIDEO", {
                            isFocus: !1
                        }
                        ),
                        this.slider.isActive=!0,
                        this.slider.isFocus=!1,
                        this.slider.focus.t=0,
                        L("aboutVideos.isFocus",
                        !1))
                    }
                    )),
                    c.on("NEXT_ABOUT_VIDEO",
                    (()=> {
                        this.slider.isFocus&&!this.slider.focus_next.isSwitching&&(this.slider.focus_next.isSwitching=!0, this.slider.focus_next.offset=1)
                    }
                    )),
                    c.on("PREVIOUS_ABOUT_VIDEO",
                    (()=> {
                        this.slider.isFocus&&!this.slider.focus_next.isSwitching&&(this.slider.focus_next.isSwitching=!0, this.slider.focus_next.offset=-1)
                    }
                    ))
                }
                init() {
                    this.slider= {
                        time:0, interval:6, isActive:!1, isEnableChange:!1, isChanged:!1, isEnableFocus:!1, isFocus:!1, focus: {
                            t: 0, c: 0, c2: 0
                        }
                        ,
                        rotationY: {
                            c: 0, t: 0
                        }
                        ,
                        current:E(this.sectionName+".current"),
                        focus_next: {
                            offset: 0, _opacity: 1, opacity: 1, isSwitching: !1, isChanged: !1
                        }
                    }
                    ,
                    this.videoNum=q.cmsDatas.aboutVideos.length,
                    this.videoMngs=[];
                    for(let t=0;
                    t<this.videoNum;
                    t++) {
                        const e=q.videos[this.sectionName+"_"+t];
                        this.videoMngs[t]=new et(e, t)
                    }
                    this.offsetY=-300;
                    this.videoMngs[0].play(),
                    setTimeout((()=> {
                        this.videoMngs[0].pause()
                    }
                    ),
                    10),
                    this.commonUniforms= {
                        uOpacity: {
                            value: g.params.opacity
                        }
                    }
                    ,
                    this.uniforms= {
                        ...this.commonUniforms, uResolution: {
                            value: v.fbo_dimensions
                        }
                        ,
                        uNoiseMap: {
                            value: H.fbo.texture
                        }
                        ,
                        uBg: {
                            value: R.fbo_output.texture
                        }
                        ,
                        uTexture1: {
                            value: q.videos.aboutVideos_0.value
                        }
                        ,
                        uOffsetY: {
                            value: this.offsetY
                        }
                        ,
                        uFocus: {
                            value: 0
                        }
                        ,
                        uFadein: {
                            value: 1
                        }
                    }
                    ;
                    const t=new _._(1,
                    9/16),
                    e=new b.j( {
                        vertexShader: W, fragmentShader: "#define GLSLIFY 1\nuniform sampler2D uTexture1;\nuniform sampler2D uBg;\nuniform vec2 uResolution;\nuniform sampler2D uNoiseMap;\nuniform float uFadein;\nuniform float uOpacity;\nvarying vec2 vUv;\n\nvoid main(){\n\n    vec2 uv = vUv - 0.5;\n    // uv *= 0.7;\n    uv += 0.5;\n    vec3 color = texture2D(uTexture1, uv).rgb;\n\n    color.rgb = mix((vec3(1.0) - exp(-color * uFadein)), color, uFadein);\n\n    gl_FragColor = vec4(color, uOpacity);\n}", uniforms: this.uniforms, side: V.eh, depthTest: !1, transparent: !0
                    }
                    );
                    this.mesh=new x.K(t,
                    e),
                    this.mesh.renderOrder=1,
                    this.group.add(this.mesh),
                    this.mirrorCamera=new F.c(45,
                    v.dimensions.x/v.dimensions.y,
                    .1,
                    1e5),
                    this.mirrorCamera.up.set(0,
                    -1,
                    0),
                    this.mirrorTarget=new B.P,
                    this.mirrorScale=new tt.y,
                    this.mirrorScale.makeScale(-1,
                    1,
                    1),
                    this.mirrorPM=new tt.y,
                    this.mirrorMesh=new x.K(t,
                    new b.j( {
                        vertexShader: W, fragmentShader: "#define GLSLIFY 1\nuniform sampler2D uTexture1;\nuniform sampler2D uBg;\nuniform vec2 uResolution;\nuniform sampler2D uNoiseMap;\nuniform float uOffsetY;\nuniform float uFocus;\nuniform float uOpacity;\nvarying vec2 vUv;\nvarying vec3 vPos;\n\nvoid main(){\n\n    vec2 aspect = uResolution / min(uResolution.x, uResolution.y);\n\n    vec2 uv = vUv - 0.5;\n    // uv *= 0.7;\n    uv += 0.5;\n\n    vec2 st = gl_FragCoord.xy / uResolution;\n\n    vec3 bg = texture2D(uBg, st).rgb;\n    vec3 color = texture2D(uTexture1, uv).rgb;\n\n    float intensity = smoothstep(300.0, 0.0, vPos.y - uOffsetY);\n\n    float noise = texture2D(uNoiseMap, (st - 0.5) * aspect * 0.5 + 0.5).r;\n    intensity *= mix(noise, 1.0, intensity);\n\n    intensity *= 0.5;\n\n    color = mix(bg, color * color, intensity * (1.0 - uFocus));\n    color = mix(bg, color, uOpacity);\n\n    gl_FragColor = vec4(color, 1.0);\n}", uniforms: {
                            ...this.uniforms, viewMatrix: {
                                value: this.mirrorCamera.matrixWorldInverse
                            }
                            ,
                            projectionMatrix: {
                                value: this.mirrorPM
                            }
                        }
                        ,
                        side:V.eh,
                        depthTest:!1
                    }
                    )),
                    this.group.add(this.mirrorMesh)
                }
                resize() {
                    this.uniforms&&this.checkPosition()
                }
                getTargetElement() {
                    this.$target=document.body.querySelector(".tp--ab__rl"), this.getTargetData()
                }
                getTargetData() {
                    const t=this.$target.getBoundingClientRect();
                    this._targetData=t, this.targetData= {
                        top: t.top, bottom: t.bottom, left: t.left, right: t.right, width: t.width, height: t.height
                    }
                }
                checkPosition() {
                    this.getTargetData();
                    let t=this.targetData.top<v.dimensions.y/2&&this.targetData.bottom>0;
                    this.slider.isActive?t||this.hideVideo(): t&&this.showVideo()
                }
                showVideo() {
                    this.setEnableFocus(!0), this.slider.isActive=!0, this.videoMngs[this.slider.current].play()
                }
                hideVideo() {
                    this.setEnableFocus(!1), this.slider.isActive=!1, this.videoMngs[this.slider.current].pause()
                }
                setEnableFocus(t) {
                    this.slider.isEnableFocus=t
                }
                updateLowBattery() {
                    for(let t=0;
                    t<this.videoMngs.length;
                    t++)this.videoMngs[t].$video.play(), this.videoMngs[t].isPlaying||setTimeout((()=> {
                        this.videoMngs[t].$video.pause()
                    }
                    ),
                    10)
                }
                updateMirrorCamera(t) {
                    this.mirrorTarget.y=2*this.offsetY, this.mirrorCamera.position.set(t.position.x, -t.position.y+2*this.offsetY, t.position.z), this.mirrorCamera.lookAt(this.mirrorTarget), this.mirrorCamera.aspect=v.aspect, this.mirrorCamera.updateMatrixWorld(), this.mirrorCamera.updateProjectionMatrix(), this.mirrorPM.copy(this.mirrorCamera.projectionMatrix), this.mirrorPM.multiply(this.mirrorScale)
                }
                updateFocusNext(t) {
                    const e=this.slider.focus_next;
                    if(e.isSwitching) {
                        let t=Math.min(1, 2*v.delta);
                        e.isChanged?e._opacity=1: (e._opacity=0, t=Math.min(1, 4*v.delta)), e.opacity+=(e._opacity-e.opacity)*t, !e.isChanged&&e.opacity<.01&&(e.isChanged=!0, e.opacity=0, this.changeVideo(e.offset)), e.isChanged&&e.opacity>.99&&(e.opacity=1, e.isSwitching=!1, e.isChanged=!1), this.uniforms.uFadein.value=e.opacity
                    }
                }
                updateSlider() {
                    const t=this.slider;
                    if(t.isActive) {
                        t.time+=v.delta, t.time>t.interval&&(t.time=0, t.rotationY.t+=Math.PI, this.setEnableFocus(!1), t.isEnableChange=!0);
                        const e=Math.min(1, 2*v.delta);
                        t.rotationY.c+=(t.rotationY.t-t.rotationY.c)*e
                    }
                }
                changeVideo(t) {
                    const e=this.slider, s=e.current;
                    this.videoMngs[s].pause(), e.current+=t, e.current=(e.current+this.videoMngs.length)%this.videoMngs.length;
                    const i=e.current;
                    this.videoMngs[i].play(0), this.uniforms.uTexture1.value=q.videos["aboutVideos_"+i].value
                }
                updateCurrent() {
                    const t=this.slider;
                    this.changeVideo(1), E(this.sectionName+".current", t.current), this.setEnableFocus(!0)
                }
                updateFocus() {
                    const t=this.slider, e=Math.min(1, 2*v.delta);
                    t.focus.c+=(t.focus.t-t.focus.c)*e;
                    const s=Math.min(1, 6*v.delta);
                    t.focus.c2+=(t.focus.t-t.focus.c2)*s;
                    const i=this.mesh.rotation.y;
                    this.mesh.rotation.y=A(i, t.rotationY.t, t.focus.c), this.uniforms.uFocus.value=t.focus.c, c.emit("PROGRESS_FOCUS_ABOUTVIDEO", {
                        progress: t.focus.c2
                    }
                    )
                }
                update(t) {
                    if(this.uniforms) {
                        this.commonUniforms.uOpacity.value=g.params.opacity, this.updateSlider();
                        let e=.7*v.dimensions.x, s=Math.max(v.dimensions.x, v.dimensions.y*(16/9));
                        v.isMobile&&(s=Math.min(v.dimensions.x, v.dimensions.y*(16/9))), e=A(e, s, this.slider.focus.c), v.getScale(this.mesh, e), this.targetData.top=A(this._targetData.top, v.dimensions.y/2-this.targetData.height/2, this.slider.focus.c), this.offsetY=v.dimensions.y-this.targetData.top-.5*v.dimensions.y-this.mesh.scale.y*(9/32)*1.02-this.targetData.height/2, this.updateProgresses(), this.updateMirrorCamera(t), this.uniforms.uOffsetY.value=this.offsetY, v.getPositionFromTarget(this.targetData, this.mesh, !1), this.mesh.rotation.y=this.slider.rotationY.c+.4*Math.cos(.2*v.time), this.slider.isEnableChange&&this.mesh.rotation.y>this.slider.rotationY.t-Math.PI/2&&this.slider.isActive&&(this.slider.isEnableChange=!1, this.slider.isChanged=!0, this.updateCurrent()), this.updateFocus(), this.updateFocusNext(), this.mirrorMesh.position.copy(this.mesh.position), this.mirrorMesh.scale.copy(this.mesh.scale), this.mirrorMesh.quaternion.copy(this.mesh.quaternion)
                    }
                }
            }
            var it=s(4804),
            nt=s(9800),
            ot=s(4235),
            rt=s(8791);
            const at="#define GLSLIFY 1\nuniform float uNoiseScale;\nuniform float uScale;\nuniform float uTime;\nuniform float uBendIntensity;\nuniform float uRotation;\nuniform vec3 uHoverUV;\nuniform vec2 uProgress;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPos;\n\n/* The MIT License\n * Copyright © 2013 Nikita Miropolskiy\n * \n * ( license has been changed from CCA-NC-SA 3.0 to MIT\n *\n *   but thanks for attributing your source code when deriving from this sample \n *   with a following link: https://www.shadertoy.com/view/XsX3zB )\n *\n * ~\n * ~ if you're looking for procedural noise implementation examples you might \n * ~ also want to look at the following shaders:\n * ~ \n * ~ Noise Lab shader by candycat: https://www.shadertoy.com/view/4sc3z2\n * ~\n * ~ Noise shaders by iq:\n * ~     Value    Noise 2D, Derivatives: https://www.shadertoy.com/view/4dXBRH\n * ~     Gradient Noise 2D, Derivatives: https://www.shadertoy.com/view/XdXBRH\n * ~     Value    Noise 3D, Derivatives: https://www.shadertoy.com/view/XsXfRH\n * ~     Gradient Noise 3D, Derivatives: https://www.shadertoy.com/view/4dffRH\n * ~     Value    Noise 2D             : https://www.shadertoy.com/view/lsf3WH\n * ~     Value    Noise 3D             : https://www.shadertoy.com/view/4sfGzS\n * ~     Gradient Noise 2D             : https://www.shadertoy.com/view/XdXGW8\n * ~     Gradient Noise 3D             : https://www.shadertoy.com/view/Xsl3Dl\n * ~     Simplex  Noise 2D             : https://www.shadertoy.com/view/Msf3WH\n * ~     Voronoise: https://www.shadertoy.com/view/Xd23Dh\n * ~ \n *\n */\n\n/* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */\nvec3 random3(vec3 c) {\n\tfloat j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));\n\tvec3 r;\n\tr.z = fract(512.0*j);\n\tj *= .125;\n\tr.x = fract(512.0*j);\n\tj *= .125;\n\tr.y = fract(512.0*j);\n\treturn r-0.5;\n}\n\n/* skew constants for 3d simplex functions */\nconst float F3 =  0.3333333;\nconst float G3 =  0.1666667;\n\n/* 3d simplex noise */\nfloat simplex3d(vec3 p) {\n\t /* 1. find current tetrahedron T and it's four vertices */\n\t /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */\n\t /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/\n\t \n\t /* calculate s and x */\n\t vec3 s = floor(p + dot(p, vec3(F3)));\n\t vec3 x = p - s + dot(s, vec3(G3));\n\t \n\t /* calculate i1 and i2 */\n\t vec3 e = step(vec3(0.0), x - x.yzx);\n\t vec3 i1 = e*(1.0 - e.zxy);\n\t vec3 i2 = 1.0 - e.zxy*(1.0 - e);\n\t \t\n\t /* x1, x2, x3 */\n\t vec3 x1 = x - i1 + G3;\n\t vec3 x2 = x - i2 + 2.0*G3;\n\t vec3 x3 = x - 1.0 + 3.0*G3;\n\t \n\t /* 2. find four surflets and store them in d */\n\t vec4 w, d;\n\t \n\t /* calculate surflet weights */\n\t w.x = dot(x, x);\n\t w.y = dot(x1, x1);\n\t w.z = dot(x2, x2);\n\t w.w = dot(x3, x3);\n\t \n\t /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */\n\t w = max(0.6 - w, 0.0);\n\t \n\t /* calculate surflet components */\n\t d.x = dot(random3(s), x);\n\t d.y = dot(random3(s + i1), x1);\n\t d.z = dot(random3(s + i2), x2);\n\t d.w = dot(random3(s + 1.0), x3);\n\t \n\t /* multiply d by w^4 */\n\t w *= w;\n\t w *= w;\n\t d *= w;\n\t \n\t /* 3. return the sum of the four surflets */\n\t return dot(d, vec4(52.0));\n}\n\nmat2 rotate2D(float r){\n  float s = sin(r);\n  float c = cos(r);\n\n  return mat2(c, s, -s, c);\n}\n\nvec4 getBending(vec4 pos){\n  vec3 _pos = vec3(rotate2D(uRotation) * pos.xy, pos.z);\n  float x =  _pos.y * 1.8;\n  float t = acos(x);\n  float b = sin(t);\n\n  b = max(0.0, b);\n\n  pos.z -= b * mix(0.3, 0.7, uBendIntensity);\n  return pos;\n}\n\nvoid main(){\n  vUv = uv;\n\n  vec4 pos = vec4(position, 1.0);\n  vec4 pos1 = getBending(pos);\n  vec4 pos2 = pos;\n\n  float uvl = length(uHoverUV.xy - uv);\n  pos2.z = mix(pos2.z, 0.15, uHoverUV.z);\n\n  vec3 norm1 = normalize(pos1.xyz);\n  vec3 norm2 = normal;\n  norm1 = normalize(mat3(modelMatrix) * norm1);\n  norm2 = normalize(mat3(modelMatrix) * norm2);\n  vNormal = mix(norm1, norm2, uProgress.y);\n  \n  vec4 worldPosition = modelMatrix * mix(pos1, pos2, uProgress.y);\n  vec4 viewPosition = viewMatrix * worldPosition;\n  vPos = viewPosition.xyz;\n\n  gl_Position = projectionMatrix * viewPosition;\n}",
            ht="#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform sampler2D uBg;\nuniform bool uBack;\nuniform vec2 uProgress;\nuniform vec2 uResolution;\nuniform vec3 uHoverUV;\nuniform float uHoverProgress;\nuniform float uClickFocusProgress;\nuniform float uOpacity;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPos;\n\nvec3 lightPos = normalize(vec3(1.0, -1.0, 1.0));\n\nvoid main(){\n\n  vec2 st = gl_FragCoord.xy / uResolution;\n  vec3 bg = texture2D(uBg, st).rgb;\n\n  float light = dot(lightPos, vNormal) * 0.5 + 0.5;\n\n  vec3 color = texture2D(uTexture, vUv).rgb;\n\n  if(uBack == true){\n    color = mix(vec3(0.5), bg * 0.2 + color * 0.3, uProgress.x);\n  }\n\n  color = mix(color * light, color, uProgress.x);\n\n  vec3 _color = color;\n  _color += pow(light, 10.0) * 0.5;\n\n  float focusLight = mix(1.0, uHoverUV.z, uHoverProgress);\n  color = mix(color, bg * 0.7 + color * 0.3, uClickFocusProgress);\n  color = mix(bg * 0.2 + color * 0.3, _color, focusLight);\n  \n\n  color = mix(mix(bg, color, smoothstep(10000.0, 500.0, -vPos.z)), color, uProgress.x);\n\n  \n  gl_FragColor = vec4(color, uOpacity);\n}",
            lt="#define GLSLIFY 1\nuniform float uBendIntensity;\nuniform float uRotation;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nmat2 rotate2D(float r){\n  float s = sin(r);\n  float c = cos(r);\n\n  return mat2(c, s, -s, c);\n}\n\nvec4 getBending(vec4 pos){\n  vec3 _pos = vec3(rotate2D(uRotation) * pos.xy, pos.z);\n  float x =  _pos.y * 1.8;\n  float t = acos(x);\n  float b = sin(t);\n\n  b = max(0.0, b);\n\n  pos.z -= b * mix(0.3, 0.7, uBendIntensity);\n  return pos;\n}\n\nvoid main(){\n  vUv = uv;\n\n  vec4 pos = vec4(position, 1.0);\n  vec4 pos1 = getBending(pos);\n\n  vec3 norm = normalize(pos1.xyz);\n  norm = normalize(mat3(modelMatrix) * norm);\n  vNormal = norm;\n  \n  vec4 worldPosition = modelMatrix * pos1;\n\n  gl_Position = projectionMatrix * viewMatrix * worldPosition;\n\n}",
            ct="#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform bool uBack;\nuniform float uOpacity;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nvec3 lightPos = normalize(vec3(1.0, -1.0, 1.0));\n\nvoid main(){\n\n  float light = dot(lightPos, vNormal) * 0.5 + 0.5;\n\n  vec3 color = texture2D(uTexture, vUv).rgb;\n\n  if(uBack == true){\n    color = vec3(0.5);\n  }\n\n  color = mix(color * 0.5, color, light) + pow(light, 10.0);\n  \n  gl_FragColor = vec4(color, uOpacity);\n}";
            class ut {
                constructor() {
                    this.group=new G.Z, this.meshes=[]
                }
                init(t,
                e,
                s,
                i) {
                    this.commonUniforms=s;
                    for(let n=0;
                    n<2;
                    n++) {
                        const o=new G.Z, r=q.textures[i+"_"+n].value, a= {
                            ...s, uTexture: {
                                value: r
                            }
                            ,
                            uRotation: {
                                value: .2*Math.random()
                            }
                            ,
                            uBendIntensity: {
                                value: Math.random()
                            }
                        }
                        ,
                        h= {
                            num: n, index_start: new B.P(2*(n-.5), n+1, -(n+1)), offsetY: 0, pos_start: new B.P, rot_start: new nt.U, quat_start: new ot._, random: new B.P(Math.random(), Math.random(), Math.random())
                        }
                        ,
                        l=new b.j( {
                            vertexShader:lt, fragmentShader:ct, uniforms: {
                                ...a, uBack: {
                                    value: !1
                                }
                            }
                            ,
                            transparent:!0,
                            depthTest:!1
                        }
                        ),
                        c=new x.K(t,
                        l);
                        c.frustumCulled=!1,
                        c.userData=h;
                        const u=new b.j( {
                            vertexShader:lt, fragmentShader:ct, uniforms: {
                                ...a, uBack: {
                                    value: !0
                                }
                            }
                            ,
                            transparent:!0,
                            depthTest:!1
                        }
                        ),
                        m=new x.K(e,
                        u);
                        m.frustumCulled=!1,
                        this.meshes[n]= {
                            mesh_front: c, mesh_back: m, uniforms: a, userData: h, group: o
                        }
                        ,
                        o.add(m),
                        o.add(c),
                        this.group.add(o)
                    }
                }
                update(t) {
                    this.radius=t;
                    let e=.8*this.radius;
                    for(let t=0;
                    t<this.meshes.length;
                    t++) {
                        const {
                            group: s, mesh_front: i, mesh_back: n, userData: o, uniforms: r
                        }
                        =this.meshes[t];
                        o.offsetY-=1200*v.delta,
                        s.position.x=(o.index_start.x+Math.cos(2*this.commonUniforms.uTime.value-t*Math.PI))*e*.5,
                        s.position.y=o.index_start.y*e+o.offsetY,
                        s.position.z=-o.index_start.z*e;
                        let a=2*(t-.5);
                        o.rot_start.z=.2*a*Math.PI,
                        o.rot_start.x=2*a*Math.PI-.2*Math.cos(4*this.commonUniforms.uTime.value),
                        o.rot_start.y=.1*a*Math.PI,
                        o.quat_start.setFromEuler(o.rot_start),
                        s.quaternion.copy(o.quat_start),
                        s.scale.set(e,
                        e,
                        e),
                        s.updateMatrix()
                    }
                }
            }
            class mt {
                constructor(t) {
                    this.camera=t, this.raycaster=new it.i, this.hover= {
                        t: 0, c: 0
                    }
                    ,
                    c.on("UPDATE_MOUSEMOVE",
                    (()=> {
                        if(this.mesh) {
                            this.raycaster.setFromCamera(Y.targetPos, this.camera);
                            this.raycaster.intersectObject(this.mesh).length>0?this.hover.t=1: this.hover.t=0
                        }
                    }
                    )),
                    this.group=new G.Z,
                    c.on("UPDATE_SCROLL",
                    (t=> {
                        let {
                            detail: e
                        }
                        =t;
                        this.checkPosition()
                    }
                    ))
                }
                init() {
                    const t=q.textures.workAll.value, e=t.image.naturalWidth/t.image.naturalHeight;
                    this.uniforms= {
                        uTexture: {
                            value: t
                        }
                        ,
                        uTime: {
                            value: 0
                        }
                        ,
                        uOpacity: {
                            value: 1
                        }
                        ,
                        uBgTexture: {
                            value: R.fbo_aurora.texture
                        }
                        ,
                        uResolution: {
                            value: v.fbo_dimensions
                        }
                        ,
                        uHover: {
                            value: 0
                        }
                    }
                    ,
                    this.mesh=new x.K(new _._(4,
                    1/e),
                    new b.j( {
                        vertexShader: W, fragmentShader: "#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform float uTime;\nuniform float uOpacity;\nuniform sampler2D uBgTexture;\nuniform vec2 uResolution;\nuniform float uHover;\nvarying vec2 vUv;\nfloat random (in vec2 _st_1540259130) {\n    return fract(sin(dot(_st_1540259130.xy,\n    vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nvoid main(){\n    vec2 st = vUv;\n    st.x *= 4.0;\n    st.x += fract(uTime * 0.02);\n    float alpha = texture2D(uTexture, st).a;\n\n    vec2 uv2 = gl_FragCoord.xy / uResolution;\n    float wn = random(uv2);\n    vec3 bgColor = texture2D(uBgTexture, uv2).rgb;\n\n    vec3 color1 = bgColor * 1.2 - 0.1;//bgColor * 2.0; //\n    vec3 color2 = bgColor * 2.0;//bgColor * 2.0; //\n\n    vec3 color = mix(color1, color2, uHover);\n\n    color = mix(color * color, color, wn * 0.4 + 0.6);\n    \n    gl_FragColor = vec4(color, alpha * uOpacity);\n}", uniforms: this.uniforms, transparent: !0, depthTest: !1, depthWrite: !1
                    }
                    )),
                    this.mesh.visible=!1,
                    this.mesh.renderOrder=-1,
                    this.group.add(this.mesh)
                }
                getTargetElement() {
                    this.$target=document.body.querySelector(".tp--ow__link__a")
                }
                update() {
                    if(this.mesh) {
                        const t=v.isMobile?1*v.dimensions.x: .5*v.dimensions.x;
                        v.getScale(this.mesh, t), this.uniforms.uTime.value+=v.delta;
                        const e=Math.min(1, 2*v.delta);
                        this.uniforms.uHover.value+=(this.hover.t-this.uniforms.uHover.value)*e
                    }
                }
                checkPosition() {
                    const t=this.$target.getBoundingClientRect();
                    v.getPositionFromTarget(t, this.mesh, !1), this.uniforms.uOpacity.value=g.params.opacity, this.mesh.visible=!0
                }
            }
            class dt extends $ {
                constructor(t) {
                    super( {
                        progress: {
                            fall: {
                                t: 0, c: 0, e: 2, delay: 0
                            }
                        }
                        ,
                        sectionName:"ourWork"
                    }
                    ),
                    this.raycaster=new it.i,
                    this.raycastMeshes=[],
                    this.meshes=[],
                    this.clickFocus= {
                        status: !1, num: null, progress: 0, enableClose: !1
                    }
                    ,
                    this.showTimeOnce=0,
                    this.isStarted=!1,
                    this.scrollOffsetY=0,
                    this.hover= {
                        isHover: !1, currentNum: null, lookAt: new B.P, progress: 0
                    }
                    ,
                    this.yScale=.17,
                    this.scroll= {
                        offsetY: 0, _offsetY: 0, rotationY: 0, _rotationY: 0, isStart: !1, progress: 0
                    }
                    ,
                    this.group.visible=!0,
                    this.singleFrontPoster=new ut,
                    this.workLoopText=new mt(t),
                    this.group.add(this.singleFrontPoster.group),
                    setTimeout((()=> {
                        this.group.visible=!1
                    }
                    ),
                    100),
                    c.on("UPDATE_SCROLL",
                    (t=> {
                        let {
                            detail: e
                        }
                        =t;
                        this.scrollY=e.offset.y,
                        this.checkPosition()
                    }
                    )),
                    c.on("CLOSE_WORK_CARD",
                    (()=> {
                        setTimeout((()=> {
                            this.clickFocus.status=!1, c.emit("ENABLE_CLOSE_WORK_CARD", {
                                enable: !1
                            }
                            ),
                            this.releaseHover()
                        }
                        ),
                        0)
                    }
                    )),
                    c.on("UPDATE_MOUSEMOVE",
                    (()=> {
                        this.updateHover()
                    }
                    ))
                }
                init(t) {
                    this.camera=t, this.imageNum=q.cmsDatas.ourWork.length;
                    const e=q.textures.ourWork_0.value.image, s=e.naturalWidth/e.naturalHeight;
                    this.aspect=s;
                    const i=new _._(s, 1, 40, 40), n=new _._(s, 1, 40, 40);
                    n.scale(-1, 1, 1), this.clickFunc=this.onClick.bind(this), this.commonUniforms= {
                        uTime: {
                            value: 0
                        }
                        ,
                        uHoverProgress: {
                            value: 0
                        }
                        ,
                        uClickFocusProgress: {
                            value: 0
                        }
                        ,
                        uOpacity: {
                            value: 1
                        }
                    }
                    ,
                    this.wholeAnim= {
                        fall: {
                            t: 0, c: 0, e: .2, delay: 0, ease: "cubicOut"
                        }
                    }
                    ;
                    for(let t=0;
                    t<this.imageNum;
                    t++) {
                        const e=new G.Z, s= {
                            num: t, index_start: new B.P(t%3-1, t/5+4, t%5-.7), pos_start: new B.P, rot_start: new nt.U, quat_start: new ot._, pos_end: new B.P, rot_end: new nt.U, quat_end: new ot._, random: new B.P(Math.random(), Math.random(), Math.random()), hoverUV: new B.P, isHover: !1, isFirstFinished: !1, radian: (t/8+.375+5/8)*Math.PI*2
                        }
                        ,
                        o= {
                            fall: {
                                t: 0, c: 0, e: .6, delay: t/this.imageNum*2, ease: "cubicOut"
                            }
                            ,
                            roll: {
                                t: 0, c: 0, e: .6, delay: .2+t/this.imageNum*2, ease: "cubicInOut"
                            }
                            ,
                            delayRoll: {
                                t: 0, c: 0, e: .2, delay: t/this.imageNum*1, ease: "cubicInOut"
                            }
                        }
                        ,
                        r=q.textures[this.sectionName+"_"+t].value,
                        a= {
                            ...this.commonUniforms, uTexture: {
                                value: r
                            }
                            ,
                            uNoiseScale: {
                                value: 5e-4
                            }
                            ,
                            uRotation: {
                                value: .2*Math.random()
                            }
                            ,
                            uScale: {
                                value: 50
                            }
                            ,
                            uBendIntensity: {
                                value: Math.random()
                            }
                            ,
                            uProgress: {
                                value: new m.F
                            }
                            ,
                            uResolution: {
                                value: v.fbo_dimensions
                            }
                            ,
                            uBg: {
                                value: R.fbo_output.texture
                            }
                            ,
                            uHoverUV: {
                                value: s.hoverUV
                            }
                        }
                        ,
                        h=new b.j( {
                            vertexShader:at, fragmentShader:ht, uniforms: {
                                ...a, uBack: {
                                    value: !1
                                }
                            }
                            ,
                            transparent:!0
                        }
                        ),
                        l=new x.K(i,
                        h);
                        l.frustumCulled=!1,
                        l.userData=s;
                        const c=new b.j( {
                            vertexShader:at, fragmentShader:ht, uniforms: {
                                ...a, uBack: {
                                    value: !0
                                }
                            }
                            ,
                            transparent:!0
                        }
                        );
                        this.raycastMeshes.push(l);
                        const u=new x.K(n,
                        c);
                        u.frustumCulled=!1,
                        this.meshes[t]= {
                            mesh_front: l, mesh_back: u, uniforms: a, userData: s, animation: o, group: e
                        }
                        ,
                        e.add(u),
                        e.add(l),
                        this.group.add(e)
                    }
                    this.singleFrontPoster.init(i,
                    n,
                    this.commonUniforms,
                    this.sectionName),
                    this.workLoopText.init()
                }
                onClick() {
                    if(this.clickFocus.status)return;
                    const t= {
                        isClick: !1, num: null
                    }
                    ;
                    if(this.scroll.isStart) {
                        const e=this.detectHover();
                        if(e.length>0) {
                            this.clickMesh=e[0].object;
                            const s=this.clickMesh.userData.num;
                            this.updateHover(), this.clickFocus.status=!0, this.clickFocus.num=s, t.isClick=!0, t.num=s, c.emit("ENABLE_CLOSE_WORK_CARD", {
                                enable: !1
                            }
                            ),
                            this.scrollClickFocusMesh(),
                            setTimeout((()=> {
                                c.emit("ENABLE_CLOSE_WORK_CARD", {
                                    enable: !0
                                }
                                )
                            }
                            ))
                        }
                    }
                    c.emit("CLICK_WORK_CARD",
                    t)
                }
                scrollClickFocusMesh() {
                    if(this.clickMesh&&this.clickFocus.status) {
                        const t=this.clickMesh.userData.num, e=(this.imageNum-t-1)/(this.imageNum-1)*(this.targetData.height-v.dimensions.y)+this.targetData.top+this.scrollY;
                        c.emit("SCROLL_ANIM_WORK", {
                            targetScroll: e, duration: .5
                        }
                        )
                    }
                }
                getTargetElement() {
                    this.$target=document.body.querySelector(".tp--ow"), this.$target.addEventListener("click", this.clickFunc), this.getTargetData(), this.workLoopText.getTargetElement()
                }
                removeEvent() {
                    this.$target.removeEventListener("click", this.clickFunc)
                }
                getTargetData() {
                    const t=this.$target.getBoundingClientRect();
                    this._targetData=t, this.targetData= {
                        top: t.top, bottom: t.bottom, left: t.left, right: t.right, width: t.width, height: t.height
                    }
                }
                resize() {
                    if(this.commonUniforms) {
                        this.clickFocus.status||this.checkPosition();
                        const t=new tt.y, e=.8*this.radius, s=new rt.L(this.aspect*e, e, .15*e, 1);
                        t.setPosition(0, 0, -this.radius), s.applyMatrix4(t), s.applyMatrix4(this.camera.matrixWorldInverse), s.applyMatrix4(this.camera.projectionMatrix), s.multiplyScalar(1/s.w), this.$target.style.height=6*v.dimensions.x+"px", c.emit("GET_WORK_CARD_SIZE", {
                            width: .5*v.dimensions.x*s.x, height: .5*v.dimensions.y*s.y
                        }
                        ),
                        this.scrollClickFocusMesh()
                    }
                }
                checkPosition() {
                    this.getTargetData(), this.isArea=this.targetData.top<100&&this.targetData.bottom>0;
                    let t=-this.targetData.top/(this.targetData.height-v.dimensions.y);
                    t<0?this.scroll._offsetY=1.5*-this.targetData.top: t>1?this.scroll._offsetY=this.totalHeight+2*(v.dimensions.y-this.targetData.top-this.targetData.height): (this.scroll._offsetY=t*this.totalHeight, this.scroll._rotationY=t*((this.imageNum-1)/8)*(2*Math.PI)), this.scrollProgress=Math.min(1, Math.max(0, t)), this.isArea&&(this.isStarted=!0, this.group.visible=!0)
                }
                changePosition(t,
                e,
                s) {
                    let i=.8*this.radius;
                    t.scale.set(i, i, i), t.position.copy(e.pos_start), t.quaternion.copy(e.quat_start), t.position.lerp(e.pos_end, s.roll.c), t.quaternion.slerp(e.quat_end, s.roll.c), t.updateMatrix();
                    const n=2*-Math.PI*s.delayRoll.c, o=Math.cos(n), r=Math.sin(n);
                    let a=o*t.position.z-r*t.position.x, h=r*t.position.z+o*t.position.x;
                    const l=Math.abs(t.rotation.x)>.5*Math.PI;
                    t.position.x=h, t.position.z=a, l?t.rotation.y-=n: t.rotation.y+=n
                }
                updateAnimation(t,
                e,
                s) {
                    if(this.isStarted)for(let n in t) {
                        const o=t[n];
                        let r=Math.min(1, v.delta*o.e);
                        this.showTimeOnce>o.delay&&(o.t+=r), o.t=Math.min(1, o.t), o.c=i[o.ease](o.t), "roll"==n&&o.c>=1&&(s.isFirstFinished=!0), "roll"==n&&e==this.meshes.length-1&&o.c>=1&&(this.scroll.isStart=!0)
                    }
                }
                detectHover() {
                    this.raycaster.setFromCamera(Y.targetPos, this.camera);
                    return this.raycaster.intersectObjects(this.raycastMeshes)
                }
                updateHover() {
                    if(this.scroll.isStart)if(this.clickFocus.status);
                    else {
                        const t=this.detectHover();
                        if(t.length>0) {
                            const e=t[0].object.userData.num, s=t[0].object.userData;
                            this.hover.isHover&&this.hover.currentNum===e||(null!==this.hover.currentNum&&(this.meshes[this.hover.currentNum].userData.isHover=!1), s.isHover=!0, c.emit("HOVER_WORK_CARD", {
                                isHover: !0, num: e
                            }
                            )),
                            s.hoverUV.x=t[0].uv.x,
                            s.hoverUV.y=t[0].uv.y,
                            this.hover.currentNum=e,
                            this.hover.isHover=!0
                        }
                        else this.releaseHover()
                    }
                }
                releaseHover() {
                    this.hover.isHover&&(this.meshes[this.hover.currentNum].userData.isHover=!1, c.emit("HOVER_WORK_CARD", {
                        isHover: !1
                    }
                    )),
                    this.hover.isHover=!1,
                    this.hover.currentNum=null
                }
                update() {
                    if(this.group.position.set(0, 0, 0), this.group.rotation.set(0, 0, 0), this.hover.lookAt.set(Y.hoverPos.x, Y.hoverPos.y, v.dimensions.y), this.commonUniforms) {
                        this.commonUniforms.uTime.value+=v.delta, this.commonUniforms.uHoverProgress.value=this.hover.progress;
                        const t=this.isArea||this.scroll.isStart?1: 0, e=Math.min(1, 4*v.delta);
                        this.commonUniforms.uOpacity.value+=(t-this.commonUniforms.uOpacity.value)*e, this.commonUniforms.uOpacity.value*=g.params.opacity, this.commonUniforms.uClickFocusProgress.value+=((this.clickFocus.status?1: 0)-this.commonUniforms.uClickFocusProgress.value)*e
                    }
                    this.radius=v.dimensions.x,
                    this.radiusAspect=v.isMobile?.8:.6,
                    this.radius*=this.radiusAspect;
                    let t=.8*this.radius;
                    this.totalHeight=t*this.yScale*(this.meshes.length-1);
                    for(let e=0;
                    e<this.meshes.length;
                    e++) {
                        const {
                            group: s, mesh_front: i, mesh_back: n, userData: o, animation: r, uniforms: a
                        }
                        =this.meshes[e];
                        this.updateAnimation(r,
                        e,
                        o),
                        a.uProgress.value.x=r.fall.c,
                        a.uProgress.value.y=r.roll.c,
                        o.pos_start.set((o.index_start.x+Math.cos(this.commonUniforms.uTime.value+100*o.random.x))*t*1.5,
                        o.index_start.y*t-r.fall.c*t*8,
                        -o.index_start.z*t),
                        o.rot_start.z=.4*Math.cos(2*o.random.y*Math.PI),
                        o.rot_start.x=.5*Math.cos(2*o.random.z*Math.PI),
                        o.rot_start.y=.3*Math.cos(2*o.random.x*Math.PI),
                        o.quat_start.setFromEuler(o.rot_start);
                        let h=o.radian;
                        o.pos_end.set(Math.sin(h)*this.radius,
                        (e-(this.meshes.length-1)/2)*t*this.yScale-t*this.yScale*((this.meshes.length-1)/2)-(1-r.roll.c)*v.dimensions.x*2,
                        Math.cos(h)*this.radius),
                        o.rot_end.set(0,
                        h,
                        0),
                        o.quat_end.setFromEuler(o.rot_end),
                        this.changePosition(s,
                        o,
                        r)
                    }
                    if(this.isStarted) {
                        if(this.showTimeOnce+=v.delta, this.scroll.isStart) {
                            const t=Math.min(1, 4*v.delta);
                            this.scroll.offsetY+=1*(this.scroll._offsetY-this.scroll.offsetY), this.scroll.rotationY+=(this.scroll._rotationY-this.scroll.rotationY)*t;
                            const e=Math.min(1, 2*v.delta);
                            this.scroll.progress+=(1-this.scroll.progress)*e, this.singleFrontPoster.group.visible=!1
                        }
                        else this.singleFrontPoster.group.visible=!0;
                        this.updateAnimation(this.wholeAnim),
                        this.group.position.z=1.5*-this.radius*this.wholeAnim.fall.c,
                        this.group.position.y=A(0,
                        this.scroll.offsetY,
                        this.scroll.progress),
                        this.group.rotation.y=A(0,
                        this.scroll.rotationY,
                        this.scroll.progress),
                        this.singleFrontPoster.update(this.radius)
                    }
                    if(this.workLoopText.update(),
                    this.scroll.isStart) {
                        const t=Math.min(1, 4*v.delta);
                        this.hover.progress+=((this.hover.isHover?1: 0)-this.hover.progress)*t;
                        for(let e=0;e<this.meshes.length;e++) {
                            const {
                                userData: s
                            }
                            =this.meshes[e];
                            s.isHover?s.hoverUV.z+=(1-s.hoverUV.z)*t:s.hoverUV.z+=(0-s.hoverUV.z)*t
                        }
                    }
                }
            }
            var pt=s(5273);
            const vt=new class {
                constructor() {
                    this.TGT=[]
                }
                init() {
                    this.items=a.new.querySelectorAll(".js-scfx"), this._kill(), this.once()
                }
                once() {
                    this._buildConfig(), this._getSize()
                }
                _buildConfig() {
                    for(var t=0;t<this.items.length;t++) {
                        const e=this.items[t], s= {
                            el: e, tgt: e.querySelectorAll(".js-scfx-t"), pad:0, pos: {
                                s: 0, e: 0
                            }
                        }
                        ;
                        this.TGT.push(s)
                    }
                }
                _getSize() {
                    for(var t=0;
                    t<this.TGT.length;
                    t++) {
                        const e=this.TGT[t], s=e.el.getBoundingClientRect();
                        e.pad=.4*s.height, e.pos.s=s.top+a.scroll.pos, e.pos.e=e.pos.s+s.height-a.vh, e.pos.e<=a.vh&&(e.pos.e=e.pos.s+e.pad)
                    }
                }
                resize() {
                    this.TGT.length<=0||this._getSize()
                }
                _update() {
                    if(!(this.TGT.length<=0))for(var t=0;
                    t<this.TGT.length;
                    t++) {
                        const s=this.TGT[t].pad, i=this.TGT[t].tgt, n=this.TGT[t].pos.s, o=this.TGT[t].pos.e;
                        if(n<=a.scroll.pos&&o>=a.scroll.pos) {
                            const t="translate3d(0, "+(a.scroll.pos-n)+"px, 0)";
                            for(var e=0;
                            e<i.length;
                            e++) {
                                const n=i[e].style;
                                n.transform=t, n.webkitTransform=t, n.mozTransform=t, n.msTransform=t, o-s>a.scroll.pos&&(n.opacity=1)
                            }
                        }
                        if(o-s<=a.scroll.pos&&o>=a.scroll.pos) {
                            const t=(o-a.scroll.pos)/s;
                            for(e=0;
                            e<i.length;
                            e++) {
                                i[e].style.opacity=t
                            }
                        }
                        if(o<a.scroll.pos)for(e=0;
                        e<i.length;
                        e++) {
                            i[e].style.opacity=0
                        }
                    }
                }
                _kill() {
                    for(var t=0;
                    t<this.TGT.length;
                    t++)this.TGT[t]=null;
                    this.TGT.length=0
                }
            };
            const ft=new class {
                constructor() {
                    this.TGT=[]
                }
                init() {
                    this.items=a.new.querySelectorAll(".js-scspd"), this._kill(), this.once()
                }
                once() {
                    this._buildConfig(), this._getSize()
                }
                _buildConfig() {
                    for(var t=0;
                    t<this.items.length;
                    t++) {
                        const e=this.items[t], s= {
                            el: e, tgt: e.querySelectorAll(".js-scspd-t"), pad:0, pos: {
                                s: 0, e: 0
                            }
                        }
                        ;
                        this.TGT.push(s)
                    }
                }
                _getSize() {
                    for(var t=0;
                    t<this.TGT.length;
                    t++) {
                        const e=this.TGT[t], s=e.el.getBoundingClientRect();
                        e.pos.s=s.top+a.scroll.pos-a.vh, e.pos.e=e.pos.s+s.height+a.vh, e.pos.s<0&&(e.pos.s=0)
                    }
                }
                resize() {
                    this.TGT.length<=0||this._getSize()
                }
                _update() {
                    if(!(this.TGT.length<=0))for(var t=0;
                    t<this.TGT.length;
                    t++) {
                        const s=this.TGT[t].tgt, i=this.TGT[t].pos.s, n=this.TGT[t].pos.e;
                        if(i<=a.scroll.pos&&n>=a.scroll.pos) {
                            const t="translate3d(0, "+.2*(a.scroll.pos-i)+"px, 0)";
                            for(var e=0;
                            e<s.length;
                            e++) {
                                const i=s[e].style;
                                i.transform=t, i.webkitTransform=t, i.mozTransform=t, i.msTransform=t
                            }
                        }
                    }
                }
                _kill() {
                    for(var t=0;
                    t<this.TGT.length;
                    t++)this.TGT[t]=null;
                    this.TGT.length=0
                }
            }
            ,
            gt= {
                smoothScroll: null, timer: function() {}, once: !1, FIX: vt, SPEED: ft, init: function() {
                    null!==this.smoothScroll&&(this.smoothScroll.removeListener(this.scrollFunc), this.smoothScroll.destroy()), h.documentElement.classList.remove("is-scrolled"), this.tgt=a.new.querySelectorAll(".b--pw"), this.FIX.init(), this.SPEED.init(), this.smoothScroll=pt.Z.init(this.tgt[this.tgt.length-1]), this.scrollFunc=this.scroll.bind(this), this.smoothScroll.addListener(this.scrollFunc), !1===this.once&&(this.once=!0)
                },
                resize:function() {
                    this.FIX.resize(), this.SPEED.resize()
                }
                ,
                scroll:function(t) {
                    const e=t.offset;
                    this.scrollY=e.y, a.scroll.pos=this.scrollY, "home"===a.dir&&c.emit("UPDATE_SCROLL", {
                        offset: e
                    }
                    ),
                    e.y>100?h.documentElement.classList.add("is-scrolled"):h.documentElement.classList.remove("is-scrolled"),
                    this.FIX._update(),
                    this.SPEED._update(),
                    h.documentElement.classList.add("is-scrolling"),
                    clearTimeout(this.timer),
                    this.timer=setTimeout((function() {
                        h.documentElement.classList.remove("is-scrolling")
                    }
                    ),
                    100)
                }
            }
            ;
            const yt=new class {
                constructor() {
                    this.onMove=this._move.bind(this)
                }
                init() {
                    this._attach()
                }
                _attach() {
                    "is-pc"===a.act&&window.addEventListener("mousemove", this.onMove, a.ps)
                }
                _move(t) {
                    a.mouse.x=t.clientX, a.mouse.y=t.clientY
                }
                _ease(t,
                e,
                s) {
                    return(t-e)*s
                }
                _update() {
                    if("is-pc"===a.act) {
                        const t=a.mouse;
                        "is-pc"===a.act&&(t.vx+=this._ease(t.x, t.vx, .25), t.vy+=this._ease(t.y, t.vy, .25))
                    }
                }
            }
            ,
            wt=new class {
                constructor() {
                    this.item= {}, this.anim= {
                        bd: {
                            speed: .8, delay: .08, ease: "power2.inOut"
                        }
                        ,
                        one: {
                            speed: 1, delay: .03, base: .16, ease: "power2.inOut"
                        }
                        ,
                        op: {
                            speed: 1, delay: .08, base: .24, ease: "power2.inOut"
                        }
                        ,
                        mask: {
                            speed: 1, delay: .08, ease: "power2.inOut"
                        }
                        ,
                        m: {
                            speed: .6, ease: "power1.out", mx: 10
                        }
                    }
                    ,
                    this.MEP= {
                        b: {
                            x: 0, y: 0, w: 0, h: 0
                        }
                        ,
                        e: {
                            x: 0, y: 0
                        }
                        ,
                        m: {
                            x: 0, y: 0
                        }
                        ,
                        p: {
                            x: 0, y: 0
                        }
                    }
                    ,
                    this.MASK=[ {
                        x: 100, y: 0
                    }
                    ,
                    {
                        x: 0, y: 0
                    }
                    ],
                    this.onHit=this._hit.bind(this),
                    this.onKey=this._key.bind(this),
                    this.onMouseEnter=this._mouseEnter.bind(this),
                    this.onMouseMove=this._mouseMove.bind(this),
                    this.onMouseLeave=this._mouseLeave.bind(this)
                }
                init() {
                    this.item= {
                        hit: h.getElementById("js-hm"), hiticon: h.getElementById("js-hm").querySelectorAll(".js-hm-i"), wp: h.getElementById("js-nv"), border: h.getElementById("js-nv").querySelectorAll(".js-nv-bd"), one: h.getElementById("js-nv").querySelectorAll(".js-nv-one"), op: h.getElementById("js-nv").querySelectorAll(".js-nv-op"), hititem: h.getElementById("js-nv").querySelectorAll("a, button")
                    }
                    ,
                    this.once()
                }
                once() {
                    r.set(this.item.one, {
                        yPercent: -100
                    }
                    ),
                    r.set(this.item.op,
                    {
                        opacity: 0
                    }
                    ),
                    r.set(this.item.border,
                    {
                        xPercent: -100
                    }
                    ),
                    r.set(this.item.wp,
                    {
                        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)", autoAlpha: 0
                    }
                    );
                    for(var t=0;
                    t<this.item.hititem.length;
                    t++)this.item.hititem[t].setAttribute("tabindex",
                    "-1");
                    this.item.hit.addEventListener("click",
                    this.onHit,
                    !1),
                    h.addEventListener("keydown",
                    this.onKey,
                    !1),
                    "click"===a.evt&&(this.item.hit.addEventListener("mouseenter",
                    this.onMouseEnter,
                    !1),
                    this.item.hit.addEventListener("mousemove",
                    this.onMouseMove,
                    !1),
                    this.item.hit.addEventListener("mouseleave",
                    this.onMouseLeave,
                    !1))
                }
                _mouseEnter(t) {
                    const e=this, s=t.currentTarget.getBoundingClientRect();
                    this.MEP.b.x=s.left, this.MEP.b.y=s.top, this.MEP.b.w=s.width, this.MEP.b.h=s.height, this.MEP.p.x=.5*s.width, this.MEP.p.y=.5*s.height, this.MEP.e.x=t.pageX, this.MEP.e.y=t.pageY, r.to(e.item.hiticon, {
                        duration: e.anim.m.speed, x: e.anim.m.mx*((this.MEP.e.x-this.MEP.p.x)/this.MEP.p.x), y: e.anim.m.mx*((this.MEP.e.y-this.MEP.p.y)/this.MEP.p.y), ease: e.anim.m.ease
                    }
                    )
                }
                _mouseMove(t) {
                    const e=this;
                    t.currentTarget;
                    this.MEP.e.x=t.pageX, this.MEP.e.y=t.pageY, r.to(e.item.hiticon, {
                        duration: e.anim.m.speed, x: e.anim.m.mx*((this.MEP.e.x-this.MEP.p.x)/this.MEP.p.x), y: e.anim.m.mx*((this.MEP.e.y-this.MEP.p.y)/this.MEP.p.y), ease: e.anim.m.ease
                    }
                    )
                }
                _mouseLeave(t) {
                    const e=this;
                    t.currentTarget;
                    r.to(e.item.hiticon, {
                        duration: e.anim.m.speed, x: 0, y: 0, ease: e.anim.m.ease
                    }
                    )
                }
                _hit() {
                    if(!0===a.nav)this._close();
                    else this._open()
                }
                _key(t) {
                    27===t.keyCode&&!0===a.nav&&this._close()
                }
                _setMask() {
                    this.item.wp.style.clipPath=`polygon(0 0, 100% 0, 100% $ {
                        this.MASK[1].y
                    }
                    %,
                    0% $ {
                        this.MASK[0].y
                    }
                    %)`
                }
                _open() {
                    const t=this;
                    a.nav=!0, h.documentElement.classList.add("is-navopen");
                    for(var e=0;
                    e<this.item.hititem.length;
                    e++)this.item.hititem[e].setAttribute("tabindex", "0");
                    r.set(this.item.wp, {
                        autoAlpha: 1
                    }
                    );
                    for(e=0;
                    e<this.MASK.length;
                    e++) {
                        const s=e;
                        r.killTweensOf(this.MASK[e]), r.to(this.MASK[e], {
                            duration: e>0?this.anim.mask.speed+this.anim.mask.delay: this.anim.mask.speed, y: 100, ease: this.anim.mask.ease, onUpdate: function() {
                                1===s&&t._setMask()
                            }
                            ,
                            onComplete:function() {
                                h.documentElement.classList.add("is-navopened")
                            }
                        }
                        )
                    }
                    for(e=0;
                    e<this.item.border.length;
                    e++) {
                        const s=this.item.border[e];
                        r.killTweensOf(s), r.to(s, {
                            duration: t.anim.bd.speed, xPercent: 0, delay: t.anim.bd.delay*(e+1), ease: t.anim.bd.ease
                        }
                        )
                    }
                    for(e=0;
                    e<this.item.one.length;
                    e++) {
                        const s=this.item.one[e];
                        r.killTweensOf(s), r.to(s, {
                            duration: t.anim.one.speed, yPercent: 0, delay: t.anim.one.delay*e+t.anim.one.base, ease: t.anim.one.ease
                        }
                        )
                    }
                    for(e=0;
                    e<this.item.op.length;
                    e++) {
                        const s=this.item.op[e];
                        r.killTweensOf(s), r.to(s, {
                            duration: t.anim.op.speed, opacity: 1, delay: t.anim.op.delay*e+t.anim.op.base, ease: t.anim.op.ease
                        }
                        )
                    }
                }
                _close() {
                    const t=this;
                    a.nav=!1, h.documentElement.classList.remove("is-navopen"), h.documentElement.classList.remove("is-navopened");
                    for(var e=0;
                    e<this.item.hititem.length;
                    e++)this.item.hititem[e].setAttribute("tabindex", "-1");
                    for(e=0;
                    e<this.MASK.length;
                    e++) {
                        const s=e;
                        r.killTweensOf(this.MASK[e]), r.to(this.MASK[e], {
                            duration: e>0?t.anim.mask.speed+t.anim.mask.delay: t.anim.mask.speed, y: 0, ease: t.anim.mask.ease, onUpdate: function() {
                                1===s&&t._setMask()
                            }
                            ,
                            onComplete:function() {
                                1===s&&r.set(t.item.wp, {
                                    autoAlpha: 0
                                }
                                )
                            }
                        }
                        )
                    }
                    for(e=this.item.border.length-1;
                    e>=0;
                    e--) {
                        const s=this.item.border[e];
                        r.killTweensOf(s), r.to(s, {
                            duration: t.anim.bd.speed, xPercent: -100, delay: t.anim.bd.delay*(t.item.border.length-1-e), ease: t.anim.bd.ease
                        }
                        )
                    }
                    for(e=this.item.one.length-1;
                    e>=0;
                    e--) {
                        const s=this.item.one[e];
                        r.killTweensOf(s), r.to(s, {
                            duration: t.anim.one.speed, yPercent: -100, delay: t.anim.one.delay*(t.item.one.length-1-e), ease: t.anim.one.ease
                        }
                        )
                    }
                    for(e=this.item.op.length-1;
                    e>=0;
                    e--) {
                        const s=this.item.op[e];
                        r.killTweensOf(s), r.to(s, {
                            duration: t.anim.op.speed, opacity: 0, delay: t.anim.op.delay*(t.item.op.length-1-e), ease: t.anim.op.ease
                        }
                        )
                    }
                }
            }
            ;
            const xt=class {
                constructor(t) {
                    this.el=t, this.items=this.el.querySelectorAll(".-i"), this.text=this.el.querySelectorAll(".-tl"), this.DIR=this.el.classList.contains("-rev")?-1: 1, this.MODE=this.el.classList.contains("-dot")?"dot":"default", this.conf= {
                        enter: !1
                    }
                    ,
                    this.anim= {
                        speed: .35, delay: .03, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1"), tx: {
                            speed: .7, delay: .01, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1")
                        }
                    }
                    ,
                    this.onMe=this.me.bind(this),
                    this.init()
                }
                init() {
                    "is-pc"===a.act&&this.el.addEventListener("mouseenter", this.onMe, !1)
                }
                me(t) {
                    const e=this;
                    t.currentTarget;
                    if(!1===this.conf.enter) {
                        this.conf.enter=!0;
                        for(var s=0;
                        s<this.items.length;
                        s++) {
                            const t=this.items[s], i=s;
                            "dot"===this.MODE?r.to(t, {
                                duration: e.anim.speed, opacity: 0, delay: e.anim.delay*s, ease: e.anim.ease, onComplete: function() {
                                    r.to(t, {
                                        duration: e.anim.speed, opacity: 1, ease: e.anim.ease, onComplete: function() {
                                            e.conf.enter=!1
                                        }
                                    }
                                    )
                                }
                            }
                            ):r.to(t,
                            {
                                duration: e.anim.speed, xPercent: s%2==0?100*e.DIR: -100*e.DIR, ease: e.anim.ease, onComplete: function() {
                                    r.fromTo(t, {
                                        xPercent: i%2==0?-100*e.DIR: 100*e.DIR
                                    }
                                    ,
                                    {
                                        duration: e.anim.speed, xPercent: 0, ease: e.anim.ease, onComplete: function() {
                                            e.conf.enter=!1
                                        }
                                    }
                                    )
                                }
                            }
                            )
                        }
                        for(var i=0;
                        i<this.text.length;
                        i++) {
                            const t=this.text[i].querySelectorAll(".-t");
                            for(s=0;
                            s<t.length;
                            s++) {
                                const i=t[s];
                                r.killTweensOf(t[s]), r.to(i, {
                                    duration: e.anim.tx.speed, yPercent: -100, delay: e.anim.tx.delay*s, ease: e.anim.tx.ease, onComplete: function() {
                                        r.set(i, {
                                            yPercent: 0
                                        }
                                        )
                                    }
                                }
                                )
                            }
                        }
                    }
                }
                _kill() {
                    "is-pc"===a.act&&this.el.removeEventListener("mouseenter", this.onMe, !1)
                }
            }
            ;
            const _t=class {
                constructor(t) {
                    this.el=t, this.items=this.el.querySelectorAll(".-i"), this.text=this.el.querySelectorAll(".-tl"), this.conf= {
                        enter: !1
                    }
                    ,
                    this.anim= {
                        tx: {
                            speed: .8, delay: .01, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1")
                        }
                    }
                    ,
                    this.onMe=this.me.bind(this),
                    this.init()
                }
                init() {
                    "is-pc"===a.act&&this.el.addEventListener("mouseenter", this.onMe, !1)
                }
                me(t) {
                    const e=this;
                    t.currentTarget;
                    if(!1===this.conf.enter) {
                        this.conf.enter=!0;
                        for(var s=0;
                        s<this.text.length;
                        s++) {
                            const t=this.text[s].querySelectorAll(".-t");
                            for(var i=0;
                            i<t.length;
                            i++) {
                                const s=t[i], n=i;
                                r.killTweensOf(t[i]), r.to(s, {
                                    duration: e.anim.tx.speed, yPercent: -100, delay: e.anim.tx.delay*i, ease: e.anim.tx.ease, onComplete: function() {
                                        r.set(s, {
                                            yPercent: 0
                                        }
                                        ),
                                        n===t.length-1&&(e.conf.enter=!1)
                                    }
                                }
                                )
                            }
                        }
                    }
                }
                _kill() {
                    "is-pc"===a.act&&this.el.removeEventListener("mouseenter", this.onMe, !1)
                }
            }
            ,
            bt=function(t,
            e,
            s) {
                return t+(e-t)*s
            }
            ;
            const Tt=class {
                constructor(t) {
                    this.el=t, this.items=this.el.querySelectorAll(".-i"), this.itemLen=this.items.length, this.MV=0, this.X=0, this.Y=0;
                    const e=t.getBoundingClientRect();
                    this.POS= {
                        scroll:a.scroll.pos, x:e.left, y:e.top, w:.5*e.width, h:.5*e.height, p: {
                            x: .5*e.width+e.left, y: .5*e.height+e.top
                        }
                    }
                    ,
                    this.conf= {
                        enter: !1
                    }
                    ,
                    this.anim= {
                        speed: .3, delay: .05, ease: "Power1.inOut"
                    }
                    ,
                    this.onMe=this.me.bind(this),
                    this.onMl=this.ml.bind(this),
                    this.onUpdate=this._update.bind(this),
                    this.init()
                }
                init() {
                    const t=this;
                    "is-pc"===a.act&&(this.el.addEventListener("mouseenter", this.onMe, !1), this.el.addEventListener("mouseleave", this.onMl, !1), c.on(u, t.onUpdate))
                }
                me(t) {
                    const e=t.currentTarget.getBoundingClientRect();
                    this.POS.scroll=a.scroll.pos, this.POS.x=e.left, this.POS.y=e.top, this.POS.w=.5*e.width, this.POS.h=.5*e.height, this.POS.p.x=.5*e.width+e.left, this.POS.p.y=.5*e.height+e.top, this.MV=.2*this.POS.w, this.conf.enter=!0
                }
                ml(t) {
                    t.currentTarget;
                    this.conf.enter=!1
                }
                _update() {
                    const t=this.POS.scroll-a.scroll.pos, e=!0===this.conf.enter?(a.mouse.x-this.POS.p.x)/this.POS.w*this.MV: 0, s=!0===this.conf.enter?(a.mouse.y-this.POS.p.y-t)/this.POS.h*this.MV: 0;
                    this.X=bt(this.X, e, .1), this.Y=bt(this.Y, s, .1);
                    for(var i=0;
                    i<this.itemLen;
                    i++) {
                        const t=this.items[i].style, e="translate3d("+this.X+"px , "+this.Y+"px, 0)";
                        t.transform=e, t.webkitTransform=e, t.mozTransform=e, t.msTransform=e
                    }
                }
                _kill() {
                    "is-pc"===a.act&&(this.el.removeEventListener("mouseenter", this.onMe, !1), this.el.removeEventListener("mouseleave", this.onMl, !1), c.off(u, this.onUpdate))
                }
            }
            ;
            const St=class {
                constructor(t) {
                    this.el=t, this.items=this.el.querySelectorAll(".-i"), this.pivot=this.el.querySelectorAll(".-p"), this.itemLen=this.items.length, this.X=0, this.Y=0;
                    const e=t.getBoundingClientRect();
                    this.POS= {
                        scroll:a.scroll.pos, x:e.left, y:e.top, w:.5*e.width, h:.5*e.height, p: {
                            x: .5*e.width+e.left, y: .5*e.height+e.top
                        }
                    }
                    ,
                    this.conf= {
                        enter: !1
                    }
                    ,
                    this.anim= {
                        speed: .3, delay: .05, ease: "Power1.inOut"
                    }
                    ,
                    this.onMe=this.me.bind(this),
                    this.onMl=this.ml.bind(this),
                    this.onUpdate=this._update.bind(this),
                    this.init()
                }
                init() {
                    const t=this;
                    "is-pc"===a.act&&(this.el.addEventListener("mouseenter", this.onMe, !1), this.el.addEventListener("mouseleave", this.onMl, !1), c.on(u, t.onUpdate))
                }
                me(t) {
                    const e=t.currentTarget.getBoundingClientRect();
                    this.POS.scroll=a.scroll.pos, this.POS.x=e.left, this.POS.y=e.top, this.POS.w=.5*e.width, this.POS.h=.5*e.height, this.POS.p.x=.5*e.width+e.left, this.POS.p.y=.5*e.height+e.top;
                    for(var s=0;
                    s<this.pivot.length;
                    s++) {
                        const t=this.pivot[s].getBoundingClientRect();
                        this.POS.p.x=.5*t.width+t.left, this.POS.p.y=.5*t.height+t.top
                    }
                    this.conf.enter=!0
                }
                ml(t) {
                    t.currentTarget;
                    this.conf.enter=!1
                }
                _update() {
                    const t=this.POS.scroll-a.scroll.pos, e=!0===this.conf.enter?a.mouse.x-this.POS.p.x: 0, s=!0===this.conf.enter?a.mouse.y-this.POS.p.y-t: 0;
                    this.X=bt(this.X, e, .1), this.Y=bt(this.Y, s, .1);
                    for(var i=0;
                    i<this.itemLen;
                    i++) {
                        const t=this.items[i].style, e="translate3d("+this.X+"px , "+this.Y+"px, 0)";
                        t.transform=e, t.webkitTransform=e, t.mozTransform=e, t.msTransform=e
                    }
                }
                _kill() {
                    "is-pc"===a.act&&(this.el.removeEventListener("mouseenter", this.onMe, !1), this.el.removeEventListener("mouseleave", this.onMl, !1), c.off(u, this.onUpdate))
                }
            }
            ;
            const Et=class {
                constructor(t) {
                    this.el=t, this.items=this.el.querySelectorAll(".-i"), this.DIR=this.el.classList.contains("-rev")?-1:1, this.conf= {
                        enter: !1
                    }
                    ,
                    this.anim= {
                        speed: .35, delay: .03, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1")
                    }
                    ,
                    this.onMe=this.me.bind(this),
                    this.init()
                }
                init() {
                    "is-pc"===a.act&&this.el.addEventListener("mouseenter", this.onMe, !1)
                }
                me(t) {
                    const e=this;
                    t.currentTarget;
                    if(!1===this.conf.enter) {
                        this.conf.enter=!0;
                        for(var s=0;
                        s<this.items.length;
                        s++) {
                            const t=this.items[s], i=s;
                            r.to(t, {
                                duration: e.anim.speed, xPercent: s%2==0?100*e.DIR: -100*e.DIR, ease: e.anim.ease, onComplete: function() {
                                    r.fromTo(t, {
                                        xPercent: i%2==0?-100*e.DIR: 100*e.DIR
                                    }
                                    ,
                                    {
                                        duration: e.anim.speed, xPercent: 0, ease: e.anim.ease, onComplete: function() {
                                            e.conf.enter=!1
                                        }
                                    }
                                    )
                                }
                            }
                            )
                        }
                    }
                }
                _kill() {
                    "is-pc"===a.act&&this.el.removeEventListener("mouseenter", this.onMe, !1)
                }
            }
            ;
            const Lt=class {
                constructor(t) {
                    this.el=t, this.items=this.el.querySelectorAll(".-i"), this.conf= {
                        enter: !1
                    }
                    ,
                    this.anim= {
                        speed: .35, delay: .08, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1")
                    }
                    ,
                    this.onMe=this.me.bind(this),
                    this.init()
                }
                init() {
                    "is-pc"===a.act&&this.el.addEventListener("mouseenter", this.onMe, !1)
                }
                me(t) {
                    const e=this;
                    t.currentTarget;
                    if(!1===this.conf.enter) {
                        this.conf.enter=!0;
                        for(var s=0;
                        s<this.items.length;
                        s++) {
                            const t=this.items[s];
                            r.to(t, {
                                duration: e.anim.speed, xPercent: 100, delay: e.anim.delay*s, ease: e.anim.ease, onComplete: function() {
                                    r.fromTo(t, {
                                        xPercent: -100
                                    }
                                    ,
                                    {
                                        duration: e.anim.speed, xPercent: 0, ease: e.anim.ease, onComplete: function() {
                                            e.conf.enter=!1
                                        }
                                    }
                                    )
                                }
                            }
                            )
                        }
                    }
                }
                _kill() {
                    "is-pc"===a.act&&this.el.removeEventListener("mouseenter", this.onMe, !1)
                }
            }
            ,
            At= {
                conf: [], init: function() {
                    this.item= {
                        hv: a.new.querySelectorAll(".js-hv"), hvo: h.body.querySelectorAll(".js-hvo")
                    }
                    ,
                    "click"===a.evt&&(this.kill(),
                    this.once())
                }
                ,
                once:function() {
                    for(var t=0;
                    t<this.item.hv.length;
                    t++)if(this.item.hv[t].getAttribute("data-hv")) {
                        const s=this.item.hv[t], i=this.item.hv[t].getAttribute("data-hv").split(",");
                        for(var e=0;
                        e<i.length;
                        e++) {
                            let t=this._manager(s, i[e]);
                            this.conf.push(t)
                        }
                    }
                    for(t=0;
                    t<this.item.hvo.length;
                    t++)if(this.item.hvo[t].getAttribute("data-hv")&&!this.item.hvo[t].classList.contains("_hoverAttach")) {
                        const s=this.item.hvo[t], i=this.item.hvo[t].getAttribute("data-hv").split(",");
                        for(e=0;
                        e<i.length;
                        e++) {
                            this._manager(s, i[e])
                        }
                        this.item.hvo[t].classList.add("_hoverAttach")
                    }
                }
                ,
                _manager:function(t,
                e) {
                    let s=null;
                    switch(e) {
                        case"btn": s=new xt(t);
                        break;
                        case"text": s=new _t(t);
                        break;
                        case"mag": s=new Tt(t);
                        break;
                        case"storker": s=new St(t);
                        break;
                        case"arrow": s=new Et(t);
                        break;
                        case"lines": s=new Lt(t)
                    }
                    if(null!==s)return s
                }
                ,
                kill:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill();
                    this.conf.length=0
                }
            };
            const Mt=class {
                constructor(t) {
                    this.el=t, this.onHit=this._hit.bind(this), this.init()
                }
                init() {
                    this.el.addEventListener("click", this.onHit, !1)
                }

                _hit(t) {
                    let e=0;
                    if("vh"===t.currentTarget.getAttribute("data-tgt"))e=a.vh;
                    //console.log(gt.smoothScroll)
                    null!==gt.smoothScroll&&gt.smoothScroll.scrollTo(0, e, 800)
                }
                
                _kill() {
                    this.el.removeEventListener("click", this.onHit, !1)
                }
            };
            const kt=class {
                constructor(t) {
                    this.el=t, this.TGT=this.el.getAttribute("data-tgt")?h.getElementById(this.el.getAttribute("data-tgt")): null, this.SITEPARTS=h.body.querySelectorAll(".-siteparts"), this.items= {}, this.conf= {
                        enter: !1
                    }
                    ,
                    this.anim= {
                        speed: .8, ease: "Power2.inOut"
                    }
                    ,
                    this.onHit=this._hit.bind(this),
                    this.onClose=this._close.bind(this),
                    this.onBtn=this._btn.bind(this),
                    this.onFocusCheck=this._focusCheck.bind(this),
                    this.init()
                }
                init() {
                    if(null!==this.TGT) {
                        this.items= {
                            close: this.TGT.querySelectorAll(".-close"), btn: this.TGT.querySelectorAll(".-btn")
                        }
                        ,
                        this.el.addEventListener("click",
                        this.onHit,
                        !1);
                        for(var t=0;
                        t<this.items.close.length;
                        t++)this.items.close[t].addEventListener("click",
                        this.onClose,
                        !1);
                        for(t=0;
                        t<this.items.btn.length;
                        t++)this.items.btn[t].addEventListener("click",
                        this.onBtn,
                        !1);
                        c.on("RETURN_FOCUS_ABOUT_VIDEO",
                        this.onFocusCheck)
                    }
                }
                _close() {
                    c.emit("UNFOCUS_ABOUT_VIDEO")
                }
                _btn(t) {
                    t.currentTarget;
                    if("p"===t.currentTarget.getAttribute("data-dir"))c.emit("PREVIOUS_ABOUT_VIDEO");
                    else c.emit("NEXT_ABOUT_VIDEO")
                }
                _focusCheck(t) {
                    let {
                        detail: e
                    }
                    =t;
                    !0===e.isFocus?this._partsHide():this._partsShow()
                }
                _partsHide() {
                    this.TGT.classList.add("is-open"), r.to(this.TGT, {
                        duration: this.anim.speed, autoAlpha: 1, ease: this.anim.ease
                    }
                    ),
                    r.to(this.SITEPARTS,
                    {
                        duration: this.anim.speed, autoAlpha: 0, ease: this.anim.ease
                    }
                    );
                    for(var t=0;
                    t<this.items.close.length;
                    t++)this.items.close[t].setAttribute("tabindex",
                    "0");
                    for(t=0;
                    t<this.items.btn.length;
                    t++)this.items.btn[t].setAttribute("tabindex",
                    "0");
                    for(t=0;
                    t<this.SITEPARTS.length;
                    t++)this.SITEPARTS[t].setAttribute("tabindex",
                    "-1")
                }
                _partsShow() {
                    this.TGT.classList.remove("is-open"), r.to(this.SITEPARTS, {
                        duration: this.anim.speed, autoAlpha: 1, ease: this.anim.ease
                    }
                    ),
                    r.to(this.TGT,
                    {
                        duration: this.anim.speed, autoAlpha: 0, ease: this.anim.ease
                    }
                    );
                    for(var t=0;
                    t<this.SITEPARTS.length;
                    t++)this.SITEPARTS[t].removeAttribute("tabindex");
                    for(t=0;
                    t<this.items.close.length;
                    t++)this.items.close[t].setAttribute("tabindex",
                    "-1");
                    for(t=0;
                    t<this.items.btn.length;
                    t++)this.items.btn[t].setAttribute("tabindex",
                    "-1")
                }
                _hit(t) {
                    c.emit("FOCUS_ABOUT_VIDEO")
                }
                _kill() {
                    this.el.removeEventListener("click", this.onHit, !1), c.off("RETURN_FOCUS_ABOUT_VIDEO", this.onFocusCheck);
                    for(var t=0;
                    t<this.items.close.length;
                    t++)this.items.close[t].removeEventListener("click", this.onClose, !1);
                    for(t=0;
                    t<this.items.btn.length;
                    t++)this.items.btn[t].removeEventListener("click", this.onBtn, !1);
                    this._partsShow()
                }
            }
            ,
            Pt= {
                conf: [], init: function() {
                    this.item= {
                        hit: a.new.querySelectorAll(".js-hit"), hito: h.body.querySelectorAll(".js-hito")
                    }
                    ,
                    this.kill(),
                    this.once()
                },
                once:function() {
                    for(var t=0;
                    t<this.item.hit.length;
                    t++)if(this.item.hit[t].getAttribute("data-hit")) {
                        const s=this.item.hit[t], i=this.item.hit[t].getAttribute("data-hit").split(",");
                        for(var e=0;e<i.length;e++) {
                            let t=this._manager(s, i[e]);
                            this.conf.push(t)
                        }
                    }
                    for(t=0;t<this.item.hito.length;t++)
                        if(this.item.hito[t].getAttribute("data-hit")&&!this.item.hito[t].classList.contains("_hitAttach")) {
                        const s=this.item.hito[t], i=this.item.hito[t].getAttribute("data-hit").split(",");
                        for(e=0;
                        e<i.length;
                        e++) {
                            this._manager(s, i[e])
                        }
                        this.item.hito[t].classList.add("_hitAttach")
                    }
                },
                _manager:function(t,e) {
                    let s=null;
                    switch(e) {
                        case"toScroll": s=new Mt(t);
                        break;
                        case"aboutModal": s=new kt(t)
                    }
                    if(null!==s)return s
                }
                ,
                kill:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill();
                    this.conf.length=0
                }
            }
            ,
            Ct=class {
                constructor(t) {
                    this.el=t, this._wrap_=!!this.el.getAttribute("data-wrap"), this.ret=t.innerHTML, t.getAttribute("data-class")?(this.classes=t.getAttribute("data-class"), t.removeAttribute("data-class")): this.classes="", this.el.innerHTML="", this.bef=this.ret.split("<br>"), this.afr="", this.init()
                }
                init() {
                    this.el.classList.remove("js-tex"), this.splits()
                }
                splits() {
                    for(var t=0, e=this.bef.length; t<e; t++) {
                        let e=document.createElement("span"), i=this.bef[t].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), n=document.createTextNode(i);
                        e.className="_line", e.style.display="block", e.appendChild(n);
                        let o=e.innerHTML.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").split("");
                        e.innerHTML="";
                        for(var s=0;s<o.length;s++) {
                            let t=document.createElement("span"), i=document.createElement("span"), n=document.createTextNode(o[s]);
                            " "===o[s]&&(n=document.createTextNode(" ")), t.className="_o", i.className="_i "+this.classes, this._wrap_?(i.appendChild(n), t.appendChild(i), e.appendChild(t)): (i.appendChild(n), e.appendChild(i)), n=null, i=null, t=null
                        }
                        this.el.appendChild(e),
                        e=null,
                        i=null,
                        n=null
                    }
                    this.ret=null,
                    this.bef=null
                }
            }
            ,
            Ot= {
                init: function() {
                    this.item=h.body.querySelectorAll(".js-tex"), this.once()
                }
                ,
                once:function() {
                    for(var t=0;
                    t<this.item.length;
                    t++)new Ct(this.item[t])
                }
            }
            ,
            It= {
                init: function() {
                    this.item=h.body.querySelectorAll(".js-vh"), this.itemMin=h.body.querySelectorAll(".js-mvh"), this.setVH()
                }
                ,
                setVH:function() {
                    for(var t=0;
                    t<this.item.length;
                    t++)this.item[t].style.height=a.vh+"px";
                    for(t=0;
                    t<this.itemMin.length;
                    t++)this.itemMin[t].style.minHeight=a.vh+"px"
                }
                ,
                resize:function() {
                    this.setVH()
                }
            }
            ,
            Nt= {
                init: function() {
                    this.item=a.new.querySelectorAll(".js-imgheight"), this.setHeight()
                }
                ,
                setHeight:function() {
                    for(var t=0;
                    t<this.item.length;
                    t++) {
                        const e=this.item[t].querySelectorAll(".js-imgheight-tgt").length;
                        this.item[t].style.height=e*a.vw*.06944444+.4166666*3*a.vw+"px"
                    }
                }
                ,
                resize:function() {
                    this.setHeight()
                }
            }
            ,
            Dt=new class {
                constructor() {
                    this.item= {}, this.conf=[]
                }
                init() {
                    this.item=a.new.querySelectorAll(".js-pos"), this._kill(), this.once()
                }
                once() {
                    if(!0===a.load)for(var t=0, e=this.item.length;
                    t<e;
                    ++t)if("IntersectionObserver"in window) {
                        let e=this.item[t], s=(e.getAttribute("data-num"), this._default), i=e.getAttribute("data-rm")?e.getAttribute("data-rm"):"-10px", n=new IntersectionObserver(s, {
                            root: null, rootMargin: i, threshold: 0
                        }
                        );
                        n.observe(e),
                        this.conf.push(n)
                    }
                    else this.item[t].classList.add("is-v")
                }
                _default(t,
                e) {
                    for(var s=0;
                    s<t.length;
                    s++)t[s].isIntersecting&&t[s].target.classList.add("is-v")
                }
                _kill() {
                    for(var t=0;t<this.conf.length;t++)this.conf[t].disconnect(), this.conf[t]=null;
                    this.conf.length=0
                }
            }
            ,
            Rt= {
                init: function() {
                    this.item= {
                        gr: h.body.querySelectorAll(".js-tdg")
                    }
                    ,
                    this.set()
                }
                ,
                set:function() {
                    for(var t=0;
                    t<this.item.gr.length;
                    t++) {
                        let e=this.item.gr[t], s=e.querySelectorAll(".js-tdi"), i=Number(e.getAttribute("data-de-offset")), n=Number(e.getAttribute("data-de"));
                        this.deset(s, n, i)
                    }
                }
                ,
                deset:function(t,
                e,
                s) {
                    for(var i=0;
                    i<t.length;
                    i++) {
                        let n=t[i].style, o=e*i+s+"s";
                        n.transitionDelay=o, n.webkittransitionDelay=o, n.moztransitionDelay=o, n.mstransitionDelay=o
                    }
                }
            }
            ,
            Ut=new class {
                constructor() {
                    this.item= {}
                }
                init() {
                    this.item= {
                        gr: h.body.querySelectorAll(".js-tdr")
                    }
                    ,
                    this.set()
                }
                set() {
                    for(var t=0;
                    t<this.item.gr.length;
                    t++) {
                        let s=this.item.gr[t], i=[], n=s.querySelectorAll(".js-tdi"), o=Number(s.getAttribute("data-de-offset")), r=Number(s.getAttribute("data-de"));
                        i=Array.prototype.slice.call(n, 0);
                        for(var e=0;
                        e<i.length;
                        e++) {
                            let t=Math.floor(Math.random()*(e+1));
                            [i[e], i[t]]=[i[t], i[e]]
                        }
                        this.deset(i,
                        r,
                        o)
                    }
                }
                deset(t,
                e,
                s) {
                    for(var i=0;
                    i<t.length;
                    i++) {
                        let n=t[i].style, o=e*i+s+"s";
                        n.transitionDelay=o, n.webkittransitionDelay=o, n.moztransitionDelay=o, n.mstransitionDelay=o
                    }
                }
            }
            ,
            Ft=new class {
                constructor() {
                    this.progress=0, this.item= {}, this.ONCE=!1, this.PVT= {
                        x: 0, y: 0
                    }
                    ,
                    this.anim= {
                        showCount: {
                            speed: .3, ease: "power2.inOut"
                        }
                        ,
                        hide: {
                            speed: .8, ease: "power1.inOut"
                        }
                    }
                }
                init() {
                    const t=this;
                    this.item= {
                        wp: h.getElementById("js-ld"), prog: h.getElementById("js-ld").querySelectorAll(".js-ld-prg"), count: h.getElementById("js-ld").querySelectorAll(".js-ld-count"), siteContent: h.body.querySelectorAll(".-loadhidden"), pvt: h.getElementById("js-ld").querySelectorAll(".-p")
                    }
                    ,
                    this.FINISH_LOADING=t._onComplete.bind(this),
                    this.onGetSize=t._getSize.bind(this),
                    this.onMouseMove=t._mouseMove.bind(this),
                    this.onLoadComp=t._loadcomp.bind(this),
                    this.item.wp.addEventListener("mousemove",
                    this.onMouseMove,
                    !1),
                    window.addEventListener("resize",
                    this.onGetSize,
                    !1);
                    h.body.querySelectorAll("form").length<=0&&"entry"!==h.getElementById("js-ct").getAttribute("data-pj-dir")?(this.once(),
                    c.on("FINISH_LOADING",
                    this.FINISH_LOADING)):this._hideCount(),
                    c.on("COUNT_LOADING",
                    (e=> {
                        let {
                            detail: s
                        }
                        =e;
                        t._updateCount(s.progress)
                    }
                    ))
                }
                _hideCount() {
                    const t=this;
                    r.to(this.item.wp, {
                        duration: t.anim.hide.speed, opacity: 0, ease: t.anim.hide.ease, onComplete: function() {
                            a.load=!0, a.resize(), t.item.wp.removeEventListener("mousemove", t.onMouseMove, !1), window.removeEventListener("resize", t.onGetSize, !1), t.item.wp.parentNode.removeChild(t.item.wp), xe.load()
                        }
                    }
                    ),
                    r.to(this.item.siteContent,
                    {
                        duration: t.anim.hide.speed, opacity: 1, ease: t.anim.hide.ease
                    }
                    )
                }
                _loadcomp() {
                    const t=this;
                    r.to(this.item.wp, {
                        duration: t.anim.hide.speed, opacity: 0, ease: t.anim.hide.ease, onComplete: function() {
                            a.load=!0, a.resize(), t.item.wp.removeEventListener("mousemove", t.onMouseMove, !1), window.removeEventListener("resize", t.onGetSize, !1), t.item.wp.parentNode.removeChild(t.item.wp), xe.load()
                        }
                    }
                    ),
                    r.to(this.item.siteContent,
                    {
                        duration: t.anim.hide.speed, opacity: 1, ease: t.anim.hide.ease
                    }
                    )
                }
                _mouseMove(t) {
                    "is-pc"===a.act&&!0!==this.ONCE&&this._getSize()
                }
                _getSize(t) {
                    const e=this;
                    if("is-pc"===a.act) {
                        for(var s=0;
                        s<this.item.pvt.length;
                        s++) {
                            const t=this.item.pvt[s].getBoundingClientRect();
                            r.to(e.PVT, {
                                duration: .3, x: t.left, y: t.top, ease: "power1.out"
                            }
                            )
                        }
                        this.ONCE=!0
                    }
                }
                once() {
                    r.to(this.item.prog, {
                        duration: this.anim.showCount.speed, opacity: 1, ease: this.anim.showCount.ease
                    }
                    )
                }
                _updateCount(t) {
                    for(var e=0;
                    e<this.item.count.length;
                    e++)this.item.count[e].innerHTML=Math.round(100*t)
                }
                _update() {
                    if(!1===a.load&&"is-pc"===a.act)for(var t=0;
                    t<this.item.prog.length;
                    t++) {
                        const e=this.item.prog[t].style, s="translate3d("+(a.mouse.vx-this.PVT.x)+"px , "+(a.mouse.vy-this.PVT.y)+"px, 0)";
                        e.transform=s, e.webkitTransform=s, e.mozTransform=s, e.msTransform=s
                    }
                }
                _onComplete() {
                    const t=this;
                    r.to(this.item.wp, {
                        duration: t.anim.hide.speed, opacity: 0, ease: t.anim.hide.ease, onComplete: function() {
                            a.load=!0, a.resize(), t.item.wp.removeEventListener("mousemove", t.onMouseMove, !1), window.removeEventListener("resize", t.onGetSize, !1), t.item.wp.parentNode.removeChild(t.item.wp), c.off("FINISH_LOADING", t.FINISH_LOADING), xe.load()
                        }
                    }
                    ),
                    r.to(this.item.siteContent,
                    {
                        duration: t.anim.hide.speed, opacity: 1, ease: t.anim.hide.ease
                    }
                    )
                }
            }
            ;
            const zt=class {
                constructor(t) {
                    this.el=t, this.ISCHANGE=!1, this.PROG=0, this.PROGFAKE= {
                        v: 0
                    }
                    ,
                    this.item= {
                        one: t.querySelectorAll(".js-mv-one"), btn: t.querySelectorAll(".js-mv-btn"), prg: t.querySelectorAll(".js-mv-prg")
                    }
                    ,
                    this.anim= {
                        speed: .4, show: .08, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1"), min: "power1.out"
                    }
                    ,
                    this.onHit=this._hit.bind(this),
                    this.onUpdateNumber=this._updateNumber.bind(this),
                    this.onUpdateProgress=this._updateProgress.bind(this),
                    this.init()
                }
                init() {
                    this._attach()
                }
                _attach() {
                    for(var t=0;
                    t<this.item.btn.length;
                    t++)this.item.btn[t].addEventListener("click", this.onHit, !1);
                    c.on("UPDATE_FIRSTVIEW_NUM", this.onUpdateNumber), c.on("UPDATE_FIRSTVIEW_PROGRESS", this.onUpdateProgress)
                }
                _updateNumber(t) {
                    let {
                        detail: e
                    }
                    =t;
                    const s=this;
                    !1===this.ISCHANGE&&(this.ISCHANGE=!0,
                    this.PROGFAKE= {
                        v: 100*s.PROG-100
                    }
                    ,
                    r.killTweensOf(this.PROGFAKE),
                    r.to(s.PROGFAKE,
                    {
                        duration: s.anim.speed, v: 100, ease: s.anim.ease, onUpdate: function() {
                            s.currentChangeProgress()
                        }
                        ,
                        onComplete:function() {
                            r.fromTo(s.PROGFAKE, {
                                v: -100
                            }
                            ,
                            {
                                duration: s.anim.show, v: 100*s.PROG-100, ease: s.anim.min, onUpdate: function() {
                                    s.currentChangeProgress()
                                }
                                ,
                                onComplete:function() {
                                    s.ISCHANGE=!1
                                }
                            }
                            )
                        }
                    }
                    ))
                }
                currentChangeProgress() {
                    const t=this;
                    for(var e=0;
                    e<t.item.prg.length;
                    e++) {
                        const s=t.item.prg[e].style, i=e%2==0?1: -1, n="translate3d("+t.PROGFAKE.v*i+"%, 0, 0)";
                        s.transform=n, s.webkitTransform=n, s.mozTransform=n, s.msTransform=n
                    }
                }
                _updateProgress(t) {
                    let {
                        detail: e
                    }
                    =t;
                    const s=e.progress;
                    if(this.PROG=s,
                    !1===this.ISCHANGE)for(var i=0;
                    i<this.item.prg.length;
                    i++) {
                        const t=this.item.prg[i].style, e=i%2==0?100: -100, n="translate3d("+(-1*e+s*e)+"%, 0, 0)";
                        t.transform=n, t.webkitTransform=n, t.mozTransform=n, t.msTransform=n
                    }
                }
                _hit() {
                    c.emit("UPDATE_FIRSTVIEW_GONEXT")
                }
                _kill() {
                    return c.off("UPDATE_FIRSTVIEW_NUM", this.onUpdateNumber), c.off("UPDATE_FIRSTVIEW_PROGRESS", this.onUpdateProgress), null
                }
            }
            ,
            Vt= {
                conf: [], init: function() {
                    this.item=a.new.querySelectorAll(".js-mv"), this._kill(), this.once()
                }
                ,
                once:function() {
                    for(var t=0;
                    t<this.item.length;
                    t++)this.conf.push(new zt(this.item[t]))
                }
                ,
                _kill:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill(), this.conf[t]=null;
                    this.conf.length=0
                }
            }
            ,
            jt=class {
                constructor(t) {
                    this.el=t, this.swich=1025, this.path="", this.ovs=null, this.imgs=JSON.parse(t.getAttribute("data-src")), this._IMG_=new Image, this.onPre=this.pre.bind(this), t.removeAttribute("data-src"), this.conf(), this.init()
                }
                conf() {
                    this.imgs.mq&&(this.swich=Number(this.imgs.mq))
                }
                init() {
                    if(this.el.classList.contains("_fast"))this._imgLoading();
                    else if("IntersectionObserver"in window) {
                        let t=this.el, e=this._load.bind(this), s=new IntersectionObserver(e, {
                            root: null, rootMargin: "0px 0px 100px", threshold: 0
                        }
                        );
                        s.observe(t),
                        this.ovs=s
                    }
                    else this._imgLoading()
                }
                _load(t,
                e) {
                    for(var s=0;
                    s<t.length;
                    s++)t[s].isIntersecting&&!t[s].target.classList.contains("-l")&&(t[s].target.classList.add("-l"), this._imgLoading())
                }
                _imgLoading() {
                    this.path=this._getPath(), this._IMG_.addEventListener("load", this.onPre, !1), this._IMG_.src=this.path, this._setPath()
                }
                pre() {
                    this.el.classList.add("is-l"), this._IMG_.removeEventListener("load", this.onPre, !1), this._IMG_=null
                }
                _setPath() {
                    this.el.style.backgroundImage="url("+this.path+")"
                }
                _getPath() {
                    let t=this.imgs.sp;
                    return this.swich<=a.vw&&!1===a.dpr?t=this.imgs.pc: this.swich<=a.vw&&(t=this.imgs.retina), t
                }
                resize() {
                    let t=this._getPath();
                    t!==this.path&&this.el.classList.contains("is-l")&&(this.path=t, this._setPath())
                }
                _kill() {
                    null!==this.ovs&&(this.ovs.disconnect(), this.ovs=null), null!==this._IMG_&&(this._IMG_.removeEventListener("load", this.onPre, !1), this._IMG_=null)
                }
            }
            ,
            qt=new class {
                constructor() {
                    this.item= {}, this.conf=[], this.global=[]
                }
                init() {
                    this.glb=h.body.querySelectorAll(".js-bgo"), this.item=a.new.querySelectorAll(".js-bg"), this._kill(), this.once()
                }
                once() {
                    for(var t=0;
                    t<this.item.length;
                    t++) {
                        let e=new jt(this.item[t]);
                        this.conf.push(e)
                    }
                    for(t=0;
                    t<this.glb.length;
                    t++)if(!this.glb[t].classList.contains("_attach")) {
                        let e=new jt(this.glb[t]);
                        this.glb[t].classList.add("_attach"), this.global.push(e)
                    }
                }
                resize() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t].resize();
                    for(t=0;
                    t<this.global.length;
                    t++)this.global[t].resize()
                }
                _kill() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill();
                    this.conf.length=0
                }
            }
            ;
            const Gt=class {
                constructor(t) {
                    this.el=t, this.IV=!1, this.OVS=null, this.ONNEXT=this._onNext_.bind(this), this.TML=r.timeline( {
                        onComplete: this.ONNEXT
                    }
                    ),
                    this.SLIDES=[],
                    this._TIMER_= {
                        v: 0
                    }
                    ,
                    this.config= {
                        all: 0, from: 0, to: 0
                    }
                    ,
                    this.OPENINGPATH=[],
                    this.item= {
                        one: t.querySelectorAll(".js-jus-one"), item: t.querySelectorAll(".js-jus-item")
                    }
                    ,
                    this.anim= {
                        timer: 3, speed: 1, path: .04, delay: .16, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1"), scale: {
                            speed: 2, ease: "power4.out"
                        }
                    }
                    ,
                    this.init()
                }
                init() {
                    this.once()
                }
                once() {
                    const t=this;
                    this.TML.fromTo(this._TIMER_, {
                        v: 0
                    }
                    ,
                    {
                        duration: t.anim.timer, v: 100
                    }
                    ),
                    this.TML.pause();
                    for(var e=0;
                    e<this.item.one.length;
                    e++) {
                        const i=this.item.one[e].querySelectorAll(".js-jus-item"), n=[];
                        this.config.all=i.length;
                        for(var s=0;
                        s<this.config.all;
                        s++) {
                            const e=i[s], o=[ {
                                y: s===this.config.to?0: 100
                            }
                            ,
                            {
                                y: s===this.config.to?0: 100
                            }
                            ,
                            {
                                y: 100
                            }
                            ,
                            {
                                y: 100
                            }
                            ];
                            t._pathUpdate(e,
                            o),
                            n.push(o)
                        }
                        this.SLIDES.push( {
                            items: i, paths: n
                        }
                        ),
                        this.OPENINGPATH.push( {
                            tgt:t.item.one[e], path:[ {
                                y: 100
                            }
                            ,
                            {
                                y: 100
                            }
                            ,
                            {
                                y: 100
                            }
                            ,
                            {
                                y: 100
                            }
                            ]
                        }
                        )
                    }
                    if("IntersectionObserver"in window) {
                        r.set(this.item.one, {
                            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
                        }
                        );
                        const t=this._default.bind(this),
                        e= {
                            root: null, rootMargin: "0px", threshold: 0
                        }
                        ;
                        this.OVS=new IntersectionObserver(t,
                        e),
                        this.OVS.observe(this.el)
                    }
                    else this.TML.play()
                }
                _default(t,
                e) {
                    const s=this;
                    for(var i=0;
                    i<t.length;
                    i++)t[i].isIntersecting?(!1===s.IV&&(s.IV=!0, s._opening()), this.TML.play()): this.TML.pause()
                }
                _onNext_() {
                    this.config.from=this.config.to, this.config.to++, this.config.to>=this.config.all&&(this.config.to=0), this._engine()
                }
                _engine() {
                    const t=this;
                    this.TML.pause();
                    for(var e=0;
                    e<this.SLIDES.length;
                    e++) {
                        const i=this.SLIDES[e], n=e, o= {
                            item: i.items[this.config.from], paths: i.paths[this.config.from]
                        }
                        ,
                        a= {
                            item: i.items[this.config.to], in: i.items[this.config.to].querySelectorAll(".-in"), paths: i.paths[this.config.to]
                        }
                        ;
                        for(var s=0;
                        s<o.paths.length;
                        s++)r.to(o.paths[s],
                        {
                            duration: t.anim.speed, y: 0, ease: t.anim.ease, delay: t.anim.path*s+t.anim.delay*e, onUpdate: function() {
                                t._pathUpdate(o.item, o.paths)
                            }
                        }
                        );
                        for(s=0;
                        s<a.paths.length;
                        s++) {
                            const i=s;
                            r.fromTo(a.paths[s], {
                                y: 100
                            }
                            ,
                            {
                                duration: t.anim.speed, y: s<2?0: 100, ease: t.anim.ease, delay: t.anim.path*(s+2)+t.anim.delay*e, onUpdate: function() {
                                    t._pathUpdate(a.item, a.paths)
                                }
                                ,
                                onComplete:function() {
                                    n>=t.SLIDES.length-1&&i>=a.paths.length-1&&t.TML.restart()
                                }
                            }
                            )
                        }
                        for(s=0;
                        s<a.in.length;
                        s++) {
                            r.fromTo(a.in[s], {
                                scale: 1.4
                            }
                            ,
                            {
                                duration: t.anim.scale.speed, scale: 1, delay: t.anim.delay*s, ease: t.anim.scale.ease
                            }
                            )
                        }
                    }
                }
                _opening() {
                    const t=this;
                    for(var e=0;
                    e<this.OPENINGPATH.length;
                    e++) {
                        const i=this.OPENINGPATH[e].tgt, n=this.OPENINGPATH[e].path, o=e, a=i.querySelectorAll(".js-jus-item")[0].querySelectorAll(".-in");
                        r.fromTo(a, {
                            scale: 1.4
                        }
                        ,
                        {
                            duration: t.anim.scale.speed, scale: 1, delay: t.anim.delay*e, ease: t.anim.scale.ease
                        }
                        );
                        for(var s=0;
                        s<n.length;
                        s++) {
                            const a=s;
                            r.to(n[s], {
                                duration: t.anim.speed, y: s<2?0: 100, ease: t.anim.ease, delay: t.anim.path*s+t.anim.delay*e, onUpdate: function() {
                                    t._pathUpdate(i, n)
                                }
                                ,
                                onComplete:function() {
                                    0===o&&a>=n.length-1&&t.el.classList.add("is-fns"), o>=t.OPENINGPATH.length-1&&a>=n.length-1&&t.el.classList.add("is-inview")
                                }
                            }
                            )
                        }
                    }
                }
                _pathUpdate(t,
                e) {
                    t.style.clipPath=`polygon(0 $ {
                        e[0].y
                    }
                    %,
                    100% $ {
                        e[1].y
                    }
                    %,
                    100% $ {
                        e[3].y
                    }
                    %,
                    0% $ {
                        e[2].y
                    }
                    %)`
                }
                _kill() {
                    return null
                }
            }
            ,
            Bt= {
                conf: [], init: function() {
                    this.item=a.new.querySelectorAll(".js-jus"), this._kill(), this.once()
                }
                ,
                once:function() {
                    for(var t=0;
                    t<this.item.length;
                    t++)this.conf.push(new Gt(this.item[t]))
                }
                ,
                _kill:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill(), this.conf[t]=null;
                    this.conf.length=0
                }
            }
            ;
            const Ht=class {
                constructor(t) {
                    this.el=t, this.item= {
                        input: t.querySelectorAll("input[type=file]"), label: t.querySelectorAll(".js-file-name")
                    }
                    ,
                    this.onChange=this._change.bind(this),
                    this.onF=this._f.bind(this),
                    this.init()
                }
                init() {
                    this._attach(), setTimeout(this.onF, 200)
                }
                _f() {
                    const t=this;
                    for(var e=0;
                    e<this.item.input.length;
                    e++)this._change( {
                        target: t.item.input[e], currentTarget: t.item.input[e]
                    }
                    )
                }
                _attach() {
                    const t=this;
                    for(var e=0;
                    e<this.item.input.length;
                    e++)this._change( {
                        target: t.item.input[e], currentTarget: t.item.input[e]
                    }
                    ),
                    this.item.input[e].addEventListener("change",
                    this.onChange)
                }
                _change(t) {
                    const e=this, s=t.currentTarget;
                    for(var i=0;
                    i<s.files.length;
                    i++) {
                        const t=s.files[i];
                        15728640>=t.size?e._labelUpdate(t.name): (s.value=null, e._labelError())
                    }
                }
                _labelUpdate(t) {
                    const e=t?"add": "remove";
                    for(var s=0;
                    s<this.item.label.length;
                    s++)this.item.label[s].classList.remove("_err"), this.item.label[s].classList[e]("_hasitem"), this.item.label[s].innerHTML=t
                }
                _labelError() {
                    for(var t=0;
                    t<this.item.label.length;
                    t++)this.item.label[t].classList.add("_err"), this.item.label[t].innerHTML="ファイルの最大サイズは15MBです"
                }
                _kill() {
                    for(var t=0;
                    t<this.item.input.length;
                    t++)this.item.input[t].removeEventListener("change", this.onChange);
                    return null
                }
            }
            ,
            Yt= {
                conf: [], init: function() {
                    this.item=a.new.querySelectorAll(".js-file"), this._kill(), this.once()
                }
                ,
                once:function() {
                    for(var t=0;
                    t<this.item.length;
                    t++)this.conf.push(new Ht(this.item[t]))
                }
                ,
                _kill:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill(), this.conf[t]=null;
                    this.conf.length=0
                }
            }
            ,
            Wt=class {
                constructor(t) {
                    this.el=t, this.SUBMIT=!1, this.items= {
                        next: t.querySelectorAll(".js-fm-next"), tgt: t.querySelectorAll(".js-fm-tgt"), check: t.querySelectorAll(".js-fm-check")
                    }
                    ,
                    this.ANIM= {
                        speed: .4, ease: "power2.inOut"
                    }
                    ,
                    this.completeList= {},
                    this.onChange=this._change.bind(this),
                    this.onBlur=this._blur.bind(this),
                    this.onInput=this._input.bind(this),
                    this.onCheck=this._check.bind(this),
                    this.onReCheck=this._recheck.bind(this),
                    this._disable(),
                    this._addevents(),
                    setTimeout(this.onReCheck,
                    200)
                }
                selectCheck(t) {
                    const e=t.selectedIndex;
                    ""!==t.options[e].value?(t.classList.remove("is-err"), this.completeList[t.name]=!0): this.completeList[t.name]=!1, this._allcheck_()
                }
                _change(t) {
                    const e=t.target.selectedIndex;
                    ""!==t.target.options[e].value?(t.target.classList.remove("is-err"), this.completeList[t.target.name]=!0): (t.target.classList.add("is-err"), this.completeList[t.target.name]=!1), this._allcheck_()
                }
                _blur(t) {
                    const e=t.target.closest(".-req"), s=this;
                    if(!0===this.completeList[t.target.name]) {
                        if(t.target.classList.remove("is-err"), e) {
                            const n=e.querySelectorAll(".-valid-tgt"), o=e.querySelectorAll(".js-fm-tgt");
                            let h=0;
                            for(var i=0;
                            i<o.length;
                            i++)o[i]===t.target&&(h=i);
                            r.to(n[h], {
                                duration: s.ANIM.speed, height: 0, ease: s.ANIM.ease, onComplete: function() {
                                    a.resize()
                                }
                            }
                            )
                        }
                    }
                    else if(t.target.classList.add("is-err"),
                    e) {
                        const n=e.querySelectorAll(".-valid-tgt"), o=e.querySelectorAll(".js-fm-tgt");
                        let h=0, l=0;
                        for(i=0;
                        i<o.length;
                        i++)o[i]===t.target&&(h=i);
                        if(n&&n[h]) {
                            for(i=0;
                            i<n[h].querySelectorAll(".-valid-item").length;
                            i++)l=n[h].querySelectorAll(".-valid-item")[i].offsetHeight;
                            r.to(n[h], {
                                duration: s.ANIM.speed, height: l, ease: s.ANIM.ease, onComplete: function() {
                                    n[h].style.height="auto", a.resize()
                                }
                            }
                            )
                        }
                    }
                }
                _input(t) {
                    switch(t.target.type) {
                        case"tel": const s=t.target.value.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi, "");
                        t.target.classList.contains("-check")?s.match(/^(0[5-9]0[0-9] {8} 0[1-9][1-9][0-9] {7} )$/)||0===t.target.value.length?this.completeList[t.target.name]=!0:this.completeList[t.target.name]=!1:s.match(/^(0[5-9]0[0-9] {8} |0[1-9][1-9][0-9] {7} )$/)?this.completeList[t.target.name]=!0:this.completeList[t.target.name]=!1;                
                        break;
                        case"email":const i=t.target.getAttribute("data-fix")?t.target.getAttribute("data-fix"):null,
                        n=t.target.getAttribute("data-fixid")?t.target.getAttribute("data-fixid"):null;
                        if(t.target.value.match(/^[A-Za-z0-9] {1} [A-Za-z0-9_.-]*@ {1}[A-Za-z0-9_.-] {1,} \.[A-Za-z0-9] {1,} $/)?this.completeList[t.target.name]=!0:this.completeList[t.target.name]=!1,i&&this.el.querySelectorAll(`input[name=$ {i}]`).length>0) {const s=this.el.querySelectorAll(`input[name=$ {i}]`);
                            for(var e=0;
                            e<s.length;
                            e++)s[e].value!==t.target.value&&(this.completeList[t.target.name]=!1)
                        }
                        if(n&&h.getElementById(n)) {
                            h.getElementById(n).value!==t.target.value&&(this.completeList[t.target.name]=!1)
                        }
                        break;
                        default:const o=t.target.getAttribute("data-length")?Number(t.target.getAttribute("data-length")):null,
                        r=null!==t.target.getAttribute("data-number"),
                        a=new RegExp(o?`^[0-9] {
                            $ {
                                o
                            }
                        }
                        $`:"^[0-9]{1,}$");
                        o||r?t.target.classList.contains("-check")?t.target.value.match(a)||0===t.target.value.length?this.completeList[t.target.name]=!0:this.completeList[t.target.name]=!1:t.target.value.match(a)?this.completeList[t.target.name]=!0:this.completeList[t.target.name]=!1:t.target.classList.contains("-check")?t.target.value.match(/^[ \r\n\t]*$/)&&0!==t.target.value.length?this.completeList[t.target.name]=!1:this.completeList[t.target.name]=!0:t.target.value.match(/^[ \r\n\t]*$/)?this.completeList[t.target.name]=!1:this.completeList[t.target.name]=!0
                    }
                    this._allcheck_()
                }
                _check(t,
                e) {
                    const s=t.target.closest(".-req"), i=this;
                    if(!1===this.completeList[t.target.name]) {
                        const e=a.new.querySelectorAll(`[name=$ {
                            t.target.name
                        }
                        ]`);
                        let s=!1;
                        for(var n=0;
                        n<e.length;
                        n++)!1===s&&(s=e[n].checked);
                        this.completeList[t.target.name]=s
                    }
                    if(!0===this.completeList[t.target.name]&&(t.target.classList.remove("is-err"),
                    s)) {
                        const e=s.querySelectorAll(".-valid-tgt"), o=s.querySelectorAll(".js-fm-tgt");
                        let h=0;
                        for(n=0;
                        n<o.length;
                        n++)o[n]===t.target&&(h=n);
                        h=e[h]?h:0, r.to(e[h], {
                            duration: i.ANIM.speed, height: 0, ease: i.ANIM.ease, onComplete: function() {
                                a.resize()
                            }
                        }
                        )
                    }
                    void 0!==e||s||(!0===t.target.checked?t.target.classList.remove("is-err"):t.target.classList.add("is-err")),
                    this._allcheck_()
                }
                _allcheck_() {
                    let t=!0;
                    for(let e of Object.keys(this.completeList))this.completeList[e]||(t=!1);
                    !0===t?this._release(): this._disable()
                }
                _recheck() {
                    for(var t=0;
                    t<this.items.tgt.length;
                    t++) {
                        const e=this.items.tgt[t].tagName, s=this.items.tgt[t];
                        switch(this.completeList[s.name]=!1, e) {
                            case"SELECT": this.selectCheck(s);
                            break;
                            case"INPUT": switch(s.type) {
                                case"checkbox":case"radio":this._check( {
                                    target: s
                                }
                                ,
                                !0);
                                break;
                                default:this._input( {
                                    target: s
                                }
                                ),
                                ""!==s.value&&this._blur( {
                                    target: s
                                }
                                )
                            }
                            break;
                            case"TEXTAREA":this._input( {
                                target: s
                            }
                            ),
                            ""!==s.value&&this._blur( {
                                target: s
                            }
                            )
                        }
                    }
                    for(t=0;
                    t<this.items.check.length;
                    t++) {
                        const e=this.items.check[t].tagName, s=this.items.check[t];
                        switch(this.completeList[s.name]=!0, e) {
                            case"SELECT": this.selectCheck(s);
                            break;
                            case"INPUT": switch(s.type) {
                                case"checkbox":case"radio":this._check( {
                                    target: s
                                }
                                );
                                break;
                                default:this._input( {
                                    target: s
                                }
                                )
                            }
                            break;
                            case"TEXTAREA":this._check( {
                                target: s
                            }
                            )
                        }
                    }
                    this._allcheck_()
                }
                _addevents() {
                    for(var t=0;
                    t<this.items.tgt.length;
                    t++) {
                        const e=this.items.tgt[t].tagName, s=this.items.tgt[t];
                        switch(this.completeList[s.name]=!1, e) {
                            case"SELECT": s.addEventListener("change", this.onChange, !1), s.addEventListener("blur", this.onBlur, !1), this.selectCheck(s);
                            break;
                            case"INPUT": switch(s.type) {
                                case"checkbox": case"radio": s.addEventListener("change", this.onCheck, !1), this._check( {
                                    target: s
                                }
                                ,
                                !0);
                                break;
                                default:s.addEventListener("input",
                                this.onInput,
                                !1),
                                s.addEventListener("blur",
                                this.onBlur,
                                !1),
                                s.addEventListener("blurDispatch",
                                this.onBlur,
                                !1),
                                this._input( {
                                    target: s
                                }
                                ),
                                ""!==s.value&&this._blur( {
                                    target: s
                                }
                                )
                            }
                            break;
                            case"TEXTAREA":s.addEventListener("input",
                            this.onInput,
                            !1),
                            s.addEventListener("blur",
                            this.onBlur,
                            !1),
                            this._input( {
                                target: s
                            }
                            ),
                            ""!==s.value&&this._blur( {
                                target: s
                            }
                            )
                        }
                    }
                    for(t=0;
                    t<this.items.check.length;
                    t++) {
                        const e=this.items.check[t].tagName, s=this.items.check[t];
                        switch(this.completeList[s.name]=!0, e) {
                            case"SELECT": s.addEventListener("change", this.onChange, !1), s.addEventListener("blur", this.onBlur, !1), this.selectCheck(s);
                            break;
                            case"INPUT": switch(s.type) {
                                case"checkbox": case"radio": s.addEventListener("change", this.onCheck, !1), this._check( {
                                    target: s
                                }
                                );
                                break;
                                default:s.addEventListener("input",
                                this.onInput,
                                !1),
                                s.addEventListener("blur",
                                this.onBlur,
                                !1),
                                s.addEventListener("blurDispatch",
                                this.onBlur,
                                !1),
                                this._input( {
                                    target: s
                                }
                                )
                            }
                            break;
                            case"TEXTAREA":s.addEventListener("input",
                            this.onInput,
                            !1),
                            s.addEventListener("blur",
                            this.onBlur,
                            !1),
                            this._check( {
                                target: s
                            }
                            )
                        }
                    }
                    this._allcheck_()
                }
                _kill() {
                    for(var t=0;
                    t<this.items.tgt.length;
                    t++) {
                        const e=this.items.tgt[t].tagName, s=this.items.tgt[t];
                        switch(this.completeList[s.name]=!1, e) {
                            case"SELECT": s.removeEventListener("change", this.onChange, !1), s.removeEventListener("blur", this.onBlur, !1);
                            break;
                            case"INPUT": switch(s.type) {
                                case"checkbox": case"radio": s.removeEventListener("change", this.onCheck, !1);
                                break;
                                default: s.removeEventListener("input", this.onInput, !1), s.removeEventListener("blur", this.onBlur, !1), s.removeEventListener("blurDispatch", this.onBlur, !1)
                            }
                            break;
                            case"TEXTAREA":s.removeEventListener("input",
                            this.onInput,
                            !1),
                            s.removeEventListener("blur",
                            this.onBlur,
                            !1)
                        }
                    }
                    for(t=0;
                    t<this.items.check.length;
                    t++) {
                        const e=this.items.check[t].tagName, s=this.items.check[t];
                        switch(this.completeList[s.name]=!1, e) {
                            case"SELECT": s.removeEventListener("change", this.onChange, !1), s.removeEventListener("blur", this.onBlur, !1);
                            break;
                            case"INPUT": switch(s.type) {
                                case"checkbox": case"radio": s.removeEventListener("change", this.onCheck, !1);
                                break;
                                default: s.removeEventListener("input", this.onInput, !1), s.removeEventListener("blur", this.onBlur, !1), s.removeEventListener("blurDispatch", this.onBlur, !1)
                            }
                            break;
                            case"TEXTAREA":s.removeEventListener("input",
                            this.onInput,
                            !1),
                            s.removeEventListener("blur",
                            this.onBlur,
                            !1)
                        }
                    }
                }
                _disable() {
                    for(var t=0;
                    t<this.items.next.length;
                    t++)this.items.next[t].disabled=!0
                }
                _release() {
                    for(var t=0;
                    t<this.items.next.length;
                    t++)this.items.next[t].disabled=!1
                }
            }
            ,
            Xt=new class {
                constructor() {
                    this.item= {}, this.conf=[]
                }
                init() {
                    this.item=a.new.querySelectorAll(".js-fm"), this.kill(), this.once()
                }
                once() {
                    for(var t=0;
                    t<this.item.length;
                    t++) {
                        let e=new Wt(this.item[t]);
                        this.conf.push(e)
                    }
                }
                kill() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill();
                    this.conf.length=0
                }
            }
            ;
            function $t(t) {
                let e=window.location.search.substring(1).split("&");
                for(var s=0;
                s<e.length;
                s++) {
                    var i=e[s].split("=");
                    if(i[0]==t)return i[1]
                }
            }
            const Kt=new class {
                constructor() {
                    this.DEFAULT=null, this.FORMATTR="width=device-width,initial-scale=1,maximum-scale=1.0,viewport-fit=cover", this.NOW=null, this.DEF=h.head.querySelectorAll("meta[name=viewport]");
                    for(var t=0;
                    t<this.DEF.length;
                    t++)this.DEFAULT=this.DEF[t].content;
                    this.NOW=this.DEFAULT
                }
                init() {
                    if(this.item=a.new.querySelectorAll("form"), this.select=a.new.querySelectorAll("select"), this.item.length>0&&this.NOW!==this.FORMATTR)for(var t=0;
                    t<this.DEF.length;
                    t++)this.DEF[t].content=this.FORMATTR, this.NOW=this.FORMATTR;
                    else if(this.item.length<=0&&this.NOW!==this.DEFAULT)for(t=0;
                    t<this.DEF.length;
                    t++)this.DEF[t].content=this.DEFAULT, this.NOW=this.DEFAULT;
                    for(t=0;
                    t<this.select.length;
                    t++)this._setSelect(this.select[t])
                }
                _setSelect(t) {
                    const e=$t(t.name);
                    if(void 0!==e)for(var s=0;
                    s<t.options.length;
                    s++)t.options[s].value===e&&(t.selectedIndex=s)
                }
            }
            ;
            const Zt=class {
                constructor(t) {
                    this.el=t, this.USEHOVER="click"===a.evt, this.STATE=!1, this.SCROLL=0, this.EP= {
                        x: 0, y: 0, w: 0, h: 0
                    }
                    ,
                    this.X=0,
                    this.Y=0,
                    this.TGT= {
                        f: 0, t: 0
                    }
                    ,
                    this.onMe=this._mouseEnter.bind(this),
                    this.onMl=this._mouseLeave.bind(this),
                    this.onUpdate=this._update.bind(this),
                    this.item= {
                        mvs: t.querySelectorAll(".js-crw-items"), tgt: t.querySelectorAll(".js-crw-tgt"), mv: t.querySelectorAll(".js-crw-mv"), stg: t.querySelectorAll(".js-crw-stg"), strk: t.querySelectorAll(".js-crw-strk")
                    }
                    ,
                    this.POS= {
                        x: 0, y: 0
                    }
                    ,
                    this.anim= {
                        sh: {
                            speed: .5, ease: "power1.inOut"
                        }
                        ,
                        speed:.6,
                        ease:o.t.create("BTN",
                        "M0,0 C0.404,0.098 0.162,1 1,1")
                    }
                    ,
                    this.init()
                }
                init() {
                    this.once(), this._attach(), this._getSize()
                }
                _getSize() {
                    this.POS.x=0, this.POS.y=0;
                    const t=this.item.stg.length>0?this.item.stg[0]: null;
                    if(null!==t) {
                        const e=t.getBoundingClientRect();
                        this.POS.x=e.left, this.POS.y=e.top+a.scroll.pos
                    }
                }
                _attach() {
                    const t=this;
                    if(!0===this.USEHOVER)for(var e=0;
                    e<this.item.tgt.length;
                    e++)this.item.tgt[e].setAttribute("data-cunt", e), this.item.tgt[e].addEventListener("mouseenter", this.onMe, !1), this.item.tgt[e].addEventListener("mouseleave", this.onMl, !1), c.on(u, t.onUpdate)
                }
                _mouseEnter(t) {
                    const e=this, s=t.currentTarget;
                    e.el.classList.add("_hv"), s.classList.add("is-sel"), this.SCROLL=a.scroll.pos, this.TGT.t=Number(s.getAttribute("data-cunt"));
                    const i=this.item.strk[this.TGT.t], n=i.querySelectorAll(".-i"), o=i.querySelectorAll("video"), h=s.getBoundingClientRect();
                    for(var l=0;
                    l<o.length;
                    l++)o[l].play();
                    this.EP.x=h.left, this.EP.y=h.top, this.EP.w=h.width, this.EP.h=h.height, this.STATE=!0, r.killTweensOf(this.item.stg), r.to(this.item.stg, {
                        duration: e.anim.sh.speed, opacity: 1, ease: e.anim.sh.ease
                    }
                    ),
                    r.killTweensOf([i,
                    n]),
                    r.to([i,
                    n],
                    {
                        duration: e.anim.speed, xPercent: 0, ease: e.anim.ease
                    }
                    )
                }
                _mouseLeave(t) {
                    const e=this, s=t.currentTarget;
                    e.el.classList.remove("_hv"), s.classList.remove("is-sel"), this.TGT.f=Number(s.getAttribute("data-cunt"));
                    const i=this.item.strk[this.TGT.f], n=i.querySelectorAll(".-i"), o=i.querySelectorAll("video");
                    this.STATE=!1, r.to(this.item.stg, {
                        duration: e.anim.sh.speed, opacity: 0, ease: e.anim.sh.ease
                    }
                    ),
                    r.to(i,
                    {
                        duration: e.anim.speed, xPercent: -100, ease: e.anim.ease
                    }
                    ),
                    r.to(n,
                    {
                        duration: e.anim.speed, xPercent: 100, ease: e.anim.ease, onComplete: function() {
                            r.set(i, {
                                xPercent: 100
                            }
                            ),
                            r.set(n,
                            {
                                xPercent: -100
                            }
                            );
                            for(var t=0;
                            t<o.length;
                            t++)o[t].pause()
                        }
                    }
                    )
                }
                _update() {
                    if(!1===this.STATE)return;
                    const t=this.item.mvs.length>0?this.item.mvs[0]: null, e=this.SCROLL-a.scroll.pos, s=(a.mouse.x-this.EP.x)/this.EP.w, i=a.mouse.y+this.SCROLL-this.POS.y-e;
                    this.Y=bt(this.Y, i, .1);
                    const n=5*(1-s)-35, o=this.EP.w*(.05*s), r=t.style, h="translate3d("+o+"px , "+this.Y+"px, 0) rotateY("+n+"deg)";
                    r.transform=h, r.webkitTransform=h, r.mozTransform=h, r.msTransform=h
                }
                once() {
                    if(!0===this.USEHOVER)this.el.classList.add("is-hover"), r.set(this.item.stg, {
                        opacity: 0
                    }
                    ),
                    this._addMovies();
                    else for(var t=0;
                    t<this.item.mv.length;
                    t++)this.item.mv[t].play()
                }
                _addMovies() {
                    const t=[], e=this.item.mvs.length>0?this.item.mvs[0]: null;
                    for(var s=0;
                    s<this.item.mv.length;
                    s++) {
                        let e=this.item.mv[s].cloneNode(!0), n=this.item.mv[s].parentNode.querySelectorAll(".-mask"), o=null;
                        for(var i=0;
                        i<n.length;
                        i++)o=n[i].cloneNode(!0);
                        this.item.mv[s].parentNode&&this.item.mv[s].parentNode.removeChild(this.item.mv[s]);
                        let r=document.createElement("div"), a=document.createElement("div");
                        r.className="_wp js-crw-strk", a.className="_bd -i", a.appendChild(e), null!==o&&a.appendChild(o), r.appendChild(a), t.push(r), r=null, a=null, e=null
                    }
                    if(null!==e)for(s=0;
                    s<t.length;
                    s++)e.appendChild(t[s]);
                    this.item.strk=this.el.querySelectorAll(".js-crw-strk");
                    const n=this.el.querySelectorAll(".-i");
                    r.set(this.item.strk,
                    {
                        xPercent: 100
                    }
                    ),
                    r.set(n,
                    {
                        xPercent: -100
                    }
                    )
                }
                resize() {
                    this._getSize()
                }
                _kill() {
                    if(!0===this.USEHOVER)for(var t=0;
                    t<this.item.tgt.length;
                    t++)this.item.tgt[t].removeEventListener("mouseenter", this.onMe, !1), this.item.tgt[t].removeEventListener("mouseleave", this.onMl, !1);
                    return null
                }
            }
            ,
            Jt= {
                conf: [], init: function() {
                    this.item=a.new.querySelectorAll(".js-crw"), this._kill(), this.once()
                }
                ,
                once:function() {
                    for(var t=0;
                    t<this.item.length;
                    t++)this.conf.push(new Zt(this.item[t]))
                }
                ,
                resize:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t].resize()
                }
                ,
                _kill:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill(), this.conf[t]=null;
                    this.conf.length=0
                }
            }
            ,
            Qt=class {
                constructor(t) {
                    this.el=t, this.HASH=$t("job"), this.HASITEM=!1, this.item= {
                        wrap: t, list: t.querySelectorAll(".js-swicharea-list"), one: t.querySelectorAll(".js-swicharea-one"), select: t.querySelectorAll(".js-swicharea-select"), ipt: t.querySelectorAll(".js-swicharea-ipt"), btn: t.querySelectorAll(".js-swicharea-btn")
                    }
                    ,
                    this.anim= {
                        speed: .4, delay: .4, ease: "power2.inOut"
                    }
                    ,
                    this.onSelect=this._select.bind(this),
                    this.onChange=this._change.bind(this),
                    this.onClick=this._click.bind(this),
                    this.init()
                }
                init() {
                    this.once(), this.size(), this._setPosition()
                }
                _setPosition() {
                    if(void 0!==this.HASH&&!0===this.HASITEM) {
                        const t=this;
                        setTimeout((function() {
                            const e=t.el.getBoundingClientRect().top-50;
                            null!==gt.smoothScroll&&gt.smoothScroll.scrollTo(0, e, 800)
                        }
                        ),
                        500)
                    }
                }
                once() {
                    let t=0;
                    if(void 0!==this.HASH)for(var e=0;
                    e<this.item.one.length;
                    e++)this.HASH===this.item.one[e].id&&(t=e, this.HASITEM=!0);
                    for(e=0;
                    e<this.item.one.length;
                    e++)r.set(this.item.one[e], {
                        autoAlpha: e!==t?0: 1, pointerEvents: e!==t?"none": "inherit"
                    }
                    );
                    for(e=0;
                    e<this.item.select.length;
                    e++)this.item.select[e].addEventListener("change",
                    this.onSelect,
                    !1);
                    for(e=0;
                    e<this.item.ipt.length;
                    e++)this.item.ipt[e].addEventListener("change",
                    this.onChange,
                    !1);
                    for(e=0;
                    e<this.item.btn.length;
                    e++)e===t&&this.item.btn[e].classList.add("is-select"),
                    this.item.btn[e].addEventListener("click",
                    this.onClick,
                    !1)
                }
                size() {
                    let t=0;
                    for(var e=0;
                    e<this.item.one.length;
                    e++) {
                        const s=this.item.one[e].offsetHeight;
                        t<s&&(t=s)
                    }
                    for(e=0;
                    e<this.item.list.length;
                    e++)this.item.list[e].style.height=t+"px"
                }
                _click(t) {
                    const e=this, s=t.currentTarget.getAttribute("data-tgt")?t.currentTarget.getAttribute("data-tgt"): null, i=h.getElementById(s);
                    if(i) {
                        for(var n=0;
                        n<this.item.btn.length;
                        n++)this.item.btn[n].classList.remove("is-select");
                        t.currentTarget.classList.add("is-select"), r.killTweensOf(this.item.one), r.to(this.item.one, {
                            duration: e.anim.speed, autoAlpha: 0, pointerEvents: "none", ease: e.anim.ease
                        }
                        ),
                        r.killTweensOf(i),
                        r.to(i,
                        {
                            duration: e.anim.speed, autoAlpha: 1, delay: e.anim.delay, ease: e.anim.ease, clearProps: "pointerEvents"
                        }
                        )
                    }
                }
                _change(t) {
                    const e=this, s=t.currentTarget.checked?t.currentTarget.value: null, i=h.getElementById(s);
                    i&&(r.killTweensOf(this.item.one), r.to(this.item.one, {
                        duration: e.anim.speed, autoAlpha: 0, pointerEvents: "none", ease: e.anim.ease
                    }
                    ),
                    r.killTweensOf(i),
                    r.to(i,
                    {
                        duration: e.anim.speed, autoAlpha: 1, delay: e.anim.delay, ease: e.anim.ease, clearProps: "pointerEvents"
                    }
                    ))
                }
                _select(t) {
                    const e=this, s=t.currentTarget.options[t.currentTarget.selectedIndex].value, i=h.getElementById(s);
                    i&&(r.killTweensOf(this.item.one), r.to(this.item.one, {
                        duration: e.anim.speed, autoAlpha: 0, pointerEvents: "none", ease: e.anim.ease
                    }
                    ),
                    r.killTweensOf(i),
                    r.to(i,
                    {
                        duration: e.anim.speed, autoAlpha: 1, delay: e.anim.delay, ease: e.anim.ease, clearProps: "pointerEvents"
                    }
                    ))
                }
                resize() {
                    this.size()
                }
                _kill() {
                    for(var t=0;
                    t<this.item.select.length;
                    t++)this.item.select[t].removeEventListener("change", this.onSelect, !1);
                    for(t=0;
                    t<this.item.ipt.length;
                    t++)this.item.ipt[t].removeEventListener("change", this.onChange, !1)
                }
            }
            ,
            te=new class {
                constructor() {
                    this.item= {}, this.conf=[]
                }
                init() {
                    this.conf.length=0, this.item= {
                        ph: a.new.querySelectorAll(".js-swicharea")
                    }
                    ,
                    this.once()
                }
                once() {
                    for(var t=0;
                    t<this.item.ph.length;
                    t++) {
                        let e=new Qt(this.item.ph[t]);
                        this.conf.push(e)
                    }
                }
                resize() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t].resize()
                }
                _kill() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill(), this.conf[t]=null;
                    this.conf.length=0
                }
            }
            ,
            ee=("undefined"==typeof window||window.ontouchstart,
            function(t) {
                let e=!1;
                try {
                    window.addEventListener("test", null, Object.defineProperty( {}, "passive", {
                        get: function() {
                            e=!0
                        }
                    }
                    ))
                }
                catch(t) {}return!0===e&& {
                    passive: t
                }
            }
            ),
            se="undefined"==typeof window||void 0!==window.ontouchstart,
            ie= {
                start: !0===se?"touchstart": "mousedown", move: !0===se?"touchmove": "mousemove", end: !0===se?"touchend": "mouseup", passivefalse: !0===se&&ee(!1), passivetrue: !0===se&&ee(!0)
            }
            ,
            ne=9,
            oe=class {
                constructor(t) {
                    this.el=t, this.WPEL=a.new.querySelector(".scroll-content"), this.items= {
                        win: t.querySelectorAll(".js-sl-win"), list: t.querySelectorAll(".js-sl-list"), one: t.querySelectorAll(".js-sl-one"), counter: t.querySelectorAll(".js-sl-counts"), indicator: t.querySelectorAll(".js-sl-id"), allCount: t.querySelectorAll(".js-sl-all"), btn: t.querySelectorAll(".js-sl-btn"), link: t.querySelectorAll("a[href]"), mk: t.querySelectorAll(".js-sl-mk"), dots: t.querySelectorAll(".js-sl-dots"), count: t.querySelectorAll(".js-sl-dot")
                    }
                    ,
                    this.anim= {
                        speed: .6, hide: .2, delay: .1, ease: o.t.create("EASE", "M0,0 C0.4,0.2 0.2,1 1,1 ")
                    }
                    ,
                    this.postinos=[],
                    this.state= {
                        move: !1, current: 0, start: !1
                    }
                    ,
                    this.values= {
                        t: {
                            x: 0, y: 0
                        }
                        ,
                        s: {
                            x: 0, y: 0
                        }
                        ,
                        m: {
                            x: 0, y: 0
                        }
                        ,
                        e: {
                            x: 0, y: 0
                        }
                        ,
                        c: {
                            x: 0, y: 0
                        }
                        ,
                        p: {
                            x: 0, y: 0
                        }
                    }
                    ,
                    this.config= {
                        all: 0, hasIndicator: !1, hasCounter: !1, hasDots: !1, amount: 0, win: 0, allval: 0, viewport: 0, option: null
                    }
                    ,
                    this.onBtn=this._btn.bind(this),
                    this.onStart=this._start.bind(this),
                    this.onMove=this._move.bind(this),
                    this.onEnd=this._end.bind(this),
                    this.onLink=this._link.bind(this),
                    this.onLinkMove=this._linkMove.bind(this),
                    this.onLinkDown=this._linkDown.bind(this),
                    this.onKeyDown=this._keyDown.bind(this),
                    this.onDot=this._dot.bind(this),
                    this.init()
                }
                init() {
                    this.once(), this._attach(), this.getSize()
                }
                getSize() {
                    const t= {
                        w: 0, h: 0, x: 0, y: 0
                    }
                    ;
                    this._killScroll();
                    let e=0;
                    if(this.items.win.length>0) {
                        e-=this.items.win[0].offsetWidth, this.config.viewport=this.items.win[0].offsetWidth;
                        const s=this.items.win[0].getBoundingClientRect();
                        t.w=s.width, t.h=s.height, t.x=s.top, t.y=s.left
                    }
                    this.items.list.length>0&&(e+=this.items.list[0].offsetWidth,
                    this.config.allval=this.items.list[0].offsetWidth),
                    this.config.amount=e,
                    this.items.one.length>1?this.config.win=this.items.one[1].getBoundingClientRect().left-this.items.one[0].getBoundingClientRect().left:this.config.win=this.config.viewport;
                    for(var s=0;
                    s<this.postinos.length;
                    s++) {
                        const e=this.postinos[s].i.getBoundingClientRect();
                        this.postinos[s].w=e.width, this.postinos[s].h=e.height, this.postinos[s].t=e.top-t.x, this.postinos[s].l=e.left-t.y+this.values.c.x
                    }
                    this.values.m.x=this.state.current*this.config.win
                }
                _btn(t) {
                    const e=t.currentTarget;
                    if("prev"===(e.getAttribute("data-dir")?e.getAttribute("data-dir"): "next"))this.state.current--;
                    else this.state.current++;
                    this.state.current<0&&(this.state.current=this.config.all-1), this.state.current>=this.config.all&&(this.state.current=0), this.state.current=Math.max(Math.min(this.state.current, this.config.all-1), 0), this.values.m.x=this.state.current*this.config.win, this._btnCheck()
                }
                _dot(t) {
                    const e=t.currentTarget;
                    this.state.current=e.getAttribute("data-num")?Number(e.getAttribute("data-num")): 0, this.values.m.x=this.state.current*this.config.win, this._btnCheck()
                }
                _btnCheck() {
                    for(var t=0;
                    t<this.items.btn.length;
                    t++) {
                        const e=this.items.btn[t];
                        e.getAttribute("data-dir")&&e.getAttribute("data-dir")
                    }
                    if(this.config.hasDots)for(t=0;
                    t<this.items.dot.length;
                    t++) {
                        const e=Number(this.items.dot[t].getAttribute("data-num"));
                        this.state.current===e?this.items.dot[t].classList.add("is-current"): this.items.dot[t].classList.remove("is-current")
                    }
                    this._killScroll()
                }
                _start(t) {
                    t.currentTarget;
                    this.state.start=!0, this.values.s.x=("touchstart"===ie.start?t.touches[0].pageX: t.clientX)+this.values.m.x, this.values.s.y=("touchstart"===ie.start?t.touches[0].pageY: t.clientY)+this.values.m.y, this.values.t.x="touchstart"===ie.start?t.touches[0].pageX: t.clientX, this.values.t.y="touchstart"===ie.start?t.touches[0].pageY: t.clientY
                }
                _move(t) {
                    t.currentTarget;
                    if(!1===this.state.start)return;
                    let e="touchstart"===ie.start?t.touches[0].pageX: t.clientX, s="touchstart"===ie.start?t.touches[0].pageY: t.clientY;
                    const i=this.values.t.x-e, n=this.values.t.y-s;
                    this.values.m.x=this.values.s.x-e+.4*i, this.values.m.y=this.values.s.y-s+.4*n, (i<=-30||i>=30)&&t.cancelable&&(t.stopPropagation(), t.preventDefault())
                }
                _end(t) {
                    t.currentTarget;
                    !1!==this.state.start&&(this.state.start=!1, this._check())
                }
                _check() {
                    const t=a.vw>=1e3?.01: .02, e=Math.max(Math.min(Math.round((this.values.c.x+this.values.p.x*t*this.config.win)/this.config.win), this.config.all-1), 0);
                    this.state.current=e, this._killScroll(), this.values.m.x=this.state.current*this.config.win, this._btnCheck()
                }
                _update() {
                    const t=this.values.c.x, e=!0===this.state.start?.15: .08;
                    this.values.c.x+=this._ease_(this.values.m.x, this.values.c.x, e);
                    const s=t-this.values.c.x;
                    if(this.values.p.x-=s+this.values.p.x, this.values.p.x=Math.round(1e3*this.values.p.x)/1e3, this.values.p.x<1&&this.values.p.x>-1?this.state.move=!1: this.state.move=!0, !0===this.config.hasIndicator) {
                        const t=Math.max(Math.min((this.config.viewport+this.values.c.x)/this.config.allval, 1), 0), e="translate3d("+100*(Math.round(1e3*(t-1))/1e3)+"%, 0, 0)";
                        for(var i=0;i<this.items.indicator.length;i++) {
                            const t=this.items.indicator[i].style;
                            t.transform=e, t.webkitTransform=e, t.mozTransform=e, t.msTransform=e
                        }
                    }
                    if(!0===this.config.hasCounter) {
                        const t=this.values.c.x/this.config.amount*(this.config.all-1), e="translate3d("+-100*t+"%, 0, 0)";
                        for(i=0; i<this.items.counter.length; i++) {
                            const t=this.items.counter[i].style;
                            t.transform=e, t.webkitTransform=e, t.mozTransform=e, t.msTransform=e
                        }
                        const s=Math.round(t),
                        n=(this.values.c.x-this.config.win*s)/this.config.win;
                        for(i=0;i<this.items.count.length;i++)if(i>=s-1&&i<=s+1) {
                            let t=n+1;
                            i===s-1?t=-1*n: i===s+1&&(t=n), this.items.count[i].style.setProperty("--prog", t)
                        }
                        else this.items.count[i].style.setProperty("--prog", 0)
                    }
                    if("opacity"===this.config.option)for(i=0;i<this.postinos.length;i++) {
                        const t=this.postinos[i].i, e=Math.round(100*(this.values.c.x<=this.postinos[i].l?1-(this.postinos[i].l-this.values.c.x)/this.config.win: this.values.c.x>this.postinos[i].l?(this.postinos[i].l-this.values.c.x)/this.config.win+1: 0))/100;
                        t.style.opacity=Math.max(.7*e, 0)+.3
                    }
                    const n="translate3d("+-1*Math.round(100*this.values.c.x)/100+"px, 0, 0)";
                    i=0;
                    for(var o=this.items.list.length;i<o;i++) {
                        let t=this.items.list[i].style;
                        t.transform=n, t.webkitTransform=n, t.mozTransform=n, t.msTransform=n
                    }
                }
                _keyDown(t) {
                    if(t.keyCode===ne)return this._killScroll(), void requestAnimationFrame((()=> {
                        this.toFocus(h.activeElement)
                    }))
                }
                toFocus(t) {
                    const e=t.closest(".js-sl-one");
                    if(null!==e) {
                        for(var s=0; s<this.items.one.length; s++)e===this.items.one[s]&&(this.state.current=s, this.values.m.x=this.state.current*this.config.win);
                        this._btnCheck()
                    }
                }
                _killScroll() {
                    requestAnimationFrame((()=> {
                        this.el.scrollLeft=0;
                        for(var t=0; t<this.items.win.length;t++)this.items.win[t].scrollLeft=0;
                        for(t=0;t<this.items.mk.length;t++)this.items.mk[t].scrollLeft=0
                    }))
                }
                _ease_(t,e,s) {
                    return(t-e)*s
                }
                _link(t) {
                    if(!0===this.state.move)return t.preventDefault(), t.stopPropagation(), !1;
                    t.currentTarget;
                    return!1
                }
                _linkDown(t) {
                    t.preventDefault();
                    t.currentTarget;
                    return!1
                }
                _linkMove(t) {
                    t.preventDefault();
                    t.currentTarget;
                    return!1
                }
                _attach() {
                    if("mousedown"===ie.start) {
                        for(var t=0; t<this.items.link.length; t++)this.items.link[t].addEventListener("click", this.onLink, !1), this.items.link[t].addEventListener(ie.start, this.onLinkDown, ie.passivefalse), this.items.link[t].addEventListener(ie.move, this.onLinkMove, ie.passivefalse);
                        document.addEventListener("keydown", this.onKeyDown, !1)
                    }
                    this.el.addEventListener(ie.start,this.onStart,ie.passivetrue),
                    this.WPEL.addEventListener(ie.move,this.onMove,ie.passivefalse),
                    this.WPEL.addEventListener(ie.end,this.onEnd,ie.passivetrue);
                    for(t=0;t<this.items.btn.length;t++)this.items.btn[t].addEventListener("click",this.onBtn,!1);
                    if(this.config.hasDots)for(t=0;t<this.items.dot.length;t++)this.items.dot[t].addEventListener("click",this.onDot,!1)
                }
                once() {
                    if(this.el.classList.add("is-dragModule"), this.config.all=this.items.one.length, this.config.hasIndicator=this.items.indicator.length>0, this.config.hasCounter=this.items.counter.length>0, this.config.hasDots=this.items.dots.length>0, this.config.option=this.el.getAttribute("data-sl-option"), this.el.removeAttribute("data-sl-option"), this.config.hasCounter) {
                        let e="";
                        for(var t=0;t<this.config.all;t++) {
                            e+=`<p class="cr--ga__cutr__nt _t js-sl-count">$ {
                                t<=9?"0"+(t+1): t+1
                            }
                            </p>`
                        }
                        for(t=0;t<this.items.counter.length;t++)this.items.counter[t].insertAdjacentHTML("beforeend",e);
                        this.items.count=this.el.querySelectorAll(".js-sl-count")
                    }
                    if(this.config.hasDots) {
                        let e="";
                        for(t=0;t<this.config.all;t++)e+=`<button type="button" aria-label="Go to Slide${t+1}" data-num="${t}" class="m--rlns__tgt js-sl-dot"></button>`;
                        for(t=0;t<this.items.dots.length;t++)this.items.dots[t].insertAdjacentHTML("beforeend", e);
                        this.items.dot=this.el.querySelectorAll(".js-sl-dot")
                    }
                    for(t=0;t<this.items.allCount.length;t++)this.items.allCount[t].innerHTML=this.config.all<10?"0"+this.config.all:this.config.all;
                    for(t=0;t<this.items.one.length;t++) {
                        const e= {
                            i: this.items.one[t], w: 0, h: 0, t: 0, l: 0
                        };
                        this.postinos.push(e)
                    }
                    this._btnCheck()
                }
                resize() {
                    this.getSize()
                }
                _updateCircu() {
                    r.set(this.hover.ico, {
                        clipPath:`circle($ {
                            this.hvalue.prog
                        }
                        %)`
                    }
                    )
                }
                _kill() {
                    for(var t=0;
                    t<this.postinos.length;
                    t++)this.postinos[t]=null;
                    if(this.postinos.length=0, this.el.removeEventListener(ie.start, this.onStart, ie.passivetrue), this.WPEL.removeEventListener(ie.move, this.onMove, ie.passivefalse), this.WPEL.removeEventListener(ie.end, this.onEnd, ie.passivetrue), "mousedown"===ie.start) {
                        for(t=0;
                        t<this.items.link.length;
                        t++)this.items.link[t].removeEventListener("click", this.onLink, !1), this.items.link[t].removeEventListener(ie.start, this.onLinkDown, ie.passivefalse), this.items.link[t].removeEventListener(ie.move, this.onLinkMove, ie.passivefalse);
                        document.removeEventListener("keydown", this.onKeyDown, !1)
                    }
                    for(t=0;
                    t<this.items.btn.length;
                    t++)this.items.btn[t].removeEventListener("click",
                    this.onBtn,
                    !1);
                    if(this.config.hasDots)for(t=0;
                    t<this.items.dot.length;
                    t++)this.items.dot[t].removeEventListener("click",
                    this.onDot,
                    !1)
                }
            }
            ,
            re= {
                conf: [], init: function() {
                    this.item=a.new.querySelectorAll(".js-sl"), this.kill(), this.once()
                }
                ,
                once:function() {
                    for(var t=0;
                    t<this.item.length;
                    t++) {
                        let e=new oe(this.item[t]);
                        this.conf.push(e)
                    }
                }
                ,
                resize:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t].resize()
                }
                ,
                _update:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._update()
                }
                ,
                kill:function() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill(), this.conf[t]=null;
                    this.conf.length=0
                }
            }
            ,
            ae=class {
                constructor(t) {
                    let e=this;
                    this.el=t, this.obs=null, this.min=14, this.tx=0, this.onComp=this.comp.bind(this), this.inf=r.timeline( {
                        repeat: -1, onComplete: function() {
                            e.onComp
                        }
                    }
                    ),
                    this.clone=[],
                    this.item= {
                        tgt: t.querySelectorAll(".js-rpt-ln"), one: t.querySelectorAll(".js-rpt-one")
                    }
                    ,
                    this.anim= {
                        speed: .04, ease: "none"
                    }
                    ,
                    this.init()
                }
                init() {
                    this.inf.pause(), this._getSize(), this._build(), this.once()
                }
                _build() {
                    for(var t=0;
                    t<this.item.one.length;
                    t++) {
                        let e=this.item.one[t].cloneNode(!0);
                        this.clone.push(e)
                    }
                    for(t=0;
                    t<this.item.tgt.length;
                    t++) {
                        let e=this.item.tgt[t];
                        this._clone_(e)
                    }
                }
                _clone_(t) {
                    for(var e=0;
                    e<this.min;
                    e++)for(var s=0;
                    s<this.clone.length;
                    s++) {
                        let e=this.clone[s].cloneNode(!0);
                        t.appendChild(e)
                    }
                }
                _getSize() {
                    this.tx=0;
                    for(var t=0;
                    t<this.item.one.length;
                    t++) {
                        let e=this.item.one[t].getBoundingClientRect().width;
                        e>this.tx&&(this.tx=e)
                    }
                    this._setUp()
                }
                comp() {
                    this.inf.restart()
                }
                _setUp() {
                    let t=this.anim;
                    this.inf.clear(), this.inf.fromTo(this.item.tgt, {
                        x: 0
                    }
                    ,
                    {
                        duration: t.speed*this.tx, x: -2*this.tx, ease: t.ease
                    }
                    )
                }
                once() {
                    if("IntersectionObserver"in window) {
                        let t=this.el, e=this._default.bind(this), s= {
                            root: null, rootMargin: "5px 0px", threshold: 0
                        }
                        ;
                        this.obs=new IntersectionObserver(e,
                        s),
                        this.obs.observe(t)
                    }
                    else this.el.classList.add("is-rdrg"),
                    this.inf.restart()
                }
                _default(t,
                e) {
                    for(var s=0;
                    s<t.length;
                    s++)t[s].isIntersecting?(this.el.classList.add("is-rdrg"), this.inf.play()): (this.el.classList.remove("is-rdrg"), this.inf.pause())
                }
                _kill() {
                    null!==this.obs&&(this.obs.disconnect(), this.obs=null);
                    for(var t=0;
                    t<this.clone.length;
                    t++)this.clone[t]=null;
                    this.clone.length=0, this.inf.pause(), this.inf.kill(), this.inf=null
                }
                resize() {
                    this._getSize()
                }
            }
            ,
            he=new class {
                constructor() {
                    this.item= {}, this.conf=[], this.confo=[], this.onetime=h.body.querySelectorAll(".js-rpto")
                }
                init() {
                    this.item=a.new.querySelectorAll(".js-rpt"), this._kill(), this.once()
                }
                once() {
                    for(var t=0;
                    t<this.item.length;
                    t++) {
                        let e=new ae(this.item[t]);
                        this.conf.push(e)
                    }
                    for(t=0;
                    t<this.onetime.length;
                    t++)this.confo.push(new ae(this.onetime[t]))
                }
                resize() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t].resize();
                    for(t=0;
                    t<this.onetime.length;
                    t++)this.confo.resize()
                }
                _kill() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill();
                    this.conf.length=0
                }
            }
            ,
            le=class {
                constructor(t) {
                    let e=this;
                    this.el=t, this.obs=null, this.min=3, this.blk=6, this.tx=0, this.ty=0, this.onComp=this.comp.bind(this), this.inf=r.timeline( {
                        repeat: -1, onComplete: function() {
                            e.onComp
                        }
                    }
                    ),
                    this.clone=[],
                    this.clonewp=[],
                    this.item= {
                        tgt: t.querySelectorAll(".js-rpt-ln"), wp: t.querySelectorAll(".js-rpt-wp"), one: t.querySelectorAll(".js-rpt-one")
                    }
                    ,
                    this.anim= {
                        speed: .04, ease: "none"
                    }
                    ,
                    this.init()
                }
                init() {
                    this.inf.pause(), this._getSize(), this._build(), this.once()
                }
                _build() {
                    for(var t=0;
                    t<this.item.one.length;
                    t++) {
                        let e=this.item.one[t].cloneNode(!0);
                        this.clone.push(e)
                    }
                    for(t=0;
                    t<this.item.tgt.length;
                    t++) {
                        let e=this.item.tgt[t];
                        this._clone_(e), this.clonewp.push(e)
                    }
                    for(t=0;
                    t<this.item.wp.length;
                    t++) {
                        let e=this.item.wp[t];
                        this._clonewp_(e)
                    }
                }
                _clone_(t) {
                    for(var e=0;
                    e<this.min;
                    e++)for(var s=0;
                    s<this.clone.length;
                    s++) {
                        let e=this.clone[s].cloneNode(!0);
                        t.appendChild(e)
                    }
                }
                _clonewp_(t) {
                    for(var e=0;
                    e<this.blk;
                    e++)for(var s=0;
                    s<this.clonewp.length;
                    s++) {
                        let e=this.clonewp[s].cloneNode(!0);
                        t.appendChild(e)
                    }
                }
                _getSize() {
                    this.tx=0, this.ty=0;
                    for(var t=0;
                    t<this.item.one.length;
                    t++) {
                        let e=this.item.one[t].getBoundingClientRect().width, s=this.item.one[t].getBoundingClientRect().height;
                        e>this.tx&&(this.tx=e), s>this.ty&&(this.ty=s)
                    }
                    this._setUp()
                }
                comp() {
                    this.inf.restart()
                }
                _setUp() {
                    let t=this.anim, e=this;
                    this.inf.clear(), this.inf.fromTo(this.item.wp, {
                        x: 0, y: 0
                    }
                    ,
                    {
                        duration: t.speed*e.tx, x: -2*e.tx, y: -2*e.ty, ease: t.ease
                    }
                    )
                }
                once() {
                    if("IntersectionObserver"in window) {
                        let t=this.el, e=this._default.bind(this), s= {
                            root: null, rootMargin: "5px 0px", threshold: 0
                        }
                        ;
                        this.obs=new IntersectionObserver(e,
                        s),
                        this.obs.observe(t)
                    }
                    else this.el.classList.add("is-rdrg"),
                    this.inf.restart()
                }
                _default(t,
                e) {
                    for(var s=0;
                    s<t.length;
                    s++)t[s].isIntersecting?(this.el.classList.add("is-rdrg"), this.inf.play()): (this.el.classList.remove("is-rdrg"), this.inf.pause())
                }
                _kill() {
                    null!==this.obs&&(this.obs.disconnect(), this.obs=null);
                    for(var t=0;
                    t<this.clone.length;
                    t++)this.clone[t]=null;
                    this.clone.length=0;
                    for(t=0;
                    t<this.clonewp.length;
                    t++)this.clonewp[t]=null;
                    this.clonewp.length=0, this.inf.pause(), this.inf.kill(), this.inf=null
                }
                resize() {
                    this._getSize()
                }
            }
            ,
            ce=new class {
                constructor() {
                    this.item= {}, this.conf=[], this.confo=[], this.onetime=h.body.querySelectorAll(".js-rpbo")
                }
                init() {
                    this.item=a.new.querySelectorAll(".js-rpb"), this._kill(), this.once()
                }
                once() {
                    for(var t=0;
                    t<this.item.length;
                    t++) {
                        let e=new le(this.item[t]);
                        this.conf.push(e)
                    }
                    for(t=0;
                    t<this.onetime.length;
                    t++)this.confo.push(new le(this.onetime[t]))
                }
                resize() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t].resize();
                    for(t=0;
                    t<this.onetime.length;
                    t++)this.confo.resize()
                }
                _kill() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill();
                    this.conf.length=0
                }
            }
            ,
            ue=class {
                constructor(t, e) {
                    for(var s=e.split(","), i=0;
                    i<s.length;
                    i++)s[i]=Number(s[i]);
                    this.MAP=null, this.URL=t.getAttribute("data-href"), this.el=t, this.pos=s, this.init()
                }
                init() {
                    let t=this;
                    "undefined"!=typeof google&&google&&google.maps?this.render(): setTimeout(t.init.bind(this), 100)
                }
                render() {
                    const t=this.URL;
                    var e=this.pos, s=this.el, i=new google.maps.LatLng(e[0], e[1]), n=new google.maps.LatLng(e[0], e[1]), o= {
                        zoom: 16, center: i, mapTypeId: google.maps.MapTypeId.ROADMAP, gestureHandling: "cooperative", draggable: !0, disableDefaultUI: !0, scrollwheel: !1
                    }
                    ;
                    let r=new google.maps.Map(s,
                    o);
                    this.MAP=r;
                    var a= {
                        position: n, map: r, title: "株式会社Spade&Co."
                    }
                    ,
                    h=new google.maps.Marker(a),
                    l=new google.maps.StyledMapType([ {
                        featureType:"administrative", elementType:"all", stylers:[ {
                            color: "#3a3a3a"
                        }
                        ,
                        {
                            visibility: "off"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"landscape", elementType:"all", stylers:[ {
                            color: "#000000"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"poi", elementType:"geometry", stylers:[ {
                            color: "#101010"
                        }
                        ,
                        {
                            lightness: "-8"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"poi", elementType:"geometry.fill", stylers:[ {
                            color: "#1f1f1f"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"poi", elementType:"geometry.stroke", stylers:[ {
                            lightness: "-41"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"poi", elementType:"labels.text.fill", stylers:[ {
                            color: "#c8c8c8"
                        }
                        ,
                        {
                            lightness: "-54"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"poi", elementType:"labels.text.stroke", stylers:[ {
                            color: "#000000"
                        }
                        ,
                        {
                            lightness: "-20"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"poi", elementType:"labels.icon", stylers:[ {
                            color: "#232323"
                        }
                        ,
                        {
                            lightness: "-80"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road", elementType:"geometry", stylers:[ {
                            lightness: "-61"
                        }
                        ,
                        {
                            color: "#4e4e4e"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road", elementType:"geometry.fill", stylers:[ {
                            lightness: "-70"
                        }
                        ,
                        {
                            color: "#1b1b1b"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road", elementType:"geometry.stroke", stylers:[ {
                            lightness: "-59"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road", elementType:"labels", stylers:[ {
                            visibility: "off"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road", elementType:"labels.text", stylers:[ {
                            visibility: "off"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road", elementType:"labels.text.fill", stylers:[ {
                            lightness: "28"
                        }
                        ,
                        {
                            saturation: "6"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road", elementType:"labels.text.stroke", stylers:[ {
                            lightness: "-54"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road", elementType:"labels.icon", stylers:[ {
                            lightness: "-51"
                        }
                        ,
                        {
                            saturation: "-100"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road.highway", elementType:"geometry.fill", stylers:[ {
                            lightness: "-87"
                        }
                        ,
                        {
                            color: "#1d1d1d"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road.local", elementType:"geometry.fill", stylers:[ {
                            color: "#000000"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road.local", elementType:"labels", stylers:[ {
                            visibility: "off"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"road.local", elementType:"labels.text.fill", stylers:[ {
                            color: "#000000"
                        }
                        ,
                        {
                            visibility: "off"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit", elementType:"all", stylers:[ {
                            color: "#505050"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit", elementType:"geometry.fill", stylers:[ {
                            lightness: "31"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.line", elementType:"geometry.fill", stylers:[ {
                            color: "#404040"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.line", elementType:"labels.text.fill", stylers:[ {
                            color: "#232323"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.line", elementType:"labels.text.stroke", stylers:[ {
                            color: "#969696"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.line", elementType:"labels.icon", stylers:[ {
                            lightness: "-27"
                        }
                        ,
                        {
                            saturation: "-11"
                        }
                        ,
                        {
                            color: "#2d2d2d"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.station", elementType:"all", stylers:[ {
                            lightness: "-39"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.station", elementType:"geometry.fill", stylers:[ {
                            color: "#3e3e3e"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.station", elementType:"labels.text.fill", stylers:[ {
                            color: "#a2a2a2"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.station", elementType:"labels.text.stroke", stylers:[ {
                            color: "#000000"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.station", elementType:"labels.icon", stylers:[ {
                            lightness: "-7"
                        }
                        ,
                        {
                            saturation: "-100"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.station.rail", elementType:"geometry.fill", stylers:[ {
                            color: "#606060"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.station.rail", elementType:"labels.text.fill", stylers:[ {
                            color: "#adadad"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"transit.station.rail", elementType:"labels.icon", stylers:[ {
                            lightness: "-39"
                        }
                        ]
                    }
                    ,
                    {
                        featureType:"water", elementType:"all", stylers:[ {
                            color: "#252525"
                        }
                        ]
                    }
                    ],
                    {
                        name: "saturation"
                    }
                    );
                    r.mapTypes.set("株式会社Spade&Co.",
                    l),
                    r.setMapTypeId("株式会社Spade&Co."),
                    google.maps.event.addListener(h,
                    "click",
                    (function() {
                        window.open().location.href=t
                    }
                    ))
                }
                _kill() {
                    this.MAP=null
                }
            }
            ,
            me=new class {
                constructor() {
                    this.item= {}, this.conf=[]
                }
                init() {
                    this.conf.length=0, this.glbl=h.body.querySelectorAll(".js-mapo"), this.item=a.new.querySelectorAll(".js-map"), this._kill(), this.once()
                }
                once() {
                    for(var t=0;
                    t<this.glbl.length;
                    t++)if(!this.glbl[t].classList.contains("_mapattach")) {
                        this.glbl[t].classList.add("_mapattach");
                        let e=this.glbl[t].getAttribute("data-lat");
                        new ue(this.glbl[t], e)
                    }
                    for(t=0;
                    t<this.item.length;
                    t++) {
                        let e=this.item[t].getAttribute("data-lat"), s=new ue(this.item[t], e);
                        this.conf.push(s)
                    }
                }
                _kill() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill(), this.conf[t]=null;
                    this.conf.length=0
                }
            }
            ,
            de=new class {
                constructor() {
                    this.progress=0, this.CURRENT=0, this.DELAY=0, this.ALIVE=!1, this.OPEN=!1, this.item= {}, this.ONCE=!1, this.enableClose=!1, this.anim= {
                        wp: {
                            speed: .6, ease: "power2.inOut"
                        }
                        ,
                        item: {
                            speed: .8, delay: .08, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1")
                        }
                    }
                }
                init() {
                    const t=this;
                    this._kill(), h.getElementById("--work")&&"home"===a.dir&&(this.item= {
                        wp: h.getElementById("--work"), one: h.getElementById("--work").querySelectorAll(".-one"), close: h.getElementById("--work").querySelectorAll(".-close"), btn: h.getElementById("--work").querySelectorAll(".-btn"), pos: h.getElementById("--work").querySelectorAll(".-pos"), item: h.getElementById("--work").querySelectorAll(".-item")
                    }
                    ,
                    this.SITEPARTS=h.body.querySelectorAll(".-siteparts"),
                    this.onHover=t._hoverCard.bind(this),
                    this.onClose=t._close.bind(this),
                    this.onHit=t._hitCard.bind(this),
                    this.onGetSize=t._getSize.bind(this),
                    this.onGetState=t._getState.bind(this),
                    this.onToPivot=this._scrollToPivot.bind(this),
                    this.onEnter=this.enter.bind(this),
                    this.onLeave=this.leave.bind(this),
                    this.once(),
                    this._attach(),
                    this.ALIVE=!0)
                }
                once() {
                    r.set(this.item.item, {
                        opacity: 0, y: 30
                    }
                    )
                }
                _attach() {
                    for(var t=0;
                    t<this.item.close.length;
                    t++)this.item.close[t].addEventListener("click", this.onClose, !1), "is-pc"===a.act&&(this.item.close[t].addEventListener("mouseenter", this.onEnter, !1), this.item.close[t].addEventListener("mouseleave", this.onLeave, !1));
                    c.on("GET_WORK_CARD_SIZE", this.onGetSize), c.on("SCROLL_ANIM_WORK", this.onToPivot), c.on("HOVER_WORK_CARD", this.onHover), c.on("CLICK_WORK_CARD", this.onHit), c.on("ENABLE_CLOSE_WORK_CARD", this.onGetState)
                }
                _open() {
                    const t=this;
                    if(null!==this.CURRENT) {
                        this.OPEN=!0;
                        const s=this.item.one[this.CURRENT].querySelectorAll(".-item");
                        document.body.style.cursor=null, this.item.wp.classList.add("is-open"), this.item.one[this.CURRENT].classList.add("is-current"), r.to(this.SITEPARTS, {
                            duration: t.anim.wp.speed, autoAlpha: 0, ease: t.anim.wp.ease
                        }
                        ),
                        r.killTweensOf(s),
                        r.set(s,
                        {
                            y: 30, opacity: 0
                        }
                        ),
                        r.to(this.item.wp,
                        {
                            duration: t.anim.wp.speed, autoAlpha: 1, ease: t.anim.wp.ease
                        }
                        );
                        for(var e=0;
                        e<s.length;
                        e++)r.to(s[e],
                        {
                            duration: t.anim.item.speed, y: 0, opacity: 1, delay: t.anim.item.delay*e+this.DELAY+t.anim.wp.speed, ease: t.anim.item.ease
                        }
                        )
                    }
                }
                _close() {
                    const t=this;
                    if(!0===this.enableClose&&null!==this.CURRENT) {
                        this.OPEN=!1;
                        const s=this.item.one[this.CURRENT].querySelectorAll(".-item");
                        this.item.wp.classList.remove("is-open"), this.item.one[this.CURRENT].classList.remove("is-current"), r.to(this.SITEPARTS, {
                            duration: t.anim.wp.speed, autoAlpha: 1, ease: t.anim.wp.ease
                        }
                        ),
                        c.emit("CLOSE_WORK_CARD"),
                        r.to(this.item.wp,
                        {
                            duration: t.anim.wp.speed, autoAlpha: 0, ease: t.anim.wp.ease
                        }
                        ),
                        this.leave();
                        for(var e=0;
                        e<s.length;
                        e++)r.killTweensOf(s[e]),
                        r.to(s[e],
                        {
                            duration: t.anim.item.speed, y: -30, opacity: 0, delay: t.anim.item.delay*e, ease: t.anim.item.ease
                        }
                        )
                    }
                }
                _scrollToPivot(t) {
                    let {
                        detail: e
                    }
                    =t;
                    this.DELAY=e.duration,
                    null!==gt.smoothScroll&&gt.smoothScroll.scrollTo(0,
                    e.targetScroll,
                    100*e.duration)
                }
                _getSize(t) {
                    let {
                        detail: e
                    }
                    =t;
                    for(var s=0;
                    s<this.item.pos.length;
                    s++) {
                        const t=this.item.pos[s].style;
                        t.width=e.width+"px", t.top=1.35*e.height*.5+.5*a.vh+"px", t.left=-1*e.width*1.35*.5+.5*a.vw+"px", t.setProperty("--tw", 1.35*e.width*.5+30+"px")
                    }
                }
                _hitCard(t) {
                    let {
                        detail: e
                    }
                    =t;
                    e.isClick&&null!==e.num&&(this.CURRENT=e.num,
                    this._open())
                }
                _hoverCard(t) {
                    let {
                        detail: e
                    }
                    =t;
                    e.isHover?document.body.style.cursor="pointer":document.body.style.cursor="default"
                }
                _getState(t) {
                    let {
                        detail: e
                    }
                    =t;
                    this.enableClose=e.enable
                }
                enter() {
                    r.to(this.item.btn, {
                        duration: this.anim.wp.speed, opacity: 1, ease: this.anim.wp.ease
                    }
                    )
                }
                leave() {
                    r.to(this.item.btn, {
                        duration: this.anim.wp.speed, opacity: 0, ease: this.anim.wp.ease
                    }
                    )
                }
                _update() {
                    if(!0===this.ALIVE&&!0===this.OPEN&&"is-pc"===a.act)for(var t=0;
                    t<this.item.btn.length;
                    t++) {
                        const e=this.item.btn[t].style, s="translate3d("+a.mouse.vx+"px , "+a.mouse.vy+"px, 0)";
                        e.transform=s, e.webkitTransform=s, e.mozTransform=s, e.msTransform=s
                    }
                }
                _kill() {
                    if(this.CURRENT=0, document.body.style.cursor=null, this._close(), !0===this.ALIVE)for(var t=0;
                    t<this.item.close.length;
                    t++)this.item.close[t].removeEventListener("click", this.onClose, !1);
                    c.off("GET_WORK_CARD_SIZE", this.onGetSize), c.off("SCROLL_ANIM_WORK", this.onToPivot), c.off("HOVER_WORK_CARD", this.onHover), c.off("CLICK_WORK_CARD", this.onHit), c.off("ENABLE_CLOSE_WORK_CARD", this.onGetState), this.ALIVE=!1, this.OPEN=!1
                }
            }
            ,
            pe=class {
                constructor(t) {
                    this.el=t, this.item= {
                        wrap: t, tgt: t.querySelectorAll(".-win")[0], inner: t.querySelectorAll(".-in")[0], one: t.querySelectorAll(".-one"), btn: t.querySelectorAll(".-tgt")
                    }
                    ,
                    this.conf= {
                        open: !1, num: Number(t.getAttribute("data-contents"))<this.item.one.length?Number(t.getAttribute("data-contents")): this.item.one.length
                    }
                    ,
                    this.conf.num>=this.item.one.length&&(this.conf.open=!0),
                    this.anim= {
                        speed: .8, ease: "power2.inOut"
                    }
                    ,
                    this.onOpen=this.open.bind(this),
                    this.init()
                }
                init() {
                    this.once(), this.size()
                }
                once() {
                    for(var t=0;
                    t<this.item.btn.length;
                    t++)this.item.btn[t].addEventListener("click", this.onOpen, !1);
                    !0===this.conf.open&&r.set(this.item.btn, {
                        autoAlpha: 0
                    }
                    )
                }
                size() {
                    if(!1===this.conf.open) {
                        let e=this.item.tgt.getBoundingClientRect().top, s=0;
                        for(var t=0;
                        t<this.conf.num;
                        t++) {
                            let i=this.item.one[t].getBoundingClientRect(), n=i.top+i.height-e;
                            s<n&&(s=n)
                        }
                        this.item.tgt.style.height=s+"px"
                    }
                    else this.item.tgt.removeAttribute("style")
                }
                open(t) {
                    let e=t.currentTarget, s=this.item, i=this.conf, n=this.anim, o=0;
                    i.open=!0, o=this.item.inner.offsetHeight, r.to(s.tgt, {
                        duration: n.speed, height: o, ease: n.ease, clearProps: "all", onComplete: function() {}
                    }
                    ),
                    r.to(e,
                    {
                        duration: n.speed, autoAlpha: 0, ease: n.ease
                    }
                    )
                }
                resize() {
                    this.size()
                }
                _kill() {
                    for(var t=0;
                    t<this.item.btn.length;
                    t++)this.item.btn[t].removeEventListener("click", this.onOpen, !1)
                }
            }
            ,
            ve=new class {
                constructor() {
                    this.item= {}, this.conf=[]
                }
                init() {
                    this.conf.length=0, this.item= {
                        ph: a.new.querySelectorAll(".js-splt")
                    }
                    ,
                    this.once()
                }
                once() {
                    for(var t=0;
                    t<this.item.ph.length;
                    t++) {
                        let e=new pe(this.item.ph[t]);
                        this.conf.push(e)
                    }
                }
                resize() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t].resize()
                }
                _kill() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill(), this.conf[t]=null;
                    this.conf.length=0
                }
            }
            ,
            fe=class {
                constructor(t) {
                    this.el=t, this.SCROLL=null, this.ARR=null, this.ALL=0, this.MOVE=!1, this.ENTER=!1, this.SIZE= {
                        one: 0, win: 0
                    }
                    ,
                    this.state= {
                        move: !1, current: 0, start: !1
                    }
                    ,
                    this.values= {
                        t: {
                            x: 0, y: 0
                        }
                        ,
                        s: {
                            x: 0, y: 0
                        }
                        ,
                        m: {
                            x: 0, y: 0
                        }
                        ,
                        e: {
                            x: 0, y: 0
                        }
                        ,
                        c: {
                            x: 0, y: 0
                        }
                        ,
                        p: {
                            x: 0, y: 0
                        }
                    }
                    ,
                    this.X=0,
                    this.Y=0,
                    this.PVT= {
                        x: 0, y: 0
                    }
                    ,
                    this.WIN= {
                        min: 0, max: 0
                    }
                    ,
                    this.CONFIG= {
                        from: 0, to: 0
                    }
                    ,
                    this.IM=[],
                    this.CACHE=0,
                    this.item= {
                        wp: t.querySelectorAll(".js-wd-wp"), win: t.querySelectorAll(".js-wd-win"), sl: t.querySelectorAll(".js-wd-sl"), slw: t.querySelectorAll(".js-wd-slb"), hit: t.querySelectorAll(".js-wd-hit"), list: t.querySelectorAll(".js-wd-list"), one: t.querySelectorAll(".js-wd-one"), crewp: t.querySelectorAll(".js-wd-cbd"), cre: t.querySelectorAll(".js-wd-cre"), close: t.querySelectorAll(".js-wd-close"), btn: t.querySelectorAll(".js-wd-btn"), arr: t.querySelectorAll(".-arr")
                    }
                    ,
                    this.OPEN=!1,
                    this.anim= {
                        wp: {
                            speed: .6, ease: "power2.inOut"
                        }
                        ,
                        icon: {
                            speed: .4, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1")
                        }
                        ,
                        item: {
                            speed: 1, ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1")
                        }
                        ,
                        scroll: {
                            ease: o.t.create("BTN", "M0,0 C0.404,0.098 0.162,1 1,1")
                        }
                    }
                    ,
                    this.SITEPARTS=h.body.querySelectorAll(".-siteparts"),
                    this.onHover=this._hoverBtn.bind(this),
                    this.onLeave=this._leave.bind(this),
                    this.onOpen=this._open.bind(this),
                    this.onClose=this._close.bind(this),
                    this.onBtn=this._btn.bind(this),
                    this.onUpdate=this._update.bind(this),
                    this.onStart=this._start.bind(this),
                    this.onMove=this._move.bind(this),
                    this.onEnd=this._end.bind(this),
                    this.init()
                }
                init() {
                    this.once(), this._attach(), this._getSize()
                }
                once() {
                    this.ALL=this.item.one.length;
                    for(var t=0;
                    t<this.item.slw.length;
                    t++)this.item.slw[t].classList.add("is-dragModule");
                    for(t=0;
                    t<this.ALL;
                    t++) {
                        const e=this.item.one[t];
                        this.IM.push( {
                            el: e, s: 0, e: 0, prog: 0, pvt: 0
                        }
                        )
                    }
                    for(t=0;
                    t<this.item.one.length;
                    t++)this.item.one[t].setAttribute("data-un",
                    t);
                    if("is-pc"===a.act)for(t=0;
                    t<this.item.arr.length;
                    t++)this.item.arr[t].style.opacity=0
                }
                _start(t) {
                    t.currentTarget;
                    !0!==this.MOVE&&(this.state.start=!0, this.values.s.x=("touchstart"===ie.start?t.touches[0].pageX: t.clientX)+this.values.m.x, this.values.s.y=("touchstart"===ie.start?t.touches[0].pageY: t.clientY)+this.values.m.y, this.values.t.x="touchstart"===ie.start?t.touches[0].pageX: t.clientX, this.values.t.y="touchstart"===ie.start?t.touches[0].pageY: t.clientY)
                }
                _move(t) {
                    t.currentTarget;
                    if(!1===this.state.start)return;
                    let e="touchstart"===ie.start?t.touches[0].pageX: t.clientX, s="touchstart"===ie.start?t.touches[0].pageY: t.clientY;
                    const i=this.values.t.x-e, n=this.values.t.y-s;
                    this.values.m.x=this.values.s.x-e+.4*i, this.values.m.y=this.values.s.y-s+.4*n, (i<=-30||i>=30)&&t.cancelable&&t.preventDefault()
                }
                _end(t) {
                    t.currentTarget;
                    !1!==this.state.start&&(this.state.start=!1, this._check())
                }
                _check() {
                    const t=a.vw>=1e3?.01: .02, e=Math.max(Math.min(Math.round((this.values.c.x+this.values.p.x*t*this.SIZE.one)/this.SIZE.one), this.ALL-1), 0);
                    this.state.current=e, this.values.m.x=this.state.current*this.SIZE.one, this.engine()
                }
                _btn(t) {
                    const e=t.currentTarget.getAttribute("data-dir");
                    if(!0!==this.MOVE)if(this.MOVE=!0, "p"===e)this._prev();
                    else this._next()
                }
                _prev() {
                    this.state.current--, this.state.current=Math.max(Math.min(this.state.current, this.ALL-1), 0), this.engine()
                }
                _next() {
                    this.state.current++, this.state.current=Math.max(Math.min(this.state.current, this.ALL-1), 0), this.engine()
                }
                engine() {
                    const t=this, e= {
                        v: t.SCROLL.offset.y
                    }
                    ;
                    if(this.CONFIG.from=this.CONFIG.to,
                    this.CONFIG.to=this.state.current,
                    this._btncheck(),
                    this.CONFIG.from===this.CONFIG.to)return;
                    const s=this.CONFIG.from,
                    i=this.CONFIG.to;
                    this.item.cre[i].style.display="block";
                    const n=.002*this.SCROLL.offset.y,
                    o=this.item.cre[i].offsetHeight;
                    r.to(e,
                    {
                        duration: n, v: 0, ease: t.anim.scroll.ease, onUpdate: function() {
                            t.SCROLL.setPosition(0, e.v)
                        }
                        ,
                        onComplete:function() {
                            for(var e=0;
                            e<t.item.crewp.length;
                            e++)t.item.crewp[e].style.height=o+"px"
                        }
                    }
                    ),
                    !0===this.MOVE&&(r.killTweensOf(this.values.m),
                    r.to(t.values.m,
                    {
                        duration: t.anim.item.speed, x: t.state.current*t.SIZE.one, delay: n, ease: t.anim.item.ease, onComplete: function() {
                            t.MOVE=!1
                        }
                    }
                    )),
                    r.killTweensOf(this.item.cre[i]),
                    r.to(this.item.cre[i],
                    {
                        duration: t.anim.item.speed, opacity: 1, delay: n+t.anim.item.speed, ease: t.anim.item.ease
                    }
                    ),
                    r.killTweensOf(this.item.cre[s]),
                    r.to(this.item.cre[s],
                    {
                        duration: t.anim.item.speed, opacity: 0, delay: n, ease: t.anim.item.ease, onComplete: function() {
                            t.item.cre[s].style.display="none"
                        }
                    }
                    )
                }
                _setSlide() {
                    this.values.m.x=this.state.current*this.SIZE.one, this.values.c.x=this.values.m.x
                }
                _open(t) {
                    const e=this, s=t.currentTarget;
                    this.OPEN=!0, this.CONFIG.from=this.CONFIG.to, this.CONFIG.to=s.getAttribute("data-un")?Number(s.getAttribute("data-un")): 0, this.state.current=this.CONFIG.to, null!==this.SCROLL&&this.SCROLL.setPosition(0, 0), this._setSlide(), this._btncheck(), this._creditManagement();
                    for(var i=0;
                    i<this.item.wp.length;
                    i++)this.item.wp[i].classList.add("is-open");
                    r.to(this.SITEPARTS, {
                        duration: e.anim.wp.speed, autoAlpha: 0, ease: e.anim.wp.ease
                    }
                    ),
                    r.to(this.item.wp,
                    {
                        duration: e.anim.wp.speed, autoAlpha: 1, ease: e.anim.wp.ease
                    }
                    )
                }
                _close(t) {
                    const e=this;
                    t&&t.currentTarget;
                    this.OPEN=!1;
                    for(var s=0;
                    s<this.item.wp.length;
                    s++)this.item.wp[s].classList.remove("is-open");
                    r.to(this.item.wp, {
                        duration: e.anim.wp.speed, autoAlpha: 0, ease: e.anim.wp.ease
                    }
                    ),
                    r.to(this.SITEPARTS,
                    {
                        duration: e.anim.wp.speed, autoAlpha: 1, ease: e.anim.wp.ease
                    }
                    )
                }
                _btncheck() {
                    for(var t=0;
                    t<this.item.btn.length;
                    t++)"p"===this.item.btn[t].getAttribute("data-dir")&&(this.CONFIG.to<=0?this.item.btn[t].classList.add("is-hidden"): this.item.btn[t].classList.remove("is-hidden")), "n"===this.item.btn[t].getAttribute("data-dir")&&(this.CONFIG.to>=this.ALL-1?this.item.btn[t].classList.add("is-hidden"): this.item.btn[t].classList.remove("is-hidden"))
                }
                _creditManagement() {
                    let t=0;
                    for(var e=0;
                    e<this.item.cre.length;
                    e++)this.item.cre[e].style.display=e===this.CONFIG.to?"block": "none", this.item.cre[e].style.opacity=e===this.CONFIG.to?1: 0, e===this.CONFIG.to&&(t=this.item.cre[e].offsetHeight);
                    for(e=0;
                    e<this.item.crewp.length;
                    e++)this.item.crewp[e].style.height=t+"px"
                }
                _getSize() {
                    this.SIZE.one=0, this.WIN= {
                        min: -1*a.vw*.6, max: .6*a.vw
                    }
                    ;
                    for(var t=0;
                    t<this.item.sl.length;
                    t++)this.SIZE.win=this.item.sl[t].getBoundingClientRect().width,
                    this.SIZE.one=this.SIZE.win;
                    for(t=0;
                    t<this.IM.length;
                    t++) {
                        const e=this.IM[t].el.getBoundingClientRect();
                        this.IM[t].s=this.SIZE.win*t, this.IM[t].e=this.IM[t].s+e.width, this.IM[t].w=e.width, this.IM[t].pvt=this.IM[t].s+.5*e.width, this.IM[t].min=.5*e.width*-1-.5*a.vw, this.IM[t].max=.5*e.width+.5*a.vw, this.IM[t].pvt=this.IM[t].s+.5*e.width
                    }
                }
                resize() {
                    this._getSize(), !0===this.OPEN&&this._setSlide()
                }
                _update() {
                    if("is-pc"===a.act&&null!==this.ARR&&!0===this.ENTER) {
                        const t=this.ARR.style, e=this.CACHE-this.SCROLL.offset.y, s=!0===this.ENTER?a.mouse.x-this.PVT.x: 0, i=!0===this.ENTER?a.mouse.y-this.PVT.y-e: 0;
                        this.X=bt(this.X, s, .1), this.Y=bt(this.Y, i, .1);
                        const n="translate3d("+this.X+"px , "+this.Y+"px, 0)";
                        t.transform=n, t.webkitTransform=n, t.mozTransform=n, t.msTransform=n
                    }
                    if(!0===this.OPEN) {
                        const e=this.values.c.x, s=!0===this.state.start?.15: .08;
                        this.values.c.x=bt(this.values.c.x, this.values.m.x, s);
                        const i=e-this.values.c.x;
                        this.values.p.x-=i+this.values.p.x, this.values.p.x=Math.round(1e3*this.values.p.x)/1e3, this.values.p.x<1&&this.values.p.x>-1?this.state.move=!1: this.state.move=!0;
                        for(var t=0;
                        t<this.IM.length;
                        t++) {
                            const e=this.WIN.max+this.SIZE.win-this.IM[t].s, s=this.WIN.min-this.SIZE.win-this.IM[t].e, i="translate3d("+Math.max(Math.min(-1*this.values.c.x, e), s)+"px , 0, 0)", n=this.IM[t].el.style, o=this.values.c.x<this.IM[t].s?1+(this.values.c.x-this.IM[t].s)/this.IM[t].w: 1-(this.values.c.x-this.IM[t].s)/this.IM[t].w, r=Math.max(Math.min(o, 1), 0);
                            n.setProperty("--prog", r), n.transform=i, n.webkitTransform=i, n.mozTransform=i, n.msTransform=i
                        }
                    }
                }
                _hoverBtn(t) {
                    const e=t.currentTarget, s=e.querySelectorAll(".-arr"), i=e.querySelectorAll(".-pvt");
                    this.CACHE=this.SCROLL.offset.y, this.ENTER=!0;
                    for(var n=0;
                    n<s.length;
                    n++)this.ARR=s[n];
                    for(n=0;
                    n<i.length;
                    n++) {
                        const t=i[n].getBoundingClientRect();
                        this.PVT.x=.5*t.width+t.left, this.PVT.y=.5*t.height+t.top
                    }
                    r.killTweensOf(s),
                    r.to(s,
                    {
                        duration: this.anim.icon.speed, opacity: 1, ease: this.anim.icon.ease
                    }
                    )
                }
                _leave(t) {
                    const e=t.currentTarget.querySelectorAll(".-arr");
                    this.CACHE=this.SCROLL.offset.y, this.ENTER=!1, r.killTweensOf(e), r.to(e, {
                        duration: this.anim.icon.speed, opacity: 0, ease: this.anim.icon.ease
                    }
                    )
                }
                _attach() {
                    for(var t=0;
                    t<this.item.slw.length;
                    t++)this.item.slw[t].addEventListener(ie.start, this.onStart, ie.passivetrue);
                    window.addEventListener(ie.move, this.onMove, ie.passivefalse), window.addEventListener(ie.end, this.onEnd, ie.passivetrue);
                    for(t=0;
                    t<this.item.hit.length;
                    t++)this.item.hit[t].setAttribute("data-un", t), this.item.hit[t].addEventListener("click", this.onOpen, !1);
                    for(t=0;
                    t<this.item.close.length;
                    t++)this.item.close[t].addEventListener("click", this.onClose, !1);
                    for(t=0;
                    t<this.item.btn.length;
                    t++)this.item.btn[t].addEventListener("click", this.onBtn, !1), "is-pc"===a.act&&(this.item.btn[t].addEventListener("mouseenter", this.onHover, !1), this.item.btn[t].addEventListener("mouseleave", this.onLeave, !1));
                    this.item.win.length>0&&(this.SCROLL=pt.Z.init(this.item.win[0]))
                }
                _kill() {
                    this._close();
                    for(var t=0;
                    t<this.item.slw.length;
                    t++)this.item.slw[t].removeEventListener(ie.start, this.onStart, ie.passivetrue);
                    window.removeEventListener(ie.move, this.onMove, ie.passivefalse), window.removeEventListener(ie.end, this.onEnd, ie.passivetrue);
                    for(t=0;
                    t<this.item.hit.length;
                    t++)this.item.hit[t].removeEventListener("click", this.onOpen, !1);
                    for(t=0;
                    t<this.item.close.length;
                    t++)this.item.close[t].removeEventListener("click", this.onClose, !1);
                    for(t=0;
                    t<this.item.btn.length;
                    t++)this.item.btn[t].removeEventListener("click", this.onBtn, !1), "is-pc"===a.act&&(this.item.btn[t].removeEventListener("mouseenter", this.onHover, !1), this.item.btn[t].removeEventListener("mouseleave", this.onLeave, !1));
                    null!==this.SCROLL&&(this.SCROLL=pt.Z.destroy());
                    for(t=0;
                    t<this.IM.length;
                    t++)this.IM[t]=null;
                    return this.IM.length=0, null
                }
            }
            ,
            ge=new class {
                constructor() {
                    this.item=null, this.conf=[]
                }
                init() {
                    this.item=a.new.classList.contains("js-wd")?a.new: null, this._kill(), null!==this.item&&this.once()
                }
                once() {
                    let t=new fe(this.item);
                    this.conf.push(t)
                }
                resize() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t].resize()
                }
                _update() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._update()
                }
                _kill() {
                    for(var t=0;
                    t<this.conf.length;
                    t++)this.conf[t]._kill();
                    this.conf.length=0
                }
            }
            ,
            ye= {
                lowmode: !1, init: function() {
                    this.item=h.body.querySelectorAll("video"), this.onMouseMove=this._fakePlay.bind(this), this.onTouchStart=this._fakePlay.bind(this), this._kill(), this.checkVideo()
                }
                ,
                checkVideo:function() {
                    const t=this;
                    if(!1===this.lowmode)for(var e=0;
                    e<this.item.length;
                    e++) {
                        const s=e;
                        this.item[e].play().then((()=> {
                            let e=t.item[s].parentNode.querySelectorAll(".-mask");
                            r.to(e, {
                                duration: .4, opacity: 0, ease: "power1.inOut"
                            }
                            )
                        }
                        )).catch((()=> {
                            t.lowmode=!0, t.shadowPlay()
                        }
                        ))
                    }
                }
                ,
                shadowPlay:function() {
                    "click"===a.evt?h.addEventListener("mousemove", this.onMouseMove, !1): h.addEventListener("touchstart", this.onTouchStart, !1)
                }
                ,
                _fakePlay:function() {
                    const t=this;
                    for(var e=0;
                    e<this.item.length;
                    e++) {
                        this.item[e].play();
                        let s=t.item[e].parentNode.querySelectorAll(".-mask");
                        r.to(s, {
                            duration: .4, opacity: 0, ease: "power1.inOut"
                        }
                        )
                    }
                }
                ,
                _kill:function() {
                    "click"===a.evt?h.removeEventListener("mousemove", this.onMouseMove, !1): h.removeEventListener("touchstart", this.onTouchStart, !1)
                }
            }
            ,
            we=new class {
                constructor(t) {
                    this.scene=new U.x, this.props=t, this.firstPage=t.page, this.renderCount=0, this.init()
                }
                init() {
                    H.init(), v.init( {
                        $canvas: this.props.$canvas
                    }),
                    Y.init(),
                    g.init(),
                    R.init(),
                    this.firstView=new Z,
                    this.about=new Q,
                    this.aboutVideos=new st,
                    this.camera=new F.c(45, v.dimensions.x/v.dimensions.y,.1,1e5),
                    this.camera.position.set(0,0,1e3),
                    this.camera.lookAt(this.scene.position),
                    this.ourWork=new dt(this.camera),
                    this.scene.add(this.firstView.group),
                    this.scene.add(this.about.group),
                    this.scene.add(this.aboutVideos.group),
                    this.scene.add(this.ourWork.group),
                    this.scene.add(this.ourWork.workLoopText.group),
                    this.fadeTL=null,
                    this.scene.background=R.fbo_output.texture,
                    "index"!==this.firstPage&&(this.scene.visible=!1,
                    g.params.opacity=0);
                    let t=!1,
                    e=!1;
                    c.on("FINISH_LOADING",
                    (()=> {
                        setTimeout((()=> {
                            this.firstView.init(), this.about.init(), this.aboutVideos.init(), this.ourWork.init(this.camera), t=!0, "index"==this.firstPage&&c.emit("ENTER_INDEX")
                        }
                        ),
                        100)
                    }
                    )),
                    c.on("START_LOADING",
                    (()=> {
                        q.load()
                    }
                    )),
                    setTimeout((()=> {
                        c.emit("START_LOADING")
                    }
                    ),
                    2e3),
                    c.on("LEAVE_INDEX",
                    (()=> {
                        this.fadeTL&&this.fadeTL.kill(), this.fadeTL=n.ZP.timeline( {
                            onComplete: ()=> {
                                this.scene.visible=!1
                            }
                        }
                        ),
                        L("isIndex",
                        !1),
                        this.ourWork.removeEvent(),
                        this.firstView.hideVideos(),
                        this.firstView.hide(),
                        this.aboutVideos.hideVideo(),
                        this.fadeTL.to(g.params,
                        .5,
                        {
                            opacity: 0
                        }
                        )
                    }
                    )),
                    c.on("ENTER_INDEX",
                    (()=> {
                        this.fadeTL&&this.fadeTL.kill(), this.fadeTL=n.ZP.timeline((()=> {})), this.scene.visible=!0, this.about.getTargetElement(), this.aboutVideos.getTargetElement(), this.ourWork.getTargetElement(), this.firstView.showVideos(), this.firstView.show(), this.aboutVideos.showVideo(), L("isIndex", !0), this.resize(), this.fadeTL.to(g.params, .5, {
                            opacity: 1
                        }
                        )
                    }
                    )),
                    document.body.addEventListener("touchstart",
                    (()=> {
                        t&&!e&&E("isIndex")&&(e=!0, this.firstView.updateLowBattery(), this.aboutVideos.updateLowBattery())
                    }
                    )),
                    this.loop()
                }
                resize() {
                    v.resize(), Y.resize(), R.resize(), this.camera.aspect=v.aspect, E("isIndex")&&(this.aboutVideos.resize(), this.about.resize(), this.ourWork.resize()), this.camera.updateProjectionMatrix()
                }
                update() {
                    v.update(), E("isIndex")&&(Y.update(), H.update()), R.update(), E("isIndex")&&(this.about.update(), this.aboutVideos.update(this.camera), this.ourWork.update(), this.firstView.update()), v.renderer.setRenderTarget(null), v.renderer.clear(), v.renderer.render(this.scene, this.camera), this.renderCount++
                }
                loop() {
                    this.update(), window.requestAnimationFrame(this.loop.bind(this))
                }
            }

            ({
                $canvas: h.getElementById("-aw"), page: "home"===h.getElementById("js-ct").getAttribute("data-pj-dir")?"index": "other"
            }),
            xe= {
                item: {
                    win: h.getElementById("js-ct")
                }
                ,
                once:function() {
                    a.new=this.item.win, a.dir=this.item.win.getAttribute("data-pj-dir"), this.config(), this.conf(), wt.init(), yt.init()
                }
                ,
                load:function() {
                    Dt.init()
                }
                ,
                init:function() {
                    "home"!==a.dir?h.documentElement.classList.remove("is-home"): h.documentElement.classList.add("is-home"), gt.init(), At.init(), Pt.init(), Yt.init(), Ot.init(), It.init(), Nt.init(), Rt.init(), Ut.init(), Vt.init(), Bt.init(), Xt.init(), Kt.init(), Jt.init(), te.init(), re.init(), he.init(), ce.init(), me.init(), de.init(), ve.init(), ge.init(), ye.init(), qt.init(), Dt.init()
                }
                ,
                config:function() {
                    h.documentElement.classList.contains("pc")?(a.evt="click", a.act="is-pc"): h.addEventListener&&(a.evt=void 0===window.ontouchstart?"click": "touchend", a.act="no-pc")
                }
                ,
                conf:function() {
                    a.vw=window.innerWidth, a.vh=window.innerHeight;
                    const t=a.vh>=a.vw?a.vw: a.vh, e=a.vh>=a.vw?a.vh: a.vw;
                    h.documentElement.style.setProperty("--vw", a.vw/100+"px"), h.documentElement.style.setProperty("--vh", a.vh/100+"px"), h.documentElement.style.setProperty("--vmin", t/100+"px"), h.documentElement.style.setProperty("--vmax", e/100+"px"), a.vh/a.vw<=1?(a.land=!0, h.documentElement.classList.add("landscape"), h.documentElement.classList.remove("no-landscape")): (a.land=!1, h.documentElement.classList.remove("landscape"), h.documentElement.classList.add("no-landscape")), a.vw<=1024?a.dev="no-pc": a.dev="is-pc", a.vw>=1025?a.wid="pc": a.vw<=1024&&a.vw>=768?a.wid="tab": a.wid="sp"
                }
                ,
                _update:function() {
                    yt._update(), Ft._update(), re._update(), de._update(), ge._update(), c.emit(u)
                }
                ,
                resize:function() {
                    this.conf(), we.resize(), ve.resize(), It.resize(), te.resize(), Nt.resize(), qt.resize(), Jt.resize(), re.resize(), he.resize(), ce.resize(), ge.resize(), gt.resize()
                }
                ,
                close:function() {
                    wt._close()
                }
                ,
                kill:function() {}
            }
            ;
            var _e=s(9037);
            const be=.5,
            Te=(o.t.create("BTN",
            "M0,0 C0.484,0.206 0.1,1 1,1"),
            "power1.inOut"),
            Se=function() {
                _e.Z.init( {
                    schema: {
                        container: "c", namespace: "dir", prefix: "data-pj", wrapper: "w"
                    }
                    ,
                    transitions:[ {
                        name:"default-transition", sync:!1, leave:t=>r.to(t.current.container, {
                            duration: be, opacity: 0, ease: Te, onStart: function() {
                                if("home"===a.dir) {
                                    const t= {
                                        x: 0, y: 0
                                    }
                                    ;
                                    c.emit("UPDATE_SCROLL",
                                    {
                                        offset: t
                                    }
                                    ),
                                    c.emit("LEAVE_INDEX")
                                }
                            }
                        }
                        ),
                        beforeEnter(t) {
                            let {
                                next: e
                            }
                            =t;
                            !function(t) {
                                const e=h.head, s=t.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0], i=h.createElement("head");
                                i.innerHTML=s;
                                const n=["meta[name='keywords']", "meta[name='description']", "meta[property^='fb']", "meta[property^='og']", "meta[name^='twitter']", "meta[itemprop]", "link[itemprop]", "link[rel='prev']", "link[rel='next']", "link[rel='canonical']"].join(",");
                                [...e.querySelectorAll(n)].forEach((t=> {
                                    e.removeChild(t)
                                }
                                )),
                                [...i.querySelectorAll(n)].forEach((t=> {
                                    e.appendChild(t)
                                }
                                ))
                            }
                            (e)
                        }
                        ,
                        enter:t=>r.fromTo(t.next.container,
                        {
                            opacity: 0
                        }
                        ,
                        {
                            duration: be, opacity: 1, ease: Te, onStart: function() {
                                if("home"===a.dir) {
                                    const t= {
                                        x: 0, y: 0
                                    }
                                    ;
                                    c.emit("UPDATE_SCROLL",
                                    {
                                        offset: t
                                    }
                                    ),
                                    c.emit("ENTER_INDEX")
                                }
                            }
                        }
                        )
                    }
                    ],
                    requestError:(t,
                    e,
                    s,
                    i)=>("click"===e&&i.status&&404===i.status&&s&&(location.href=s),
                    !1)
                }
                ),
                _e.Z.hooks.beforeEnter((t=> {
                    a.new=t.next.container, a.dir=t.next.container.getAttribute("data-pj-dir"), "no-pc"!==a.act&&(h.documentElement.scrollTop=0, h.body.scrollTop=0), a.scroll.pos=0, xe.close(), xe.init()
                }
                )),
                _e.Z.hooks.after((t=> {
                    "no-pc"!==a.act&&(h.documentElement.scrollTop=0, h.body.scrollTop=0), t.next.container.classList.add("is-pageloaded"), a.trst=!1, "function"==typeof ga&&ga("send", "pageview", location.pathname), "function"==typeof fbq&&fbq("track", "PageView"), xe.resize()
                }
                ))
            }
            ;
            s(7062);
            const Ee=h.body.querySelectorAll("form");
            function Le() {
                clearTimeout(a.comp), clearTimeout(a.comps), a.comp=setTimeout((function() {
                    xe.resize(), a.comps=setTimeout((function() {
                        xe.resize()
                    }
                    ),
                    100)
                }
                ),
                150)
            }
            l.init(),
            Ee.length<=0&&"entry"!==h.getElementById("js-ct").getAttribute("data-pj-dir")&&Se(),
            xe.once(),
            xe.init(),
            Ft.init(),
            a.resize=Le,
            window.addEventListener("resize",
            Le,
            !1),
            r.ticker.add((function() {
                xe._update()
            }
            ))
        }
        ,
        7062:()=> {
            !function() {
                const t=window.navigator.userAgent.toLowerCase();
                -1!==t.indexOf("macintosh")&&void 0!==window.ontouchstart&&(document.documentElement.classList.remove("pc"), document.documentElement.classList.add("no-pc"), document.documentElement.classList.remove("no-tablet"), document.documentElement.classList.add("tablet"), document.documentElement.classList.remove("mac"), document.documentElement.classList.add("no-mac"), document.documentElement.classList.remove("no-ios"), document.documentElement.classList.add("ios"));
                let e="unknown";
                if(-1!==t.indexOf("msie")) {
                    const t=window.navigator.appVersion.toLowerCase();
                    e=-1!==t.indexOf("msie 6.")?"ie6": -1!==t.indexOf("msie 7.")?"ie7": -1!==t.indexOf("msie 8.")?"ie8": -1!==t.indexOf("msie 9.")?"ie9": -1!==t.indexOf("msie 10.")?"ie10": "ie"
                }
                else-1!==t.indexOf("trident/7")&&(e="ie11");
                if("unknown"!==e) {
                    let t=e+" "+document.documentElement.className;
                    document.documentElement.className=t
                }
            }
            ()
        }
    }
    ,
    s= {};
    function i(t) {
        var n=s[t];
        if(void 0!==n)return n.exports;
        var o=s[t]= {
            exports: {}
        }
        ;
        return e[t].call(o.exports,
        o,
        o.exports,
        i),
        o.exports
    }
    i.m=e,
    t=[],
    i.O=(e,
    s,
    n,
    o)=> {
        if(!s) {
            var r=1/0;
            for(c=0;
            c<t.length;
            c++) {
                for(var[s, n, o]=t[c], a=!0, h=0;
                h<s.length;
                h++)(!1&o||r>=o)&&Object.keys(i.O).every((t=>i.O[t](s[h])))?s.splice(h--, 1): (a=!1, o<r&&(r=o));
                if(a) {
                    t.splice(c--, 1);
                    var l=n();
                    void 0!==l&&(e=l)
                }
            }
            return e
        }
        o=o||0;
        for(var c=t.length;
        c>0&&t[c-1][2]>o;
        c--)t[c]=t[c-1];
        t[c]=[s,
        n,
        o]
    }
    ,
    i.n=t=> {
        var e=t&&t.__esModule?()=>t.default: ()=>t;
        return i.d(e, {
            a: e
        }
        ),
        e
    }
    ,
    i.d=(t,
    e)=> {
        for(var s in e)i.o(e, s)&&!i.o(t, s)&&Object.defineProperty(t, s, {
            enumerable: !0, get: e[s]
        }
        )
    }
    ,
    i.g=function() {
        if("object"==typeof globalThis)return globalThis;
        try {
            return this||new Function("return this")()
        }
        catch(t) {
            if("object"==typeof window)return window
        }
    }
    (),
    i.o=(t,
    e)=>Object.prototype.hasOwnProperty.call(t,
    e),
    i.r=t=> {
        "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }
        ),
        Object.defineProperty(t,
        "__esModule",
        {
            value: !0
        }
        )
    }
    ,
    (()=> {
        var t= {
            143: 0
        }
        ;
        i.O.j=e=>0===t[e];
        var e=(e,
        s)=> {
            var n, o, [r, a, h]=s, l=0;
            if(r.some((e=>0!==t[e]))) {
                for(n in a)i.o(a, n)&&(i.m[n]=a[n]);
                if(h)var c=h(i)
            }
            for(e&&e(s);
            l<r.length;
            l++)o=r[l],
            i.o(t,
            o)&&t[o]&&t[o][0](),
            t[o]=0;
            return i.O(c)
        }
        ,
        s=self.webpackChunk_sac_=self.webpackChunk_sac_||[];
        s.forEach(e.bind(null,
        0)),
        s.push=e.bind(null,
        s.push.bind(s))
    }
    )();
    var n=i.O(void 0,
    [698,
    594],
    (()=>i(6506)));
    n=i.O(n)
}
)();
"use strict";
(self.webpackChunk_sac_=self.webpackChunk_sac_||[]).push([[698],
{
    9717: (e, t, i)=> {
        i.d(t, {
            V: ()=>a
        }
        );
        var n=i(9049),
        r=i(3740);
        class a extends r.T {
            constructor() {
                super(), this.isCamera=!0, this.type="Camera", this.matrixWorldInverse=new n.y, this.projectionMatrix=new n.y, this.projectionMatrixInverse=new n.y
            }
            copy(e,
            t) {
                return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
            }
            getWorldDirection(e) {
                this.updateWorldMatrix(!0, !1);
                const t=this.matrixWorld.elements;
                return e.set(-t[8], -t[9], -t[10]).normalize()
            }
            updateMatrixWorld(e) {
                super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }
            updateWorldMatrix(e,
            t) {
                super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }
            clone() {
                return(new this.constructor).copy(this)
            }
        }
    }
    ,
    8695:(e,t,i)=> {
        i.d(t, {
            c: ()=>a
        }
        );
        var n=i(9717),
        r=i(6563);
        class a extends n.V {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 50, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 1, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: .1, n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 2e3;
                super(), this.isPerspectiveCamera=!0, this.type="PerspectiveCamera", this.fov=e, this.zoom=1, this.near=i, this.far=n, this.focus=10, this.aspect=t, this.view=null, this.filmGauge=35, this.filmOffset=0, this.updateProjectionMatrix()
            }
            copy(e,
            t) {
                return super.copy(e, t), this.fov=e.fov, this.zoom=e.zoom, this.near=e.near, this.far=e.far, this.focus=e.focus, this.aspect=e.aspect, this.view=null===e.view?null:Object.assign( {}, e.view), this.filmGauge=e.filmGauge, this.filmOffset=e.filmOffset, this
            }
            setFocalLength(e) {
                const t=.5*this.getFilmHeight()/e;
                this.fov=2*r.I3*Math.atan(t), this.updateProjectionMatrix()
            }
            getFocalLength() {
                const e=Math.tan(.5*r.qW*this.fov);
                return.5*this.getFilmHeight()/e
            }
            getEffectiveFOV() {
                return 2*r.I3*Math.atan(Math.tan(.5*r.qW*this.fov)/this.zoom)
            }
            getFilmWidth() {
                return this.filmGauge*Math.min(this.aspect, 1)
            }
            getFilmHeight() {
                return this.filmGauge/Math.max(this.aspect, 1)
            }
            setViewOffset(e,
            t,
            i,
            n,
            r,
            a) {
                this.aspect=e/t, null===this.view&&(this.view= {
                    enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1
                }
                ),
                this.view.enabled=!0,
                this.view.fullWidth=e,
                this.view.fullHeight=t,
                this.view.offsetX=i,
                this.view.offsetY=n,
                this.view.width=r,
                this.view.height=a,
                this.updateProjectionMatrix()
            }
            clearViewOffset() {
                null!==this.view&&(this.view.enabled=!1), this.updateProjectionMatrix()
            }
            updateProjectionMatrix() {
                const e=this.near;
                let t=e*Math.tan(.5*r.qW*this.fov)/this.zoom, i=2*t, n=this.aspect*i, a=-.5*n;
                const s=this.view;
                if(null!==this.view&&this.view.enabled) {
                    const e=s.fullWidth, r=s.fullHeight;
                    a+=s.offsetX*n/e, t-=s.offsetY*i/r, n*=s.width/e, i*=s.height/r
                }
                const o=this.filmOffset;
                0!==o&&(a+=e*o/this.getFilmWidth()),
                this.projectionMatrix.makePerspective(a,
                a+n,
                t,
                t-i,
                e,
                this.far),
                this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }
            toJSON(e) {
                const t=super.toJSON(e);
                return t.object.fov=this.fov, t.object.zoom=this.zoom, t.object.near=this.near, t.object.far=this.far, t.object.focus=this.focus, t.object.aspect=this.aspect, null!==this.view&&(t.object.view=Object.assign( {}, this.view)), t.object.filmGauge=this.filmGauge, t.object.filmOffset=this.filmOffset, t
            }
        }
    }
    ,
    1700:(e,
    t,
    i)=> {
        i.d(t, {
            BF: ()=>Ue, BG: ()=>Qe, BV: ()=>O, Bf: ()=>ie, C: ()=>He, Cd: ()=>Y, Ct: ()=>Ne, D1: ()=>de, D9: ()=>Re, Dj: ()=>Je, E2: ()=>Oe, Eo: ()=>X, FU: ()=>rt, GG: ()=>it, GU: ()=>mt, Gi: ()=>nt, Hy: ()=>D, IL: ()=>Be, IO: ()=>dt, JQ: ()=>ve, KI: ()=>ft, Kh: ()=>E, Kz: ()=>_e, LS: ()=>xt, LY: ()=>K, L_: ()=>Mt, Lg: ()=>L, Ls: ()=>ge, M5: ()=>_, M6: ()=>G, M9: ()=>ke, N4: ()=>g, ND: ()=>q, NY: ()=>$e, Ns: ()=>H, OT: ()=>we, Oo: ()=>se, PA: ()=>pt, Pe: ()=>r, Rl: ()=>N, S2: ()=>s, Se: ()=>z, Sm: ()=>b, Sv: ()=>st, T9: ()=>fe, Ty: ()=>oe, UC: ()=>Te, UZ: ()=>n, Vd: ()=>R, Vz: ()=>xe, W2: ()=>vt, WM: ()=>m, Wb: ()=>M, Wl: ()=>h, Wp: ()=>I, X: ()=>v, Y8: ()=>Ae, YG: ()=>Z, YL: ()=>le, Zr: ()=>U, _A: ()=>Ve, _L: ()=>u, _i: ()=>o, aH: ()=>ce, av: ()=>Ie, bG: ()=>x, bd: ()=>f, br: ()=>Pe, bs: ()=>ot, c8: ()=>w, cL: ()=>Me, cR: ()=>Ce, cu: ()=>_t, dS: ()=>te, dZ: ()=>J, dw: ()=>c, e: ()=>Ge, eD: ()=>B, eh: ()=>d, ek: ()=>je, fS: ()=>P, fY: ()=>$, ft: ()=>We, g8: ()=>ne, gh: ()=>T, gi: ()=>Ke, hE: ()=>De, iA: ()=>me, iW: ()=>A, ii: ()=>at, ir: ()=>Se, jF: ()=>p, jZ: ()=>Ye, k0: ()=>ye, k7: ()=>C, kn: ()=>ct, ks: ()=>V, l0: ()=>qe, mS: ()=>ut, nt: ()=>l, pK: ()=>tt, pt: ()=>Xe, qh: ()=>W, qk: ()=>Le, qy: ()=>ue, rO: ()=>y, r_: ()=>S, rn: ()=>lt, rp: ()=>re, tm: ()=>a, uL: ()=>j, uW: ()=>ae, v3: ()=>Fe, vC: ()=>F, vx: ()=>ee, w$: ()=>k, wJ: ()=>be, we: ()=>he, wk: ()=>Ee, wu: ()=>ze, x5: ()=>gt, xJ: ()=>et, xf: ()=>Q, y2: ()=>Ze, yw: ()=>pe, z8: ()=>ht
        }
        );
        const n="144",
        r=0,
        a=1,
        s=2,
        o=1,
        l=2,
        c=3,
        h=0,
        u=1,
        d=2,
        p=0,
        f=1,
        m=2,
        g=3,
        _=4,
        v=5,
        x=100,
        M=101,
        y=102,
        S=103,
        b=104,
        w=200,
        T=201,
        E=202,
        A=203,
        C=204,
        L=205,
        P=206,
        D=207,
        R=208,
        I=209,
        N=210,
        O=0,
        z=1,
        U=2,
        F=3,
        B=4,
        V=5,
        k=6,
        G=7,
        H=0,
        W=1,
        q=2,
        j=0,
        X=1,
        Y=2,
        Z=3,
        K=4,
        J=5,
        Q=300,
        $=301,
        ee=302,
        te=303,
        ie=304,
        ne=306,
        re=1e3,
        ae=1001,
        se=1002,
        oe=1003,
        le=1004,
        ce=1005,
        he=1006,
        ue=1007,
        de=1008,
        pe=1009,
        fe=1010,
        me=1011,
        ge=1012,
        _e=1013,
        ve=1014,
        xe=1015,
        Me=1016,
        ye=1017,
        Se=1018,
        be=1020,
        we=1021,
        Te=1022,
        Ee=1023,
        Ae=1024,
        Ce=1025,
        Le=1026,
        Pe=1027,
        De=1028,
        Re=1029,
        Ie=1030,
        Ne=1031,
        Oe=1033,
        ze=33776,
        Ue=33777,
        Fe=33778,
        Be=33779,
        Ve=35840,
        ke=35841,
        Ge=35842,
        He=35843,
        We=36196,
        qe=37492,
        je=37496,
        Xe=37808,
        Ye=37809,
        Ze=37810,
        Ke=37811,
        Je=37812,
        Qe=37813,
        $e=37814,
        et=37815,
        tt=37816,
        it=37817,
        nt=37818,
        rt=37819,
        at=37820,
        st=37821,
        ot=36492,
        lt=3e3,
        ct=3001,
        ht=3200,
        ut=3201,
        dt=0,
        pt=1,
        ft="srgb",
        mt="srgb-linear",
        gt=7680,
        _t=519,
        vt=35044,
        xt="300 es",
        Mt=1035
    }
    ,
    3107:(e,
    t,
    i)=> {
        i.d(t, {
            Tl: ()=>c, a$: ()=>d, lC: ()=>u, ql: ()=>h
        }
        );
        var n=i(9376),
        r=i(5914),
        a=i(6563),
        s=i(1700);
        const o=new n.P,
        l=new r.F;
        class c {
            constructor(e, t, i) {
                if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                this.isBufferAttribute=!0, this.name="", this.array=e, this.itemSize=t, this.count=void 0!==e?e.length/t:0, this.normalized=!0===i, this.usage=s.W2, this.updateRange= {
                    offset: 0, count: -1
                }
                ,
                this.version=0
            }
            onUploadCallback() {}set needsUpdate(e) {
                !0===e&&this.version++
            }
            setUsage(e) {
                return this.usage=e, this
            }
            copy(e) {
                return this.name=e.name, this.array=new e.array.constructor(e.array), this.itemSize=e.itemSize, this.count=e.count, this.normalized=e.normalized, this.usage=e.usage, this
            }
            copyAt(e,
            t,
            i) {
                e*=this.itemSize, i*=t.itemSize;
                for(let n=0, r=this.itemSize;
                n<r;
                n++)this.array[e+n]=t.array[i+n];
                return this
            }
            copyArray(e) {
                return this.array.set(e), this
            }
            applyMatrix3(e) {
                if(2===this.itemSize)for(let t=0, i=this.count;
                t<i;
                t++)l.fromBufferAttribute(this, t), l.applyMatrix3(e), this.setXY(t, l.x, l.y);
                else if(3===this.itemSize)for(let t=0, i=this.count;
                t<i;
                t++)o.fromBufferAttribute(this, t), o.applyMatrix3(e), this.setXYZ(t, o.x, o.y, o.z);
                return this
            }
            applyMatrix4(e) {
                for(let t=0, i=this.count;
                t<i;
                t++)o.fromBufferAttribute(this, t), o.applyMatrix4(e), this.setXYZ(t, o.x, o.y, o.z);
                return this
            }
            applyNormalMatrix(e) {
                for(let t=0, i=this.count;
                t<i;
                t++)o.fromBufferAttribute(this, t), o.applyNormalMatrix(e), this.setXYZ(t, o.x, o.y, o.z);
                return this
            }
            transformDirection(e) {
                for(let t=0, i=this.count;
                t<i;
                t++)o.fromBufferAttribute(this, t), o.transformDirection(e), this.setXYZ(t, o.x, o.y, o.z);
                return this
            }
            set(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return this.array.set(e, t), this
            }
            getX(e) {
                let t=this.array[e*this.itemSize];
                return this.normalized&&(t=(0, a.cY)(t, this.array)), t
            }
            setX(e,
            t) {
                return this.normalized&&(t=(0, a.Fv)(t, this.array)), this.array[e*this.itemSize]=t, this
            }
            getY(e) {
                let t=this.array[e*this.itemSize+1];
                return this.normalized&&(t=(0, a.cY)(t, this.array)), t
            }
            setY(e,
            t) {
                return this.normalized&&(t=(0, a.Fv)(t, this.array)), this.array[e*this.itemSize+1]=t, this
            }
            getZ(e) {
                let t=this.array[e*this.itemSize+2];
                return this.normalized&&(t=(0, a.cY)(t, this.array)), t
            }
            setZ(e,
            t) {
                return this.normalized&&(t=(0, a.Fv)(t, this.array)), this.array[e*this.itemSize+2]=t, this
            }
            getW(e) {
                let t=this.array[e*this.itemSize+3];
                return this.normalized&&(t=(0, a.cY)(t, this.array)), t
            }
            setW(e,
            t) {
                return this.normalized&&(t=(0, a.Fv)(t, this.array)), this.array[e*this.itemSize+3]=t, this
            }
            setXY(e,
            t,
            i) {
                return e*=this.itemSize, this.normalized&&(t=(0, a.Fv)(t, this.array), i=(0, a.Fv)(i, this.array)), this.array[e+0]=t, this.array[e+1]=i, this
            }
            setXYZ(e,
            t,
            i,
            n) {
                return e*=this.itemSize, this.normalized&&(t=(0, a.Fv)(t, this.array), i=(0, a.Fv)(i, this.array), n=(0, a.Fv)(n, this.array)), this.array[e+0]=t, this.array[e+1]=i, this.array[e+2]=n, this
            }
            setXYZW(e,
            t,
            i,
            n,
            r) {
                return e*=this.itemSize, this.normalized&&(t=(0, a.Fv)(t, this.array), i=(0, a.Fv)(i, this.array), n=(0, a.Fv)(n, this.array), r=(0, a.Fv)(r, this.array)), this.array[e+0]=t, this.array[e+1]=i, this.array[e+2]=n, this.array[e+3]=r, this
            }
            onUpload(e) {
                return this.onUploadCallback=e, this
            }
            clone() {
                return new this.constructor(this.array, this.itemSize).copy(this)
            }
            toJSON() {
                const e= {
                    itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized
                }
                ;
                return""!==this.name&&(e.name=this.name),
                this.usage!==s.W2&&(e.usage=this.usage),
                0===this.updateRange.offset&&-1===this.updateRange.count||(e.updateRange=this.updateRange),
                e
            }
            copyColorsArray() {}copyVector2sArray() {}copyVector3sArray() {}copyVector4sArray() {}
        }
        class h extends c {
            constructor(e, t, i) {
                super(new Uint16Array(e), t, i)
            }
        }
        class u extends c {
            constructor(e, t, i) {
                super(new Uint32Array(e), t, i)
            }
        }
        class d extends c {
            constructor(e, t, i) {
                super(new Float32Array(e), t, i)
            }
        }
    }
    ,
    8674:(e,
    t,
    i)=> {
        i.d(t, {
            u: ()=>y
        }
        );
        var n=i(9376),
        r=i(5914),
        a=i(578),
        s=i(1214),
        o=i(3107),
        l=i(5604),
        c=i(3740),
        h=i(9049),
        u=i(4914),
        d=i(6563),
        p=i(6104);
        let f=0;
        const m=new h.y,
        g=new c.T,
        _=new n.P,
        v=new a.Z,
        x=new a.Z,
        M=new n.P;
        class y extends s.p {
            constructor() {
                super(), this.isBufferGeometry=!0, Object.defineProperty(this, "id", {
                    value: f++
                }
                ),
                this.uuid=d.DO(),
                this.name="",
                this.type="BufferGeometry",
                this.index=null,
                this.attributes= {},
                this.morphAttributes= {},
                this.morphTargetsRelative=!1,
                this.groups=[],
                this.boundingBox=null,
                this.boundingSphere=null,
                this.drawRange= {
                    start: 0, count: 1/0
                }
                ,
                this.userData= {}
            }
            getIndex() {
                return this.index
            }
            setIndex(e) {
                return Array.isArray(e)?this.index=new((0, p.H7)(e)?o.lC: o.ql)(e, 1): this.index=e, this
            }
            getAttribute(e) {
                return this.attributes[e]
            }
            setAttribute(e,
            t) {
                return this.attributes[e]=t, this
            }
            deleteAttribute(e) {
                return delete this.attributes[e], this
            }
            hasAttribute(e) {
                return void 0!==this.attributes[e]
            }
            addGroup(e,
            t) {
                let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0;
                this.groups.push( {
                    start: e, count: t, materialIndex: i
                }
                )
            }
            clearGroups() {
                this.groups=[]
            }
            setDrawRange(e,
            t) {
                this.drawRange.start=e, this.drawRange.count=t
            }
            applyMatrix4(e) {
                const t=this.attributes.position;
                void 0!==t&&(t.applyMatrix4(e), t.needsUpdate=!0);
                const i=this.attributes.normal;
                if(void 0!==i) {
                    const t=(new u.V).getNormalMatrix(e);
                    i.applyNormalMatrix(t), i.needsUpdate=!0
                }
                const n=this.attributes.tangent;
                return void 0!==n&&(n.transformDirection(e),
                n.needsUpdate=!0),
                null!==this.boundingBox&&this.computeBoundingBox(),
                null!==this.boundingSphere&&this.computeBoundingSphere(),
                this
            }
            applyQuaternion(e) {
                return m.makeRotationFromQuaternion(e), this.applyMatrix4(m), this
            }
            rotateX(e) {
                return m.makeRotationX(e), this.applyMatrix4(m), this
            }
            rotateY(e) {
                return m.makeRotationY(e), this.applyMatrix4(m), this
            }
            rotateZ(e) {
                return m.makeRotationZ(e), this.applyMatrix4(m), this
            }
            translate(e,
            t,
            i) {
                return m.makeTranslation(e, t, i), this.applyMatrix4(m), this
            }
            scale(e,
            t,
            i) {
                return m.makeScale(e, t, i), this.applyMatrix4(m), this
            }
            lookAt(e) {
                return g.lookAt(e), g.updateMatrix(), this.applyMatrix4(g.matrix), this
            }
            center() {
                return this.computeBoundingBox(), this.boundingBox.getCenter(_).negate(), this.translate(_.x, _.y, _.z), this
            }
            setFromPoints(e) {
                const t=[];
                for(let i=0, n=e.length;
                i<n;
                i++) {
                    const n=e[i];
                    t.push(n.x, n.y, n.z||0)
                }
                return this.setAttribute("position",
                new o.a$(t,
                3)),
                this
            }
            computeBoundingBox() {
                null===this.boundingBox&&(this.boundingBox=new a.Z);
                const e=this.attributes.position, t=this.morphAttributes.position;
                if(e&&e.isGLBufferAttribute)this.boundingBox.set(new n.P(-1/0, -1/0, -1/0), new n.P(1/0, 1/0, 1/0));
                else {
                    if(void 0!==e) {
                        if(this.boundingBox.setFromBufferAttribute(e), t)for(let e=0, i=t.length;
                        e<i;
                        e++) {
                            const i=t[e];
                            v.setFromBufferAttribute(i), this.morphTargetsRelative?(M.addVectors(this.boundingBox.min, v.min), this.boundingBox.expandByPoint(M), M.addVectors(this.boundingBox.max, v.max), this.boundingBox.expandByPoint(M)): (this.boundingBox.expandByPoint(v.min), this.boundingBox.expandByPoint(v.max))
                        }
                    }
                    else this.boundingBox.makeEmpty();
                    isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)
                }
            }
            computeBoundingSphere() {
                null===this.boundingSphere&&(this.boundingSphere=new l.a);
                const e=this.attributes.position, t=this.morphAttributes.position;
                if(e&&e.isGLBufferAttribute)this.boundingSphere.set(new n.P, 1/0);
                else if(e) {
                    const i=this.boundingSphere.center;
                    if(v.setFromBufferAttribute(e), t)for(let e=0, i=t.length;
                    e<i;
                    e++) {
                        const i=t[e];
                        x.setFromBufferAttribute(i), this.morphTargetsRelative?(M.addVectors(v.min, x.min), v.expandByPoint(M), M.addVectors(v.max, x.max), v.expandByPoint(M)): (v.expandByPoint(x.min), v.expandByPoint(x.max))
                    }
                    v.getCenter(i);
                    let n=0;
                    for(let t=0,
                    r=e.count;
                    t<r;
                    t++)M.fromBufferAttribute(e,
                    t),
                    n=Math.max(n,
                    i.distanceToSquared(M));
                    if(t)for(let r=0,
                    a=t.length;
                    r<a;
                    r++) {
                        const a=t[r], s=this.morphTargetsRelative;
                        for(let t=0, r=a.count;
                        t<r;
                        t++)M.fromBufferAttribute(a, t), s&&(_.fromBufferAttribute(e, t), M.add(_)), n=Math.max(n, i.distanceToSquared(M))
                    }
                    this.boundingSphere.radius=Math.sqrt(n),
                    isNaN(this.boundingSphere.radius)
                }
            }
            computeTangents() {
                const e=this.index, t=this.attributes;
                if(null===e||void 0===t.position||void 0===t.normal||void 0===t.uv)return;
                const i=e.array, a=t.position.array, s=t.normal.array, l=t.uv.array, c=a.length/3;
                !1===this.hasAttribute("tangent")&&this.setAttribute("tangent", new o.Tl(new Float32Array(4*c), 4));
                const h=this.getAttribute("tangent").array, u=[], d=[];
                for(let e=0;
                e<c;
                e++)u[e]=new n.P, d[e]=new n.P;
                const p=new n.P, f=new n.P, m=new n.P, g=new r.F, _=new r.F, v=new r.F, x=new n.P, M=new n.P;
                function y(e, t, i) {
                    p.fromArray(a, 3*e), f.fromArray(a, 3*t), m.fromArray(a, 3*i), g.fromArray(l, 2*e), _.fromArray(l, 2*t), v.fromArray(l, 2*i), f.sub(p), m.sub(p), _.sub(g), v.sub(g);
                    const n=1/(_.x*v.y-v.x*_.y);
                    isFinite(n)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(m, -_.y).multiplyScalar(n), M.copy(m).multiplyScalar(_.x).addScaledVector(f, -v.x).multiplyScalar(n), u[e].add(x), u[t].add(x), u[i].add(x), d[e].add(M), d[t].add(M), d[i].add(M))
                }
                let S=this.groups;
                0===S.length&&(S=[ {
                    start: 0, count: i.length
                }
                ]);
                for(let e=0,
                t=S.length;
                e<t;
                ++e) {
                    const t=S[e], n=t.start;
                    for(let e=n, r=n+t.count;
                    e<r;
                    e+=3)y(i[e+0], i[e+1], i[e+2])
                }
                const b=new n.P,
                w=new n.P,
                T=new n.P,
                E=new n.P;
                function A(e) {
                    T.fromArray(s, 3*e), E.copy(T);
                    const t=u[e];
                    b.copy(t), b.sub(T.multiplyScalar(T.dot(t))).normalize(), w.crossVectors(E, t);
                    const i=w.dot(d[e])<0?-1: 1;
                    h[4*e]=b.x, h[4*e+1]=b.y, h[4*e+2]=b.z, h[4*e+3]=i
                }
                for(let e=0,
                t=S.length;
                e<t;
                ++e) {
                    const t=S[e], n=t.start;
                    for(let e=n, r=n+t.count;
                    e<r;
                    e+=3)A(i[e+0]), A(i[e+1]), A(i[e+2])
                }
            }
            computeVertexNormals() {
                const e=this.index, t=this.getAttribute("position");
                if(void 0!==t) {
                    let i=this.getAttribute("normal");
                    if(void 0===i)i=new o.Tl(new Float32Array(3*t.count), 3), this.setAttribute("normal", i);
                    else for(let e=0, t=i.count;
                    e<t;
                    e++)i.setXYZ(e, 0, 0, 0);
                    const r=new n.P, a=new n.P, s=new n.P, l=new n.P, c=new n.P, h=new n.P, u=new n.P, d=new n.P;
                    if(e)for(let n=0, o=e.count;
                    n<o;
                    n+=3) {
                        const o=e.getX(n+0), p=e.getX(n+1), f=e.getX(n+2);
                        r.fromBufferAttribute(t, o), a.fromBufferAttribute(t, p), s.fromBufferAttribute(t, f), u.subVectors(s, a), d.subVectors(r, a), u.cross(d), l.fromBufferAttribute(i, o), c.fromBufferAttribute(i, p), h.fromBufferAttribute(i, f), l.add(u), c.add(u), h.add(u), i.setXYZ(o, l.x, l.y, l.z), i.setXYZ(p, c.x, c.y, c.z), i.setXYZ(f, h.x, h.y, h.z)
                    }
                    else for(let e=0,
                    n=t.count;
                    e<n;
                    e+=3)r.fromBufferAttribute(t,
                    e+0),
                    a.fromBufferAttribute(t,
                    e+1),
                    s.fromBufferAttribute(t,
                    e+2),
                    u.subVectors(s,
                    a),
                    d.subVectors(r,
                    a),
                    u.cross(d),
                    i.setXYZ(e+0,
                    u.x,
                    u.y,
                    u.z),
                    i.setXYZ(e+1,
                    u.x,
                    u.y,
                    u.z),
                    i.setXYZ(e+2,
                    u.x,
                    u.y,
                    u.z);
                    this.normalizeNormals(),
                    i.needsUpdate=!0
                }
            }
            merge() {
                return this
            }
            normalizeNormals() {
                const e=this.attributes.normal;
                for(let t=0, i=e.count;
                t<i;
                t++)M.fromBufferAttribute(e, t), M.normalize(), e.setXYZ(t, M.x, M.y, M.z)
            }
            toNonIndexed() {
                function e(e, t) {
                    const i=e.array, n=e.itemSize, r=e.normalized, a=new i.constructor(t.length*n);
                    let s=0, l=0;
                    for(let r=0, o=t.length;
                    r<o;
                    r++) {
                        s=e.isInterleavedBufferAttribute?t[r]*e.data.stride+e.offset: t[r]*n;
                        for(let e=0;
                        e<n;
                        e++)a[l++]=i[s++]
                    }
                    return new o.Tl(a,
                    n,
                    r)
                }
                if(null===this.index)return this;
                const t=new y,
                i=this.index.array,
                n=this.attributes;
                for(const r in n) {
                    const a=e(n[r], i);
                    t.setAttribute(r, a)
                }
                const r=this.morphAttributes;
                for(const n in r) {
                    const a=[], s=r[n];
                    for(let t=0, n=s.length;
                    t<n;
                    t++) {
                        const n=e(s[t], i);
                        a.push(n)
                    }
                    t.morphAttributes[n]=a
                }
                t.morphTargetsRelative=this.morphTargetsRelative;
                const a=this.groups;
                for(let e=0,
                i=a.length;
                e<i;
                e++) {
                    const i=a[e];
                    t.addGroup(i.start, i.count, i.materialIndex)
                }
                return t
            }
            toJSON() {
                const e= {
                    metadata: {
                        version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON"
                    }
                }
                ;
                if(e.uuid=this.uuid,
                e.type=this.type,
                ""!==this.name&&(e.name=this.name),
                Object.keys(this.userData).length>0&&(e.userData=this.userData),
                void 0!==this.parameters) {
                    const t=this.parameters;
                    for(const i in t)void 0!==t[i]&&(e[i]=t[i]);
                    return e
                }
                e.data= {
                    attributes: {}
                }
                ;
                const t=this.index;
                null!==t&&(e.data.index= {
                    type: t.array.constructor.name, array: Array.prototype.slice.call(t.array)
                }
                );
                const i=this.attributes;
                for(const t in i) {
                    const n=i[t];
                    e.data.attributes[t]=n.toJSON(e.data)
                }
                const n= {};
                let r=!1;
                for(const t in this.morphAttributes) {
                    const i=this.morphAttributes[t], a=[];
                    for(let t=0, n=i.length;
                    t<n;
                    t++) {
                        const n=i[t];
                        a.push(n.toJSON(e.data))
                    }
                    a.length>0&&(n[t]=a,
                    r=!0)
                }
                r&&(e.data.morphAttributes=n,
                e.data.morphTargetsRelative=this.morphTargetsRelative);
                const a=this.groups;
                a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));
                const s=this.boundingSphere;
                return null!==s&&(e.data.boundingSphere= {
                    center: s.center.toArray(), radius: s.radius
                }
                ),
                e
            }
            clone() {
                return(new this.constructor).copy(this)
            }
            copy(e) {
                this.index=null, this.attributes= {}, this.morphAttributes= {}, this.groups=[], this.boundingBox=null, this.boundingSphere=null;
                const t= {};
                this.name=e.name;
                const i=e.index;
                null!==i&&this.setIndex(i.clone(t));
                const n=e.attributes;
                for(const e in n) {
                    const i=n[e];
                    this.setAttribute(e, i.clone(t))
                }
                const r=e.morphAttributes;
                for(const e in r) {
                    const i=[], n=r[e];
                    for(let e=0, r=n.length;
                    e<r;
                    e++)i.push(n[e].clone(t));
                    this.morphAttributes[e]=i
                }
                this.morphTargetsRelative=e.morphTargetsRelative;
                const a=e.groups;
                for(let e=0,
                t=a.length;
                e<t;
                e++) {
                    const t=a[e];
                    this.addGroup(t.start, t.count, t.materialIndex)
                }
                const s=e.boundingBox;
                null!==s&&(this.boundingBox=s.clone());
                const o=e.boundingSphere;
                return null!==o&&(this.boundingSphere=o.clone()),
                this.drawRange.start=e.drawRange.start,
                this.drawRange.count=e.drawRange.count,
                this.userData=e.userData,
                void 0!==e.parameters&&(this.parameters=Object.assign( {},
                e.parameters)),
                this
            }
            dispose() {
                this.dispatchEvent( {
                    type: "dispose"
                }
                )
            }
        }
    }
    ,
    7970:(e,
    t,
    i)=> {
        i.d(t, {
            S: ()=>n
        }
        );
        class n {
            constructor() {
                let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];
                this.autoStart=e, this.startTime=0, this.oldTime=0, this.elapsedTime=0, this.running=!1
            }
            start() {
                this.startTime=r(), this.oldTime=this.startTime, this.elapsedTime=0, this.running=!0
            }
            stop() {
                this.getElapsedTime(), this.running=!1, this.autoStart=!1
            }
            getElapsedTime() {
                return this.getDelta(), this.elapsedTime
            }
            getDelta() {
                let e=0;
                if(this.autoStart&&!this.running)return this.start(), 0;
                if(this.running) {
                    const t=r();
                    e=(t-this.oldTime)/1e3, this.oldTime=t, this.elapsedTime+=e
                }
                return e
            }
        }
        function r() {
            return("undefined"==typeof performance?Date: performance).now()
        }
    }
    ,
    1214:(e,
    t,
    i)=> {
        i.d(t, {
            p: ()=>n
        }
        );
        class n {
            addEventListener(e, t) {
                void 0===this._listeners&&(this._listeners= {});
                const i=this._listeners;
                void 0===i[e]&&(i[e]=[]), -1===i[e].indexOf(t)&&i[e].push(t)
            }
            hasEventListener(e,
            t) {
                if(void 0===this._listeners)return!1;
                const i=this._listeners;
                return void 0!==i[e]&&-1!==i[e].indexOf(t)
            }
            removeEventListener(e,
            t) {
                if(void 0===this._listeners)return;
                const i=this._listeners[e];
                if(void 0!==i) {
                    const e=i.indexOf(t);
                    -1!==e&&i.splice(e, 1)
                }
            }
            dispatchEvent(e) {
                if(void 0===this._listeners)return;
                const t=this._listeners[e.type];
                if(void 0!==t) {
                    e.target=this;
                    const i=t.slice(0);
                    for(let t=0, n=i.length;
                    t<n;
                    t++)i[t].call(this, e);
                    e.target=null
                }
            }
        }
    }
    ,
    2302:(e,
    t,
    i)=> {
        i.d(t, {
            S: ()=>n
        }
        );
        class n {
            constructor() {
                this.mask=1
            }
            set(e) {
                this.mask=(1<<e|0)>>>0
            }
            enable(e) {
                this.mask|=1<<e|0
            }
            enableAll() {
                this.mask=-1
            }
            toggle(e) {
                this.mask^=1<<e|0
            }
            disable(e) {
                this.mask&=~(1<<e|0)
            }
            disableAll() {
                this.mask=0
            }
            test(e) {
                return 0!=(this.mask&e.mask)
            }
            isEnabled(e) {
                return 0!=(this.mask&(1<<e|0))
            }
        }
    }
    ,
    3740:(e,
    t,
    i)=> {
        i.d(t, {
            T: ()=>w
        }
        );
        var n=i(4235),
        r=i(9376),
        a=i(9049),
        s=i(1214),
        o=i(9800),
        l=i(2302),
        c=i(4914),
        h=i(6563);
        let u=0;
        const d=new r.P,
        p=new n._,
        f=new a.y,
        m=new r.P,
        g=new r.P,
        _=new r.P,
        v=new n._,
        x=new r.P(1,
        0,
        0),
        M=new r.P(0,
        1,
        0),
        y=new r.P(0,
        0,
        1),
        S= {
            type: "added"
        }
        ,
        b= {
            type: "removed"
        }
        ;
        class w extends s.p {
            constructor() {
                super(), this.isObject3D=!0, Object.defineProperty(this, "id", {
                    value: u++
                }
                ),
                this.uuid=h.DO(),
                this.name="",
                this.type="Object3D",
                this.parent=null,
                this.children=[],
                this.up=w.DefaultUp.clone();
                const e=new r.P,
                t=new o.U,
                i=new n._,
                s=new r.P(1,
                1,
                1);
                t._onChange((function() {
                    i.setFromEuler(t, !1)
                }
                )),
                i._onChange((function() {
                    t.setFromQuaternion(i, void 0, !1)
                }
                )),
                Object.defineProperties(this,
                {
                    position: {
                        configurable: !0, enumerable: !0, value: e
                    }
                    ,
                    rotation: {
                        configurable: !0, enumerable: !0, value: t
                    }
                    ,
                    quaternion: {
                        configurable: !0, enumerable: !0, value: i
                    }
                    ,
                    scale: {
                        configurable: !0, enumerable: !0, value: s
                    }
                    ,
                    modelViewMatrix: {
                        value: new a.y
                    }
                    ,
                    normalMatrix: {
                        value: new c.V
                    }
                }
                ),
                this.matrix=new a.y,
                this.matrixWorld=new a.y,
                this.matrixAutoUpdate=w.DefaultMatrixAutoUpdate,
                this.matrixWorldNeedsUpdate=!1,
                this.matrixWorldAutoUpdate=w.DefaultMatrixWorldAutoUpdate,
                this.layers=new l.S,
                this.visible=!0,
                this.castShadow=!1,
                this.receiveShadow=!1,
                this.frustumCulled=!0,
                this.renderOrder=0,
                this.animations=[],
                this.userData= {}
            }
            onBeforeRender() {}onAfterRender() {}applyMatrix4(e) {
                this.matrixAutoUpdate&&this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
            }
            applyQuaternion(e) {
                return this.quaternion.premultiply(e), this
            }
            setRotationFromAxisAngle(e,
            t) {
                this.quaternion.setFromAxisAngle(e, t)
            }
            setRotationFromEuler(e) {
                this.quaternion.setFromEuler(e, !0)
            }
            setRotationFromMatrix(e) {
                this.quaternion.setFromRotationMatrix(e)
            }
            setRotationFromQuaternion(e) {
                this.quaternion.copy(e)
            }
            rotateOnAxis(e,
            t) {
                return p.setFromAxisAngle(e, t), this.quaternion.multiply(p), this
            }
            rotateOnWorldAxis(e,
            t) {
                return p.setFromAxisAngle(e, t), this.quaternion.premultiply(p), this
            }
            rotateX(e) {
                return this.rotateOnAxis(x, e)
            }
            rotateY(e) {
                return this.rotateOnAxis(M, e)
            }
            rotateZ(e) {
                return this.rotateOnAxis(y, e)
            }
            translateOnAxis(e,
            t) {
                return d.copy(e).applyQuaternion(this.quaternion), this.position.add(d.multiplyScalar(t)), this
            }
            translateX(e) {
                return this.translateOnAxis(x, e)
            }
            translateY(e) {
                return this.translateOnAxis(M, e)
            }
            translateZ(e) {
                return this.translateOnAxis(y, e)
            }
            localToWorld(e) {
                return e.applyMatrix4(this.matrixWorld)
            }
            worldToLocal(e) {
                return e.applyMatrix4(f.copy(this.matrixWorld).invert())
            }
            lookAt(e,
            t,
            i) {
                e.isVector3?m.copy(e): m.set(e, t, i);
                const n=this.parent;
                this.updateWorldMatrix(!0, !1), g.setFromMatrixPosition(this.matrixWorld), this.isCamera||this.isLight?f.lookAt(g, m, this.up): f.lookAt(m, g, this.up), this.quaternion.setFromRotationMatrix(f), n&&(f.extractRotation(n.matrixWorld), p.setFromRotationMatrix(f), this.quaternion.premultiply(p.invert()))
            }
            add(e) {
                if(arguments.length>1) {
                    for(let e=0;
                    e<arguments.length;
                    e++)this.add(arguments[e]);
                    return this
                }
                return e===this||e&&e.isObject3D&&(null!==e.parent&&e.parent.remove(e),
                e.parent=this,
                this.children.push(e),
                e.dispatchEvent(S)),
                this
            }
            remove(e) {
                if(arguments.length>1) {
                    for(let e=0;
                    e<arguments.length;
                    e++)this.remove(arguments[e]);
                    return this
                }
                const t=this.children.indexOf(e);
                return-1!==t&&(e.parent=null,
                this.children.splice(t,
                1),
                e.dispatchEvent(b)),
                this
            }
            removeFromParent() {
                const e=this.parent;
                return null!==e&&e.remove(this), this
            }
            clear() {
                for(let e=0;
                e<this.children.length;
                e++) {
                    const t=this.children[e];
                    t.parent=null, t.dispatchEvent(b)
                }
                return this.children.length=0,
                this
            }
            attach(e) {
                return this.updateWorldMatrix(!0, !1), f.copy(this.matrixWorld).invert(), null!==e.parent&&(e.parent.updateWorldMatrix(!0, !1), f.multiply(e.parent.matrixWorld)), e.applyMatrix4(f), this.add(e), e.updateWorldMatrix(!1, !0), this
            }
            getObjectById(e) {
                return this.getObjectByProperty("id", e)
            }
            getObjectByName(e) {
                return this.getObjectByProperty("name", e)
            }
            getObjectByProperty(e,
            t) {
                if(this[e]===t)return this;
                for(let i=0, n=this.children.length;
                i<n;
                i++) {
                    const n=this.children[i].getObjectByProperty(e, t);
                    if(void 0!==n)return n
                }
            }
            getWorldPosition(e) {
                return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
            }
            getWorldQuaternion(e) {
                return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(g, e, _), e
            }
            getWorldScale(e) {
                return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(g, v, e), e
            }
            getWorldDirection(e) {
                this.updateWorldMatrix(!0, !1);
                const t=this.matrixWorld.elements;
                return e.set(t[8], t[9], t[10]).normalize()
            }
            raycast() {}traverse(e) {
                e(this);
                const t=this.children;
                for(let i=0, n=t.length;
                i<n;
                i++)t[i].traverse(e)
            }
            traverseVisible(e) {
                if(!1===this.visible)return;
                e(this);
                const t=this.children;
                for(let i=0, n=t.length;
                i<n;
                i++)t[i].traverseVisible(e)
            }
            traverseAncestors(e) {
                const t=this.parent;
                null!==t&&(e(t), t.traverseAncestors(e))
            }
            updateMatrix() {
                this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate=!0
            }
            updateMatrixWorld(e) {
                this.matrixAutoUpdate&&this.updateMatrix(), (this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix): this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate=!1, e=!0);
                const t=this.children;
                for(let i=0, n=t.length;
                i<n;
                i++) {
                    const n=t[i];
                    !0!==n.matrixWorldAutoUpdate&&!0!==e||n.updateMatrixWorld(e)
                }
            }
            updateWorldMatrix(e,
            t) {
                const i=this.parent;
                if(!0===e&&null!==i&&!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate&&this.updateMatrix(), null===this.parent?this.matrixWorld.copy(this.matrix): this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0===t) {
                    const e=this.children;
                    for(let t=0, i=e.length;
                    t<i;
                    t++) {
                        const i=e[t];
                        !0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!1, !0)
                    }
                }
            }
            toJSON(e) {
                const t=void 0===e||"string"==typeof e, i= {};
                t&&(e= {
                    geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {}
                }
                ,
                i.metadata= {
                    version: 4.5, type: "Object", generator: "Object3D.toJSON"
                }
                );
                const n= {};
                function r(t,
                i) {
                    return void 0===t[i.uuid]&&(t[i.uuid]=i.toJSON(e)), i.uuid
                }
                if(n.uuid=this.uuid,
                n.type=this.type,
                ""!==this.name&&(n.name=this.name),
                !0===this.castShadow&&(n.castShadow=!0),
                !0===this.receiveShadow&&(n.receiveShadow=!0),
                !1===this.visible&&(n.visible=!1),
                !1===this.frustumCulled&&(n.frustumCulled=!1),
                0!==this.renderOrder&&(n.renderOrder=this.renderOrder),
                "{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),
                n.layers=this.layers.mask,
                n.matrix=this.matrix.toArray(),
                !1===this.matrixAutoUpdate&&(n.matrixAutoUpdate=!1),
                this.isInstancedMesh&&(n.type="InstancedMesh",
                n.count=this.count,
                n.instanceMatrix=this.instanceMatrix.toJSON(),
                null!==this.instanceColor&&(n.instanceColor=this.instanceColor.toJSON())),
                this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),
                this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(n.environment=this.environment.toJSON(e).uuid);
                else if(this.isMesh||this.isLine||this.isPoints) {
                    n.geometry=r(e.geometries, this.geometry);
                    const t=this.geometry.parameters;
                    if(void 0!==t&&void 0!==t.shapes) {
                        const i=t.shapes;
                        if(Array.isArray(i))for(let t=0, n=i.length;
                        t<n;
                        t++) {
                            const n=i[t];
                            r(e.shapes, n)
                        }
                        else r(e.shapes,
                        i)
                    }
                }
                if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,
                n.bindMatrix=this.bindMatrix.toArray(),
                void 0!==this.skeleton&&(r(e.skeletons,
                this.skeleton),
                n.skeleton=this.skeleton.uuid)),
                void 0!==this.material)if(Array.isArray(this.material)) {
                    const t=[];
                    for(let i=0, n=this.material.length;
                    i<n;
                    i++)t.push(r(e.materials, this.material[i]));
                    n.material=t
                }
                else n.material=r(e.materials,
                this.material);
                if(this.children.length>0) {
                    n.children=[];
                    for(let t=0;
                    t<this.children.length;
                    t++)n.children.push(this.children[t].toJSON(e).object)
                }
                if(this.animations.length>0) {
                    n.animations=[];
                    for(let t=0;
                    t<this.animations.length;
                    t++) {
                        const i=this.animations[t];
                        n.animations.push(r(e.animations, i))
                    }
                }
                if(t) {
                    const t=a(e.geometries), n=a(e.materials), r=a(e.textures), s=a(e.images), o=a(e.shapes), l=a(e.skeletons), c=a(e.animations), h=a(e.nodes);
                    t.length>0&&(i.geometries=t), n.length>0&&(i.materials=n), r.length>0&&(i.textures=r), s.length>0&&(i.images=s), o.length>0&&(i.shapes=o), l.length>0&&(i.skeletons=l), c.length>0&&(i.animations=c), h.length>0&&(i.nodes=h)
                }
                return i.object=n,
                i;
                function a(e) {
                    const t=[];
                    for(const i in e) {
                        const n=e[i];
                        delete n.metadata, t.push(n)
                    }
                    return t
                }
            }
            clone(e) {
                return(new this.constructor).copy(this, e)
            }
            copy(e) {
                let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];
                if(this.name=e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order=e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate=e.matrixAutoUpdate, this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate, this.layers.mask=e.layers.mask, this.visible=e.visible, this.castShadow=e.castShadow, this.receiveShadow=e.receiveShadow, this.frustumCulled=e.frustumCulled, this.renderOrder=e.renderOrder, this.userData=JSON.parse(JSON.stringify(e.userData)), !0===t)for(let t=0;
                t<e.children.length;
                t++) {
                    const i=e.children[t];
                    this.add(i.clone())
                }
                return this
            }
        }
        w.DefaultUp=new r.P(0,
        1,
        0),
        w.DefaultMatrixAutoUpdate=!0,
        w.DefaultMatrixWorldAutoUpdate=!0
    }
    ,
    4804:(e,
    t,
    i)=> {
        i.d(t, {
            i: ()=>a
        }
        );
        var n=i(8384),
        r=i(2302);
        class a {
            constructor(e, t) {
                let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0, a=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 1/0;
                this.ray=new n.z(e, t), this.near=i, this.far=a, this.camera=null, this.layers=new r.S, this.params= {
                    Mesh: {}, Line: {
                        threshold: 1
                    }
                    ,
                    LOD: {},
                    Points: {
                        threshold: 1
                    }
                    ,
                    Sprite: {}
                }
            }
            set(e,
            t) {
                this.ray.set(e, t)
            }
            setFromCamera(e,
            t) {
                t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera=t): t.isOrthographicCamera&&(this.ray.origin.set(e.x, e.y, (t.near+t.far)/(t.near-t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera=t)
            }
            intersectObject(e) {
                let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]: [];
                return o(e, this, t, !(arguments.length>1&&void 0!==arguments[1])||arguments[1]), t.sort(s), t
            }
            intersectObjects(e) {
                let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1], i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: [];
                for(let n=0, r=e.length;
                n<r;
                n++)o(e[n], this, i, t);
                return i.sort(s), i
            }
        }
        function s(e,
        t) {
            return e.distance-t.distance
        }
        function o(e,
        t,
        i,
        n) {
            if(e.layers.test(t.layers)&&e.raycast(t, i), !0===n) {
                const n=e.children;
                for(let e=0, r=n.length;
                e<r;
                e++)o(n[e], t, i, !0)
            }
        }
    }
    ,
    4222:(e,
    t,
    i)=> {
        i.d(t, {
            P: ()=>s
        }
        );
        var n=i(6104),
        r=i(8286);
        let a;
        class s {
            static getDataURL(e) {
                if(/^data: /i.test(e.src))return e.src;
                if("undefined"==typeof HTMLCanvasElement)return e.src;
                let t;
                if(e instanceof HTMLCanvasElement)t=e;
                else {
                    void 0===a&&(a=(0, n.c)("canvas")), a.width=e.width, a.height=e.height;
                    const i=a.getContext("2d");
                    e instanceof ImageData?i.putImageData(e, 0, 0): i.drawImage(e, 0, 0, e.width, e.height), t=a
                }
                return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")
            }
            static sRGBToLinear(e) {
                if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap) 
                {
                    const t=(0, n.c)("canvas");
                    t.width=e.width, t.height=e.height;
                    const i=t.getContext("2d");
                    i.drawImage(e, 0, 0, e.width, e.height);
                    const a=i.getImageData(0, 0, e.width, e.height), s=a.data;
                    for(let e=0;e<s.length;e++)s[e]=255*(0, r.PB)(s[e]/255);
                    return i.putImageData(a, 0, 0), t
                }
                if(e.data) {
                    const t=e.data.slice(0);
                    for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*(0, r.PB)(t[e]/255)): t[e]=(0, r.PB)(t[e]);
                    return {
                        data: t, width: e.width, height: e.height
                    }
                }
                return e
            }
        }
    }
    ,
    2613:(e,
    t,
    i)=> {
        i.d(t, {
            _: ()=>a
        }
        );
        var n=i(8674),
        r=i(3107);
        class a extends n.u {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 1, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 1, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 1, n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 1;
                super(), this.type="PlaneGeometry", this.parameters= {
                    width: e, height: t, widthSegments: i, heightSegments: n
                }
                ;
                const a=e/2,
                s=t/2,
                o=Math.floor(i),
                l=Math.floor(n),
                c=o+1,
                h=l+1,
                u=e/o,
                d=t/l,
                p=[],
                f=[],
                m=[],
                g=[];
                for(let e=0;
                e<h;
                e++) {
                    const t=e*d-s;
                    for(let i=0;
                    i<c;
                    i++) {
                        const n=i*u-a;
                        f.push(n, -t, 0), m.push(0, 0, 1), g.push(i/o), g.push(1-e/l)
                    }
                }
                for(let e=0;
                e<l;
                e++)for(let t=0;
                t<o;
                t++) {
                    const i=t+c*e, n=t+c*(e+1), r=t+1+c*(e+1), a=t+1+c*e;
                    p.push(i, n, a), p.push(n, r, a)
                }
                this.setIndex(p),
                this.setAttribute("position",
                new r.a$(f,
                3)),
                this.setAttribute("normal",
                new r.a$(m,
                3)),
                this.setAttribute("uv",
                new r.a$(g,
                2))
            }
            static fromJSON(e) {
                return new a(e.width, e.height, e.widthSegments, e.heightSegments)
            }
        }
    }
    ,
    6945:(e,
    t,
    i)=> {
        i.d(t, {
            d: ()=>h
        }
        );
        const n= {
            enabled:!1, files: {}, add: function(e, t) {
                !1!==this.enabled&&(this.files[e]=t)
            }
            ,
            get:function(e) {
                if(!1!==this.enabled)return this.files[e]
            }
            ,
            remove:function(e) {
                delete this.files[e]
            }
            ,
            clear:function() {
                this.files= {}
            }
        }
        ;
        class r {
            constructor(e, t, i) {
                const n=this;
                let r, a=!1, s=0, o=0;
                const l=[];
                this.onStart=void 0, this.onLoad=e, this.onProgress=t, this.onError=i, this.itemStart=function(e) {
                    o++, !1===a&&void 0!==n.onStart&&n.onStart(e, s, o), a=!0
                }
                ,
                this.itemEnd=function(e) {
                    s++, void 0!==n.onProgress&&n.onProgress(e, s, o), s===o&&(a=!1, void 0!==n.onLoad&&n.onLoad())
                }
                ,
                this.itemError=function(e) {
                    void 0!==n.onError&&n.onError(e)
                }
                ,
                this.resolveURL=function(e) {
                    return r?r(e): e
                }
                ,
                this.setURLModifier=function(e) {
                    return r=e, this
                }
                ,
                this.addHandler=function(e,
                t) {
                    return l.push(e, t), this
                }
                ,
                this.removeHandler=function(e) {
                    const t=l.indexOf(e);
                    return-1!==t&&l.splice(t, 2), this
                }
                ,
                this.getHandler=function(e) {
                    for(let t=0, i=l.length;
                    t<i;
                    t+=2) {
                        const i=l[t], n=l[t+1];
                        if(i.global&&(i.lastIndex=0), i.test(e))return n
                    }
                    return null
                }
            }
        }
        const a=new r;
        class s {
            constructor(e) {
                this.manager=void 0!==e?e:a, this.crossOrigin="anonymous", this.withCredentials=!1, this.path="", this.resourcePath="", this.requestHeader= {}
            }
            load() {}loadAsync(e,
            t) {
                const i=this;
                return new Promise((function(n, r) {
                    i.load(e, n, t, r)
                }
                ))
            }
            parse() {}setCrossOrigin(e) {
                return this.crossOrigin=e, this
            }
            setWithCredentials(e) {
                return this.withCredentials=e, this
            }
            setPath(e) {
                return this.path=e, this
            }
            setResourcePath(e) {
                return this.resourcePath=e, this
            }
            setRequestHeader(e) {
                return this.requestHeader=e, this
            }
        }
        var o=i(6104);
        class l extends s {
            constructor(e) {
                super(e)
            }
            load(e,
            t,
            i,
            r) {
                void 0!==this.path&&(e=this.path+e), e=this.manager.resolveURL(e);
                const a=this, s=n.get(e);
                if(void 0!==s)return a.manager.itemStart(e), setTimeout((function() {
                    t&&t(s), a.manager.itemEnd(e)
                }
                ),
                0),
                s;
                const l=(0,
                o.c)("img");
                function c() {
                    u(), n.add(e, this), t&&t(this), a.manager.itemEnd(e)
                }
                function h(t) {
                    u(), r&&r(t), a.manager.itemError(e), a.manager.itemEnd(e)
                }
                function u() {
                    l.removeEventListener("load", c, !1), l.removeEventListener("error", h, !1)
                }
                return l.addEventListener("load",
                c,
                !1),
                l.addEventListener("error",
                h,
                !1),
                "data:"!==e.slice(0,
                5)&&void 0!==this.crossOrigin&&(l.crossOrigin=this.crossOrigin),
                a.manager.itemStart(e),
                l.src=e,
                l
            }
        }
        var c=i(2887);
        class h extends s {
            constructor(e) {
                super(e)
            }
            load(e,
            t,
            i,
            n) {
                const r=new c.x, a=new l(this.manager);
                return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, (function(e) {
                    r.image=e, r.needsUpdate=!0, void 0!==t&&t(r)
                }
                ),
                i,
                n),
                r
            }
        }
    }
    ,
    1296:(e,
    t,
    i)=> {
        i.d(t, {
            F: ()=>o
        }
        );
        var n=i(1214),
        r=i(1700),
        a=i(6563);
        let s=0;
        class o extends n.p {
            constructor() {
                super(), this.isMaterial=!0, Object.defineProperty(this, "id", {
                    value: s++
                }
                ),
                this.uuid=a.DO(),
                this.name="",
                this.type="Material",
                this.blending=r.bd,
                this.side=r.Wl,
                this.vertexColors=!1,
                this.opacity=1,
                this.transparent=!1,
                this.blendSrc=r.k7,
                this.blendDst=r.Lg,
                this.blendEquation=r.bG,
                this.blendSrcAlpha=null,
                this.blendDstAlpha=null,
                this.blendEquationAlpha=null,
                this.depthFunc=r.vC,
                this.depthTest=!0,
                this.depthWrite=!0,
                this.stencilWriteMask=255,
                this.stencilFunc=r.cu,
                this.stencilRef=0,
                this.stencilFuncMask=255,
                this.stencilFail=r.x5,
                this.stencilZFail=r.x5,
                this.stencilZPass=r.x5,
                this.stencilWrite=!1,
                this.clippingPlanes=null,
                this.clipIntersection=!1,
                this.clipShadows=!1,
                this.shadowSide=null,
                this.colorWrite=!0,
                this.precision=null,
                this.polygonOffset=!1,
                this.polygonOffsetFactor=0,
                this.polygonOffsetUnits=0,
                this.dithering=!1,
                this.alphaToCoverage=!1,
                this.premultipliedAlpha=!1,
                this.visible=!0,
                this.toneMapped=!0,
                this.userData= {},
                this.version=0,
                this._alphaTest=0
            }
            get alphaTest() {
                return this._alphaTest
            }
            set alphaTest(e) {
                this._alphaTest>0!=e>0&&this.version++, this._alphaTest=e
            }
            onBuild() {}onBeforeRender() {}onBeforeCompile() {}customProgramCacheKey() {
                return this.onBeforeCompile.toString()
            }
            setValues(e) {
                if(void 0!==e)for(const t in e) {
                    const i=e[t];
                    if(void 0===i)continue;
                    const n=this[t];
                    void 0!==n&&(n&&n.isColor?n.set(i): n&&n.isVector3&&i&&i.isVector3?n.copy(i): this[t]=i)
                }
            }
            toJSON(e) {
                const t=void 0===e||"string"==typeof e;
                t&&(e= {
                    textures: {}, images: {}
                }
                );
                const i= {
                    metadata: {
                        version: 4.5, type: "Material", generator: "Material.toJSON"
                    }
                }
                ;
                function n(e) {
                    const t=[];
                    for(const i in e) {
                        const n=e[i];
                        delete n.metadata, t.push(n)
                    }
                    return t
                }
                if(i.uuid=this.uuid,
                i.type=this.type,
                ""!==this.name&&(i.name=this.name),
                this.color&&this.color.isColor&&(i.color=this.color.getHex()),
                void 0!==this.roughness&&(i.roughness=this.roughness),
                void 0!==this.metalness&&(i.metalness=this.metalness),
                void 0!==this.sheen&&(i.sheen=this.sheen),
                this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),
                void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),
                this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),
                this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),
                this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),
                void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),
                this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),
                void 0!==this.shininess&&(i.shininess=this.shininess),
                void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),
                void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),
                this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),
                this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),
                this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,
                i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),
                void 0!==this.iridescence&&(i.iridescence=this.iridescence),
                void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),
                void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),
                this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),
                this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),
                this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),
                this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),
                this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),
                this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,
                i.lightMapIntensity=this.lightMapIntensity),
                this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,
                i.aoMapIntensity=this.aoMapIntensity),
                this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,
                i.bumpScale=this.bumpScale),
                this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,
                i.normalMapType=this.normalMapType,
                i.normalScale=this.normalScale.toArray()),
                this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,
                i.displacementScale=this.displacementScale,
                i.displacementBias=this.displacementBias),
                this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),
                this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),
                this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),
                this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),
                this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),
                this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),
                this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,
                void 0!==this.combine&&(i.combine=this.combine)),
                void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),
                void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),
                void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),
                this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),
                void 0!==this.transmission&&(i.transmission=this.transmission),
                this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),
                void 0!==this.thickness&&(i.thickness=this.thickness),
                this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),
                void 0!==this.attenuationDistance&&(i.attenuationDistance=this.attenuationDistance),
                void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),
                void 0!==this.size&&(i.size=this.size),
                null!==this.shadowSide&&(i.shadowSide=this.shadowSide),
                void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),
                this.blending!==r.bd&&(i.blending=this.blending),
                this.side!==r.Wl&&(i.side=this.side),
                this.vertexColors&&(i.vertexColors=!0),
                this.opacity<1&&(i.opacity=this.opacity),
                !0===this.transparent&&(i.transparent=this.transparent),
                i.depthFunc=this.depthFunc,
                i.depthTest=this.depthTest,
                i.depthWrite=this.depthWrite,
                i.colorWrite=this.colorWrite,
                i.stencilWrite=this.stencilWrite,
                i.stencilWriteMask=this.stencilWriteMask,
                i.stencilFunc=this.stencilFunc,
                i.stencilRef=this.stencilRef,
                i.stencilFuncMask=this.stencilFuncMask,
                i.stencilFail=this.stencilFail,
                i.stencilZFail=this.stencilZFail,
                i.stencilZPass=this.stencilZPass,
                void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),
                !0===this.polygonOffset&&(i.polygonOffset=!0),
                0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),
                0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),
                void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),
                void 0!==this.dashSize&&(i.dashSize=this.dashSize),
                void 0!==this.gapSize&&(i.gapSize=this.gapSize),
                void 0!==this.scale&&(i.scale=this.scale),
                !0===this.dithering&&(i.dithering=!0),
                this.alphaTest>0&&(i.alphaTest=this.alphaTest),
                !0===this.alphaToCoverage&&(i.alphaToCoverage=this.alphaToCoverage),
                !0===this.premultipliedAlpha&&(i.premultipliedAlpha=this.premultipliedAlpha),
                !0===this.wireframe&&(i.wireframe=this.wireframe),
                this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),
                "round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),
                "round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),
                !0===this.flatShading&&(i.flatShading=this.flatShading),
                !1===this.visible&&(i.visible=!1),
                !1===this.toneMapped&&(i.toneMapped=!1),
                !1===this.fog&&(i.fog=!1),
                "{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),
                t) {
                    const t=n(e.textures), r=n(e.images);
                    t.length>0&&(i.textures=t), r.length>0&&(i.images=r)
                }
                return i
            }
            clone() {
                return(new this.constructor).copy(this)
            }
            copy(e) {
                this.name=e.name, this.blending=e.blending, this.side=e.side, this.vertexColors=e.vertexColors, this.opacity=e.opacity, this.transparent=e.transparent, this.blendSrc=e.blendSrc, this.blendDst=e.blendDst, this.blendEquation=e.blendEquation, this.blendSrcAlpha=e.blendSrcAlpha, this.blendDstAlpha=e.blendDstAlpha, this.blendEquationAlpha=e.blendEquationAlpha, this.depthFunc=e.depthFunc, this.depthTest=e.depthTest, this.depthWrite=e.depthWrite, this.stencilWriteMask=e.stencilWriteMask, this.stencilFunc=e.stencilFunc, this.stencilRef=e.stencilRef, this.stencilFuncMask=e.stencilFuncMask, this.stencilFail=e.stencilFail, this.stencilZFail=e.stencilZFail, this.stencilZPass=e.stencilZPass, this.stencilWrite=e.stencilWrite;
                const t=e.clippingPlanes;
                let i=null;
                if(null!==t) {
                    const e=t.length;
                    i=new Array(e);
                    for(let n=0;
                    n!==e;
                    ++n)i[n]=t[n].clone()
                }
                return this.clippingPlanes=i,
                this.clipIntersection=e.clipIntersection,
                this.clipShadows=e.clipShadows,
                this.shadowSide=e.shadowSide,
                this.colorWrite=e.colorWrite,
                this.precision=e.precision,
                this.polygonOffset=e.polygonOffset,
                this.polygonOffsetFactor=e.polygonOffsetFactor,
                this.polygonOffsetUnits=e.polygonOffsetUnits,
                this.dithering=e.dithering,
                this.alphaTest=e.alphaTest,
                this.alphaToCoverage=e.alphaToCoverage,
                this.premultipliedAlpha=e.premultipliedAlpha,
                this.visible=e.visible,
                this.toneMapped=e.toneMapped,
                this.userData=JSON.parse(JSON.stringify(e.userData)),
                this
            }
            dispose() {
                this.dispatchEvent( {
                    type: "dispose"
                }
                )
            }
            set needsUpdate(e) {
                !0===e&&this.version++
            }
        }
    }
    ,
    697:(e,
    t,
    i)=> {
        i.d(t, {
            v: ()=>s
        }
        );
        var n=i(1296),
        r=i(1700),
        a=i(7079);
        class s extends n.F {
            constructor(e) {
                super(), this.isMeshBasicMaterial=!0, this.type="MeshBasicMaterial", this.color=new a.I(16777215), this.map=null, this.lightMap=null, this.lightMapIntensity=1, this.aoMap=null, this.aoMapIntensity=1, this.specularMap=null, this.alphaMap=null, this.envMap=null, this.combine=r.Ns, this.reflectivity=1, this.refractionRatio=.98, this.wireframe=!1, this.wireframeLinewidth=1, this.wireframeLinecap="round", this.wireframeLinejoin="round", this.fog=!0, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.color.copy(e.color), this.map=e.map, this.lightMap=e.lightMap, this.lightMapIntensity=e.lightMapIntensity, this.aoMap=e.aoMap, this.aoMapIntensity=e.aoMapIntensity, this.specularMap=e.specularMap, this.alphaMap=e.alphaMap, this.envMap=e.envMap, this.combine=e.combine, this.reflectivity=e.reflectivity, this.refractionRatio=e.refractionRatio, this.wireframe=e.wireframe, this.wireframeLinewidth=e.wireframeLinewidth, this.wireframeLinecap=e.wireframeLinecap, this.wireframeLinejoin=e.wireframeLinejoin, this.fog=e.fog, this
            }
        }
    }
    ,
    8670:(e,
    t,
    i)=> {
        i.d(t, {
            j: ()=>a
        }
        );
        var n=i(1296),
        r=i(7526);
        class a extends n.F {
            constructor(e) {
                super(), this.isShaderMaterial=!0, this.type="ShaderMaterial", this.defines= {}, this.uniforms= {}, this.uniformsGroups=[], this.vertexShader="void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}", this.fragmentShader="void main(){gl_FragColor=vec4(1.0,0.0,0.0,1.0);}", this.linewidth=1, this.wireframe=!1, this.wireframeLinewidth=1, this.fog=!1, this.lights=!1, this.clipping=!1, this.extensions= {
                    derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1
                }
                ,
                this.defaultAttributeValues= {
                    color: [1, 1, 1], uv: [0, 0], uv2: [0, 0]
                }
                ,
                this.index0AttributeName=void 0,
                this.uniformsNeedUpdate=!1,
                this.glslVersion=null,
                void 0!==e&&this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.fragmentShader=e.fragmentShader, this.vertexShader=e.vertexShader, this.uniforms=(0, r.dw)(e.uniforms), this.uniformsGroups=(0, r.fd)(e.uniformsGroups), this.defines=Object.assign( {}, e.defines), this.wireframe=e.wireframe, this.wireframeLinewidth=e.wireframeLinewidth, this.fog=e.fog, this.lights=e.lights, this.clipping=e.clipping, this.extensions=Object.assign( {}, e.extensions), this.glslVersion=e.glslVersion, this
            }
            toJSON(e) {
                const t=super.toJSON(e);
                t.glslVersion=this.glslVersion, t.uniforms= {};
                for(const i in this.uniforms) {
                    const n=this.uniforms[i].value;
                    n&&n.isTexture?t.uniforms[i]= {
                        type: "t", value: n.toJSON(e).uuid
                    }
                    :n&&n.isColor?t.uniforms[i]= {
                        type: "c", value: n.getHex()
                    }
                    :n&&n.isVector2?t.uniforms[i]= {
                        type: "v2", value: n.toArray()
                    }
                    :n&&n.isVector3?t.uniforms[i]= {
                        type: "v3", value: n.toArray()
                    }
                    :n&&n.isVector4?t.uniforms[i]= {
                        type: "v4", value: n.toArray()
                    }
                    :n&&n.isMatrix3?t.uniforms[i]= {
                        type: "m3", value: n.toArray()
                    }
                    :n&&n.isMatrix4?t.uniforms[i]= {
                        type: "m4", value: n.toArray()
                    }
                    :t.uniforms[i]= {
                        value: n
                    }
                }
                Object.keys(this.defines).length>0&&(t.defines=this.defines),
                t.vertexShader=this.vertexShader,
                t.fragmentShader=this.fragmentShader;
                const i= {};
                for(const e in this.extensions)!0===this.extensions[e]&&(i[e]=!0);
                return Object.keys(i).length>0&&(t.extensions=i),
                t
            }
        }
    }
    ,
    578:(e,
    t,
    i)=> {
        i.d(t, {
            Z: ()=>r
        }
        );
        var n=i(9376);
        class r {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: new n.P(1/0, 1/0, 1/0), t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: new n.P(-1/0, -1/0, -1/0);
                this.isBox3=!0, this.min=e, this.max=t
            }
            set(e,
            t) {
                return this.min.copy(e), this.max.copy(t), this
            }
            setFromArray(e) {
                let t=1/0, i=1/0, n=1/0, r=-1/0, a=-1/0, s=-1/0;
                for(let o=0, l=e.length;
                o<l;
                o+=3) {
                    const l=e[o], c=e[o+1], h=e[o+2];
                    l<t&&(t=l), c<i&&(i=c), h<n&&(n=h), l>r&&(r=l), c>a&&(a=c), h>s&&(s=h)
                }
                return this.min.set(t,
                i,
                n),
                this.max.set(r,
                a,
                s),
                this
            }
            setFromBufferAttribute(e) {
                let t=1/0, i=1/0, n=1/0, r=-1/0, a=-1/0, s=-1/0;
                for(let o=0, l=e.count;
                o<l;
                o++) {
                    const l=e.getX(o), c=e.getY(o), h=e.getZ(o);
                    l<t&&(t=l), c<i&&(i=c), h<n&&(n=h), l>r&&(r=l), c>a&&(a=c), h>s&&(s=h)
                }
                return this.min.set(t,
                i,
                n),
                this.max.set(r,
                a,
                s),
                this
            }
            setFromPoints(e) {
                this.makeEmpty();
                for(let t=0, i=e.length;
                t<i;
                t++)this.expandByPoint(e[t]);
                return this
            }
            setFromCenterAndSize(e,
            t) {
                const i=s.copy(t).multiplyScalar(.5);
                return this.min.copy(e).sub(i), this.max.copy(e).add(i), this
            }
            setFromObject(e) {
                let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];
                return this.makeEmpty(), this.expandByObject(e, t)
            }
            clone() {
                return(new this.constructor).copy(this)
            }
            copy(e) {
                return this.min.copy(e.min), this.max.copy(e.max), this
            }
            makeEmpty() {
                return this.min.x=this.min.y=this.min.z=1/0, this.max.x=this.max.y=this.max.z=-1/0, this
            }
            isEmpty() {
                return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z
            }
            getCenter(e) {
                return this.isEmpty()?e.set(0, 0, 0): e.addVectors(this.min, this.max).multiplyScalar(.5)
            }
            getSize(e) {
                return this.isEmpty()?e.set(0, 0, 0): e.subVectors(this.max, this.min)
            }
            expandByPoint(e) {
                return this.min.min(e), this.max.max(e), this
            }
            expandByVector(e) {
                return this.min.sub(e), this.max.add(e), this
            }
            expandByScalar(e) {
                return this.min.addScalar(-e), this.max.addScalar(e), this
            }
            expandByObject(e) {
                let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];
                e.updateWorldMatrix(!1, !1);
                const i=e.geometry;
                if(void 0!==i)if(t&&null!=i.attributes&&void 0!==i.attributes.position) {
                    const t=i.attributes.position;
                    for(let i=0, n=t.count;
                    i<n;
                    i++)s.fromBufferAttribute(t, i).applyMatrix4(e.matrixWorld), this.expandByPoint(s)
                }
                else null===i.boundingBox&&i.computeBoundingBox(),
                o.copy(i.boundingBox),
                o.applyMatrix4(e.matrixWorld),
                this.union(o);
                const n=e.children;
                for(let e=0,
                i=n.length;
                e<i;
                e++)this.expandByObject(n[e],
                t);
                return this
            }
            containsPoint(e) {
                return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)
            }
            containsBox(e) {
                return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z
            }
            getParameter(e,
            t) {
                return t.set((e.x-this.min.x)/(this.max.x-this.min.x), (e.y-this.min.y)/(this.max.y-this.min.y), (e.z-this.min.z)/(this.max.z-this.min.z))
            }
            intersectsBox(e) {
                return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)
            }
            intersectsSphere(e) {
                return this.clampPoint(e.center, s), s.distanceToSquared(e.center)<=e.radius*e.radius
            }
            intersectsPlane(e) {
                let t, i;
                return e.normal.x>0?(t=e.normal.x*this.min.x, i=e.normal.x*this.max.x): (t=e.normal.x*this.max.x, i=e.normal.x*this.min.x), e.normal.y>0?(t+=e.normal.y*this.min.y, i+=e.normal.y*this.max.y): (t+=e.normal.y*this.max.y, i+=e.normal.y*this.min.y), e.normal.z>0?(t+=e.normal.z*this.min.z, i+=e.normal.z*this.max.z): (t+=e.normal.z*this.max.z, i+=e.normal.z*this.min.z), t<=-e.constant&&i>=-e.constant
            }
            intersectsTriangle(e) {
                if(this.isEmpty())return!1;
                this.getCenter(f), m.subVectors(this.max, f), l.subVectors(e.a, f), c.subVectors(e.b, f), h.subVectors(e.c, f), u.subVectors(c, l), d.subVectors(h, c), p.subVectors(l, h);
                let t=[0, -u.z, u.y, 0, -d.z, d.y, 0, -p.z, p.y, u.z, 0, -u.x, d.z, 0, -d.x, p.z, 0, -p.x, -u.y, u.x, 0, -d.y, d.x, 0, -p.y, p.x, 0];
                return!!v(t, l, c, h, m)&&(t=[1, 0, 0, 0, 1, 0, 0, 0, 1], !!v(t, l, c, h, m)&&(g.crossVectors(u, d), t=[g.x, g.y, g.z], v(t, l, c, h, m)))
            }
            clampPoint(e,
            t) {
                return t.copy(e).clamp(this.min, this.max)
            }
            distanceToPoint(e) {
                return s.copy(e).clamp(this.min, this.max).sub(e).length()
            }
            getBoundingSphere(e) {
                return this.getCenter(e.center), e.radius=.5*this.getSize(s).length(), e
            }
            intersect(e) {
                return this.min.max(e.min), this.max.min(e.max), this.isEmpty()&&this.makeEmpty(), this
            }
            union(e) {
                return this.min.min(e.min), this.max.max(e.max), this
            }
            applyMatrix4(e) {
                return this.isEmpty()||(a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(a)), this
            }
            translate(e) {
                return this.min.add(e), this.max.add(e), this
            }
            equals(e) {
                return e.min.equals(this.min)&&e.max.equals(this.max)
            }
        }
        const a=[new n.P,
        new n.P,
        new n.P,
        new n.P,
        new n.P,
        new n.P,
        new n.P,
        new n.P],
        s=new n.P,
        o=new r,
        l=new n.P,
        c=new n.P,
        h=new n.P,
        u=new n.P,
        d=new n.P,
        p=new n.P,
        f=new n.P,
        m=new n.P,
        g=new n.P,
        _=new n.P;
        function v(e,
        t,
        i,
        n,
        r) {
            for(let a=0, s=e.length-3;
            a<=s;
            a+=3) {
                _.fromArray(e, a);
                const s=r.x*Math.abs(_.x)+r.y*Math.abs(_.y)+r.z*Math.abs(_.z), o=t.dot(_), l=i.dot(_), c=n.dot(_);
                if(Math.max(-Math.max(o, l, c), Math.min(o, l, c))>s)return!1
            }
            return!0
        }
    }
    ,
    7079:(e,
    t,
    i)=> {
        i.d(t, {
            I: ()=>d
        }
        );
        var n=i(6563),
        r=i(8286),
        a=i(1700);
        const s= {
            aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074
        }
        ,
        o= {
            r: 0, g: 0, b: 0
        }
        ,
        l= {
            h: 0, s: 0, l: 0
        }
        ,
        c= {
            h: 0, s: 0, l: 0
        }
        ;
        function h(e,
        t,
        i) {
            return i<0&&(i+=1), i>1&&(i-=1), i<1/6?e+6*(t-e)*i: i<.5?t: i<2/3?e+6*(t-e)*(2/3-i): e
        }
        function u(e,
        t) {
            return t.r=e.r, t.g=e.g, t.b=e.b, t
        }
        class d {
            constructor(e, t, i) {
                return this.isColor=!0, this.r=1, this.g=1, this.b=1, void 0===t&&void 0===i?this.set(e): this.setRGB(e, t, i)
            }
            set(e) {
                return e&&e.isColor?this.copy(e): "number"==typeof e?this.setHex(e): "string"==typeof e&&this.setStyle(e), this
            }
            setScalar(e) {
                return this.r=e, this.g=e, this.b=e, this
            }
            setHex(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: a.KI;
                return e=Math.floor(e), this.r=(e>>16&255)/255, this.g=(e>>8&255)/255, this.b=(255&e)/255, r.ep.toWorkingColorSpace(this, t), this
            }
            setRGB(e,
            t,
            i) {
                let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: a.GU;
                return this.r=e, this.g=t, this.b=i, r.ep.toWorkingColorSpace(this, n), this
            }
            setHSL(e,
            t,
            i) {
                let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]: a.GU;
                if(e=(0, n.kz)(e, 1), t=(0, n.uZ)(t, 0, 1), i=(0, n.uZ)(i, 0, 1), 0===t)this.r=this.g=this.b=i;
                else {
                    const n=i<=.5?i*(1+t): i+t-i*t, r=2*i-n;
                    this.r=h(r, n, e+1/3), this.g=h(r, n, e), this.b=h(r, n, e-1/3)
                }
                return r.ep.toWorkingColorSpace(this,s),this
            }
            setStyle(e) {
                let t, i=arguments.length>1&&void 0!==arguments[1]?arguments[1]: a.KI;
                function n(e) {
                    void 0!==e&&parseFloat(e)
                }
                if(t=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
                    let e;
                    const a=t[1], s=t[2];
                    switch(a) {
                        case"rgb": case"rgba": if(e=/^\s*(\d+)\s*, \s*(\d+)\s*, \s*(\d+)\s*(?: , \s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255, parseInt(e[1], 10))/255, this.g=Math.min(255, parseInt(e[2], 10))/255, this.b=Math.min(255, parseInt(e[3], 10))/255, r.ep.toWorkingColorSpace(this, i), n(e[4]), this;
                        if(e=/^\s*(\d+)\%\s*, \s*(\d+)\%\s*, \s*(\d+)\%\s*(?: , \s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100, parseInt(e[1], 10))/100, this.g=Math.min(100, parseInt(e[2], 10))/100, this.b=Math.min(100, parseInt(e[3], 10))/100, r.ep.toWorkingColorSpace(this, i), n(e[4]), this;
                        break;
                        case"hsl": case"hsla": if(e=/^\s*(\d*\.?\d+)\s*, \s*(\d*\.?\d+)\%\s*, \s*(\d*\.?\d+)\%\s*(?: , \s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                            const t=parseFloat(e[1])/360, r=parseFloat(e[2])/100, a=parseFloat(e[3])/100;
                            return n(e[4]), this.setHSL(t, r, a, i)
                        }
                    }
                }
                else if(t=/^\#([A-Fa-f\d]+)$/.exec(e)) {
                    const e=t[1], n=e.length;
                    if(3===n)return this.r=parseInt(e.charAt(0)+e.charAt(0), 16)/255, this.g=parseInt(e.charAt(1)+e.charAt(1), 16)/255, this.b=parseInt(e.charAt(2)+e.charAt(2), 16)/255, r.ep.toWorkingColorSpace(this, i), this;
                    if(6===n)return this.r=parseInt(e.charAt(0)+e.charAt(1), 16)/255, this.g=parseInt(e.charAt(2)+e.charAt(3), 16)/255, this.b=parseInt(e.charAt(4)+e.charAt(5), 16)/255, r.ep.toWorkingColorSpace(this, i), this
                }
                return e&&e.length>0?this.setColorName(e,i):this
            }
            setColorName(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: a.KI;
                const i=s[e.toLowerCase()];
                return void 0!==i&&this.setHex(i, t), this
            }
            clone() {
                return new this.constructor(this.r, this.g, this.b)
            }
            copy(e) {
                return this.r=e.r, this.g=e.g, this.b=e.b, this
            }
            copySRGBToLinear(e) {
                return this.r=(0, r.PB)(e.r), this.g=(0, r.PB)(e.g), this.b=(0, r.PB)(e.b), this
            }
            copyLinearToSRGB(e) {
                return this.r=(0, r.QP)(e.r), this.g=(0, r.QP)(e.g), this.b=(0, r.QP)(e.b), this
            }
            convertSRGBToLinear() {
                return this.copySRGBToLinear(this), this
            }
            convertLinearToSRGB() {
                return this.copyLinearToSRGB(this), this
            }
            getHex() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: a.KI;
                return r.ep.fromWorkingColorSpace(u(this, o), e), (0, n.uZ)(255*o.r, 0, 255)<<16^(0, n.uZ)(255*o.g, 0, 255)<<8^(0, n.uZ)(255*o.b, 0, 255)<<0
            }
            getHexString() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: a.KI;
                return("000000"+this.getHex(e).toString(16)).slice(-6)
            }
            getHSL(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: a.GU;
                r.ep.fromWorkingColorSpace(u(this, o), t);
                const i=o.r, n=o.g, s=o.b, l=Math.max(i, n, s), c=Math.min(i, n, s);
                let h, d;
                const p=(c+l)/2;
                if(c===l)h=0, d=0;
                else {
                    const e=l-c;
                    switch(d=p<=.5?e/(l+c): e/(2-l-c), l) {
                        case i: h=(n-s)/e+(n<s?6: 0);
                        break;
                        case n: h=(s-i)/e+2;
                        break;
                        case s: h=(i-n)/e+4
                    }
                    h/=6
                }
                return e.h=h,
                e.s=d,
                e.l=p,
                e
            }
            getRGB(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: a.GU;
                return r.ep.fromWorkingColorSpace(u(this, o), t), e.r=o.r, e.g=o.g, e.b=o.b, e
            }
            getStyle() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: a.KI;
                return r.ep.fromWorkingColorSpace(u(this, o), e), e!==a.KI?`color($ {
                    e
                }
                $ {
                    o.r
                }
                $ {
                    o.g
                }
                $ {
                    o.b
                }
                )`:`rgb($ {
                    255*o.r|0
                }
                ,
                $ {
                    255*o.g|0
                }
                ,
                $ {
                    255*o.b|0
                }
                )`
            }
            offsetHSL(e,t,i) {
                return this.getHSL(l), l.h+=e, l.s+=t, l.l+=i, this.setHSL(l.h, l.s, l.l), this
            }
            add(e) {
                return this.r+=e.r, this.g+=e.g, this.b+=e.b, this
            }
            addColors(e,
            t) {
                return this.r=e.r+t.r, this.g=e.g+t.g, this.b=e.b+t.b, this
            }
            addScalar(e) {
                return this.r+=e, this.g+=e, this.b+=e, this
            }
            sub(e) {
                return this.r=Math.max(0, this.r-e.r), this.g=Math.max(0, this.g-e.g), this.b=Math.max(0, this.b-e.b), this
            }
            multiply(e) {
                return this.r*=e.r, this.g*=e.g, this.b*=e.b, this
            }
            multiplyScalar(e) {
                return this.r*=e, this.g*=e, this.b*=e, this
            }
            lerp(e,
            t) {
                return this.r+=(e.r-this.r)*t, this.g+=(e.g-this.g)*t, this.b+=(e.b-this.b)*t, this
            }
            lerpColors(e,
            t,
            i) {
                return this.r=e.r+(t.r-e.r)*i, this.g=e.g+(t.g-e.g)*i, this.b=e.b+(t.b-e.b)*i, this
            }
            lerpHSL(e,
            t) {
                this.getHSL(l), e.getHSL(c);
                const i=(0, n.t7)(l.h, c.h, t), r=(0, n.t7)(l.s, c.s, t), a=(0, n.t7)(l.l, c.l, t);
                return this.setHSL(i, r, a), this
            }
            equals(e) {
                return e.r===this.r&&e.g===this.g&&e.b===this.b
            }
            fromArray(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return this.r=e[t], this.g=e[t+1], this.b=e[t+2], this
            }
            toArray() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return e[t]=this.r, e[t+1]=this.g, e[t+2]=this.b, e
            }
            fromBufferAttribute(e,
            t) {
                return this.r=e.getX(t), this.g=e.getY(t), this.b=e.getZ(t), this
            }
            toJSON() {
                return this.getHex()
            }
            *[Symbol.iterator]() {
                yield this.r, yield this.g, yield this.b
            }
        }
        d.NAMES=s
    }
    ,
    8286:(e,t,i)=> {
        i.d(t, {
            PB: ()=>r, QP: ()=>a, ep: ()=>o
        }
        );
        var n=i(1700);
        function r(e) {
            return e<.04045?.0773993808*e: Math.pow(.9478672986*e+.0521327014, 2.4)
        }
        function a(e) {
            return e<.0031308?12.92*e: 1.055*Math.pow(e, .41666)-.055
        }
        const s= {
            [n.KI]: {
                [n.GU]: r
            }
            ,
            [n.GU]: {
                [n.KI]: a
            }
        }
        ,
        o= {
            legacyMode: !0, get workingColorSpace() {
                return n.GU
            }
            ,
            set workingColorSpace(e) {},
            convert:function(e,
            t,
            i) {
                if(this.legacyMode||t===i||!t||!i)return e;
                if(s[t]&&void 0!==s[t][i]) {
                    const n=s[t][i];
                    return e.r=n(e.r), e.g=n(e.g), e.b=n(e.b), e
                }
                throw new Error("Unsupported color space conversion.")
            }
            ,
            fromWorkingColorSpace:function(e,
            t) {
                return this.convert(e, this.workingColorSpace, t)
            }
            ,
            toWorkingColorSpace:function(e,
            t) {
                return this.convert(e, t, this.workingColorSpace)
            }
        }
    }
    ,
    9800:(e,
    t,
    i)=> {
        i.d(t, {
            U: ()=>l
        }
        );
        var n=i(4235),
        r=i(9049),
        a=i(6563);
        const s=new r.y,
        o=new n._;
        class l {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 0, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0, n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: l.DefaultOrder;
                this.isEuler=!0, this._x=e, this._y=t, this._z=i, this._order=n
            }
            get x() {
                return this._x
            }
            set x(e) {
                this._x=e, this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(e) {
                this._y=e, this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(e) {
                this._z=e, this._onChangeCallback()
            }
            get order() {
                return this._order
            }
            set order(e) {
                this._order=e, this._onChangeCallback()
            }
            set(e,
            t,
            i) {
                let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: this._order;
                return this._x=e, this._y=t, this._z=i, this._order=n, this._onChangeCallback(), this
            }
            clone() {
                return new this.constructor(this._x, this._y, this._z, this._order)
            }
            copy(e) {
                return this._x=e._x, this._y=e._y, this._z=e._z, this._order=e._order, this._onChangeCallback(), this
            }
            setFromRotationMatrix(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: this._order, i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];
                const n=e.elements, r=n[0], s=n[4], o=n[8], l=n[1], c=n[5], h=n[9], u=n[2], d=n[6], p=n[10];
                switch(t) {
                    case"XYZ": this._y=Math.asin((0, a.uZ)(o, -1, 1)), Math.abs(o)<.9999999?(this._x=Math.atan2(-h, p), this._z=Math.atan2(-s, r)): (this._x=Math.atan2(d, c), this._z=0);
                    break;
                    case"YXZ": this._x=Math.asin(-(0, a.uZ)(h, -1, 1)), Math.abs(h)<.9999999?(this._y=Math.atan2(o, p), this._z=Math.atan2(l, c)): (this._y=Math.atan2(-u, r), this._z=0);
                    break;
                    case"ZXY": this._x=Math.asin((0, a.uZ)(d, -1, 1)), Math.abs(d)<.9999999?(this._y=Math.atan2(-u, p), this._z=Math.atan2(-s, c)): (this._y=0, this._z=Math.atan2(l, r));
                    break;
                    case"ZYX": this._y=Math.asin(-(0, a.uZ)(u, -1, 1)), Math.abs(u)<.9999999?(this._x=Math.atan2(d, p), this._z=Math.atan2(l, r)): (this._x=0, this._z=Math.atan2(-s, c));
                    break;
                    case"YZX": this._z=Math.asin((0, a.uZ)(l, -1, 1)), Math.abs(l)<.9999999?(this._x=Math.atan2(-h, c), this._y=Math.atan2(-u, r)): (this._x=0, this._y=Math.atan2(o, p));
                    break;
                    case"XZY": this._z=Math.asin(-(0, a.uZ)(s, -1, 1)), Math.abs(s)<.9999999?(this._x=Math.atan2(d, c), this._y=Math.atan2(o, r)): (this._x=Math.atan2(-h, p), this._y=0)
                }
                return this._order=t,
                !0===i&&this._onChangeCallback(),
                this
            }
            setFromQuaternion(e,
            t,
            i) {
                return s.makeRotationFromQuaternion(e), this.setFromRotationMatrix(s, t, i)
            }
            setFromVector3(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: this._order;
                return this.set(e.x, e.y, e.z, t)
            }
            reorder(e) {
                return o.setFromEuler(this), this.setFromQuaternion(o, e)
            }
            equals(e) {
                return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order
            }
            fromArray(e) {
                return this._x=e[0], this._y=e[1], this._z=e[2], void 0!==e[3]&&(this._order=e[3]), this._onChangeCallback(), this
            }
            toArray() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return e[t]=this._x, e[t+1]=this._y, e[t+2]=this._z, e[t+3]=this._order, e
            }
            _onChange(e) {
                return this._onChangeCallback=e, this
            }
            _onChangeCallback() {}*[Symbol.iterator]() {
                yield this._x, yield this._y, yield this._z, yield this._order
            }
            toVector3() {}
        }
        l.DefaultOrder="XYZ",
        l.RotationOrders=["XYZ",
        "YZX",
        "ZXY",
        "XZY",
        "YXZ",
        "ZYX"]
    }
    ,
    6563:(e,
    t,
    i)=> {
        i.d(t, {
            DO: ()=>s, Fv: ()=>p, I3: ()=>a, cY: ()=>d, gy: ()=>u, kz: ()=>l, qW: ()=>r, t7: ()=>c, uZ: ()=>o, wt: ()=>h
        }
        );
        const n=["00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0a",
        "0b",
        "0c",
        "0d",
        "0e",
        "0f",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5a",
        "5b",
        "5c",
        "5d",
        "5e",
        "5f",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6a",
        "6b",
        "6c",
        "6d",
        "6e",
        "6f",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7a",
        "7b",
        "7c",
        "7d",
        "7e",
        "7f",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8a",
        "8b",
        "8c",
        "8d",
        "8e",
        "8f",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9a",
        "9b",
        "9c",
        "9d",
        "9e",
        "9f",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "aa",
        "ab",
        "ac",
        "ad",
        "ae",
        "af",
        "b0",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "ba",
        "bb",
        "bc",
        "bd",
        "be",
        "bf",
        "c0",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "ca",
        "cb",
        "cc",
        "cd",
        "ce",
        "cf",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "da",
        "db",
        "dc",
        "dd",
        "de",
        "df",
        "e0",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "ea",
        "eb",
        "ec",
        "ed",
        "ee",
        "ef",
        "f0",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "fa",
        "fb",
        "fc",
        "fd",
        "fe",
        "ff"];
        const r=Math.PI/180,
        a=180/Math.PI;
        function s() {
            const e=4294967295*Math.random()|0, t=4294967295*Math.random()|0, i=4294967295*Math.random()|0, r=4294967295*Math.random()|0;
            return(n[255&e]+n[e>>8&255]+n[e>>16&255]+n[e>>24&255]+"-"+n[255&t]+n[t>>8&255]+"-"+n[t>>16&15|64]+n[t>>24&255]+"-"+n[63&i|128]+n[i>>8&255]+"-"+n[i>>16&255]+n[i>>24&255]+n[255&r]+n[r>>8&255]+n[r>>16&255]+n[r>>24&255]).toLowerCase()
        }
        function o(e,
        t,
        i) {
            return Math.max(t, Math.min(i, e))
        }
        function l(e,
        t) {
            return(e%t+t)%t
        }
        function c(e,
        t,
        i) {
            return(1-i)*e+i*t
        }
        function h(e) {
            return 0==(e&e-1)&&0!==e
        }
        function u(e) {
            return Math.pow(2, Math.floor(Math.log(e)/Math.LN2))
        }
        function d(e,
        t) {
            switch(t.constructor) {
                case Float32Array: return e;
                case Uint16Array: return e/65535;
                case Uint8Array: return e/255;
                case Int16Array: return Math.max(e/32767, -1);
                case Int8Array: return Math.max(e/127, -1);
                default: throw new Error("Invalid component type.")
            }
        }
        function p(e,
        t) {
            switch(t.constructor) {
                case Float32Array: return e;
                case Uint16Array: return Math.round(65535*e);
                case Uint8Array: return Math.round(255*e);
                case Int16Array: return Math.round(32767*e);
                case Int8Array: return Math.round(127*e);
                default: throw new Error("Invalid component type.")
            }
        }
    }
    ,
    4914:(e,
    t,
    i)=> {
        i.d(t, {
            V: ()=>n
        }
        );
        class n {
            constructor() {
                n.prototype.isMatrix3=!0, this.elements=[1, 0, 0, 0, 1, 0, 0, 0, 1]
            }
            set(e,
            t,
            i,
            n,
            r,
            a,
            s,
            o,
            l) {
                const c=this.elements;
                return c[0]=e, c[1]=n, c[2]=s, c[3]=t, c[4]=r, c[5]=o, c[6]=i, c[7]=a, c[8]=l, this
            }
            identity() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
            }
            copy(e) {
                const t=this.elements, i=e.elements;
                return t[0]=i[0], t[1]=i[1], t[2]=i[2], t[3]=i[3], t[4]=i[4], t[5]=i[5], t[6]=i[6], t[7]=i[7], t[8]=i[8], this
            }
            extractBasis(e,
            t,
            i) {
                return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
            }
            setFromMatrix4(e) {
                const t=e.elements;
                return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
            }
            multiply(e) {
                return this.multiplyMatrices(this, e)
            }
            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }
            multiplyMatrices(e,
            t) {
                const i=e.elements, n=t.elements, r=this.elements, a=i[0], s=i[3], o=i[6], l=i[1], c=i[4], h=i[7], u=i[2], d=i[5], p=i[8], f=n[0], m=n[3], g=n[6], _=n[1], v=n[4], x=n[7], M=n[2], y=n[5], S=n[8];
                return r[0]=a*f+s*_+o*M, r[3]=a*m+s*v+o*y, r[6]=a*g+s*x+o*S, r[1]=l*f+c*_+h*M, r[4]=l*m+c*v+h*y, r[7]=l*g+c*x+h*S, r[2]=u*f+d*_+p*M, r[5]=u*m+d*v+p*y, r[8]=u*g+d*x+p*S, this
            }
            multiplyScalar(e) {
                const t=this.elements;
                return t[0]*=e, t[3]*=e, t[6]*=e, t[1]*=e, t[4]*=e, t[7]*=e, t[2]*=e, t[5]*=e, t[8]*=e, this
            }
            determinant() {
                const e=this.elements, t=e[0], i=e[1], n=e[2], r=e[3], a=e[4], s=e[5], o=e[6], l=e[7], c=e[8];
                return t*a*c-t*s*l-i*r*c+i*s*o+n*r*l-n*a*o
            }
            invert() {
                const e=this.elements, t=e[0], i=e[1], n=e[2], r=e[3], a=e[4], s=e[5], o=e[6], l=e[7], c=e[8], h=c*a-s*l, u=s*o-c*r, d=l*r-a*o, p=t*h+i*u+n*d;
                if(0===p)return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                const f=1/p;
                return e[0]=h*f, e[1]=(n*l-c*i)*f, e[2]=(s*i-n*a)*f, e[3]=u*f, e[4]=(c*t-n*o)*f, e[5]=(n*r-s*t)*f, e[6]=d*f, e[7]=(i*o-l*t)*f, e[8]=(a*t-i*r)*f, this
            }
            transpose() {
                let e;
                const t=this.elements;
                return e=t[1], t[1]=t[3], t[3]=e, e=t[2], t[2]=t[6], t[6]=e, e=t[5], t[5]=t[7], t[7]=e, this
            }
            getNormalMatrix(e) {
                return this.setFromMatrix4(e).invert().transpose()
            }
            transposeIntoArray(e) {
                const t=this.elements;
                return e[0]=t[0], e[1]=t[3], e[2]=t[6], e[3]=t[1], e[4]=t[4], e[5]=t[7], e[6]=t[2], e[7]=t[5], e[8]=t[8], this
            }
            setUvTransform(e,
            t,
            i,
            n,
            r,
            a,
            s) {
                const o=Math.cos(r), l=Math.sin(r);
                return this.set(i*o, i*l, -i*(o*a+l*s)+a+e, -n*l, n*o, -n*(-l*a+o*s)+s+t, 0, 0, 1), this
            }
            scale(e,
            t) {
                const i=this.elements;
                return i[0]*=e, i[3]*=e, i[6]*=e, i[1]*=t, i[4]*=t, i[7]*=t, this
            }
            rotate(e) {
                const t=Math.cos(e), i=Math.sin(e), n=this.elements, r=n[0], a=n[3], s=n[6], o=n[1], l=n[4], c=n[7];
                return n[0]=t*r+i*o, n[3]=t*a+i*l, n[6]=t*s+i*c, n[1]=-i*r+t*o, n[4]=-i*a+t*l, n[7]=-i*s+t*c, this
            }
            translate(e,
            t) {
                const i=this.elements;
                return i[0]+=e*i[2], i[3]+=e*i[5], i[6]+=e*i[8], i[1]+=t*i[2], i[4]+=t*i[5], i[7]+=t*i[8], this
            }
            equals(e) {
                const t=this.elements, i=e.elements;
                for(let e=0;
                e<9;
                e++)if(t[e]!==i[e])return!1;
                return!0
            }
            fromArray(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                for(let i=0;
                i<9;
                i++)this.elements[i]=e[i+t];
                return this
            }
            toArray() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                const i=this.elements;
                return e[t]=i[0], e[t+1]=i[1], e[t+2]=i[2], e[t+3]=i[3], e[t+4]=i[4], e[t+5]=i[5], e[t+6]=i[6], e[t+7]=i[7], e[t+8]=i[8], e
            }
            clone() {
                return(new this.constructor).fromArray(this.elements)
            }
        }
    }
    ,
    9049:(e,
    t,
    i)=> {
        i.d(t, {
            y: ()=>r
        }
        );
        var n=i(9376);
        class r {
            constructor() {
                r.prototype.isMatrix4=!0, this.elements=[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }
            set(e,
            t,
            i,
            n,
            r,
            a,
            s,
            o,
            l,
            c,
            h,
            u,
            d,
            p,
            f,
            m) {
                const g=this.elements;
                return g[0]=e, g[4]=t, g[8]=i, g[12]=n, g[1]=r, g[5]=a, g[9]=s, g[13]=o, g[2]=l, g[6]=c, g[10]=h, g[14]=u, g[3]=d, g[7]=p, g[11]=f, g[15]=m, this
            }
            identity() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            }
            clone() {
                return(new r).fromArray(this.elements)
            }
            copy(e) {
                const t=this.elements, i=e.elements;
                return t[0]=i[0], t[1]=i[1], t[2]=i[2], t[3]=i[3], t[4]=i[4], t[5]=i[5], t[6]=i[6], t[7]=i[7], t[8]=i[8], t[9]=i[9], t[10]=i[10], t[11]=i[11], t[12]=i[12], t[13]=i[13], t[14]=i[14], t[15]=i[15], this
            }
            copyPosition(e) {
                const t=this.elements, i=e.elements;
                return t[12]=i[12], t[13]=i[13], t[14]=i[14], this
            }
            setFromMatrix3(e) {
                const t=e.elements;
                return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
            }
            extractBasis(e,
            t,
            i) {
                return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
            }
            makeBasis(e,
            t,
            i) {
                return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this
            }
            extractRotation(e) {
                const t=this.elements, i=e.elements, n=1/a.setFromMatrixColumn(e, 0).length(), r=1/a.setFromMatrixColumn(e, 1).length(), s=1/a.setFromMatrixColumn(e, 2).length();
                return t[0]=i[0]*n, t[1]=i[1]*n, t[2]=i[2]*n, t[3]=0, t[4]=i[4]*r, t[5]=i[5]*r, t[6]=i[6]*r, t[7]=0, t[8]=i[8]*s, t[9]=i[9]*s, t[10]=i[10]*s, t[11]=0, t[12]=0, t[13]=0, t[14]=0, t[15]=1, this
            }
            makeRotationFromEuler(e) {
                const t=this.elements, i=e.x, n=e.y, r=e.z, a=Math.cos(i), s=Math.sin(i), o=Math.cos(n), l=Math.sin(n), c=Math.cos(r), h=Math.sin(r);
                if("XYZ"===e.order) {
                    const e=a*c, i=a*h, n=s*c, r=s*h;
                    t[0]=o*c, t[4]=-o*h, t[8]=l, t[1]=i+n*l, t[5]=e-r*l, t[9]=-s*o, t[2]=r-e*l, t[6]=n+i*l, t[10]=a*o
                }
                else if("YXZ"===e.order) {
                    const e=o*c, i=o*h, n=l*c, r=l*h;
                    t[0]=e+r*s, t[4]=n*s-i, t[8]=a*l, t[1]=a*h, t[5]=a*c, t[9]=-s, t[2]=i*s-n, t[6]=r+e*s, t[10]=a*o
                }
                else if("ZXY"===e.order) {
                    const e=o*c, i=o*h, n=l*c, r=l*h;
                    t[0]=e-r*s, t[4]=-a*h, t[8]=n+i*s, t[1]=i+n*s, t[5]=a*c, t[9]=r-e*s, t[2]=-a*l, t[6]=s, t[10]=a*o
                }
                else if("ZYX"===e.order) {
                    const e=a*c, i=a*h, n=s*c, r=s*h;
                    t[0]=o*c, t[4]=n*l-i, t[8]=e*l+r, t[1]=o*h, t[5]=r*l+e, t[9]=i*l-n, t[2]=-l, t[6]=s*o, t[10]=a*o
                }
                else if("YZX"===e.order) {
                    const e=a*o, i=a*l, n=s*o, r=s*l;
                    t[0]=o*c, t[4]=r-e*h, t[8]=n*h+i, t[1]=h, t[5]=a*c, t[9]=-s*c, t[2]=-l*c, t[6]=i*h+n, t[10]=e-r*h
                }
                else if("XZY"===e.order) {
                    const e=a*o, i=a*l, n=s*o, r=s*l;
                    t[0]=o*c, t[4]=-h, t[8]=l*c, t[1]=e*h+r, t[5]=a*c, t[9]=i*h-n, t[2]=n*h-i, t[6]=s*c, t[10]=r*h+e
                }
                return t[3]=0,
                t[7]=0,
                t[11]=0,
                t[12]=0,
                t[13]=0,
                t[14]=0,
                t[15]=1,
                this
            }
            makeRotationFromQuaternion(e) {
                return this.compose(o, e, l)
            }
            lookAt(e,
            t,
            i) {
                const n=this.elements;
                return u.subVectors(e, t), 0===u.lengthSq()&&(u.z=1), u.normalize(), c.crossVectors(i, u), 0===c.lengthSq()&&(1===Math.abs(i.z)?u.x+=1e-4: u.z+=1e-4, u.normalize(), c.crossVectors(i, u)), c.normalize(), h.crossVectors(u, c), n[0]=c.x, n[4]=h.x, n[8]=u.x, n[1]=c.y, n[5]=h.y, n[9]=u.y, n[2]=c.z, n[6]=h.z, n[10]=u.z, this
            }
            multiply(e) {
                return this.multiplyMatrices(this, e)
            }
            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }
            multiplyMatrices(e,
            t) {
                const i=e.elements, n=t.elements, r=this.elements, a=i[0], s=i[4], o=i[8], l=i[12], c=i[1], h=i[5], u=i[9], d=i[13], p=i[2], f=i[6], m=i[10], g=i[14], _=i[3], v=i[7], x=i[11], M=i[15], y=n[0], S=n[4], b=n[8], w=n[12], T=n[1], E=n[5], A=n[9], C=n[13], L=n[2], P=n[6], D=n[10], R=n[14], I=n[3], N=n[7], O=n[11], z=n[15];
                return r[0]=a*y+s*T+o*L+l*I, r[4]=a*S+s*E+o*P+l*N, r[8]=a*b+s*A+o*D+l*O, r[12]=a*w+s*C+o*R+l*z, r[1]=c*y+h*T+u*L+d*I, r[5]=c*S+h*E+u*P+d*N, r[9]=c*b+h*A+u*D+d*O, r[13]=c*w+h*C+u*R+d*z, r[2]=p*y+f*T+m*L+g*I, r[6]=p*S+f*E+m*P+g*N, r[10]=p*b+f*A+m*D+g*O, r[14]=p*w+f*C+m*R+g*z, r[3]=_*y+v*T+x*L+M*I, r[7]=_*S+v*E+x*P+M*N, r[11]=_*b+v*A+x*D+M*O, r[15]=_*w+v*C+x*R+M*z, this
            }
            multiplyScalar(e) {
                const t=this.elements;
                return t[0]*=e, t[4]*=e, t[8]*=e, t[12]*=e, t[1]*=e, t[5]*=e, t[9]*=e, t[13]*=e, t[2]*=e, t[6]*=e, t[10]*=e, t[14]*=e, t[3]*=e, t[7]*=e, t[11]*=e, t[15]*=e, this
            }
            determinant() {
                const e=this.elements, t=e[0], i=e[4], n=e[8], r=e[12], a=e[1], s=e[5], o=e[9], l=e[13], c=e[2], h=e[6], u=e[10], d=e[14];
                return e[3]*(+r*o*h-n*l*h-r*s*u+i*l*u+n*s*d-i*o*d)+e[7]*(+t*o*d-t*l*u+r*a*u-n*a*d+n*l*c-r*o*c)+e[11]*(+t*l*h-t*s*d-r*a*h+i*a*d+r*s*c-i*l*c)+e[15]*(-n*s*c-t*o*h+t*s*u+n*a*h-i*a*u+i*o*c)
            }
            transpose() {
                const e=this.elements;
                let t;
                return t=e[1], e[1]=e[4], e[4]=t, t=e[2], e[2]=e[8], e[8]=t, t=e[6], e[6]=e[9], e[9]=t, t=e[3], e[3]=e[12], e[12]=t, t=e[7], e[7]=e[13], e[13]=t, t=e[11], e[11]=e[14], e[14]=t, this
            }
            setPosition(e,
            t,
            i) {
                const n=this.elements;
                return e.isVector3?(n[12]=e.x, n[13]=e.y, n[14]=e.z): (n[12]=e, n[13]=t, n[14]=i), this
            }
            invert() {
                const e=this.elements, t=e[0], i=e[1], n=e[2], r=e[3], a=e[4], s=e[5], o=e[6], l=e[7], c=e[8], h=e[9], u=e[10], d=e[11], p=e[12], f=e[13], m=e[14], g=e[15], _=h*m*l-f*u*l+f*o*d-s*m*d-h*o*g+s*u*g, v=p*u*l-c*m*l-p*o*d+a*m*d+c*o*g-a*u*g, x=c*f*l-p*h*l+p*s*d-a*f*d-c*s*g+a*h*g, M=p*h*o-c*f*o-p*s*u+a*f*u+c*s*m-a*h*m, y=t*_+i*v+n*x+r*M;
                if(0===y)return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                const S=1/y;
                return e[0]=_*S, e[1]=(f*u*r-h*m*r-f*n*d+i*m*d+h*n*g-i*u*g)*S, e[2]=(s*m*r-f*o*r+f*n*l-i*m*l-s*n*g+i*o*g)*S, e[3]=(h*o*r-s*u*r-h*n*l+i*u*l+s*n*d-i*o*d)*S, e[4]=v*S, e[5]=(c*m*r-p*u*r+p*n*d-t*m*d-c*n*g+t*u*g)*S, e[6]=(p*o*r-a*m*r-p*n*l+t*m*l+a*n*g-t*o*g)*S, e[7]=(a*u*r-c*o*r+c*n*l-t*u*l-a*n*d+t*o*d)*S, e[8]=x*S, e[9]=(p*h*r-c*f*r-p*i*d+t*f*d+c*i*g-t*h*g)*S, e[10]=(a*f*r-p*s*r+p*i*l-t*f*l-a*i*g+t*s*g)*S, e[11]=(c*s*r-a*h*r-c*i*l+t*h*l+a*i*d-t*s*d)*S, e[12]=M*S, e[13]=(c*f*n-p*h*n+p*i*u-t*f*u-c*i*m+t*h*m)*S, e[14]=(p*s*n-a*f*n-p*i*o+t*f*o+a*i*m-t*s*m)*S, e[15]=(a*h*n-c*s*n+c*i*o-t*h*o-a*i*u+t*s*u)*S, this
            }
            scale(e) {
                const t=this.elements, i=e.x, n=e.y, r=e.z;
                return t[0]*=i, t[4]*=n, t[8]*=r, t[1]*=i, t[5]*=n, t[9]*=r, t[2]*=i, t[6]*=n, t[10]*=r, t[3]*=i, t[7]*=n, t[11]*=r, this
            }
            getMaxScaleOnAxis() {
                const e=this.elements, t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2], i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6], n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];
                return Math.sqrt(Math.max(t, i, n))
            }
            makeTranslation(e,
            t,
            i) {
                return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this
            }
            makeRotationX(e) {
                const t=Math.cos(e), i=Math.sin(e);
                return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this
            }
            makeRotationY(e) {
                const t=Math.cos(e), i=Math.sin(e);
                return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this
            }
            makeRotationZ(e) {
                const t=Math.cos(e), i=Math.sin(e);
                return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            }
            makeRotationAxis(e,
            t) {
                const i=Math.cos(t), n=Math.sin(t), r=1-i, a=e.x, s=e.y, o=e.z, l=r*a, c=r*s;
                return this.set(l*a+i, l*s-n*o, l*o+n*s, 0, l*s+n*o, c*s+i, c*o-n*a, 0, l*o-n*s, c*o+n*a, r*o*o+i, 0, 0, 0, 0, 1), this
            }
            makeScale(e,
            t,
            i) {
                return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
            }
            makeShear(e,
            t,
            i,
            n,
            r,
            a) {
                return this.set(1, i, r, 0, e, 1, a, 0, t, n, 1, 0, 0, 0, 0, 1), this
            }
            compose(e,
            t,
            i) {
                const n=this.elements, r=t._x, a=t._y, s=t._z, o=t._w, l=r+r, c=a+a, h=s+s, u=r*l, d=r*c, p=r*h, f=a*c, m=a*h, g=s*h, _=o*l, v=o*c, x=o*h, M=i.x, y=i.y, S=i.z;
                return n[0]=(1-(f+g))*M, n[1]=(d+x)*M, n[2]=(p-v)*M, n[3]=0, n[4]=(d-x)*y, n[5]=(1-(u+g))*y, n[6]=(m+_)*y, n[7]=0, n[8]=(p+v)*S, n[9]=(m-_)*S, n[10]=(1-(u+f))*S, n[11]=0, n[12]=e.x, n[13]=e.y, n[14]=e.z, n[15]=1, this
            }
            decompose(e,
            t,
            i) {
                const n=this.elements;
                let r=a.set(n[0], n[1], n[2]).length();
                const o=a.set(n[4], n[5], n[6]).length(), l=a.set(n[8], n[9], n[10]).length();
                this.determinant()<0&&(r=-r), e.x=n[12], e.y=n[13], e.z=n[14], s.copy(this);
                const c=1/r, h=1/o, u=1/l;
                return s.elements[0]*=c, s.elements[1]*=c, s.elements[2]*=c, s.elements[4]*=h, s.elements[5]*=h, s.elements[6]*=h, s.elements[8]*=u, s.elements[9]*=u, s.elements[10]*=u, t.setFromRotationMatrix(s), i.x=r, i.y=o, i.z=l, this
            }
            makePerspective(e,
            t,
            i,
            n,
            r,
            a) {
                const s=this.elements, o=2*r/(t-e), l=2*r/(i-n), c=(t+e)/(t-e), h=(i+n)/(i-n), u=-(a+r)/(a-r), d=-2*a*r/(a-r);
                return s[0]=o, s[4]=0, s[8]=c, s[12]=0, s[1]=0, s[5]=l, s[9]=h, s[13]=0, s[2]=0, s[6]=0, s[10]=u, s[14]=d, s[3]=0, s[7]=0, s[11]=-1, s[15]=0, this
            }
            makeOrthographic(e,
            t,
            i,
            n,
            r,
            a) {
                const s=this.elements, o=1/(t-e), l=1/(i-n), c=1/(a-r), h=(t+e)*o, u=(i+n)*l, d=(a+r)*c;
                return s[0]=2*o, s[4]=0, s[8]=0, s[12]=-h, s[1]=0, s[5]=2*l, s[9]=0, s[13]=-u, s[2]=0, s[6]=0, s[10]=-2*c, s[14]=-d, s[3]=0, s[7]=0, s[11]=0, s[15]=1, this
            }
            equals(e) {
                const t=this.elements, i=e.elements;
                for(let e=0;
                e<16;
                e++)if(t[e]!==i[e])return!1;
                return!0
            }
            fromArray(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                for(let i=0;
                i<16;
                i++)this.elements[i]=e[i+t];
                return this
            }
            toArray() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                const i=this.elements;
                return e[t]=i[0], e[t+1]=i[1], e[t+2]=i[2], e[t+3]=i[3], e[t+4]=i[4], e[t+5]=i[5], e[t+6]=i[6], e[t+7]=i[7], e[t+8]=i[8], e[t+9]=i[9], e[t+10]=i[10], e[t+11]=i[11], e[t+12]=i[12], e[t+13]=i[13], e[t+14]=i[14], e[t+15]=i[15], e
            }
        }
        const a=new n.P,
        s=new r,
        o=new n.P(0,
        0,
        0),
        l=new n.P(1,
        1,
        1),
        c=new n.P,
        h=new n.P,
        u=new n.P
    }
    ,
    4235:(e,
    t,
    i)=> {
        i.d(t, {
            _: ()=>r
        }
        );
        var n=i(6563);
        class r {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 0, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0, n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 1;
                this.isQuaternion=!0, this._x=e, this._y=t, this._z=i, this._w=n
            }
            static slerpFlat(e,
            t,
            i,
            n,
            r,
            a,
            s) {
                let o=i[n+0], l=i[n+1], c=i[n+2], h=i[n+3];
                const u=r[a+0], d=r[a+1], p=r[a+2], f=r[a+3];
                if(0===s)return e[t+0]=o, e[t+1]=l, e[t+2]=c, void(e[t+3]=h);
                if(1===s)return e[t+0]=u, e[t+1]=d, e[t+2]=p, void(e[t+3]=f);
                if(h!==f||o!==u||l!==d||c!==p) {
                    let e=1-s;
                    const t=o*u+l*d+c*p+h*f, i=t>=0?1: -1, n=1-t*t;
                    if(n>Number.EPSILON) {
                        const r=Math.sqrt(n), a=Math.atan2(r, t*i);
                        e=Math.sin(e*a)/r, s=Math.sin(s*a)/r
                    }
                    const r=s*i;
                    if(o=o*e+u*r,
                    l=l*e+d*r,
                    c=c*e+p*r,
                    h=h*e+f*r,
                    e===1-s) {
                        const e=1/Math.sqrt(o*o+l*l+c*c+h*h);
                        o*=e, l*=e, c*=e, h*=e
                    }
                }
                e[t]=o,
                e[t+1]=l,
                e[t+2]=c,
                e[t+3]=h
            }
            static multiplyQuaternionsFlat(e,
            t,
            i,
            n,
            r,
            a) {
                const s=i[n], o=i[n+1], l=i[n+2], c=i[n+3], h=r[a], u=r[a+1], d=r[a+2], p=r[a+3];
                return e[t]=s*p+c*h+o*d-l*u, e[t+1]=o*p+c*u+l*h-s*d, e[t+2]=l*p+c*d+s*u-o*h, e[t+3]=c*p-s*h-o*u-l*d, e
            }
            get x() {
                return this._x
            }
            set x(e) {
                this._x=e, this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(e) {
                this._y=e, this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(e) {
                this._z=e, this._onChangeCallback()
            }
            get w() {
                return this._w
            }
            set w(e) {
                this._w=e, this._onChangeCallback()
            }
            set(e,
            t,
            i,
            n) {
                return this._x=e, this._y=t, this._z=i, this._w=n, this._onChangeCallback(), this
            }
            clone() {
                return new this.constructor(this._x, this._y, this._z, this._w)
            }
            copy(e) {
                return this._x=e.x, this._y=e.y, this._z=e.z, this._w=e.w, this._onChangeCallback(), this
            }
            setFromEuler(e,
            t) {
                const i=e._x, n=e._y, r=e._z, a=e._order, s=Math.cos, o=Math.sin, l=s(i/2), c=s(n/2), h=s(r/2), u=o(i/2), d=o(n/2), p=o(r/2);
                switch(a) {
                    case"XYZ": this._x=u*c*h+l*d*p, this._y=l*d*h-u*c*p, this._z=l*c*p+u*d*h, this._w=l*c*h-u*d*p;
                    break;
                    case"YXZ": this._x=u*c*h+l*d*p, this._y=l*d*h-u*c*p, this._z=l*c*p-u*d*h, this._w=l*c*h+u*d*p;
                    break;
                    case"ZXY": this._x=u*c*h-l*d*p, this._y=l*d*h+u*c*p, this._z=l*c*p+u*d*h, this._w=l*c*h-u*d*p;
                    break;
                    case"ZYX": this._x=u*c*h-l*d*p, this._y=l*d*h+u*c*p, this._z=l*c*p-u*d*h, this._w=l*c*h+u*d*p;
                    break;
                    case"YZX": this._x=u*c*h+l*d*p, this._y=l*d*h+u*c*p, this._z=l*c*p-u*d*h, this._w=l*c*h-u*d*p;
                    break;
                    case"XZY": this._x=u*c*h-l*d*p, this._y=l*d*h-u*c*p, this._z=l*c*p+u*d*h, this._w=l*c*h+u*d*p
                }
                return!1!==t&&this._onChangeCallback(),
                this
            }
            setFromAxisAngle(e,
            t) {
                const i=t/2, n=Math.sin(i);
                return this._x=e.x*n, this._y=e.y*n, this._z=e.z*n, this._w=Math.cos(i), this._onChangeCallback(), this
            }
            setFromRotationMatrix(e) {
                const t=e.elements, i=t[0], n=t[4], r=t[8], a=t[1], s=t[5], o=t[9], l=t[2], c=t[6], h=t[10], u=i+s+h;
                if(u>0) {
                    const e=.5/Math.sqrt(u+1);
                    this._w=.25/e, this._x=(c-o)*e, this._y=(r-l)*e, this._z=(a-n)*e
                }
                else if(i>s&&i>h) {
                    const e=2*Math.sqrt(1+i-s-h);
                    this._w=(c-o)/e, this._x=.25*e, this._y=(n+a)/e, this._z=(r+l)/e
                }
                else if(s>h) {
                    const e=2*Math.sqrt(1+s-i-h);
                    this._w=(r-l)/e, this._x=(n+a)/e, this._y=.25*e, this._z=(o+c)/e
                }
                else {
                    const e=2*Math.sqrt(1+h-i-s);
                    this._w=(a-n)/e, this._x=(r+l)/e, this._y=(o+c)/e, this._z=.25*e
                }
                return this._onChangeCallback(),
                this
            }
            setFromUnitVectors(e,
            t) {
                let i=e.dot(t)+1;
                return i<Number.EPSILON?(i=0, Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y, this._y=e.x, this._z=0, this._w=i): (this._x=0, this._y=-e.z, this._z=e.y, this._w=i)): (this._x=e.y*t.z-e.z*t.y, this._y=e.z*t.x-e.x*t.z, this._z=e.x*t.y-e.y*t.x, this._w=i), this.normalize()
            }
            angleTo(e) {
                return 2*Math.acos(Math.abs(n.uZ(this.dot(e), -1, 1)))
            }
            rotateTowards(e,
            t) {
                const i=this.angleTo(e);
                if(0===i)return this;
                const n=Math.min(1, t/i);
                return this.slerp(e, n), this
            }
            identity() {
                return this.set(0, 0, 0, 1)
            }
            invert() {
                return this.conjugate()
            }
            conjugate() {
                return this._x*=-1, this._y*=-1, this._z*=-1, this._onChangeCallback(), this
            }
            dot(e) {
                return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w
            }
            lengthSq() {
                return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w
            }
            length() {
                return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)
            }
            normalize() {
                let e=this.length();
                return 0===e?(this._x=0, this._y=0, this._z=0, this._w=1): (e=1/e, this._x=this._x*e, this._y=this._y*e, this._z=this._z*e, this._w=this._w*e), this._onChangeCallback(), this
            }
            multiply(e) {
                return this.multiplyQuaternions(this, e)
            }
            premultiply(e) {
                return this.multiplyQuaternions(e, this)
            }
            multiplyQuaternions(e,
            t) {
                const i=e._x, n=e._y, r=e._z, a=e._w, s=t._x, o=t._y, l=t._z, c=t._w;
                return this._x=i*c+a*s+n*l-r*o, this._y=n*c+a*o+r*s-i*l, this._z=r*c+a*l+i*o-n*s, this._w=a*c-i*s-n*o-r*l, this._onChangeCallback(), this
            }
            slerp(e,
            t) {
                if(0===t)return this;
                if(1===t)return this.copy(e);
                const i=this._x, n=this._y, r=this._z, a=this._w;
                let s=a*e._w+i*e._x+n*e._y+r*e._z;
                if(s<0?(this._w=-e._w, this._x=-e._x, this._y=-e._y, this._z=-e._z, s=-s): this.copy(e), s>=1)return this._w=a, this._x=i, this._y=n, this._z=r, this;
                const o=1-s*s;
                if(o<=Number.EPSILON) {
                    const e=1-t;
                    return this._w=e*a+t*this._w, this._x=e*i+t*this._x, this._y=e*n+t*this._y, this._z=e*r+t*this._z, this.normalize(), this._onChangeCallback(), this
                }
                const l=Math.sqrt(o),
                c=Math.atan2(l,
                s),
                h=Math.sin((1-t)*c)/l,
                u=Math.sin(t*c)/l;
                return this._w=a*h+this._w*u,
                this._x=i*h+this._x*u,
                this._y=n*h+this._y*u,
                this._z=r*h+this._z*u,
                this._onChangeCallback(),
                this
            }
            slerpQuaternions(e,
            t,
            i) {
                return this.copy(e).slerp(t, i)
            }
            random() {
                const e=Math.random(), t=Math.sqrt(1-e), i=Math.sqrt(e), n=2*Math.PI*Math.random(), r=2*Math.PI*Math.random();
                return this.set(t*Math.cos(n), i*Math.sin(r), i*Math.cos(r), t*Math.sin(n))
            }
            equals(e) {
                return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w
            }
            fromArray(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return this._x=e[t], this._y=e[t+1], this._z=e[t+2], this._w=e[t+3], this._onChangeCallback(), this
            }
            toArray() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return e[t]=this._x, e[t+1]=this._y, e[t+2]=this._z, e[t+3]=this._w, e
            }
            fromBufferAttribute(e,
            t) {
                return this._x=e.getX(t), this._y=e.getY(t), this._z=e.getZ(t), this._w=e.getW(t), this
            }
            _onChange(e) {
                return this._onChangeCallback=e, this
            }
            _onChangeCallback() {}*[Symbol.iterator]() {
                yield this._x, yield this._y, yield this._z, yield this._w
            }
        }
    }
    ,
    8384:(e,
    t,
    i)=> {
        i.d(t, {
            z: ()=>u
        }
        );
        var n=i(9376);
        const r=new n.P,
        a=new n.P,
        s=new n.P,
        o=new n.P,
        l=new n.P,
        c=new n.P,
        h=new n.P;
        class u {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: new n.P, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: new n.P(0, 0, -1);
                this.origin=e, this.direction=t
            }
            set(e,
            t) {
                return this.origin.copy(e), this.direction.copy(t), this
            }
            copy(e) {
                return this.origin.copy(e.origin), this.direction.copy(e.direction), this
            }
            at(e,
            t) {
                return t.copy(this.direction).multiplyScalar(e).add(this.origin)
            }
            lookAt(e) {
                return this.direction.copy(e).sub(this.origin).normalize(), this
            }
            recast(e) {
                return this.origin.copy(this.at(e, r)), this
            }
            closestPointToPoint(e,
            t) {
                t.subVectors(e, this.origin);
                const i=t.dot(this.direction);
                return i<0?t.copy(this.origin): t.copy(this.direction).multiplyScalar(i).add(this.origin)
            }
            distanceToPoint(e) {
                return Math.sqrt(this.distanceSqToPoint(e))
            }
            distanceSqToPoint(e) {
                const t=r.subVectors(e, this.origin).dot(this.direction);
                return t<0?this.origin.distanceToSquared(e): (r.copy(this.direction).multiplyScalar(t).add(this.origin), r.distanceToSquared(e))
            }
            distanceSqToSegment(e,
            t,
            i,
            n) {
                a.copy(e).add(t).multiplyScalar(.5), s.copy(t).sub(e).normalize(), o.copy(this.origin).sub(a);
                const r=.5*e.distanceTo(t), l=-this.direction.dot(s), c=o.dot(this.direction), h=-o.dot(s), u=o.lengthSq(), d=Math.abs(1-l*l);
                let p, f, m, g;
                if(d>0)if(p=l*h-c, f=l*c-h, g=r*d, p>=0)if(f>=-g)if(f<=g) {
                    const e=1/d;
                    p*=e, f*=e, m=p*(p+l*f+2*c)+f*(l*p+f+2*h)+u
                }
                else f=r,
                p=Math.max(0,
                -(l*f+c)),
                m=-p*p+f*(f+2*h)+u;
                else f=-r,
                p=Math.max(0,
                -(l*f+c)),
                m=-p*p+f*(f+2*h)+u;
                else f<=-g?(p=Math.max(0,
                -(-l*r+c)),
                f=p>0?-r:Math.min(Math.max(-r,
                -h),
                r),
                m=-p*p+f*(f+2*h)+u):f<=g?(p=0,
                f=Math.min(Math.max(-r,
                -h),
                r),
                m=f*(f+2*h)+u):(p=Math.max(0,
                -(l*r+c)),
                f=p>0?r:Math.min(Math.max(-r,
                -h),
                r),
                m=-p*p+f*(f+2*h)+u);
                else f=l>0?-r:r,
                p=Math.max(0,
                -(l*f+c)),
                m=-p*p+f*(f+2*h)+u;
                return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),
                n&&n.copy(s).multiplyScalar(f).add(a),
                m
            }
            intersectSphere(e,
            t) {
                r.subVectors(e.center, this.origin);
                const i=r.dot(this.direction), n=r.dot(r)-i*i, a=e.radius*e.radius;
                if(n>a)return null;
                const s=Math.sqrt(a-n), o=i-s, l=i+s;
                return o<0&&l<0?null: o<0?this.at(l, t): this.at(o, t)
            }
            intersectsSphere(e) {
                return this.distanceSqToPoint(e.center)<=e.radius*e.radius
            }
            distanceToPlane(e) {
                const t=e.normal.dot(this.direction);
                if(0===t)return 0===e.distanceToPoint(this.origin)?0: null;
                const i=-(this.origin.dot(e.normal)+e.constant)/t;
                return i>=0?i: null
            }
            intersectPlane(e,
            t) {
                const i=this.distanceToPlane(e);
                return null===i?null: this.at(i, t)
            }
            intersectsPlane(e) {
                const t=e.distanceToPoint(this.origin);
                if(0===t)return!0;
                return e.normal.dot(this.direction)*t<0
            }
            intersectBox(e,
            t) {
                let i, n, r, a, s, o;
                const l=1/this.direction.x, c=1/this.direction.y, h=1/this.direction.z, u=this.origin;
                return l>=0?(i=(e.min.x-u.x)*l, n=(e.max.x-u.x)*l): (i=(e.max.x-u.x)*l, n=(e.min.x-u.x)*l), c>=0?(r=(e.min.y-u.y)*c, a=(e.max.y-u.y)*c): (r=(e.max.y-u.y)*c, a=(e.min.y-u.y)*c), i>a||r>n?null: ((r>i||i!=i)&&(i=r), (a<n||n!=n)&&(n=a), h>=0?(s=(e.min.z-u.z)*h, o=(e.max.z-u.z)*h): (s=(e.max.z-u.z)*h, o=(e.min.z-u.z)*h), i>o||s>n?null: ((s>i||i!=i)&&(i=s), (o<n||n!=n)&&(n=o), n<0?null: this.at(i>=0?i: n, t)))
            }
            intersectsBox(e) {
                return null!==this.intersectBox(e, r)
            }
            intersectTriangle(e,
            t,
            i,
            n,
            r) {
                l.subVectors(t, e), c.subVectors(i, e), h.crossVectors(l, c);
                let a, s=this.direction.dot(h);
                if(s>0) {
                    if(n)return null;
                    a=1
                }
                else {
                    if(!(s<0))return null;
                    a=-1, s=-s
                }
                o.subVectors(this.origin,
                e);
                const u=a*this.direction.dot(c.crossVectors(o,
                c));
                if(u<0)return null;
                const d=a*this.direction.dot(l.cross(o));
                if(d<0)return null;
                if(u+d>s)return null;
                const p=-a*o.dot(h);
                return p<0?null:this.at(p/s,
                r)
            }
            applyMatrix4(e) {
                return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
            }
            equals(e) {
                return e.origin.equals(this.origin)&&e.direction.equals(this.direction)
            }
            clone() {
                return(new this.constructor).copy(this)
            }
        }
    }
    ,
    5604:(e,
    t,
    i)=> {
        i.d(t, {
            a: ()=>c
        }
        );
        var n=i(578),
        r=i(9376);
        const a=new n.Z,
        s=new r.P,
        o=new r.P,
        l=new r.P;
        class c {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: new r.P, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: -1;
                this.center=e, this.radius=t
            }
            set(e,
            t) {
                return this.center.copy(e), this.radius=t, this
            }
            setFromPoints(e,
            t) {
                const i=this.center;
                void 0!==t?i.copy(t): a.setFromPoints(e).getCenter(i);
                let n=0;
                for(let t=0, r=e.length;
                t<r;
                t++)n=Math.max(n, i.distanceToSquared(e[t]));
                return this.radius=Math.sqrt(n), this
            }
            copy(e) {
                return this.center.copy(e.center), this.radius=e.radius, this
            }
            isEmpty() {
                return this.radius<0
            }
            makeEmpty() {
                return this.center.set(0, 0, 0), this.radius=-1, this
            }
            containsPoint(e) {
                return e.distanceToSquared(this.center)<=this.radius*this.radius
            }
            distanceToPoint(e) {
                return e.distanceTo(this.center)-this.radius
            }
            intersectsSphere(e) {
                const t=this.radius+e.radius;
                return e.center.distanceToSquared(this.center)<=t*t
            }
            intersectsBox(e) {
                return e.intersectsSphere(this)
            }
            intersectsPlane(e) {
                return Math.abs(e.distanceToPoint(this.center))<=this.radius
            }
            clampPoint(e,
            t) {
                const i=this.center.distanceToSquared(e);
                return t.copy(e), i>this.radius*this.radius&&(t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
            }
            getBoundingBox(e) {
                return this.isEmpty()?(e.makeEmpty(), e): (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
            }
            applyMatrix4(e) {
                return this.center.applyMatrix4(e), this.radius=this.radius*e.getMaxScaleOnAxis(), this
            }
            translate(e) {
                return this.center.add(e), this
            }
            expandByPoint(e) {
                l.subVectors(e, this.center);
                const t=l.lengthSq();
                if(t>this.radius*this.radius) {
                    const e=Math.sqrt(t), i=.5*(e-this.radius);
                    this.center.add(l.multiplyScalar(i/e)), this.radius+=i
                }
                return this
            }
            union(e) {
                return!0===this.center.equals(e.center)?o.set(0, 0, 1).multiplyScalar(e.radius): o.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(s.copy(e.center).add(o)), this.expandByPoint(s.copy(e.center).sub(o)), this
            }
            equals(e) {
                return e.center.equals(this.center)&&e.radius===this.radius
            }
            clone() {
                return(new this.constructor).copy(this)
            }
        }
    }
    ,
    5914:(e,
    t,
    i)=> {
        i.d(t, {
            F: ()=>n
        }
        );
        class n {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 0, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                n.prototype.isVector2=!0, this.x=e, this.y=t
            }
            get width() {
                return this.x
            }
            set width(e) {
                this.x=e
            }
            get height() {
                return this.y
            }
            set height(e) {
                this.y=e
            }
            set(e,
            t) {
                return this.x=e, this.y=t, this
            }
            setScalar(e) {
                return this.x=e, this.y=e, this
            }
            setX(e) {
                return this.x=e, this
            }
            setY(e) {
                return this.y=e, this
            }
            setComponent(e,
            t) {
                switch(e) {
                    case 0: this.x=t;
                    break;
                    case 1: this.y=t;
                    break;
                    default: throw new Error("index is out of range: "+e)
                }
                return this
            }
            getComponent(e) {
                switch(e) {
                    case 0: return this.x;
                    case 1: return this.y;
                    default: throw new Error("index is out of range: "+e)
                }
            }
            clone() {
                return new this.constructor(this.x, this.y)
            }
            copy(e) {
                return this.x=e.x, this.y=e.y, this
            }
            add(e) {
                return this.x+=e.x, this.y+=e.y, this
            }
            addScalar(e) {
                return this.x+=e, this.y+=e, this
            }
            addVectors(e,
            t) {
                return this.x=e.x+t.x, this.y=e.y+t.y, this
            }
            addScaledVector(e,
            t) {
                return this.x+=e.x*t, this.y+=e.y*t, this
            }
            sub(e) {
                return this.x-=e.x, this.y-=e.y, this
            }
            subScalar(e) {
                return this.x-=e, this.y-=e, this
            }
            subVectors(e,
            t) {
                return this.x=e.x-t.x, this.y=e.y-t.y, this
            }
            multiply(e) {
                return this.x*=e.x, this.y*=e.y, this
            }
            multiplyScalar(e) {
                return this.x*=e, this.y*=e, this
            }
            divide(e) {
                return this.x/=e.x, this.y/=e.y, this
            }
            divideScalar(e) {
                return this.multiplyScalar(1/e)
            }
            applyMatrix3(e) {
                const t=this.x, i=this.y, n=e.elements;
                return this.x=n[0]*t+n[3]*i+n[6], this.y=n[1]*t+n[4]*i+n[7], this
            }
            min(e) {
                return this.x=Math.min(this.x, e.x), this.y=Math.min(this.y, e.y), this
            }
            max(e) {
                return this.x=Math.max(this.x, e.x), this.y=Math.max(this.y, e.y), this
            }
            clamp(e,
            t) {
                return this.x=Math.max(e.x, Math.min(t.x, this.x)), this.y=Math.max(e.y, Math.min(t.y, this.y)), this
            }
            clampScalar(e,
            t) {
                return this.x=Math.max(e, Math.min(t, this.x)), this.y=Math.max(e, Math.min(t, this.y)), this
            }
            clampLength(e,
            t) {
                const i=this.length();
                return this.divideScalar(i||1).multiplyScalar(Math.max(e, Math.min(t, i)))
            }
            floor() {
                return this.x=Math.floor(this.x), this.y=Math.floor(this.y), this
            }
            ceil() {
                return this.x=Math.ceil(this.x), this.y=Math.ceil(this.y), this
            }
            round() {
                return this.x=Math.round(this.x), this.y=Math.round(this.y), this
            }
            roundToZero() {
                return this.x=this.x<0?Math.ceil(this.x): Math.floor(this.x), this.y=this.y<0?Math.ceil(this.y): Math.floor(this.y), this
            }
            negate() {
                return this.x=-this.x, this.y=-this.y, this
            }
            dot(e) {
                return this.x*e.x+this.y*e.y
            }
            cross(e) {
                return this.x*e.y-this.y*e.x
            }
            lengthSq() {
                return this.x*this.x+this.y*this.y
            }
            length() {
                return Math.sqrt(this.x*this.x+this.y*this.y)
            }
            manhattanLength() {
                return Math.abs(this.x)+Math.abs(this.y)
            }
            normalize() {
                return this.divideScalar(this.length()||1)
            }
            angle() {
                return Math.atan2(-this.y, -this.x)+Math.PI
            }
            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }
            distanceToSquared(e) {
                const t=this.x-e.x, i=this.y-e.y;
                return t*t+i*i
            }
            manhattanDistanceTo(e) {
                return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e,
            t) {
                return this.x+=(e.x-this.x)*t, this.y+=(e.y-this.y)*t, this
            }
            lerpVectors(e,
            t,
            i) {
                return this.x=e.x+(t.x-e.x)*i, this.y=e.y+(t.y-e.y)*i, this
            }
            equals(e) {
                return e.x===this.x&&e.y===this.y
            }
            fromArray(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return this.x=e[t], this.y=e[t+1], this
            }
            toArray() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return e[t]=this.x, e[t+1]=this.y, e
            }
            fromBufferAttribute(e,
            t) {
                return this.x=e.getX(t), this.y=e.getY(t), this
            }
            rotateAround(e,
            t) {
                const i=Math.cos(t), n=Math.sin(t), r=this.x-e.x, a=this.y-e.y;
                return this.x=r*i-a*n+e.x, this.y=r*n+a*i+e.y, this
            }
            random() {
                return this.x=Math.random(), this.y=Math.random(), this
            }
            *[Symbol.iterator]() {
                yield this.x, yield this.y
            }
        }
    }
    ,
    9376:(e,
    t,
    i)=> {
        i.d(t, {
            P: ()=>a
        }
        );
        var n=i(6563),
        r=i(4235);
        class a {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 0, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0;
                a.prototype.isVector3=!0, this.x=e, this.y=t, this.z=i
            }
            set(e,
            t,
            i) {
                return void 0===i&&(i=this.z), this.x=e, this.y=t, this.z=i, this
            }
            setScalar(e) {
                return this.x=e, this.y=e, this.z=e, this
            }
            setX(e) {
                return this.x=e, this
            }
            setY(e) {
                return this.y=e, this
            }
            setZ(e) {
                return this.z=e, this
            }
            setComponent(e,
            t) {
                switch(e) {
                    case 0: this.x=t;
                    break;
                    case 1: this.y=t;
                    break;
                    case 2: this.z=t;
                    break;
                    default: throw new Error("index is out of range: "+e)
                }
                return this
            }
            getComponent(e) {
                switch(e) {
                    case 0: return this.x;
                    case 1: return this.y;
                    case 2: return this.z;
                    default: throw new Error("index is out of range: "+e)
                }
            }
            clone() {
                return new this.constructor(this.x, this.y, this.z)
            }
            copy(e) {
                return this.x=e.x, this.y=e.y, this.z=e.z, this
            }
            add(e) {
                return this.x+=e.x, this.y+=e.y, this.z+=e.z, this
            }
            addScalar(e) {
                return this.x+=e, this.y+=e, this.z+=e, this
            }
            addVectors(e,
            t) {
                return this.x=e.x+t.x, this.y=e.y+t.y, this.z=e.z+t.z, this
            }
            addScaledVector(e,
            t) {
                return this.x+=e.x*t, this.y+=e.y*t, this.z+=e.z*t, this
            }
            sub(e) {
                return this.x-=e.x, this.y-=e.y, this.z-=e.z, this
            }
            subScalar(e) {
                return this.x-=e, this.y-=e, this.z-=e, this
            }
            subVectors(e,
            t) {
                return this.x=e.x-t.x, this.y=e.y-t.y, this.z=e.z-t.z, this
            }
            multiply(e) {
                return this.x*=e.x, this.y*=e.y, this.z*=e.z, this
            }
            multiplyScalar(e) {
                return this.x*=e, this.y*=e, this.z*=e, this
            }
            multiplyVectors(e,
            t) {
                return this.x=e.x*t.x, this.y=e.y*t.y, this.z=e.z*t.z, this
            }
            applyEuler(e) {
                return this.applyQuaternion(o.setFromEuler(e))
            }
            applyAxisAngle(e,
            t) {
                return this.applyQuaternion(o.setFromAxisAngle(e, t))
            }
            applyMatrix3(e) {
                const t=this.x, i=this.y, n=this.z, r=e.elements;
                return this.x=r[0]*t+r[3]*i+r[6]*n, this.y=r[1]*t+r[4]*i+r[7]*n, this.z=r[2]*t+r[5]*i+r[8]*n, this
            }
            applyNormalMatrix(e) {
                return this.applyMatrix3(e).normalize()
            }
            applyMatrix4(e) {
                const t=this.x, i=this.y, n=this.z, r=e.elements, a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);
                return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a, this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a, this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a, this
            }
            applyQuaternion(e) {
                const t=this.x, i=this.y, n=this.z, r=e.x, a=e.y, s=e.z, o=e.w, l=o*t+a*n-s*i, c=o*i+s*t-r*n, h=o*n+r*i-a*t, u=-r*t-a*i-s*n;
                return this.x=l*o+u*-r+c*-s-h*-a, this.y=c*o+u*-a+h*-r-l*-s, this.z=h*o+u*-s+l*-a-c*-r, this
            }
            project(e) {
                return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
            }
            unproject(e) {
                return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
            }
            transformDirection(e) {
                const t=this.x, i=this.y, n=this.z, r=e.elements;
                return this.x=r[0]*t+r[4]*i+r[8]*n, this.y=r[1]*t+r[5]*i+r[9]*n, this.z=r[2]*t+r[6]*i+r[10]*n, this.normalize()
            }
            divide(e) {
                return this.x/=e.x, this.y/=e.y, this.z/=e.z, this
            }
            divideScalar(e) {
                return this.multiplyScalar(1/e)
            }
            min(e) {
                return this.x=Math.min(this.x, e.x), this.y=Math.min(this.y, e.y), this.z=Math.min(this.z, e.z), this
            }
            max(e) {
                return this.x=Math.max(this.x, e.x), this.y=Math.max(this.y, e.y), this.z=Math.max(this.z, e.z), this
            }
            clamp(e,
            t) {
                return this.x=Math.max(e.x, Math.min(t.x, this.x)), this.y=Math.max(e.y, Math.min(t.y, this.y)), this.z=Math.max(e.z, Math.min(t.z, this.z)), this
            }
            clampScalar(e,
            t) {
                return this.x=Math.max(e, Math.min(t, this.x)), this.y=Math.max(e, Math.min(t, this.y)), this.z=Math.max(e, Math.min(t, this.z)), this
            }
            clampLength(e,
            t) {
                const i=this.length();
                return this.divideScalar(i||1).multiplyScalar(Math.max(e, Math.min(t, i)))
            }
            floor() {
                return this.x=Math.floor(this.x), this.y=Math.floor(this.y), this.z=Math.floor(this.z), this
            }
            ceil() {
                return this.x=Math.ceil(this.x), this.y=Math.ceil(this.y), this.z=Math.ceil(this.z), this
            }
            round() {
                return this.x=Math.round(this.x), this.y=Math.round(this.y), this.z=Math.round(this.z), this
            }
            roundToZero() {
                return this.x=this.x<0?Math.ceil(this.x): Math.floor(this.x), this.y=this.y<0?Math.ceil(this.y): Math.floor(this.y), this.z=this.z<0?Math.ceil(this.z): Math.floor(this.z), this
            }
            negate() {
                return this.x=-this.x, this.y=-this.y, this.z=-this.z, this
            }
            dot(e) {
                return this.x*e.x+this.y*e.y+this.z*e.z
            }
            lengthSq() {
                return this.x*this.x+this.y*this.y+this.z*this.z
            }
            length() {
                return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)
            }
            manhattanLength() {
                return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)
            }
            normalize() {
                return this.divideScalar(this.length()||1)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e,
            t) {
                return this.x+=(e.x-this.x)*t, this.y+=(e.y-this.y)*t, this.z+=(e.z-this.z)*t, this
            }
            lerpVectors(e,
            t,
            i) {
                return this.x=e.x+(t.x-e.x)*i, this.y=e.y+(t.y-e.y)*i, this.z=e.z+(t.z-e.z)*i, this
            }
            cross(e) {
                return this.crossVectors(this, e)
            }
            crossVectors(e,
            t) {
                const i=e.x, n=e.y, r=e.z, a=t.x, s=t.y, o=t.z;
                return this.x=n*o-r*s, this.y=r*a-i*o, this.z=i*s-n*a, this
            }
            projectOnVector(e) {
                const t=e.lengthSq();
                if(0===t)return this.set(0, 0, 0);
                const i=e.dot(this)/t;
                return this.copy(e).multiplyScalar(i)
            }
            projectOnPlane(e) {
                return s.copy(this).projectOnVector(e), this.sub(s)
            }
            reflect(e) {
                return this.sub(s.copy(e).multiplyScalar(2*this.dot(e)))
            }
            angleTo(e) {
                const t=Math.sqrt(this.lengthSq()*e.lengthSq());
                if(0===t)return Math.PI/2;
                const i=this.dot(e)/t;
                return Math.acos(n.uZ(i, -1, 1))
            }
            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }
            distanceToSquared(e) {
                const t=this.x-e.x, i=this.y-e.y, n=this.z-e.z;
                return t*t+i*i+n*n
            }
            manhattanDistanceTo(e) {
                return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)
            }
            setFromSpherical(e) {
                return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
            }
            setFromSphericalCoords(e,
            t,
            i) {
                const n=Math.sin(t)*e;
                return this.x=n*Math.sin(i), this.y=Math.cos(t)*e, this.z=n*Math.cos(i), this
            }
            setFromCylindrical(e) {
                return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
            }
            setFromCylindricalCoords(e,
            t,
            i) {
                return this.x=e*Math.sin(t), this.y=i, this.z=e*Math.cos(t), this
            }
            setFromMatrixPosition(e) {
                const t=e.elements;
                return this.x=t[12], this.y=t[13], this.z=t[14], this
            }
            setFromMatrixScale(e) {
                const t=this.setFromMatrixColumn(e, 0).length(), i=this.setFromMatrixColumn(e, 1).length(), n=this.setFromMatrixColumn(e, 2).length();
                return this.x=t, this.y=i, this.z=n, this
            }
            setFromMatrixColumn(e,
            t) {
                return this.fromArray(e.elements, 4*t)
            }
            setFromMatrix3Column(e,
            t) {
                return this.fromArray(e.elements, 3*t)
            }
            setFromEuler(e) {
                return this.x=e._x, this.y=e._y, this.z=e._z, this
            }
            equals(e) {
                return e.x===this.x&&e.y===this.y&&e.z===this.z
            }
            fromArray(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return this.x=e[t], this.y=e[t+1], this.z=e[t+2], this
            }
            toArray() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return e[t]=this.x, e[t+1]=this.y, e[t+2]=this.z, e
            }
            fromBufferAttribute(e,
            t) {
                return this.x=e.getX(t), this.y=e.getY(t), this.z=e.getZ(t), this
            }
            random() {
                return this.x=Math.random(), this.y=Math.random(), this.z=Math.random(), this
            }
            randomDirection() {
                const e=2*(Math.random()-.5), t=Math.random()*Math.PI*2, i=Math.sqrt(1-e**2);
                return this.x=i*Math.cos(t), this.y=i*Math.sin(t), this.z=e, this
            }
            *[Symbol.iterator]() {
                yield this.x, yield this.y, yield this.z
            }
        }
        const s=new a,
        o=new r._
    }
    ,
    8791:(e,
    t,
    i)=> {
        i.d(t, {
            L: ()=>n
        }
        );
        class n {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 0, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0, r=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 1;
                n.prototype.isVector4=!0, this.x=e, this.y=t, this.z=i, this.w=r
            }
            get width() {
                return this.z
            }
            set width(e) {
                this.z=e
            }
            get height() {
                return this.w
            }
            set height(e) {
                this.w=e
            }
            set(e,
            t,
            i,
            n) {
                return this.x=e, this.y=t, this.z=i, this.w=n, this
            }
            setScalar(e) {
                return this.x=e, this.y=e, this.z=e, this.w=e, this
            }
            setX(e) {
                return this.x=e, this
            }
            setY(e) {
                return this.y=e, this
            }
            setZ(e) {
                return this.z=e, this
            }
            setW(e) {
                return this.w=e, this
            }
            setComponent(e,
            t) {
                switch(e) {
                    case 0: this.x=t;
                    break;
                    case 1: this.y=t;
                    break;
                    case 2: this.z=t;
                    break;
                    case 3: this.w=t;
                    break;
                    default: throw new Error("index is out of range: "+e)
                }
                return this
            }
            getComponent(e) {
                switch(e) {
                    case 0: return this.x;
                    case 1: return this.y;
                    case 2: return this.z;
                    case 3: return this.w;
                    default: throw new Error("index is out of range: "+e)
                }
            }
            clone() {
                return new this.constructor(this.x, this.y, this.z, this.w)
            }
            copy(e) {
                return this.x=e.x, this.y=e.y, this.z=e.z, this.w=void 0!==e.w?e.w: 1, this
            }
            add(e) {
                return this.x+=e.x, this.y+=e.y, this.z+=e.z, this.w+=e.w, this
            }
            addScalar(e) {
                return this.x+=e, this.y+=e, this.z+=e, this.w+=e, this
            }
            addVectors(e,
            t) {
                return this.x=e.x+t.x, this.y=e.y+t.y, this.z=e.z+t.z, this.w=e.w+t.w, this
            }
            addScaledVector(e,
            t) {
                return this.x+=e.x*t, this.y+=e.y*t, this.z+=e.z*t, this.w+=e.w*t, this
            }
            sub(e) {
                return this.x-=e.x, this.y-=e.y, this.z-=e.z, this.w-=e.w, this
            }
            subScalar(e) {
                return this.x-=e, this.y-=e, this.z-=e, this.w-=e, this
            }
            subVectors(e,
            t) {
                return this.x=e.x-t.x, this.y=e.y-t.y, this.z=e.z-t.z, this.w=e.w-t.w, this
            }
            multiply(e) {
                return this.x*=e.x, this.y*=e.y, this.z*=e.z, this.w*=e.w, this
            }
            multiplyScalar(e) {
                return this.x*=e, this.y*=e, this.z*=e, this.w*=e, this
            }
            applyMatrix4(e) {
                const t=this.x, i=this.y, n=this.z, r=this.w, a=e.elements;
                return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r, this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r, this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r, this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r, this
            }
            divideScalar(e) {
                return this.multiplyScalar(1/e)
            }
            setAxisAngleFromQuaternion(e) {
                this.w=2*Math.acos(e.w);
                const t=Math.sqrt(1-e.w*e.w);
                return t<1e-4?(this.x=1, this.y=0, this.z=0): (this.x=e.x/t, this.y=e.y/t, this.z=e.z/t), this
            }
            setAxisAngleFromRotationMatrix(e) {
                let t, i, n, r;
                const a=.01, s=.1, o=e.elements, l=o[0], c=o[4], h=o[8], u=o[1], d=o[5], p=o[9], f=o[2], m=o[6], g=o[10];
                if(Math.abs(c-u)<a&&Math.abs(h-f)<a&&Math.abs(p-m)<a) {
                    if(Math.abs(c+u)<s&&Math.abs(h+f)<s&&Math.abs(p+m)<s&&Math.abs(l+d+g-3)<s)return this.set(1, 0, 0, 0), this;
                    t=Math.PI;
                    const e=(l+1)/2, o=(d+1)/2, _=(g+1)/2, v=(c+u)/4, x=(h+f)/4, M=(p+m)/4;
                    return e>o&&e>_?e<a?(i=0, n=.707106781, r=.707106781): (i=Math.sqrt(e), n=v/i, r=x/i): o>_?o<a?(i=.707106781, n=0, r=.707106781): (n=Math.sqrt(o), i=v/n, r=M/n): _<a?(i=.707106781, n=.707106781, r=0): (r=Math.sqrt(_), i=x/r, n=M/r), this.set(i, n, r, t), this
                }
                let _=Math.sqrt((m-p)*(m-p)+(h-f)*(h-f)+(u-c)*(u-c));
                return Math.abs(_)<.001&&(_=1),
                this.x=(m-p)/_,
                this.y=(h-f)/_,
                this.z=(u-c)/_,
                this.w=Math.acos((l+d+g-1)/2),
                this
            }
            min(e) {
                return this.x=Math.min(this.x, e.x), this.y=Math.min(this.y, e.y), this.z=Math.min(this.z, e.z), this.w=Math.min(this.w, e.w), this
            }
            max(e) {
                return this.x=Math.max(this.x, e.x), this.y=Math.max(this.y, e.y), this.z=Math.max(this.z, e.z), this.w=Math.max(this.w, e.w), this
            }
            clamp(e,
            t) {
                return this.x=Math.max(e.x, Math.min(t.x, this.x)), this.y=Math.max(e.y, Math.min(t.y, this.y)), this.z=Math.max(e.z, Math.min(t.z, this.z)), this.w=Math.max(e.w, Math.min(t.w, this.w)), this
            }
            clampScalar(e,
            t) {
                return this.x=Math.max(e, Math.min(t, this.x)), this.y=Math.max(e, Math.min(t, this.y)), this.z=Math.max(e, Math.min(t, this.z)), this.w=Math.max(e, Math.min(t, this.w)), this
            }
            clampLength(e,
            t) {
                const i=this.length();
                return this.divideScalar(i||1).multiplyScalar(Math.max(e, Math.min(t, i)))
            }
            floor() {
                return this.x=Math.floor(this.x), this.y=Math.floor(this.y), this.z=Math.floor(this.z), this.w=Math.floor(this.w), this
            }
            ceil() {
                return this.x=Math.ceil(this.x), this.y=Math.ceil(this.y), this.z=Math.ceil(this.z), this.w=Math.ceil(this.w), this
            }
            round() {
                return this.x=Math.round(this.x), this.y=Math.round(this.y), this.z=Math.round(this.z), this.w=Math.round(this.w), this
            }
            roundToZero() {
                return this.x=this.x<0?Math.ceil(this.x): Math.floor(this.x), this.y=this.y<0?Math.ceil(this.y): Math.floor(this.y), this.z=this.z<0?Math.ceil(this.z): Math.floor(this.z), this.w=this.w<0?Math.ceil(this.w): Math.floor(this.w), this
            }
            negate() {
                return this.x=-this.x, this.y=-this.y, this.z=-this.z, this.w=-this.w, this
            }
            dot(e) {
                return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w
            }
            lengthSq() {
                return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w
            }
            length() {
                return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)
            }
            manhattanLength() {
                return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)
            }
            normalize() {
                return this.divideScalar(this.length()||1)
            }
            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }
            lerp(e,
            t) {
                return this.x+=(e.x-this.x)*t, this.y+=(e.y-this.y)*t, this.z+=(e.z-this.z)*t, this.w+=(e.w-this.w)*t, this
            }
            lerpVectors(e,
            t,
            i) {
                return this.x=e.x+(t.x-e.x)*i, this.y=e.y+(t.y-e.y)*i, this.z=e.z+(t.z-e.z)*i, this.w=e.w+(t.w-e.w)*i, this
            }
            equals(e) {
                return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w
            }
            fromArray(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return this.x=e[t], this.y=e[t+1], this.z=e[t+2], this.w=e[t+3], this
            }
            toArray() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                return e[t]=this.x, e[t+1]=this.y, e[t+2]=this.z, e[t+3]=this.w, e
            }
            fromBufferAttribute(e,
            t) {
                return this.x=e.getX(t), this.y=e.getY(t), this.z=e.getZ(t), this.w=e.getW(t), this
            }
            random() {
                return this.x=Math.random(), this.y=Math.random(), this.z=Math.random(), this.w=Math.random(), this
            }
            *[Symbol.iterator]() {
                yield this.x, yield this.y, yield this.z, yield this.w
            }
        }
    }
    ,
    3669:(e,
    t,
    i)=> {
        i.d(t, {
            Z: ()=>r
        }
        );
        var n=i(3740);
        class r extends n.T {
            constructor() {
                super(), this.isGroup=!0, this.type="Group"
            }
        }
    }
    ,
    394:(e,
    t,
    i)=> {
        i.d(t, {
            K: ()=>V
        }
        );
        var n=i(9376),
        r=i(5914),
        a=i(5604),
        s=i(8384),
        o=i(9049),
        l=i(3740);
        const c=new n.P,
        h=new n.P,
        u=new n.P,
        d=new n.P,
        p=new n.P,
        f=new n.P,
        m=new n.P,
        g=new n.P,
        _=new n.P,
        v=new n.P;
        class x {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: new n.P, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: new n.P, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: new n.P;
                this.a=e, this.b=t, this.c=i
            }
            static getNormal(e,
            t,
            i,
            n) {
                n.subVectors(i, t), c.subVectors(e, t), n.cross(c);
                const r=n.lengthSq();
                return r>0?n.multiplyScalar(1/Math.sqrt(r)): n.set(0, 0, 0)
            }
            static getBarycoord(e,
            t,
            i,
            n,
            r) {
                c.subVectors(n, t), h.subVectors(i, t), u.subVectors(e, t);
                const a=c.dot(c), s=c.dot(h), o=c.dot(u), l=h.dot(h), d=h.dot(u), p=a*l-s*s;
                if(0===p)return r.set(-2, -1, -1);
                const f=1/p, m=(l*o-s*d)*f, g=(a*d-s*o)*f;
                return r.set(1-m-g, g, m)
            }
            static containsPoint(e,
            t,
            i,
            n) {
                return this.getBarycoord(e, t, i, n, d), d.x>=0&&d.y>=0&&d.x+d.y<=1
            }
            static getUV(e,
            t,
            i,
            n,
            r,
            a,
            s,
            o) {
                return this.getBarycoord(e, t, i, n, d), o.set(0, 0), o.addScaledVector(r, d.x), o.addScaledVector(a, d.y), o.addScaledVector(s, d.z), o
            }
            static isFrontFacing(e,
            t,
            i,
            n) {
                return c.subVectors(i, t), h.subVectors(e, t), c.cross(h).dot(n)<0
            }
            set(e,
            t,
            i) {
                return this.a.copy(e), this.b.copy(t), this.c.copy(i), this
            }
            setFromPointsAndIndices(e,
            t,
            i,
            n) {
                return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this
            }
            setFromAttributeAndIndices(e,
            t,
            i,
            n) {
                return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, n), this
            }
            clone() {
                return(new this.constructor).copy(this)
            }
            copy(e) {
                return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
            }
            getArea() {
                return c.subVectors(this.c, this.b), h.subVectors(this.a, this.b), .5*c.cross(h).length()
            }
            getMidpoint(e) {
                return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1/3)
            }
            getNormal(e) {
                return x.getNormal(this.a, this.b, this.c, e)
            }
            getPlane(e) {
                return e.setFromCoplanarPoints(this.a, this.b, this.c)
            }
            getBarycoord(e,
            t) {
                return x.getBarycoord(e, this.a, this.b, this.c, t)
            }
            getUV(e,
            t,
            i,
            n,
            r) {
                return x.getUV(e, this.a, this.b, this.c, t, i, n, r)
            }
            containsPoint(e) {
                return x.containsPoint(e, this.a, this.b, this.c)
            }
            isFrontFacing(e) {
                return x.isFrontFacing(this.a, this.b, this.c, e)
            }
            intersectsBox(e) {
                return e.intersectsTriangle(this)
            }
            closestPointToPoint(e,
            t) {
                const i=this.a, n=this.b, r=this.c;
                let a, s;
                p.subVectors(n, i), f.subVectors(r, i), g.subVectors(e, i);
                const o=p.dot(g), l=f.dot(g);
                if(o<=0&&l<=0)return t.copy(i);
                _.subVectors(e, n);
                const c=p.dot(_), h=f.dot(_);
                if(c>=0&&h<=c)return t.copy(n);
                const u=o*h-c*l;
                if(u<=0&&o>=0&&c<=0)return a=o/(o-c), t.copy(i).addScaledVector(p, a);
                v.subVectors(e, r);
                const d=p.dot(v), x=f.dot(v);
                if(x>=0&&d<=x)return t.copy(r);
                const M=d*l-o*x;
                if(M<=0&&l>=0&&x<=0)return s=l/(l-x), t.copy(i).addScaledVector(f, s);
                const y=c*x-d*h;
                if(y<=0&&h-c>=0&&d-x>=0)return m.subVectors(r, n), s=(h-c)/(h-c+(d-x)), t.copy(n).addScaledVector(m, s);
                const S=1/(y+M+u);
                return a=M*S, s=u*S, t.copy(i).addScaledVector(p, a).addScaledVector(f, s)
            }
            equals(e) {
                return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)
            }
        }
        var M=i(1700),
        y=i(697),
        S=i(8674);
        const b=new o.y,
        w=new s.z,
        T=new a.a,
        E=new n.P,
        A=new n.P,
        C=new n.P,
        L=new n.P,
        P=new n.P,
        D=new n.P,
        R=new n.P,
        I=new n.P,
        N=new n.P,
        O=new r.F,
        z=new r.F,
        U=new r.F,
        F=new n.P,
        B=new n.P;
        class V extends l.T {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: new S.u, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: new y.v;
                super(), this.isMesh=!0, this.type="Mesh", this.geometry=e, this.material=t, this.updateMorphTargets()
            }
            copy(e,
            t) {
                return super.copy(e, t), void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()), void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign( {}, e.morphTargetDictionary)), this.material=e.material, this.geometry=e.geometry, this
            }
            updateMorphTargets() {
                const e=this.geometry.morphAttributes, t=Object.keys(e);
                if(t.length>0) {
                    const i=e[t[0]];
                    if(void 0!==i) {
                        this.morphTargetInfluences=[], this.morphTargetDictionary= {};
                        for(let e=0, t=i.length;
                        e<t;
                        e++) {
                            const t=i[e].name||String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[t]=e
                        }
                    }
                }
            }
            raycast(e,
            t) {
                const i=this.geometry, n=this.material, r=this.matrixWorld;
                if(void 0===n)return;
                if(null===i.boundingSphere&&i.computeBoundingSphere(), T.copy(i.boundingSphere), T.applyMatrix4(r), !1===e.ray.intersectsSphere(T))return;
                if(b.copy(r).invert(), w.copy(e.ray).applyMatrix4(b), null!==i.boundingBox&&!1===w.intersectsBox(i.boundingBox))return;
                let a;
                const s=i.index, o=i.attributes.position, l=i.morphAttributes.position, c=i.morphTargetsRelative, h=i.attributes.uv, u=i.attributes.uv2, d=i.groups, p=i.drawRange;
                if(null!==s)if(Array.isArray(n))for(let i=0, r=d.length;
                i<r;
                i++) {
                    const r=d[i], f=n[r.materialIndex];
                    for(let i=Math.max(r.start, p.start), n=Math.min(s.count, Math.min(r.start+r.count, p.start+p.count));
                    i<n;
                    i+=3) {
                        const n=s.getX(i), d=s.getX(i+1), p=s.getX(i+2);
                        a=k(this, f, e, w, o, l, c, h, u, n, d, p), a&&(a.faceIndex=Math.floor(i/3), a.face.materialIndex=r.materialIndex, t.push(a))
                    }
                }
                else {
                    for(let i=Math.max(0, p.start), r=Math.min(s.count, p.start+p.count);
                    i<r;
                    i+=3) {
                        const r=s.getX(i), d=s.getX(i+1), p=s.getX(i+2);
                        a=k(this, n, e, w, o, l, c, h, u, r, d, p), a&&(a.faceIndex=Math.floor(i/3), t.push(a))
                    }
                }
                else if(void 0!==o)if(Array.isArray(n))for(let i=0,
                r=d.length;
                i<r;
                i++) {
                    const r=d[i], s=n[r.materialIndex];
                    for(let i=Math.max(r.start, p.start), n=Math.min(o.count, Math.min(r.start+r.count, p.start+p.count));
                    i<n;
                    i+=3) {
                        a=k(this, s, e, w, o, l, c, h, u, i, i+1, i+2), a&&(a.faceIndex=Math.floor(i/3), a.face.materialIndex=r.materialIndex, t.push(a))
                    }
                }
                else {
                    for(let i=Math.max(0, p.start), r=Math.min(o.count, p.start+p.count);
                    i<r;
                    i+=3) {
                        a=k(this, n, e, w, o, l, c, h, u, i, i+1, i+2), a&&(a.faceIndex=Math.floor(i/3), t.push(a))
                    }
                }
            }
        }
        function k(e,
        t,
        i,
        a,
        s,
        o,
        l,
        c,
        h,
        u,
        d,
        p) {
            E.fromBufferAttribute(s, u), A.fromBufferAttribute(s, d), C.fromBufferAttribute(s, p);
            const f=e.morphTargetInfluences;
            if(o&&f) {
                R.set(0, 0, 0), I.set(0, 0, 0), N.set(0, 0, 0);
                for(let e=0, t=o.length;
                e<t;
                e++) {
                    const t=f[e], i=o[e];
                    0!==t&&(L.fromBufferAttribute(i, u), P.fromBufferAttribute(i, d), D.fromBufferAttribute(i, p), l?(R.addScaledVector(L, t), I.addScaledVector(P, t), N.addScaledVector(D, t)): (R.addScaledVector(L.sub(E), t), I.addScaledVector(P.sub(A), t), N.addScaledVector(D.sub(C), t)))
                }
                E.add(R),
                A.add(I),
                C.add(N)
            }
            e.isSkinnedMesh&&(e.boneTransform(u,
            E),
            e.boneTransform(d,
            A),
            e.boneTransform(p,
            C));
            const m=function(e,
            t,
            i,
            n,
            r,
            a,
            s,
            o) {
                let l;
                if(l=t.side===M._L?n.intersectTriangle(s, a, r, !0, o): n.intersectTriangle(r, a, s, t.side!==M.eh, o), null===l)return null;
                B.copy(o), B.applyMatrix4(e.matrixWorld);
                const c=i.ray.origin.distanceTo(B);
                return c<i.near||c>i.far?null: {
                    distance: c, point: B.clone(), object: e
                }
            }
            (e,
            t,
            i,
            a,
            E,
            A,
            C,
            F);
            if(m) {
                c&&(O.fromBufferAttribute(c, u), z.fromBufferAttribute(c, d), U.fromBufferAttribute(c, p), m.uv=x.getUV(F, E, A, C, O, z, U, new r.F)), h&&(O.fromBufferAttribute(h, u), z.fromBufferAttribute(h, d), U.fromBufferAttribute(h, p), m.uv2=x.getUV(F, E, A, C, O, z, U, new r.F));
                const e= {
                    a: u, b: d, c: p, normal: new n.P, materialIndex: 0
                }
                ;
                x.getNormal(E,
                A,
                C,
                e.normal),
                m.face=e
            }
            return m
        }
    }
    ,
    1698:(e,
    t,
    i)=> {
        i.d(t, {
            d: ()=>l
        }
        );
        var n=i(1214),
        r=i(2887),
        a=i(1700),
        s=i(8791),
        o=i(673);
        class l extends n.p {
            constructor(e, t) {
                let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: {};
                super(), this.isWebGLRenderTarget=!0, this.width=e, this.height=t, this.depth=1, this.scissor=new s.L(0, 0, e, t), this.scissorTest=!1, this.viewport=new s.L(0, 0, e, t);
                const n= {
                    width: e, height: t, depth: 1
                }
                ;
                this.texture=new r.x(n,
                i.mapping,
                i.wrapS,
                i.wrapT,
                i.magFilter,
                i.minFilter,
                i.format,
                i.type,
                i.anisotropy,
                i.encoding),
                this.texture.isRenderTargetTexture=!0,
                this.texture.flipY=!1,
                this.texture.generateMipmaps=void 0!==i.generateMipmaps&&i.generateMipmaps,
                this.texture.internalFormat=void 0!==i.internalFormat?i.internalFormat:null,
                this.texture.minFilter=void 0!==i.minFilter?i.minFilter:a.we,
                this.depthBuffer=void 0===i.depthBuffer||i.depthBuffer,
                this.stencilBuffer=void 0!==i.stencilBuffer&&i.stencilBuffer,
                this.depthTexture=void 0!==i.depthTexture?i.depthTexture:null,
                this.samples=void 0!==i.samples?i.samples:0
            }
            setSize(e,
            t) {
                let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 1;
                this.width===e&&this.height===t&&this.depth===i||(this.width=e, this.height=t, this.depth=i, this.texture.image.width=e, this.texture.image.height=t, this.texture.image.depth=i, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
            }
            clone() {
                return(new this.constructor).copy(this)
            }
            copy(e) {
                this.width=e.width, this.height=e.height, this.depth=e.depth, this.viewport.copy(e.viewport), this.texture=e.texture.clone(), this.texture.isRenderTargetTexture=!0;
                const t=Object.assign( {}, e.texture.image);
                return this.texture.source=new o.H(t), this.depthBuffer=e.depthBuffer, this.stencilBuffer=e.stencilBuffer, null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()), this.samples=e.samples, this
            }
            dispose() {
                this.dispatchEvent( {
                    type: "dispose"
                }
                )
            }
        }
    }
    ,
    345:(e,
    t,
    i)=> {
        i.d(t, {
            C: ()=>Mi
        }
        );
        var n=i(1700),
        r=i(6563),
        a=i(9376),
        s=i(5604),
        o=i(4914);
        const l=new a.P,
        c=new a.P,
        h=new o.V;
        class u {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: new a.P(1, 0, 0), t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                this.isPlane=!0, this.normal=e, this.constant=t
            }
            set(e,
            t) {
                return this.normal.copy(e), this.constant=t, this
            }
            setComponents(e,
            t,
            i,
            n) {
                return this.normal.set(e, t, i), this.constant=n, this
            }
            setFromNormalAndCoplanarPoint(e,
            t) {
                return this.normal.copy(e), this.constant=-t.dot(this.normal), this
            }
            setFromCoplanarPoints(e,
            t,
            i) {
                const n=l.subVectors(i, t).cross(c.subVectors(e, t)).normalize();
                return this.setFromNormalAndCoplanarPoint(n, e), this
            }
            copy(e) {
                return this.normal.copy(e.normal), this.constant=e.constant, this
            }
            normalize() {
                const e=1/this.normal.length();
                return this.normal.multiplyScalar(e), this.constant*=e, this
            }
            negate() {
                return this.constant*=-1, this.normal.negate(), this
            }
            distanceToPoint(e) {
                return this.normal.dot(e)+this.constant
            }
            distanceToSphere(e) {
                return this.distanceToPoint(e.center)-e.radius
            }
            projectPoint(e,
            t) {
                return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
            }
            intersectLine(e,
            t) {
                const i=e.delta(l), n=this.normal.dot(i);
                if(0===n)return 0===this.distanceToPoint(e.start)?t.copy(e.start): null;
                const r=-(e.start.dot(this.normal)+this.constant)/n;
                return r<0||r>1?null: t.copy(i).multiplyScalar(r).add(e.start)
            }
            intersectsLine(e) {
                const t=this.distanceToPoint(e.start), i=this.distanceToPoint(e.end);
                return t<0&&i>0||i<0&&t>0
            }
            intersectsBox(e) {
                return e.intersectsPlane(this)
            }
            intersectsSphere(e) {
                return e.intersectsPlane(this)
            }
            coplanarPoint(e) {
                return e.copy(this.normal).multiplyScalar(-this.constant)
            }
            applyMatrix4(e,
            t) {
                const i=t||h.getNormalMatrix(e), n=this.coplanarPoint(l).applyMatrix4(e), r=this.normal.applyMatrix3(i).normalize();
                return this.constant=-n.dot(r), this
            }
            translate(e) {
                return this.constant-=e.dot(this.normal), this
            }
            equals(e) {
                return e.normal.equals(this.normal)&&e.constant===this.constant
            }
            clone() {
                return(new this.constructor).copy(this)
            }
        }
        const d=new s.a,
        p=new a.P;
        class f {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: new u, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: new u, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: new u, n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: new u, r=arguments.length>4&&void 0!==arguments[4]?arguments[4]: new u, a=arguments.length>5&&void 0!==arguments[5]?arguments[5]: new u;
                this.planes=[e, t, i, n, r, a]
            }
            set(e,
            t,
            i,
            n,
            r,
            a) {
                const s=this.planes;
                return s[0].copy(e), s[1].copy(t), s[2].copy(i), s[3].copy(n), s[4].copy(r), s[5].copy(a), this
            }
            copy(e) {
                const t=this.planes;
                for(let i=0;
                i<6;
                i++)t[i].copy(e.planes[i]);
                return this
            }
            setFromProjectionMatrix(e) {
                const t=this.planes, i=e.elements, n=i[0], r=i[1], a=i[2], s=i[3], o=i[4], l=i[5], c=i[6], h=i[7], u=i[8], d=i[9], p=i[10], f=i[11], m=i[12], g=i[13], _=i[14], v=i[15];
                return t[0].setComponents(s-n, h-o, f-u, v-m).normalize(), t[1].setComponents(s+n, h+o, f+u, v+m).normalize(), t[2].setComponents(s+r, h+l, f+d, v+g).normalize(), t[3].setComponents(s-r, h-l, f-d, v-g).normalize(), t[4].setComponents(s-a, h-c, f-p, v-_).normalize(), t[5].setComponents(s+a, h+c, f+p, v+_).normalize(), this
            }
            intersectsObject(e) {
                const t=e.geometry;
                return null===t.boundingSphere&&t.computeBoundingSphere(), d.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(d)
            }
            intersectsSprite(e) {
                return d.center.set(0, 0, 0), d.radius=.7071067811865476, d.applyMatrix4(e.matrixWorld), this.intersectsSphere(d)
            }
            intersectsSphere(e) {
                const t=this.planes, i=e.center, n=-e.radius;
                for(let e=0;
                e<6;
                e++) {
                    if(t[e].distanceToPoint(i)<n)return!1
                }
                return!0
            }
            intersectsBox(e) {
                const t=this.planes;
                for(let i=0;
                i<6;
                i++) {
                    const n=t[i];
                    if(p.x=n.normal.x>0?e.max.x: e.min.x, p.y=n.normal.y>0?e.max.y: e.min.y, p.z=n.normal.z>0?e.max.z: e.min.z, n.distanceToPoint(p)<0)return!1
                }
                return!0
            }
            containsPoint(e) {
                const t=this.planes;
                for(let i=0;
                i<6;
                i++)if(t[i].distanceToPoint(e)<0)return!1;
                return!0
            }
            clone() {
                return(new this.constructor).copy(this)
            }
        }
        var m=i(9049),
        g=i(5914),
        _=i(8791);
        function v() {
            let e=null, t=!1, i=null, n=null;
            function r(t, a) {
                i(t, a), n=e.requestAnimationFrame(r)
            }
            return {
                start: function() {
                    !0!==t&&null!==i&&(n=e.requestAnimationFrame(r), t=!0)
                }
                ,
                stop:function() {
                    e.cancelAnimationFrame(n), t=!1
                }
                ,
                setAnimationLoop:function(e) {
                    i=e
                }
                ,
                setContext:function(t) {
                    e=t
                }
            }
        }
        function x(e,
        t) {
            const i=t.isWebGL2, n=new WeakMap;
            return {
                get: function(e) {
                    return e.isInterleavedBufferAttribute&&(e=e.data), n.get(e)
                }
                ,
                remove:function(t) {
                    t.isInterleavedBufferAttribute&&(t=t.data);
                    const i=n.get(t);
                    i&&(e.deleteBuffer(i.buffer), n.delete(t))
                }
                ,
                update:function(t,
                r) {
                    if(t.isGLBufferAttribute) {
                        const e=n.get(t);
                        return void((!e||e.version<t.version)&&n.set(t, {
                            buffer: t.buffer, type: t.type, bytesPerElement: t.elementSize, version: t.version
                        }
                        ))
                    }
                    t.isInterleavedBufferAttribute&&(t=t.data);
                    const a=n.get(t);
                    void 0===a?n.set(t,
                    function(t,
                    n) {
                        const r=t.array, a=t.usage, s=e.createBuffer();
                        let o;
                        if(e.bindBuffer(n, s), e.bufferData(n, r, a), t.onUploadCallback(), r instanceof Float32Array)o=5126;
                        else if(r instanceof Uint16Array)if(t.isFloat16BufferAttribute) {
                            if(!i)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                            o=5131
                        }
                        else o=5123;
                        else if(r instanceof Int16Array)o=5122;
                        else if(r instanceof Uint32Array)o=5125;
                        else if(r instanceof Int32Array)o=5124;
                        else if(r instanceof Int8Array)o=5120;
                        else if(r instanceof Uint8Array)o=5121;
                        else {
                            if(!(r instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+r);
                            o=5121
                        }
                        return {
                            buffer: s, type: o, bytesPerElement: r.BYTES_PER_ELEMENT, version: t.version
                        }
                    }
                    (t,
                    r)):a.version<t.version&&(!function(t,
                    n,
                    r) {
                        const a=n.array, s=n.updateRange;
                        e.bindBuffer(r, t), -1===s.count?e.bufferSubData(r, 0, a): (i?e.bufferSubData(r, s.offset*a.BYTES_PER_ELEMENT, a, s.offset, s.count): e.bufferSubData(r, s.offset*a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset+s.count)), s.count=-1)
                    }
                    (a.buffer,
                    t,
                    r),
                    a.version=t.version)
                }
            }
        }
        var M=i(8674),
        y=i(3107);
        class S extends M.u {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 1, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 1, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 1, n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 1, r=arguments.length>4&&void 0!==arguments[4]?arguments[4]: 1, s=arguments.length>5&&void 0!==arguments[5]?arguments[5]: 1;
                super(), this.type="BoxGeometry", this.parameters= {
                    width: e, height: t, depth: i, widthSegments: n, heightSegments: r, depthSegments: s
                }
                ;
                const o=this;
                n=Math.floor(n),
                r=Math.floor(r),
                s=Math.floor(s);
                const l=[],
                c=[],
                h=[],
                u=[];
                let d=0,
                p=0;
                function f(e,
                t,
                i,
                n,
                r,
                s,
                f,
                m,
                g,
                _,
                v) {
                    const x=s/g, M=f/_, y=s/2, S=f/2, b=m/2, w=g+1, T=_+1;
                    let E=0, A=0;
                    const C=new a.P;
                    for(let a=0;
                    a<T;
                    a++) {
                        const s=a*M-S;
                        for(let o=0;
                        o<w;
                        o++) {
                            const l=o*x-y;
                            C[e]=l*n, C[t]=s*r, C[i]=b, c.push(C.x, C.y, C.z), C[e]=0, C[t]=0, C[i]=m>0?1: -1, h.push(C.x, C.y, C.z), u.push(o/g), u.push(1-a/_), E+=1
                        }
                    }
                    for(let e=0;
                    e<_;
                    e++)for(let t=0;
                    t<g;
                    t++) {
                        const i=d+t+w*e, n=d+t+w*(e+1), r=d+(t+1)+w*(e+1), a=d+(t+1)+w*e;
                        l.push(i, n, a), l.push(n, r, a), A+=6
                    }
                    o.addGroup(p,
                    A,
                    v),
                    p+=A,
                    d+=E
                }
                f("z",
                "y",
                "x",
                -1,
                -1,
                i,
                t,
                e,
                s,
                r,
                0),
                f("z",
                "y",
                "x",
                1,
                -1,
                i,
                t,
                -e,
                s,
                r,
                1),
                f("x",
                "z",
                "y",
                1,
                1,
                e,
                i,
                t,
                n,
                s,
                2),
                f("x",
                "z",
                "y",
                1,
                -1,
                e,
                i,
                -t,
                n,
                s,
                3),
                f("x",
                "y",
                "z",
                1,
                -1,
                e,
                t,
                i,
                n,
                r,
                4),
                f("x",
                "y",
                "z",
                -1,
                -1,
                e,
                t,
                -i,
                n,
                r,
                5),
                this.setIndex(l),
                this.setAttribute("position",
                new y.a$(c,
                3)),
                this.setAttribute("normal",
                new y.a$(h,
                3)),
                this.setAttribute("uv",
                new y.a$(u,
                2))
            }
            static fromJSON(e) {
                return new S(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
            }
        }
        var b=i(2613),
        w=i(8670),
        T=i(7079),
        E=i(394);
        const A= {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,vUv).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\nif(diffuseColor.a<alphaTest)discard;\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\nuniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\nfloat ambientOcclusion=(texture2D(aoMap,vUv2).r-1.0)*aoMapIntensity+1.0;reflectedLight.indirectDiffuse*=ambientOcclusion;\n#if defined(USE_ENVMAP)&&defined(STANDARD)\nfloat dotNV=saturate(dot(geometry.normal,geometry.viewDir));reflectedLight.indirectSpecular*=computeSpecularOcclusion(dotNV,ambientOcclusion,material.roughness);\n#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\nuniform sampler2D aoMap;uniform float aoMapIntensity;\n#endif", begin_vertex: "vec3 transformed=vec3(position);", beginnormal_vertex: "vec3 objectNormal=vec3(normal);\n#ifdef USE_TANGENT\nvec3 objectTangent=vec3(tangent.xyz);\n#endif", bsdfs: "vec3 BRDF_Lambert(const in vec3 diffuseColor){return RECIPROCAL_PI*diffuseColor;}vec3 F_Schlick(const in vec3 f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}float F_Schlick(const in float f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}vec3 Schlick_to_F0(const in vec3 f,const in float f90,const in float dotVH){float x=clamp(1.0-dotVH,0.0,1.0);float x2=x*x;float x5=clamp(x*x2*x2,0.0,0.9999);return(f-vec3(f90)*x5)/(1.0-x5);}float V_GGX_SmithCorrelated(const in float alpha,const in float dotNL,const in float dotNV){float a2=pow2(alpha);float gv=dotNL*sqrt(a2+(1.0-a2)*pow2(dotNV));float gl=dotNV*sqrt(a2+(1.0-a2)*pow2(dotNL));return 0.5/max(gv+gl,EPSILON);}float D_GGX(const in float alpha,const in float dotNH){float a2=pow2(alpha);float denom=pow2(dotNH)*(a2-1.0)+1.0;return RECIPROCAL_PI*a2/pow2(denom);}vec3 BRDF_GGX(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(f0,f90,dotVH);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}\n#ifdef USE_IRIDESCENCE\nvec3 BRDF_GGX_Iridescence(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float iridescence,const in vec3 iridescenceFresnel,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=mix(F_Schlick(f0,f90,dotVH),iridescenceFresnel,iridescence);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}\n#endif\nvec2 LTC_Uv(const in vec3 N,const in vec3 V,const in float roughness){const float LUT_SIZE=64.0;const float LUT_SCALE=(LUT_SIZE-1.0)/LUT_SIZE;const float LUT_BIAS=0.5/LUT_SIZE;float dotNV=saturate(dot(N,V));vec2 uv=vec2(roughness,sqrt(1.0-dotNV));uv=uv*LUT_SCALE+LUT_BIAS;return uv;}float LTC_ClippedSphereFormFactor(const in vec3 f){float l=length(f);return max((l*l+f.z)/(l+1.0),0.0);}vec3 LTC_EdgeVectorFormFactor(const in vec3 v1,const in vec3 v2){float x=dot(v1,v2);float y=abs(x);float a=0.8543985+(0.4965155+0.0145206*y)*y;float b=3.4175940+(4.1616724+y)*y;float v=a/b;float theta_sintheta=(x>0.0)?v:0.5*inversesqrt(max(1.0-x*x,1e-7))-v;return cross(v1,v2)*theta_sintheta;}vec3 LTC_Evaluate(const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[4]){vec3 v1=rectCoords[1]-rectCoords[0];vec3 v2=rectCoords[3]-rectCoords[0];vec3 lightNormal=cross(v1,v2);if(dot(lightNormal,P-rectCoords[0])<0.0)return vec3(0.0);vec3 T1,T2;T1=normalize(V-N*dot(V,N));T2=-cross(N,T1);mat3 mat=mInv*transposeMat3(mat3(T1,T2,N));vec3 coords[4];coords[0]=mat*(rectCoords[0]-P);coords[1]=mat*(rectCoords[1]-P);coords[2]=mat*(rectCoords[2]-P);coords[3]=mat*(rectCoords[3]-P);coords[0]=normalize(coords[0]);coords[1]=normalize(coords[1]);coords[2]=normalize(coords[2]);coords[3]=normalize(coords[3]);vec3 vectorFormFactor=vec3(0.0);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[0],coords[1]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[1],coords[2]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[2],coords[3]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[3],coords[0]);float result=LTC_ClippedSphereFormFactor(vectorFormFactor);return vec3(result);}float G_BlinnPhong_Implicit(){return 0.25;}float D_BlinnPhong(const in float shininess,const in float dotNH){return RECIPROCAL_PI*(shininess*0.5+1.0)*pow(dotNH,shininess);}vec3 BRDF_BlinnPhong(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 specularColor,const in float shininess){vec3 halfDir=normalize(lightDir+viewDir);float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(specularColor,1.0,dotVH);float G=G_BlinnPhong_Implicit();float D=D_BlinnPhong(shininess,dotNH);return F*(G*D);}\n#if defined(USE_SHEEN)\nfloat D_Charlie(float roughness,float dotNH){float alpha=pow2(roughness);float invAlpha=1.0/alpha;float cos2h=dotNH*dotNH;float sin2h=max(1.0-cos2h,0.0078125);return(2.0+invAlpha)*pow(sin2h,invAlpha*0.5)/(2.0*PI);}float V_Neubelt(float dotNV,float dotNL){return saturate(1.0/(4.0*(dotNL+dotNV-dotNL*dotNV)));}vec3 BRDF_Sheen(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,vec3 sheenColor,const in float sheenRoughness){vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float D=D_Charlie(sheenRoughness,dotNH);float V=V_Neubelt(dotNV,dotNL);return sheenColor*(D*V);}\n#endif", iridescence_fragment: "#ifdef USE_IRIDESCENCE\nconst mat3 XYZ_TO_REC709=mat3(3.2404542,-0.9692660,0.0556434,-1.5371385,1.8760108,-0.2040259,-0.4985314,0.0415560,1.0572252);vec3 Fresnel0ToIor(vec3 fresnel0){vec3 sqrtF0=sqrt(fresnel0);return(vec3(1.0)+sqrtF0)/(vec3(1.0)-sqrtF0);}vec3 IorToFresnel0(vec3 transmittedIor,float incidentIor){return pow2((transmittedIor-vec3(incidentIor))/(transmittedIor+vec3(incidentIor)));}float IorToFresnel0(float transmittedIor,float incidentIor){return pow2((transmittedIor-incidentIor)/(transmittedIor+incidentIor));}vec3 evalSensitivity(float OPD,vec3 shift){float phase=2.0*PI*OPD*1.0e-9;vec3 val=vec3(5.4856e-13,4.4201e-13,5.2481e-13);vec3 pos=vec3(1.6810e+06,1.7953e+06,2.2084e+06);vec3 var=vec3(4.3278e+09,9.3046e+09,6.6121e+09);vec3 xyz=val*sqrt(2.0*PI*var)*cos(pos*phase+shift)*exp(-pow2(phase)*var);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*pow2(phase));xyz/=1.0685e-7;vec3 rgb=XYZ_TO_REC709*xyz;return rgb;}vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0){vec3 I;float iridescenceIOR=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));float sinTheta2Sq=pow2(outsideIOR/iridescenceIOR)*(1.0-pow2(cosTheta1));float cosTheta2Sq=1.0-sinTheta2Sq;if(cosTheta2Sq<0.0){return vec3(1.0);}float cosTheta2=sqrt(cosTheta2Sq);float R0=IorToFresnel0(iridescenceIOR,outsideIOR);float R12=F_Schlick(R0,1.0,cosTheta1);float R21=R12;float T121=1.0-R12;float phi12=0.0;if(iridescenceIOR<outsideIOR)phi12=PI;float phi21=PI-phi12;vec3 baseIOR=Fresnel0ToIor(clamp(baseF0,0.0,0.9999));vec3 R1=IorToFresnel0(baseIOR,iridescenceIOR);vec3 R23=F_Schlick(R1,1.0,cosTheta2);vec3 phi23=vec3(0.0);if(baseIOR[0]<iridescenceIOR)phi23[0]=PI;if(baseIOR[1]<iridescenceIOR)phi23[1]=PI;if(baseIOR[2]<iridescenceIOR)phi23[2]=PI;float OPD=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;vec3 phi=vec3(phi21)+phi23;vec3 R123=clamp(R12*R23,1e-5,0.9999);vec3 r123=sqrt(R123);vec3 Rs=pow2(T121)*R23/(vec3(1.0)-R123);vec3 C0=R12+Rs;I=C0;vec3 Cm=Rs-T121;for(int m=1;m<=2;++m){Cm*=r123;vec3 Sm=2.0*evalSensitivity(float(m)*OPD,float(m)*phi);I+=Cm*Sm;}return max(I,vec3(0.0));}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;uniform float bumpScale;vec2 dHdxy_fwd(){vec2 dSTdx=dFdx(vUv);vec2 dSTdy=dFdy(vUv);float Hll=bumpScale*texture2D(bumpMap,vUv).x;float dBx=bumpScale*texture2D(bumpMap,vUv+dSTdx).x-Hll;float dBy=bumpScale*texture2D(bumpMap,vUv+dSTdy).x-Hll;return vec2(dBx,dBy);}vec3 perturbNormalArb(vec3 surf_pos,vec3 surf_norm,vec2 dHdxy,float faceDirection){vec3 vSigmaX=dFdx(surf_pos.xyz);vec3 vSigmaY=dFdy(surf_pos.xyz);vec3 vN=surf_norm;vec3 R1=cross(vSigmaY,vN);vec3 R2=cross(vN,vSigmaX);float fDet=dot(vSigmaX,R1)*faceDirection;vec3 vGrad=sign(fDet)*(dHdxy.x*R1+dHdxy.y*R2);return normalize(abs(fDet)*surf_norm-vGrad);}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES>0\nvec4 plane;\n#pragma unroll_loop_start\nfor(int i=0;i<UNION_CLIPPING_PLANES;i++){plane=clippingPlanes[i];if(dot(vClipPosition,plane.xyz)>plane.w)discard;}\n#pragma unroll_loop_end\n#if UNION_CLIPPING_PLANES<NUM_CLIPPING_PLANES\nbool clipped=true;\n#pragma unroll_loop_start\nfor(int i=UNION_CLIPPING_PLANES;i<NUM_CLIPPING_PLANES;i++){plane=clippingPlanes[i];clipped=(dot(vClipPosition,plane.xyz)>plane.w)&&clipped;}\n#pragma unroll_loop_end\nif(clipped)discard;\n#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES>0\nvClipPosition=-mvPosition.xyz;\n#endif", color_fragment: "#if defined(USE_COLOR_ALPHA)\ndiffuseColor*=vColor;\n#elif defined(USE_COLOR)\ndiffuseColor.rgb*=vColor;\n#endif", color_pars_fragment: "#if defined(USE_COLOR_ALPHA)\nvarying vec4 vColor;\n#elif defined(USE_COLOR)\nvarying vec3 vColor;\n#endif", color_pars_vertex: "#if defined(USE_COLOR_ALPHA)\nvarying vec4 vColor;\n#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvarying vec3 vColor;\n#endif", color_vertex: "#if defined(USE_COLOR_ALPHA)\nvColor=vec4(1.0);\n#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvColor=vec3(1.0);\n#endif\n#ifdef USE_COLOR\nvColor*=color;\n#endif\n#ifdef USE_INSTANCING_COLOR\nvColor.xyz*=instanceColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\n#define whiteComplement(a)(1.0-saturate(a))\nfloat pow2(const in float x){return x*x;}vec3 pow2(const in vec3 x){return x*x;}float pow3(const in float x){return x*x*x;}float pow4(const in float x){float x2=x*x;return x2*x2;}float max3(const in vec3 v){return max(max(v.x,v.y),v.z);}float average(const in vec3 v){return dot(v,vec3(0.3333333));}highp float rand(const in vec2 uv){const highp float a=12.9898,b=78.233,c=43758.5453;highp float dt=dot(uv.xy,vec2(a,b)),sn=mod(dt,PI);return fract(sin(sn)*c);}\n#ifdef HIGH_PRECISION\nfloat precisionSafeLength(vec3 v){return length(v);}\n#else\nfloat precisionSafeLength(vec3 v){float maxComponent=max3(abs(v));return length(v/maxComponent)*maxComponent;}\n#endif\nstruct IncidentLight{vec3 color;vec3 direction;bool visible;};struct ReflectedLight{vec3 directDiffuse;vec3 directSpecular;vec3 indirectDiffuse;vec3 indirectSpecular;};struct GeometricContext{vec3 position;vec3 normal;vec3 viewDir;\n#ifdef USE_CLEARCOAT\nvec3 clearcoatNormal;\n#endif\n};vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}mat3 transposeMat3(const in mat3 m){mat3 tmp;tmp[0]=vec3(m[0].x,m[1].x,m[2].x);tmp[1]=vec3(m[0].y,m[1].y,m[2].y);tmp[2]=vec3(m[0].z,m[1].z,m[2].z);return tmp;}float luminance(const in vec3 rgb){const vec3 weights=vec3(0.2126729,0.7151522,0.0721750);return dot(weights,rgb);}bool isPerspectiveMatrix(mat4 m){return m[2][3]==-1.0;}vec2 equirectUv(in vec3 dir){float u=atan(dir.z,dir.x)*RECIPROCAL_PI2+0.5;float v=asin(clamp(dir.y,-1.0,1.0))*RECIPROCAL_PI+0.5;return vec2(u,v);}", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction){vec3 absDirection=abs(direction);float face=-1.0;if(absDirection.x>absDirection.z){if(absDirection.x>absDirection.y)face=direction.x>0.0?0.0:3.0;else face=direction.y>0.0?1.0:4.0;}else{if(absDirection.z>absDirection.y)face=direction.z>0.0?2.0:5.0;else face=direction.y>0.0?1.0:4.0;}return face;}vec2 getUV(vec3 direction,float face){vec2 uv;if(face==0.0){uv=vec2(direction.z,direction.y)/abs(direction.x);}else if(face==1.0){uv=vec2(-direction.x,-direction.z)/abs(direction.y);}else if(face==2.0){uv=vec2(-direction.x,direction.y)/abs(direction.z);}else if(face==3.0){uv=vec2(-direction.z,direction.y)/abs(direction.x);}else if(face==4.0){uv=vec2(-direction.x,direction.z)/abs(direction.y);}else{uv=vec2(direction.x,direction.y)/abs(direction.z);}return 0.5*(uv+1.0);}vec3 bilinearCubeUV(sampler2D envMap,vec3 direction,float mipInt){float face=getFace(direction);float filterInt=max(cubeUV_minMipLevel-mipInt,0.0);mipInt=max(mipInt,cubeUV_minMipLevel);float faceSize=exp2(mipInt);vec2 uv=getUV(direction,face)*(faceSize-2.0)+1.0;if(face>2.0){uv.y+=faceSize;face-=3.0;}uv.x+=face*faceSize;uv.x+=filterInt*3.0*cubeUV_minTileSize;uv.y+=4.0*(exp2(CUBEUV_MAX_MIP)-faceSize);uv.x*=CUBEUV_TEXEL_WIDTH;uv.y*=CUBEUV_TEXEL_HEIGHT;\n#ifdef texture2DGradEXT\nreturn texture2DGradEXT(envMap,uv,vec2(0.0),vec2(0.0)).rgb;\n#else\nreturn texture2D(envMap,uv).rgb;\n#endif\n}\n#define cubeUV_r0 1.0\n#define cubeUV_v0 0.339\n#define cubeUV_m0-2.0\n#define cubeUV_r1 0.8\n#define cubeUV_v1 0.276\n#define cubeUV_m1-1.0\n#define cubeUV_r4 0.4\n#define cubeUV_v4 0.046\n#define cubeUV_m4 2.0\n#define cubeUV_r5 0.305\n#define cubeUV_v5 0.016\n#define cubeUV_m5 3.0\n#define cubeUV_r6 0.21\n#define cubeUV_v6 0.0038\n#define cubeUV_m6 4.0\nfloat roughnessToMip(float roughness){float mip=0.0;if(roughness>=cubeUV_r1){mip=(cubeUV_r0-roughness)*(cubeUV_m1-cubeUV_m0)/(cubeUV_r0-cubeUV_r1)+cubeUV_m0;}else if(roughness>=cubeUV_r4){mip=(cubeUV_r1-roughness)*(cubeUV_m4-cubeUV_m1)/(cubeUV_r1-cubeUV_r4)+cubeUV_m1;}else if(roughness>=cubeUV_r5){mip=(cubeUV_r4-roughness)*(cubeUV_m5-cubeUV_m4)/(cubeUV_r4-cubeUV_r5)+cubeUV_m4;}else if(roughness>=cubeUV_r6){mip=(cubeUV_r5-roughness)*(cubeUV_m6-cubeUV_m5)/(cubeUV_r5-cubeUV_r6)+cubeUV_m5;}else{mip=-2.0*log2(1.16*roughness);}return mip;}vec4 textureCubeUV(sampler2D envMap,vec3 sampleDir,float roughness){float mip=clamp(roughnessToMip(roughness),cubeUV_m0,CUBEUV_MAX_MIP);float mipF=fract(mip);float mipInt=floor(mip);vec3 color0=bilinearCubeUV(envMap,sampleDir,mipInt);if(mipF==0.0){return vec4(color0,1.0);}else{vec3 color1=bilinearCubeUV(envMap,sampleDir,mipInt+1.0);return vec4(mix(color0,color1,mipF),1.0);}}\n#endif", defaultnormal_vertex: "vec3 transformedNormal=objectNormal;\n#ifdef USE_INSTANCING\nmat3 m=mat3(instanceMatrix);transformedNormal/=vec3(dot(m[0],m[0]),dot(m[1],m[1]),dot(m[2],m[2]));transformedNormal=m*transformedNormal;\n#endif\ntransformedNormal=normalMatrix*transformedNormal;\n#ifdef FLIP_SIDED\ntransformedNormal=-transformedNormal;\n#endif\n#ifdef USE_TANGENT\nvec3 transformedTangent=(modelViewMatrix*vec4(objectTangent,0.0)).xyz;\n#ifdef FLIP_SIDED\ntransformedTangent=-transformedTangent;\n#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\nuniform sampler2D displacementMap;uniform float displacementScale;uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\ntransformed+=normalize(objectNormal)*(texture2D(displacementMap,vUv).x*displacementScale+displacementBias);\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\nvec4 emissiveColor=texture2D(emissiveMap,vUv);totalEmissiveRadiance*=emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\nuniform sampler2D emissiveMap;\n#endif", encodings_fragment: "gl_FragColor=linearToOutputTexel(gl_FragColor);", encodings_pars_fragment: "vec4 LinearToLinear(in vec4 value){return value;}vec4 LinearTosRGB(in vec4 value){return vec4(mix(pow(value.rgb,vec3(0.41666))*1.055-vec3(0.055),value.rgb*12.92,vec3(lessThanEqual(value.rgb,vec3(0.0031308)))),value.a);}", envmap_fragment: "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvec3 cameraToFrag;if(isOrthographic){cameraToFrag=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToFrag=normalize(vWorldPosition-cameraPosition);}vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvec3 reflectVec=reflect(cameraToFrag,worldNormal);\n#else\nvec3 reflectVec=refract(cameraToFrag,worldNormal,refractionRatio);\n#endif\n#else\nvec3 reflectVec=vReflect;\n#endif\n#ifdef ENVMAP_TYPE_CUBE\nvec4 envColor=textureCube(envMap,vec3(flipEnvMap*reflectVec.x,reflectVec.yz));\n#elif defined(ENVMAP_TYPE_CUBE_UV)\nvec4 envColor=textureCubeUV(envMap,reflectVec,0.0);\n#else\nvec4 envColor=vec4(0.0);\n#endif\n#ifdef ENVMAP_BLENDING_MULTIPLY\noutgoingLight=mix(outgoingLight,outgoingLight*envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_MIX)\noutgoingLight=mix(outgoingLight,envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_ADD)\noutgoingLight+=envColor.xyz*specularStrength*reflectivity;\n#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\nuniform float envMapIntensity;uniform float flipEnvMap;\n#ifdef ENVMAP_TYPE_CUBE\nuniform samplerCube envMap;\n#else\nuniform sampler2D envMap;\n#endif\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\nuniform float reflectivity;\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)||defined(LAMBERT)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;uniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)||defined(LAMBERT)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;\n#else\nvarying vec3 vReflect;uniform float refractionRatio;\n#endif\n#endif", envmap_physical_pars_fragment: "#if defined(USE_ENVMAP)\nvec3 getIBLIrradiance(const in vec3 normal){\n#if defined(ENVMAP_TYPE_CUBE_UV)\nvec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,worldNormal,1.0);return PI*envMapColor.rgb*envMapIntensity;\n#else\nreturn vec3(0.0);\n#endif\n}vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness){\n#if defined(ENVMAP_TYPE_CUBE_UV)\nvec3 reflectVec=reflect(-viewDir,normal);reflectVec=normalize(mix(reflectVec,normal,roughness*roughness));reflectVec=inverseTransformDirection(reflectVec,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,reflectVec,roughness);return envMapColor.rgb*envMapIntensity;\n#else\nreturn vec3(0.0);\n#endif\n}\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvWorldPosition=worldPosition.xyz;\n#else\nvec3 cameraToVertex;if(isOrthographic){cameraToVertex=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToVertex=normalize(worldPosition.xyz-cameraPosition);}vec3 worldNormal=inverseTransformDirection(transformedNormal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvReflect=reflect(cameraToVertex,worldNormal);\n#else\nvReflect=refract(cameraToVertex,worldNormal,refractionRatio);\n#endif\n#endif\n#endif", fog_vertex: "#ifdef USE_FOG\nvFogDepth=-mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\nvarying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n#ifdef FOG_EXP2\nfloat fogFactor=1.0-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);\n#else\nfloat fogFactor=smoothstep(fogNear,fogFar,vFogDepth);\n#endif\ngl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);\n#endif", fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;varying float vFogDepth;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;uniform float fogFar;\n#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\nuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance(vec3 normal,vec3 lightDirection){float dotNL=dot(normal,lightDirection);vec2 coord=vec2(dotNL*0.5+0.5,0.0);\n#ifdef USE_GRADIENTMAP\nreturn vec3(texture2D(gradientMap,coord).r);\n#else\nvec2 fw=fwidth(coord)*0.5;return mix(vec3(0.7),vec3(1.0),smoothstep(0.7-fw.x,0.7+fw.x,coord.x));\n#endif\n}", lightmap_fragment: "#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;reflectedLight.indirectDiffuse+=lightMapIrradiance;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nuniform sampler2D lightMap;uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;material.diffuseColor=diffuseColor.rgb;material.specularStrength=specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;struct LambertMaterial{vec3 diffuseColor;float specularStrength;};void RE_Direct_Lambert(const in IncidentLight directLight,const in GeometricContext geometry,const in LambertMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Lambert(const in vec3 irradiance,const in GeometricContext geometry,const in LambertMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_Lambert\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert\n#define Material_LightProbeLOD(material)(0)", lights_pars_begin: "uniform bool receiveShadow;uniform vec3 ambientLightColor;uniform vec3 lightProbe[9];vec3 shGetIrradianceAt(in vec3 normal,in vec3 shCoefficients[9]){float x=normal.x,y=normal.y,z=normal.z;vec3 result=shCoefficients[0]*0.886227;result+=shCoefficients[1]*2.0*0.511664*y;result+=shCoefficients[2]*2.0*0.511664*z;result+=shCoefficients[3]*2.0*0.511664*x;result+=shCoefficients[4]*2.0*0.429043*x*y;result+=shCoefficients[5]*2.0*0.429043*y*z;result+=shCoefficients[6]*(0.743125*z*z-0.247708);result+=shCoefficients[7]*2.0*0.429043*x*z;result+=shCoefficients[8]*0.429043*(x*x-y*y);return result;}vec3 getLightProbeIrradiance(const in vec3 lightProbe[9],const in vec3 normal){vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec3 irradiance=shGetIrradianceAt(worldNormal,lightProbe);return irradiance;}vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor){vec3 irradiance=ambientLightColor;return irradiance;}float getDistanceAttenuation(const in float lightDistance,const in float cutoffDistance,const in float decayExponent){\n#if defined(PHYSICALLY_CORRECT_LIGHTS)\nfloat distanceFalloff=1.0/max(pow(lightDistance,decayExponent),0.01);if(cutoffDistance>0.0){distanceFalloff*=pow2(saturate(1.0-pow4(lightDistance/cutoffDistance)));}return distanceFalloff;\n#else\nif(cutoffDistance>0.0&&decayExponent>0.0){return pow(saturate(-lightDistance/cutoffDistance+1.0),decayExponent);}return 1.0;\n#endif\n}float getSpotAttenuation(const in float coneCosine,const in float penumbraCosine,const in float angleCosine){return smoothstep(coneCosine,penumbraCosine,angleCosine);}\n#if NUM_DIR_LIGHTS>0\nstruct DirectionalLight{vec3 direction;vec3 color;};uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];void getDirectionalLightInfo(const in DirectionalLight directionalLight,const in GeometricContext geometry,out IncidentLight light){light.color=directionalLight.color;light.direction=directionalLight.direction;light.visible=true;}\n#endif\n#if NUM_POINT_LIGHTS>0\nstruct PointLight{vec3 position;vec3 color;float distance;float decay;};uniform PointLight pointLights[NUM_POINT_LIGHTS];void getPointLightInfo(const in PointLight pointLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=pointLight.position-geometry.position;light.direction=normalize(lVector);float lightDistance=length(lVector);light.color=pointLight.color;light.color*=getDistanceAttenuation(lightDistance,pointLight.distance,pointLight.decay);light.visible=(light.color!=vec3(0.0));}\n#endif\n#if NUM_SPOT_LIGHTS>0\nstruct SpotLight{vec3 position;vec3 direction;vec3 color;float distance;float decay;float coneCos;float penumbraCos;};uniform SpotLight spotLights[NUM_SPOT_LIGHTS];void getSpotLightInfo(const in SpotLight spotLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=spotLight.position-geometry.position;light.direction=normalize(lVector);float angleCos=dot(light.direction,spotLight.direction);float spotAttenuation=getSpotAttenuation(spotLight.coneCos,spotLight.penumbraCos,angleCos);if(spotAttenuation>0.0){float lightDistance=length(lVector);light.color=spotLight.color*spotAttenuation;light.color*=getDistanceAttenuation(lightDistance,spotLight.distance,spotLight.decay);light.visible=(light.color!=vec3(0.0));}else{light.color=vec3(0.0);light.visible=false;}}\n#endif\n#if NUM_RECT_AREA_LIGHTS>0\nstruct RectAreaLight{vec3 color;vec3 position;vec3 halfWidth;vec3 halfHeight;};uniform sampler2D ltc_1;uniform sampler2D ltc_2;uniform RectAreaLight rectAreaLights[NUM_RECT_AREA_LIGHTS];\n#endif\n#if NUM_HEMI_LIGHTS>0\nstruct HemisphereLight{vec3 direction;vec3 skyColor;vec3 groundColor;};uniform HemisphereLight hemisphereLights[NUM_HEMI_LIGHTS];vec3 getHemisphereLightIrradiance(const in HemisphereLight hemiLight,const in vec3 normal){float dotNL=dot(normal,hemiLight.direction);float hemiDiffuseWeight=0.5*dotNL+0.5;vec3 irradiance=mix(hemiLight.groundColor,hemiLight.skyColor,hemiDiffuseWeight);return irradiance;}\n#endif", lights_toon_fragment: "ToonMaterial material;material.diffuseColor=diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;struct ToonMaterial{vec3 diffuseColor;};void RE_Direct_Toon(const in IncidentLight directLight,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){vec3 irradiance=getGradientIrradiance(geometry.normal,directLight.direction)*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Toon(const in vec3 irradiance,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_Toon\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD(material)(0)", lights_phong_fragment: "BlinnPhongMaterial material;material.diffuseColor=diffuseColor.rgb;material.specularColor=specular;material.specularShininess=shininess;material.specularStrength=specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;struct BlinnPhongMaterial{vec3 diffuseColor;vec3 specularColor;float specularShininess;float specularStrength;};void RE_Direct_BlinnPhong(const in IncidentLight directLight,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);reflectedLight.directSpecular+=irradiance*BRDF_BlinnPhong(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularShininess)*material.specularStrength;}void RE_IndirectDiffuse_BlinnPhong(const in vec3 irradiance,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD(material)(0)", lights_physical_fragment: "PhysicalMaterial material;material.diffuseColor=diffuseColor.rgb*(1.0-metalnessFactor);vec3 dxy=max(abs(dFdx(geometryNormal)),abs(dFdy(geometryNormal)));float geometryRoughness=max(max(dxy.x,dxy.y),dxy.z);material.roughness=max(roughnessFactor,0.0525);material.roughness+=geometryRoughness;material.roughness=min(material.roughness,1.0);\n#ifdef IOR\nmaterial.ior=ior;\n#ifdef SPECULAR\nfloat specularIntensityFactor=specularIntensity;vec3 specularColorFactor=specularColor;\n#ifdef USE_SPECULARINTENSITYMAP\nspecularIntensityFactor*=texture2D(specularIntensityMap,vUv).a;\n#endif\n#ifdef USE_SPECULARCOLORMAP\nspecularColorFactor*=texture2D(specularColorMap,vUv).rgb;\n#endif\nmaterial.specularF90=mix(specularIntensityFactor,1.0,metalnessFactor);\n#else\nfloat specularIntensityFactor=1.0;vec3 specularColorFactor=vec3(1.0);material.specularF90=1.0;\n#endif\nmaterial.specularColor=mix(min(pow2((material.ior-1.0)/(material.ior+1.0))*specularColorFactor,vec3(1.0))*specularIntensityFactor,diffuseColor.rgb,metalnessFactor);\n#else\nmaterial.specularColor=mix(vec3(0.04),diffuseColor.rgb,metalnessFactor);material.specularF90=1.0;\n#endif\n#ifdef USE_CLEARCOAT\nmaterial.clearcoat=clearcoat;material.clearcoatRoughness=clearcoatRoughness;material.clearcoatF0=vec3(0.04);material.clearcoatF90=1.0;\n#ifdef USE_CLEARCOATMAP\nmaterial.clearcoat*=texture2D(clearcoatMap,vUv).x;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nmaterial.clearcoatRoughness*=texture2D(clearcoatRoughnessMap,vUv).y;\n#endif\nmaterial.clearcoat=saturate(material.clearcoat);material.clearcoatRoughness=max(material.clearcoatRoughness,0.0525);material.clearcoatRoughness+=geometryRoughness;material.clearcoatRoughness=min(material.clearcoatRoughness,1.0);\n#endif\n#ifdef USE_IRIDESCENCE\nmaterial.iridescence=iridescence;material.iridescenceIOR=iridescenceIOR;\n#ifdef USE_IRIDESCENCEMAP\nmaterial.iridescence*=texture2D(iridescenceMap,vUv).r;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\nmaterial.iridescenceThickness=(iridescenceThicknessMaximum-iridescenceThicknessMinimum)*texture2D(iridescenceThicknessMap,vUv).g+iridescenceThicknessMinimum;\n#else\nmaterial.iridescenceThickness=iridescenceThicknessMaximum;\n#endif\n#endif\n#ifdef USE_SHEEN\nmaterial.sheenColor=sheenColor;\n#ifdef USE_SHEENCOLORMAP\nmaterial.sheenColor*=texture2D(sheenColorMap,vUv).rgb;\n#endif\nmaterial.sheenRoughness=clamp(sheenRoughness,0.07,1.0);\n#ifdef USE_SHEENROUGHNESSMAP\nmaterial.sheenRoughness*=texture2D(sheenRoughnessMap,vUv).a;\n#endif\n#endif", lights_physical_pars_fragment:"struct PhysicalMaterial{vec3 diffuseColor;float roughness;vec3 specularColor;float specularF90;\n#ifdef USE_CLEARCOAT\nfloat clearcoat;float clearcoatRoughness;vec3 clearcoatF0;float clearcoatF90;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat iridescence;float iridescenceIOR;float iridescenceThickness;vec3 iridescenceFresnel;vec3 iridescenceF0;\n#endif\n#ifdef USE_SHEEN\nvec3 sheenColor;float sheenRoughness;\n#endif\n#ifdef IOR\nfloat ior;\n#endif\n#ifdef USE_TRANSMISSION\nfloat transmission;float transmissionAlpha;float thickness;float attenuationDistance;vec3 attenuationColor;\n#endif\n};vec3 clearcoatSpecular=vec3(0.0);vec3 sheenSpecular=vec3(0.0);float IBLSheenBRDF(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));float r2=roughness*roughness;float a=roughness<0.25?-339.2*r2+161.4*roughness-25.9:-8.48*r2+14.3*roughness-9.95;float b=roughness<0.25?44.0*r2-23.7*roughness+3.26:1.97*r2-3.27*roughness+0.72;float DG=exp(a*dotNV+b)+(roughness<0.25?0.0:0.1*(roughness-0.25));return saturate(DG*RECIPROCAL_PI);}vec2 DFGApprox(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));const vec4 c0=vec4(-1,-0.0275,-0.572,0.022);const vec4 c1=vec4(1,0.0425,1.04,-0.04);vec4 r=roughness*c0+c1;float a004=min(r.x*r.x,exp2(-9.28*dotNV))*r.x+r.y;vec2 fab=vec2(-1.04,1.04)*a004+r.zw;return fab;}vec3 EnvironmentBRDF(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness){vec2 fab=DFGApprox(normal,viewDir,roughness);return specularColor*fab.x+specularF90*fab.y;}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float iridescence,const in vec3 iridescenceF0,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){\n#else\nvoid computeMultiscattering(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){\n#endif\nvec2 fab=DFGApprox(normal,viewDir,roughness);\n#ifdef USE_IRIDESCENCE\nvec3 Fr=mix(specularColor,iridescenceF0,iridescence);\n#else\nvec3 Fr=specularColor;\n#endif\nvec3 FssEss=Fr*fab.x+specularF90*fab.y;float Ess=fab.x+fab.y;float Ems=1.0-Ess;vec3 Favg=Fr+(1.0-Fr)*0.047619;vec3 Fms=FssEss*Favg/(1.0-Ems*Favg);singleScatter+=FssEss;multiScatter+=Fms*Ems;}\n#if NUM_RECT_AREA_LIGHTS>0\nvoid RE_Direct_RectArea_Physical(const in RectAreaLight rectAreaLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){vec3 normal=geometry.normal;vec3 viewDir=geometry.viewDir;vec3 position=geometry.position;vec3 lightPos=rectAreaLight.position;vec3 halfWidth=rectAreaLight.halfWidth;vec3 halfHeight=rectAreaLight.halfHeight;vec3 lightColor=rectAreaLight.color;float roughness=material.roughness;vec3 rectCoords[4];rectCoords[0]=lightPos+halfWidth-halfHeight;rectCoords[1]=lightPos-halfWidth-halfHeight;rectCoords[2]=lightPos-halfWidth+halfHeight;rectCoords[3]=lightPos+halfWidth+halfHeight;vec2 uv=LTC_Uv(normal,viewDir,roughness);vec4 t1=texture2D(ltc_1,uv);vec4 t2=texture2D(ltc_2,uv);mat3 mInv=mat3(vec3(t1.x,0,t1.y),vec3(0,1,0),vec3(t1.z,0,t1.w));vec3 fresnel=(material.specularColor*t2.x+(vec3(1.0)-material.specularColor)*t2.y);reflectedLight.directSpecular+=lightColor*fresnel*LTC_Evaluate(normal,viewDir,position,mInv,rectCoords);reflectedLight.directDiffuse+=lightColor*material.diffuseColor*LTC_Evaluate(normal,viewDir,position,mat3(1.0),rectCoords);}\n#endif\nvoid RE_Direct_Physical(const in IncidentLight directLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;\n#ifdef USE_CLEARCOAT\nfloat dotNLcc=saturate(dot(geometry.clearcoatNormal,directLight.direction));vec3 ccIrradiance=dotNLcc*directLight.color;clearcoatSpecular+=ccIrradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.clearcoatNormal,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);\n#endif\n#ifdef USE_SHEEN\nsheenSpecular+=irradiance*BRDF_Sheen(directLight.direction,geometry.viewDir,geometry.normal,material.sheenColor,material.sheenRoughness);\n#endif\n#ifdef USE_IRIDESCENCE\nreflectedLight.directSpecular+=irradiance*BRDF_GGX_Iridescence(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness);\n#else\nreflectedLight.directSpecular+=irradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.roughness);\n#endif\nreflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Physical(const in vec3 irradiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectSpecular_Physical(const in vec3 radiance,const in vec3 irradiance,const in vec3 clearcoatRadiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){\n#ifdef USE_CLEARCOAT\nclearcoatSpecular+=clearcoatRadiance*EnvironmentBRDF(geometry.clearcoatNormal,geometry.viewDir,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);\n#endif\n#ifdef USE_SHEEN\nsheenSpecular+=irradiance*material.sheenColor*IBLSheenBRDF(geometry.normal,geometry.viewDir,material.sheenRoughness);\n#endif\nvec3 singleScattering=vec3(0.0);vec3 multiScattering=vec3(0.0);vec3 cosineWeightedIrradiance=irradiance*RECIPROCAL_PI;\n#ifdef USE_IRIDESCENCE\ncomputeMultiscatteringIridescence(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness,singleScattering,multiScattering);\n#else\ncomputeMultiscattering(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.roughness,singleScattering,multiScattering);\n#endif\nvec3 totalScattering=singleScattering+multiScattering;vec3 diffuse=material.diffuseColor*(1.0-max(max(totalScattering.r,totalScattering.g),totalScattering.b));reflectedLight.indirectSpecular+=radiance*singleScattering;reflectedLight.indirectSpecular+=multiScattering*cosineWeightedIrradiance;reflectedLight.indirectDiffuse+=diffuse*cosineWeightedIrradiance;}\n#define RE_Direct RE_Direct_Physical\n#define RE_Direct_RectArea RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion(const in float dotNV,const in float ambientOcclusion,const in float roughness){return saturate(pow(dotNV+ambientOcclusion,exp2(-16.0*roughness-1.0))-1.0+ambientOcclusion);}", lights_fragment_begin: "GeometricContext geometry;geometry.position=-vViewPosition;geometry.normal=normal;geometry.viewDir=(isOrthographic)?vec3(0,0,1):normalize(vViewPosition);\n#ifdef USE_CLEARCOAT\ngeometry.clearcoatNormal=clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat dotNVi=saturate(dot(normal,geometry.viewDir));if(material.iridescenceThickness==0.0){material.iridescence=0.0;}else{material.iridescence=saturate(material.iridescence);}if(material.iridescence>0.0){material.iridescenceFresnel=evalIridescence(1.0,material.iridescenceIOR,dotNVi,material.iridescenceThickness,material.specularColor);material.iridescenceF0=Schlick_to_F0(material.iridescenceFresnel,1.0,dotNVi);}\n#endif\nIncidentLight directLight;\n#if (NUM_POINT_LIGHTS>0)&&defined(RE_Direct)\nPointLight pointLight;\n#if defined(USE_SHADOWMAP)&&NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHTS;i++){pointLight=pointLights[i];getPointLightInfo(pointLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_POINT_LIGHT_SHADOWS)\npointLightShadow=pointLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getPointShadow(pointShadowMap[i],pointLightShadow.shadowMapSize,pointLightShadow.shadowBias,pointLightShadow.shadowRadius,vPointShadowCoord[i],pointLightShadow.shadowCameraNear,pointLightShadow.shadowCameraFar):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_SPOT_LIGHTS>0)&&defined(RE_Direct)\nSpotLight spotLight;vec4 spotColor;vec3 spotLightCoord;bool inSpotLightMap;\n#if defined(USE_SHADOWMAP)&&NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHTS;i++){spotLight=spotLights[i];getSpotLightInfo(spotLight,geometry,directLight);\n#if (UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS)\n#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n#elif (UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\n#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n#else\n#define SPOT_LIGHT_MAP_INDEX(UNROLLED_LOOP_INDEX-NUM_SPOT_LIGHT_SHADOWS+NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS)\n#endif\n#if (SPOT_LIGHT_MAP_INDEX<NUM_SPOT_LIGHT_MAPS)\nspotLightCoord=vSpotLightCoord[i].xyz/vSpotLightCoord[i].w;inSpotLightMap=all(lessThan(abs(spotLightCoord*2.-1.),vec3(1.0)));spotColor=texture2D(spotLightMap[SPOT_LIGHT_MAP_INDEX],spotLightCoord.xy);directLight.color=inSpotLightMap?directLight.color*spotColor.rgb:directLight.color;\n#endif\n#undef SPOT_LIGHT_MAP_INDEX\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\nspotLightShadow=spotLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(spotShadowMap[i],spotLightShadow.shadowMapSize,spotLightShadow.shadowBias,spotLightShadow.shadowRadius,vSpotLightCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_DIR_LIGHTS>0)&&defined(RE_Direct)\nDirectionalLight directionalLight;\n#if defined(USE_SHADOWMAP)&&NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHTS;i++){directionalLight=directionalLights[i];getDirectionalLightInfo(directionalLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_DIR_LIGHT_SHADOWS)\ndirectionalLightShadow=directionalLightShadows[i];directLight.color*=all(bvec2(directLight.visible,receiveShadow))?getShadow(directionalShadowMap[i],directionalLightShadow.shadowMapSize,directionalLightShadow.shadowBias,directionalLightShadow.shadowRadius,vDirectionalShadowCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_RECT_AREA_LIGHTS>0)&&defined(RE_Direct_RectArea)\nRectAreaLight rectAreaLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_RECT_AREA_LIGHTS;i++){rectAreaLight=rectAreaLights[i];RE_Direct_RectArea(rectAreaLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if defined(RE_IndirectDiffuse)\nvec3 iblIrradiance=vec3(0.0);vec3 irradiance=getAmbientLightIrradiance(ambientLightColor);irradiance+=getLightProbeIrradiance(lightProbe,geometry.normal);\n#if (NUM_HEMI_LIGHTS>0)\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_HEMI_LIGHTS;i++){irradiance+=getHemisphereLightIrradiance(hemisphereLights[i],geometry.normal);}\n#pragma unroll_loop_end\n#endif\n#endif\n#if defined(RE_IndirectSpecular)\nvec3 radiance=vec3(0.0);vec3 clearcoatRadiance=vec3(0.0);\n#endif", lights_fragment_maps: "#if defined(RE_IndirectDiffuse)\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;irradiance+=lightMapIrradiance;\n#endif\n#if defined(USE_ENVMAP)&&defined(STANDARD)&&defined(ENVMAP_TYPE_CUBE_UV)\niblIrradiance+=getIBLIrradiance(geometry.normal);\n#endif\n#endif\n#if defined(USE_ENVMAP)&&defined(RE_IndirectSpecular)\nradiance+=getIBLRadiance(geometry.viewDir,geometry.normal,material.roughness);\n#ifdef USE_CLEARCOAT\nclearcoatRadiance+=getIBLRadiance(geometry.viewDir,geometry.clearcoatNormal,material.clearcoatRoughness);\n#endif\n#endif", lights_fragment_end: "#if defined(RE_IndirectDiffuse)\nRE_IndirectDiffuse(irradiance,geometry,material,reflectedLight);\n#endif\n#if defined(RE_IndirectSpecular)\nRE_IndirectSpecular(radiance,iblIrradiance,clearcoatRadiance,geometry,material,reflectedLight);\n#endif", logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\ngl_FragDepthEXT=vIsPerspective==0.0?gl_FragCoord.z:log2(vFragDepth)*logDepthBufFC*0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\nuniform float logDepthBufFC;varying float vFragDepth;varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvarying float vFragDepth;varying float vIsPerspective;\n#else\nuniform float logDepthBufFC;\n#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvFragDepth=1.0+gl_Position.w;vIsPerspective=float(isPerspectiveMatrix(projectionMatrix));\n#else\nif(isPerspectiveMatrix(projectionMatrix)){gl_Position.z=log2(max(EPSILON,gl_Position.w+1.0))*logDepthBufFC-1.0;gl_Position.z*=gl_Position.w;}\n#endif\n#endif", map_fragment: "#ifdef USE_MAP\nvec4 sampledDiffuseColor=texture2D(map,vUv);\n#ifdef DECODE_VIDEO_TEXTURE\nsampledDiffuseColor=vec4(mix(pow(sampledDiffuseColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),sampledDiffuseColor.rgb*0.0773993808,vec3(lessThanEqual(sampledDiffuseColor.rgb,vec3(0.04045)))),sampledDiffuseColor.w);\n#endif\ndiffuseColor*=sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif", map_particle_fragment: "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nvec2 uv=(uvTransform*vec3(gl_PointCoord.x,1.0-gl_PointCoord.y,1)).xy;\n#endif\n#ifdef USE_MAP\ndiffuseColor*=texture2D(map,uv);\n#endif\n#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,uv).g;\n#endif", map_particle_pars_fragment: "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor=metalness;\n#ifdef USE_METALNESSMAP\nvec4 texelMetalness=texture2D(metalnessMap,vUv);metalnessFactor*=texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\nuniform sampler2D metalnessMap;\n#endif", morphcolor_vertex: "#if defined(USE_MORPHCOLORS)&&defined(MORPHTARGETS_TEXTURE)\nvColor*=morphTargetBaseInfluence;for(int i=0;i<MORPHTARGETS_COUNT;i++){\n#if defined(USE_COLOR_ALPHA)\nif(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2)*morphTargetInfluences[i];\n#elif defined(USE_COLOR)\nif(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2).rgb*morphTargetInfluences[i];\n#endif\n}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\nobjectNormal*=morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nfor(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)objectNormal+=getMorph(gl_VertexID,i,1).xyz*morphTargetInfluences[i];}\n#else\nobjectNormal+=morphNormal0*morphTargetInfluences[0];objectNormal+=morphNormal1*morphTargetInfluences[1];objectNormal+=morphNormal2*morphTargetInfluences[2];objectNormal+=morphNormal3*morphTargetInfluences[3];\n#endif\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nuniform float morphTargetInfluences[MORPHTARGETS_COUNT];uniform sampler2DArray morphTargetsTexture;uniform ivec2 morphTargetsTextureSize;vec4 getMorph(const in int vertexIndex,const in int morphTargetIndex,const in int offset){int texelIndex=vertexIndex*MORPHTARGETS_TEXTURE_STRIDE+offset;int y=texelIndex/morphTargetsTextureSize.x;int x=texelIndex-y*morphTargetsTextureSize.x;ivec3 morphUV=ivec3(x,y,morphTargetIndex);return texelFetch(morphTargetsTexture,morphUV,0);}\n#else\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[8];\n#else\nuniform float morphTargetInfluences[4];\n#endif\n#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\ntransformed*=morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nfor(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)transformed+=getMorph(gl_VertexID,i,0).xyz*morphTargetInfluences[i];}\n#else\ntransformed+=morphTarget0*morphTargetInfluences[0];transformed+=morphTarget1*morphTargetInfluences[1];transformed+=morphTarget2*morphTargetInfluences[2];transformed+=morphTarget3*morphTargetInfluences[3];\n#ifndef USE_MORPHNORMALS\ntransformed+=morphTarget4*morphTargetInfluences[4];transformed+=morphTarget5*morphTargetInfluences[5];transformed+=morphTarget6*morphTargetInfluences[6];transformed+=morphTarget7*morphTargetInfluences[7];\n#endif\n#endif\n#endif", normal_fragment_begin: "float faceDirection=gl_FrontFacing?1.0:-1.0;\n#ifdef FLAT_SHADED\nvec3 fdx=vec3(dFdx(vViewPosition.x),dFdx(vViewPosition.y),dFdx(vViewPosition.z));vec3 fdy=vec3(dFdy(vViewPosition.x),dFdy(vViewPosition.y),dFdy(vViewPosition.z));vec3 normal=normalize(cross(fdx,fdy));\n#else\nvec3 normal=normalize(vNormal);\n#ifdef DOUBLE_SIDED\nnormal=normal*faceDirection;\n#endif\n#ifdef USE_TANGENT\nvec3 tangent=normalize(vTangent);vec3 bitangent=normalize(vBitangent);\n#ifdef DOUBLE_SIDED\ntangent=tangent*faceDirection;bitangent=bitangent*faceDirection;\n#endif\n#if defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP)\nmat3 vTBN=mat3(tangent,bitangent,normal);\n#endif\n#endif\n#endif\nvec3 geometryNormal=normal;", normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\nnormal=texture2D(normalMap,vUv).xyz*2.0-1.0;\n#ifdef FLIP_SIDED\nnormal=-normal;\n#endif\n#ifdef DOUBLE_SIDED\nnormal=normal*faceDirection;\n#endif\nnormal=normalize(normalMatrix*normal);\n#elif defined(TANGENTSPACE_NORMALMAP)\nvec3 mapN=texture2D(normalMap,vUv).xyz*2.0-1.0;mapN.xy*=normalScale;\n#ifdef USE_TANGENT\nnormal=normalize(vTBN*mapN);\n#else\nnormal=perturbNormal2Arb(-vViewPosition,normal,mapN,faceDirection);\n#endif\n#elif defined(USE_BUMPMAP)\nnormal=perturbNormalArb(-vViewPosition,normal,dHdxy_fwd(),faceDirection);\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\nuniform mat3 normalMatrix;\n#endif\n#if !defined(USE_TANGENT)&&(defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP))\nvec3 perturbNormal2Arb(vec3 eye_pos,vec3 surf_norm,vec3 mapN,float faceDirection){vec3 q0=dFdx(eye_pos.xyz);vec3 q1=dFdy(eye_pos.xyz);vec2 st0=dFdx(vUv.st);vec2 st1=dFdy(vUv.st);vec3 N=surf_norm;vec3 q1perp=cross(q1,N);vec3 q0perp=cross(N,q0);vec3 T=q1perp*st0.x+q0perp*st1.x;vec3 B=q1perp*st0.y+q0perp*st1.y;float det=max(dot(T,T),dot(B,B));float scale=(det==0.0)?0.0:faceDirection*inversesqrt(det);return normalize(T*(mapN.x*scale)+B*(mapN.y*scale)+N*mapN.z);}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\nvec3 clearcoatNormal=geometryNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\nvec3 clearcoatMapN=texture2D(clearcoatNormalMap,vUv).xyz*2.0-1.0;clearcoatMapN.xy*=clearcoatNormalScale;\n#ifdef USE_TANGENT\nclearcoatNormal=normalize(vTBN*clearcoatMapN);\n#else\nclearcoatNormal=perturbNormal2Arb(-vViewPosition,clearcoatNormal,clearcoatMapN,faceDirection);\n#endif\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\nuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\nuniform sampler2D clearcoatNormalMap;uniform vec2 clearcoatNormalScale;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\nuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\nuniform sampler2D iridescenceThicknessMap;\n#endif", output_fragment: "#ifdef OPAQUE\ndiffuseColor.a=1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a*=material.transmissionAlpha+0.1;\n#endif\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);", packing: "vec3 packNormalToRGB(const in vec3 normal){return normalize(normal)*0.5+0.5;}vec3 unpackRGBToNormal(const in vec3 rgb){return 2.0*rgb.xyz-1.0;}const float PackUpscale=256./255.;const float UnpackDownscale=255./256.;const vec3 PackFactors=vec3(256.*256.*256.,256.*256.,256.);const vec4 UnpackFactors=UnpackDownscale/vec4(PackFactors,1.);const float ShiftRight8=1./256.;vec4 packDepthToRGBA(const in float v){vec4 r=vec4(fract(v*PackFactors),v);r.yzw-=r.xyz*ShiftRight8;return r*PackUpscale;}float unpackRGBAToDepth(const in vec4 v){return dot(v,UnpackFactors);}vec4 pack2HalfToRGBA(vec2 v){vec4 r=vec4(v.x,fract(v.x*255.0),v.y,fract(v.y*255.0));return vec4(r.x-r.y/255.0,r.y,r.z-r.w/255.0,r.w);}vec2 unpackRGBATo2Half(vec4 v){return vec2(v.x+(v.y/255.0),v.z+(v.w/255.0));}float viewZToOrthographicDepth(const in float viewZ,const in float near,const in float far){return(viewZ+near)/(near-far);}float orthographicDepthToViewZ(const in float linearClipZ,const in float near,const in float far){return linearClipZ*(near-far)-near;}float viewZToPerspectiveDepth(const in float viewZ,const in float near,const in float far){return((near+viewZ)*far)/((far-near)*viewZ);}float perspectiveDepthToViewZ(const in float invClipZ,const in float near,const in float far){return(near*far)/((far-near)*invClipZ-far);}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\ngl_FragColor.rgb*=gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nmvPosition=instanceMatrix*mvPosition;\n#endif\nmvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;", dithering_fragment: "#ifdef DITHERING\ngl_FragColor.rgb=dithering(gl_FragColor.rgb);\n#endif", dithering_pars_fragment: "#ifdef DITHERING\nvec3 dithering(vec3 color){float grid_position=rand(gl_FragCoord.xy);vec3 dither_shift_RGB=vec3(0.25/255.0,-0.25/255.0,0.25/255.0);dither_shift_RGB=mix(2.0*dither_shift_RGB,-2.0*dither_shift_RGB,grid_position);return color+dither_shift_RGB;}\n#endif", roughnessmap_fragment: "float roughnessFactor=roughness;\n#ifdef USE_ROUGHNESSMAP\nvec4 texelRoughness=texture2D(roughnessMap,vUv);roughnessFactor*=texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\nuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS>0\nvarying vec4 vSpotLightCoord[NUM_SPOT_LIGHT_COORDS];\n#endif\n#if NUM_SPOT_LIGHT_MAPS>0\nuniform sampler2D spotLightMap[NUM_SPOT_LIGHT_MAPS];\n#endif\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform sampler2D directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nuniform sampler2D spotShadowMap[NUM_SPOT_LIGHT_SHADOWS];struct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform sampler2D pointShadowMap[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\nfloat texture2DCompare(sampler2D depths,vec2 uv,float compare){return step(compare,unpackRGBAToDepth(texture2D(depths,uv)));}vec2 texture2DDistribution(sampler2D shadow,vec2 uv){return unpackRGBATo2Half(texture2D(shadow,uv));}float VSMShadow(sampler2D shadow,vec2 uv,float compare){float occlusion=1.0;vec2 distribution=texture2DDistribution(shadow,uv);float hard_shadow=step(compare,distribution.x);if(hard_shadow!=1.0){float distance=compare-distribution.x;float variance=max(0.00000,distribution.y*distribution.y);float softness_probability=variance/(variance+distance*distance);softness_probability=clamp((softness_probability-0.3)/(0.95-0.3),0.0,1.0);occlusion=clamp(max(hard_shadow,softness_probability),0.0,1.0);}return occlusion;}float getShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord){float shadow=1.0;shadowCoord.xyz/=shadowCoord.w;shadowCoord.z+=shadowBias;bvec4 inFrustumVec=bvec4(shadowCoord.x>=0.0,shadowCoord.x<=1.0,shadowCoord.y>=0.0,shadowCoord.y<=1.0);bool inFrustum=all(inFrustumVec);bvec2 frustumTestVec=bvec2(inFrustum,shadowCoord.z<=1.0);bool frustumTest=all(frustumTestVec);if(frustumTest){\n#if defined(SHADOWMAP_TYPE_PCF)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx0=-texelSize.x*shadowRadius;float dy0=-texelSize.y*shadowRadius;float dx1=+texelSize.x*shadowRadius;float dy1=+texelSize.y*shadowRadius;float dx2=dx0/2.0;float dy2=dy0/2.0;float dx3=dx1/2.0;float dy3=dy1/2.0;shadow=(texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy1),shadowCoord.z))*(1.0/17.0);\n#elif defined(SHADOWMAP_TYPE_PCF_SOFT)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx=texelSize.x;float dy=texelSize.y;vec2 uv=shadowCoord.xy;vec2 f=fract(uv*shadowMapSize+0.5);uv-=f*texelSize;shadow=(texture2DCompare(shadowMap,uv,shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(dx,0.0),shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(0.0,dy),shadowCoord.z)+texture2DCompare(shadowMap,uv+texelSize,shadowCoord.z)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,0.0),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,0.0),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,dy),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(0.0,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(0.0,2.0*dy),shadowCoord.z),f.y)+mix(texture2DCompare(shadowMap,uv+vec2(dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(dx,2.0*dy),shadowCoord.z),f.y)+mix(mix(texture2DCompare(shadowMap,uv+vec2(-dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,-dy),shadowCoord.z),f.x),mix(texture2DCompare(shadowMap,uv+vec2(-dx,2.0*dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,2.0*dy),shadowCoord.z),f.x),f.y))*(1.0/9.0);\n#elif defined(SHADOWMAP_TYPE_VSM)\nshadow=VSMShadow(shadowMap,shadowCoord.xy,shadowCoord.z);\n#else\nshadow=texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z);\n#endif\n}return shadow;}vec2 cubeToUV(vec3 v,float texelSizeY){vec3 absV=abs(v);float scaleToCube=1.0/max(absV.x,max(absV.y,absV.z));absV*=scaleToCube;v*=scaleToCube*(1.0-2.0*texelSizeY);vec2 planar=v.xy;float almostATexel=1.5*texelSizeY;float almostOne=1.0-almostATexel;if(absV.z>=almostOne){if(v.z>0.0)planar.x=4.0-v.x;}else if(absV.x>=almostOne){float signX=sign(v.x);planar.x=v.z*signX+2.0*signX;}else if(absV.y>=almostOne){float signY=sign(v.y);planar.x=v.x+2.0*signY+2.0;planar.y=v.z*signY-2.0;}return vec2(0.125,0.25)*planar+vec2(0.375,0.75);}float getPointShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord,float shadowCameraNear,float shadowCameraFar){vec2 texelSize=vec2(1.0)/(shadowMapSize*vec2(4.0,2.0));vec3 lightToPosition=shadowCoord.xyz;float dp=(length(lightToPosition)-shadowCameraNear)/(shadowCameraFar-shadowCameraNear);dp+=shadowBias;vec3 bd3D=normalize(lightToPosition);\n#if defined(SHADOWMAP_TYPE_PCF)||defined(SHADOWMAP_TYPE_PCF_SOFT)||defined(SHADOWMAP_TYPE_VSM)\nvec2 offset=vec2(-1,1)*shadowRadius*texelSize.y;return(texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxx,texelSize.y),dp))*(1.0/9.0);\n#else\nreturn texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp);\n#endif\n}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS>0\nuniform mat4 spotLightMatrix[NUM_SPOT_LIGHT_COORDS];varying vec4 vSpotLightCoord[NUM_SPOT_LIGHT_COORDS];\n#endif\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nstruct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform mat4 pointShadowMatrix[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\n#endif", shadowmap_vertex: "#if defined(USE_SHADOWMAP)||(NUM_SPOT_LIGHT_COORDS>0)\n#if NUM_DIR_LIGHT_SHADOWS>0||NUM_SPOT_LIGHT_COORDS>0||NUM_POINT_LIGHT_SHADOWS>0\nvec3 shadowWorldNormal=inverseTransformDirection(transformedNormal,viewMatrix);vec4 shadowWorldPosition;\n#endif\n#if NUM_DIR_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*directionalLightShadows[i].shadowNormalBias,0);vDirectionalShadowCoord[i]=directionalShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHT_COORDS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_COORDS;i++){shadowWorldPosition=worldPosition;\n#if (defined(USE_SHADOWMAP)&&UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\nshadowWorldPosition.xyz+=shadowWorldNormal*spotLightShadows[i].shadowNormalBias;\n#endif\nvSpotLightCoord[i]=spotLightMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*pointLightShadows[i].shadowNormalBias,0);vPointShadowCoord[i]=pointShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#endif", shadowmask_pars_fragment: "float getShadowMask(){float shadow=1.0;\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){directionalLight=directionalLightShadows[i];shadow*=receiveShadow?getShadow(directionalShadowMap[i],directionalLight.shadowMapSize,directionalLight.shadowBias,directionalLight.shadowRadius,vDirectionalShadowCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_SHADOWS;i++){spotLight=spotLightShadows[i];shadow*=receiveShadow?getShadow(spotShadowMap[i],spotLight.shadowMapSize,spotLight.shadowBias,spotLight.shadowRadius,vSpotLightCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){pointLight=pointLightShadows[i];shadow*=receiveShadow?getPointShadow(pointShadowMap[i],pointLight.shadowMapSize,pointLight.shadowBias,pointLight.shadowRadius,vPointShadowCoord[i],pointLight.shadowCameraNear,pointLight.shadowCameraFar):1.0;}\n#pragma unroll_loop_end\n#endif\n#endif\nreturn shadow;}", skinbase_vertex: "#ifdef USE_SKINNING\nmat4 boneMatX=getBoneMatrix(skinIndex.x);mat4 boneMatY=getBoneMatrix(skinIndex.y);mat4 boneMatZ=getBoneMatrix(skinIndex.z);mat4 boneMatW=getBoneMatrix(skinIndex.w);\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 bindMatrix;uniform mat4 bindMatrixInverse;uniform highp sampler2D boneTexture;uniform int boneTextureSize;mat4 getBoneMatrix(const in float i){float j=i*4.0;float x=mod(j,float(boneTextureSize));float y=floor(j/float(boneTextureSize));float dx=1.0/float(boneTextureSize);float dy=1.0/float(boneTextureSize);y=dy*(y+0.5);vec4 v1=texture2D(boneTexture,vec2(dx*(x+0.5),y));vec4 v2=texture2D(boneTexture,vec2(dx*(x+1.5),y));vec4 v3=texture2D(boneTexture,vec2(dx*(x+2.5),y));vec4 v4=texture2D(boneTexture,vec2(dx*(x+3.5),y));mat4 bone=mat4(v1,v2,v3,v4);return bone;}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\nvec4 skinVertex=bindMatrix*vec4(transformed,1.0);vec4 skinned=vec4(0.0);skinned+=boneMatX*skinVertex*skinWeight.x;skinned+=boneMatY*skinVertex*skinWeight.y;skinned+=boneMatZ*skinVertex*skinWeight.z;skinned+=boneMatW*skinVertex*skinWeight.w;transformed=(bindMatrixInverse*skinned).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\nmat4 skinMatrix=mat4(0.0);skinMatrix+=skinWeight.x*boneMatX;skinMatrix+=skinWeight.y*boneMatY;skinMatrix+=skinWeight.z*boneMatZ;skinMatrix+=skinWeight.w*boneMatW;skinMatrix=bindMatrixInverse*skinMatrix*bindMatrix;objectNormal=vec4(skinMatrix*vec4(objectNormal,0.0)).xyz;\n#ifdef USE_TANGENT\nobjectTangent=vec4(skinMatrix*vec4(objectTangent,0.0)).xyz;\n#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular=texture2D(specularMap,vUv);specularStrength=texelSpecular.r;\n#else\nspecularStrength=1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined(TONE_MAPPING)\ngl_FragColor.rgb=toneMapping(gl_FragColor.rgb);\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\nuniform float toneMappingExposure;vec3 LinearToneMapping(vec3 color){return toneMappingExposure*color;}vec3 ReinhardToneMapping(vec3 color){color*=toneMappingExposure;return saturate(color/(vec3(1.0)+color));}vec3 OptimizedCineonToneMapping(vec3 color){color*=toneMappingExposure;color=max(vec3(0.0),color-0.004);return pow((color*(6.2*color+0.5))/(color*(6.2*color+1.7)+0.06),vec3(2.2));}vec3 RRTAndODTFit(vec3 v){vec3 a=v*(v+0.0245786)-0.000090537;vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}vec3 ACESFilmicToneMapping(vec3 color){const mat3 ACESInputMat=mat3(vec3(0.59719,0.07600,0.02840),vec3(0.35458,0.90834,0.13383),vec3(0.04823,0.01566,0.83777));const mat3 ACESOutputMat=mat3(vec3(1.60475,-0.10208,-0.00327),vec3(-0.53108,1.10813,-0.07276),vec3(-0.07367,-0.00605,1.07602));color*=toneMappingExposure/0.6;color=ACESInputMat*color;color=RRTAndODTFit(color);color=ACESOutputMat*color;return saturate(color);}vec3 CustomToneMapping(vec3 color){return color;}", transmission_fragment: "#ifdef USE_TRANSMISSION\nmaterial.transmission=transmission;material.transmissionAlpha=1.0;material.thickness=thickness;material.attenuationDistance=attenuationDistance;material.attenuationColor=attenuationColor;\n#ifdef USE_TRANSMISSIONMAP\nmaterial.transmission*=texture2D(transmissionMap,vUv).r;\n#endif\n#ifdef USE_THICKNESSMAP\nmaterial.thickness*=texture2D(thicknessMap,vUv).g;\n#endif\nvec3 pos=vWorldPosition;vec3 v=normalize(cameraPosition-pos);vec3 n=inverseTransformDirection(normal,viewMatrix);vec4 transmission=getIBLVolumeRefraction(n,v,material.roughness,material.diffuseColor,material.specularColor,material.specularF90,pos,modelMatrix,viewMatrix,projectionMatrix,material.ior,material.thickness,material.attenuationColor,material.attenuationDistance);material.transmissionAlpha=mix(material.transmissionAlpha,transmission.a,material.transmission);totalDiffuse=mix(totalDiffuse,transmission.rgb,material.transmission);\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\nuniform float transmission;uniform float thickness;uniform float attenuationDistance;uniform vec3 attenuationColor;\n#ifdef USE_TRANSMISSIONMAP\nuniform sampler2D transmissionMap;\n#endif\n#ifdef USE_THICKNESSMAP\nuniform sampler2D thicknessMap;\n#endif\nuniform vec2 transmissionSamplerSize;uniform sampler2D transmissionSamplerMap;uniform mat4 modelMatrix;uniform mat4 projectionMatrix;varying vec3 vWorldPosition;vec3 getVolumeTransmissionRay(const in vec3 n,const in vec3 v,const in float thickness,const in float ior,const in mat4 modelMatrix){vec3 refractionVector=refract(-v,normalize(n),1.0/ior);vec3 modelScale;modelScale.x=length(vec3(modelMatrix[0].xyz));modelScale.y=length(vec3(modelMatrix[1].xyz));modelScale.z=length(vec3(modelMatrix[2].xyz));return normalize(refractionVector)*thickness*modelScale;}float applyIorToRoughness(const in float roughness,const in float ior){return roughness*clamp(ior*2.0-2.0,0.0,1.0);}vec4 getTransmissionSample(const in vec2 fragCoord,const in float roughness,const in float ior){float framebufferLod=log2(transmissionSamplerSize.x)*applyIorToRoughness(roughness,ior);\n#ifdef texture2DLodEXT\nreturn texture2DLodEXT(transmissionSamplerMap,fragCoord.xy,framebufferLod);\n#else\nreturn texture2D(transmissionSamplerMap,fragCoord.xy,framebufferLod);\n#endif\n}vec3 applyVolumeAttenuation(const in vec3 radiance,const in float transmissionDistance,const in vec3 attenuationColor,const in float attenuationDistance){if(attenuationDistance==0.0){return radiance;}else{vec3 attenuationCoefficient=-log(attenuationColor)/attenuationDistance;vec3 transmittance=exp(-attenuationCoefficient*transmissionDistance);return transmittance*radiance;}}vec4 getIBLVolumeRefraction(const in vec3 n,const in vec3 v,const in float roughness,const in vec3 diffuseColor,const in vec3 specularColor,const in float specularF90,const in vec3 position,const in mat4 modelMatrix,const in mat4 viewMatrix,const in mat4 projMatrix,const in float ior,const in float thickness,const in vec3 attenuationColor,const in float attenuationDistance){vec3 transmissionRay=getVolumeTransmissionRay(n,v,thickness,ior,modelMatrix);vec3 refractedRayExit=position+transmissionRay;vec4 ndcPos=projMatrix*viewMatrix*vec4(refractedRayExit,1.0);vec2 refractionCoords=ndcPos.xy/ndcPos.w;refractionCoords+=1.0;refractionCoords/=2.0;vec4 transmittedLight=getTransmissionSample(refractionCoords,roughness,ior);vec3 attenuatedColor=applyVolumeAttenuation(transmittedLight.rgb,length(transmissionRay),attenuationColor,attenuationDistance);vec3 F=EnvironmentBRDF(n,v,specularColor,specularF90,roughness);return vec4((1.0-F)*attenuatedColor*diffuseColor,transmittedLight.a);}\n#endif", uv_pars_fragment: "#if (defined(USE_UV)&&!defined(UVS_VERTEX_ONLY))\nvarying vec2 vUv;\n#endif", uv_pars_vertex: "#ifdef USE_UV\n#ifdef UVS_VERTEX_ONLY\nvec2 vUv;\n#else\nvarying vec2 vUv;\n#endif\nuniform mat3 uvTransform;\n#endif", uv_vertex: "#ifdef USE_UV\nvUv=(uvTransform*vec3(uv,1)).xy;\n#endif", uv2_pars_fragment: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvarying vec2 vUv2;\n#endif", uv2_pars_vertex: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nattribute vec2 uv2;varying vec2 vUv2;uniform mat3 uv2Transform;\n#endif", uv2_vertex: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvUv2=(uv2Transform*vec3(uv2,1)).xy;\n#endif", worldpos_vertex: "#if defined(USE_ENVMAP)||defined(DISTANCE)||defined(USE_SHADOWMAP)||defined(USE_TRANSMISSION)||NUM_SPOT_LIGHT_COORDS>0\nvec4 worldPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nworldPosition=instanceMatrix*worldPosition;\n#endif\nworldPosition=modelMatrix*worldPosition;\n#endif", background_vert: "varying vec2 vUv;uniform mat3 uvTransform;void main(){vUv=(uvTransform*vec3(uv,1)).xy;gl_Position=vec4(position.xy,1.0,1.0);}", background_frag: "uniform sampler2D t2D;varying vec2 vUv;void main(){gl_FragColor=texture2D(t2D,vUv);\n#ifdef DECODE_VIDEO_TEXTURE\ngl_FragColor=vec4(mix(pow(gl_FragColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),gl_FragColor.rgb*0.0773993808,vec3(lessThanEqual(gl_FragColor.rgb,vec3(0.04045)))),gl_FragColor.w);\n#endif\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\ngl_Position.z=gl_Position.w;}", cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;varying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main(){vec3 vReflect=vWorldDirection;\n#include <envmap_fragment>\ngl_FragColor=envColor;gl_FragColor.a*=opacity;\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvHighPrecisionZW=gl_Position.zw;}", depth_frag: "#if DEPTH_PACKING==3200\nuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#if DEPTH_PACKING==3200\ndiffuseColor.a=opacity;\n#endif\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <logdepthbuf_fragment>\nfloat fragCoordZ=0.5*vHighPrecisionZW[0]/vHighPrecisionZW[1]+0.5;\n#if DEPTH_PACKING==3200\ngl_FragColor=vec4(vec3(1.0-fragCoordZ),opacity);\n#elif DEPTH_PACKING==3201\ngl_FragColor=packDepthToRGBA(fragCoordZ);\n#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\nvWorldPosition=worldPosition.xyz;}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;uniform float nearDistance;uniform float farDistance;varying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\nfloat dist=length(vWorldPosition-referencePosition);dist=(dist-nearDistance)/(farDistance-nearDistance);dist=saturate(dist);gl_FragColor=packDepthToRGBA(dist);}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}", linedashed_vert: "uniform float scale;attribute float lineDistance;varying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){vLineDistance=scale*lineDistance;\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;uniform float opacity;uniform float dashSize;uniform float totalSize;varying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nif(mod(vLineDistance,totalSize)>dashSize){discard;}vec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <color_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#if defined(USE_ENVMAP)||defined(USE_SKINNING)\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;uniform float opacity;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\nReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);reflectedLight.indirectDiffuse+=lightMapTexel.rgb*lightMapIntensity*RECIPROCAL_PI;\n#else\nreflectedLight.indirectDiffuse+=vec3(1.0);\n#endif\n#include <aomap_fragment>\nreflectedLight.indirectDiffuse*=diffuseColor.rgb;vec3 outgoingLight=reflectedLight.indirectDiffuse;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_lambert_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\nvViewPosition=-mvPosition.xyz;}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;uniform float opacity;uniform sampler2D matcap;varying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\nvec3 viewDir=normalize(vViewPosition);vec3 x=normalize(vec3(viewDir.z,0.0,-viewDir.x));vec3 y=cross(viewDir,x);vec2 uv=vec2(dot(x,normal),dot(y,normal))*0.495+0.5;\n#ifdef USE_MATCAP\nvec4 matcapColor=texture2D(matcap,uv);\n#else\nvec4 matcapColor=vec4(vec3(mix(0.2,0.8,uv.y)),1.0);\n#endif\nvec3 outgoingLight=diffuseColor.rgb*matcapColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvViewPosition=-mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\n#include <logdepthbuf_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\ngl_FragColor=vec4(packNormalToRGB(normal),opacity);\n#ifdef OPAQUE\ngl_FragColor.a=1.0;\n#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;uniform vec3 emissive;uniform vec3 specular;uniform float shininess;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_phong_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+totalEmissiveRadiance;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\nvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n#ifdef USE_TRANSMISSION\nvWorldPosition=worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n#define IOR\n#define SPECULAR\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef IOR\nuniform float ior;\n#endif\n#ifdef SPECULAR\nuniform float specularIntensity;uniform vec3 specularColor;\n#ifdef USE_SPECULARINTENSITYMAP\nuniform sampler2D specularIntensityMap;\n#endif\n#ifdef USE_SPECULARCOLORMAP\nuniform sampler2D specularColorMap;\n#endif\n#endif\n#ifdef USE_CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\nuniform float iridescence;uniform float iridescenceIOR;uniform float iridescenceThicknessMinimum;uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheenColor;uniform float sheenRoughness;\n#ifdef USE_SHEENCOLORMAP\nuniform sampler2D sheenColorMap;\n#endif\n#ifdef USE_SHEENROUGHNESSMAP\nuniform sampler2D sheenRoughnessMap;\n#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 totalDiffuse=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse;vec3 totalSpecular=reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#include <transmission_fragment>\nvec3 outgoingLight=totalDiffuse+totalSpecular+totalEmissiveRadiance;\n#ifdef USE_SHEEN\nfloat sheenEnergyComp=1.0-0.157*max3(material.sheenColor);outgoingLight=outgoingLight*sheenEnergyComp+sheenSpecular;\n#endif\n#ifdef USE_CLEARCOAT\nfloat dotNVcc=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));vec3 Fcc=F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);outgoingLight=outgoingLight*(1.0-material.clearcoat*Fcc)+clearcoatSpecular*material.clearcoat;\n#endif\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_toon_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}", points_vert: "uniform float size;uniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\ngl_PointSize=size;\n#ifdef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)gl_PointSize*=(scale/-mvPosition.z);\n#endif\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_particle_fragment>\n#include <color_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main(){\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;uniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main(){gl_FragColor=vec4(color,opacity*(1.0-getShadowMask()));\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;uniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\nvec4 mvPosition=modelViewMatrix*vec4(0.0,0.0,0.0,1.0);vec2 scale;scale.x=length(vec3(modelMatrix[0].x,modelMatrix[0].y,modelMatrix[0].z));scale.y=length(vec3(modelMatrix[1].x,modelMatrix[1].y,modelMatrix[1].z));\n#ifndef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)scale*=-mvPosition.z;\n#endif\nvec2 alignedPosition=(position.xy-(center-vec2(0.5)))*scale;vec2 rotatedPosition;rotatedPosition.x=cos(rotation)*alignedPosition.x-sin(rotation)*alignedPosition.y;rotatedPosition.y=sin(rotation)*alignedPosition.x+cos(rotation)*alignedPosition.y;mvPosition.xy+=rotatedPosition;gl_Position=projectionMatrix*mvPosition;\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}"
        }
        ;
        var C=i(7526);
        const L= {
            common: {
                diffuse: {
                    value: new T.I(16777215)
                }
                ,
                opacity: {
                    value: 1
                }
                ,
                map: {
                    value: null
                }
                ,
                uvTransform: {
                    value: new o.V
                }
                ,
                uv2Transform: {
                    value: new o.V
                }
                ,
                alphaMap: {
                    value: null
                }
                ,
                alphaTest: {
                    value: 0
                }
            }
            ,
            specularmap: {
                specularMap: {
                    value: null
                }
            }
            ,
            envmap: {
                envMap: {
                    value: null
                }
                ,
                flipEnvMap: {
                    value: -1
                }
                ,
                reflectivity: {
                    value: 1
                }
                ,
                ior: {
                    value: 1.5
                }
                ,
                refractionRatio: {
                    value: .98
                }
            }
            ,
            aomap: {
                aoMap: {
                    value: null
                }
                ,
                aoMapIntensity: {
                    value: 1
                }
            }
            ,
            lightmap: {
                lightMap: {
                    value: null
                }
                ,
                lightMapIntensity: {
                    value: 1
                }
            }
            ,
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            }
            ,
            bumpmap: {
                bumpMap: {
                    value: null
                }
                ,
                bumpScale: {
                    value: 1
                }
            }
            ,
            normalmap: {
                normalMap: {
                    value: null
                }
                ,
                normalScale: {
                    value: new g.F(1, 1)
                }
            }
            ,
            displacementmap: {
                displacementMap: {
                    value: null
                }
                ,
                displacementScale: {
                    value: 1
                }
                ,
                displacementBias: {
                    value: 0
                }
            }
            ,
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            }
            ,
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            }
            ,
            gradientmap: {
                gradientMap: {
                    value: null
                }
            }
            ,
            fog: {
                fogDensity: {
                    value: 25e-5
                }
                ,
                fogNear: {
                    value: 1
                }
                ,
                fogFar: {
                    value: 2e3
                }
                ,
                fogColor: {
                    value: new T.I(16777215)
                }
            }
            ,
            lights: {
                ambientLightColor: {
                    value: []
                }
                ,
                lightProbe: {
                    value: []
                }
                ,
                directionalLights: {
                    value:[], properties: {
                        direction: {}, color: {}
                    }
                }
                ,
                directionalLightShadows: {
                    value:[], properties: {
                        shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}
                    }
                }
                ,
                directionalShadowMap: {
                    value: []
                }
                ,
                directionalShadowMatrix: {
                    value: []
                }
                ,
                spotLights: {
                    value:[], properties: {
                        color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}
                    }
                }
                ,
                spotLightShadows: {
                    value:[], properties: {
                        shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}
                    }
                }
                ,
                spotLightMap: {
                    value: []
                }
                ,
                spotShadowMap: {
                    value: []
                }
                ,
                spotLightMatrix: {
                    value: []
                }
                ,
                pointLights: {
                    value:[], properties: {
                        color: {}, position: {}, decay: {}, distance: {}
                    }
                }
                ,
                pointLightShadows: {
                    value:[], properties: {
                        shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {}
                    }
                }
                ,
                pointShadowMap: {
                    value: []
                }
                ,
                pointShadowMatrix: {
                    value: []
                }
                ,
                hemisphereLights: {
                    value:[], properties: {
                        direction: {}, skyColor: {}, groundColor: {}
                    }
                }
                ,
                rectAreaLights: {
                    value:[], properties: {
                        color: {}, position: {}, width: {}, height: {}
                    }
                }
                ,
                ltc_1: {
                    value: null
                }
                ,
                ltc_2: {
                    value: null
                }
            }
            ,
            points: {
                diffuse: {
                    value: new T.I(16777215)
                }
                ,
                opacity: {
                    value: 1
                }
                ,
                size: {
                    value: 1
                }
                ,
                scale: {
                    value: 1
                }
                ,
                map: {
                    value: null
                }
                ,
                alphaMap: {
                    value: null
                }
                ,
                alphaTest: {
                    value: 0
                }
                ,
                uvTransform: {
                    value: new o.V
                }
            }
            ,
            sprite: {
                diffuse: {
                    value: new T.I(16777215)
                }
                ,
                opacity: {
                    value: 1
                }
                ,
                center: {
                    value: new g.F(.5, .5)
                }
                ,
                rotation: {
                    value: 0
                }
                ,
                map: {
                    value: null
                }
                ,
                alphaMap: {
                    value: null
                }
                ,
                alphaTest: {
                    value: 0
                }
                ,
                uvTransform: {
                    value: new o.V
                }
            }
        }
        ,
        P= {
            basic: {
                uniforms: (0, C.Rh)([L.common, L.specularmap, L.envmap, L.aomap, L.lightmap, L.fog]), vertexShader: A.meshbasic_vert, fragmentShader: A.meshbasic_frag
            }
            ,
            lambert: {
                uniforms: (0, C.Rh)([L.common, L.specularmap, L.envmap, L.aomap, L.lightmap, L.emissivemap, L.bumpmap, L.normalmap, L.displacementmap, L.fog, L.lights, {
                    emissive: {
                        value: new T.I(0)
                    }
                }
                ]),
                vertexShader:A.meshlambert_vert,
                fragmentShader:A.meshlambert_frag
            }
            ,
            phong: {
                uniforms: (0, C.Rh)([L.common, L.specularmap, L.envmap, L.aomap, L.lightmap, L.emissivemap, L.bumpmap, L.normalmap, L.displacementmap, L.fog, L.lights, {
                    emissive: {
                        value: new T.I(0)
                    }
                    ,
                    specular: {
                        value: new T.I(1118481)
                    }
                    ,
                    shininess: {
                        value: 30
                    }
                }
                ]),
                vertexShader:A.meshphong_vert,
                fragmentShader:A.meshphong_frag
            }
            ,
            standard: {
                uniforms: (0, C.Rh)([L.common, L.envmap, L.aomap, L.lightmap, L.emissivemap, L.bumpmap, L.normalmap, L.displacementmap, L.roughnessmap, L.metalnessmap, L.fog, L.lights, {
                    emissive: {
                        value: new T.I(0)
                    }
                    ,
                    roughness: {
                        value: 1
                    }
                    ,
                    metalness: {
                        value: 0
                    }
                    ,
                    envMapIntensity: {
                        value: 1
                    }
                }
                ]),
                vertexShader:A.meshphysical_vert,
                fragmentShader:A.meshphysical_frag
            }
            ,
            toon: {
                uniforms: (0, C.Rh)([L.common, L.aomap, L.lightmap, L.emissivemap, L.bumpmap, L.normalmap, L.displacementmap, L.gradientmap, L.fog, L.lights, {
                    emissive: {
                        value: new T.I(0)
                    }
                }
                ]),
                vertexShader:A.meshtoon_vert,
                fragmentShader:A.meshtoon_frag
            }
            ,
            matcap: {
                uniforms: (0, C.Rh)([L.common, L.bumpmap, L.normalmap, L.displacementmap, L.fog, {
                    matcap: {
                        value: null
                    }
                }
                ]),
                vertexShader:A.meshmatcap_vert,
                fragmentShader:A.meshmatcap_frag
            }
            ,
            points: {
                uniforms: (0, C.Rh)([L.points, L.fog]), vertexShader: A.points_vert, fragmentShader: A.points_frag
            }
            ,
            dashed: {
                uniforms: (0, C.Rh)([L.common, L.fog, {
                    scale: {
                        value: 1
                    }
                    ,
                    dashSize: {
                        value: 1
                    }
                    ,
                    totalSize: {
                        value: 2
                    }
                }
                ]),
                vertexShader:A.linedashed_vert,
                fragmentShader:A.linedashed_frag
            }
            ,
            depth: {
                uniforms: (0, C.Rh)([L.common, L.displacementmap]), vertexShader: A.depth_vert, fragmentShader: A.depth_frag
            }
            ,
            normal: {
                uniforms: (0, C.Rh)([L.common, L.bumpmap, L.normalmap, L.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }
                ]),
                vertexShader:A.meshnormal_vert,
                fragmentShader:A.meshnormal_frag
            }
            ,
            sprite: {
                uniforms: (0, C.Rh)([L.sprite, L.fog]), vertexShader: A.sprite_vert, fragmentShader: A.sprite_frag
            }
            ,
            background: {
                uniforms: {
                    uvTransform: {
                        value: new o.V
                    }
                    ,
                    t2D: {
                        value: null
                    }
                }
                ,
                vertexShader:A.background_vert,
                fragmentShader:A.background_frag
            }
            ,
            cube: {
                uniforms: (0, C.Rh)([L.envmap, {
                    opacity: {
                        value: 1
                    }
                }
                ]),
                vertexShader:A.cube_vert,
                fragmentShader:A.cube_frag
            }
            ,
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                }
                ,
                vertexShader:A.equirect_vert,
                fragmentShader:A.equirect_frag
            }
            ,
            distanceRGBA: {
                uniforms: (0, C.Rh)([L.common, L.displacementmap, {
                    referencePosition: {
                        value: new a.P
                    }
                    ,
                    nearDistance: {
                        value: 1
                    }
                    ,
                    farDistance: {
                        value: 1e3
                    }
                }
                ]),
                vertexShader:A.distanceRGBA_vert,
                fragmentShader:A.distanceRGBA_frag
            }
            ,
            shadow: {
                uniforms: (0, C.Rh)([L.lights, L.fog, {
                    color: {
                        value: new T.I(0)
                    }
                    ,
                    opacity: {
                        value: 1
                    }
                }
                ]),
                vertexShader:A.shadow_vert,
                fragmentShader:A.shadow_frag
            }
        }
        ;
        function D(e,
        t,
        i,
        r,
        a,
        s) {
            const o=new T.I(0);
            let l, c, h=!0===a?0: 1, u=null, d=0, p=null;
            function f(e, t) {
                i.buffers.color.setClear(e.r, e.g, e.b, t, s)
            }
            return {
                getClearColor: function() {
                    return o
                }
                ,
                setClearColor:function(e) {
                    let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 1;
                    o.set(e), h=t, f(o, h)
                }
                ,
                getClearAlpha:function() {
                    return h
                }
                ,
                setClearAlpha:function(e) {
                    h=e, f(o, h)
                }
                ,
                render:function(i,
                a) {
                    let s=!1, m=!0===a.isScene?a.background: null;
                    m&&m.isTexture&&(m=t.get(m));
                    const g=e.xr, _=g.getSession&&g.getSession();
                    _&&"additive"===_.environmentBlendMode&&(m=null), null===m?f(o, h): m&&m.isColor&&(f(m, 1), s=!0), (e.autoClear||s)&&e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), m&&(m.isCubeTexture||m.mapping===n.g8)?(void 0===c&&(c=new E.K(new S(1, 1, 1), new w.j( {
                        name: "BackgroundCubeMaterial", uniforms: (0, C.dw)(P.cube.uniforms), vertexShader: P.cube.vertexShader, fragmentShader: P.cube.fragmentShader, side: n._L, depthTest: !1, depthWrite: !1, fog: !1
                    }
                    )),
                    c.geometry.deleteAttribute("normal"),
                    c.geometry.deleteAttribute("uv"),
                    c.onBeforeRender=function(e,
                    t,
                    i) {
                        this.matrixWorld.copyPosition(i.matrixWorld)
                    }
                    ,
                    Object.defineProperty(c.material,
                    "envMap",
                    {
                        get: function() {
                            return this.uniforms.envMap.value
                        }
                    }
                    ),
                    r.update(c)),
                    c.material.uniforms.envMap.value=m,
                    c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&!1===m.isRenderTargetTexture?-1:1,
                    u===m&&d===m.version&&p===e.toneMapping||(c.material.needsUpdate=!0,
                    u=m,
                    d=m.version,
                    p=e.toneMapping),
                    c.layers.enableAll(),
                    i.unshift(c,
                    c.geometry,
                    c.material,
                    0,
                    0,
                    null)):m&&m.isTexture&&(void 0===l&&(l=new E.K(new b._(2,
                    2),
                    new w.j( {
                        name: "BackgroundMaterial", uniforms: (0, C.dw)(P.background.uniforms), vertexShader: P.background.vertexShader, fragmentShader: P.background.fragmentShader, side: n.Wl, depthTest: !1, depthWrite: !1, fog: !1
                    }
                    )),
                    l.geometry.deleteAttribute("normal"),
                    Object.defineProperty(l.material,
                    "map",
                    {
                        get: function() {
                            return this.uniforms.t2D.value
                        }
                    }
                    ),
                    r.update(l)),
                    l.material.uniforms.t2D.value=m,
                    !0===m.matrixAutoUpdate&&m.updateMatrix(),
                    l.material.uniforms.uvTransform.value.copy(m.matrix),
                    u===m&&d===m.version&&p===e.toneMapping||(l.material.needsUpdate=!0,
                    u=m,
                    d=m.version,
                    p=e.toneMapping),
                    l.layers.enableAll(),
                    i.unshift(l,
                    l.geometry,
                    l.material,
                    0,
                    0,
                    null))
                }
            }
        }
        function R(e,
        t,
        i,
        n) {
            const r=e.getParameter(34921), a=n.isWebGL2?null: t.get("OES_vertex_array_object"), s=n.isWebGL2||null!==a, o= {}, l=p(null);
            let c=l, h=!1;
            function u(t) {
                return n.isWebGL2?e.bindVertexArray(t): a.bindVertexArrayOES(t)
            }
            function d(t) {
                return n.isWebGL2?e.deleteVertexArray(t): a.deleteVertexArrayOES(t)
            }
            function p(e) {
                const t=[], i=[], n=[];
                for(let e=0;
                e<r;
                e++)t[e]=0, i[e]=0, n[e]=0;
                return {
                    geometry:null, program:null, wireframe:!1, newAttributes:t, enabledAttributes:i, attributeDivisors:n, object:e, attributes: {}, index: null
                }
            }
            function f() {
                const e=c.newAttributes;
                for(let t=0, i=e.length;
                t<i;
                t++)e[t]=0
            }
            function m(e) {
                g(e, 0)
            }
            function g(i,
            r) {
                const a=c.newAttributes, s=c.enabledAttributes, o=c.attributeDivisors;
                if(a[i]=1, 0===s[i]&&(e.enableVertexAttribArray(i), s[i]=1), o[i]!==r) {
                    (n.isWebGL2?e: t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor": "vertexAttribDivisorANGLE"](i, r), o[i]=r
                }
            }
            function _() {
                const t=c.newAttributes, i=c.enabledAttributes;
                for(let n=0, r=i.length;
                n<r;
                n++)i[n]!==t[n]&&(e.disableVertexAttribArray(n), i[n]=0)
            }
            function v(t,
            i,
            r,
            a,
            s,
            o) {
                !0!==n.isWebGL2||5124!==r&&5125!==r?e.vertexAttribPointer(t, i, r, a, s, o): e.vertexAttribIPointer(t, i, r, s, o)
            }
            function x() {
                M(), h=!0, c!==l&&(c=l, u(c.object))
            }
            function M() {
                l.geometry=null, l.program=null, l.wireframe=!1
            }
            return {
                setup: function(r, l, d, x, M) {
                    let y=!1;
                    if(s) {
                        const t=function(t, i, r) {
                            const s=!0===r.wireframe;
                            let l=o[t.id];
                            void 0===l&&(l= {}, o[t.id]=l);
                            let c=l[i.id];
                            void 0===c&&(c= {}, l[i.id]=c);
                            let h=c[s];
                            void 0===h&&(h=p(n.isWebGL2?e.createVertexArray(): a.createVertexArrayOES()), c[s]=h);
                            return h
                        }
                        (x,
                        d,
                        l);
                        c!==t&&(c=t,
                        u(c.object)),
                        y=function(e,
                        t,
                        i,
                        n) {
                            const r=c.attributes, a=t.attributes;
                            let s=0;
                            const o=i.getAttributes();
                            for(const t in o) {
                                if(o[t].location>=0) {
                                    const i=r[t];
                                    let n=a[t];
                                    if(void 0===n&&("instanceMatrix"===t&&e.instanceMatrix&&(n=e.instanceMatrix), "instanceColor"===t&&e.instanceColor&&(n=e.instanceColor)), void 0===i)return!0;
                                    if(i.attribute!==n)return!0;
                                    if(n&&i.data!==n.data)return!0;
                                    s++
                                }
                            }
                            return c.attributesNum!==s||c.index!==n
                        }
                        (r,
                        x,
                        d,
                        M),
                        y&&function(e,
                        t,
                        i,
                        n) {
                            const r= {}, a=t.attributes;
                            let s=0;
                            const o=i.getAttributes();
                            for(const t in o) {
                                if(o[t].location>=0) {
                                    let i=a[t];
                                    void 0===i&&("instanceMatrix"===t&&e.instanceMatrix&&(i=e.instanceMatrix), "instanceColor"===t&&e.instanceColor&&(i=e.instanceColor));
                                    const n= {};
                                    n.attribute=i, i&&i.data&&(n.data=i.data), r[t]=n, s++
                                }
                            }
                            c.attributes=r,
                            c.attributesNum=s,
                            c.index=n
                        }
                        (r,
                        x,
                        d,
                        M)
                    }
                    else {
                        const e=!0===l.wireframe;
                        c.geometry===x.id&&c.program===d.id&&c.wireframe===e||(c.geometry=x.id, c.program=d.id, c.wireframe=e, y=!0)
                    }
                    null!==M&&i.update(M,
                    34963),
                    (y||h)&&(h=!1,
                    function(r,
                    a,
                    s,
                    o) {
                        if(!1===n.isWebGL2&&(r.isInstancedMesh||o.isInstancedBufferGeometry)&&null===t.get("ANGLE_instanced_arrays"))return;
                        f();
                        const l=o.attributes, c=s.getAttributes(), h=a.defaultAttributeValues;
                        for(const t in c) {
                            const n=c[t];
                            if(n.location>=0) {
                                let a=l[t];
                                if(void 0===a&&("instanceMatrix"===t&&r.instanceMatrix&&(a=r.instanceMatrix), "instanceColor"===t&&r.instanceColor&&(a=r.instanceColor)), void 0!==a) {
                                    const t=a.normalized, s=a.itemSize, l=i.get(a);
                                    if(void 0===l)continue;
                                    const c=l.buffer, h=l.type, u=l.bytesPerElement;
                                    if(a.isInterleavedBufferAttribute) {
                                        const i=a.data, l=i.stride, d=a.offset;
                                        if(i.isInstancedInterleavedBuffer) {
                                            for(let e=0;
                                            e<n.locationSize;
                                            e++)g(n.location+e, i.meshPerAttribute);
                                            !0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=i.meshPerAttribute*i.count)
                                        }
                                        else for(let e=0;
                                        e<n.locationSize;
                                        e++)m(n.location+e);
                                        e.bindBuffer(34962,
                                        c);
                                        for(let e=0;
                                        e<n.locationSize;
                                        e++)v(n.location+e,
                                        s/n.locationSize,
                                        h,
                                        t,
                                        l*u,
                                        (d+s/n.locationSize*e)*u)
                                    }
                                    else {
                                        if(a.isInstancedBufferAttribute) {
                                            for(let e=0;
                                            e<n.locationSize;
                                            e++)g(n.location+e, a.meshPerAttribute);
                                            !0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=a.meshPerAttribute*a.count)
                                        }
                                        else for(let e=0;
                                        e<n.locationSize;
                                        e++)m(n.location+e);
                                        e.bindBuffer(34962,
                                        c);
                                        for(let e=0;
                                        e<n.locationSize;
                                        e++)v(n.location+e,
                                        s/n.locationSize,
                                        h,
                                        t,
                                        s*u,
                                        s/n.locationSize*e*u)
                                    }
                                }
                                else if(void 0!==h) {
                                    const i=h[t];
                                    if(void 0!==i)switch(i.length) {
                                        case 2: e.vertexAttrib2fv(n.location, i);
                                        break;
                                        case 3: e.vertexAttrib3fv(n.location, i);
                                        break;
                                        case 4: e.vertexAttrib4fv(n.location, i);
                                        break;
                                        default: e.vertexAttrib1fv(n.location, i)
                                    }
                                }
                            }
                        }
                        _()
                    }
                    (r,
                    l,
                    d,
                    x),
                    null!==M&&e.bindBuffer(34963,
                    i.get(M).buffer))
                }
                ,
                reset:x,
                resetDefaultState:M,
                dispose:function() {
                    x();
                    for(const e in o) {
                        const t=o[e];
                        for(const e in t) {
                            const i=t[e];
                            for(const e in i)d(i[e].object), delete i[e];
                            delete t[e]
                        }
                        delete o[e]
                    }
                }
                ,
                releaseStatesOfGeometry:function(e) {
                    if(void 0===o[e.id])return;
                    const t=o[e.id];
                    for(const e in t) {
                        const i=t[e];
                        for(const e in i)d(i[e].object), delete i[e];
                        delete t[e]
                    }
                    delete o[e.id]
                }
                ,
                releaseStatesOfProgram:function(e) {
                    for(const t in o) {
                        const i=o[t];
                        if(void 0===i[e.id])continue;
                        const n=i[e.id];
                        for(const e in n)d(n[e].object), delete n[e];
                        delete i[e.id]
                    }
                }
                ,
                initAttributes:f,
                enableAttribute:m,
                disableUnusedAttributes:_
            }
        }
        function I(e,
        t,
        i,
        n) {
            const r=n.isWebGL2;
            let a;
            this.setMode=function(e) {
                a=e
            }
            ,
            this.render=function(t,
            n) {
                e.drawArrays(a, t, n), i.update(n, a, 1)
            }
            ,
            this.renderInstances=function(n,
            s,
            o) {
                if(0===o)return;
                let l, c;
                if(r)l=e, c="drawArraysInstanced";
                else if(l=t.get("ANGLE_instanced_arrays"), c="drawArraysInstancedANGLE", null===l)return;
                l[c](a, n, s, o), i.update(s, a, o)
            }
        }
        function N(e,
        t,
        i) {
            let n;
            function r(t) {
                if("highp"===t) {
                    if(e.getShaderPrecisionFormat(35633, 36338).precision>0&&e.getShaderPrecisionFormat(35632, 36338).precision>0)return"highp";
                    t="mediump"
                }
                return"mediump"===t&&e.getShaderPrecisionFormat(35633,
                36337).precision>0&&e.getShaderPrecisionFormat(35632,
                36337).precision>0?"mediump":"lowp"
            }
            const a="undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext||"undefined"!=typeof WebGL2ComputeRenderingContext&&e instanceof WebGL2ComputeRenderingContext;
            let s=void 0!==i.precision?i.precision:"highp";
            const o=r(s);
            o!==s&&(s=o);
            const l=a||t.has("WEBGL_draw_buffers"),
            c=!0===i.logarithmicDepthBuffer,
            h=e.getParameter(34930),
            u=e.getParameter(35660),
            d=e.getParameter(3379),
            p=e.getParameter(34076),
            f=e.getParameter(34921),
            m=e.getParameter(36347),
            g=e.getParameter(36348),
            _=e.getParameter(36349),
            v=u>0,
            x=a||t.has("OES_texture_float");
            return {
                isWebGL2: a, drawBuffers: l, getMaxAnisotropy: function() {
                    if(void 0!==n)return n;
                    if(!0===t.has("EXT_texture_filter_anisotropic")) {
                        const i=t.get("EXT_texture_filter_anisotropic");
                        n=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                    }
                    else n=0;
                    return n
                }
                ,
                getMaxPrecision:r,
                precision:s,
                logarithmicDepthBuffer:c,
                maxTextures:h,
                maxVertexTextures:u,
                maxTextureSize:d,
                maxCubemapSize:p,
                maxAttributes:f,
                maxVertexUniforms:m,
                maxVaryings:g,
                maxFragmentUniforms:_,
                vertexTextures:v,
                floatFragmentTextures:x,
                floatVertexTextures:v&&x,
                maxSamples:a?e.getParameter(36183):0
            }
        }
        function O(e) {
            const t=this;
            let i=null, n=0, r=!1, a=!1;
            const s=new u, l=new o.V, c= {
                value: null, needsUpdate: !1
            }
            ;
            function h() {
                c.value!==i&&(c.value=i, c.needsUpdate=n>0), t.numPlanes=n, t.numIntersection=0
            }
            function d(e,
            i,
            n,
            r) {
                const a=null!==e?e.length: 0;
                let o=null;
                if(0!==a) {
                    if(o=c.value, !0!==r||null===o) {
                        const t=n+4*a, r=i.matrixWorldInverse;
                        l.getNormalMatrix(r), (null===o||o.length<t)&&(o=new Float32Array(t));
                        for(let t=0, i=n;
                        t!==a;
                        ++t, i+=4)s.copy(e[t]).applyMatrix4(r, l), s.normal.toArray(o, i), o[i+3]=s.constant
                    }
                    c.value=o,
                    c.needsUpdate=!0
                }
                return t.numPlanes=a,
                t.numIntersection=0,
                o
            }
            this.uniform=c,
            this.numPlanes=0,
            this.numIntersection=0,
            this.init=function(e,
            t,
            a) {
                const s=0!==e.length||t||0!==n||r;
                return r=t, i=d(e, a, 0), n=e.length, s
            }
            ,
            this.beginShadows=function() {
                a=!0, d(null)
            }
            ,
            this.endShadows=function() {
                a=!1, h()
            }
            ,
            this.setState=function(t,
            s,
            o) {
                const l=t.clippingPlanes, u=t.clipIntersection, p=t.clipShadows, f=e.get(t);
                if(!r||null===l||0===l.length||a&&!p)a?d(null): h();
                else {
                    const e=a?0: n, t=4*e;
                    let r=f.clippingState||null;
                    c.value=r, r=d(l, s, t, o);
                    for(let e=0;
                    e!==t;
                    ++e)r[e]=i[e];
                    f.clippingState=r, this.numIntersection=u?this.numPlanes: 0, this.numPlanes+=e
                }
            }
        }
        P.physical= {
            uniforms: (0, C.Rh)([P.standard.uniforms, {
                clearcoat: {
                    value: 0
                }
                ,
                clearcoatMap: {
                    value: null
                }
                ,
                clearcoatRoughness: {
                    value: 0
                }
                ,
                clearcoatRoughnessMap: {
                    value: null
                }
                ,
                clearcoatNormalScale: {
                    value: new g.F(1, 1)
                }
                ,
                clearcoatNormalMap: {
                    value: null
                }
                ,
                iridescence: {
                    value: 0
                }
                ,
                iridescenceMap: {
                    value: null
                }
                ,
                iridescenceIOR: {
                    value: 1.3
                }
                ,
                iridescenceThicknessMinimum: {
                    value: 100
                }
                ,
                iridescenceThicknessMaximum: {
                    value: 400
                }
                ,
                iridescenceThicknessMap: {
                    value: null
                }
                ,
                sheen: {
                    value: 0
                }
                ,
                sheenColor: {
                    value: new T.I(0)
                }
                ,
                sheenColorMap: {
                    value: null
                }
                ,
                sheenRoughness: {
                    value: 1
                }
                ,
                sheenRoughnessMap: {
                    value: null
                }
                ,
                transmission: {
                    value: 0
                }
                ,
                transmissionMap: {
                    value: null
                }
                ,
                transmissionSamplerSize: {
                    value: new g.F
                }
                ,
                transmissionSamplerMap: {
                    value: null
                }
                ,
                thickness: {
                    value: 0
                }
                ,
                thicknessMap: {
                    value: null
                }
                ,
                attenuationDistance: {
                    value: 0
                }
                ,
                attenuationColor: {
                    value: new T.I(0)
                }
                ,
                specularIntensity: {
                    value: 1
                }
                ,
                specularIntensityMap: {
                    value: null
                }
                ,
                specularColor: {
                    value: new T.I(1, 1, 1)
                }
                ,
                specularColorMap: {
                    value: null
                }
            }
            ]),
            vertexShader:A.meshphysical_vert,
            fragmentShader:A.meshphysical_frag
        }
        ;
        var z=i(1698),
        U=i(3740),
        F=i(8695);
        const B=90;
        class V extends U.T {
            constructor(e, t, i) {
                super(), this.type="CubeCamera", this.renderTarget=i;
                const n=new F.c(B, 1, e, t);
                n.layers=this.layers, n.up.set(0, -1, 0), n.lookAt(new a.P(1, 0, 0)), this.add(n);
                const r=new F.c(B, 1, e, t);
                r.layers=this.layers, r.up.set(0, -1, 0), r.lookAt(new a.P(-1, 0, 0)), this.add(r);
                const s=new F.c(B, 1, e, t);
                s.layers=this.layers, s.up.set(0, 0, 1), s.lookAt(new a.P(0, 1, 0)), this.add(s);
                const o=new F.c(B, 1, e, t);
                o.layers=this.layers, o.up.set(0, 0, -1), o.lookAt(new a.P(0, -1, 0)), this.add(o);
                const l=new F.c(B, 1, e, t);
                l.layers=this.layers, l.up.set(0, -1, 0), l.lookAt(new a.P(0, 0, 1)), this.add(l);
                const c=new F.c(B, 1, e, t);
                c.layers=this.layers, c.up.set(0, -1, 0), c.lookAt(new a.P(0, 0, -1)), this.add(c)
            }
            update(e,
            t) {
                null===this.parent&&this.updateMatrixWorld();
                const i=this.renderTarget, [r, a, s, o, l, c]=this.children, h=e.getRenderTarget(), u=e.toneMapping, d=e.xr.enabled;
                e.toneMapping=n.uL, e.xr.enabled=!1;
                const p=i.texture.generateMipmaps;
                i.texture.generateMipmaps=!1, e.setRenderTarget(i, 0), e.render(t, r), e.setRenderTarget(i, 1), e.render(t, a), e.setRenderTarget(i, 2), e.render(t, s), e.setRenderTarget(i, 3), e.render(t, o), e.setRenderTarget(i, 4), e.render(t, l), i.texture.generateMipmaps=p, e.setRenderTarget(i, 5), e.render(t, c), e.setRenderTarget(h), e.toneMapping=u, e.xr.enabled=d, i.texture.needsPMREMUpdate=!0
            }
        }
        var k=i(2887);
        class G extends k.x {
            constructor(e, t, i, r, a, s, o, l, c, h) {
                super(e=void 0!==e?e: [], t=void 0!==t?t: n.fY, i, r, a, s, o, l, c, h), this.isCubeTexture=!0, this.flipY=!1
            }
            get images() {
                return this.image
            }
            set images(e) {
                this.image=e
            }
        }
        class H extends z.d {
            constructor(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: {};
                super(e, e, t), this.isWebGLCubeRenderTarget=!0;
                const i= {
                    width: e, height: e, depth: 1
                }
                ,
                r=[i,
                i,
                i,
                i,
                i,
                i];
                this.texture=new G(r,
                t.mapping,
                t.wrapS,
                t.wrapT,
                t.magFilter,
                t.minFilter,
                t.format,
                t.type,
                t.anisotropy,
                t.encoding),
                this.texture.isRenderTargetTexture=!0,
                this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,
                this.texture.minFilter=void 0!==t.minFilter?t.minFilter:n.we
            }
            fromEquirectangularTexture(e,
            t) {
                this.texture.type=t.type, this.texture.encoding=t.encoding, this.texture.generateMipmaps=t.generateMipmaps, this.texture.minFilter=t.minFilter, this.texture.magFilter=t.magFilter;
                const i= {
                    uniforms: {
                        tEquirect: {
                            value: null
                        }
                    }
                    ,
                    vertexShader:"varying vec3 vWorldDirection;vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}void main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}",
                    fragmentShader:"uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);}"
                }
                ,
                r=new S(5,
                5,
                5),
                a=new w.j( {
                    name: "CubemapFromEquirect", uniforms: (0, C.dw)(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: n._L, blending: n.jF
                }
                );
                a.uniforms.tEquirect.value=t;
                const s=new E.K(r,
                a),
                o=t.minFilter;
                t.minFilter===n.D1&&(t.minFilter=n.we);
                return new V(1,
                10,
                this).update(e,
                s),
                t.minFilter=o,
                s.geometry.dispose(),
                s.material.dispose(),
                this
            }
            clear(e,
            t,
            i,
            n) {
                const r=e.getRenderTarget();
                for(let r=0;
                r<6;
                r++)e.setRenderTarget(this, r), e.clear(t, i, n);
                e.setRenderTarget(r)
            }
        }
        function W(e) {
            let t=new WeakMap;
            function i(e, t) {
                return t===n.dS?e.mapping=n.fY: t===n.Bf&&(e.mapping=n.vx), e
            }
            function r(e) {
                const i=e.target;
                i.removeEventListener("dispose", r);
                const n=t.get(i);
                void 0!==n&&(t.delete(i), n.dispose())
            }
            return {
                get: function(a) {
                    if(a&&a.isTexture&&!1===a.isRenderTargetTexture) {
                        const s=a.mapping;
                        if(s===n.dS||s===n.Bf) {
                            if(t.has(a)) {
                                return i(t.get(a).texture, a.mapping)
                            }
                            {
                                const n=a.image;
                                if(n&&n.height>0) {
                                    const s=new H(n.height/2);
                                    return s.fromEquirectangularTexture(e, a), t.set(a, s), a.addEventListener("dispose", r), i(s.texture, a.mapping)
                                }
                                return null
                            }
                        }
                    }
                    return a
                }
                ,
                dispose:function() {
                    t=new WeakMap
                }
            }
        }
        var q=i(9717);
        class j extends q.V {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: -1, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 1, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 1, n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: -1, r=arguments.length>4&&void 0!==arguments[4]?arguments[4]: .1, a=arguments.length>5&&void 0!==arguments[5]?arguments[5]: 2e3;
                super(), this.isOrthographicCamera=!0, this.type="OrthographicCamera", this.zoom=1, this.view=null, this.left=e, this.right=t, this.top=i, this.bottom=n, this.near=r, this.far=a, this.updateProjectionMatrix()
            }
            copy(e,
            t) {
                return super.copy(e, t), this.left=e.left, this.right=e.right, this.top=e.top, this.bottom=e.bottom, this.near=e.near, this.far=e.far, this.zoom=e.zoom, this.view=null===e.view?null:Object.assign( {}, e.view), this
            }
            setViewOffset(e,
            t,
            i,
            n,
            r,
            a) {
                null===this.view&&(this.view= {
                    enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1
                }
                ),
                this.view.enabled=!0,
                this.view.fullWidth=e,
                this.view.fullHeight=t,
                this.view.offsetX=i,
                this.view.offsetY=n,
                this.view.width=r,
                this.view.height=a,
                this.updateProjectionMatrix()
            }
            clearViewOffset() {
                null!==this.view&&(this.view.enabled=!1), this.updateProjectionMatrix()
            }
            updateProjectionMatrix() {
                const e=(this.right-this.left)/(2*this.zoom), t=(this.top-this.bottom)/(2*this.zoom), i=(this.right+this.left)/2, n=(this.top+this.bottom)/2;
                let r=i-e, a=i+e, s=n+t, o=n-t;
                if(null!==this.view&&this.view.enabled) {
                    const e=(this.right-this.left)/this.view.fullWidth/this.zoom, t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;
                    r+=e*this.view.offsetX, a=r+e*this.view.width, s-=t*this.view.offsetY, o=s-t*this.view.height
                }
                this.projectionMatrix.makeOrthographic(r,
                a,
                s,
                o,
                this.near,
                this.far),
                this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }
            toJSON(e) {
                const t=super.toJSON(e);
                return t.object.zoom=this.zoom, t.object.left=this.left, t.object.right=this.right, t.object.top=this.top, t.object.bottom=this.bottom, t.object.near=this.near, t.object.far=this.far, null!==this.view&&(t.object.view=Object.assign( {}, this.view)), t
            }
        }
        var X=i(697);
        const Y=[.125,
        .215,
        .35,
        .446,
        .526,
        .582],
        Z=20,
        K=new j,
        J=new T.I;
        let Q=null;
        const $=(1+Math.sqrt(5))/2,
        ee=1/$,
        te=[new a.P(1,
        1,
        1),
        new a.P(-1,
        1,
        1),
        new a.P(1,
        1,
        -1),
        new a.P(-1,
        1,
        -1),
        new a.P(0,
        $,
        ee),
        new a.P(0,
        $,
        -ee),
        new a.P(ee,
        0,
        $),
        new a.P(-ee,
        0,
        $),
        new a.P($,
        ee,
        0),
        new a.P(-$,
        ee,
        0)];
        class ie {
            constructor(e) {
                this._renderer=e, this._pingPongRenderTarget=null, this._lodMax=0, this._cubeSize=0, this._lodPlanes=[], this._sizeLods=[], this._sigmas=[], this._blurMaterial=null, this._cubemapMaterial=null, this._equirectMaterial=null, this._compileMaterial(this._blurMaterial)
            }
            fromScene(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: .1, n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 100;
                Q=this._renderer.getRenderTarget(), this._setSize(256);
                const r=this._allocateTargets();
                return r.depthBuffer=!0, this._sceneToCubeUV(e, i, n, r), t>0&&this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r
            }
            fromEquirectangular(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: null;
                return this._fromTexture(e, t)
            }
            fromCubemap(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: null;
                return this._fromTexture(e, t)
            }
            compileCubemapShader() {
                null===this._cubemapMaterial&&(this._cubemapMaterial=se(), this._compileMaterial(this._cubemapMaterial))
            }
            compileEquirectangularShader() {
                null===this._equirectMaterial&&(this._equirectMaterial=ae(), this._compileMaterial(this._equirectMaterial))
            }
            dispose() {
                this._dispose(), null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(), null!==this._equirectMaterial&&this._equirectMaterial.dispose()
            }
            _setSize(e) {
                this._lodMax=Math.floor(Math.log2(e)), this._cubeSize=Math.pow(2, this._lodMax)
            }
            _dispose() {
                null!==this._blurMaterial&&this._blurMaterial.dispose(), null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();
                for(let e=0;
                e<this._lodPlanes.length;
                e++)this._lodPlanes[e].dispose()
            }
            _cleanup(e) {
                this._renderer.setRenderTarget(Q), e.scissorTest=!1, re(e, 0, 0, e.width, e.height)
            }
            _fromTexture(e,
            t) {
                e.mapping===n.fY||e.mapping===n.vx?this._setSize(0===e.image.length?16: e.image[0].width||e.image[0].image.width): this._setSize(e.image.width/4), Q=this._renderer.getRenderTarget();
                const i=t||this._allocateTargets();
                return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i
            }
            _allocateTargets() {
                const e=3*Math.max(this._cubeSize, 112), t=4*this._cubeSize, i= {
                    magFilter: n.we, minFilter: n.we, generateMipmaps: !1, type: n.cL, format: n.wk, encoding: n.rn, depthBuffer: !1
                }
                ,
                r=ne(e,
                t,
                i);
                if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==e) {
                    null!==this._pingPongRenderTarget&&this._dispose(), this._pingPongRenderTarget=ne(e, t, i);
                    const {
                        _lodMax: r
                    }
                    =this;
                    ( {
                        sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas
                    }
                    =function(e) {
                        const t=[], i=[], n=[];
                        let r=e;
                        const a=e-4+1+Y.length;
                        for(let s=0;
                        s<a;
                        s++) {
                            const a=Math.pow(2, r);
                            i.push(a);
                            let o=1/a;
                            s>e-4?o=Y[s-e+4-1]: 0===s&&(o=0), n.push(o);
                            const l=1/(a-2), c=-l, h=1+l, u=[c, c, h, c, h, h, c, c, h, h, c, h], d=6, p=6, f=3, m=2, g=1, _=new Float32Array(f*p*d), v=new Float32Array(m*p*d), x=new Float32Array(g*p*d);
                            for(let e=0;
                            e<d;
                            e++) {
                                const t=e%3*2/3-1, i=e>2?0: -1, n=[t, i, 0, t+2/3, i, 0, t+2/3, i+1, 0, t, i, 0, t+2/3, i+1, 0, t, i+1, 0];
                                _.set(n, f*p*e), v.set(u, m*p*e);
                                const r=[e, e, e, e, e, e];
                                x.set(r, g*p*e)
                            }
                            const S=new M.u;
                            S.setAttribute("position",
                            new y.Tl(_,
                            f)),
                            S.setAttribute("uv",
                            new y.Tl(v,
                            m)),
                            S.setAttribute("faceIndex",
                            new y.Tl(x,
                            g)),
                            t.push(S),
                            r>4&&r--
                        }
                        return {
                            lodPlanes: t, sizeLods: i, sigmas: n
                        }
                    }
                    (r)),
                    this._blurMaterial=function(e,
                    t,
                    i) {
                        const r=new Float32Array(Z), s=new a.P(0, 1, 0);
                        return new w.j( {
                            name:"SphericalGaussianBlur", defines: {
                                n:Z, CUBEUV_TEXEL_WIDTH:1/t, CUBEUV_TEXEL_HEIGHT:1/i, CUBEUV_MAX_MIP:`$ {
                                    e
                                }
                                .0`
                            }
                            ,
                            uniforms: {
                                envMap: {
                                    value: null
                                }
                                ,
                                samples: {
                                    value: 1
                                }
                                ,
                                weights: {
                                    value: r
                                }
                                ,
                                latitudinal: {
                                    value: !1
                                }
                                ,
                                dTheta: {
                                    value: 0
                                }
                                ,
                                mipInt: {
                                    value: 0
                                }
                                ,
                                poleAxis: {
                                    value: s
                                }
                            }
                            ,
                            vertexShader:oe(),
                            fragmentShader:"precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;uniform int samples;uniform float weights[n];uniform bool latitudinal;uniform float dTheta;uniform float mipInt;uniform vec3 poleAxis;\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\nvec3 getSample(float theta,vec3 axis){float cosTheta=cos(theta);vec3 sampleDirection=vOutputDirection*cosTheta+cross(axis,vOutputDirection)*sin(theta)+axis*dot(axis,vOutputDirection)*(1.0-cosTheta);return bilinearCubeUV(envMap,sampleDirection,mipInt);}void main(){vec3 axis=latitudinal?poleAxis:cross(poleAxis,vOutputDirection);if(all(equal(axis,vec3(0.0)))){axis=vec3(vOutputDirection.z,0.0,-vOutputDirection.x);}axis=normalize(axis);gl_FragColor=vec4(0.0,0.0,0.0,1.0);gl_FragColor.rgb+=weights[0]*getSample(0.0,axis);for(int i=1;i<n;i++){if(i>=samples){break;}float theta=dTheta*float(i);gl_FragColor.rgb+=weights[i]*getSample(-1.0*theta,axis);gl_FragColor.rgb+=weights[i]*getSample(theta,axis);}}",
                            blending:n.jF,
                            depthTest:!1,
                            depthWrite:!1
                        }
                        )
                    }
                    (r,
                    e,
                    t)
                }
                return r
            }
            _compileMaterial(e) {
                const t=new E.K(this._lodPlanes[0], e);
                this._renderer.compile(t, K)
            }
            _sceneToCubeUV(e,
            t,
            i,
            r) {
                const a=new F.c(90, 1, t, i), s=[1, -1, 1, 1, 1, 1], o=[1, 1, 1, -1, -1, -1], l=this._renderer, c=l.autoClear, h=l.toneMapping;
                l.getClearColor(J), l.toneMapping=n.uL, l.autoClear=!1;
                const u=new X.v( {
                    name: "PMREM.Background", side: n._L, depthWrite: !1, depthTest: !1
                }
                ),
                d=new E.K(new S,
                u);
                let p=!1;
                const f=e.background;
                f?f.isColor&&(u.color.copy(f),
                e.background=null,
                p=!0):(u.color.copy(J),
                p=!0);
                for(let t=0;
                t<6;
                t++) {
                    const i=t%3;
                    0===i?(a.up.set(0, s[t], 0), a.lookAt(o[t], 0, 0)): 1===i?(a.up.set(0, 0, s[t]), a.lookAt(0, o[t], 0)): (a.up.set(0, s[t], 0), a.lookAt(0, 0, o[t]));
                    const n=this._cubeSize;
                    re(r, i*n, t>2?n: 0, n, n), l.setRenderTarget(r), p&&l.render(d, a), l.render(e, a)
                }
                d.geometry.dispose(),
                d.material.dispose(),
                l.toneMapping=h,
                l.autoClear=c,
                e.background=f
            }
            _textureToCubeUV(e,
            t) {
                const i=this._renderer, r=e.mapping===n.fY||e.mapping===n.vx;
                r?(null===this._cubemapMaterial&&(this._cubemapMaterial=se()), this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1: 1): null===this._equirectMaterial&&(this._equirectMaterial=ae());
                const a=r?this._cubemapMaterial: this._equirectMaterial, s=new E.K(this._lodPlanes[0], a);
                a.uniforms.envMap.value=e;
                const o=this._cubeSize;
                re(t, 0, 0, 3*o, 2*o), i.setRenderTarget(t), i.render(s, K)
            }
            _applyPMREM(e) {
                const t=this._renderer, i=t.autoClear;
                t.autoClear=!1;
                for(let t=1;
                t<this._lodPlanes.length;
                t++) {
                    const i=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]), n=te[(t-1)%te.length];
                    this._blur(e, t-1, t, i, n)
                }
                t.autoClear=i
            }
            _blur(e,
            t,
            i,
            n,
            r) {
                const a=this._pingPongRenderTarget;
                this._halfBlur(e, a, t, i, n, "latitudinal", r), this._halfBlur(a, e, i, i, n, "longitudinal", r)
            }
            _halfBlur(e,
            t,
            i,
            n,
            r,
            a,
            s) {
                const o=this._renderer, l=this._blurMaterial, c=new E.K(this._lodPlanes[n], l), h=l.uniforms, u=this._sizeLods[i]-1, d=isFinite(r)?Math.PI/(2*u): 2*Math.PI/39, p=r/d, f=isFinite(r)?1+Math.floor(3*p): Z, m=[];
                let g=0;
                for(let e=0;
                e<Z;
                ++e) {
                    const t=e/p, i=Math.exp(-t*t/2);
                    m.push(i), 0===e?g+=i: e<f&&(g+=2*i)
                }
                for(let e=0;
                e<m.length;
                e++)m[e]=m[e]/g;
                h.envMap.value=e.texture,
                h.samples.value=f,
                h.weights.value=m,
                h.latitudinal.value="latitudinal"===a,
                s&&(h.poleAxis.value=s);
                const {
                    _lodMax: _
                }
                =this;
                h.dTheta.value=d,
                h.mipInt.value=_-i;
                const v=this._sizeLods[n];
                re(t,
                3*v*(n>_-4?n-_+4:0),
                4*(this._cubeSize-v),
                3*v,
                2*v),
                o.setRenderTarget(t),
                o.render(c,
                K)
            }
        }
        function ne(e,
        t,
        i) {
            const r=new z.d(e, t, i);
            return r.texture.mapping=n.g8, r.texture.name="PMREM.cubeUv", r.scissorTest=!0, r
        }
        function re(e,
        t,
        i,
        n,
        r) {
            e.viewport.set(t, i, n, r), e.scissor.set(t, i, n, r)
        }
        function ae() {
            return new w.j( {
                name:"EquirectangularToCubeUV", uniforms: {
                    envMap: {
                        value: null
                    }
                }
                ,
                vertexShader:oe(),
                fragmentShader:"precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;\n#include <common>\nvoid main(){vec3 outputDirection=normalize(vOutputDirection);vec2 uv=equirectUv(outputDirection);gl_FragColor=vec4(texture2D(envMap,uv).rgb,1.0);}",
                blending:n.jF,
                depthTest:!1,
                depthWrite:!1
            }
            )
        }
        function se() {
            return new w.j( {
                name:"CubemapToCubeUV", uniforms: {
                    envMap: {
                        value: null
                    }
                    ,
                    flipEnvMap: {
                        value: -1
                    }
                }
                ,
                vertexShader:oe(),
                fragmentShader:"precision mediump float;precision mediump int;uniform float flipEnvMap;varying vec3 vOutputDirection;uniform samplerCube envMap;void main(){gl_FragColor=textureCube(envMap,vec3(flipEnvMap*vOutputDirection.x,vOutputDirection.yz));}",
                blending:n.jF,
                depthTest:!1,
                depthWrite:!1
            }
            )
        }
        function oe() {
            return"precision mediump float;precision mediump int;attribute float faceIndex;varying vec3 vOutputDirection;vec3 getDirection(vec2 uv,float face){uv=2.0*uv-1.0;vec3 direction=vec3(uv,1.0);if(face==0.0){direction=direction.zyx;}else if(face==1.0){direction=direction.xzy;direction.xz*=-1.0;}else if(face==2.0){direction.x*=-1.0;}else if(face==3.0){direction=direction.zyx;direction.xz*=-1.0;}else if(face==4.0){direction=direction.xzy;direction.xy*=-1.0;}else if(face==5.0){direction.z*=-1.0;}return direction;}void main(){vOutputDirection=getDirection(uv,faceIndex);gl_Position=vec4(position,1.0);}"
        }
        function le(e) {
            let t=new WeakMap, i=null;
            function r(e) {
                const i=e.target;
                i.removeEventListener("dispose", r);
                const n=t.get(i);
                void 0!==n&&(t.delete(i), n.dispose())
            }
            return {
                get: function(a) {
                    if(a&&a.isTexture) {
                        const s=a.mapping, o=s===n.dS||s===n.Bf, l=s===n.fY||s===n.vx;
                        if(o||l) {
                            if(a.isRenderTargetTexture&&!0===a.needsPMREMUpdate) {
                                a.needsPMREMUpdate=!1;
                                let n=t.get(a);
                                return null===i&&(i=new ie(e)), n=o?i.fromEquirectangular(a, n): i.fromCubemap(a, n), t.set(a, n), n.texture
                            }
                            if(t.has(a))return t.get(a).texture;
                            {
                                const n=a.image;
                                if(o&&n&&n.height>0||l&&n&&function(e) {
                                    let t=0;
                                    const i=6;
                                    for(let n=0;
                                    n<i;
                                    n++)void 0!==e[n]&&t++;
                                    return t===i
                                }
                                (n)) {
                                    null===i&&(i=new ie(e));
                                    const n=o?i.fromEquirectangular(a): i.fromCubemap(a);
                                    return t.set(a, n), a.addEventListener("dispose", r), n.texture
                                }
                                return null
                            }
                        }
                    }
                    return a
                }
                ,
                dispose:function() {
                    t=new WeakMap, null!==i&&(i.dispose(), i=null)
                }
            }
        }
        function ce(e) {
            const t= {};
            function i(i) {
                if(void 0!==t[i])return t[i];
                let n;
                switch(i) {
                    case"WEBGL_depth_texture": n=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                    case"EXT_texture_filter_anisotropic": n=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                    case"WEBGL_compressed_texture_s3tc": n=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                    case"WEBGL_compressed_texture_pvrtc": n=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                    default: n=e.getExtension(i)
                }
                return t[i]=n,
                n
            }
            return {
                has: function(e) {
                    return null!==i(e)
                }
                ,
                init:function(e) {
                    e.isWebGL2?i("EXT_color_buffer_float"): (i("WEBGL_depth_texture"), i("OES_texture_float"), i("OES_texture_half_float"), i("OES_texture_half_float_linear"), i("OES_standard_derivatives"), i("OES_element_index_uint"), i("OES_vertex_array_object"), i("ANGLE_instanced_arrays")), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float"), i("WEBGL_multisampled_render_to_texture")
                }
                ,
                get:function(e) {
                    const t=i(e);
                    return t
                }
            }
        }
        var he=i(6104);
        function ue(e,
        t,
        i,
        n) {
            const r= {}, a=new WeakMap;
            function s(e) {
                const o=e.target;
                null!==o.index&&t.remove(o.index);
                for(const e in o.attributes)t.remove(o.attributes[e]);
                o.removeEventListener("dispose", s), delete r[o.id];
                const l=a.get(o);
                l&&(t.remove(l), a.delete(o)), n.releaseStatesOfGeometry(o), !0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount, i.memory.geometries--
            }
            function o(e) {
                const i=[], n=e.index, r=e.attributes.position;
                let s=0;
                if(null!==n) {
                    const e=n.array;
                    s=n.version;
                    for(let t=0, n=e.length;
                    t<n;
                    t+=3) {
                        const n=e[t+0], r=e[t+1], a=e[t+2];
                        i.push(n, r, r, a, a, n)
                    }
                }
                else {
                    const e=r.array;
                    s=r.version;
                    for(let t=0, n=e.length/3-1;
                    t<n;
                    t+=3) {
                        const e=t+0, n=t+1, r=t+2;
                        i.push(e, n, n, r, r, e)
                    }
                }
                const o=new((0,
                he.H7)(i)?y.lC:y.ql)(i,
                1);
                o.version=s;
                const l=a.get(e);
                l&&t.remove(l),
                a.set(e,
                o)
            }
            return {
                get: function(e, t) {
                    return!0===r[t.id]||(t.addEventListener("dispose", s), r[t.id]=!0, i.memory.geometries++), t
                }
                ,
                update:function(e) {
                    const i=e.attributes;
                    for(const e in i)t.update(i[e], 34962);
                    const n=e.morphAttributes;
                    for(const e in n) {
                        const i=n[e];
                        for(let e=0, n=i.length;
                        e<n;
                        e++)t.update(i[e], 34962)
                    }
                }
                ,
                getWireframeAttribute:function(e) {
                    const t=a.get(e);
                    if(t) {
                        const i=e.index;
                        null!==i&&t.version<i.version&&o(e)
                    }
                    else o(e);
                    return a.get(e)
                }
            }
        }
        function de(e,
        t,
        i,
        n) {
            const r=n.isWebGL2;
            let a, s, o;
            this.setMode=function(e) {
                a=e
            }
            ,
            this.setIndex=function(e) {
                s=e.type, o=e.bytesPerElement
            }
            ,
            this.render=function(t,
            n) {
                e.drawElements(a, n, s, t*o), i.update(n, a, 1)
            }
            ,
            this.renderInstances=function(n,
            l,
            c) {
                if(0===c)return;
                let h, u;
                if(r)h=e, u="drawElementsInstanced";
                else if(h=t.get("ANGLE_instanced_arrays"), u="drawElementsInstancedANGLE", null===h)return;
                h[u](a, l, s, n*o, c), i.update(l, a, c)
            }
        }
        function pe(e) {
            const t= {
                frame: 0, calls: 0, triangles: 0, points: 0, lines: 0
            }
            ;
            return {
                memory: {
                    geometries: 0, textures: 0
                }
                ,
                render:t,
                programs:null,
                autoReset:!0,
                reset:function() {
                    t.frame++, t.calls=0, t.triangles=0, t.points=0, t.lines=0
                }
                ,
                update:function(e,
                i,
                n) {
                    switch(t.calls++, i) {
                        case 4: t.triangles+=n*(e/3);
                        break;
                        case 1: t.lines+=n*(e/2);
                        break;
                        case 3: t.lines+=n*(e-1);
                        break;
                        case 2: t.lines+=n*e;
                        break;
                        case 0: t.points+=n*e
                    }
                }
            }
        }
        class fe extends k.x {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: null, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 1, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 1, r=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 1;
                super(null), this.isDataArrayTexture=!0, this.image= {
                    data: e, width: t, height: i, depth: r
                }
                ,
                this.magFilter=n.Ty,
                this.minFilter=n.Ty,
                this.wrapR=n.uW,
                this.generateMipmaps=!1,
                this.flipY=!1,
                this.unpackAlignment=1
            }
        }
        function me(e,
        t) {
            return e[0]-t[0]
        }
        function ge(e,
        t) {
            return Math.abs(t[1])-Math.abs(e[1])
        }
        function _e(e,
        t,
        i) {
            const r= {}, a=new Float32Array(8), s=new WeakMap, o=new _.L, l=[];
            for(let e=0;
            e<8;
            e++)l[e]=[e, 0];
            return {
                update: function(c, h, u, d) {
                    const p=c.morphTargetInfluences;
                    if(!0===t.isWebGL2) {
                        const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color, m=void 0!==f?f.length: 0;
                        let _=s.get(h);
                        if(void 0===_||_.count!==m) {
                            void 0!==_&&_.texture.dispose();
                            const M=void 0!==h.morphAttributes.position, y=void 0!==h.morphAttributes.normal, S=void 0!==h.morphAttributes.color, b=h.morphAttributes.position||[], w=h.morphAttributes.normal||[], T=h.morphAttributes.color||[];
                            let E=0;
                            !0===M&&(E=1), !0===y&&(E=2), !0===S&&(E=3);
                            let A=h.attributes.position.count*E, C=1;
                            A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize), A=t.maxTextureSize);
                            const L=new Float32Array(A*C*4*m), P=new fe(L, A, C, m);
                            P.type=n.Vz, P.needsUpdate=!0;
                            const D=4*E;
                            for(let I=0;
                            I<m;
                            I++) {
                                const N=b[I], O=w[I], z=T[I], U=A*C*4*I;
                                for(let F=0;
                                F<N.count;
                                F++) {
                                    const B=F*D;
                                    !0===M&&(o.fromBufferAttribute(N, F), L[U+B+0]=o.x, L[U+B+1]=o.y, L[U+B+2]=o.z, L[U+B+3]=0), !0===y&&(o.fromBufferAttribute(O, F), L[U+B+4]=o.x, L[U+B+5]=o.y, L[U+B+6]=o.z, L[U+B+7]=0), !0===S&&(o.fromBufferAttribute(z, F), L[U+B+8]=o.x, L[U+B+9]=o.y, L[U+B+10]=o.z, L[U+B+11]=4===z.itemSize?o.w: 1)
                                }
                            }
                            function R() {
                                P.dispose(), s.delete(h), h.removeEventListener("dispose", R)
                            }
                            _= {
                                count: m, texture: P, size: new g.F(A, C)
                            }
                            ,
                            s.set(h,
                            _),
                            h.addEventListener("dispose",
                            R)
                        }
                        let v=0;
                        for(let V=0;
                        V<p.length;
                        V++)v+=p[V];
                        const x=h.morphTargetsRelative?1:1-v;
                        d.getUniforms().setValue(e,
                        "morphTargetBaseInfluence",
                        x),
                        d.getUniforms().setValue(e,
                        "morphTargetInfluences",
                        p),
                        d.getUniforms().setValue(e,
                        "morphTargetsTexture",
                        _.texture,
                        i),
                        d.getUniforms().setValue(e,
                        "morphTargetsTextureSize",
                        _.size)
                    }
                    else {
                        const k=void 0===p?0: p.length;
                        let G=r[h.id];
                        if(void 0===G||G.length!==k) {
                            G=[];
                            for(let X=0;
                            X<k;
                            X++)G[X]=[X, 0];
                            r[h.id]=G
                        }
                        for(let Y=0;
                        Y<k;
                        Y++) {
                            const Z=G[Y];
                            Z[0]=Y, Z[1]=p[Y]
                        }
                        G.sort(ge);
                        for(let K=0;
                        K<8;
                        K++)K<k&&G[K][1]?(l[K][0]=G[K][0],
                        l[K][1]=G[K][1]):(l[K][0]=Number.MAX_SAFE_INTEGER,
                        l[K][1]=0);
                        l.sort(me);
                        const H=h.morphAttributes.position,
                        W=h.morphAttributes.normal;
                        let q=0;
                        for(let J=0;
                        J<8;
                        J++) {
                            const Q=l[J], $=Q[0], ee=Q[1];
                            $!==Number.MAX_SAFE_INTEGER&&ee?(H&&h.getAttribute("morphTarget"+J)!==H[$]&&h.setAttribute("morphTarget"+J, H[$]), W&&h.getAttribute("morphNormal"+J)!==W[$]&&h.setAttribute("morphNormal"+J, W[$]), a[J]=ee, q+=ee): (H&&!0===h.hasAttribute("morphTarget"+J)&&h.deleteAttribute("morphTarget"+J), W&&!0===h.hasAttribute("morphNormal"+J)&&h.deleteAttribute("morphNormal"+J), a[J]=0)
                        }
                        const j=h.morphTargetsRelative?1:1-q;
                        d.getUniforms().setValue(e,
                        "morphTargetBaseInfluence",
                        j),
                        d.getUniforms().setValue(e,
                        "morphTargetInfluences",
                        a)
                    }
                }
            }
        }
        function ve(e,
        t,
        i,
        n) {
            let r=new WeakMap;
            function a(e) {
                const t=e.target;
                t.removeEventListener("dispose", a), i.remove(t.instanceMatrix), null!==t.instanceColor&&i.remove(t.instanceColor)
            }
            return {
                update: function(e) {
                    const s=n.render.frame, o=e.geometry, l=t.get(e, o);
                    return r.get(l)!==s&&(t.update(l), r.set(l, s)), e.isInstancedMesh&&(!1===e.hasEventListener("dispose", a)&&e.addEventListener("dispose", a), i.update(e.instanceMatrix, 34962), null!==e.instanceColor&&i.update(e.instanceColor, 34962)), l
                }
                ,
                dispose:function() {
                    r=new WeakMap
                }
            }
        }
        var xe=i(2302);
        class Me extends k.x {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: null, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 1, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 1, r=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 1;
                super(null), this.isData3DTexture=!0, this.image= {
                    data: e, width: t, height: i, depth: r
                }
                ,
                this.magFilter=n.Ty,
                this.minFilter=n.Ty,
                this.wrapR=n.uW,
                this.generateMipmaps=!1,
                this.flipY=!1,
                this.unpackAlignment=1
            }
        }
        const ye=new k.x,
        Se=new fe,
        be=new Me,
        we=new G,
        Te=[],
        Ee=[],
        Ae=new Float32Array(16),
        Ce=new Float32Array(9),
        Le=new Float32Array(4);
        function Pe(e,
        t,
        i) {
            const n=e[0];
            if(n<=0||n>0)return e;
            const r=t*i;
            let a=Te[r];
            if(void 0===a&&(a=new Float32Array(r), Te[r]=a), 0!==t) {
                n.toArray(a, 0);
                for(let n=1, r=0;
                n!==t;
                ++n)r+=i, e[n].toArray(a, r)
            }
            return a
        }
        function De(e,
        t) {
            if(e.length!==t.length)return!1;
            for(let i=0, n=e.length;
            i<n;
            i++)if(e[i]!==t[i])return!1;
            return!0
        }
        function Re(e,
        t) {
            for(let i=0, n=t.length;
            i<n;
            i++)e[i]=t[i]
        }
        function Ie(e,
        t) {
            let i=Ee[t];
            void 0===i&&(i=new Int32Array(t), Ee[t]=i);
            for(let n=0;
            n!==t;
            ++n)i[n]=e.allocateTextureUnit();
            return i
        }
        function Ne(e,
        t) {
            const i=this.cache;
            i[0]!==t&&(e.uniform1f(this.addr, t), i[0]=t)
        }
        function Oe(e,
        t) {
            const i=this.cache;
            if(void 0!==t.x)i[0]===t.x&&i[1]===t.y||(e.uniform2f(this.addr, t.x, t.y), i[0]=t.x, i[1]=t.y);
            else {
                if(De(i, t))return;
                e.uniform2fv(this.addr, t), Re(i, t)
            }
        }
        function ze(e,
        t) {
            const i=this.cache;
            if(void 0!==t.x)i[0]===t.x&&i[1]===t.y&&i[2]===t.z||(e.uniform3f(this.addr, t.x, t.y, t.z), i[0]=t.x, i[1]=t.y, i[2]=t.z);
            else if(void 0!==t.r)i[0]===t.r&&i[1]===t.g&&i[2]===t.b||(e.uniform3f(this.addr, t.r, t.g, t.b), i[0]=t.r, i[1]=t.g, i[2]=t.b);
            else {
                if(De(i, t))return;
                e.uniform3fv(this.addr, t), Re(i, t)
            }
        }
        function Ue(e,
        t) {
            const i=this.cache;
            if(void 0!==t.x)i[0]===t.x&&i[1]===t.y&&i[2]===t.z&&i[3]===t.w||(e.uniform4f(this.addr, t.x, t.y, t.z, t.w), i[0]=t.x, i[1]=t.y, i[2]=t.z, i[3]=t.w);
            else {
                if(De(i, t))return;
                e.uniform4fv(this.addr, t), Re(i, t)
            }
        }
        function Fe(e,
        t) {
            const i=this.cache, n=t.elements;
            if(void 0===n) {
                if(De(i, t))return;
                e.uniformMatrix2fv(this.addr, !1, t), Re(i, t)
            }
            else {
                if(De(i, n))return;
                Le.set(n), e.uniformMatrix2fv(this.addr, !1, Le), Re(i, n)
            }
        }
        function Be(e,
        t) {
            const i=this.cache, n=t.elements;
            if(void 0===n) {
                if(De(i, t))return;
                e.uniformMatrix3fv(this.addr, !1, t), Re(i, t)
            }
            else {
                if(De(i, n))return;
                Ce.set(n), e.uniformMatrix3fv(this.addr, !1, Ce), Re(i, n)
            }
        }
        function Ve(e,
        t) {
            const i=this.cache, n=t.elements;
            if(void 0===n) {
                if(De(i, t))return;
                e.uniformMatrix4fv(this.addr, !1, t), Re(i, t)
            }
            else {
                if(De(i, n))return;
                Ae.set(n), e.uniformMatrix4fv(this.addr, !1, Ae), Re(i, n)
            }
        }
        function ke(e,
        t) {
            const i=this.cache;
            i[0]!==t&&(e.uniform1i(this.addr, t), i[0]=t)
        }
        function Ge(e,
        t) {
            const i=this.cache;
            De(i, t)||(e.uniform2iv(this.addr, t), Re(i, t))
        }
        function He(e,
        t) {
            const i=this.cache;
            De(i, t)||(e.uniform3iv(this.addr, t), Re(i, t))
        }
        function We(e,
        t) {
            const i=this.cache;
            De(i, t)||(e.uniform4iv(this.addr, t), Re(i, t))
        }
        function qe(e,
        t) {
            const i=this.cache;
            i[0]!==t&&(e.uniform1ui(this.addr, t), i[0]=t)
        }
        function je(e,
        t) {
            const i=this.cache;
            De(i, t)||(e.uniform2uiv(this.addr, t), Re(i, t))
        }
        function Xe(e,
        t) {
            const i=this.cache;
            De(i, t)||(e.uniform3uiv(this.addr, t), Re(i, t))
        }
        function Ye(e,
        t) {
            const i=this.cache;
            De(i, t)||(e.uniform4uiv(this.addr, t), Re(i, t))
        }
        function Ze(e,
        t,
        i) {
            const n=this.cache, r=i.allocateTextureUnit();
            n[0]!==r&&(e.uniform1i(this.addr, r), n[0]=r), i.setTexture2D(t||ye, r)
        }
        function Ke(e,
        t,
        i) {
            const n=this.cache, r=i.allocateTextureUnit();
            n[0]!==r&&(e.uniform1i(this.addr, r), n[0]=r), i.setTexture3D(t||be, r)
        }
        function Je(e,
        t,
        i) {
            const n=this.cache, r=i.allocateTextureUnit();
            n[0]!==r&&(e.uniform1i(this.addr, r), n[0]=r), i.setTextureCube(t||we, r)
        }
        function Qe(e,
        t,
        i) {
            const n=this.cache, r=i.allocateTextureUnit();
            n[0]!==r&&(e.uniform1i(this.addr, r), n[0]=r), i.setTexture2DArray(t||Se, r)
        }
        function $e(e,
        t) {
            e.uniform1fv(this.addr, t)
        }
        function et(e,
        t) {
            const i=Pe(t, this.size, 2);
            e.uniform2fv(this.addr, i)
        }
        function tt(e,
        t) {
            const i=Pe(t, this.size, 3);
            e.uniform3fv(this.addr, i)
        }
        function it(e,
        t) {
            const i=Pe(t, this.size, 4);
            e.uniform4fv(this.addr, i)
        }
        function nt(e,
        t) {
            const i=Pe(t, this.size, 4);
            e.uniformMatrix2fv(this.addr, !1, i)
        }
        function rt(e,
        t) {
            const i=Pe(t, this.size, 9);
            e.uniformMatrix3fv(this.addr, !1, i)
        }
        function at(e,
        t) {
            const i=Pe(t, this.size, 16);
            e.uniformMatrix4fv(this.addr, !1, i)
        }
        function st(e,
        t) {
            e.uniform1iv(this.addr, t)
        }
        function ot(e,
        t) {
            e.uniform2iv(this.addr, t)
        }
        function lt(e,
        t) {
            e.uniform3iv(this.addr, t)
        }
        function ct(e,
        t) {
            e.uniform4iv(this.addr, t)
        }
        function ht(e,
        t) {
            e.uniform1uiv(this.addr, t)
        }
        function ut(e,
        t) {
            e.uniform2uiv(this.addr, t)
        }
        function dt(e,
        t) {
            e.uniform3uiv(this.addr, t)
        }
        function pt(e,
        t) {
            e.uniform4uiv(this.addr, t)
        }
        function ft(e,
        t,
        i) {
            const n=t.length, r=Ie(i, n);
            e.uniform1iv(this.addr, r);
            for(let e=0;
            e!==n;
            ++e)i.setTexture2D(t[e]||ye, r[e])
        }
        function mt(e,
        t,
        i) {
            const n=t.length, r=Ie(i, n);
            e.uniform1iv(this.addr, r);
            for(let e=0;
            e!==n;
            ++e)i.setTexture3D(t[e]||be, r[e])
        }
        function gt(e,
        t,
        i) {
            const n=t.length, r=Ie(i, n);
            e.uniform1iv(this.addr, r);
            for(let e=0;
            e!==n;
            ++e)i.setTextureCube(t[e]||we, r[e])
        }
        function _t(e,
        t,
        i) {
            const n=t.length, r=Ie(i, n);
            e.uniform1iv(this.addr, r);
            for(let e=0;
            e!==n;
            ++e)i.setTexture2DArray(t[e]||Se, r[e])
        }
        class vt {
            constructor(e, t, i) {
                this.id=e, this.addr=i, this.cache=[], this.setValue=function(e) {
                    switch(e) {
                        case 5126: return Ne;
                        case 35664: return Oe;
                        case 35665: return ze;
                        case 35666: return Ue;
                        case 35674: return Fe;
                        case 35675: return Be;
                        case 35676: return Ve;
                        case 5124: case 35670: return ke;
                        case 35667: case 35671: return Ge;
                        case 35668: case 35672: return He;
                        case 35669: case 35673: return We;
                        case 5125: return qe;
                        case 36294: return je;
                        case 36295: return Xe;
                        case 36296: return Ye;
                        case 35678: case 36198: case 36298: case 36306: case 35682: return Ze;
                        case 35679: case 36299: case 36307: return Ke;
                        case 35680: case 36300: case 36308: case 36293: return Je;
                        case 36289: case 36303: case 36311: case 36292: return Qe
                    }
                }
                (t.type)
            }
        }
        class xt {
            constructor(e, t, i) {
                this.id=e, this.addr=i, this.cache=[], this.size=t.size, this.setValue=function(e) {
                    switch(e) {
                        case 5126: return $e;
                        case 35664: return et;
                        case 35665: return tt;
                        case 35666: return it;
                        case 35674: return nt;
                        case 35675: return rt;
                        case 35676: return at;
                        case 5124: case 35670: return st;
                        case 35667: case 35671: return ot;
                        case 35668: case 35672: return lt;
                        case 35669: case 35673: return ct;
                        case 5125: return ht;
                        case 36294: return ut;
                        case 36295: return dt;
                        case 36296: return pt;
                        case 35678: case 36198: case 36298: case 36306: case 35682: return ft;
                        case 35679: case 36299: case 36307: return mt;
                        case 35680: case 36300: case 36308: case 36293: return gt;
                        case 36289: case 36303: case 36311: case 36292: return _t
                    }
                }
                (t.type)
            }
        }
        class Mt {
            constructor(e) {
                this.id=e, this.seq=[], this.map= {}
            }
            setValue(e,
            t,
            i) {
                const n=this.seq;
                for(let r=0, a=n.length;
                r!==a;
                ++r) {
                    const a=n[r];
                    a.setValue(e, t[a.id], i)
                }
            }
        }
        const yt=/(\w+)(\])?(\[|\.)?/g;
        function St(e,
        t) {
            e.seq.push(t), e.map[t.id]=t
        }
        function bt(e,
        t,
        i) {
            const n=e.name, r=n.length;
            for(yt.lastIndex=0;
            ;
            ) {
                const a=yt.exec(n), s=yt.lastIndex;
                let o=a[1];
                const l="]"===a[2], c=a[3];
                if(l&&(o|=0), void 0===c||"["===c&&s+2===r) {
                    St(i, void 0===c?new vt(o, e, t): new xt(o, e, t));
                    break
                }
                {
                    let e=i.map[o];
                    void 0===e&&(e=new Mt(o), St(i, e)), i=e
                }
            }
        }
        class wt {
            constructor(e, t) {
                this.seq=[], this.map= {};
                const i=e.getProgramParameter(t, 35718);
                for(let n=0;
                n<i;
                ++n) {
                    const i=e.getActiveUniform(t, n);
                    bt(i, e.getUniformLocation(t, i.name), this)
                }
            }
            setValue(e,
            t,
            i,
            n) {
                const r=this.map[t];
                void 0!==r&&r.setValue(e, i, n)
            }
            setOptional(e,
            t,
            i) {
                const n=t[i];
                void 0!==n&&this.setValue(e, i, n)
            }
            static upload(e,
            t,
            i,
            n) {
                for(let r=0, a=t.length;
                r!==a;
                ++r) {
                    const a=t[r], s=i[a.id];
                    !1!==s.needsUpdate&&a.setValue(e, s.value, n)
                }
            }
            static seqWithValue(e,
            t) {
                const i=[];
                for(let n=0, r=e.length;
                n!==r;
                ++n) {
                    const r=e[n];
                    r.id in t&&i.push(r)
                }
                return i
            }
        }
        function Tt(e,
        t,
        i) {
            const n=e.createShader(t);
            return e.shaderSource(n, i), e.compileShader(n), n
        }
        let Et=0;
        function At(e,
        t,
        i) {
            const n=e.getShaderParameter(t, 35713), r=e.getShaderInfoLog(t).trim();
            if(n&&""===r)return"";
            const a=/ERROR: 0: (\d+)/.exec(r);
            if(a) {
                const n=parseInt(a[1]);
                return i.toUpperCase()+"\n\n"+r+"\n\n"+function(e, t) {
                    const i=e.split("\n"), n=[], r=Math.max(t-6, 0), a=Math.min(t+6, i.length);
                    for(let e=r;
                    e<a;
                    e++) {
                        const r=e+1;
                        n.push(`$ {
                            r===t?">": " "
                        }
                        $ {
                            r
                        }
                        : $ {
                            i[e]
                        }
                        `)
                    }
                    return n.join("\n")
                }
                (e.getShaderSource(t),
                n)
            }
            return r
        }
        function Ct(e,
        t) {
            const i=function(e) {
                switch(e) {
                    case n.rn: return["Linear", "( value )"];
                    case n.kn: return["sRGB", "( value )"];
                    default: return["Linear", "( value )"]
                }
            }
            (t);
            return"vec4 "+e+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"
        }
        function Lt(e,
        t) {
            let i;
            switch(t) {
                case n.Eo: i="Linear";
                break;
                case n.Cd: i="Reinhard";
                break;
                case n.YG: i="OptimizedCineon";
                break;
                case n.LY: i="ACESFilmic";
                break;
                case n.dZ: i="Custom";
                break;
                default: i="Linear"
            }
            return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"
        }
        function Pt(e) {
            return""!==e
        }
        function Dt(e,
        t) {
            const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;
            return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, i).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
        }
        function Rt(e,
        t) {
            return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes-t.numClipIntersection)
        }
        const It=/^[ \t]*#include +<([\w\d./]+)>/gm;
        function Nt(e) {
            return e.replace(It, Ot)
        }
        function Ot(e,
        t) {
            const i=A[t];
            if(void 0===i)throw new Error("Can not resolve #include <"+t+">");
            return Nt(i)
        }
        const zt=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s* {([\s\S]+?)}\s+#pragma unroll_loop_end/g;     
        function Ut(e) {
            return e.replace(zt, Ft)
        }
        function Ft(e,
        t,
        i,
        n) {
            let r="";
            for(let e=parseInt(t);
            e<parseInt(i);
            e++)r+=n.replace(/\[\s*i\s*\]/g, "[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g, e);
            return r
        }
        function Bt(e) {
            let t="precision "+e.precision+" float;\nprecision "+e.precision+" int;";
            return"highp"===e.precision?t+="\n#define HIGH_PRECISION": "mediump"===e.precision?t+="\n#define MEDIUM_PRECISION": "lowp"===e.precision&&(t+="\n#define LOW_PRECISION"), t
        }
        function Vt(e,
        t,
        i,
        r) {
            const a=e.getContext(), s=i.defines;
            let o=i.vertexShader, l=i.fragmentShader;
            const c=function(e) {
                let t="SHADOWMAP_TYPE_BASIC";
                return e.shadowMapType===n._i?t="SHADOWMAP_TYPE_PCF": e.shadowMapType===n.nt?t="SHADOWMAP_TYPE_PCF_SOFT": e.shadowMapType===n.dw&&(t="SHADOWMAP_TYPE_VSM"), t
            }
            (i),
            h=function(e) {
                let t="ENVMAP_TYPE_CUBE";
                if(e.envMap)switch(e.envMapMode) {
                    case n.fY: case n.vx: t="ENVMAP_TYPE_CUBE";
                    break;
                    case n.g8: t="ENVMAP_TYPE_CUBE_UV"
                }
                return t
            }
            (i),
            u=function(e) {
                let t="ENVMAP_MODE_REFLECTION";
                e.envMap&&e.envMapMode===n.vx&&(t="ENVMAP_MODE_REFRACTION");
                return t
            }
            (i),
            d=function(e) {
                let t="ENVMAP_BLENDING_NONE";
                if(e.envMap)switch(e.combine) {
                    case n.Ns: t="ENVMAP_BLENDING_MULTIPLY";
                    break;
                    case n.qh: t="ENVMAP_BLENDING_MIX";
                    break;
                    case n.ND: t="ENVMAP_BLENDING_ADD"
                }
                return t
            }
            (i),
            p=function(e) {
                const t=e.envMapCubeUVHeight;
                if(null===t)return null;
                const i=Math.log2(t)-2, n=1/t;
                return {
                    texelWidth: 1/(3*Math.max(Math.pow(2, i), 112)), texelHeight: n, maxMip: i
                }
            }
            (i),
            f=i.isWebGL2?"":function(e) {
                return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||"physical"===e.shaderID?"#extension GL_OES_standard_derivatives : enable": "", (e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable": "", e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require": "", (e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable": ""].filter(Pt).join("\n")
            }
            (i),
            m=function(e) {
                const t=[];
                for(const i in e) {
                    const n=e[i];
                    !1!==n&&t.push("#define "+i+" "+n)
                }
                return t.join("\n")
            }
            (s),
            g=a.createProgram();
            let _,
            v,
            x=i.glslVersion?"#version "+i.glslVersion+"\n":"";
            i.isRawShaderMaterial?(_=[m].filter(Pt).join("\n"),
            _.length>0&&(_+="\n"),
            v=[f,
            m].filter(Pt).join("\n"),
            v.length>0&&(v+="\n")):(_=[Bt(i),
            "#define SHADER_NAME "+i.shaderName,
            m,
            i.instancing?"#define USE_INSTANCING":"",
            i.instancingColor?"#define USE_INSTANCING_COLOR":"",
            i.supportsVertexTextures?"#define VERTEX_TEXTURES":"",
            i.useFog&&i.fog?"#define USE_FOG":"",
            i.useFog&&i.fogExp2?"#define FOG_EXP2":"",
            i.map?"#define USE_MAP":"",
            i.envMap?"#define USE_ENVMAP":"",
            i.envMap?"#define "+u:"",
            i.lightMap?"#define USE_LIGHTMAP":"",
            i.aoMap?"#define USE_AOMAP":"",
            i.emissiveMap?"#define USE_EMISSIVEMAP":"",
            i.bumpMap?"#define USE_BUMPMAP":"",
            i.normalMap?"#define USE_NORMALMAP":"",
            i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",
            i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",
            i.clearcoatMap?"#define USE_CLEARCOATMAP":"",
            i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",
            i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",
            i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",
            i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",
            i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",
            i.specularMap?"#define USE_SPECULARMAP":"",
            i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",
            i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",
            i.roughnessMap?"#define USE_ROUGHNESSMAP":"",
            i.metalnessMap?"#define USE_METALNESSMAP":"",
            i.alphaMap?"#define USE_ALPHAMAP":"",
            i.transmission?"#define USE_TRANSMISSION":"",
            i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",
            i.thicknessMap?"#define USE_THICKNESSMAP":"",
            i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",
            i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",
            i.vertexTangents?"#define USE_TANGENT":"",
            i.vertexColors?"#define USE_COLOR":"",
            i.vertexAlphas?"#define USE_COLOR_ALPHA":"",
            i.vertexUvs?"#define USE_UV":"",
            i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",
            i.flatShading?"#define FLAT_SHADED":"",
            i.skinning?"#define USE_SKINNING":"",
            i.morphTargets?"#define USE_MORPHTARGETS":"",
            i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",
            i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",
            i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",
            i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",
            i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",
            i.doubleSided?"#define DOUBLE_SIDED":"",
            i.flipSided?"#define FLIP_SIDED":"",
            i.shadowMapEnabled?"#define USE_SHADOWMAP":"",
            i.shadowMapEnabled?"#define "+c:"",
            i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",
            i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",
            i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            "#ifdef USE_INSTANCING",
            "\tattribute mat4 instanceMatrix;",
            "#endif",
            "#ifdef USE_INSTANCING_COLOR",
            "\tattribute vec3 instanceColor;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_TANGENT",
            "\tattribute vec4 tangent;",
            "#endif",
            "#if defined( USE_COLOR_ALPHA )",
            "\tattribute vec4 color;",
            "#elif defined( USE_COLOR )",
            "\tattribute vec3 color;",
            "#endif",
            "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
            "\tattribute vec3 morphTarget0;",
            "\tattribute vec3 morphTarget1;",
            "\tattribute vec3 morphTarget2;",
            "\tattribute vec3 morphTarget3;",
            "\t#ifdef USE_MORPHNORMALS",
            "\t\tattribute vec3 morphNormal0;",
            "\t\tattribute vec3 morphNormal1;",
            "\t\tattribute vec3 morphNormal2;",
            "\t\tattribute vec3 morphNormal3;",
            "\t#else",
            "\t\tattribute vec3 morphTarget4;",
            "\t\tattribute vec3 morphTarget5;",
            "\t\tattribute vec3 morphTarget6;",
            "\t\tattribute vec3 morphTarget7;",
            "\t#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "\tattribute vec4 skinIndex;",
            "\tattribute vec4 skinWeight;",
            "#endif",
            "\n"].filter(Pt).join("\n"),
            v=[f,
            Bt(i),
            "#define SHADER_NAME "+i.shaderName,
            m,
            i.useFog&&i.fog?"#define USE_FOG":"",
            i.useFog&&i.fogExp2?"#define FOG_EXP2":"",
            i.map?"#define USE_MAP":"",
            i.matcap?"#define USE_MATCAP":"",
            i.envMap?"#define USE_ENVMAP":"",
            i.envMap?"#define "+h:"",
            i.envMap?"#define "+u:"",
            i.envMap?"#define "+d:"",
            p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",
            p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",
            p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",
            i.lightMap?"#define USE_LIGHTMAP":"",
            i.aoMap?"#define USE_AOMAP":"",
            i.emissiveMap?"#define USE_EMISSIVEMAP":"",
            i.bumpMap?"#define USE_BUMPMAP":"",
            i.normalMap?"#define USE_NORMALMAP":"",
            i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",
            i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",
            i.clearcoat?"#define USE_CLEARCOAT":"",
            i.clearcoatMap?"#define USE_CLEARCOATMAP":"",
            i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",
            i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",
            i.iridescence?"#define USE_IRIDESCENCE":"",
            i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",
            i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",
            i.specularMap?"#define USE_SPECULARMAP":"",
            i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",
            i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",
            i.roughnessMap?"#define USE_ROUGHNESSMAP":"",
            i.metalnessMap?"#define USE_METALNESSMAP":"",
            i.alphaMap?"#define USE_ALPHAMAP":"",
            i.alphaTest?"#define USE_ALPHATEST":"",
            i.sheen?"#define USE_SHEEN":"",
            i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",
            i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",
            i.transmission?"#define USE_TRANSMISSION":"",
            i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",
            i.thicknessMap?"#define USE_THICKNESSMAP":"",
            i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",
            i.vertexTangents?"#define USE_TANGENT":"",
            i.vertexColors||i.instancingColor?"#define USE_COLOR":"",
            i.vertexAlphas?"#define USE_COLOR_ALPHA":"",
            i.vertexUvs?"#define USE_UV":"",
            i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",
            i.gradientMap?"#define USE_GRADIENTMAP":"",
            i.flatShading?"#define FLAT_SHADED":"",
            i.doubleSided?"#define DOUBLE_SIDED":"",
            i.flipSided?"#define FLIP_SIDED":"",
            i.shadowMapEnabled?"#define USE_SHADOWMAP":"",
            i.shadowMapEnabled?"#define "+c:"",
            i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",
            i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",
            i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",
            i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            i.toneMapping!==n.uL?"#define TONE_MAPPING":"",
            i.toneMapping!==n.uL?A.tonemapping_pars_fragment:"",
            i.toneMapping!==n.uL?Lt("toneMapping",
            i.toneMapping):"",
            i.dithering?"#define DITHERING":"",
            i.opaque?"#define OPAQUE":"",
            A.encodings_pars_fragment,
            Ct("linearToOutputTexel",
            i.outputEncoding),
            i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",
            "\n"].filter(Pt).join("\n")),
            o=Nt(o),
            o=Dt(o,
            i),
            o=Rt(o,
            i),
            l=Nt(l),
            l=Dt(l,
            i),
            l=Rt(l,
            i),
            o=Ut(o),
            l=Ut(l),
            i.isWebGL2&&!0!==i.isRawShaderMaterial&&(x="#version 300 es\n",
            _=["precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"].join("\n")+"\n"+_,
            v=["#define varying in",
            i.glslVersion===n.LS?"":"layout(location = 0) out highp vec4 pc_fragColor;",
            i.glslVersion===n.LS?"":"#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+v);
            const M=x+v+l,
            y=Tt(a,
            35633,
            x+_+o),
            S=Tt(a,
            35632,
            M);
            if(a.attachShader(g,
            y),
            a.attachShader(g,
            S),
            void 0!==i.index0AttributeName?a.bindAttribLocation(g,
            0,
            i.index0AttributeName):!0===i.morphTargets&&a.bindAttribLocation(g,
            0,
            "position"),
            a.linkProgram(g),
            e.debug.checkShaderErrors) {
                const e=a.getProgramInfoLog(g).trim(), t=a.getShaderInfoLog(y).trim(), i=a.getShaderInfoLog(S).trim();
                let n=!0, r=!0;
                if(!1===a.getProgramParameter(g, 35714)) {
                    n=!1;
                    At(a, y, "vertex"), At(a, S, "fragment")
                }
                else""!==e||""!==t&&""!==i||(r=!1);
                r&&(this.diagnostics= {
                    runnable:n, programLog:e, vertexShader: {
                        log: t, prefix: _
                    }
                    ,
                    fragmentShader: {
                        log: i, prefix: v
                    }
                }
                )
            }
            let b,
            w;
            return a.deleteShader(y),
            a.deleteShader(S),
            this.getUniforms=function() {
                return void 0===b&&(b=new wt(a, g)), b
            }
            ,
            this.getAttributes=function() {
                return void 0===w&&(w=function(e, t) {
                    const i= {}, n=e.getProgramParameter(t, 35721);
                    for(let r=0;
                    r<n;
                    r++) {
                        const n=e.getActiveAttrib(t, r), a=n.name;
                        let s=1;
                        35674===n.type&&(s=2), 35675===n.type&&(s=3), 35676===n.type&&(s=4), i[a]= {
                            type: n.type, location: e.getAttribLocation(t, a), locationSize: s
                        }
                    }
                    return i
                }
                (a,
                g)),
                w
            }
            ,
            this.destroy=function() {
                r.releaseStatesOfProgram(this), a.deleteProgram(g), this.program=void 0
            }
            ,
            this.name=i.shaderName,
            this.id=Et++,
            this.cacheKey=t,
            this.usedTimes=1,
            this.program=g,
            this.vertexShader=y,
            this.fragmentShader=S,
            this
        }
        let kt=0;
        class Gt {
            constructor() {
                this.shaderCache=new Map, this.materialCache=new Map
            }
            update(e) {
                const t=e.vertexShader, i=e.fragmentShader, n=this._getShaderStage(t), r=this._getShaderStage(i), a=this._getShaderCacheForMaterial(e);
                return!1===a.has(n)&&(a.add(n), n.usedTimes++), !1===a.has(r)&&(a.add(r), r.usedTimes++), this
            }
            remove(e) {
                const t=this.materialCache.get(e);
                for(const e of t)e.usedTimes--, 0===e.usedTimes&&this.shaderCache.delete(e.code);
                return this.materialCache.delete(e), this
            }
            getVertexShaderID(e) {
                return this._getShaderStage(e.vertexShader).id
            }
            getFragmentShaderID(e) {
                return this._getShaderStage(e.fragmentShader).id
            }
            dispose() {
                this.shaderCache.clear(), this.materialCache.clear()
            }
            _getShaderCacheForMaterial(e) {
                const t=this.materialCache;
                let i=t.get(e);
                return void 0===i&&(i=new Set, t.set(e, i)), i
            }
            _getShaderStage(e) {
                const t=this.shaderCache;
                let i=t.get(e);
                return void 0===i&&(i=new Ht(e), t.set(e, i)), i
            }
        }
        class Ht {
            constructor(e) {
                this.id=kt++, this.code=e, this.usedTimes=0
            }
        }
        function Wt(e,
        t,
        i,
        r,
        a,
        s,
        o) {
            const l=new xe.S, c=new Gt, h=[], u=a.isWebGL2, d=a.logarithmicDepthBuffer, p=a.vertexTextures;
            let f=a.precision;
            const m= {
                MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite"
            }
            ;
            return {
                getParameters: function(s, l, h, g, _) {
                    const v=g.fog, x=_.geometry, M=s.isMeshStandardMaterial?g.environment: null, y=(s.isMeshStandardMaterial?i: t).get(s.envMap||M), S=y&&y.mapping===n.g8?y.image.height: null, b=m[s.type];
                    null!==s.precision&&(f=a.getMaxPrecision(s.precision), s.precision);
                    const w=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color, T=void 0!==w?w.length: 0;
                    let E, A, C, L, D=0;
                    if(void 0!==x.morphAttributes.position&&(D=1), void 0!==x.morphAttributes.normal&&(D=2), void 0!==x.morphAttributes.color&&(D=3), b) {
                        const e=P[b];
                        E=e.vertexShader, A=e.fragmentShader
                    }
                    else E=s.vertexShader,
                    A=s.fragmentShader,
                    c.update(s),
                    C=c.getVertexShaderID(s),
                    L=c.getFragmentShaderID(s);
                    const R=e.getRenderTarget(),
                    I=s.alphaTest>0,
                    N=s.clearcoat>0,
                    O=s.iridescence>0;
                    return {
                        isWebGL2: u, shaderID: b, shaderName: s.type, vertexShader: E, fragmentShader: A, defines: s.defines, customVertexShaderID: C, customFragmentShaderID: L, isRawShaderMaterial: !0===s.isRawShaderMaterial, glslVersion: s.glslVersion, precision: f, instancing: !0===_.isInstancedMesh, instancingColor: !0===_.isInstancedMesh&&null!==_.instanceColor, supportsVertexTextures: p, outputEncoding: null===R?e.outputEncoding: !0===R.isXRRenderTarget?R.texture.encoding: n.rn, map: !!s.map, matcap: !!s.matcap, envMap: !!y, envMapMode: y&&y.mapping, envMapCubeUVHeight: S, lightMap: !!s.lightMap, aoMap: !!s.aoMap, emissiveMap: !!s.emissiveMap, bumpMap: !!s.bumpMap, normalMap: !!s.normalMap, objectSpaceNormalMap: s.normalMapType===n.PA, tangentSpaceNormalMap: s.normalMapType===n.IO, decodeVideoTexture: !!s.map&&!0===s.map.isVideoTexture&&s.map.encoding===n.kn, clearcoat: N, clearcoatMap: N&&!!s.clearcoatMap, clearcoatRoughnessMap: N&&!!s.clearcoatRoughnessMap, clearcoatNormalMap: N&&!!s.clearcoatNormalMap, iridescence: O, iridescenceMap: O&&!!s.iridescenceMap, iridescenceThicknessMap: O&&!!s.iridescenceThicknessMap, displacementMap: !!s.displacementMap, roughnessMap: !!s.roughnessMap, metalnessMap: !!s.metalnessMap, specularMap: !!s.specularMap, specularIntensityMap: !!s.specularIntensityMap, specularColorMap: !!s.specularColorMap, opaque: !1===s.transparent&&s.blending===n.bd, alphaMap: !!s.alphaMap, alphaTest: I, gradientMap: !!s.gradientMap, sheen: s.sheen>0, sheenColorMap: !!s.sheenColorMap, sheenRoughnessMap: !!s.sheenRoughnessMap, transmission: s.transmission>0, transmissionMap: !!s.transmissionMap, thicknessMap: !!s.thicknessMap, combine: s.combine, vertexTangents: !!s.normalMap&&!!x.attributes.tangent, vertexColors: s.vertexColors, vertexAlphas: !0===s.vertexColors&&!!x.attributes.color&&4===x.attributes.color.itemSize, vertexUvs: !!(s.map||s.bumpMap||s.normalMap||s.specularMap||s.alphaMap||s.emissiveMap||s.roughnessMap||s.metalnessMap||s.clearcoatMap||s.clearcoatRoughnessMap||s.clearcoatNormalMap||s.iridescenceMap||s.iridescenceThicknessMap||s.displacementMap||s.transmissionMap||s.thicknessMap||s.specularIntensityMap||s.specularColorMap||s.sheenColorMap||s.sheenRoughnessMap), uvsVertexOnly: !(s.map||s.bumpMap||s.normalMap||s.specularMap||s.alphaMap||s.emissiveMap||s.roughnessMap||s.metalnessMap||s.clearcoatNormalMap||s.iridescenceMap||s.iridescenceThicknessMap||s.transmission>0||s.transmissionMap||s.thicknessMap||s.specularIntensityMap||s.specularColorMap||s.sheen>0||s.sheenColorMap||s.sheenRoughnessMap||!s.displacementMap), fog: !!v, useFog: !0===s.fog, fogExp2: v&&v.isFogExp2, flatShading: !!s.flatShading, sizeAttenuation: s.sizeAttenuation, logarithmicDepthBuffer: d, skinning: !0===_.isSkinnedMesh, morphTargets: void 0!==x.morphAttributes.position, morphNormals: void 0!==x.morphAttributes.normal, morphColors: void 0!==x.morphAttributes.color, morphTargetsCount: T, morphTextureStride: D, numDirLights: l.directional.length, numPointLights: l.point.length, numSpotLights: l.spot.length, numSpotLightMaps: l.spotLightMap.length, numRectAreaLights: l.rectArea.length, numHemiLights: l.hemi.length, numDirLightShadows: l.directionalShadowMap.length, numPointLightShadows: l.pointShadowMap.length, numSpotLightShadows: l.spotShadowMap.length, numSpotLightShadowsWithMaps: l.numSpotLightShadowsWithMaps, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: s.dithering, shadowMapEnabled: e.shadowMap.enabled&&h.length>0, shadowMapType: e.shadowMap.type, toneMapping: s.toneMapped?e.toneMapping: n.uL, physicallyCorrectLights: e.physicallyCorrectLights, premultipliedAlpha: s.premultipliedAlpha, doubleSided: s.side===n.eh, flipSided: s.side===n._L, useDepthPacking: !!s.depthPacking, depthPacking: s.depthPacking||0, index0AttributeName: s.index0AttributeName, extensionDerivatives: s.extensions&&s.extensions.derivatives, extensionFragDepth: s.extensions&&s.extensions.fragDepth, extensionDrawBuffers: s.extensions&&s.extensions.drawBuffers, extensionShaderTextureLOD: s.extensions&&s.extensions.shaderTextureLOD, rendererExtensionFragDepth: u||r.has("EXT_frag_depth"), rendererExtensionDrawBuffers: u||r.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: u||r.has("EXT_shader_texture_lod"), customProgramCacheKey: s.customProgramCacheKey()
                    }
                }
                ,
                getProgramCacheKey:function(t) {
                    const i=[];
                    if(t.shaderID?i.push(t.shaderID): (i.push(t.customVertexShaderID), i.push(t.customFragmentShaderID)), void 0!==t.defines)for(const e in t.defines)i.push(e), i.push(t.defines[e]);
                    return!1===t.isRawShaderMaterial&&(!function(e, t) {
                        e.push(t.precision), e.push(t.outputEncoding), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.combine), e.push(t.vertexUvs), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking)
                    }
                    (i,
                    t),
                    function(e,
                    t) {
                        l.disableAll(), t.isWebGL2&&l.enable(0);
                        t.supportsVertexTextures&&l.enable(1);
                        t.instancing&&l.enable(2);
                        t.instancingColor&&l.enable(3);
                        t.map&&l.enable(4);
                        t.matcap&&l.enable(5);
                        t.envMap&&l.enable(6);
                        t.lightMap&&l.enable(7);
                        t.aoMap&&l.enable(8);
                        t.emissiveMap&&l.enable(9);
                        t.bumpMap&&l.enable(10);
                        t.normalMap&&l.enable(11);
                        t.objectSpaceNormalMap&&l.enable(12);
                        t.tangentSpaceNormalMap&&l.enable(13);
                        t.clearcoat&&l.enable(14);
                        t.clearcoatMap&&l.enable(15);
                        t.clearcoatRoughnessMap&&l.enable(16);
                        t.clearcoatNormalMap&&l.enable(17);
                        t.iridescence&&l.enable(18);
                        t.iridescenceMap&&l.enable(19);
                        t.iridescenceThicknessMap&&l.enable(20);
                        t.displacementMap&&l.enable(21);
                        t.specularMap&&l.enable(22);
                        t.roughnessMap&&l.enable(23);
                        t.metalnessMap&&l.enable(24);
                        t.gradientMap&&l.enable(25);
                        t.alphaMap&&l.enable(26);
                        t.alphaTest&&l.enable(27);
                        t.vertexColors&&l.enable(28);
                        t.vertexAlphas&&l.enable(29);
                        t.vertexUvs&&l.enable(30);
                        t.vertexTangents&&l.enable(31);
                        t.uvsVertexOnly&&l.enable(32);
                        e.push(l.mask), l.disableAll(), t.fog&&l.enable(0);
                        t.useFog&&l.enable(1);
                        t.flatShading&&l.enable(2);
                        t.logarithmicDepthBuffer&&l.enable(3);
                        t.skinning&&l.enable(4);
                        t.morphTargets&&l.enable(5);
                        t.morphNormals&&l.enable(6);
                        t.morphColors&&l.enable(7);
                        t.premultipliedAlpha&&l.enable(8);
                        t.shadowMapEnabled&&l.enable(9);
                        t.physicallyCorrectLights&&l.enable(10);
                        t.doubleSided&&l.enable(11);
                        t.flipSided&&l.enable(12);
                        t.useDepthPacking&&l.enable(13);
                        t.dithering&&l.enable(14);
                        t.specularIntensityMap&&l.enable(15);
                        t.specularColorMap&&l.enable(16);
                        t.transmission&&l.enable(17);
                        t.transmissionMap&&l.enable(18);
                        t.thicknessMap&&l.enable(19);
                        t.sheen&&l.enable(20);
                        t.sheenColorMap&&l.enable(21);
                        t.sheenRoughnessMap&&l.enable(22);
                        t.decodeVideoTexture&&l.enable(23);
                        t.opaque&&l.enable(24);
                        e.push(l.mask)
                    }
                    (i,
                    t),
                    i.push(e.outputEncoding)),
                    i.push(t.customProgramCacheKey),
                    i.join()
                }
                ,
                getUniforms:function(e) {
                    const t=m[e.type];
                    let i;
                    if(t) {
                        const e=P[t];
                        i=C.rD.clone(e.uniforms)
                    }
                    else i=e.uniforms;
                    return i
                }
                ,
                acquireProgram:function(t,
                i) {
                    let n;
                    for(let e=0, t=h.length;
                    e<t;
                    e++) {
                        const t=h[e];
                        if(t.cacheKey===i) {
                            n=t, ++n.usedTimes;
                            break
                        }
                    }
                    return void 0===n&&(n=new Vt(e,
                    i,
                    t,
                    s),
                    h.push(n)),
                    n
                }
                ,
                releaseProgram:function(e) {
                    if(0==--e.usedTimes) {
                        const t=h.indexOf(e);
                        h[t]=h[h.length-1], h.pop(), e.destroy()
                    }
                }
                ,
                releaseShaderCache:function(e) {
                    c.remove(e)
                }
                ,
                programs:h,
                dispose:function() {
                    c.dispose()
                }
            }
        }
        function qt() {
            let e=new WeakMap;
            return {
                get: function(t) {
                    let i=e.get(t);
                    return void 0===i&&(i= {}, e.set(t, i)), i
                }
                ,
                remove:function(t) {
                    e.delete(t)
                }
                ,
                update:function(t,
                i,
                n) {
                    e.get(t)[i]=n
                }
                ,
                dispose:function() {
                    e=new WeakMap
                }
            }
        }
        function jt(e,
        t) {
            return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder: e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder: e.material.id!==t.material.id?e.material.id-t.material.id: e.z!==t.z?e.z-t.z: e.id-t.id
        }
        function Xt(e,
        t) {
            return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder: e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder: e.z!==t.z?t.z-e.z: e.id-t.id
        }
        function Yt() {
            const e=[];
            let t=0;
            const i=[], n=[], r=[];
            function a(i, n, r, a, s, o) {
                let l=e[t];
                return void 0===l?(l= {
                    id: i.id, object: i, geometry: n, material: r, groupOrder: a, renderOrder: i.renderOrder, z: s, group: o
                }
                ,
                e[t]=l):(l.id=i.id,
                l.object=i,
                l.geometry=n,
                l.material=r,
                l.groupOrder=a,
                l.renderOrder=i.renderOrder,
                l.z=s,
                l.group=o),
                t++,
                l
            }
            return {
                opaque: i, transmissive: n, transparent: r, init: function() {
                    t=0, i.length=0, n.length=0, r.length=0
                }
                ,
                push:function(e,
                t,
                s,
                o,
                l,
                c) {
                    const h=a(e, t, s, o, l, c);
                    s.transmission>0?n.push(h): !0===s.transparent?r.push(h): i.push(h)
                }
                ,
                unshift:function(e,
                t,
                s,
                o,
                l,
                c) {
                    const h=a(e, t, s, o, l, c);
                    s.transmission>0?n.unshift(h): !0===s.transparent?r.unshift(h): i.unshift(h)
                }
                ,
                finish:function() {
                    for(let i=t, n=e.length;
                    i<n;
                    i++) {
                        const t=e[i];
                        if(null===t.id)break;
                        t.id=null, t.object=null, t.geometry=null, t.material=null, t.group=null
                    }
                }
                ,
                sort:function(e,
                t) {
                    i.length>1&&i.sort(e||jt), n.length>1&&n.sort(t||Xt), r.length>1&&r.sort(t||Xt)
                }
            }
        }
        function Zt() {
            let e=new WeakMap;
            return {
                get: function(t, i) {
                    const n=e.get(t);
                    let r;
                    return void 0===n?(r=new Yt, e.set(t, [r])): i>=n.length?(r=new Yt, n.push(r)): r=n[i], r
                }
                ,
                dispose:function() {
                    e=new WeakMap
                }
            }
        }
        function Kt() {
            const e= {};
            return {
                get: function(t) {
                    if(void 0!==e[t.id])return e[t.id];
                    let i;
                    switch(t.type) {
                        case"DirectionalLight":i= {
                            direction: new a.P, color: new T.I
                        }
                        ;
                        break;
                        case"SpotLight":i= {
                            position: new a.P, direction: new a.P, color: new T.I, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0
                        }
                        ;
                        break;
                        case"PointLight":i= {
                            position: new a.P, color: new T.I, distance: 0, decay: 0
                        }
                        ;
                        break;
                        case"HemisphereLight":i= {
                            direction: new a.P, skyColor: new T.I, groundColor: new T.I
                        }
                        ;
                        break;
                        case"RectAreaLight":i= {
                            color: new T.I, position: new a.P, halfWidth: new a.P, halfHeight: new a.P
                        }
                    }
                    return e[t.id]=i,
                    i
                }
            }
        }
        let Jt=0;
        function Qt(e,
        t) {
            return(t.castShadow?2: 0)-(e.castShadow?2: 0)+(t.map?1: 0)-(e.map?1: 0)
        }
        function $t(e,
        t) {
            const i=new Kt, n=function() {
                const e= {};
                return {
                    get: function(t) {
                        if(void 0!==e[t.id])return e[t.id];
                        let i;
                        switch(t.type) {
                            case"DirectionalLight":case"SpotLight":i= {
                                shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new g.F
                            }
                            ;
                            break;
                            case"PointLight":i= {
                                shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new g.F, shadowCameraNear: 1, shadowCameraFar: 1e3
                            }
                        }
                        return e[t.id]=i,
                        i
                    }
                }
            }
            (),
            r= {
                version:0, hash: {
                    directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1
                }
                ,
                ambient:[0,
                0,
                0],
                probe:[],
                directional:[],
                directionalShadow:[],
                directionalShadowMap:[],
                directionalShadowMatrix:[],
                spot:[],
                spotLightMap:[],
                spotShadow:[],
                spotShadowMap:[],
                spotLightMatrix:[],
                rectArea:[],
                rectAreaLTC1:null,
                rectAreaLTC2:null,
                point:[],
                pointShadow:[],
                pointShadowMap:[],
                pointShadowMatrix:[],
                hemi:[],
                numSpotLightShadowsWithMaps:0
            }
            ;
            for(let e=0;
            e<9;
            e++)r.probe.push(new a.P);
            const s=new a.P,
            o=new m.y,
            l=new m.y;
            return {
                setup: function(a, s) {
                    let o=0, l=0, c=0;
                    for(let e=0;
                    e<9;
                    e++)r.probe[e].set(0, 0, 0);
                    let h=0, u=0, d=0, p=0, f=0, m=0, g=0, _=0, v=0, x=0;
                    a.sort(Qt);
                    const M=!0!==s?Math.PI: 1;
                    for(let e=0, t=a.length;
                    e<t;
                    e++) {
                        const t=a[e], s=t.color, y=t.intensity, S=t.distance, b=t.shadow&&t.shadow.map?t.shadow.map.texture: null;
                        if(t.isAmbientLight)o+=s.r*y*M, l+=s.g*y*M, c+=s.b*y*M;
                        else if(t.isLightProbe)for(let e=0;
                        e<9;
                        e++)r.probe[e].addScaledVector(t.sh.coefficients[e], y);
                        else if(t.isDirectionalLight) {
                            const e=i.get(t);
                            if(e.color.copy(t.color).multiplyScalar(t.intensity*M), t.castShadow) {
                                const e=t.shadow, i=n.get(t);
                                i.shadowBias=e.bias, i.shadowNormalBias=e.normalBias, i.shadowRadius=e.radius, i.shadowMapSize=e.mapSize, r.directionalShadow[h]=i, r.directionalShadowMap[h]=b, r.directionalShadowMatrix[h]=t.shadow.matrix, m++
                            }
                            r.directional[h]=e,
                            h++
                        }
                        else if(t.isSpotLight) {
                            const e=i.get(t);
                            e.position.setFromMatrixPosition(t.matrixWorld), e.color.copy(s).multiplyScalar(y*M), e.distance=S, e.coneCos=Math.cos(t.angle), e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)), e.decay=t.decay, r.spot[d]=e;
                            const a=t.shadow;
                            if(t.map&&(r.spotLightMap[v]=t.map, v++, a.updateMatrices(t), t.castShadow&&x++), r.spotLightMatrix[d]=a.matrix, t.castShadow) {
                                const e=n.get(t);
                                e.shadowBias=a.bias, e.shadowNormalBias=a.normalBias, e.shadowRadius=a.radius, e.shadowMapSize=a.mapSize, r.spotShadow[d]=e, r.spotShadowMap[d]=b, _++
                            }
                            d++
                        }
                        else if(t.isRectAreaLight) {
                            const e=i.get(t);
                            e.color.copy(s).multiplyScalar(y), e.halfWidth.set(.5*t.width, 0, 0), e.halfHeight.set(0, .5*t.height, 0), r.rectArea[p]=e, p++
                        }
                        else if(t.isPointLight) {
                            const e=i.get(t);
                            if(e.color.copy(t.color).multiplyScalar(t.intensity*M), e.distance=t.distance, e.decay=t.decay, t.castShadow) {
                                const e=t.shadow, i=n.get(t);
                                i.shadowBias=e.bias, i.shadowNormalBias=e.normalBias, i.shadowRadius=e.radius, i.shadowMapSize=e.mapSize, i.shadowCameraNear=e.camera.near, i.shadowCameraFar=e.camera.far, r.pointShadow[u]=i, r.pointShadowMap[u]=b, r.pointShadowMatrix[u]=t.shadow.matrix, g++
                            }
                            r.point[u]=e,
                            u++
                        }
                        else if(t.isHemisphereLight) {
                            const e=i.get(t);
                            e.skyColor.copy(t.color).multiplyScalar(y*M), e.groundColor.copy(t.groundColor).multiplyScalar(y*M), r.hemi[f]=e, f++
                        }
                    }
                    p>0&&(t.isWebGL2||!0===e.has("OES_texture_float_linear")?(r.rectAreaLTC1=L.LTC_FLOAT_1,
                    r.rectAreaLTC2=L.LTC_FLOAT_2):!0===e.has("OES_texture_half_float_linear")&&(r.rectAreaLTC1=L.LTC_HALF_1,
                    r.rectAreaLTC2=L.LTC_HALF_2)),
                    r.ambient[0]=o,
                    r.ambient[1]=l,
                    r.ambient[2]=c;
                    const y=r.hash;
                    y.directionalLength===h&&y.pointLength===u&&y.spotLength===d&&y.rectAreaLength===p&&y.hemiLength===f&&y.numDirectionalShadows===m&&y.numPointShadows===g&&y.numSpotShadows===_&&y.numSpotMaps===v||(r.directional.length=h,
                    r.spot.length=d,
                    r.rectArea.length=p,
                    r.point.length=u,
                    r.hemi.length=f,
                    r.directionalShadow.length=m,
                    r.directionalShadowMap.length=m,
                    r.pointShadow.length=g,
                    r.pointShadowMap.length=g,
                    r.spotShadow.length=_,
                    r.spotShadowMap.length=_,
                    r.directionalShadowMatrix.length=m,
                    r.pointShadowMatrix.length=g,
                    r.spotLightMatrix.length=_+v-x,
                    r.spotLightMap.length=v,
                    r.numSpotLightShadowsWithMaps=x,
                    y.directionalLength=h,
                    y.pointLength=u,
                    y.spotLength=d,
                    y.rectAreaLength=p,
                    y.hemiLength=f,
                    y.numDirectionalShadows=m,
                    y.numPointShadows=g,
                    y.numSpotShadows=_,
                    y.numSpotMaps=v,
                    r.version=Jt++)
                }
                ,
                setupView:function(e,
                t) {
                    let i=0, n=0, a=0, c=0, h=0;
                    const u=t.matrixWorldInverse;
                    for(let t=0, d=e.length;
                    t<d;
                    t++) {
                        const d=e[t];
                        if(d.isDirectionalLight) {
                            const e=r.directional[i];
                            e.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(s), e.direction.transformDirection(u), i++
                        }
                        else if(d.isSpotLight) {
                            const e=r.spot[a];
                            e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(u), e.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(s), e.direction.transformDirection(u), a++
                        }
                        else if(d.isRectAreaLight) {
                            const e=r.rectArea[c];
                            e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(u), l.identity(), o.copy(d.matrixWorld), o.premultiply(u), l.extractRotation(o), e.halfWidth.set(.5*d.width, 0, 0), e.halfHeight.set(0, .5*d.height, 0), e.halfWidth.applyMatrix4(l), e.halfHeight.applyMatrix4(l), c++
                        }
                        else if(d.isPointLight) {
                            const e=r.point[n];
                            e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(u), n++
                        }
                        else if(d.isHemisphereLight) {
                            const e=r.hemi[h];
                            e.direction.setFromMatrixPosition(d.matrixWorld), e.direction.transformDirection(u), h++
                        }
                    }
                }
                ,
                state:r
            }
        }
        function ei(e,
        t) {
            const i=new $t(e, t), n=[], r=[];
            return {
                init: function() {
                    n.length=0, r.length=0
                }
                ,
                state: {
                    lightsArray: n, shadowsArray: r, lights: i
                }
                ,
                setupLights:function(e) {
                    i.setup(n, e)
                }
                ,
                setupLightsView:function(e) {
                    i.setupView(n, e)
                }
                ,
                pushLight:function(e) {
                    n.push(e)
                }
                ,
                pushShadow:function(e) {
                    r.push(e)
                }
            }
        }
        function ti(e,
        t) {
            let i=new WeakMap;
            return {
                get: function(n) {
                    let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0;
                    const a=i.get(n);
                    let s;
                    return void 0===a?(s=new ei(e, t), i.set(n, [s])): r>=a.length?(s=new ei(e, t), a.push(s)): s=a[r], s
                }
                ,
                dispose:function() {
                    i=new WeakMap
                }
            }
        }
        var ii=i(1296);
        class ni extends ii.F {
            constructor(e) {
                super(), this.isMeshDepthMaterial=!0, this.type="MeshDepthMaterial", this.depthPacking=n.z8, this.map=null, this.alphaMap=null, this.displacementMap=null, this.displacementScale=1, this.displacementBias=0, this.wireframe=!1, this.wireframeLinewidth=1, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.depthPacking=e.depthPacking, this.map=e.map, this.alphaMap=e.alphaMap, this.displacementMap=e.displacementMap, this.displacementScale=e.displacementScale, this.displacementBias=e.displacementBias, this.wireframe=e.wireframe, this.wireframeLinewidth=e.wireframeLinewidth, this
            }
        }
        class ri extends ii.F {
            constructor(e) {
                super(), this.isMeshDistanceMaterial=!0, this.type="MeshDistanceMaterial", this.referencePosition=new a.P, this.nearDistance=1, this.farDistance=1e3, this.map=null, this.alphaMap=null, this.displacementMap=null, this.displacementScale=1, this.displacementBias=0, this.setValues(e)
            }
            copy(e) {
                return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance=e.nearDistance, this.farDistance=e.farDistance, this.map=e.map, this.alphaMap=e.alphaMap, this.displacementMap=e.displacementMap, this.displacementScale=e.displacementScale, this.displacementBias=e.displacementBias, this
            }
        }
        function ai(e,
        t,
        i) {
            let r=new f;
            const a=new g.F, s=new g.F, o=new _.L, l=new ni( {
                depthPacking: n.mS
            }
            ),
            c=new ri,
            h= {},
            u=i.maxTextureSize,
            d= {
                0: n._L, 1: n.Wl, 2: n.eh
            }
            ,
            p=new w.j( {
                defines: {
                    VSM_SAMPLES: 8
                }
                ,
                uniforms: {
                    shadow_pass: {
                        value: null
                    }
                    ,
                    resolution: {
                        value: new g.F
                    }
                    ,
                    radius: {
                        value: 4
                    }
                }
                ,
                vertexShader:"void main(){gl_Position=vec4(position,1.0);}",
                fragmentShader:"uniform sampler2D shadow_pass;uniform vec2 resolution;uniform float radius;\n#include <packing>\nvoid main(){const float samples=float(VSM_SAMPLES);float mean=0.0;float squared_mean=0.0;float uvStride=samples<=1.0?0.0:2.0/(samples-1.0);float uvStart=samples<=1.0?0.0:-1.0;for(float i=0.0;i<samples;i++){float uvOffset=uvStart+i*uvStride;\n#ifdef HORIZONTAL_PASS\nvec2 distribution=unpackRGBATo2Half(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(uvOffset,0.0)*radius)/resolution));mean+=distribution.x;squared_mean+=distribution.y*distribution.y+distribution.x*distribution.x;\n#else\nfloat depth=unpackRGBAToDepth(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(0.0,uvOffset)*radius)/resolution));mean+=depth;squared_mean+=depth*depth;\n#endif\n}mean=mean/samples;squared_mean=squared_mean/samples;float std_dev=sqrt(squared_mean-mean*mean);gl_FragColor=pack2HalfToRGBA(vec2(mean,std_dev));}"
            }
            ),
            m=p.clone();
            m.defines.HORIZONTAL_PASS=1;
            const v=new M.u;
            v.setAttribute("position",
            new y.Tl(new Float32Array([-1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5]),
            3));
            const x=new E.K(v,
            p),
            S=this;
            function b(i,
            n) {
                const r=t.update(x);
                p.defines.VSM_SAMPLES!==i.blurSamples&&(p.defines.VSM_SAMPLES=i.blurSamples, m.defines.VSM_SAMPLES=i.blurSamples, p.needsUpdate=!0, m.needsUpdate=!0), null===i.mapPass&&(i.mapPass=new z.d(a.x, a.y)), p.uniforms.shadow_pass.value=i.map.texture, p.uniforms.resolution.value=i.mapSize, p.uniforms.radius.value=i.radius, e.setRenderTarget(i.mapPass), e.clear(), e.renderBufferDirect(n, null, r, p, x, null), m.uniforms.shadow_pass.value=i.mapPass.texture, m.uniforms.resolution.value=i.mapSize, m.uniforms.radius.value=i.radius, e.setRenderTarget(i.map), e.clear(), e.renderBufferDirect(n, null, r, m, x, null)
            }
            function T(t,
            i,
            r,
            a,
            s,
            o) {
                let u=null;
                const p=!0===r.isPointLight?t.customDistanceMaterial: t.customDepthMaterial;
                if(u=void 0!==p?p: !0===r.isPointLight?c: l, e.localClippingEnabled&&!0===i.clipShadows&&Array.isArray(i.clippingPlanes)&&0!==i.clippingPlanes.length||i.displacementMap&&0!==i.displacementScale||i.alphaMap&&i.alphaTest>0) {
                    const e=u.uuid, t=i.uuid;
                    let n=h[e];
                    void 0===n&&(n= {}, h[e]=n);
                    let r=n[t];
                    void 0===r&&(r=u.clone(), n[t]=r), u=r
                }
                return u.visible=i.visible,
                u.wireframe=i.wireframe,
                o===n.dw?u.side=null!==i.shadowSide?i.shadowSide:i.side:u.side=null!==i.shadowSide?i.shadowSide:d[i.side],
                u.alphaMap=i.alphaMap,
                u.alphaTest=i.alphaTest,
                u.clipShadows=i.clipShadows,
                u.clippingPlanes=i.clippingPlanes,
                u.clipIntersection=i.clipIntersection,
                u.displacementMap=i.displacementMap,
                u.displacementScale=i.displacementScale,
                u.displacementBias=i.displacementBias,
                u.wireframeLinewidth=i.wireframeLinewidth,
                u.linewidth=i.linewidth,
                !0===r.isPointLight&&!0===u.isMeshDistanceMaterial&&(u.referencePosition.setFromMatrixPosition(r.matrixWorld),
                u.nearDistance=a,
                u.farDistance=s),
                u
            }
            function A(i,
            a,
            s,
            o,
            l) {
                if(!1===i.visible)return;
                if(i.layers.test(a.layers)&&(i.isMesh||i.isLine||i.isPoints)&&(i.castShadow||i.receiveShadow&&l===n.dw)&&(!i.frustumCulled||r.intersectsObject(i))) {
                    i.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, i.matrixWorld);
                    const n=t.update(i), r=i.material;
                    if(Array.isArray(r)) {
                        const t=n.groups;
                        for(let a=0, c=t.length;
                        a<c;
                        a++) {
                            const c=t[a], h=r[c.materialIndex];
                            if(h&&h.visible) {
                                const t=T(i, h, o, s.near, s.far, l);
                                e.renderBufferDirect(s, null, n, t, i, c)
                            }
                        }
                    }
                    else if(r.visible) {
                        const t=T(i, r, o, s.near, s.far, l);
                        e.renderBufferDirect(s, null, n, t, i, null)
                    }
                }
                const c=i.children;
                for(let e=0,
                t=c.length;
                e<t;
                e++)A(c[e],
                a,
                s,
                o,
                l)
            }
            this.enabled=!1,
            this.autoUpdate=!0,
            this.needsUpdate=!1,
            this.type=n._i,
            this.render=function(t,
            i,
            l) {
                if(!1===S.enabled)return;
                if(!1===S.autoUpdate&&!1===S.needsUpdate)return;
                if(0===t.length)return;
                const c=e.getRenderTarget(), h=e.getActiveCubeFace(), d=e.getActiveMipmapLevel(), p=e.state;
                p.setBlending(n.jF), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
                for(let c=0, h=t.length;
                c<h;
                c++) {
                    const h=t[c], d=h.shadow;
                    if(void 0===d)continue;
                    if(!1===d.autoUpdate&&!1===d.needsUpdate)continue;
                    a.copy(d.mapSize);
                    const f=d.getFrameExtents();
                    if(a.multiply(f), s.copy(d.mapSize), (a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/f.x), a.x=s.x*f.x, d.mapSize.x=s.x), a.y>u&&(s.y=Math.floor(u/f.y), a.y=s.y*f.y, d.mapSize.y=s.y)), null===d.map) {
                        const e=this.type!==n.dw? {
                            minFilter: n.Ty, magFilter: n.Ty
                        }
                        : {};
                        d.map=new z.d(a.x,
                        a.y,
                        e),
                        d.map.texture.name=h.name+".shadowMap",
                        d.camera.updateProjectionMatrix()
                    }
                    e.setRenderTarget(d.map),
                    e.clear();
                    const m=d.getViewportCount();
                    for(let e=0;
                    e<m;
                    e++) {
                        const t=d.getViewport(e);
                        o.set(s.x*t.x, s.y*t.y, s.x*t.z, s.y*t.w), p.viewport(o), d.updateMatrices(h, e), r=d.getFrustum(), A(i, l, d.camera, h, this.type)
                    }
                    !0!==d.isPointLightShadow&&this.type===n.dw&&b(d,
                    l),
                    d.needsUpdate=!1
                }
                S.needsUpdate=!1,
                e.setRenderTarget(c,
                h,
                d)
            }
        }
        function si(e,
        t,
        i) {
            const r=i.isWebGL2;
            const a=new function() {
                let t=!1;
                const i=new _.L;
                let n=null;
                const r=new _.L(0, 0, 0, 0);
                return {
                    setMask: function(i) {
                        n===i||t||(e.colorMask(i, i, i, i), n=i)
                    }
                    ,
                    setLocked:function(e) {
                        t=e
                    }
                    ,
                    setClear:function(t,
                    n,
                    a,
                    s,
                    o) {
                        !0===o&&(t*=s, n*=s, a*=s), i.set(t, n, a, s), !1===r.equals(i)&&(e.clearColor(t, n, a, s), r.copy(i))
                    }
                    ,
                    reset:function() {
                        t=!1, n=null, r.set(-1, 0, 0, 0)
                    }
                }
            }
            ,
            s=new function() {
                let t=!1, i=null, r=null, a=null;
                return {
                    setTest: function(e) {
                        e?G(2929): H(2929)
                    }
                    ,
                    setMask:function(n) {
                        i===n||t||(e.depthMask(n), i=n)
                    }
                    ,
                    setFunc:function(t) {
                        if(r!==t) {
                            if(t)switch(t) {
                                case n.BV: e.depthFunc(512);
                                break;
                                case n.Se: e.depthFunc(519);
                                break;
                                case n.Zr: e.depthFunc(513);
                                break;
                                case n.vC: e.depthFunc(515);
                                break;
                                case n.eD: e.depthFunc(514);
                                break;
                                case n.ks: e.depthFunc(518);
                                break;
                                case n.w$: e.depthFunc(516);
                                break;
                                case n.M6: e.depthFunc(517);
                                break;
                                default: e.depthFunc(515)
                            }
                            else e.depthFunc(515);
                            r=t
                        }
                    }
                    ,
                    setLocked:function(e) {
                        t=e
                    }
                    ,
                    setClear:function(t) {
                        a!==t&&(e.clearDepth(t), a=t)
                    }
                    ,
                    reset:function() {
                        t=!1, i=null, r=null, a=null
                    }
                }
            }
            ,
            o=new function() {
                let t=!1, i=null, n=null, r=null, a=null, s=null, o=null, l=null, c=null;
                return {
                    setTest: function(e) {
                        t||(e?G(2960): H(2960))
                    }
                    ,
                    setMask:function(n) {
                        i===n||t||(e.stencilMask(n), i=n)
                    }
                    ,
                    setFunc:function(t,
                    i,
                    s) {
                        n===t&&r===i&&a===s||(e.stencilFunc(t, i, s), n=t, r=i, a=s)
                    }
                    ,
                    setOp:function(t,
                    i,
                    n) {
                        s===t&&o===i&&l===n||(e.stencilOp(t, i, n), s=t, o=i, l=n)
                    }
                    ,
                    setLocked:function(e) {
                        t=e
                    }
                    ,
                    setClear:function(t) {
                        c!==t&&(e.clearStencil(t), c=t)
                    }
                    ,
                    reset:function() {
                        t=!1, i=null, n=null, r=null, a=null, s=null, o=null, l=null, c=null
                    }
                }
            }
            ,
            l=new WeakMap,
            c=new WeakMap;
            let h= {},
            u= {},
            d=new WeakMap,
            p=[],
            f=null,
            m=!1,
            g=null,
            v=null,
            x=null,
            M=null,
            y=null,
            S=null,
            b=null,
            w=!1,
            T=null,
            E=null,
            A=null,
            C=null,
            L=null;
            const P=e.getParameter(35661);
            let D=!1,
            R=0;
            const I=e.getParameter(7938);
            -1!==I.indexOf("WebGL")?(R=parseFloat(/^WebGL (\d)/.exec(I)[1]),
            D=R>=1):-1!==I.indexOf("OpenGL ES")&&(R=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),
            D=R>=2);
            let N=null,
            O= {};
            const z=e.getParameter(3088),
            U=e.getParameter(2978),
            F=(new _.L).fromArray(z),
            B=(new _.L).fromArray(U);
            function V(t,
            i,
            n) {
                const r=new Uint8Array(4), a=e.createTexture();
                e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
                for(let t=0;
                t<n;
                t++)e.texImage2D(i+t, 0, 6408, 1, 1, 0, 6408, 5121, r);
                return a
            }
            const k= {};
            function G(t) {
                !0!==h[t]&&(e.enable(t), h[t]=!0)
            }
            function H(t) {
                !1!==h[t]&&(e.disable(t), h[t]=!1)
            }
            k[3553]=V(3553,
            3553,
            1),
            k[34067]=V(34067,
            34069,
            6),
            a.setClear(0,
            0,
            0,
            1),
            s.setClear(1),
            o.setClear(0),
            G(2929),
            s.setFunc(n.vC),
            X(!1),
            Y(n.tm),
            G(2884),
            j(n.jF);
            const W= {
                [n.bG]: 32774, [n.Wb]: 32778, [n.rO]: 32779
            }
            ;
            if(r)W[n.r_]=32775,
            W[n.Sm]=32776;
            else {
                const e=t.get("EXT_blend_minmax");
                null!==e&&(W[n.r_]=e.MIN_EXT, W[n.Sm]=e.MAX_EXT)
            }
            const q= {
                [n.c8]: 0, [n.gh]: 1, [n.Kh]: 768, [n.k7]: 770, [n.Rl]: 776, [n.Vd]: 774, [n.fS]: 772, [n.iW]: 769, [n.Lg]: 771, [n.Wp]: 775, [n.Hy]: 773
            }
            ;
            function j(t,
            i,
            r,
            a,
            s,
            o,
            l,
            c) {
                if(t!==n.jF) {
                    if(!1===m&&(G(3042), m=!0), t===n.X)s=s||i, o=o||r, l=l||a, i===v&&s===y||(e.blendEquationSeparate(W[i], W[s]), v=i, y=s), r===x&&a===M&&o===S&&l===b||(e.blendFuncSeparate(q[r], q[a], q[o], q[l]), x=r, M=a, S=o, b=l), g=t, w=null;
                    else if(t!==g||c!==w) {
                        if(v===n.bG&&y===n.bG||(e.blendEquation(32774), v=n.bG, y=n.bG), c)switch(t) {
                            case n.bd: e.blendFuncSeparate(1, 771, 1, 771);
                            break;
                            case n.WM: e.blendFunc(1, 1);
                            break;
                            case n.N4: e.blendFuncSeparate(0, 769, 0, 1);
                            break;
                            case n.M5: e.blendFuncSeparate(0, 768, 0, 770)
                        }
                        else switch(t) {
                            case n.bd: e.blendFuncSeparate(770, 771, 1, 771);
                            break;
                            case n.WM: e.blendFunc(770, 1);
                            break;
                            case n.N4: e.blendFuncSeparate(0, 769, 0, 1);
                            break;
                            case n.M5: e.blendFunc(0, 768)
                        }
                        x=null,
                        M=null,
                        S=null,
                        b=null,
                        g=t,
                        w=c
                    }
                }
                else!0===m&&(H(3042),
                m=!1)
            }
            function X(t) {
                T!==t&&(t?e.frontFace(2304): e.frontFace(2305), T=t)
            }
            function Y(t) {
                t!==n.Pe?(G(2884), t!==E&&(t===n.tm?e.cullFace(1029): t===n.S2?e.cullFace(1028): e.cullFace(1032))): H(2884), E=t
            }
            function Z(t,
            i,
            n) {
                t?(G(32823), C===i&&L===n||(e.polygonOffset(i, n), C=i, L=n)): H(32823)
            }
            function K(t) {
                void 0===t&&(t=33984+P-1), N!==t&&(e.activeTexture(t), N=t)
            }
            return {
                buffers: {
                    color: a, depth: s, stencil: o
                }
                ,
                enable:G,
                disable:H,
                bindFramebuffer:function(t,
                i) {
                    return u[t]!==i&&(e.bindFramebuffer(t, i), u[t]=i, r&&(36009===t&&(u[36160]=i), 36160===t&&(u[36009]=i)), !0)
                }
                ,
                drawBuffers:function(n,
                r) {
                    let a=p, s=!1;
                    if(n)if(a=d.get(r), void 0===a&&(a=[], d.set(r, a)), n.isWebGLMultipleRenderTargets) {
                        const e=n.texture;
                        if(a.length!==e.length||36064!==a[0]) {
                            for(let t=0, i=e.length;
                            t<i;
                            t++)a[t]=36064+t;
                            a.length=e.length, s=!0
                        }
                    }
                    else 36064!==a[0]&&(a[0]=36064,
                    s=!0);
                    else 1029!==a[0]&&(a[0]=1029,
                    s=!0);
                    s&&(i.isWebGL2?e.drawBuffers(a):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a))
                }
                ,
                useProgram:function(t) {
                    return f!==t&&(e.useProgram(t), f=t, !0)
                }
                ,
                setBlending:j,
                setMaterial:function(e,
                t) {
                    e.side===n.eh?H(2884): G(2884);
                    let i=e.side===n._L;
                    t&&(i=!i), X(i), e.blending===n.bd&&!1===e.transparent?j(n.jF): j(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), s.setFunc(e.depthFunc), s.setTest(e.depthTest), s.setMask(e.depthWrite), a.setMask(e.colorWrite);
                    const r=e.stencilWrite;
                    o.setTest(r), r&&(o.setMask(e.stencilWriteMask), o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), Z(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits), !0===e.alphaToCoverage?G(32926): H(32926)
                }
                ,
                setFlipSided:X,
                setCullFace:Y,
                setLineWidth:function(t) {
                    t!==A&&(D&&e.lineWidth(t), A=t)
                }
                ,
                setPolygonOffset:Z,
                setScissorTest:function(e) {
                    e?G(3089): H(3089)
                }
                ,
                activeTexture:K,
                bindTexture:function(t,
                i) {
                    null===N&&K();
                    let n=O[N];
                    void 0===n&&(n= {
                        type: void 0, texture: void 0
                    }
                    ,
                    O[N]=n),
                    n.type===t&&n.texture===i||(e.bindTexture(t,
                    i||k[t]),
                    n.type=t,
                    n.texture=i)
                }
                ,
                unbindTexture:function() {
                    const t=O[N];
                    void 0!==t&&void 0!==t.type&&(e.bindTexture(t.type, null), t.type=void 0, t.texture=void 0)
                }
                ,
                compressedTexImage2D:function() {
                    try {
                        e.compressedTexImage2D.apply(e, arguments)
                    }
                    catch(e) {}
                }
                ,
                texImage2D:function() {
                    try {
                        e.texImage2D.apply(e, arguments)
                    }
                    catch(e) {}
                }
                ,
                texImage3D:function() {
                    try {
                        e.texImage3D.apply(e, arguments)
                    }
                    catch(e) {}
                }
                ,
                updateUBOMapping:function(t,
                i) {
                    let n=c.get(i);
                    void 0===n&&(n=new WeakMap, c.set(i, n));
                    let r=n.get(t);
                    void 0===r&&(r=e.getUniformBlockIndex(i, t.name), n.set(t, r))
                }
                ,
                uniformBlockBinding:function(t,
                i) {
                    const n=c.get(i).get(t);
                    l.get(t)!==n&&(e.uniformBlockBinding(i, n, t.__bindingPointIndex), l.set(t, n))
                }
                ,
                texStorage2D:function() {
                    try {
                        e.texStorage2D.apply(e, arguments)
                    }
                    catch(e) {}
                }
                ,
                texStorage3D:function() {
                    try {
                        e.texStorage3D.apply(e, arguments)
                    }
                    catch(e) {}
                }
                ,
                texSubImage2D:function() {
                    try {
                        e.texSubImage2D.apply(e, arguments)
                    }
                    catch(e) {}
                }
                ,
                texSubImage3D:function() {
                    try {
                        e.texSubImage3D.apply(e, arguments)
                    }
                    catch(e) {}
                }
                ,
                compressedTexSubImage2D:function() {
                    try {
                        e.compressedTexSubImage2D.apply(e, arguments)
                    }
                    catch(e) {}
                }
                ,
                scissor:function(t) {
                    !1===F.equals(t)&&(e.scissor(t.x, t.y, t.z, t.w), F.copy(t))
                }
                ,
                viewport:function(t) {
                    !1===B.equals(t)&&(e.viewport(t.x, t.y, t.z, t.w), B.copy(t))
                }
                ,
                reset:function() {
                    e.disable(3042), e.disable(2884), e.disable(2929), e.disable(32823), e.disable(3089), e.disable(2960), e.disable(32926), e.blendEquation(32774), e.blendFunc(1, 0), e.blendFuncSeparate(1, 0, 1, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(513), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(519, 0, 4294967295), e.stencilOp(7680, 7680, 7680), e.clearStencil(0), e.cullFace(1029), e.frontFace(2305), e.polygonOffset(0, 0), e.activeTexture(33984), e.bindFramebuffer(36160, null), !0===r&&(e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), h= {}, N=null, O= {}, u= {}, d=new WeakMap, p=[], f=null, m=!1, g=null, v=null, x=null, M=null, y=null, S=null, b=null, w=!1, T=null, E=null, A=null, C=null, L=null, F.set(0, 0, e.canvas.width, e.canvas.height), B.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), s.reset(), o.reset()
                }
            }
        }
        var oi=i(4222);
        function li(e,
        t,
        i,
        a,
        s,
        o,
        l) {
            const c=s.isWebGL2, h=(s.maxTextures, s.maxCubemapSize), u=s.maxTextureSize, d=s.maxSamples, p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"): null, f=/OculusBrowser/g.test(navigator.userAgent), m=new WeakMap;
            let g;
            const _=new WeakMap;
            let v=!1;
            try {
                v="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1, 1).getContext("2d")
            }
            catch(e) {}function x(e,
            t) {
                return v?new OffscreenCanvas(e, t): (0, he.c)("canvas")
            }
            function M(e,
            t,
            i,
            n) {
                let a=1;
                if((e.width>n||e.height>n)&&(a=n/Math.max(e.width, e.height)), a<1||!0===t) {
                    if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap) {
                        const n=t?r.gy: Math.floor, s=n(a*e.width), o=n(a*e.height);
                        void 0===g&&(g=x(s, o));
                        const l=i?x(s, o): g;
                        l.width=s, l.height=o;
                        return l.getContext("2d").drawImage(e, 0, 0, s, o), l
                    }
                    return e
                }
                return e
            }
            function y(e) {
                return r.wt(e.width)&&r.wt(e.height)
            }
            function S(e,
            t) {
                return e.generateMipmaps&&t&&e.minFilter!==n.Ty&&e.minFilter!==n.we
            }
            function b(t) {
                e.generateMipmap(t)
            }
            function w(i,
            r,
            a,
            s) {
                let o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];
                if(!1===c)return r;
                if(null!==i&&void 0!==e[i])return e[i];
                let l=r;
                return 6403===r&&(5126===a&&(l=33326), 5131===a&&(l=33325), 5121===a&&(l=33321)), 33319===r&&(5126===a&&(l=33328), 5131===a&&(l=33327), 5121===a&&(l=33323)), 6408===r&&(5126===a&&(l=34836), 5131===a&&(l=34842), 5121===a&&(l=s===n.kn&&!1===o?35907: 32856), 32819===a&&(l=32854), 32820===a&&(l=32855)), 33325!==l&&33326!==l&&33327!==l&&33328!==l&&34842!==l&&34836!==l||t.get("EXT_color_buffer_float"), l
            }
            function T(e,
            t,
            i) {
                return!0===S(e, i)||e.isFramebufferTexture&&e.minFilter!==n.Ty&&e.minFilter!==n.we?Math.log2(Math.max(t.width, t.height))+1: void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length: e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length: 1
            }
            function E(e) {
                return e===n.Ty||e===n.YL||e===n.aH?9728: 9729
            }
            function A(e) {
                const t=e.target;
                t.removeEventListener("dispose", A), function(e) {
                    const t=a.get(e);
                    if(void 0===t.__webglInit)return;
                    const i=e.source, n=_.get(i);
                    if(n) {
                        const r=n[t.__cacheKey];
                        r.usedTimes--, 0===r.usedTimes&&L(e), 0===Object.keys(n).length&&_.delete(i)
                    }
                    a.remove(e)
                }
                (t),
                t.isVideoTexture&&m.delete(t)
            }
            function C(t) {
                const i=t.target;
                i.removeEventListener("dispose", C), function(t) {
                    const i=t.texture, n=a.get(t), r=a.get(i);
                    void 0!==r.__webglTexture&&(e.deleteTexture(r.__webglTexture), l.memory.textures--);
                    t.depthTexture&&t.depthTexture.dispose();
                    if(t.isWebGLCubeRenderTarget)for(let t=0;
                    t<6;
                    t++)e.deleteFramebuffer(n.__webglFramebuffer[t]), n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
                    else {
                        if(e.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer)for(let t=0;
                        t<n.__webglColorRenderbuffer.length;
                        t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
                        n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)
                    }
                    if(t.isWebGLMultipleRenderTargets)for(let t=0,
                    n=i.length;
                    t<n;
                    t++) {
                        const n=a.get(i[t]);
                        n.__webglTexture&&(e.deleteTexture(n.__webglTexture), l.memory.textures--), a.remove(i[t])
                    }
                    a.remove(i),
                    a.remove(t)
                }
                (i)
            }
            function L(t) {
                const i=a.get(t);
                e.deleteTexture(i.__webglTexture);
                const n=t.source;
                delete _.get(n)[i.__cacheKey], l.memory.textures--
            }
            let P=0;
            function D(e,
            t) {
                const n=a.get(e);
                if(e.isVideoTexture&&function(e) {
                    const t=l.render.frame;
                    m.get(e)!==t&&(m.set(e, t), e.update())
                }
                (e),
                !1===e.isRenderTargetTexture&&e.version>0&&n.__version!==e.version) {
                    const i=e.image;
                    if(null===i);
                    else if(!1!==i.complete)return void z(n, e, t)
                }
                i.activeTexture(33984+t),
                i.bindTexture(3553,
                n.__webglTexture)
            }
            const R= {
                [n.rp]: 10497, [n.uW]: 33071, [n.Oo]: 33648
            }
            ,
            I= {
                [n.Ty]: 9728, [n.YL]: 9984, [n.aH]: 9986, [n.we]: 9729, [n.qy]: 9985, [n.D1]: 9987
            }
            ;
            function N(i,
            r,
            o) {
                if(o?(e.texParameteri(i, 10242, R[r.wrapS]), e.texParameteri(i, 10243, R[r.wrapT]), 32879!==i&&35866!==i||e.texParameteri(i, 32882, R[r.wrapR]), e.texParameteri(i, 10240, I[r.magFilter]), e.texParameteri(i, 10241, I[r.minFilter])): (e.texParameteri(i, 10242, 33071), e.texParameteri(i, 10243, 33071), 32879!==i&&35866!==i||e.texParameteri(i, 32882, 33071), r.wrapS!==n.uW||(r.wrapT, n.uW), e.texParameteri(i, 10240, E(r.magFilter)), e.texParameteri(i, 10241, E(r.minFilter)), r.minFilter!==n.Ty&&(r.minFilter, n.we)), !0===t.has("EXT_texture_filter_anisotropic")) {
                    const o=t.get("EXT_texture_filter_anisotropic");
                    if(r.type===n.Vz&&!1===t.has("OES_texture_float_linear"))return;
                    if(!1===c&&r.type===n.cL&&!1===t.has("OES_texture_half_float_linear"))return;
                    (r.anisotropy>1||a.get(r).__currentAnisotropy)&&(e.texParameterf(i, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, s.getMaxAnisotropy())), a.get(r).__currentAnisotropy=r.anisotropy)
                }
            }
            function O(t,
            i) {
                let n=!1;
                void 0===t.__webglInit&&(t.__webglInit=!0, i.addEventListener("dispose", A));
                const r=i.source;
                let a=_.get(r);
                void 0===a&&(a= {}, _.set(r, a));
                const s=function(e) {
                    const t=[];
                    return t.push(e.wrapS), t.push(e.wrapT), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.encoding), t.join()
                }
                (i);
                if(s!==t.__cacheKey) {
                    void 0===a[s]&&(a[s]= {
                        texture: e.createTexture(), usedTimes: 0
                    }
                    ,
                    l.memory.textures++,
                    n=!0),
                    a[s].usedTimes++;
                    const r=a[t.__cacheKey];
                    void 0!==r&&(a[t.__cacheKey].usedTimes--,
                    0===r.usedTimes&&L(i)),
                    t.__cacheKey=s,
                    t.__webglTexture=a[s].texture
                }
                return n
            }
            function z(t,
            r,
            a) {
                let s=3553;
                r.isDataArrayTexture&&(s=35866), r.isData3DTexture&&(s=32879);
                const l=O(t, r), h=r.source;
                if(i.activeTexture(33984+a), i.bindTexture(s, t.__webglTexture), h.version!==h.__currentVersion||!0===l) {
                    e.pixelStorei(37440, r.flipY), e.pixelStorei(37441, r.premultiplyAlpha), e.pixelStorei(3317, r.unpackAlignment), e.pixelStorei(37443, 0);
                    const t=function(e) {
                        return!c&&(e.wrapS!==n.uW||e.wrapT!==n.uW||e.minFilter!==n.Ty&&e.minFilter!==n.we)
                    }
                    (r)&&!1===y(r.image);
                    let a=M(r.image,
                    t,
                    !1,
                    u);
                    a=G(r,
                    a);
                    const d=y(a)||c,
                    p=o.convert(r.format,
                    r.encoding);
                    let f,
                    m=o.convert(r.type),
                    g=w(r.internalFormat,
                    p,
                    m,
                    r.encoding,
                    r.isVideoTexture);
                    N(s,
                    r,
                    d);
                    const _=r.mipmaps,
                    v=c&&!0!==r.isVideoTexture,
                    x=void 0===h.__currentVersion||!0===l,
                    E=T(r,
                    a,
                    d);
                    if(r.isDepthTexture)g=6402,
                    c?g=r.type===n.Vz?36012:r.type===n.JQ?33190:r.type===n.wJ?35056:33189:(r.type,
                    n.Vz),
                    r.format===n.qk&&6402===g&&r.type!==n.Ls&&r.type!==n.JQ&&(r.type=n.JQ,
                    m=o.convert(r.type)),
                    r.format===n.br&&6402===g&&(g=34041,
                    r.type!==n.wJ&&(r.type=n.wJ,
                    m=o.convert(r.type))),
                    x&&(v?i.texStorage2D(3553,
                    1,
                    g,
                    a.width,
                    a.height):i.texImage2D(3553,
                    0,
                    g,
                    a.width,
                    a.height,
                    0,
                    p,
                    m,
                    null));
                    else if(r.isDataTexture)if(_.length>0&&d) {
                        v&&x&&i.texStorage2D(3553, E, g, _[0].width, _[0].height);
                        for(let e=0, t=_.length;
                        e<t;
                        e++)f=_[e], v?i.texSubImage2D(3553, e, 0, 0, f.width, f.height, p, m, f.data): i.texImage2D(3553, e, g, f.width, f.height, 0, p, m, f.data);
                        r.generateMipmaps=!1
                    }
                    else v?(x&&i.texStorage2D(3553,
                    E,
                    g,
                    a.width,
                    a.height),
                    i.texSubImage2D(3553,
                    0,
                    0,
                    0,
                    a.width,
                    a.height,
                    p,
                    m,
                    a.data)):i.texImage2D(3553,
                    0,
                    g,
                    a.width,
                    a.height,
                    0,
                    p,
                    m,
                    a.data);
                    else if(r.isCompressedTexture) {
                        v&&x&&i.texStorage2D(3553, E, g, _[0].width, _[0].height);
                        for(let e=0, t=_.length;
                        e<t;
                        e++)f=_[e], r.format!==n.wk?null!==p&&(v?i.compressedTexSubImage2D(3553, e, 0, 0, f.width, f.height, p, f.data): i.compressedTexImage2D(3553, e, g, f.width, f.height, 0, f.data)): v?i.texSubImage2D(3553, e, 0, 0, f.width, f.height, p, m, f.data): i.texImage2D(3553, e, g, f.width, f.height, 0, p, m, f.data)
                    }
                    else if(r.isDataArrayTexture)v?(x&&i.texStorage3D(35866,
                    E,
                    g,
                    a.width,
                    a.height,
                    a.depth),
                    i.texSubImage3D(35866,
                    0,
                    0,
                    0,
                    0,
                    a.width,
                    a.height,
                    a.depth,
                    p,
                    m,
                    a.data)):i.texImage3D(35866,
                    0,
                    g,
                    a.width,
                    a.height,
                    a.depth,
                    0,
                    p,
                    m,
                    a.data);
                    else if(r.isData3DTexture)v?(x&&i.texStorage3D(32879,
                    E,
                    g,
                    a.width,
                    a.height,
                    a.depth),
                    i.texSubImage3D(32879,
                    0,
                    0,
                    0,
                    0,
                    a.width,
                    a.height,
                    a.depth,
                    p,
                    m,
                    a.data)):i.texImage3D(32879,
                    0,
                    g,
                    a.width,
                    a.height,
                    a.depth,
                    0,
                    p,
                    m,
                    a.data);
                    else if(r.isFramebufferTexture) {
                        if(x)if(v)i.texStorage2D(3553, E, g, a.width, a.height);
                        else {
                            let e=a.width, t=a.height;
                            for(let n=0;
                            n<E;
                            n++)i.texImage2D(3553, n, g, e, t, 0, p, m, null), e>>=1, t>>=1
                        }
                    }
                    else if(_.length>0&&d) {
                        v&&x&&i.texStorage2D(3553, E, g, _[0].width, _[0].height);
                        for(let e=0, t=_.length;
                        e<t;
                        e++)f=_[e], v?i.texSubImage2D(3553, e, 0, 0, p, m, f): i.texImage2D(3553, e, g, p, m, f);
                        r.generateMipmaps=!1
                    }
                    else v?(x&&i.texStorage2D(3553,
                    E,
                    g,
                    a.width,
                    a.height),
                    i.texSubImage2D(3553,
                    0,
                    0,
                    0,
                    p,
                    m,
                    a)):i.texImage2D(3553,
                    0,
                    g,
                    p,
                    m,
                    a);
                    S(r,
                    d)&&b(s),
                    h.__currentVersion=h.version,
                    r.onUpdate&&r.onUpdate(r)
                }
                t.__version=r.version
            }
            function U(t,
            n,
            r,
            s,
            l) {
                const c=o.convert(r.format, r.encoding), h=o.convert(r.type), u=w(r.internalFormat, c, h, r.encoding);
                a.get(n).__hasExternalTextures||(32879===l||35866===l?i.texImage3D(l, 0, u, n.width, n.height, n.depth, 0, c, h, null): i.texImage2D(l, 0, u, n.width, n.height, 0, c, h, null)), i.bindFramebuffer(36160, t), k(n)?p.framebufferTexture2DMultisampleEXT(36160, s, l, a.get(r).__webglTexture, 0, V(n)): e.framebufferTexture2D(36160, s, l, a.get(r).__webglTexture, 0), i.bindFramebuffer(36160, null)
            }
            function F(t,
            i,
            r) {
                if(e.bindRenderbuffer(36161, t), i.depthBuffer&&!i.stencilBuffer) {
                    let a=33189;
                    if(r||k(i)) {
                        const t=i.depthTexture;
                        t&&t.isDepthTexture&&(t.type===n.Vz?a=36012: t.type===n.JQ&&(a=33190));
                        const r=V(i);
                        k(i)?p.renderbufferStorageMultisampleEXT(36161, r, a, i.width, i.height): e.renderbufferStorageMultisample(36161, r, a, i.width, i.height)
                    }
                    else e.renderbufferStorage(36161,
                    a,
                    i.width,
                    i.height);
                    e.framebufferRenderbuffer(36160,
                    36096,
                    36161,
                    t)
                }
                else if(i.depthBuffer&&i.stencilBuffer) {
                    const n=V(i);
                    r&&!1===k(i)?e.renderbufferStorageMultisample(36161, n, 35056, i.width, i.height): k(i)?p.renderbufferStorageMultisampleEXT(36161, n, 35056, i.width, i.height): e.renderbufferStorage(36161, 34041, i.width, i.height), e.framebufferRenderbuffer(36160, 33306, 36161, t)
                }
                else {
                    const t=!0===i.isWebGLMultipleRenderTargets?i.texture: [i.texture];
                    for(let n=0;
                    n<t.length;
                    n++) {
                        const a=t[n], s=o.convert(a.format, a.encoding), l=o.convert(a.type), c=w(a.internalFormat, s, l, a.encoding), h=V(i);
                        r&&!1===k(i)?e.renderbufferStorageMultisample(36161, h, c, i.width, i.height): k(i)?p.renderbufferStorageMultisampleEXT(36161, h, c, i.width, i.height): e.renderbufferStorage(36161, c, i.width, i.height)
                    }
                }
                e.bindRenderbuffer(36161,
                null)
            }
            function B(t) {
                const r=a.get(t), s=!0===t.isWebGLCubeRenderTarget;
                if(t.depthTexture&&!r.__autoAllocateDepthBuffer) {
                    if(s)throw new Error("target.depthTexture not supported in Cube render targets");
                    !function(t, r) {
                        if(r&&r.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");
                        if(i.bindFramebuffer(36160, t), !r.depthTexture||!r.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                        a.get(r.depthTexture).__webglTexture&&r.depthTexture.image.width===r.width&&r.depthTexture.image.height===r.height||(r.depthTexture.image.width=r.width, r.depthTexture.image.height=r.height, r.depthTexture.needsUpdate=!0), D(r.depthTexture, 0);
                        const s=a.get(r.depthTexture).__webglTexture, o=V(r);
                        if(r.depthTexture.format===n.qk)k(r)?p.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, o): e.framebufferTexture2D(36160, 36096, 3553, s, 0);
                        else {
                            if(r.depthTexture.format!==n.br)throw new Error("Unknown depthTexture format");
                            k(r)?p.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, o): e.framebufferTexture2D(36160, 33306, 3553, s, 0)
                        }
                    }
                    (r.__webglFramebuffer,
                    t)
                }
                else if(s) {
                    r.__webglDepthbuffer=[];
                    for(let n=0;
                    n<6;
                    n++)i.bindFramebuffer(36160, r.__webglFramebuffer[n]), r.__webglDepthbuffer[n]=e.createRenderbuffer(), F(r.__webglDepthbuffer[n], t, !1)
                }
                else i.bindFramebuffer(36160,
                r.__webglFramebuffer),
                r.__webglDepthbuffer=e.createRenderbuffer(),
                F(r.__webglDepthbuffer,
                t,
                !1);
                i.bindFramebuffer(36160,
                null)
            }
            function V(e) {
                return Math.min(d, e.samples)
            }
            function k(e) {
                const i=a.get(e);
                return c&&e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==i.__useRenderToTexture
            }
            function G(e,
            i) {
                const r=e.encoding, a=e.format;
                e.type;
                return!0===e.isCompressedTexture||!0===e.isVideoTexture||e.format===n.L_||r!==n.rn&&r===n.kn&&(!1===c?!0===t.has("EXT_sRGB")&&a===n.wk?(e.format=n.L_, e.minFilter=n.we, e.generateMipmaps=!1): i=oi.P.sRGBToLinear(i): a!==n.wk||n.yw), i
            }
            this.allocateTextureUnit=function() {
                const e=P;
                return P+=1, e
            }
            ,
            this.resetTextureUnits=function() {
                P=0
            }
            ,
            this.setTexture2D=D,
            this.setTexture2DArray=function(e,
            t) {
                const n=a.get(e);
                e.version>0&&n.__version!==e.version?z(n, e, t): (i.activeTexture(33984+t), i.bindTexture(35866, n.__webglTexture))
            }
            ,
            this.setTexture3D=function(e,
            t) {
                const n=a.get(e);
                e.version>0&&n.__version!==e.version?z(n, e, t): (i.activeTexture(33984+t), i.bindTexture(32879, n.__webglTexture))
            }
            ,
            this.setTextureCube=function(t,
            r) {
                const s=a.get(t);
                t.version>0&&s.__version!==t.version?function(t, r, a) {
                    if(6!==r.image.length)return;
                    const s=O(t, r), l=r.source;
                    if(i.activeTexture(33984+a), i.bindTexture(34067, t.__webglTexture), l.version!==l.__currentVersion||!0===s) {
                        e.pixelStorei(37440, r.flipY), e.pixelStorei(37441, r.premultiplyAlpha), e.pixelStorei(3317, r.unpackAlignment), e.pixelStorei(37443, 0);
                        const t=r.isCompressedTexture||r.image[0].isCompressedTexture, a=r.image[0]&&r.image[0].isDataTexture, u=[];
                        for(let e=0;
                        e<6;
                        e++)u[e]=t||a?a?r.image[e].image: r.image[e]: M(r.image[e], !1, !0, h), u[e]=G(r, u[e]);
                        const d=u[0], p=y(d)||c, f=o.convert(r.format, r.encoding), m=o.convert(r.type), g=w(r.internalFormat, f, m, r.encoding), _=c&&!0!==r.isVideoTexture, v=void 0===l.__currentVersion||!0===s;
                        let x, E=T(r, d, p);
                        if(N(34067, r, p), t) {
                            _&&v&&i.texStorage2D(34067, E, g, d.width, d.height);
                            for(let e=0;
                            e<6;
                            e++) {
                                x=u[e].mipmaps;
                                for(let t=0;
                                t<x.length;
                                t++) {
                                    const a=x[t];
                                    r.format!==n.wk?null!==f&&(_?i.compressedTexSubImage2D(34069+e, t, 0, 0, a.width, a.height, f, a.data): i.compressedTexImage2D(34069+e, t, g, a.width, a.height, 0, a.data)): _?i.texSubImage2D(34069+e, t, 0, 0, a.width, a.height, f, m, a.data): i.texImage2D(34069+e, t, g, a.width, a.height, 0, f, m, a.data)
                                }
                            }
                        }
                        else {
                            x=r.mipmaps, _&&v&&(x.length>0&&E++, i.texStorage2D(34067, E, g, u[0].width, u[0].height));
                            for(let e=0;
                            e<6;
                            e++)if(a) {
                                _?i.texSubImage2D(34069+e, 0, 0, 0, u[e].width, u[e].height, f, m, u[e].data): i.texImage2D(34069+e, 0, g, u[e].width, u[e].height, 0, f, m, u[e].data);
                                for(let t=0;
                                t<x.length;
                                t++) {
                                    const n=x[t].image[e].image;
                                    _?i.texSubImage2D(34069+e, t+1, 0, 0, n.width, n.height, f, m, n.data): i.texImage2D(34069+e, t+1, g, n.width, n.height, 0, f, m, n.data)
                                }
                            }
                            else {
                                _?i.texSubImage2D(34069+e, 0, 0, 0, f, m, u[e]): i.texImage2D(34069+e, 0, g, f, m, u[e]);
                                for(let t=0;
                                t<x.length;
                                t++) {
                                    const n=x[t];
                                    _?i.texSubImage2D(34069+e, t+1, 0, 0, f, m, n.image[e]): i.texImage2D(34069+e, t+1, g, f, m, n.image[e])
                                }
                            }
                        }
                        S(r,
                        p)&&b(34067),
                        l.__currentVersion=l.version,
                        r.onUpdate&&r.onUpdate(r)
                    }
                    t.__version=r.version
                }
                (s,
                t,
                r):(i.activeTexture(33984+r),
                i.bindTexture(34067,
                s.__webglTexture))
            }
            ,
            this.rebindTextures=function(e,
            t,
            i) {
                const n=a.get(e);
                void 0!==t&&U(n.__webglFramebuffer, e, e.texture, 36064, 3553), void 0!==i&&B(e)
            }
            ,
            this.setupRenderTarget=function(t) {
                const n=t.texture, r=a.get(t), h=a.get(n);
                t.addEventListener("dispose", C), !0!==t.isWebGLMultipleRenderTargets&&(void 0===h.__webglTexture&&(h.__webglTexture=e.createTexture()), h.__version=n.version, l.memory.textures++);
                const u=!0===t.isWebGLCubeRenderTarget, d=!0===t.isWebGLMultipleRenderTargets, p=y(t)||c;
                if(u) {
                    r.__webglFramebuffer=[];
                    for(let t=0;
                    t<6;
                    t++)r.__webglFramebuffer[t]=e.createFramebuffer()
                }
                else {
                    if(r.__webglFramebuffer=e.createFramebuffer(), d&&s.drawBuffers) {
                        const i=t.texture;
                        for(let t=0, n=i.length;
                        t<n;
                        t++) {
                            const n=a.get(i[t]);
                            void 0===n.__webglTexture&&(n.__webglTexture=e.createTexture(), l.memory.textures++)
                        }
                    }
                    if(c&&t.samples>0&&!1===k(t)) {
                        const a=d?n: [n];
                        r.__webglMultisampledFramebuffer=e.createFramebuffer(), r.__webglColorRenderbuffer=[], i.bindFramebuffer(36160, r.__webglMultisampledFramebuffer);
                        for(let i=0;
                        i<a.length;
                        i++) {
                            const n=a[i];
                            r.__webglColorRenderbuffer[i]=e.createRenderbuffer(), e.bindRenderbuffer(36161, r.__webglColorRenderbuffer[i]);
                            const s=o.convert(n.format, n.encoding), l=o.convert(n.type), c=w(n.internalFormat, s, l, n.encoding), h=V(t);
                            e.renderbufferStorageMultisample(36161, h, c, t.width, t.height), e.framebufferRenderbuffer(36160, 36064+i, 36161, r.__webglColorRenderbuffer[i])
                        }
                        e.bindRenderbuffer(36161,
                        null),
                        t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),
                        F(r.__webglDepthRenderbuffer,
                        t,
                        !0)),
                        i.bindFramebuffer(36160,
                        null)
                    }
                }
                if(u) {
                    i.bindTexture(34067, h.__webglTexture), N(34067, n, p);
                    for(let e=0;
                    e<6;
                    e++)U(r.__webglFramebuffer[e], t, n, 36064, 34069+e);
                    S(n, p)&&b(34067), i.unbindTexture()
                }
                else if(d) {
                    const e=t.texture;
                    for(let n=0, s=e.length;
                    n<s;
                    n++) {
                        const s=e[n], o=a.get(s);
                        i.bindTexture(3553, o.__webglTexture), N(3553, s, p), U(r.__webglFramebuffer, t, s, 36064+n, 3553), S(s, p)&&b(3553)
                    }
                    i.unbindTexture()
                }
                else {
                    let e=3553;
                    (t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&c&&(e=t.isWebGL3DRenderTarget?32879: 35866), i.bindTexture(e, h.__webglTexture), N(e, n, p), U(r.__webglFramebuffer, t, n, 36064, e), S(n, p)&&b(e), i.unbindTexture()
                }
                t.depthBuffer&&B(t)
            }
            ,
            this.updateRenderTargetMipmap=function(e) {
                const t=y(e)||c, n=!0===e.isWebGLMultipleRenderTargets?e.texture: [e.texture];
                for(let r=0, s=n.length;
                r<s;
                r++) {
                    const s=n[r];
                    if(S(s, t)) {
                        const t=e.isWebGLCubeRenderTarget?34067: 3553, n=a.get(s).__webglTexture;
                        i.bindTexture(t, n), b(t), i.unbindTexture()
                    }
                }
            }
            ,
            this.updateMultisampleRenderTarget=function(t) {
                if(c&&t.samples>0&&!1===k(t)) {
                    const n=t.isWebGLMultipleRenderTargets?t.texture: [t.texture], r=t.width, s=t.height;
                    let o=16384;
                    const l=[], c=t.stencilBuffer?33306: 36096, h=a.get(t), u=!0===t.isWebGLMultipleRenderTargets;
                    if(u)for(let t=0;
                    t<n.length;
                    t++)i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064+t, 36161, null), i.bindFramebuffer(36160, h.__webglFramebuffer), e.framebufferTexture2D(36009, 36064+t, 3553, null, 0);
                    i.bindFramebuffer(36008, h.__webglMultisampledFramebuffer), i.bindFramebuffer(36009, h.__webglFramebuffer);
                    for(let i=0;
                    i<n.length;
                    i++) {
                        l.push(36064+i), t.depthBuffer&&l.push(c);
                        const d=void 0!==h.__ignoreDepthValues&&h.__ignoreDepthValues;
                        if(!1===d&&(t.depthBuffer&&(o|=256), t.stencilBuffer&&(o|=1024)), u&&e.framebufferRenderbuffer(36008, 36064, 36161, h.__webglColorRenderbuffer[i]), !0===d&&(e.invalidateFramebuffer(36008, [c]), e.invalidateFramebuffer(36009, [c])), u) {
                            const t=a.get(n[i]).__webglTexture;
                            e.framebufferTexture2D(36009, 36064, 3553, t, 0)
                        }
                        e.blitFramebuffer(0,
                        0,
                        r,
                        s,
                        0,
                        0,
                        r,
                        s,
                        o,
                        9728),
                        f&&e.invalidateFramebuffer(36008,
                        l)
                    }
                    if(i.bindFramebuffer(36008,
                    null),
                    i.bindFramebuffer(36009,
                    null),
                    u)for(let t=0;
                    t<n.length;
                    t++) {
                        i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064+t, 36161, h.__webglColorRenderbuffer[t]);
                        const r=a.get(n[t]).__webglTexture;
                        i.bindFramebuffer(36160, h.__webglFramebuffer), e.framebufferTexture2D(36009, 36064+t, 3553, r, 0)
                    }
                    i.bindFramebuffer(36009,
                    h.__webglMultisampledFramebuffer)
                }
            }
            ,
            this.setupDepthRenderbuffer=B,
            this.setupFrameBufferTexture=U,
            this.useMultisampledRTT=k
        }
        function ci(e,
        t,
        i) {
            const r=i.isWebGL2;
            return {
                convert: function(i) {
                    let a, s=arguments.length>1&&void 0!==arguments[1]?arguments[1]: null;
                    if(i===n.yw)return 5121;
                    if(i===n.k0)return 32819;
                    if(i===n.ir)return 32820;
                    if(i===n.T9)return 5120;
                    if(i===n.iA)return 5122;
                    if(i===n.Ls)return 5123;
                    if(i===n.Kz)return 5124;
                    if(i===n.JQ)return 5125;
                    if(i===n.Vz)return 5126;
                    if(i===n.cL)return r?5131: (a=t.get("OES_texture_half_float"), null!==a?a.HALF_FLOAT_OES: null);
                    if(i===n.OT)return 6406;
                    if(i===n.wk)return 6408;
                    if(i===n.Y8)return 6409;
                    if(i===n.cR)return 6410;
                    if(i===n.qk)return 6402;
                    if(i===n.br)return 34041;
                    if(i===n.hE)return 6403;
                    if(i===n.UC)return 6408;
                    if(i===n.L_)return a=t.get("EXT_sRGB"), null!==a?a.SRGB_ALPHA_EXT: null;
                    if(i===n.D9)return 36244;
                    if(i===n.av)return 33319;
                    if(i===n.Ct)return 33320;
                    if(i===n.E2)return 36249;
                    if(i===n.wu||i===n.BF||i===n.v3||i===n.IL)if(s===n.kn) {
                        if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"), null===a)return null;
                        if(i===n.wu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if(i===n.BF)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if(i===n.v3)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if(i===n.IL)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                    }
                    else {
                        if(a=t.get("WEBGL_compressed_texture_s3tc"), null===a)return null;
                        if(i===n.wu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if(i===n.BF)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if(i===n.v3)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if(i===n.IL)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
                    }
                    if(i===n._A||i===n.M9||i===n.e||i===n.C) {
                        if(a=t.get("WEBGL_compressed_texture_pvrtc"), null===a)return null;
                        if(i===n._A)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        if(i===n.M9)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        if(i===n.e)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        if(i===n.C)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                    }
                    if(i===n.ft)return a=t.get("WEBGL_compressed_texture_etc1"),
                    null!==a?a.COMPRESSED_RGB_ETC1_WEBGL:null;
                    if(i===n.l0||i===n.ek) {
                        if(a=t.get("WEBGL_compressed_texture_etc"), null===a)return null;
                        if(i===n.l0)return s===n.kn?a.COMPRESSED_SRGB8_ETC2: a.COMPRESSED_RGB8_ETC2;
                        if(i===n.ek)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: a.COMPRESSED_RGBA8_ETC2_EAC
                    }
                    if(i===n.pt||i===n.jZ||i===n.y2||i===n.gi||i===n.Dj||i===n.BG||i===n.NY||i===n.xJ||i===n.pK||i===n.GG||i===n.Gi||i===n.FU||i===n.ii||i===n.Sv) {
                        if(a=t.get("WEBGL_compressed_texture_astc"), null===a)return null;
                        if(i===n.pt)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                        if(i===n.jZ)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                        if(i===n.y2)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                        if(i===n.gi)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                        if(i===n.Dj)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                        if(i===n.BG)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                        if(i===n.NY)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                        if(i===n.xJ)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                        if(i===n.pK)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                        if(i===n.GG)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                        if(i===n.Gi)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                        if(i===n.FU)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                        if(i===n.ii)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                        if(i===n.Sv)return s===n.kn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: a.COMPRESSED_RGBA_ASTC_12x12_KHR
                    }
                    if(i===n.bs) {
                        if(a=t.get("EXT_texture_compression_bptc"), null===a)return null;
                        if(i===n.bs)return s===n.kn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT: a.COMPRESSED_RGBA_BPTC_UNORM_EXT
                    }
                    return i===n.wJ?r?34042:(a=t.get("WEBGL_depth_texture"),
                    null!==a?a.UNSIGNED_INT_24_8_WEBGL:null):void 0!==e[i]?e[i]:null
                }
            }
        }
        class hi extends F.c {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [];
                super(), this.isArrayCamera=!0, this.cameras=e
            }
        }
        var ui=i(1214),
        di=i(3669);
        const pi= {
            type: "move"
        }
        ;
        class fi {
            constructor() {
                this._targetRay=null, this._grip=null, this._hand=null
            }
            getHandSpace() {
                return null===this._hand&&(this._hand=new di.Z, this._hand.matrixAutoUpdate=!1, this._hand.visible=!1, this._hand.joints= {}, this._hand.inputState= {
                    pinching: !1
                }
                ),
                this._hand
            }
            getTargetRaySpace() {
                return null===this._targetRay&&(this._targetRay=new di.Z, this._targetRay.matrixAutoUpdate=!1, this._targetRay.visible=!1, this._targetRay.hasLinearVelocity=!1, this._targetRay.linearVelocity=new a.P, this._targetRay.hasAngularVelocity=!1, this._targetRay.angularVelocity=new a.P), this._targetRay
            }
            getGripSpace() {
                return null===this._grip&&(this._grip=new di.Z, this._grip.matrixAutoUpdate=!1, this._grip.visible=!1, this._grip.hasLinearVelocity=!1, this._grip.linearVelocity=new a.P, this._grip.hasAngularVelocity=!1, this._grip.angularVelocity=new a.P), this._grip
            }
            dispatchEvent(e) {
                return null!==this._targetRay&&this._targetRay.dispatchEvent(e), null!==this._grip&&this._grip.dispatchEvent(e), null!==this._hand&&this._hand.dispatchEvent(e), this
            }
            disconnect(e) {
                return this.dispatchEvent( {
                    type: "disconnected", data: e
                }
                ),
                null!==this._targetRay&&(this._targetRay.visible=!1),
                null!==this._grip&&(this._grip.visible=!1),
                null!==this._hand&&(this._hand.visible=!1),
                this
            }
            update(e,
            t,
            i) {
                let n=null, r=null, a=null;
                const s=this._targetRay, o=this._grip, l=this._hand;
                if(e&&"visible-blurred"!==t.session.visibilityState) {
                    if(l&&e.hand) {
                        a=!0;
                        for(const n of e.hand.values()) {
                            const e=t.getJointPose(n, i);
                            if(void 0===l.joints[n.jointName]) {
                                const e=new di.Z;
                                e.matrixAutoUpdate=!1, e.visible=!1, l.joints[n.jointName]=e, l.add(e)
                            }
                            const r=l.joints[n.jointName];
                            null!==e&&(r.matrix.fromArray(e.transform.matrix),
                            r.matrix.decompose(r.position,
                            r.rotation,
                            r.scale),
                            r.jointRadius=e.radius),
                            r.visible=null!==e
                        }
                        const n=l.joints["index-finger-tip"],
                        r=l.joints["thumb-tip"],
                        s=n.position.distanceTo(r.position),
                        o=.02,
                        c=.005;
                        l.inputState.pinching&&s>o+c?(l.inputState.pinching=!1,
                        this.dispatchEvent( {
                            type: "pinchend", handedness: e.handedness, target: this
                        }
                        )):!l.inputState.pinching&&s<=o-c&&(l.inputState.pinching=!0,
                        this.dispatchEvent( {
                            type: "pinchstart", handedness: e.handedness, target: this
                        }
                        ))
                    }
                    else null!==o&&e.gripSpace&&(r=t.getPose(e.gripSpace,
                    i),
                    null!==r&&(o.matrix.fromArray(r.transform.matrix),
                    o.matrix.decompose(o.position,
                    o.rotation,
                    o.scale),
                    r.linearVelocity?(o.hasLinearVelocity=!0,
                    o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,
                    r.angularVelocity?(o.hasAngularVelocity=!0,
                    o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));
                    null!==s&&(n=t.getPose(e.targetRaySpace,
                    i),
                    null===n&&null!==r&&(n=r),
                    null!==n&&(s.matrix.fromArray(n.transform.matrix),
                    s.matrix.decompose(s.position,
                    s.rotation,
                    s.scale),
                    n.linearVelocity?(s.hasLinearVelocity=!0,
                    s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,
                    n.angularVelocity?(s.hasAngularVelocity=!0,
                    s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,
                    this.dispatchEvent(pi)))
                }
                return null!==s&&(s.visible=null!==n),
                null!==o&&(o.visible=null!==r),
                null!==l&&(l.visible=null!==a),
                this
            }
        }
        class mi extends k.x {
            constructor(e, t, i, r, a, s, o, l, c, h) {
                if((h=void 0!==h?h: n.qk)!==n.qk&&h!==n.br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                void 0===i&&h===n.qk&&(i=n.JQ), void 0===i&&h===n.br&&(i=n.wJ), super(null, r, a, s, o, l, h, i, c), this.isDepthTexture=!0, this.image= {
                    width: e, height: t
                }
                ,
                this.magFilter=void 0!==o?o:n.Ty,
                this.minFilter=void 0!==l?l:n.Ty,
                this.flipY=!1,
                this.generateMipmaps=!1
            }
        }
        class gi extends ui.p {
            constructor(e, t) {
                super();
                const i=this;
                let r=null, s=1, o=null, l="local-floor", c=null, h=null, u=null, d=null, p=null, f=null;
                const m=t.getContextAttributes();
                let g=null, x=null;
                const M=[], y=[], S=new F.c;
                S.layers.enable(1), S.viewport=new _.L;
                const b=new F.c;
                b.layers.enable(2), b.viewport=new _.L;
                const w=[S, b], T=new hi;
                T.layers.enable(1), T.layers.enable(2);
                let E=null, A=null;
                function C(e) {
                    const t=y.indexOf(e.inputSource);
                    if(-1===t)return;
                    const i=M[t];
                    void 0!==i&&i.dispatchEvent( {
                        type: e.type, data: e.inputSource
                    }
                    )
                }
                function L() {
                    r.removeEventListener("select", C), r.removeEventListener("selectstart", C), r.removeEventListener("selectend", C), r.removeEventListener("squeeze", C), r.removeEventListener("squeezestart", C), r.removeEventListener("squeezeend", C), r.removeEventListener("end", L), r.removeEventListener("inputsourceschange", P);
                    for(let e=0;
                    e<M.length;
                    e++) {
                        const t=y[e];
                        null!==t&&(y[e]=null, M[e].disconnect(t))
                    }
                    E=null,
                    A=null,
                    e.setRenderTarget(g),
                    p=null,
                    d=null,
                    u=null,
                    r=null,
                    x=null,
                    O.stop(),
                    i.isPresenting=!1,
                    i.dispatchEvent( {
                        type: "sessionend"
                    }
                    )
                }
                function P(e) {
                    for(let t=0;
                    t<e.removed.length;
                    t++) {
                        const i=e.removed[t], n=y.indexOf(i);
                        n>=0&&(y[n]=null, M[n].dispatchEvent( {
                            type: "disconnected", data: i
                        }
                        ))
                    }
                    for(let t=0;
                    t<e.added.length;
                    t++) {
                        const i=e.added[t];
                        let n=y.indexOf(i);
                        if(-1===n) {
                            for(let e=0;
                            e<M.length;
                            e++) {
                                if(e>=y.length) {
                                    y.push(i), n=e;
                                    break
                                }
                                if(null===y[e]) {
                                    y[e]=i, n=e;
                                    break
                                }
                            }
                            if(-1===n)break
                        }
                        const r=M[n];
                        r&&r.dispatchEvent( {
                            type: "connected", data: i
                        }
                        )
                    }
                }
                this.cameraAutoUpdate=!0,
                this.enabled=!1,
                this.isPresenting=!1,
                this.getController=function(e) {
                    let t=M[e];
                    return void 0===t&&(t=new fi, M[e]=t), t.getTargetRaySpace()
                }
                ,
                this.getControllerGrip=function(e) {
                    let t=M[e];
                    return void 0===t&&(t=new fi, M[e]=t), t.getGripSpace()
                }
                ,
                this.getHand=function(e) {
                    let t=M[e];
                    return void 0===t&&(t=new fi, M[e]=t), t.getHandSpace()
                }
                ,
                this.setFramebufferScaleFactor=function(e) {
                    s=e, i.isPresenting
                }
                ,
                this.setReferenceSpaceType=function(e) {
                    l=e, i.isPresenting
                }
                ,
                this.getReferenceSpace=function() {
                    return c||o
                }
                ,
                this.setReferenceSpace=function(e) {
                    c=e
                }
                ,
                this.getBaseLayer=function() {
                    return null!==d?d: p
                }
                ,
                this.getBinding=function() {
                    return u
                }
                ,
                this.getFrame=function() {
                    return f
                }
                ,
                this.getSession=function() {
                    return r
                }
                ,
                this.setSession=async function(a) {
                    if(r=a, null!==r) {
                        if(g=e.getRenderTarget(), r.addEventListener("select", C), r.addEventListener("selectstart", C), r.addEventListener("selectend", C), r.addEventListener("squeeze", C), r.addEventListener("squeezestart", C), r.addEventListener("squeezeend", C), r.addEventListener("end", L), r.addEventListener("inputsourceschange", P), !0!==m.xrCompatible&&await t.makeXRCompatible(), void 0===r.renderState.layers||!1===e.capabilities.isWebGL2) {
                            const i= {
                                antialias: void 0!==r.renderState.layers||m.antialias, alpha: m.alpha, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: s
                            }
                            ;
                            p=new XRWebGLLayer(r,
                            t,
                            i),
                            r.updateRenderState( {
                                baseLayer: p
                            }
                            ),
                            x=new z.d(p.framebufferWidth,
                            p.framebufferHeight,
                            {
                                format: n.wk, type: n.yw, encoding: e.outputEncoding, stencilBuffer: m.stencil
                            }
                            )
                        }
                        else {
                            let i=null, a=null, o=null;
                            m.depth&&(o=m.stencil?35056: 33190, i=m.stencil?n.br: n.qk, a=m.stencil?n.wJ: n.JQ);
                            const l= {
                                colorFormat: 32856, depthFormat: o, scaleFactor: s
                            }
                            ;
                            u=new XRWebGLBinding(r,
                            t),
                            d=u.createProjectionLayer(l),
                            r.updateRenderState( {
                                layers: [d]
                            }
                            ),
                            x=new z.d(d.textureWidth,
                            d.textureHeight,
                            {
                                format: n.wk, type: n.yw, depthTexture: new mi(d.textureWidth, d.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, i), stencilBuffer: m.stencil, encoding: e.outputEncoding, samples: m.antialias?4: 0
                            }
                            );
                            e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues
                        }
                        x.isXRRenderTarget=!0,
                        this.setFoveation(1),
                        c=null,
                        o=await r.requestReferenceSpace(l),
                        O.setContext(r),
                        O.start(),
                        i.isPresenting=!0,
                        i.dispatchEvent( {
                            type: "sessionstart"
                        }
                        )
                    }
                }
                ;
                const D=new a.P,
                R=new a.P;
                function I(e,
                t) {
                    null===t?e.matrixWorld.copy(e.matrix): e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert()
                }
                this.updateCamera=function(e) {
                    if(null===r)return;
                    T.near=b.near=S.near=e.near, T.far=b.far=S.far=e.far, E===T.near&&A===T.far||(r.updateRenderState( {
                        depthNear: T.near, depthFar: T.far
                    }
                    ),
                    E=T.near,
                    A=T.far);
                    const t=e.parent,
                    i=T.cameras;
                    I(T,
                    t);
                    for(let e=0;
                    e<i.length;
                    e++)I(i[e],
                    t);
                    T.matrixWorld.decompose(T.position,
                    T.quaternion,
                    T.scale),
                    e.matrix.copy(T.matrix),
                    e.matrix.decompose(e.position,
                    e.quaternion,
                    e.scale);
                    const n=e.children;
                    for(let e=0,
                    t=n.length;
                    e<t;
                    e++)n[e].updateMatrixWorld(!0);
                    2===i.length?function(e,
                    t,
                    i) {
                        D.setFromMatrixPosition(t.matrixWorld), R.setFromMatrixPosition(i.matrixWorld);
                        const n=D.distanceTo(R), r=t.projectionMatrix.elements, a=i.projectionMatrix.elements, s=r[14]/(r[10]-1), o=r[14]/(r[10]+1), l=(r[9]+1)/r[5], c=(r[9]-1)/r[5], h=(r[8]-1)/r[0], u=(a[8]+1)/a[0], d=s*h, p=s*u, f=n/(-h+u), m=f*-h;
                        t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(m), e.translateZ(f), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert();
                        const g=s+f, _=o+f, v=d-m, x=p+(n-m), M=l*o/_*g, y=c*o/_*g;
                        e.projectionMatrix.makePerspective(v, x, M, y, g, _)
                    }
                    (T,
                    S,
                    b):T.projectionMatrix.copy(S.projectionMatrix)
                }
                ,
                this.getCamera=function() {
                    return T
                }
                ,
                this.getFoveation=function() {
                    return null!==d?d.fixedFoveation: null!==p?p.fixedFoveation: void 0
                }
                ,
                this.setFoveation=function(e) {
                    null!==d&&(d.fixedFoveation=e), null!==p&&void 0!==p.fixedFoveation&&(p.fixedFoveation=e)
                }
                ;
                let N=null;
                const O=new v;
                O.setAnimationLoop((function(t,
                i) {
                    if(h=i.getViewerPose(c||o), f=i, null!==h) {
                        const t=h.views;
                        null!==p&&(e.setRenderTargetFramebuffer(x, p.framebuffer), e.setRenderTarget(x));
                        let i=!1;
                        t.length!==T.cameras.length&&(T.cameras.length=0, i=!0);
                        for(let n=0;
                        n<t.length;
                        n++) {
                            const r=t[n];
                            let a=null;
                            if(null!==p)a=p.getViewport(r);
                            else {
                                const t=u.getViewSubImage(d, r);
                                a=t.viewport, 0===n&&(e.setRenderTargetTextures(x, t.colorTexture, d.ignoreDepthValues?void 0: t.depthStencilTexture), e.setRenderTarget(x))
                            }
                            let s=w[n];
                            void 0===s&&(s=new F.c,
                            s.layers.enable(n),
                            s.viewport=new _.L,
                            w[n]=s),
                            s.matrix.fromArray(r.transform.matrix),
                            s.projectionMatrix.fromArray(r.projectionMatrix),
                            s.viewport.set(a.x,
                            a.y,
                            a.width,
                            a.height),
                            0===n&&T.matrix.copy(s.matrix),
                            !0===i&&T.cameras.push(s)
                        }
                    }
                    for(let e=0;
                    e<M.length;
                    e++) {
                        const t=y[e], n=M[e];
                        null!==t&&void 0!==n&&n.update(t, i, c||o)
                    }
                    N&&N(t,
                    i),
                    f=null
                }
                )),
                this.setAnimationLoop=function(e) {
                    N=e
                }
                ,
                this.dispose=function() {}
            }
        }
        function _i(e,
        t) {
            function i(i, r) {
                i.opacity.value=r.opacity, r.color&&i.diffuse.value.copy(r.color), r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map&&(i.map.value=r.map), r.alphaMap&&(i.alphaMap.value=r.alphaMap), r.bumpMap&&(i.bumpMap.value=r.bumpMap, i.bumpScale.value=r.bumpScale, r.side===n._L&&(i.bumpScale.value*=-1)), r.displacementMap&&(i.displacementMap.value=r.displacementMap, i.displacementScale.value=r.displacementScale, i.displacementBias.value=r.displacementBias), r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap), r.normalMap&&(i.normalMap.value=r.normalMap, i.normalScale.value.copy(r.normalScale), r.side===n._L&&i.normalScale.value.negate()), r.specularMap&&(i.specularMap.value=r.specularMap), r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);
                const a=t.get(r).envMap;
                if(a&&(i.envMap.value=a, i.flipEnvMap.value=a.isCubeTexture&&!1===a.isRenderTargetTexture?-1: 1, i.reflectivity.value=r.reflectivity, i.ior.value=r.ior, i.refractionRatio.value=r.refractionRatio), r.lightMap) {
                    i.lightMap.value=r.lightMap;
                    const t=!0!==e.physicallyCorrectLights?Math.PI: 1;
                    i.lightMapIntensity.value=r.lightMapIntensity*t
                }
                let s,
                o;
                r.aoMap&&(i.aoMap.value=r.aoMap,
                i.aoMapIntensity.value=r.aoMapIntensity),
                r.map?s=r.map:r.specularMap?s=r.specularMap:r.displacementMap?s=r.displacementMap:r.normalMap?s=r.normalMap:r.bumpMap?s=r.bumpMap:r.roughnessMap?s=r.roughnessMap:r.metalnessMap?s=r.metalnessMap:r.alphaMap?s=r.alphaMap:r.emissiveMap?s=r.emissiveMap:r.clearcoatMap?s=r.clearcoatMap:r.clearcoatNormalMap?s=r.clearcoatNormalMap:r.clearcoatRoughnessMap?s=r.clearcoatRoughnessMap:r.iridescenceMap?s=r.iridescenceMap:r.iridescenceThicknessMap?s=r.iridescenceThicknessMap:r.specularIntensityMap?s=r.specularIntensityMap:r.specularColorMap?s=r.specularColorMap:r.transmissionMap?s=r.transmissionMap:r.thicknessMap?s=r.thicknessMap:r.sheenColorMap?s=r.sheenColorMap:r.sheenRoughnessMap&&(s=r.sheenRoughnessMap),
                void 0!==s&&(s.isWebGLRenderTarget&&(s=s.texture),
                !0===s.matrixAutoUpdate&&s.updateMatrix(),
                i.uvTransform.value.copy(s.matrix)),
                r.aoMap?o=r.aoMap:r.lightMap&&(o=r.lightMap),
                void 0!==o&&(o.isWebGLRenderTarget&&(o=o.texture),
                !0===o.matrixAutoUpdate&&o.updateMatrix(),
                i.uv2Transform.value.copy(o.matrix))
            }
            return {
                refreshFogUniforms: function(e, t) {
                    e.fogColor.value.copy(t.color), t.isFog?(e.fogNear.value=t.near, e.fogFar.value=t.far): t.isFogExp2&&(e.fogDensity.value=t.density)
                }
                ,
                refreshMaterialUniforms:function(e,
                r,
                a,
                s,
                o) {
                    r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(e, r): r.isMeshToonMaterial?(i(e, r), function(e, t) {
                        t.gradientMap&&(e.gradientMap.value=t.gradientMap)
                    }
                    (e,
                    r)):r.isMeshPhongMaterial?(i(e,
                    r),
                    function(e,
                    t) {
                        e.specular.value.copy(t.specular), e.shininess.value=Math.max(t.shininess, 1e-4)
                    }
                    (e,
                    r)):r.isMeshStandardMaterial?(i(e,
                    r),
                    function(e,
                    i) {
                        e.roughness.value=i.roughness, e.metalness.value=i.metalness, i.roughnessMap&&(e.roughnessMap.value=i.roughnessMap);
                        i.metalnessMap&&(e.metalnessMap.value=i.metalnessMap);
                        t.get(i).envMap&&(e.envMapIntensity.value=i.envMapIntensity)
                    }
                    (e,
                    r),
                    r.isMeshPhysicalMaterial&&function(e,
                    t,
                    i) {
                        e.ior.value=t.ior, t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value=t.sheenRoughness, t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap), t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap));
                        t.clearcoat>0&&(e.clearcoat.value=t.clearcoat, e.clearcoatRoughness.value=t.clearcoatRoughness, t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap), t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap), t.clearcoatNormalMap&&(e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), e.clearcoatNormalMap.value=t.clearcoatNormalMap, t.side===n._L&&e.clearcoatNormalScale.value.negate()));
                        t.iridescence>0&&(e.iridescence.value=t.iridescence, e.iridescenceIOR.value=t.iridescenceIOR, e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1], t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap), t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap));
                        t.transmission>0&&(e.transmission.value=t.transmission, e.transmissionSamplerMap.value=i.texture, e.transmissionSamplerSize.value.set(i.width, i.height), t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap), e.thickness.value=t.thickness, t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap), e.attenuationDistance.value=t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor));
                        e.specularIntensity.value=t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap);
                        t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap)
                    }
                    (e,
                    r,
                    o)):r.isMeshMatcapMaterial?(i(e,
                    r),
                    function(e,
                    t) {
                        t.matcap&&(e.matcap.value=t.matcap)
                    }
                    (e,
                    r)):r.isMeshDepthMaterial?i(e,
                    r):r.isMeshDistanceMaterial?(i(e,
                    r),
                    function(e,
                    t) {
                        e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value=t.nearDistance, e.farDistance.value=t.farDistance
                    }
                    (e,
                    r)):r.isMeshNormalMaterial?i(e,
                    r):r.isLineBasicMaterial?(function(e,
                    t) {
                        e.diffuse.value.copy(t.color), e.opacity.value=t.opacity
                    }
                    (e,
                    r),
                    r.isLineDashedMaterial&&function(e,
                    t) {
                        e.dashSize.value=t.dashSize, e.totalSize.value=t.dashSize+t.gapSize, e.scale.value=t.scale
                    }
                    (e,
                    r)):r.isPointsMaterial?function(e,
                    t,
                    i,
                    n) {
                        e.diffuse.value.copy(t.color), e.opacity.value=t.opacity, e.size.value=t.size*i, e.scale.value=.5*n, t.map&&(e.map.value=t.map);
                        t.alphaMap&&(e.alphaMap.value=t.alphaMap);
                        t.alphaTest>0&&(e.alphaTest.value=t.alphaTest);
                        let r;
                        t.map?r=t.map: t.alphaMap&&(r=t.alphaMap);
                        void 0!==r&&(!0===r.matrixAutoUpdate&&r.updateMatrix(), e.uvTransform.value.copy(r.matrix))
                    }
                    (e,
                    r,
                    a,
                    s):r.isSpriteMaterial?function(e,
                    t) {
                        e.diffuse.value.copy(t.color), e.opacity.value=t.opacity, e.rotation.value=t.rotation, t.map&&(e.map.value=t.map);
                        t.alphaMap&&(e.alphaMap.value=t.alphaMap);
                        t.alphaTest>0&&(e.alphaTest.value=t.alphaTest);
                        let i;
                        t.map?i=t.map: t.alphaMap&&(i=t.alphaMap);
                        void 0!==i&&(!0===i.matrixAutoUpdate&&i.updateMatrix(), e.uvTransform.value.copy(i.matrix))
                    }
                    (e,
                    r):r.isShadowMaterial?(e.color.value.copy(r.color),
                    e.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)
                }
            }
        }
        function vi(e,
        t,
        i,
        n) {
            let r= {}, a= {}, s=[];
            const o=i.isWebGL2?e.getParameter(35375): 0;
            function l(e, t, i) {
                const n=e.value;
                if(void 0===i[t])return i[t]="number"==typeof n?n: n.clone(), !0;
                if("number"==typeof n) {
                    if(i[t]!==n)return i[t]=n, !0
                }
                else {
                    const e=i[t];
                    if(!1===e.equals(n))return e.copy(n), !0
                }
                return!1
            }
            function c(e) {
                const t=e.value, i= {
                    boundary: 0, storage: 0
                }
                ;
                return"number"==typeof t?(i.boundary=4,
                i.storage=4):t.isVector2?(i.boundary=8,
                i.storage=8):t.isVector3||t.isColor?(i.boundary=16,
                i.storage=12):t.isVector4?(i.boundary=16,
                i.storage=16):t.isMatrix3?(i.boundary=48,
                i.storage=48):t.isMatrix4?(i.boundary=64,
                i.storage=64):t.isTexture,
                i
            }
            function h(t) {
                const i=t.target;
                i.removeEventListener("dispose", h);
                const n=s.indexOf(i.__bindingPointIndex);
                s.splice(n, 1), e.deleteBuffer(r[i.id]), delete r[i.id], delete a[i.id]
            }
            return {
                bind: function(e, t) {
                    const i=t.program;
                    n.uniformBlockBinding(e, i)
                }
                ,
                update:function(i,
                u) {
                    let d=r[i.id];
                    void 0===d&&(!function(e) {
                        const t=e.uniforms;
                        let i=0;
                        const n=16;
                        let r=0;
                        for(let e=0, a=t.length;
                        e<a;
                        e++) {
                            const a=t[e], s=c(a);
                            if(a.__data=new Float32Array(s.storage/Float32Array.BYTES_PER_ELEMENT), a.__offset=i, e>0) {
                                r=i%n;
                                const e=n-r;
                                0!==r&&e-s.boundary<0&&(i+=n-r, a.__offset=i)
                            }
                            i+=s.storage
                        }
                        r=i%n,
                        r>0&&(i+=n-r);
                        e.__size=i,
                        e.__cache= {}
                    }
                    (i),
                    d=function(t) {
                        const i=function() {
                            for(let e=0;
                            e<o;
                            e++)if(-1===s.indexOf(e))return s.push(e), e;
                            return 0
                        }
                        ();
                        t.__bindingPointIndex=i;
                        const n=e.createBuffer(),
                        r=t.__size,
                        a=t.usage;
                        return e.bindBuffer(35345,
                        n),
                        e.bufferData(35345,
                        r,
                        a),
                        e.bindBuffer(35345,
                        null),
                        e.bindBufferBase(35345,
                        i,
                        n),
                        n
                    }
                    (i),
                    r[i.id]=d,
                    i.addEventListener("dispose",
                    h));
                    const p=u.program;
                    n.updateUBOMapping(i,
                    p);
                    const f=t.render.frame;
                    a[i.id]!==f&&(!function(t) {
                        const i=r[t.id], n=t.uniforms, a=t.__cache;
                        e.bindBuffer(35345, i);
                        for(let t=0, i=n.length;
                        t<i;
                        t++) {
                            const i=n[t];
                            if(!0===l(i, t, a)) {
                                const t=i.value, n=i.__offset;
                                "number"==typeof t?(i.__data[0]=t, e.bufferSubData(35345, n, i.__data)): (i.value.isMatrix3?(i.__data[0]=i.value.elements[0], i.__data[1]=i.value.elements[1], i.__data[2]=i.value.elements[2], i.__data[3]=i.value.elements[0], i.__data[4]=i.value.elements[3], i.__data[5]=i.value.elements[4], i.__data[6]=i.value.elements[5], i.__data[7]=i.value.elements[0], i.__data[8]=i.value.elements[6], i.__data[9]=i.value.elements[7], i.__data[10]=i.value.elements[8], i.__data[11]=i.value.elements[0]): t.toArray(i.__data), e.bufferSubData(35345, n, i.__data))
                            }
                        }
                        e.bindBuffer(35345,
                        null)
                    }
                    (i),
                    a[i.id]=f)
                }
                ,
                dispose:function() {
                    for(const t in r)e.deleteBuffer(r[t]);
                    s=[], r= {}, a= {}
                }
            }
        }
        function xi() {
            const e=(0, he.c)("canvas");
            return e.style.display="block", e
        }
        function Mi() {
            let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: {};
            this.isWebGLRenderer=!0;
            const t=void 0!==e.canvas?e.canvas: xi(), i=void 0!==e.context?e.context: null, s=void 0===e.depth||e.depth, o=void 0===e.stencil||e.stencil, l=void 0!==e.antialias&&e.antialias, c=void 0===e.premultipliedAlpha||e.premultipliedAlpha, h=void 0!==e.preserveDrawingBuffer&&e.preserveDrawingBuffer, u=void 0!==e.powerPreference?e.powerPreference: "default", d=void 0!==e.failIfMajorPerformanceCaveat&&e.failIfMajorPerformanceCaveat;
            let p;
            p=null!==i?i.getContextAttributes().alpha: void 0!==e.alpha&&e.alpha;
            let M=null, y=null;
            const S=[], b=[];
            this.domElement=t, this.debug= {
                checkShaderErrors: !0
            }
            ,
            this.autoClear=!0,
            this.autoClearColor=!0,
            this.autoClearDepth=!0,
            this.autoClearStencil=!0,
            this.sortObjects=!0,
            this.clippingPlanes=[],
            this.localClippingEnabled=!1,
            this.outputEncoding=n.rn,
            this.physicallyCorrectLights=!1,
            this.toneMapping=n.uL,
            this.toneMappingExposure=1,
            Object.defineProperties(this,
            {
                gammaFactor: {
                    get: function() {
                        return 2
                    }
                    ,
                    set:function() {}
                }
            }
            );
            const w=this;
            let T=!1,
            E=0,
            A=0,
            C=null,
            L=-1,
            P=null;
            const U=new _.L,
            F=new _.L;
            let B=null,
            V=t.width,
            k=t.height,
            G=1,
            H=null,
            q=null;
            const j=new _.L(0,
            0,
            V,
            k),
            X=new _.L(0,
            0,
            V,
            k);
            let Y=!1;
            const Z=new f;
            let K=!1,
            J=!1,
            Q=null;
            const $=new m.y,
            ee=new g.F,
            te=new a.P,
            ie= {
                background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0
            }
            ;
            function ne() {
                return null===C?G: 1
            }
            let re,
            ae,
            se,
            oe,
            he,
            fe,
            me,
            ge,
            xe,
            Me,
            ye,
            Se,
            be,
            we,
            Te,
            Ee,
            Ae,
            Ce,
            Le,
            Pe,
            De,
            Re,
            Ie,
            Ne,
            Oe=i;
            function ze(e,
            i) {
                for(let n=0;
                n<e.length;
                n++) {
                    const r=e[n], a=t.getContext(r, i);
                    if(null!==a)return a
                }
                return null
            }
            try {
                const e= {
                    alpha: !0, depth: s, stencil: o, antialias: l, premultipliedAlpha: c, preserveDrawingBuffer: h, powerPreference: u, failIfMajorPerformanceCaveat: d
                }
                ;
                if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r$ { n.UZ }`),
                t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ve,!1),
                t.addEventListener("webglcontextcreationerror",ke,!1),null===Oe) {
                    const t=["webgl2", "webgl", "experimental-webgl"];
                    if(!0===w.isWebGL1Renderer&&t.shift(), Oe=ze(t, e), null===Oe)throw ze(t)?new Error("Error creating WebGL context with your selected attributes."): new Error("Error creating WebGL context.")
                }
                void 0===Oe.getShaderPrecisionFormat&&(Oe.getShaderPrecisionFormat=function() {
                    return {
                        rangeMin: 1, rangeMax: 1, precision: 1
                    }
                }
                )
            }
            catch(e) {
                throw e
            }
            function Ue() {
                re=new ce(Oe), ae=new N(Oe, re, e), re.init(ae), Re=new ci(Oe, re, ae), se=new si(Oe, re, ae), oe=new pe(Oe), he=new qt, fe=new li(Oe, re, se, he, ae, Re, oe), me=new W(w), ge=new le(w), xe=new x(Oe, ae), Ie=new R(Oe, re, xe, ae), Me=new ue(Oe, xe, oe, Ie), ye=new ve(Oe, Me, xe, oe), Le=new _e(Oe, ae, fe), Ee=new O(he), Se=new Wt(w, me, ge, re, ae, Ie, Ee), be=new _i(w, he), we=new Zt, Te=new ti(re, ae), Ce=new D(w, me, se, ye, p, c), Ae=new ai(w, ye, ae), Ne=new vi(Oe, oe, ae, se), Pe=new I(Oe, re, oe, ae), De=new de(Oe, re, oe, ae), oe.programs=Se.programs, w.capabilities=ae, w.extensions=re, w.properties=he, w.renderLists=we, w.shadowMap=Ae, w.state=se, w.info=oe
            }
            Ue();
            const Fe=new gi(w,
            Oe);
            function Be(e) {
                e.preventDefault(), T=!0
            }
            function Ve() {
                T=!1;
                const e=oe.autoReset, t=Ae.enabled, i=Ae.autoUpdate, n=Ae.needsUpdate, r=Ae.type;
                Ue(), oe.autoReset=e, Ae.enabled=t, Ae.autoUpdate=i, Ae.needsUpdate=n, Ae.type=r
            }
            function ke(e) {}function Ge(e) {
                const t=e.target;
                t.removeEventListener("dispose", Ge), He(t)
            }
            function He(e) {
                We(e), he.remove(e)
            }
            function We(e) {
                const t=he.get(e).programs;
                void 0!==t&&(t.forEach((function(e) {
                    Se.releaseProgram(e)
                }
                )),
                e.isShaderMaterial&&Se.releaseShaderCache(e))
            }
            this.xr=Fe,
            this.getContext=function() {
                return Oe
            }
            ,
            this.getContextAttributes=function() {
                return Oe.getContextAttributes()
            }
            ,
            this.forceContextLoss=function() {
                const e=re.get("WEBGL_lose_context");
                e&&e.loseContext()
            }
            ,
            this.forceContextRestore=function() {
                const e=re.get("WEBGL_lose_context");
                e&&e.restoreContext()
            }
            ,
            this.getPixelRatio=function() {
                return G
            }
            ,
            this.setPixelRatio=function(e) {
                void 0!==e&&(G=e, this.setSize(V, k, !1))
            }
            ,
            this.getSize=function(e) {
                return e.set(V, k)
            }
            ,
            this.setSize=function(e,
            i,
            n) {
                Fe.isPresenting||(V=e, k=i, t.width=Math.floor(e*G), t.height=Math.floor(i*G), !1!==n&&(t.style.width=e+"px", t.style.height=i+"px"), this.setViewport(0, 0, e, i))
            }
            ,
            this.getDrawingBufferSize=function(e) {
                return e.set(V*G, k*G).floor()
            }
            ,
            this.setDrawingBufferSize=function(e,
            i,
            n) {
                V=e, k=i, G=n, t.width=Math.floor(e*n), t.height=Math.floor(i*n), this.setViewport(0, 0, e, i)
            }
            ,
            this.getCurrentViewport=function(e) {
                return e.copy(U)
            }
            ,
            this.getViewport=function(e) {
                return e.copy(j)
            }
            ,
            this.setViewport=function(e,
            t,
            i,
            n) {
                e.isVector4?j.set(e.x, e.y, e.z, e.w): j.set(e, t, i, n), se.viewport(U.copy(j).multiplyScalar(G).floor())
            }
            ,
            this.getScissor=function(e) {
                return e.copy(X)
            }
            ,
            this.setScissor=function(e,
            t,
            i,
            n) {
                e.isVector4?X.set(e.x, e.y, e.z, e.w): X.set(e, t, i, n), se.scissor(F.copy(X).multiplyScalar(G).floor())
            }
            ,
            this.getScissorTest=function() {
                return Y
            }
            ,
            this.setScissorTest=function(e) {
                se.setScissorTest(Y=e)
            }
            ,
            this.setOpaqueSort=function(e) {
                H=e
            }
            ,
            this.setTransparentSort=function(e) {
                q=e
            }
            ,
            this.getClearColor=function(e) {
                return e.copy(Ce.getClearColor())
            }
            ,
            this.setClearColor=function() {
                Ce.setClearColor.apply(Ce, arguments)
            }
            ,
            this.getClearAlpha=function() {
                return Ce.getClearAlpha()
            }
            ,
            this.setClearAlpha=function() {
                Ce.setClearAlpha.apply(Ce, arguments)
            }
            ,
            this.clear=function() {
                let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0], t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1], i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2], n=0;
                e&&(n|=16384), t&&(n|=256), i&&(n|=1024), Oe.clear(n)
            }
            ,
            this.clearColor=function() {
                this.clear(!0, !1, !1)
            }
            ,
            this.clearDepth=function() {
                this.clear(!1, !0, !1)
            }
            ,
            this.clearStencil=function() {
                this.clear(!1, !1, !0)
            }
            ,
            this.dispose=function() {
                t.removeEventListener("webglcontextlost", Be, !1), t.removeEventListener("webglcontextrestored", Ve, !1), t.removeEventListener("webglcontextcreationerror", ke, !1), we.dispose(), Te.dispose(), he.dispose(), me.dispose(), ge.dispose(), ye.dispose(), Ie.dispose(), Ne.dispose(), Se.dispose(), Fe.dispose(), Fe.removeEventListener("sessionstart", Xe), Fe.removeEventListener("sessionend", Ye), Q&&(Q.dispose(), Q=null), Ze.stop()
            }
            ,
            this.renderBufferDirect=function(e,
            t,
            i,
            n,
            r,
            a) {
                null===t&&(t=ie);
                const s=r.isMesh&&r.matrixWorld.determinant()<0, o=nt(e, t, i, n, r);
                se.setMaterial(n, s);
                let l=i.index;
                const c=i.attributes.position;
                if(null===l) {
                    if(void 0===c||0===c.count)return
                }
                else if(0===l.count)return;
                let h,
                u=1;
                !0===n.wireframe&&(l=Me.getWireframeAttribute(i),
                u=2),
                Ie.setup(r,
                n,
                o,
                i,
                l);
                let d=Pe;
                null!==l&&(h=xe.get(l),
                d=De,
                d.setIndex(h));
                const p=null!==l?l.count:c.count,
                f=i.drawRange.start*u,
                m=i.drawRange.count*u,
                g=null!==a?a.start*u:0,
                _=null!==a?a.count*u:1/0,
                v=Math.max(f,
                g),
                x=Math.min(p,
                f+m,
                g+_)-1,
                M=Math.max(0,
                x-v+1);
                if(0!==M) {
                    if(r.isMesh)!0===n.wireframe?(se.setLineWidth(n.wireframeLinewidth*ne()), d.setMode(1)): d.setMode(4);
                    else if(r.isLine) {
                        let e=n.linewidth;
                        void 0===e&&(e=1), se.setLineWidth(e*ne()), r.isLineSegments?d.setMode(1): r.isLineLoop?d.setMode(2): d.setMode(3)
                    }
                    else r.isPoints?d.setMode(0):r.isSprite&&d.setMode(4);
                    if(r.isInstancedMesh)d.renderInstances(v,
                    M,
                    r.count);
                    else if(i.isInstancedBufferGeometry) {
                        const e=Math.min(i.instanceCount, i._maxInstanceCount);
                        d.renderInstances(v, M, e)
                    }
                    else d.render(v,
                    M)
                }
            }
            ,
            this.compile=function(e,
            t) {
                function i(e, t, i) {
                    !0===e.transparent&&e.side===n.eh?(e.side=n._L, e.needsUpdate=!0, tt(e, t, i), e.side=n.Wl, e.needsUpdate=!0, tt(e, t, i), e.side=n.eh): tt(e, t, i)
                }
                y=Te.get(e),
                y.init(),
                b.push(y),
                e.traverseVisible((function(e) {
                    e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e), e.castShadow&&y.pushShadow(e))
                }
                )),
                y.setupLights(w.physicallyCorrectLights),
                e.traverse((function(t) {
                    const n=t.material;
                    if(n)if(Array.isArray(n))for(let r=0;
                    r<n.length;
                    r++) {
                        i(n[r], e, t)
                    }
                    else i(n,
                    e,
                    t)
                }
                )),
                b.pop(),
                y=null
            }
            ;
            let qe=null;
            function je(e) {
                qe&&qe(e)
            }
            function Xe() {
                Ze.stop()
            }
            function Ye() {
                Ze.start()
            }
            const Ze=new v;
            function Ke(e,
            t,
            i,
            n) {
                if(!1===e.visible)return;
                if(e.layers.test(t.layers))if(e.isGroup)i=e.renderOrder;
                else if(e.isLOD)!0===e.autoUpdate&&e.update(t);
                else if(e.isLight)y.pushLight(e), e.castShadow&&y.pushShadow(e);
                else if(e.isSprite) {
                    if(!e.frustumCulled||Z.intersectsSprite(e)) {
                        n&&te.setFromMatrixPosition(e.matrixWorld).applyMatrix4($);
                        const t=ye.update(e), r=e.material;
                        r.visible&&M.push(e, t, r, i, te.z, null)
                    }
                }
                else if((e.isMesh||e.isLine||e.isPoints)&&(e.isSkinnedMesh&&e.skeleton.frame!==oe.render.frame&&(e.skeleton.update(),
                e.skeleton.frame=oe.render.frame),
                !e.frustumCulled||Z.intersectsObject(e))) {
                    n&&te.setFromMatrixPosition(e.matrixWorld).applyMatrix4($);
                    const t=ye.update(e), r=e.material;
                    if(Array.isArray(r)) {
                        const n=t.groups;
                        for(let a=0, s=n.length;
                        a<s;
                        a++) {
                            const s=n[a], o=r[s.materialIndex];
                            o&&o.visible&&M.push(e, t, o, i, te.z, s)
                        }
                    }
                    else r.visible&&M.push(e,
                    t,
                    r,
                    i,
                    te.z,
                    null)
                }
                const r=e.children;
                for(let e=0,
                a=r.length;
                e<a;
                e++)Ke(r[e],
                t,
                i,
                n)
            }
            function Je(e,
            t,
            i,
            n) {
                const r=e.opaque, a=e.transmissive, s=e.transparent;
                y.setupLightsView(i), a.length>0&&Qe(r, t, i), n&&se.viewport(U.copy(n)), r.length>0&&$e(r, t, i), a.length>0&&$e(a, t, i), s.length>0&&$e(s, t, i), se.buffers.depth.setTest(!0), se.buffers.depth.setMask(!0), se.buffers.color.setMask(!0), se.setPolygonOffset(!1)
            }
            function Qe(e,
            t,
            i) {
                const a=ae.isWebGL2;
                null===Q&&(Q=new z.d(1, 1, {
                    generateMipmaps: !0, type: re.has("EXT_color_buffer_half_float")?n.cL: n.yw, minFilter: n.D1, samples: a&&!0===l?4: 0
                }
                )),
                w.getDrawingBufferSize(ee),
                a?Q.setSize(ee.x,
                ee.y):Q.setSize((0,
                r.gy)(ee.x),
                (0,
                r.gy)(ee.y));
                const s=w.getRenderTarget();
                w.setRenderTarget(Q),
                w.clear();
                const o=w.toneMapping;
                w.toneMapping=n.uL,
                $e(e,
                t,
                i),
                w.toneMapping=o,
                fe.updateMultisampleRenderTarget(Q),
                fe.updateRenderTargetMipmap(Q),
                w.setRenderTarget(s)
            }
            function $e(e,
            t,
            i) {
                const n=!0===t.isScene?t.overrideMaterial: null;
                for(let r=0, a=e.length;
                r<a;
                r++) {
                    const a=e[r], s=a.object, o=a.geometry, l=null===n?a.material: n, c=a.group;
                    s.layers.test(i.layers)&&et(s, t, i, o, l, c)
                }
            }
            function et(e,
            t,
            i,
            r,
            a,
            s) {
                e.onBeforeRender(w, t, i, r, a, s), e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), a.onBeforeRender(w, t, i, r, e, s), !0===a.transparent&&a.side===n.eh?(a.side=n._L, a.needsUpdate=!0, w.renderBufferDirect(i, t, r, a, e, s), a.side=n.Wl, a.needsUpdate=!0, w.renderBufferDirect(i, t, r, a, e, s), a.side=n.eh): w.renderBufferDirect(i, t, r, a, e, s), e.onAfterRender(w, t, i, r, a, s)
            }
            function tt(e,
            t,
            i) {
                !0!==t.isScene&&(t=ie);
                const n=he.get(e), r=y.state.lights, a=y.state.shadowsArray, s=r.state.version, o=Se.getParameters(e, r.state, a, t, i), l=Se.getProgramCacheKey(o);
                let c=n.programs;
                n.environment=e.isMeshStandardMaterial?t.environment: null, n.fog=t.fog, n.envMap=(e.isMeshStandardMaterial?ge: me).get(e.envMap||n.environment), void 0===c&&(e.addEventListener("dispose", Ge), c=new Map, n.programs=c);
                let h=c.get(l);
                if(void 0!==h) {
                    if(n.currentProgram===h&&n.lightsStateVersion===s)return it(e, o), h
                }
                else o.uniforms=Se.getUniforms(e),
                e.onBuild(i,
                o,
                w),
                e.onBeforeCompile(o,
                w),
                h=Se.acquireProgram(o,
                l),
                c.set(l,
                h),
                n.uniforms=o.uniforms;
                const u=n.uniforms;
                (e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(u.clippingPlanes=Ee.uniform),
                it(e,
                o),
                n.needsLights=at(e),
                n.lightsStateVersion=s,
                n.needsLights&&(u.ambientLightColor.value=r.state.ambient,
                u.lightProbe.value=r.state.probe,
                u.directionalLights.value=r.state.directional,
                u.directionalLightShadows.value=r.state.directionalShadow,
                u.spotLights.value=r.state.spot,
                u.spotLightShadows.value=r.state.spotShadow,
                u.rectAreaLights.value=r.state.rectArea,
                u.ltc_1.value=r.state.rectAreaLTC1,
                u.ltc_2.value=r.state.rectAreaLTC2,
                u.pointLights.value=r.state.point,
                u.pointLightShadows.value=r.state.pointShadow,
                u.hemisphereLights.value=r.state.hemi,
                u.directionalShadowMap.value=r.state.directionalShadowMap,
                u.directionalShadowMatrix.value=r.state.directionalShadowMatrix,
                u.spotShadowMap.value=r.state.spotShadowMap,
                u.spotLightMatrix.value=r.state.spotLightMatrix,
                u.spotLightMap.value=r.state.spotLightMap,
                u.pointShadowMap.value=r.state.pointShadowMap,
                u.pointShadowMatrix.value=r.state.pointShadowMatrix);
                const d=h.getUniforms(),
                p=wt.seqWithValue(d.seq,
                u);
                return n.currentProgram=h,
                n.uniformsList=p,
                h
            }
            function it(e,
            t) {
                const i=he.get(e);
                i.outputEncoding=t.outputEncoding, i.instancing=t.instancing, i.skinning=t.skinning, i.morphTargets=t.morphTargets, i.morphNormals=t.morphNormals, i.morphColors=t.morphColors, i.morphTargetsCount=t.morphTargetsCount, i.numClippingPlanes=t.numClippingPlanes, i.numIntersection=t.numClipIntersection, i.vertexAlphas=t.vertexAlphas, i.vertexTangents=t.vertexTangents, i.toneMapping=t.toneMapping
            }
            function nt(e,
            t,
            i,
            r,
            a) {
                !0!==t.isScene&&(t=ie), fe.resetTextureUnits();
                const s=t.fog, o=r.isMeshStandardMaterial?t.environment: null, l=null===C?w.outputEncoding: !0===C.isXRRenderTarget?C.texture.encoding: n.rn, c=(r.isMeshStandardMaterial?ge: me).get(r.envMap||o), h=!0===r.vertexColors&&!!i.attributes.color&&4===i.attributes.color.itemSize, u=!!r.normalMap&&!!i.attributes.tangent, d=!!i.morphAttributes.position, p=!!i.morphAttributes.normal, f=!!i.morphAttributes.color, m=r.toneMapped?w.toneMapping: n.uL, g=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color, _=void 0!==g?g.length: 0, v=he.get(r), x=y.state.lights;
                if(!0===K&&(!0===J||e!==P)) {
                    const t=e===P&&r.id===L;
                    Ee.setState(r, e, t)
                }
                let M=!1;
                r.version===v.__version?v.needsLights&&v.lightsStateVersion!==x.state.version||v.outputEncoding!==l||a.isInstancedMesh&&!1===v.instancing?M=!0:a.isInstancedMesh||!0!==v.instancing?a.isSkinnedMesh&&!1===v.skinning?M=!0:a.isSkinnedMesh||!0!==v.skinning?v.envMap!==c||!0===r.fog&&v.fog!==s?M=!0:void 0===v.numClippingPlanes||v.numClippingPlanes===Ee.numPlanes&&v.numIntersection===Ee.numIntersection?(v.vertexAlphas!==h||v.vertexTangents!==u||v.morphTargets!==d||v.morphNormals!==p||v.morphColors!==f||v.toneMapping!==m||!0===ae.isWebGL2&&v.morphTargetsCount!==_)&&(M=!0):M=!0:M=!0:M=!0:(M=!0,
                v.__version=r.version);
                let S=v.currentProgram;
                !0===M&&(S=tt(r,
                t,
                a));
                let b=!1,
                T=!1,
                E=!1;
                const A=S.getUniforms(),
                D=v.uniforms;
                if(se.useProgram(S.program)&&(b=!0,
                T=!0,
                E=!0),
                r.id!==L&&(L=r.id,
                T=!0),
                b||P!==e) {
                    if(A.setValue(Oe, "projectionMatrix", e.projectionMatrix), ae.logarithmicDepthBuffer&&A.setValue(Oe, "logDepthBufFC", 2/(Math.log(e.far+1)/Math.LN2)), P!==e&&(P=e, T=!0, E=!0), r.isShaderMaterial||r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshStandardMaterial||r.envMap) {
                        const t=A.map.cameraPosition;
                        void 0!==t&&t.setValue(Oe, te.setFromMatrixPosition(e.matrixWorld))
                    }
                    (r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(Oe,
                    "isOrthographic",
                    !0===e.isOrthographicCamera),
                    (r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial||r.isShadowMaterial||a.isSkinnedMesh)&&A.setValue(Oe,
                    "viewMatrix",
                    e.matrixWorldInverse)
                }
                if(a.isSkinnedMesh) {
                    A.setOptional(Oe, a, "bindMatrix"), A.setOptional(Oe, a, "bindMatrixInverse");
                    const e=a.skeleton;
                    e&&ae.floatVertexTextures&&(null===e.boneTexture&&e.computeBoneTexture(), A.setValue(Oe, "boneTexture", e.boneTexture, fe), A.setValue(Oe, "boneTextureSize", e.boneTextureSize))
                }
                const R=i.morphAttributes;
                if((void 0!==R.position||void 0!==R.normal||void 0!==R.color&&!0===ae.isWebGL2)&&Le.update(a,
                i,
                r,
                S),
                (T||v.receiveShadow!==a.receiveShadow)&&(v.receiveShadow=a.receiveShadow,
                A.setValue(Oe,
                "receiveShadow",
                a.receiveShadow)),
                r.isMeshGouraudMaterial&&null!==r.envMap&&(D.envMap.value=c,
                D.flipEnvMap.value=c.isCubeTexture&&!1===c.isRenderTargetTexture?-1:1),
                T&&(A.setValue(Oe,
                "toneMappingExposure",
                w.toneMappingExposure),
                v.needsLights&&rt(D,
                E),
                s&&!0===r.fog&&be.refreshFogUniforms(D,
                s),
                be.refreshMaterialUniforms(D,
                r,
                G,
                k,
                Q),
                wt.upload(Oe,
                v.uniformsList,
                D,
                fe)),
                r.isShaderMaterial&&!0===r.uniformsNeedUpdate&&(wt.upload(Oe,
                v.uniformsList,
                D,
                fe),
                r.uniformsNeedUpdate=!1),
                r.isSpriteMaterial&&A.setValue(Oe,
                "center",
                a.center),
                A.setValue(Oe,
                "modelViewMatrix",
                a.modelViewMatrix),
                A.setValue(Oe,
                "normalMatrix",
                a.normalMatrix),
                A.setValue(Oe,
                "modelMatrix",
                a.matrixWorld),
                r.isShaderMaterial||r.isRawShaderMaterial) {
                    const e=r.uniformsGroups;
                    for(let t=0, i=e.length;
                    t<i;
                    t++)if(ae.isWebGL2) {
                        const i=e[t];
                        Ne.update(i, S), Ne.bind(i, S)
                    }
                }
                return S
            }
            function rt(e,
            t) {
                e.ambientLightColor.needsUpdate=t, e.lightProbe.needsUpdate=t, e.directionalLights.needsUpdate=t, e.directionalLightShadows.needsUpdate=t, e.pointLights.needsUpdate=t, e.pointLightShadows.needsUpdate=t, e.spotLights.needsUpdate=t, e.spotLightShadows.needsUpdate=t, e.rectAreaLights.needsUpdate=t, e.hemisphereLights.needsUpdate=t
            }
            function at(e) {
                return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights
            }
            Ze.setAnimationLoop(je),
            "undefined"!=typeof self&&Ze.setContext(self),
            this.setAnimationLoop=function(e) {
                qe=e, Fe.setAnimationLoop(e), null===e?Ze.stop(): Ze.start()
            }
            ,
            Fe.addEventListener("sessionstart",
            Xe),
            Fe.addEventListener("sessionend",
            Ye),
            this.render=function(e,
            t) {
                if(void 0!==t&&!0!==t.isCamera)return;
                if(!0===T)return;
                !0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(), null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(), !0===Fe.enabled&&!0===Fe.isPresenting&&(!0===Fe.cameraAutoUpdate&&Fe.updateCamera(t), t=Fe.getCamera()), !0===e.isScene&&e.onBeforeRender(w, e, t, C), y=Te.get(e, b.length), y.init(), b.push(y), $.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), Z.setFromProjectionMatrix($), J=this.localClippingEnabled, K=Ee.init(this.clippingPlanes, J, t), M=we.get(e, S.length), M.init(), S.push(M), Ke(e, t, 0, w.sortObjects), M.finish(), !0===w.sortObjects&&M.sort(H, q), !0===K&&Ee.beginShadows();
                const i=y.state.shadowsArray;
                if(Ae.render(i, e, t), !0===K&&Ee.endShadows(), !0===this.info.autoReset&&this.info.reset(), Ce.render(M, e), y.setupLights(w.physicallyCorrectLights), t.isArrayCamera) {
                    const i=t.cameras;
                    for(let t=0, n=i.length;
                    t<n;
                    t++) {
                        const n=i[t];
                        Je(M, e, n, n.viewport)
                    }
                }
                else Je(M,
                e,
                t);
                null!==C&&(fe.updateMultisampleRenderTarget(C),
                fe.updateRenderTargetMipmap(C)),
                !0===e.isScene&&e.onAfterRender(w,
                e,
                t),
                Ie.resetDefaultState(),
                L=-1,
                P=null,
                b.pop(),
                y=b.length>0?b[b.length-1]:null,
                S.pop(),
                M=S.length>0?S[S.length-1]:null
            }
            ,
            this.getActiveCubeFace=function() {
                return E
            }
            ,
            this.getActiveMipmapLevel=function() {
                return A
            }
            ,
            this.getRenderTarget=function() {
                return C
            }
            ,
            this.setRenderTargetTextures=function(e,
            t,
            i) {
                he.get(e.texture).__webglTexture=t, he.get(e.depthTexture).__webglTexture=i;
                const n=he.get(e);
                n.__hasExternalTextures=!0, n.__hasExternalTextures&&(n.__autoAllocateDepthBuffer=void 0===i, n.__autoAllocateDepthBuffer||!0===re.has("WEBGL_multisampled_render_to_texture")&&(n.__useRenderToTexture=!1))
            }
            ,
            this.setRenderTargetFramebuffer=function(e,
            t) {
                const i=he.get(e);
                i.__webglFramebuffer=t, i.__useDefaultFramebuffer=void 0===t
            }
            ,
            this.setRenderTarget=function(e) {
                let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 0, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0;
                C=e, E=t, A=i;
                let n=!0;
                if(e) {
                    const t=he.get(e);
                    void 0!==t.__useDefaultFramebuffer?(se.bindFramebuffer(36160, null), n=!1): void 0===t.__webglFramebuffer?fe.setupRenderTarget(e): t.__hasExternalTextures&&fe.rebindTextures(e, he.get(e.texture).__webglTexture, he.get(e.depthTexture).__webglTexture)
                }
                let r=null,
                a=!1,
                s=!1;
                if(e) {
                    const i=e.texture;
                    (i.isData3DTexture||i.isDataArrayTexture)&&(s=!0);
                    const n=he.get(e).__webglFramebuffer;
                    e.isWebGLCubeRenderTarget?(r=n[t], a=!0): r=ae.isWebGL2&&e.samples>0&&!1===fe.useMultisampledRTT(e)?he.get(e).__webglMultisampledFramebuffer: n, U.copy(e.viewport), F.copy(e.scissor), B=e.scissorTest
                }
                else U.copy(j).multiplyScalar(G).floor(),
                F.copy(X).multiplyScalar(G).floor(),
                B=Y;
                const o=se.bindFramebuffer(36160,
                r);
                if(o&&ae.drawBuffers&&n&&se.drawBuffers(e,
                r),
                se.viewport(U),
                se.scissor(F),
                se.setScissorTest(B),
                a) {
                    const n=he.get(e.texture);
                    Oe.framebufferTexture2D(36160, 36064, 34069+t, n.__webglTexture, i)
                }
                else if(s) {
                    const n=he.get(e.texture), r=t||0;
                    Oe.framebufferTextureLayer(36160, 36064, n.__webglTexture, i||0, r)
                }
                L=-1
            }
            ,
            this.readRenderTargetPixels=function(e,
            t,
            i,
            r,
            a,
            s,
            o) {
                if(!e||!e.isWebGLRenderTarget)return;
                let l=he.get(e).__webglFramebuffer;
                if(e.isWebGLCubeRenderTarget&&void 0!==o&&(l=l[o]), l) {
                    se.bindFramebuffer(36160, l);
                    try {
                        const o=e.texture, l=o.format, c=o.type;
                        if(l!==n.wk&&Re.convert(l)!==Oe.getParameter(35739))return;
                        const h=c===n.cL&&(re.has("EXT_color_buffer_half_float")||ae.isWebGL2&&re.has("EXT_color_buffer_float"));
                        if(!(c===n.yw||Re.convert(c)===Oe.getParameter(35738)||c===n.Vz&&(ae.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float"))||h))return;
                        t>=0&&t<=e.width-r&&i>=0&&i<=e.height-a&&Oe.readPixels(t, i, r, a, Re.convert(l), Re.convert(c), s)
                    }
                    finally {
                        const e=null!==C?he.get(C).__webglFramebuffer: null;
                        se.bindFramebuffer(36160, e)
                    }
                }
            }
            ,
            this.copyFramebufferToTexture=function(e,
            t) {
                let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0;
                const n=Math.pow(2, -i), r=Math.floor(t.image.width*n), a=Math.floor(t.image.height*n);
                fe.setTexture2D(t, 0), Oe.copyTexSubImage2D(3553, i, 0, 0, e.x, e.y, r, a), se.unbindTexture()
            }
            ,
            this.copyTextureToTexture=function(e,
            t,
            i) {
                let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: 0;
                const r=t.image.width, a=t.image.height, s=Re.convert(i.format), o=Re.convert(i.type);
                fe.setTexture2D(i, 0), Oe.pixelStorei(37440, i.flipY), Oe.pixelStorei(37441, i.premultiplyAlpha), Oe.pixelStorei(3317, i.unpackAlignment), t.isDataTexture?Oe.texSubImage2D(3553, n, e.x, e.y, r, a, s, o, t.image.data): t.isCompressedTexture?Oe.compressedTexSubImage2D(3553, n, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, s, t.mipmaps[0].data): Oe.texSubImage2D(3553, n, e.x, e.y, s, o, t.image), 0===n&&i.generateMipmaps&&Oe.generateMipmap(3553), se.unbindTexture()
            }
            ,
            this.copyTextureToTexture3D=function(e,
            t,
            i,
            n) {
                let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]: 0;
                if(w.isWebGL1Renderer)return;
                const a=e.max.x-e.min.x+1, s=e.max.y-e.min.y+1, o=e.max.z-e.min.z+1, l=Re.convert(n.format), c=Re.convert(n.type);
                let h;
                if(n.isData3DTexture)fe.setTexture3D(n, 0), h=32879;
                else {
                    if(!n.isDataArrayTexture)return;
                    fe.setTexture2DArray(n, 0), h=35866
                }
                Oe.pixelStorei(37440,
                n.flipY),
                Oe.pixelStorei(37441,
                n.premultiplyAlpha),
                Oe.pixelStorei(3317,
                n.unpackAlignment);
                const u=Oe.getParameter(3314),
                d=Oe.getParameter(32878),
                p=Oe.getParameter(3316),
                f=Oe.getParameter(3315),
                m=Oe.getParameter(32877),
                g=i.isCompressedTexture?i.mipmaps[0]:i.image;
                Oe.pixelStorei(3314,
                g.width),
                Oe.pixelStorei(32878,
                g.height),
                Oe.pixelStorei(3316,
                e.min.x),
                Oe.pixelStorei(3315,
                e.min.y),
                Oe.pixelStorei(32877,
                e.min.z),
                i.isDataTexture||i.isData3DTexture?Oe.texSubImage3D(h,
                r,
                t.x,
                t.y,
                t.z,
                a,
                s,
                o,
                l,
                c,
                g.data):i.isCompressedTexture?Oe.compressedTexSubImage3D(h,
                r,
                t.x,
                t.y,
                t.z,
                a,
                s,
                o,
                l,
                g.data):Oe.texSubImage3D(h,
                r,
                t.x,
                t.y,
                t.z,
                a,
                s,
                o,
                l,
                c,
                g),
                Oe.pixelStorei(3314,
                u),
                Oe.pixelStorei(32878,
                d),
                Oe.pixelStorei(3316,
                p),
                Oe.pixelStorei(3315,
                f),
                Oe.pixelStorei(32877,
                m),
                0===r&&n.generateMipmaps&&Oe.generateMipmap(h),
                se.unbindTexture()
            }
            ,
            this.initTexture=function(e) {
                e.isCubeTexture?fe.setTextureCube(e, 0): e.isData3DTexture?fe.setTexture3D(e, 0): e.isDataArrayTexture?fe.setTexture2DArray(e, 0): fe.setTexture2D(e, 0), se.unbindTexture()
            }
            ,
            this.resetState=function() {
                E=0, A=0, C=null, se.reset(), Ie.reset()
            }
            ,
            "undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",
            {
                detail: this
            }
            ))
        }
    }
    ,
    7526:(e,
    t,
    i)=> {
        function n(e) {
            const t= {};
            for(const i in e) {
                t[i]= {};
                for(const n in e[i]) {
                    const r=e[i][n];
                    r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?t[i][n]=r.clone(): Array.isArray(r)?t[i][n]=r.slice(): t[i][n]=r
                }
            }
            return t
        }
        function r(e) {
            const t= {};
            for(let i=0;
            i<e.length;
            i++) {
                const r=n(e[i]);
                for(const e in r)t[e]=r[e]
            }
            return t
        }
        function a(e) {
            const t=[];
            for(let i=0;
            i<e.length;
            i++)t.push(e[i].clone());
            return t
        }
        i.d(t,
        {
            Rh: ()=>r, dw: ()=>n, fd: ()=>a, rD: ()=>s
        }
        );
        const s= {
            clone: n, merge: r
        }
    }
    ,
    4567:(e,
    t,
    i)=> {
        i.d(t, {
            x: ()=>r
        }
        );
        var n=i(3740);
        class r extends n.T {
            constructor() {
                super(), this.isScene=!0, this.type="Scene", this.background=null, this.environment=null, this.fog=null, this.overrideMaterial=null, "undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                    detail: this
                }
                ))
            }
            copy(e,
            t) {
                return super.copy(e, t), null!==e.background&&(this.background=e.background.clone()), null!==e.environment&&(this.environment=e.environment.clone()), null!==e.fog&&(this.fog=e.fog.clone()), null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()), this.matrixAutoUpdate=e.matrixAutoUpdate, this
            }
            toJSON(e) {
                const t=super.toJSON(e);
                return null!==this.fog&&(t.object.fog=this.fog.toJSON()), t
            }
            get autoUpdate() {
                return this.matrixWorldAutoUpdate
            }
            set autoUpdate(e) {
                this.matrixWorldAutoUpdate=e
            }
        }
    }
    ,
    673:(e,
    t,
    i)=> {
        i.d(t, {
            H: ()=>a
        }
        );
        var n=i(4222),
        r=i(6563);
        class a {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: null;
                this.isSource=!0, this.uuid=r.DO(), this.data=e, this.version=0
            }
            set needsUpdate(e) {
                !0===e&&this.version++
            }
            toJSON(e) {
                const t=void 0===e||"string"==typeof e;
                if(!t&&void 0!==e.images[this.uuid])return e.images[this.uuid];
                const i= {
                    uuid: this.uuid, url: ""
                }
                ,
                n=this.data;
                if(null!==n) {
                    let e;
                    if(Array.isArray(n)) {
                        e=[];
                        for(let t=0, i=n.length;
                        t<i;
                        t++)n[t].isDataTexture?e.push(s(n[t].image)): e.push(s(n[t]))
                    }
                    else e=s(n);
                    i.url=e
                }
                return t||(e.images[this.uuid]=i),
                i
            }
        }
        function s(e) {
            return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?n.P.getDataURL(e):e.data? {
                data: Array.from(e.data), width: e.width, height: e.height, type: e.data.constructor.name
            }
            : {}
        }
    }
    ,
    2887:(e,
    t,
    i)=> {
        i.d(t, {
            x: ()=>h
        }
        );
        var n=i(1214),
        r=i(1700),
        a=i(6563),
        s=i(5914),
        o=i(4914),
        l=i(673);
        let c=0;
        class h extends n.p {
            constructor() {
                let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: h.DEFAULT_IMAGE, t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: h.DEFAULT_MAPPING, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: r.uW, n=arguments.length>3&&void 0!==arguments[3]?arguments[3]: r.uW, u=arguments.length>4&&void 0!==arguments[4]?arguments[4]: r.we, d=arguments.length>5&&void 0!==arguments[5]?arguments[5]: r.D1, p=arguments.length>6&&void 0!==arguments[6]?arguments[6]: r.wk, f=arguments.length>7&&void 0!==arguments[7]?arguments[7]: r.yw, m=arguments.length>8&&void 0!==arguments[8]?arguments[8]: 1, g=arguments.length>9&&void 0!==arguments[9]?arguments[9]: r.rn;
                super(), this.isTexture=!0, Object.defineProperty(this, "id", {
                    value: c++
                }
                ),
                this.uuid=a.DO(),
                this.name="",
                this.source=new l.H(e),
                this.mipmaps=[],
                this.mapping=t,
                this.wrapS=i,
                this.wrapT=n,
                this.magFilter=u,
                this.minFilter=d,
                this.anisotropy=m,
                this.format=p,
                this.internalFormat=null,
                this.type=f,
                this.offset=new s.F(0,
                0),
                this.repeat=new s.F(1,
                1),
                this.center=new s.F(0,
                0),
                this.rotation=0,
                this.matrixAutoUpdate=!0,
                this.matrix=new o.V,
                this.generateMipmaps=!0,
                this.premultiplyAlpha=!1,
                this.flipY=!0,
                this.unpackAlignment=4,
                this.encoding=g,
                this.userData= {},
                this.version=0,
                this.onUpdate=null,
                this.isRenderTargetTexture=!1,
                this.needsPMREMUpdate=!1
            }
            get image() {
                return this.source.data
            }
            set image(e) {
                this.source.data=e
            }
            updateMatrix() {
                this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
            }
            clone() {
                return(new this.constructor).copy(this)
            }
            copy(e) {
                return this.name=e.name, this.source=e.source, this.mipmaps=e.mipmaps.slice(0), this.mapping=e.mapping, this.wrapS=e.wrapS, this.wrapT=e.wrapT, this.magFilter=e.magFilter, this.minFilter=e.minFilter, this.anisotropy=e.anisotropy, this.format=e.format, this.internalFormat=e.internalFormat, this.type=e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation=e.rotation, this.matrixAutoUpdate=e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps=e.generateMipmaps, this.premultiplyAlpha=e.premultiplyAlpha, this.flipY=e.flipY, this.unpackAlignment=e.unpackAlignment, this.encoding=e.encoding, this.userData=JSON.parse(JSON.stringify(e.userData)), this.needsUpdate=!0, this
            }
            toJSON(e) {
                const t=void 0===e||"string"==typeof e;
                if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];
                const i= {
                    metadata: {
                        version: 4.5, type: "Texture", generator: "Texture.toJSON"
                    }
                    ,
                    uuid:this.uuid,
                    name:this.name,
                    image:this.source.toJSON(e).uuid,
                    mapping:this.mapping,
                    repeat:[this.repeat.x,
                    this.repeat.y],
                    offset:[this.offset.x,
                    this.offset.y],
                    center:[this.center.x,
                    this.center.y],
                    rotation:this.rotation,
                    wrap:[this.wrapS,
                    this.wrapT],
                    format:this.format,
                    type:this.type,
                    encoding:this.encoding,
                    minFilter:this.minFilter,
                    magFilter:this.magFilter,
                    anisotropy:this.anisotropy,
                    flipY:this.flipY,
                    premultiplyAlpha:this.premultiplyAlpha,
                    unpackAlignment:this.unpackAlignment
                }
                ;
                return"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),
                t||(e.textures[this.uuid]=i),
                i
            }
            dispose() {
                this.dispatchEvent( {
                    type: "dispose"
                }
                )
            }
            transformUv(e) {
                if(this.mapping!==r.xf)return e;
                if(e.applyMatrix3(this.matrix), e.x<0||e.x>1)switch(this.wrapS) {
                    case r.rp: e.x=e.x-Math.floor(e.x);
                    break;
                    case r.uW: e.x=e.x<0?0: 1;
                    break;
                    case r.Oo: 1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x: e.x=e.x-Math.floor(e.x)
                }
                if(e.y<0||e.y>1)switch(this.wrapT) {
                    case r.rp: e.y=e.y-Math.floor(e.y);
                    break;
                    case r.uW: e.y=e.y<0?0: 1;
                    break;
                    case r.Oo: 1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y: e.y=e.y-Math.floor(e.y)
                }
                return this.flipY&&(e.y=1-e.y),
                e
            }
            set needsUpdate(e) {
                !0===e&&(this.version++, this.source.needsUpdate=!0)
            }
        }
        h.DEFAULT_IMAGE=null,
        h.DEFAULT_MAPPING=r.xf
    }
    ,
    4361:(e,
    t,
    i)=> {
        i.d(t, {
            f: ()=>a
        }
        );
        var n=i(1700),
        r=i(2887);
        class a extends r.x {
            constructor(e, t, i, r, a, s, o, l, c) {
                super(e, t, i, r, a, s, o, l, c), this.isVideoTexture=!0, this.minFilter=void 0!==s?s: n.we, this.magFilter=void 0!==a?a: n.we, this.generateMipmaps=!1;
                const h=this;
                "requestVideoFrameCallback"in e&&e.requestVideoFrameCallback((function t() {
                    h.needsUpdate=!0, e.requestVideoFrameCallback(t)
                }
                ))
            }
            clone() {
                return new this.constructor(this.image).copy(this)
            }
            update() {
                const e=this.image;
                !1==="requestVideoFrameCallback"in e&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)
            }
        }
    }
    ,
    6104:(e,
    t,
    i)=> {
        function n(e) {
            for(let t=e.length-1;
            t>=0;
            --t)if(e[t]>=65535)return!0;
            return!1
        }
        i.d(t,
        {
            H7: ()=>n, c: ()=>r
        }
        );
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array;
        function r(e) {
            return document.createElementNS("http://www.w3.org/1999/xhtml", e)
        }
    }
}
]);
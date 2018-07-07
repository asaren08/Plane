// キャンバスクラス
export class GlCanvas {
    private gl: WebGLRenderingContext;      // glコンテキスト
    private canvas: HTMLCanvasElement;      // キャンバス 
    private frameBuffer: WebGLFramebuffer;  // フレームバッファ

    // コンストラクタ
    // @param width 幅
    // @param height 高さ
    constructor(width: number, height: number) {
        this.canvas = this.getCanvasContext(width, height);
        this.gl = this.getGlContext();
        this.frameBuffer = this.gl.createFramebuffer();
    }

    // キャンバスコンテキストを取得する    
    // @param width 幅
    // @param height 高さ
    private getCanvasContext(width: number, height: number): HTMLCanvasElement {
        var cnvs = <HTMLCanvasElement>document.getElementById('canvas');
        cnvs.width = width;
        cnvs.height = height;
        return cnvs;
    }

    // glコンテキストを取得する
    private getGlContext(): WebGLRenderingContext {
        var gl = this.canvas.getContext("experimental-webgl",
                                        { preserveDrawingBuffer: true });
        if (!gl) { // コンテキストを取得できなかったとき
            return null;
        }
        this.initGlContext(gl);
        return gl;
    }

    // glコンテキストを初期化する
    private initGlContext(gl: WebGLRenderingContext): void {
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // キャンバスを取得する
    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    // glコンテキストを取得する
    public getGL(): WebGLRenderingContext {
        return this.gl;
    }

    // フレームバッファを取得する
    public getFrameBuffer(): WebGLFramebuffer {
        return this.frameBuffer;
    }

    // キャンバスサイズを設定する
    // @param width 幅
    // @param height 高さ
    public setCanvasSize(width: number, height: number): void {
        this.canvas.width = width;
        this.canvas.height = height;
    }
}
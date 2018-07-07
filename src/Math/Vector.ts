// 2次元ベクトルクラス
export class Vector {
    private x: number;
    private y: number;

    // コンストラクタ
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    // xを取得する
    public getX(): number {
        return this.x;
    }
    // xを設定する
    public setX(aX: number): void {
        this.x = aX;
    }
    // yを取得する
    public getY(): number {
        return this.y;
    }
    // yを設定する
    public setY(aY: number): void {
        this.y = aY;
    }
    // x,yを設定する
    public setXY(aX: number, aY: number): void {
        this.x = aX;
        this.y = aY;
    }
    // x,yを設定するVector版
    public set(vec: Vector): void {
        this.x = vec.x;
        this.y = vec.y;
    }
    // 加算する
    public add(vec: Vector): void {
        this.x += vec.x;
        this.y += vec.y;
    }
    // 減算する
    public sub(vec: Vector): void {
        this.x -= vec.x;
        this.y -= vec.y;
    }
    // 大きさを求める
    public norm(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
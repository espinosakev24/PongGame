import { Actor, Color, CollisionType, Input } from 'excalibur';
import { KeyEvent } from 'excalibur/dist/Input/Index';
import { gameProps as props } from '../game.props';
import { IControl } from '../interfaces/icontrol';
export class Paddle extends Actor {
    controls: IControl;
    velocity: number;
    constructor(x: number, y: number, controls: IControl) {
        super({
            x: x,
            y: y,
            width: 250,
            height: 25,
            color: Color.Orange,
        })
        this.body.collider.type = CollisionType.Fixed;
        this.controls = controls;
        this.velocity = 10;
    }
    public update(engine: any, delta: any) {
        const { up, right, down, left } = this.controls;
        if (engine.input.keyboard.isHeld(Input.Keys[up])) {
            this.pos.y -= this.velocity;
        }
        if (engine.input.keyboard.isHeld(Input.Keys[right])) {
            this.pos.x += this.velocity;
        }
        if (engine.input.keyboard.isHeld(Input.Keys[down])) {
            this.pos.y += this.velocity;
        }
        if (engine.input.keyboard.isHeld(Input.Keys[left])) {
            this.pos.x -= this.velocity;
        }
    }
}
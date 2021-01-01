import { Actor, CollisionType, Color } from "excalibur";
import { gameProps as props } from './../game.props';
export class Ball extends Actor {
  constructor() {
    super({
      x: 500,
      y: 70,
      width: 32,
      height: 32,
      color: Color.Orange
    })
    this.vel.setTo(-500, -200);
    this.body.collider.type = CollisionType.Passive;
    this.addBallEvents();
    this.changeBallDraw();
  }

  addBallEvents() {
    this.on("postupdate", () => {
      if (this.pos.x < this.width / 2) {
        this.pos.x = this.width / 2;
        this.vel.x *= -1;
      }
      if (this.pos.x + this.width / 2 > props.width) {
        this.pos.x = props.width - this.width / 2;
        this.vel.x *= -1;
      }
      if (this.pos.y < this.height / 2) {
        this.pos.y = this.height / 2;
        this.vel.y *= -1;
      }
      if (this.pos.y + this.height / 2 > props.height) {
        this.pos.y = props.height - this.height / 2;
        this.vel.y *= -1;
      }
    });
    this.on('precollision', (evt: any) => {
      let intersection = evt.intersection.normalize();
      let paddle = evt.other;
      if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
        if (intersection.x < 0){
          this.pos.x = paddle.pos.x - paddle.width / 2 - this.width / 2;
          //debugger;
        } else {
          this.pos.x = paddle.pos.x + paddle.width / 2 + this.width / 2;
        }
        this.vel.x *= -1;
      } else {

        this.vel.y *= -1;
      }
    })
  }
  changeBallDraw() {
    // Draw is passed a rendering context and a delta in milliseconds since the last frame
    this.draw = (ctx, delta) => {
      // Optionally call original 'base' method
      // ex.Actor.prototype.draw.call(this, ctx, delta)

      // Custom draw code
      ctx.fillStyle = this.color.toString();
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.width / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    };
  }
}
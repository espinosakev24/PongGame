import { Actor, CollisionType, Color } from "excalibur";
import { gameProps as props } from './../game.props';
export class Ball extends Actor {
  constructor() {
    super({
      x: 500,
      y: 70,
      width: 50,
      height: 50,
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
        this.vel.x *= -1;
      }
      if (this.pos.x + this.width > props.width) {
        this.vel.x *= -1;
      }
      if (this.pos.y < this.height / 2) {
        this.vel.y *= -1;
      }
      if (this.pos.y > props.height) {
        this.vel.y *= -1;
      }
    });
    this.on('precollision', (evt: any) => {
      let intersection = evt.intersection.normalize();
      if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
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
      ctx.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    };
  }
}
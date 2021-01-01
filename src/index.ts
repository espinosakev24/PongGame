import { Engine, Color } from 'excalibur';
import { Paddle } from './actors/paddle'
import { Ball } from './actors/ball';
import { gameProps as props, p1Control, p2Control } from './game.props';
class Game extends Engine {
  private paddle1: Paddle;
  private paddle2: Paddle;
  private ball: Ball;

  constructor() {
    super({
      backgroundColor: Color.Violet,
      width: props.width,
      height: props.height
    });
  }

  public start() {
    this.paddle1 = new Paddle(0, 50, p1Control);
    this.paddle2 = new Paddle(props.width, props.height - 40, p2Control);
    this.ball = new Ball();

    game.add(this.paddle1);
    game.add(this.paddle2);
    game.add(this.ball);
    this.addActorsEventListeners();
    return super.start();
  }
  public addActorsEventListeners() {
    // this.input.pointers.primary.on('move', (evt: any) => {
    //   this.paddle1.pos.x = evt.target.lastWorldPos.x;
    //   this.paddle2.pos.x = evt.target.lastWorldPos.x;
    // })
  }
}

const game = new Game();
game.start().then(() => {
  // console.clear();
  // console.log(game.drawHeight);
});
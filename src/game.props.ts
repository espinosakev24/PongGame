import { IControl } from './interfaces/icontrol';
import { IGameProps } from './interfaces/igame.props';

export const gameProps: IGameProps = {
    width: 800,
    height: 600
}
export const p1Control: IControl = {
    up: 'W',
    right: 'D',
    down: 'S',
    left: 'A'
}
export const p2Control: IControl = {
    up: 'I',
    right: 'L',
    down: 'K',
    left: 'J'
}
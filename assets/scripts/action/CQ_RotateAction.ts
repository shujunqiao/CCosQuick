/**
 * $File: CQ_RotateAction.ts $
 * $Date: 2019-12-23 16:59:46 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2019 by Shen, Jen-Chieh $
 */
const {ccclass, property} = cc._decorator;

import { CQ_Sign } from "../enum/CQ_Sign";
import { CQ_EnumValue } from "../util/CQ_EnumValue";

/**
 * @desc Do the self rotation by `speed` and `direction`.
 */
@ccclass
export default class CQ_RotateAction extends cc.Component {
    /* Variables */

    @property
    public active : boolean = true;

    @property({
        tooltip: 'How fast this object rotates.',
        type: cc.Float,
        range: [1.0, 1000.0],
        slide: true,
    })
    public speed : number = 10.0;

    @property({
        tooltip: "Direction this object rotates.",
        type: cc.Enum(CQ_Sign),
    })
    public sign : CQ_Sign = CQ_Sign.POSITIVE;

    /* Setter & Getter */

    /* Functions */

    /**
     * @desc Update called every frame.
     * @param { number } dt : Delta time.
     */
    protected update(dt) : void {
        if (!this.active)
            return;
        this.node.angle += this.speed * CQ_EnumValue.getValue(this.sign) * dt;
    }
}

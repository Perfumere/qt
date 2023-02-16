/**
 * 计算本金经过相邻两个交易日, 先涨后跌相同幅度后的结果
 * @param 本金 投入的钱数, 单位元
 * @param 涨幅 [0, 10]
 */
export function 先涨后跌(本金, 涨幅 = 3) {
    const 幅度 = 涨幅 / 100;
    const 涨幅获利 = 本金 * 幅度;
    const 跌幅失利 = (本金 + 涨幅获利) * 幅度;
    const 结果 = 本金 + 涨幅获利 - 跌幅失利;
    const 真实幅度 = +((结果 - 本金) / 本金 * 100).toFixed(2);

    console.log({
        涨幅获利,
        跌幅失利,
        本金,
        结果,
        真实幅度
    });
}

/**
 * 计算本金经过相邻两个交易日, 先跌后涨相同幅度后的结果
 * @param 本金 投入的钱数, 单位元
 * @param 跌幅 [0, 10]
 */
export function 先跌后涨(本金, 跌幅 = 3) {
    const 幅度 = 跌幅 / 100;
    const 跌幅失利 = 本金 * 幅度;
    const 涨幅获利 = (本金 - 跌幅失利) * 幅度;
    const 结果 = 本金 + 涨幅获利 - 跌幅失利;
    const 真实幅度 = +((结果 - 本金) / 本金 * 100).toFixed(2);

    console.log({
        涨幅获利,
        跌幅失利,
        本金,
        结果,
        真实幅度
    });
}

/**
 * 计算累计净值增幅
 */
export function 净值增幅(当前日净值, 对标日净值) {
    const delta = 当前日净值 - 对标日净值;
    const flag = delta >= 0 ? '+' : '-';

    console.log(`净值变化：${flag}${Math.abs(delta)}`);
}

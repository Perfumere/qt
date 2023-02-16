import { 先涨后跌, 先跌后涨 } from './fund';

/**
 * 给定涨幅, 计算本金历经涨跌后的结果
 * @param list Array<number> [-10, 10]
 * @param principal 本金数额, 单位元
 */
function 给定涨幅和本金(list = [] as Array<number>, principal = 0) {
    const seedMoney = +principal.toFixed(2);
    let lrate = 1;

    for (const rate of list) {
        lrate *= (1 + rate / 100);
    }

    const result = +(seedMoney * lrate).toFixed(2);
    const delta = +(result - seedMoney).toFixed(2);

    console.log({
        交易日: list.length,
        本金: seedMoney,
        交易结果: result,
        结果: delta
    })
}

先涨后跌(200000, 3);
先跌后涨(200000, 3);

给定涨幅和本金([
    // 1周期
    -0.34, // 2022-02-16
    +0.96,
    -0.95,
    -0.85,
    +0.74

    // 2周期
    +5.89,
    -1.82,
    +1.03,
    +0.27,
    +0.38,

    // 3周期
    -1.98,
    -2.35,
    +1.12,
    -3.65,
    +0.46,

    // 4周期
    +1.03,
    +1.30,
    -0.34,
    -3.03,
    -2.48,

    // 5周期
    +4.50,
    +1.36,
    -0.78,
    +0.45,
    -0.84,

    // 6周期
    -0.17,
    -1.81,
    -1.62,
    -1.64,
    -1.73,

    // 7
    +1.82,
    -2.44,
    +0.37,
    -2.74,
    -1.38,

    // 8
    +0.13,
    -4.63,
    +0.40,
    -2.58,
    +2.38,

    // 9
    +0.27,
    +3.51,
    -2.56,
    -1.51,
    -1.67,

    // 10
    -2.58,
    -6.47,
    -3.72,
    +6.72,
    -2.17,

    // 11
    +3.26,
    -0.22,
    -2.95,
    -1.55,
    +4.74,

    // 12
    +3.73,
    +1.25,
    -0.62,
    -1.31,
    +4.32,

    // 13
    +0.47,
    +1.13,
    +0.53,
    +1.31,
    -3.87,

    // 14
    -0.27,
    -1.08,
    -0.75,
    +1.85,
    +2.69,

    // 15
    +0.39,
    +3.85,
    +2.01,
    -1.60,
    -0.19,

    // 16
    -3.52,
    +1.11,
    -1.48,
    -2.16,
    +1.27,

    // 17
    +0.92,
    +0.00,
    +1.96,
    -1.41,
    -3.38, // 2022-06-22

    // 18
], 200000);
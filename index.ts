import axios from 'axios';

/**
 * @params secids QuoteID == MktNum.UnifiedCode 多个可以逗号分隔
 * @returns `{ data: { total: number; diff: Record<number, Result> } }`
 */
const ulist = 'https://push2.eastmoney.com/api/qt/ulist/get?secids=1.513310&fields=f1,f2,f3,f4,f5,f6,f7,f8,f10,f12,f13,f14,f18,f30&pi=0';

/**
 * @params input 关键词
 * @params count 搜索条数
 */
const suglist = 'https://searchadapter.eastmoney.com/api/suggest/get?input=%E6%98%93%E6%96%B9%E8%BE%BE&count=10&type=14';

axios.get(ulist).then(res => {
    console.log(res.data);
});

axios.get(suglist).then(res => {
    console.log(res.data);
});


/**
 * @params field1 必须存在占位
 * @params iscr 是否包含9.15~9.30开盘前的数据，可以知道今天是高开还是低开
 * trends2 -> trends1 | trends 可以获取 对象数组,数据更详细
 */
const url = 'https://push2.eastmoney.com/api/qt/stock/trends2/get?secid=1.513310&fields2=f51,f53,f54,f55,f56,f57,f58&iscr=0&fields1=f1';
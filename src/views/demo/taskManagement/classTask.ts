/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 15:17:54
 * @LastEditTime: 2021-02-28 10:01:04
 * @LastEditors: mTm
 */
import {ref, reactive} from 'vue'
import { setCache, getCache } from './cache'
const CACHENAME = 'taskManagement';
class Task {
    public task: any;
    public inputValue: any;
    constructor() {
        this.inputValue = ref('');
        this.init();
    }
    // 选择全部
    set SelectAll(val: any) {
        this.taskSelect(val);
    }
    // 已选择的数量
    get SelectNum() {
        return this.task.filter((v: any) => v.isChecked).length || 0;
    }
    // 是否全选
    get isSelectAll() {
        return this.task.length && this.task.every((v: any) => v.isChecked);
    }
    init() {
        if (getCache(CACHENAME)) {
            this.task = reactive(getCache(CACHENAME) as any);
        } else {
            this.task = reactive([
                {
                    value: 'demo',
                    id: 0,
                    isChecked: false, 
                }
            ]);
        }
    }
    values() {
        const { task, inputValue, clearSelect, taskSelect } = this;
        return {
            task,
            inputValue,
            clearSelect,
            taskSelect,
        }
    }
    addTask() {
        if (!this.inputValue.value) return;
        const task = this.task;
        const newId = task[0] ? task[0].id + 1 : 0;
        task.unshift({
            id: newId,
            value: this.inputValue.value,
            isChecked: false,
        })
        this.inputValue.value = '';
        setCache(CACHENAME,this.task);
    }
    // 全选、全不选、单个
    taskSelect = (isSelect: boolean | number) => {
        if (typeof isSelect === 'boolean') {
            this.task.forEach((v: any) => {
                v.isChecked = isSelect;
            })
        } else {
            const selectItem = this.task.find((v: any) => v.id === isSelect);
            selectItem.isChecked = !selectItem.isChecked;
        }
        setCache(CACHENAME, this.task);
    }

    // 清除选中
    clearSelect = (num: number | undefined) => {
        const isNum = num !== undefined && !isNaN(num);
        const delIndex = isNum ? this.task.findIndex((v: any) => v.id === num) : this.task.findIndex((v: any) => v.isChecked);
        if(delIndex >= 0) {
            this.task.splice(delIndex, 1);
            this.clearSelect(num);
        } else {
            setCache(CACHENAME,this.task);
            return;
        }
    }
}

export default new Task()
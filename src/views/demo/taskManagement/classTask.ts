/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-26 15:17:54
 * @LastEditTime: 2021-02-28 14:59:13
 * @LastEditors: mTm
 */
import {ref, reactive, watch} from 'vue'
import { setCache, getCache } from './cache'
import { TaskI } from './TaskI';
const CACHENAME = 'taskManagement';
class Task {
    public task: TaskI[] = [];
    public inputValue: any = ref('');
    constructor() {
        this.init();
    }

    // 已选择的数量
    get SelectNum() {
        return this.task.filter((v: TaskI) => v.isChecked).length || 0;
    }
    // 是否全选
    get isSelectAll() {
        return this.task.length && this.task.every((v: TaskI) => v.isChecked);
    }
    init() {
        if (getCache(CACHENAME)) {
            this.task = reactive<TaskI[]>(getCache(CACHENAME));
        } else {
            this.task = reactive<TaskI[]>([
                {
                    value: 'demo',
                    id: 0,
                    isChecked: false,
                }
            ]);
        }

        watch(() => this.task, (value: TaskI[]) => {
            setCache(CACHENAME, value );
        }, {deep: true})
        
    }
    values() {
        const { task, inputValue, delSelect, taskSelect } = this;
        return {
            task,
            inputValue,
            delSelect,
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
    }
    // 全选、全不选、单个
    taskSelect = (isSelect: boolean | number) => {
        if (typeof isSelect === 'boolean') {
            this.task.forEach((v: TaskI) => {
                v.isChecked = isSelect;
            })
        } else {
            const selectItem = this.task.find((v: TaskI) => v.id === isSelect)!;
            selectItem.isChecked = !selectItem.isChecked;
        }
    }

    // 清除选中
    delSelect = (num: number | undefined, isConfirm = false) => {
        if (isConfirm || window.confirm('确定要删除吗？')) {
            const isNum = num !== undefined && !isNaN(num);
            const delIndex = isNum ? this.task.findIndex((v: TaskI) => v.id === num) : this.task.findIndex((v: TaskI) => v.isChecked);
            if(delIndex >= 0) {
                this.task.splice(delIndex, 1);
                this.delSelect(num, true);
            } else {
                return;
            }
        }
    }
}

export default new Task()
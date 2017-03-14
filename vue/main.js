Vue.component('task-list', {
    template: `<div>
                   <task v-for="task in tasks"> 
                    {{ task.task}}
                   </task>
               </div>`,
    
    data() {
        return {
            tasks: [
                {task: 'Task 1', complete: true},
                {task: 'Task 2', complete: false},
                {task: 'Task 3', complete: true},
                {task: 'Task 4', complete: false},
                {task: 'Task 5', complete: false},
                {task: 'Task 6', complete: true},
            ]
        };
    }
});


Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        };
    },
    template: `
            <article class="message" v-show="isVisible">
            <div class="message-header">
                {{title}}
                <button type="button" @click="hideModal">X</button>
                <button type="button" @click="isVisible=false">X (inline)</button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>
    `,
    methods: {
        hideModal() {
            this.isVisible = false;
        }
        
    }
});

Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p><slot></slot></p>
                    </div>
                </div>
            <button class="modal-close" @click="$emit('close')"></button>
        </div>
    `, 
});

Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                    <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
                </li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    data() {
        return { tabs: [] };
    },
    mounted() {
        console.log(this.$children);
    },
    created() {
        this.tabs = this.$children;
        
    },
    methods: {
        selectTab(selectedTab) {
            //alert('selecting');
            this.tabs.forEach(tab => {
                //tab.isActive = (tab.name === selectedTab.name);
                tab.isActive = false;
                if(tab == selectedTab)
                    tab.isActive = true;
            });
        }
        
    }
});

Vue.component('tab', {
    props: {
        name: {required: true},
        selected: {default: false}
    },
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    mounted() {
        this.isActive = this.selected;
    },
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,
});


var vm = new Vue({
    el: "#root",
    data: {
        showModal: false
    }
});